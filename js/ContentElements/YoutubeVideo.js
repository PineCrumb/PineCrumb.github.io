import { ContentElementBase } from './ContentElementBase.js';

export class YoutubeVideo extends ContentElementBase {
    makeContentElement(contentData) {
        const iframe = document.createElement('iframe');
        iframe.classList.add('project-content-media-content', 'grey-frame');
        iframe.style.position = 'relative';
        
        iframe.title = 'YouTube Video Player';
        iframe.src = contentData.src;
        // iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        return iframe;
    }
}