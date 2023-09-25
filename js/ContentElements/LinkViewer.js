import { ContentElementBase } from './ContentElementBase.js';

export class LinkViewer extends ContentElementBase {
    makeContentElement(contentData) {
        const frame = document.createElement('img');
        frame.classList.add('grey-frame');
        frame.style.cursor = 'pointer';
        // frame.style.width = '90%';
        // frame.style.height = '50%';
        frame.style.width = '90%';
        frame.style.objectFit = 'cover';
        frame.style.margin = '30px 0px';
        frame.src = contentData.imgSrc;

        frame.addEventListener('click', () => {
            window.open(contentData.pdfSrc, '_blank');
        });

        return frame;
    }
}