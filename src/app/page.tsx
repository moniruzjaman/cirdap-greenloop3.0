'use client'

import { useState, useEffect, useRef } from 'react'

// Language type
type Language = 'en' | 'bn'

// Translation content
const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      simulator: 'Simulator',
      knowledgeMap: 'Knowledge Map',
      video: 'Video',
      documents: 'Documents',
      team: 'Team'
    },
    // Hero Section
    hero: {
      badge: 'CIRDAP Innovation Challenge 2026 Finalist',
      title: 'GreenLoop',
      version: '3.0',
      subtitle: 'Efficiency-by-Design for a Circular Future',
      tagline: 'Healing the Earth, Securing the Smile',
      stats: [
        { icon: '💰', value: '$220B', label: 'Annual Savings Potential' },
        { icon: '🍃', value: '3,500 kg', label: 'CO2 Offset per Unit' },
        { icon: '♻️', value: '100%', label: 'Circular Bio-Ecosystem' }
      ],
      cta1: 'Try Simulator',
      cta2: 'Watch Video'
    },
    // Theme Banner
    theme: {
      label: 'Competition Theme',
      title: 'LDC Graduation & Circular Economy',
      description: 'Addressing the 4.0% GDP loss from agricultural inefficiencies'
    },
    // Simulator Section
    simulator: {
      badge: 'Interactive Impact Simulator',
      title: 'GreenLoop 3.0 Impact Simulator',
      subtitle: 'Input your land data and see the circular impact',
      calculatorTitle: 'Impact Calculator',
      landLabel: 'Your Land Size (Bigha):',
      results: {
        fertilizer: { label: 'Fertilizer Savings', desc: 'ML-based Optimization' },
        carbon: { label: 'CO2 Offset', desc: 'Universal Carbon Credit' },
        yield: { label: 'Yield Increase', desc: 'Digital Precision Farming' },
        arsenic: { label: 'Arsenic Reduction', desc: '3F4D+MD Protocol' }
      },
      info: 'This data is an estimate based on GreenLoop 3.0 pilot projects and scientific research.',
      legendA: 'Layer A: Physical',
      legendB: 'Layer B: Digital'
    },
    // Node Data
    nodes: {
      central: {
        title: 'GreenLoop 3.0',
        icon: '🌱',
        description: 'An integrated circular economy solution that addresses the LDC graduation challenge through digital transformation of Bangladesh\'s agricultural sector.',
        stats: [
          { label: 'Annual Savings', value: '$220B' },
          { label: 'CO2 Offset', value: '3,500 kg/unit' },
          { label: 'Circular System', value: '100%' }
        ]
      },
      sensor: {
        title: 'Soil Sensor',
        icon: '📡',
        description: '12-Parameter Handheld Soil Sensor with ML-based estimation for NPK, SOM/SOC, and micronutrients measurement.',
        stats: [
          { label: 'Yield Increase', value: '20-32%' },
          { label: 'Fertilizer Savings', value: '30%' },
          { label: 'Parameters', value: '12' }
        ]
      },
      arsenic: {
        title: 'Arsenic Shield',
        icon: '💧',
        description: '3F4D+MD Protocol - Arsenic immobilization through Iron Oxide re-precipitation. Works in 61 affected districts.',
        stats: [
          { label: 'Arsenic Reduction', value: '9-21%' },
          { label: 'Water Savings', value: '57%' },
          { label: 'Affected Districts', value: '61' }
        ]
      },
      solar: {
        title: 'Solar Cold Chain',
        icon: '☀️',
        description: '10-ton Hybrid Mini Cold Storage powered by solar. Reduces operating costs by up to 70%.',
        stats: [
          { label: 'BCR', value: '> 3.0' },
          { label: 'IRR', value: '14.47%' },
          { label: 'Cost Reduction', value: '70%' }
        ]
      },
      blockchain: {
        title: 'Blockchain',
        icon: '🔗',
        description: 'Hyperledger Blockchain - Ensures immutable data sovereignty. SHA-256 hash for on-chain integrity.',
        stats: [
          { label: 'Encryption', value: 'SHA-256' },
          { label: 'Platform', value: 'Hyperledger' },
          { label: 'Security', value: '100%' }
        ]
      },
      farmer: {
        title: 'Farmer Card',
        icon: '👨‍🌾',
        description: 'Digital Farmer Identity Card - All transactions, subsidies, and training records in one place.',
        stats: [
          { label: 'Target Farmers', value: '10M+' },
          { label: 'Digital Services', value: '50+' },
          { label: 'Instant Access', value: '24/7' }
        ]
      },
      youth: {
        title: 'Youth Employment',
        icon: '🎓',
        description: 'NEET youth trained as "Digital Facilitators" for employment in Agro-Service Centres.',
        stats: [
          { label: 'New Jobs', value: '50,000' },
          { label: 'Training Centers', value: '100+' },
          { label: 'Age Range', value: '18-35' }
        ]
      }
    },
    // Knowledge Map Section
    knowledgeMap: {
      badge: 'Interactive Knowledge Map',
      title: 'GreenLoop 3.0 Ecosystem',
      subtitle: 'Click on any node to explore details',
      chapters: [
        {
          chapter: '01',
          title: 'Problem: The Challenge',
          description: 'Bangladesh loses 4.0% of GDP annually from agricultural inefficiencies. With LDC graduation in 2026, we face a critical need for transformation.',
          stat: '$220 Billion',
          statLabel: 'Annual economic opportunity',
          color: 'red'
        },
        {
          chapter: '02',
          title: 'Solution: Our Approach',
          description: 'GreenLoop 3.0 introduces Efficiency-by-Design - a dual-layer system combining physical circular farming with blockchain governance.',
          stat: '100%',
          statLabel: 'Circular Bio-Ecosystem',
          color: 'green'
        },
        {
          chapter: '03',
          title: 'Impact: The Result',
          description: 'Empowering 10 million farmers with technology, creating 50,000 youth jobs, and achieving climate resilience for 61 arsenic-affected districts.',
          stat: '3,500 kg',
          statLabel: 'CO2 offset per unit',
          color: 'blue'
        }
      ]
    },
    // Video Section
    video: {
      badge: 'Multimedia',
      title: 'Project Video Presentation',
      subtitle: 'Watch our comprehensive video explaining the GreenLoop 3.0 solution',
      videoTitle: 'GreenLoop 3.0 - Complete Presentation',
      videoDesc: 'Complete project presentation for CIRDAP Innovation Challenge 2026',
      tags: {
        duration: 'Full Presentation',
        language: 'Bengali',
        quality: 'HD'
      }
    },
    // Documents Section
    documents: {
      badge: 'Documentation',
      title: 'Project Documents',
      subtitle: 'View and download comprehensive proposal documents',
      items: [
        {
          icon: '📝',
          title: 'Main Proposal (DOCX)',
          description: 'GreenLoop 3.0 - Healing the Earth, Securing the Smile - A Blockchain-Driven Circular Ecosystem',
          file: '/media/GreenLoop_Proposal.docx',
          color: 'blue',
          size: 'Word Document'
        },
        {
          icon: '📊',
          title: 'CIRDAP Form (PDF)',
          description: 'Official CIRDAP submission form and competition entry',
          file: '/media/CIRDAP_Proposal.pdf',
          color: 'red',
          size: 'PDF Document'
        },
        {
          icon: '📽️',
          title: 'Presentation (PPTX)',
          description: 'Blockchain & Circular Agriculture presentation for stakeholders',
          file: '/media/GreenLoop_Presentation.pptx',
          color: 'orange',
          size: 'PowerPoint'
        },
        {
          icon: '👤',
          title: 'Team Profile (DOCX)',
          description: 'Project lead biography and professional background',
          file: '/media/Team_Profile.docx',
          color: 'purple',
          size: 'Word Document'
        },
        {
          icon: '🖼️',
          title: 'Infographic (PNG)',
          description: 'Visual summary of GreenLoop 3.0 ecosystem',
          file: '/media/greenloop_infographic.png',
          color: 'green',
          size: 'Image'
        }
      ],
      download: 'Download'
    },
    // Technology Section
    technology: {
      badge: 'Technology',
      title: 'Solution Architecture',
      subtitle: 'A Dual-Layer System: Physical Circularity & Digital Governance',
      layerA: {
        badge: 'Layer A',
        title: 'Physical Circular Farming',
        items: [
          {
            icon: '📡',
            title: '12-Parameter Soil Sensor',
            description: 'Handheld device measuring NPK, SOM/SOC, and micronutrients via ML estimation',
            stats: ['↑ 20-32% Yield', '↓ 30% Fertilizer']
          },
          {
            icon: '💧',
            title: 'Arsenic Shield (3F4D+MD)',
            description: 'Immobilizes arsenic via Iron Oxide re-precipitation in 61 affected districts',
            stats: ['↓ 9-21% Arsenic', '↓ 57% Water']
          },
          {
            icon: '☀️',
            title: 'Solar Cold Chain',
            description: '10-ton hybrid mini cold storage with 70% reduced operating costs',
            stats: ['BCR > 3.0', 'IRR 14.47%']
          }
        ]
      },
      layerB: {
        badge: 'Layer B',
        title: 'Blockchain Governance',
        offChain: {
          title: 'Off-Chain (PostgreSQL)',
          desc: 'Source of Truth for Details'
        },
        onChain: {
          title: 'On-Chain (Hyperledger)',
          desc: 'Source of Truth for Integrity'
        }
      }
    },
    // Team Section
    team: {
      badge: 'Team',
      title: 'Project Team',
      subtitle: 'Meet the innovators behind GreenLoop 3.0',
      lead: {
        name: 'Abu Md Moniruzaman',
        role: 'Project Lead & Developer',
        description: 'Additional Deputy Director (Horticulture), Department of Agricultural Extension (DAE), Kurigram, Bangladesh. 10+ Years in Agricultural Extension & Digital Innovation.',
        github: 'View GitHub'
      }
    },
    // Footer
    footer: {
      description: 'Efficiency-by-Design for a Circular Future. CIRDAP Innovation Challenge 2026 Finalist Project.',
      quickLinks: 'Quick Links',
      theme: 'Competition Theme',
      themeTitle: 'LDC Graduation & Circular Economy',
      themeDesc: 'CIRDAP-REEDS Rural Development Innovation Challenge 2026',
      copyright: '© 2026 GreenLoop 3.0 | CIRDAP Innovation Challenge Finalist',
      tagline: 'Healing the Earth, Securing the Smile'
    }
  },
  bn: {
    // Navigation
    nav: {
      home: 'হোম',
      simulator: 'সিমুলেটর',
      knowledgeMap: 'নলেজ ম্যাপ',
      video: 'ভিডিও',
      documents: 'ডকুমেন্ট',
      team: 'টিম'
    },
    // Hero Section
    hero: {
      badge: 'CIRDAP ইনোভেশন চ্যালেঞ্জ ২০২৬ ফাইনালিস্ট',
      title: 'গ্রীনলুপ',
      version: '৩.০',
      subtitle: 'এফিশিয়েন্সি-বাই-ডিজাইন ফর আ সার্কুলার ফিউচার',
      tagline: 'পৃথিবীকে সুস্থ করুন, হাসি নিশ্চিত করুন',
      stats: [
        { icon: '💰', value: '$২২০B', label: 'বার্ষিক সঞ্চয় সম্ভাবনা' },
        { icon: '🍃', value: '৩,৫০০ kg', label: 'CO2 অফসেট প্রতি ইউনিট' },
        { icon: '♻️', value: '১০০%', label: 'সার্কুলার বায়ো-ইকোসিস্টেম' }
      ],
      cta1: 'সিমুলেটর দেখুন',
      cta2: 'ভিডিও দেখুন'
    },
    // Theme Banner
    theme: {
      label: 'প্রতিযোগিতার থিম',
      title: 'LDC গ্র্যাজুয়েশন ও সার্কুলার ইকোনমি',
      description: 'কৃষি অদক্ষতা থেকে ৪.০% GDP ক্ষতি মোকাবেলা'
    },
    // Simulator Section
    simulator: {
      badge: 'ইন্টারঅ্যাক্টিভ ইমপ্যাক্ট সিমুলেটর',
      title: 'GreenLoop 3.0 ইমপ্যাক্ট সিমুলেটর',
      subtitle: 'আপনার জমির ডাটা ইনপুট দিন এবং সার্কুলার ইমপ্যাক্ট দেখুন',
      calculatorTitle: 'ইমপ্যাক্ট ক্যালকুলেটর',
      landLabel: 'আপনার জমির পরিমাণ (বিঘা):',
      results: {
        fertilizer: { label: 'সার সাশ্রয়', desc: 'ML ভিত্তিক অপ্টিমাইজেশন' },
        carbon: { label: 'CO2 অফসেট', desc: 'সার্বজনীন কার্বন ক্রেডিট' },
        yield: { label: 'ফলন বৃদ্ধি', desc: 'ডিজিটাল প্রিসিশন ফার্মিং' },
        arsenic: { label: 'আর্সেনিক হ্রাস', desc: '3F4D+MD প্রোটোকল' }
      },
      info: 'এই ডাটাটি GreenLoop 3.0 এর পাইলট প্রজেক্ট এবং বৈজ্ঞানিক গবেষণার ওপর ভিত্তি করে তৈরি একটি প্রাক্কলন।',
      legendA: 'Layer A: ফিজিক্যাল',
      legendB: 'Layer B: ডিজিটাল'
    },
    // Node Data
    nodes: {
      central: {
        title: 'GreenLoop 3.0',
        icon: '🌱',
        description: 'একটি সমন্বিত সার্কুলার ইকোনমি সলিউশন যা বাংলাদেশের কৃষি খাতকে ডিজিটাল রূপান্তরের মাধ্যমে LDC গ্র্যাজুয়েশনের চ্যালেঞ্জ মোকাবেলায় কাজ করে।',
        stats: [
          { label: 'বার্ষিক সঞ্চয়', value: '$220B' },
          { label: 'CO2 অফসেট', value: '3,500 kg/unit' },
          { label: 'সার্কুলার সিস্টেম', value: '100%' }
        ]
      },
      sensor: {
        title: 'সয়েল সেন্সর',
        icon: '📡',
        description: '12-প্যারামিটার হ্যান্ডহেল্ড সয়েল সেন্সর - NPK, SOM/SOC, এবং মাইক্রোনিউট্রিয়েন্ট মাপার জন্য ML ভিত্তিক এস্টিমেশন।',
        stats: [
          { label: 'ফলন বৃদ্ধি', value: '20-32%' },
          { label: 'সার সাশ্রয়', value: '30%' },
          { label: 'প্যারামিটার', value: '12টি' }
        ]
      },
      arsenic: {
        title: 'আর্সেনিক শিল্ড',
        icon: '💧',
        description: '3F4D+MD প্রোটোকল - আর্সেনিক ইমোবিলাইজেশন Iron Oxide রি-প্রেসিপিটেশনের মাধ্যমে। 61টি আক্রান্ত জেলায় কাজ করবে।',
        stats: [
          { label: 'আর্সেনিক হ্রাস', value: '9-21%' },
          { label: 'পানি সাশ্রয়', value: '57%' },
          { label: 'আক্রান্ত জেলা', value: '61টি' }
        ]
      },
      solar: {
        title: 'সোলার কোল্ড চেইন',
        icon: '☀️',
        description: '10-টন হাইব্রিড মিনি কোল্ড স্টোরেজ সোলার পাওয়ারড। 70% পর্যন্ত অপারেটিং খরচ কমায়।',
        stats: [
          { label: 'BCR', value: '> 3.0' },
          { label: 'IRR', value: '14.47%' },
          { label: 'খরচ হ্রাস', value: '70%' }
        ]
      },
      blockchain: {
        title: 'ব্লকচেইন',
        icon: '🔗',
        description: 'Hyperledger ব্লকচেইন - অপরিবর্তনীয় ডেটা সার্বভৌমত্ব নিশ্চিত করে। SHA-256 হ্যাশ দিয়ে অন-চেইন ইন্টিগ্রিটি।',
        stats: [
          { label: 'এনক্রিপশন', value: 'SHA-256' },
          { label: 'প্ল্যাটফর্ম', value: 'Hyperledger' },
          { label: 'নিরাপত্তা', value: '100%' }
        ]
      },
      farmer: {
        title: 'কৃষক কার্ড',
        icon: '👨‍🌾',
        description: 'ডিজিটাল কৃষক পরিচয় কার্ড - সকল লেনদেন, সাবসিডি এবং প্রশিক্ষণের রেকর্ড এক জায়গায়।',
        stats: [
          { label: 'লক্ষ্য কৃষক', value: '10M+' },
          { label: 'ডিজিটাল সার্ভিস', value: '৫০+' },
          { label: 'তাৎক্ষণিক অ্যাক্সেস', value: '24/7' }
        ]
      },
      youth: {
        title: 'যুব কর্মসংস্থান',
        icon: '🎓',
        description: 'NEET যুবকদের "ডিজিটাল ফ্যাসিলিটেটর" হিসেবে প্রশিক্ষণ দিয়ে আগ্রো-সার্ভিস সেন্টারে কর্মসংস্থান।',
        stats: [
          { label: 'নতুন চাকরি', value: '50,000' },
          { label: 'প্রশিক্ষণ কেন্দ্র', value: '100+' },
          { label: 'বয়স সীমা', value: '18-35' }
        ]
      }
    },
    // Knowledge Map Section
    knowledgeMap: {
      badge: 'ইন্টারঅ্যাক্টিভ নলেজ ম্যাপ',
      title: 'GreenLoop 3.0 ইকোসিস্টেম',
      subtitle: 'বিস্তারিত জানতে যেকোনো নোডে ক্লিক করুন',
      chapters: [
        {
          chapter: '০১',
          title: 'সমস্যা: চ্যালেঞ্জ',
          description: 'বাংলাদেশ কৃষি অদক্ষতার কারণে বার্ষিক 4.0% GDP হারাচ্ছে। 2026 সালে LDC গ্র্যাজুয়েশনের সাথে, আমরা রূপান্তরের সংকটপূর্ণ প্রয়োজনের মুখোমুখি।',
          stat: '$220 Billion',
          statLabel: 'বার্ষিক অর্থনৈতিক সুযোগ',
          color: 'red'
        },
        {
          chapter: '০২',
          title: 'সমাধান: আমাদের পদ্ধতি',
          description: 'GreenLoop 3.0 এফিশিয়েন্সি-বাই-ডিজাইন পরিচয় করিয়ে দেয় - ফিজিক্যাল সার্কুলার ফার্মিং এবং ব্লকচেইন গভর্নেন্স সংযোজিত দ্বৈত-স্তর ব্যবস্থা।',
          stat: '100%',
          statLabel: 'সার্কুলার বায়ো-ইকোসিস্টেম',
          color: 'green'
        },
        {
          chapter: '০৩',
          title: 'প্রভাব: ফলাফল',
          description: '10 মিলিয়ন কৃষককে প্রযুক্তি দিয়ে ক্ষমতায়িত করা, 50,000 যুব চাকরি তৈরি, এবং 61টি আর্সেনিক আক্রান্ত জেলায় জলবায়ু স্থিতিস্থাপকতা অর্জন।',
          stat: '3,500 kg',
          statLabel: 'CO2 অফসেট প্রতি ইউনিট',
          color: 'blue'
        }
      ]
    },
    // Video Section
    video: {
      badge: 'মাল্টিমিডিয়া',
      title: 'প্রজেক্ট ভিডিও প্রেজেন্টেশন',
      subtitle: 'GreenLoop 3.0 সমাধান ব্যাখ্যাকারী আমাদের বিস্তৃত ভিডিও দেখুন',
      videoTitle: 'গ্রীনলুপ ৩.০ - GreenLoop 3.0',
      videoDesc: 'CIRDAP ইনোভেশন চ্যালেঞ্জ ২০২৬ এর জন্য সম্পূর্ণ প্রজেক্ট প্রেজেন্টেশন',
      tags: {
        duration: 'সম্পূর্ণ প্রেজেন্টেশন',
        language: 'বাংলা',
        quality: 'HD'
      }
    },
    // Documents Section
    documents: {
      badge: 'ডকুমেন্টেশন',
      title: 'প্রজেক্ট ডকুমেন্টস',
      subtitle: 'বিস্তৃত প্রপোজাল ডকুমেন্ট দেখুন এবং ডাউনলোড করুন',
      items: [
        {
          icon: '📝',
          title: 'মূল প্রপোজাল (DOCX)',
          description: 'GreenLoop 3.0 - পৃথিবীকে সুস্থ করুন, হাসি নিশ্চিত করুন - একটি ব্লকচেইন-চালিত সার্কুলার ইকোসিস্টেম',
          file: '/media/GreenLoop_Proposal.docx',
          color: 'blue',
          size: 'Word ডকুমেন্ট'
        },
        {
          icon: '📊',
          title: 'CIRDAP ফর্ম (PDF)',
          description: 'অফিসিয়াল CIRDAP জমা ফর্ম এবং প্রতিযোগিতা এন্ট্রি',
          file: '/media/CIRDAP_Proposal.pdf',
          color: 'red',
          size: 'PDF ডকুমেন্ট'
        },
        {
          icon: '📽️',
          title: 'প্রেজেন্টেশন (PPTX)',
          description: 'স্টেকহোল্ডারদের জন্য ব্লকচেইন ও সার্কুলার কৃষি প্রেজেন্টেশন',
          file: '/media/GreenLoop_Presentation.pptx',
          color: 'orange',
          size: 'PowerPoint'
        },
        {
          icon: '👤',
          title: 'টিম প্রোফাইল (DOCX)',
          description: 'প্রজেক্ট লিড জীবনী এবং পেশাদার পটভূমি',
          file: '/media/Team_Profile.docx',
          color: 'purple',
          size: 'Word ডকুমেন্ট'
        },
        {
          icon: '🖼️',
          title: 'ইনফোগ্রাফিক (PNG)',
          description: 'GreenLoop 3.0 ইকোসিস্টেমের ভিজ্যুয়াল সারাংশ',
          file: '/media/greenloop_infographic.png',
          color: 'green',
          size: 'ছবি'
        }
      ],
      download: 'ডাউনলোড'
    },
    // Technology Section
    technology: {
      badge: 'প্রযুক্তি',
      title: 'সমাধান আর্কিটেকচার',
      subtitle: 'একটি দ্বৈত-স্তর ব্যবস্থা: ফিজিক্যাল সার্কুলারিটি ও ডিজিটাল গভর্নেন্স',
      layerA: {
        badge: 'Layer A',
        title: 'ফিজিক্যাল সার্কুলার ফার্মিং',
        items: [
          {
            icon: '📡',
            title: '12-প্যারামিটার সয়েল সেন্সর',
            description: 'ML এস্টিমেশনের মাধ্যমে NPK, SOM/SOC এবং মাইক্রোনিউট্রিয়েন্ট পরিমাপকারী হ্যান্ডহেল্ড ডিভাইস',
            stats: ['↑ 20-32% ফলন', '↓ 30% সার']
          },
          {
            icon: '💧',
            title: 'আর্সেনিক শিল্ড (3F4D+MD)',
            description: '61টি আক্রান্ত জেলায় Iron Oxide রি-প্রেসিপিটেশনের মাধ্যমে আর্সেনিক ইমোবিলাইজ করে',
            stats: ['↓ 9-21% আর্সেনিক', '↓ 57% পানি']
          },
          {
            icon: '☀️',
            title: 'সোলার কোল্ড চেইন',
            description: '70% কম অপারেটিং খরচ সহ 10-টন হাইব্রিড মিনি কোল্ড স্টোরেজ',
            stats: ['BCR > 3.0', 'IRR 14.47%']
          }
        ]
      },
      layerB: {
        badge: 'Layer B',
        title: 'ব্লকচেইন গভর্নেন্স',
        offChain: {
          title: 'অফ-চেইন (PostgreSQL)',
          desc: 'বিস্তারিতের জন্য সত্যের উৎস'
        },
        onChain: {
          title: 'অন-চেইন (Hyperledger)',
          desc: 'ইন্টিগ্রিটির জন্য সত্যের উৎস'
        }
      }
    },
    // Team Section
    team: {
      badge: 'টিম',
      title: 'প্রজেক্ট টিম',
      subtitle: 'GreenLoop 3.0 এর পেছনের উদ্ভাবকদের সাথে পরিচিত হোন',
      lead: {
        name: 'আবু মো: মনিরুজ্জামান',
        role: 'প্রজেক্ট লিড ও ডেভেলপার',
        description: 'উপ-পরিচালক (উদ্যান সম্প্রসারণ), কৃষি সম্প্রসারণ অধিদপ্তর (DAE), কুড়িগ্রাম, বাংলাদেশ। কৃষি সম্প্রসারণ ও ডিজিটাল উদ্ভাবনে 10+ বছরের অভিজ্ঞতা।',
        github: 'GitHub দেখুন'
      }
    },
    // Footer
    footer: {
      description: 'এফিশিয়েন্সি-বাই-ডিজাইন ফর আ সার্কুলার ফিউচার। CIRDAP ইনোভেশন চ্যালেঞ্জ ২০২৬ ফাইনালিস্ট প্রজেক্ট।',
      quickLinks: 'দ্রুত লিংক',
      theme: 'প্রতিযোগিতার থিম',
      themeTitle: 'LDC গ্র্যাজুয়েশন ও সার্কুলার ইকোনমি',
      themeDesc: 'CIRDAP-REEDS গ্রামীণ উন্নয়ন ইনোভেশন চ্যালেঞ্জ ২০২৬',
      copyright: '© ২০২৬ GreenLoop 3.0 | CIRDAP ইনোভেশন চ্যালেঞ্জ ফাইনালিস্ট',
      tagline: 'পৃথিবীকে সুস্থ করুন, হাসি নিশ্চিত করুন'
    }
  }
}

