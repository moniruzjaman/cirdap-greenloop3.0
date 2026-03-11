// Media configuration for bilingual support
// Language-aware media paths

export type Language = 'en' | 'bn'

interface MediaConfig {
  videos: {
    main: {
      en: string
      bn: string
    }
    farmerCard: {
      en: string
      bn: string
    }
  }
  presentations: {
    main: {
      en: string
      bn: string
    }
    ecosystem: {
      en: string
      bn: string
    }
  }
  infographics: {
    main: {
      en: string
      bn: string
    }
  }
  documents: {
    proposal: {
      en: string
      bn: string
    }
    profile: {
      en: string
      bn: string
    }
    cirdapForm: string // Same for both languages
  }
  banners: {
    main: string // Same for both languages
  }
}

export const mediaConfig: MediaConfig = {
  videos: {
    main: {
      en: '/media/greenloop_video_en.mp4',
      bn: '/media/greenloop_video_bn.mp4'
    },
    farmerCard: {
      en: '/media/farmer_card_video_en.mp4',
      bn: '/media/farmer_card_video_bn.mp4'
    }
  },
  presentations: {
    main: {
      en: '/media/GreenLoop_Presentation_en.pptx',
      bn: '/media/GreenLoop_Presentation_bn.pptx'
    },
    ecosystem: {
      en: '/media/GreenLoop_Ecosystem_en.pptx',
      bn: '/media/GreenLoop_Ecosystem_bn.pptx'
    }
  },
  infographics: {
    main: {
      en: '/media/greenloop_infographic_en.png',
      bn: '/media/greenloop_infographic_bn.png'
    }
  },
  documents: {
    proposal: {
      en: '/media/GreenLoop_Proposal_en.docx',
      bn: '/media/GreenLoop_Proposal_bn.docx'
    },
    profile: {
      en: '/media/Team_Profile_en.docx',
      bn: '/media/Team_Profile_bn.docx'
    },
    cirdapForm: '/media/CIRDAP_Proposal.pdf'
  },
  banners: {
    main: '/media/greenloop_banner.png'
  }
}

// Helper function to get media by language
export function getMedia<T extends { en: string; bn: string }>(
  media: T,
  lang: Language
): string {
  return media[lang]
}

// Video info by language
export const videoInfo = {
  en: {
    title: 'GreenLoop 3.0 - Complete Presentation',
    description: 'Complete project presentation for CIRDAP Innovation Challenge 2026',
    tags: {
      duration: 'Full Presentation',
      language: 'English',
      quality: 'HD'
    }
  },
  bn: {
    title: 'গ্রীনলুপ ৩.০ - সম্পূর্ণ প্রেজেন্টেশন',
    description: 'CIRDAP ইনোভেশন চ্যালেঞ্জ ২০২৬ এর জন্য সম্পূর্ণ প্রজেক্ট প্রেজেন্টেশন',
    tags: {
      duration: 'সম্পূর্ণ প্রেজেন্টেশন',
      language: 'বাংলা',
      quality: 'HD'
    }
  }
}

// Document info by language
export const documentInfo = {
  en: {
    proposal: {
      title: 'Main Proposal (DOCX)',
      description: 'GreenLoop 3.0 - Healing the Earth, Securing the Smile - A Blockchain-Driven Circular Ecosystem'
    },
    cirdapForm: {
      title: 'CIRDAP Form (PDF)',
      description: 'Official CIRDAP submission form and competition entry'
    },
    presentation: {
      title: 'Presentation (PPTX)',
      description: 'Blockchain & Circular Agriculture presentation for stakeholders'
    },
    ecosystem: {
      title: 'Ecosystem (PPTX)',
      description: 'GreenLoop 3.0 ecosystem architecture and implementation'
    },
    profile: {
      title: 'Team Profile (DOCX)',
      description: 'Project lead biography and professional background'
    },
    infographic: {
      title: 'Infographic (PNG)',
      description: 'Visual summary of GreenLoop 3.0 ecosystem'
    }
  },
  bn: {
    proposal: {
      title: 'মূল প্রপোজাল (DOCX)',
      description: 'GreenLoop 3.0 - পৃথিবীকে সুস্থ করুন, হাসি নিশ্চিত করুন - একটি ব্লকচেইন-চালিত সার্কুলার ইকোসিস্টেম'
    },
    cirdapForm: {
      title: 'CIRDAP ফর্ম (PDF)',
      description: 'অফিসিয়াল CIRDAP জমা ফর্ম এবং প্রতিযোগিতা এন্ট্রি'
    },
    presentation: {
      title: 'প্রেজেন্টেশন (PPTX)',
      description: 'স্টেকহোল্ডারদের জন্য ব্লকচেইন ও সার্কুলার কৃষি প্রেজেন্টেশন'
    },
    ecosystem: {
      title: 'ইকোসিস্টেম (PPTX)',
      description: 'GreenLoop 3.0 ইকোসিস্টেম আর্কিটেকচার এবং বাস্তবায়ন'
    },
    profile: {
      title: 'টিম প্রোফাইল (DOCX)',
      description: 'প্রজেক্ট লিড জীবনী এবং পেশাদার পটভূমি'
    },
    infographic: {
      title: 'ইনফোগ্রাফিক (PNG)',
      description: 'GreenLoop 3.0 ইকোসিস্টেমের ভিজ্যুয়াল সারাংশ'
    }
  }
}
