import { ContentElementBase } from './ContentElementBase.js';

export class LocalVideo extends ContentElementBase {
    makeContentElement(contentData) {
        const container = document.createElement('div');
        container.classList.add('video-container');
        container.classList.add('grey-frame')
        container.style.position = 'relative';
        container.style.width = '390px';
        container.style.height = '220px';
        container.style.margin = '30px auto';

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

        const videoFrame = document.createElement('video');
        videoFrame.controls = true;
        videoFrame.style.width = '100%';
        videoFrame.style.height = '100%';
        videoFrame.style.overflow = 'hidden';
        videoFrame.style.display = 'none';

        const source = document.createElement('source');
        source.src = contentData.videoSrc;
        source.type = 'video/mp4';
        videoFrame.appendChild(source);


        // const videoFrame = document.createElement('iframe');
        // videoFrame.src = contentData.videoSrc;
        // videoFrame.frameBorder = '0';
        // videoFrame.allowFullscreen = true;
        // videoFrame.style.width = '100%';
        // videoFrame.style.height = '100%';
        // videoFrame.style.overflow = 'hidden';
        // videoFrame.style.display = 'none';
        // videoFrame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    

        thumbnailImg.addEventListener('click', function() {
            videoFrame.style.display = 'block';
            thumbnailImg.style.display = 'none';
            playButton.style.display = 'none';
            videoFrame.play();
        }, true);

        container.appendChild(videoFrame);

        return container;
    }
}
