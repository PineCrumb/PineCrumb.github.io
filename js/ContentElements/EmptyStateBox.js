import { ContentElementBase } from './ContentElementBase.js';

export class EmptyStateBox extends ContentElementBase {
    makeContentElement(contentData) {
        const container = document.createElement('div');
        container.classList.add('project-content-media-content', 'grey-frame');
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        container.style.gap = '28px';
        container.style.padding = '28px 36px';
        container.style.boxSizing = 'border-box';
        container.style.minHeight = '240px';
        container.style.height = 'auto';
        container.style.width = 'calc(100% - 80px)';
        container.style.maxWidth = '840px';
        container.style.margin = '30px auto 0 auto';
        container.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02))';

        const logo = document.createElement('img');
        logo.src = contentData.logoSrc;
        logo.alt = contentData.logoAlt || 'Logo';
        logo.style.width = '168px';
        logo.style.height = '168px';
        logo.style.objectFit = 'contain';
        logo.style.flex = '0 0 auto';

        const textBlock = document.createElement('div');
        textBlock.style.display = 'flex';
        textBlock.style.flexDirection = 'column';
        textBlock.style.justifyContent = 'center';
        textBlock.style.alignItems = 'flex-start';
        textBlock.style.maxWidth = '520px';

        const title = document.createElement('div');
        title.textContent = contentData.title;
        title.style.fontSize = '30px';
        title.style.fontWeight = '900';
        title.style.lineHeight = '1.05';
        title.style.letterSpacing = '-0.02em';
        title.style.color = 'rgb(255, 255, 255)';

        const desc = document.createElement('div');
        desc.textContent = contentData.desc;
        desc.classList.add('project-content-info-desc');
        desc.style.marginLeft = '0';
        desc.style.marginTop = '12px';
        desc.style.textAlign = 'left';

        container.appendChild(logo);
        textBlock.appendChild(title);
        textBlock.appendChild(desc);
        container.appendChild(textBlock);

        return container;
    }
}