// main.js - Core Frontend Logic for GreenLoop 3.0

// 1. Utility: Share Resource
async function shareResource(title, url) {
    if (navigator.share) {
        try {
            await navigator.share({
                title: title,
                text: 'Check out this resource from GreenLoop 3.0',
                url: window.location.origin + url
            });
        } catch (err) { console.error('Error sharing:', err); }
    } else {
        const fullUrl = window.location.origin + url;
        navigator.clipboard.writeText(fullUrl);
        alert('Link copied to clipboard!');
    }
}

// 2. Utility: Read Aloud (Accessibility)
function readAloud(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stop current speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = 1;
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

// 3. Homepage Resource Loader
async function loadHomepageResources() {
    const grid = document.getElementById('homepageResourceGrid');
    if (!grid) return;

    try {
        const response = await fetch('/api/resources');
        const resources = await response.json();

        // Organize resources into featured vs regular if needed, 
        // for now, display all with professional cards
        grid.innerHTML = resources.map(res => {
            const iconClass = res.type === 'pdf' ? 'fas fa-file-pdf text-red' :
                res.type === 'image' ? 'fas fa-image text-blue' :
                    res.type === 'video' ? 'fas fa-video text-purple' :
                        res.type === 'ppt' ? 'fas fa-file-powerpoint text-orange' :
                            'fas fa-file text-gray';

            return `
            <div class="resource-card" role="article">
                <div class="card-icon" aria-hidden="true">
                    <i class="${iconClass}"></i>
                </div>
                <div class="card-body">
                    <h3>${res.title}</h3>
                    <span class="category">${res.category}</span>
                    <div class="card-actions">
                        <a href="${res.url}" download="${res.filename}" class="btn-action" title="Download">
                            <i class="fas fa-download"></i>
                        </a>
                        <button onclick="shareResource('${res.title}', '${res.url}')" class="btn-action" title="Share">
                            <i class="fas fa-share-alt"></i>
                        </button>
                        <button onclick="readAloud('${res.title}')" class="btn-action" title="Read Aloud">
                            <i class="fas fa-volume-up"></i>
                        </button>
                        <a href="${res.url}" target="_blank" class="btn-action" title="Expand">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
        `}).join('');
    } catch (error) {
        grid.innerHTML = '<p>Offline or Error loading resources.</p>';
    }
}
