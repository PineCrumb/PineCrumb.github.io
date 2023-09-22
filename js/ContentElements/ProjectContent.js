import { ContentElementBase } from './ContentElementBase.js';
import { YoutubeVideo } from './YoutubeVideo.js';
import {ImageViewer} from './ImageViewer.js';

let exposedContentElementClasses = {
    'YoutubeVideo': YoutubeVideo,
    'ImageViewer': ImageViewer
};

export class ProjectContent extends ContentElementBase {
    makeContentElement(contentData) {
        const divPageBlock = document.createElement("div");
        divPageBlock.className = "page-block";
    
        const projectContentDiv = document.createElement('div');
        projectContentDiv.classList.add('project-content', 'black-frame');
    
        const projectContentMediaDiv = document.createElement('div');
        projectContentMediaDiv.classList.add('project-content-media');
    
        const projectContentInfoDiv = document.createElement('div');
        projectContentInfoDiv.classList.add('project-content-info');
    
        const projectContentInfoTitleDiv = document.createElement('div');
        projectContentInfoTitleDiv.classList.add('project-content-info-title');
        projectContentInfoTitleDiv.innerText = contentData.title;
    
        const projectContentInfoDescDiv = document.createElement('div');
        projectContentInfoDescDiv.classList.add('project-content-info-desc');
        projectContentInfoDescDiv.innerHTML = contentData.desc;

        projectContentDiv.appendChild(projectContentMediaDiv);
        projectContentInfoDiv.appendChild(projectContentInfoTitleDiv);
        projectContentInfoDiv.appendChild(projectContentInfoDescDiv);
        projectContentDiv.appendChild(projectContentInfoDiv);
        divPageBlock.appendChild(projectContentDiv);
    
        this.projectContentMediaDiv = projectContentMediaDiv;
  
        // debug
        // setInterval(() => {
        //     projectContentInfoTitleDiv.innerText = projectContentMediaDiv.clientHeight;
        // }, 10);
        
        return divPageBlock;
    }

    setupContentElement(projectContentData) {
        for (const contentData of projectContentData.contentDatas) {
            let contentElementClass = exposedContentElementClasses[contentData.className];
            if (contentElementClass != null) {
                let contentElement = new contentElementClass(contentData);
                contentElement.setParent(this.projectContentMediaDiv);
            }
            else {
                console.log(`Unknown content element class: ${contentData.className}`);
            }
        }
    }
}
