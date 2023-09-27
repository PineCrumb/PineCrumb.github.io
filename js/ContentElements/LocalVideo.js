import { ContentElementBase } from './ContentElementBase.js';

export class LocalVideo extends ContentElementBase {
    makeContentElement(contentData) {
        const container = document.createElement('div');
        container.classList.add('video-container');
        container.classList.add('grey-frame')
        container.style.position = 'relative';
        container.style.width = '390px';
        container.style.height = '220px';

        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = contentData.thumbnailSrc;
        thumbnailImg.alt = 'Video Thumbnail';
        thumbnailImg.style.width = '100%';
        thumbnailImg.style.height = '100%';
        thumbnailImg.style.overflow = 'hidden';
        thumbnailImg.style.cursor = 'pointer';
        container.appendChild(thumbnailImg);

        const playButton = document.createElement('img');
        playButton.classList.add('select-disable');
        playButton.src = 'assets/content-elements/button-local-video-play.svg';
        playButton.style.width = '76px';
        playButton.style.position = 'absolute'
        playButton.style.position = 'absolute';
        playButton.style.left = '50%';
        playButton.style.top = '50%';
        playButton.style.transform = 'translate(-50%, -50%)';
        playButton.style.zIndex = '1';
        container.appendChild(playButton);

        const iframe = document.createElement('iframe');
        iframe.src = contentData.videoSrc;
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        container.style.overflow = 'hidden';
        iframe.style.display = 'none';

        thumbnailImg.addEventListener('click', function() {
            iframe.style.display = 'block';
            thumbnailImg.style.display = 'none';
            playButton.style.display = 'none';
        });

        container.appendChild(iframe);

        return container;
    }
}
