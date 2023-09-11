export class ContentElementBase {
    constructor(contentData) {
        this.element = this.makeContentElement(contentData);
        this.setupContentElement(contentData);
        if (contentData.id != null) this.element.id = contentData.id;
        if (contentData.parent != null) this.setParent(contentData.parent);
    }
    
    setParent(parent) {
        parent.appendChild(this.element);
    }

    makeContentElement(contentData) {}; // abstract
    setupContentElement(contentData) {}; // abstract
}