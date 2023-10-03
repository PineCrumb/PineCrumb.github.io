class BasicButton {

    height = '';
    newTab = false;
    hoverHeight = 0;

    constructor(basicData) {
        
        this.height = basicData.height;
        this.newTab = basicData.newTab;
        if (basicData.hoverHeight != null) this.hoverHeight = '-' + basicData.hoverHeight;

        this.element = this.createBasicButtonElement(basicData);
        this.basicButtonFrame = this.element.querySelector('.basic-button-frame');
        this.basicButtonFrameTitle = this.element.querySelector('.basic-button-frame-title');

        this.hasTitle = this.basicButtonFrameTitle != null;

        this.element.addEventListener('mouseenter', () => {
            if (!isUsingMouse) return;
            this.select();
        });

        this.element.addEventListener('mouseleave', () => {
            if (!isUsingMouse) return;
            this.deselect();
        });
    }

    select() {
        this.element.style.cursor = 'pointer';
        this.basicButtonFrame.style.top = this.hoverHeight;
        this.basicButtonFrame.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        this.basicButtonFrame.style.boxShadow = '0px 8px 10px -2px rgba(0, 0, 0, 0.5)';
        if (this.hasTitle) this.basicButtonFrameTitle.style.opacity = '1';
    }

    deselect() {
        this.element.style.cursor = '';
        this.basicButtonFrame.style.top = '';
        this.basicButtonFrame.style.borderColor = '';
        this.basicButtonFrame.style.boxShadow = '';
        if (this.hasTitle) this.basicButtonFrameTitle.style.opacity = '';
    }

    createBasicButtonElement(basicData) {
        let basicButton = null;
        
        if (basicData.url != null) {
            basicButton = document.createElement('a');
            basicButton.classList.add('basic-button');
            basicButton.style.height = this.height;
            basicButton.href = basicData.url;
            if (this.newTab) basicButton.setAttribute('target', '_blank');
        }
        else if (basicData.onClick != null) {
            basicButton = document.createElement('div');
            basicButton.classList.add('basic-button');
            basicButton.style.height = this.height;
            basicButton.addEventListener('click', () => {
                // call on click with the BasicButton object as the argument
                basicData.onClick(this);
            }, true);
        }

        const basicButtonFrame = document.createElement('div');
        basicButtonFrame.classList.add('basic-button-frame');
        basicButtonFrame.classList.add('grey-frame');
        basicButtonFrame.classList.add('select-disable');
        basicButtonFrame.style.backgroundColor = basicData.backgroundColor;

        basicButton.appendChild(basicButtonFrame);

        if (basicData.imageSrc != null) {
            const basicButtonFrameIcon = document.createElement('img');
            basicButtonFrameIcon.classList.add('basic-button-frame-icon');
            basicButtonFrameIcon.classList.add('select-disable');
            basicButtonFrameIcon.src = basicData.imageSrc;
            basicButtonFrame.appendChild(basicButtonFrameIcon);
        }
        else if (basicData.text != null) {
            const basicButtonFrameText = document.createElement('div');
            basicButtonFrameText.classList.add('basic-button-frame-text');
            basicButtonFrameText.classList.add('select-disable');
            basicButtonFrameText.textContent = basicData.text;
            basicButtonFrame.appendChild(basicButtonFrameText);
        }



        if (basicData.title != null) {
            const basicButtonFrameTitle = document.createElement('div');
            basicButtonFrameTitle.classList.add('basic-button-frame-title');
            basicButtonFrameTitle.classList.add('grey-frame-small');
            basicButtonFrameTitle.classList.add('select-disable');
            basicButtonFrameTitle.textContent = basicData.title;
            basicButtonFrame.appendChild(basicButtonFrameTitle);
        }

        return basicButton;
    }
}
