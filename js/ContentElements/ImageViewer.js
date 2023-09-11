import { ContentElementBase } from './ContentElementBase.js';

export class ImageViewer extends ContentElementBase {
    makeContentElement(contentData) {
        const img = document.createElement('img');
        img.classList.add('project-content-media-content', 'grey-frame');
        img.src = contentData.src;
        return img;
    }
    setupContentElement(contentData) {
        this.element.addEventListener('mouseenter', () => {
            if (!isUsingMouse) return;
            
        });
    
        this.element.addEventListener('mouseleave', () => {
            
        });
        
        this.element.addEventListener('click', () => {

        });
    }
}