// Impact calculation constants
const IMPACT_CONSTANTS = {
  carbonPerBigha: 140,
  fertilizerSavings: 30,
  yieldIncrease: 20,
  arsenicReduction: 21
}

export default function Home() {
  const [lang, setLang] = useState<Language>('en')
  const [landSize, setLandSize] = useState(1)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Get current translations
  const t = translations[lang]
  const nodeData = t.nodes

  // Calculate impacts
  const impacts = {
    carbon: landSize * IMPACT_CONSTANTS.carbonPerBigha,
    fertilizer: IMPACT_CONSTANTS.fertilizerSavings,
    yield: IMPACT_CONSTANTS.yieldIncrease,
    arsenic: IMPACT_CONSTANTS.arsenicReduction
  }

  // Intersection Observer for sections
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Handle video play
  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setVideoPlaying(!videoPlaying)
    }
  }

  // Toggle language
  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'bn' : 'en')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="font-bold text-lg sm:text-xl text-gray-800">
                GreenLoop <span className="text-green-600">3.0</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {Object.entries(t.nav).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key === 'knowledgeMap' ? 'knowledge-map' : key}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === (key === 'knowledgeMap' ? 'knowledge-map' : key)
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {label}
                </a>
              ))}
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="ml-4 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-2"
              >
                <span>{lang === 'en' ? '🇬🇧' : '🇧🇩'}</span>
                <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
              {Object.entries(t.nav).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key === 'knowledgeMap' ? 'knowledge-map' : key}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === (key === 'knowledgeMap' ? 'knowledge-map' : key)
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {label}
                </a>
              ))}
              
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="w-full mt-4 px-4 py-3 rounded-lg text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                <span>{lang === 'en' ? '🇬🇧' : '🇧🇩'}</span>
                <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <span className="text-yellow-400">🏆</span>
            <span className="text-white/90 text-sm sm:text-base">{t.hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">{t.hero.version}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-3 sm:mb-4 font-light">
            {t.hero.subtitle}
          </p>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12">
            🌱 {t.hero.tagline} 🌱
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {t.hero.stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#simulator"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <span>🎯</span> {t.hero.cta1}
            </a>
            <a
              href="#video"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 transition-all"
            >
              <span>▶️</span> {t.hero.cta2}
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Theme Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white text-center">
            <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-2xl">
              🏅
            </div>
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-wider opacity-80">{t.theme.label}</p>
              <p className="text-sm sm:text-base font-semibold"><strong>{t.theme.title}</strong> - {t.theme.description}</p>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400">2026</div>
          </div>
        </div>
      </div>

      {/* Interactive Impact Simulator Section */}
      <section id="simulator" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>🎯</span> {t.simulator.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t.simulator.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {t.simulator.subtitle}
            </p>
          </div>

          {/* Simulator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-start">
            {/* Circular Map Visualization */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-green-100 p-4 sm:p-6 relative overflow-hidden min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full max-w-[320px] sm:max-w-[380px]">
                {/* Background Circle */}
                <circle cx="200" cy="200" r="150" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                
                {/* Animated Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: '1000',
                    strokeDashoffset: '1000',
                    animation: 'draw 3s linear infinite'
                  }}
                />
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#15803d" />
                  </linearGradient>
                </defs>

                {/* Node 1: Sensor (Top) */}
                <g 
                  transform="translate(200, 50)"
                  className="cursor-pointer hover:scale-110 transition-transform"
                  style={{ transformOrigin: 'center' }}
                  onClick={() => setSelectedNode('sensor')}
                >
                  <circle r="28" fill="#22c55e" className="drop-shadow-lg" />
                  <text x="0" y="5" textAnchor="middle" className="text-xl">📡</text>
                  <text x="0" y="50" textAnchor="middle" className="text-xs font-bold fill-green-800">{nodeData.sensor.title}</text>
                </g>

                {/* Node 2: Blockchain (Right) */}
                <g 
                  transform="translate(350, 200)"
                  className="cursor-pointer hover:scale-110 transition-transform"
                  style={{ transformOrigin: 'center' }}
                  onClick={() => setSelectedNode('blockchain')}
                >
                  <circle r="28" fill="#15803d" className="drop-shadow-lg" />
                  <text x="0" y="5" textAnchor="middle" className="text-xl">🔗</text>
                  <text x="0" y="50" textAnchor="middle" className="text-xs font-bold fill-green-800">{nodeData.blockchain.title}</text>
                </g>

                {/* Node 3: Solar Cold Chain (Bottom) */}
                <g 
                  transform="translate(200, 350)"
                  className="cursor-pointer hover:scale-110 transition-transform"
                  style={{ transformOrigin: 'center' }}
                  onClick={() => setSelectedNode('solar')}
                >
                  <circle r="28" fill="#22c55e" className="drop-shadow-lg" />
                  <text x="0" y="5" textAnchor="middle" className="text-xl">☀️</text>
                  <text x="0" y="50" textAnchor="middle" className="text-xs font-bold fill-green-800">{nodeData.solar.title}</text>
                </g>

                {/* Node 4: Marketplace (Left) */}
                <g 
                  transform="translate(50, 200)"
                  className="cursor-pointer hover:scale-110 transition-transform"
                  style={{ transformOrigin: 'center' }}
                  onClick={() => setSelectedNode('farmer')}
                >
                  <circle r="28" fill="#15803d" className="drop-shadow-lg" />
                  <text x="0" y="5" textAnchor="middle" className="text-xl">👨‍🌾</text>
                  <text x="0" y="50" textAnchor="middle" className="text-xs font-bold fill-green-800">{nodeData.farmer.title}</text>
                </g>

                {/* Center Logo */}
                <g 
                  transform="translate(200, 200)"
                  className="cursor-pointer"
                  onClick={() => setSelectedNode('central')}
                >
                  <circle r="45" fill="#f0fdf4" stroke="#22c55e" strokeWidth="3" className="drop-shadow-lg" />
                  <text x="0" y="-5" textAnchor="middle" className="text-2xl">🌱</text>
                  <text x="0" y="15" textAnchor="middle" className="text-sm font-bold fill-green-700">GL 3.0</text>
                </g>

                {/* Connecting Lines */}
                <line x1="200" y1="155" x2="200" y2="78" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                <line x1="245" y1="200" x2="322" y2="200" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                <line x1="200" y1="245" x2="200" y2="322" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                <line x1="155" y1="200" x2="78" y2="200" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
              </svg>

              {/* Legend */}
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 text-xs">
                <div className="flex items-center gap-1 bg-white/80 px-2 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span>{t.simulator.legendA}</span>
                </div>
                <div className="flex items-center gap-1 bg-white/80 px-2 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-700"></span>
                  <span>{t.simulator.legendB}</span>
                </div>
              </div>
            </div>

            {/* Impact Calculator */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-green-100 p-5 sm:p-8 border-t-4 border-t-green-500">
              <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">🧮</span>
                {t.simulator.calculatorTitle}
              </h3>

              {/* Input */}
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  {t.simulator.landLabel}
                </label>
                <input
                  type="number"
                  value={landSize}
                  onChange={(e) => setLandSize(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  step="1"
                  className="w-full p-4 rounded-xl border-2 border-green-100 focus:border-green-500 outline-none text-xl sm:text-2xl font-bold text-green-700 transition-all bg-white"
                />
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Result 1: Fertilizer */}
                <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                  <p className="text-xs sm:text-sm text-green-600 font-medium">{t.simulator.results.fertilizer.label}</p>
                  <p className="text-xl sm:text-2xl font-bold text-green-800">{impacts.fertilizer}%</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1">{t.simulator.results.fertilizer.desc}</p>
                </div>

                {/* Result 2: Carbon */}
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-xs sm:text-sm text-blue-600 font-medium">{t.simulator.results.carbon.label}</p>
                  <p className="text-xl sm:text-2xl font-bold text-blue-800">{impacts.carbon.toLocaleString()} Kg</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1">{t.simulator.results.carbon.desc}</p>
                </div>

                {/* Result 3: Yield */}
                <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
                  <p className="text-xs sm:text-sm text-orange-600 font-medium">{t.simulator.results.yield.label}</p>
                  <p className="text-xl sm:text-2xl font-bold text-orange-800">{impacts.yield}%+</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1">{t.simulator.results.yield.desc}</p>
                </div>

                {/* Result 4: Arsenic */}
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <p className="text-xs sm:text-sm text-purple-600 font-medium">{t.simulator.results.arsenic.label}</p>
                  <p className="text-xl sm:text-2xl font-bold text-purple-800">{impacts.arsenic}%</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1">{t.simulator.results.arsenic.desc}</p>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-6 sm:mt-8 p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 flex gap-3">
                <span className="text-xl shrink-0">ℹ️</span>
                <p className="text-xs sm:text-sm">{t.simulator.info}</p>
              </div>
            </div>
          </div>

          {/* Node Detail Popup */}
          {selectedNode && nodeData[selectedNode as keyof typeof nodeData] && (
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedNode(null)}
            >
              <div 
                className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedNode(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  ✕
                </button>
                
                <div className="text-center mb-6">
                  <div className="text-4xl sm:text-5xl mb-4">
                    {nodeData[selectedNode as keyof typeof nodeData].icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {nodeData[selectedNode as keyof typeof nodeData].title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                  {nodeData[selectedNode as keyof typeof nodeData].description}
                </p>
                
                <div className="grid grid-cols-3 gap-3">
                  {nodeData[selectedNode as keyof typeof nodeData].stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-3 bg-green-50 rounded-xl">
                      <div className="text-lg sm:text-xl font-bold text-green-700">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Knowledge Map Section */}
      <section id="knowledge-map" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>🗺️</span> {t.knowledgeMap.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t.knowledgeMap.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {t.knowledgeMap.subtitle}
            </p>
          </div>

          {/* Story Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {t.knowledgeMap.chapters.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-t-4 hover:shadow-xl transition-shadow"
                style={{ borderTopColor: item.color === 'red' ? '#ef4444' : item.color === 'green' ? '#22c55e' : '#3b82f6' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                    item.color === 'red' ? 'bg-red-500' : item.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    {item.chapter}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">{item.description}</p>
                <div className={`p-4 rounded-xl ${
                  item.color === 'red' ? 'bg-red-50' : item.color === 'green' ? 'bg-green-50' : 'bg-blue-50'
                }`}>
                  <div className={`text-2xl font-bold ${
                    item.color === 'red' ? 'text-red-600' : item.color === 'green' ? 'text-green-600' : 'text-blue-600'
                  }`}>{item.stat}</div>
                  <div className="text-sm text-gray-500">{item.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>🎬</span> {t.video.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t.video.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {t.video.subtitle}
            </p>
          </div>

          {/* Video Player */}
          <div className="bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/media/greenloop_banner.png"
                controls
              >
                <source src="/media/greenloop_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Video Info Bar */}
            <div className="bg-gray-900 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{t.video.videoTitle}</h3>
                  <p className="text-gray-400 text-sm">{t.video.videoDesc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm flex items-center gap-1">
                    <span>🕐</span> {t.video.tags.duration}
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm flex items-center gap-1">
                    <span>🗣️</span> {t.video.tags.language}
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm flex items-center gap-1">
                    <span>📺</span> {t.video.tags.quality}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>📄</span> {t.documents.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t.documents.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {t.documents.subtitle}
            </p>
          </div>

          {/* Document Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.documents.items.map((doc, idx) => (
              <a
                key={idx}
                href={doc.file}
                download
                className="bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-green-300 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 ${
                  doc.color === 'blue' ? 'bg-blue-100' : doc.color === 'red' ? 'bg-red-100' : doc.color === 'orange' ? 'bg-orange-100' : doc.color === 'purple' ? 'bg-purple-100' : 'bg-green-100'
                }`}>
                  {doc.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">{doc.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{doc.size}</span>
                  <span className="text-green-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t.documents.download} <span>→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>⚙️</span> {t.technology.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t.technology.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {t.technology.subtitle}
            </p>
          </div>

          {/* Layer A */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-bold">{t.technology.layerA.badge}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{t.technology.layerA.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {t.technology.layerA.items.map((tech, idx) => (
                <div key={idx} className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{tech.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{tech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.stats.map((stat, sidx) => (
                      <span key={sidx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Layer B */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-bold">{t.technology.layerB.badge}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{t.technology.layerB.title}</h3>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 p-6 sm:p-8 bg-blue-50 rounded-xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">🗄️</div>
                <div className="font-bold text-blue-700">{t.technology.layerB.offChain.title}</div>
                <div className="text-sm text-gray-500">{t.technology.layerB.offChain.desc}</div>
              </div>
              
              <div className="flex items-center gap-2 text-blue-500">
                <span className="text-2xl">⇄</span>
                <span className="px-3 py-1 bg-blue-500 text-white rounded text-xs font-mono">SHA-256</span>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">🔗</div>
                <div className="font-bold text-green-700">{t.technology.layerB.onChain.title}</div>
                <div className="text-sm text-gray-500">{t.technology.layerB.onChain.desc}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>👥</span> {t.team.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t.team.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {t.team.subtitle}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center max-w-lg w-full">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
                👤
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{t.team.lead.name}</h3>
              <p className="text-green-600 font-medium mb-3">{t.team.lead.role}</p>
              <p className="text-gray-500 text-sm mb-6">{t.team.lead.description}</p>
              <a
                href="https://github.com/moniruzjaman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                {t.team.lead.github}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌿</span>
                <span className="font-bold text-xl">
                  GreenLoop <span className="text-green-400">3.0</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base max-w-md">
                {t.footer.description}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#simulator" className="hover:text-green-400 transition-colors">{t.nav.simulator}</a></li>
                <li><a href="#knowledge-map" className="hover:text-green-400 transition-colors">{t.nav.knowledgeMap}</a></li>
                <li><a href="#video" className="hover:text-green-400 transition-colors">{t.nav.video}</a></li>
                <li><a href="#documents" className="hover:text-green-400 transition-colors">{t.nav.documents}</a></li>
              </ul>
            </div>

            {/* Theme */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">{t.footer.theme}</h4>
              <p className="text-yellow-400 font-medium mb-2">{t.footer.themeTitle}</p>
              <p className="text-gray-400 text-sm">{t.footer.themeDesc}</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-gray-500 text-sm">
              {t.footer.copyright}
            </p>
            <p className="text-gray-600 text-xs mt-2">
              🌱 {t.footer.tagline} 🌱
            </p>
          </div>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #22c55e;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #16a34a;
        }
      `}</style>
    </div>
  )
}
