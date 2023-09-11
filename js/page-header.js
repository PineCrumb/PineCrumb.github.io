function newPageHeader(pageHeaderData) {
    const pageHeader = document.createElement('div');
    pageHeader.classList.add('page-header');

    const pageHeaderContent = document.createElement('div');
    pageHeaderContent.classList.add('page-header-content');
    pageHeader.appendChild(pageHeaderContent);

    pageHeaderData.buttonDatas.forEach(buttonData => {
        const button = new BasicButton(buttonData);
        pageHeaderContent.appendChild(button.element);
    });

    return pageHeader;
}