import { ContentElementBase } from './ContentElementBase.js';

export class LinkViewer extends ContentElementBase {
    makeContentElement(contentData) {
        const link = document.createElement('a');
        link.style.cursor = 'pointer';
        link.style.width = '90%';
        link.style.objectFit = 'cover';
        link.style.margin = '30px 0px';
        link.href = contentData.pdfSrc;
        link.target = '_blank';

        const frame = document.createElement('img');
        frame.classList.add('grey-frame');
        frame.src = contentData.imgSrc;
        frame.style.width = '100%';

        link.appendChild(frame);

        return link;
    }
}
