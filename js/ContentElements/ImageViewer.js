import { ContentElementBase } from './ContentElementBase.js';

// Constants
const EASING_TIME = 0.2; // Easing time for fade-in
const BACKGROUND_TRANSPARENCY = 0.7; // Background transparency (0.0 to 1.0)

class ImageFrame {

    frame = null;
    exitButton = null;

    constructor() {
        let frame = document.createElement('div');
        frame.style.position = 'fixed';
        frame.style.top = '0';
        frame.style.left = '0';
        frame.style.width = '100%';
        frame.style.height = '100%';
        frame.style.backgroundColor = `rgba(0, 0, 0, 0)`;
        frame.style.display = 'none';
        frame.style.zIndex = '9999';
        frame.style.transition = `background-color ${EASING_TIME}s ease`;

        frame.addEventListener('click', () => {
            this.hide();
        }, true);

        // style: center screen, made to fit screen. has a margin of 10px.
        let image = document.createElement('img');
        image.style.position = 'absolute';
        image.style.top = '50%';
        image.style.left = '50%';
        image.style.transform = 'translate(-50%, -50%)';
        image.style.maxWidth = 'calc(100% - 40px)';
        image.style.maxHeight = 'calc(100% - 40px)';
        image.style.objectFit = 'contain';
        image.style.objectPosition = 'center';
        // image.style.cursor = 'pointer';
        image.style.opacity = '0';
        image.style.transition = `opacity ${EASING_TIME}s ease`;
        
        let exitButton = document.createElement('div');
        exitButton.textContent = 'X';
        exitButton.style.position = 'absolute';
        exitButton.style.top = '0';
        exitButton.style.right = '0';
        exitButton.style.width = '50px';
        exitButton.style.height = '50px';
        exitButton.style.color = 'black';
        exitButton.style.fontSize = '30px';
        exitButton.style.fontWeight = 'bold';
        exitButton.style.textAlign = 'center';
        exitButton.style.lineHeight = '50px';
        exitButton.style.cursor = 'pointer';
        exitButton.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        exitButton.style.transition = `background-color ${EASING_TIME}s ease`;

        exitButton.addEventListener('click', () => {
            this.hide();
        }, true);

        frame.appendChild(image);
        frame.appendChild(exitButton);
        document.body.appendChild(frame);

        this.frame = frame;
        this.image = image;
        this.exitButton = exitButton;
    }

    show(imageSrc) {
        this.frame.style.display = 'block';
        this.image.src = imageSrc;
        setTimeout(() => {
            this.frame.style.backgroundColor = `rgba(0, 0, 0, ${BACKGROUND_TRANSPARENCY})`;
            this.image.style.opacity = '1';
        }, 10);
    }

    hide() {
        this.frame.style.backgroundColor = `rgba(0, 0, 0, 0)`;
        this.image.style.opacity = '0';
        setTimeout(() => {
            this.frame.style.display = 'none';
        }, parseFloat(EASING_TIME) * 1000); // Convert easing time to milliseconds
    }
}

const imageFrame = new ImageFrame();


export class ImageViewer extends ContentElementBase {
    makeContentElement(contentData) {
        const img = document.createElement('img');
        img.src = contentData.src;
        img.style.cursor = 'pointer';
        
        // loop through style props and set them
        contentData.style = contentData.style || {};
        for (const [key, value] of Object.entries(contentData.style)) {
            img.style[key] = value;
        }

        return img;
    }
    setupContentElement(contentData) {
        this.element.addEventListener('mouseenter', () => {
            if (!isUsingMouse) return;

        });

        this.element.addEventListener('mouseleave', () => {

        });

        this.element.addEventListener('click', () => {
            console.log('click');
            imageFrame.show(contentData.src);
        }, true);
    }
}