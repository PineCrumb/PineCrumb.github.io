/*

<div class = "page-block">
    <div class = "project-header">
        <div class = "project-header-logo">
            <img class = "project-header-logo-img" src = "assets/game-career/robbery-simulator/logo.png" />
        </div>
        <div class = "project-header-info">
            <div class = "project-header-info-title">Robbery Simulator (by Voldex)</div>
            <div class = "project-header-info-subtitle">Gameplay Programmer</div>
            <div class = "project-header-info-date">May 2020 - May 2021</div>
            <div class = "project-header-info-box black-frame">
                <div class = "project-header-info-box-text">Programming • Designing • Leadership</div>
            </div>
        </div>
    </div>
</div>

<div class = "page-block">
    <div class = "project-content black-frame">
        <div class = "project-content-media">
            <iframe
                class = "project-content-media-content grey-frame"
                title = "YouTube video player"
                src = "https://www.youtube.com/embed/ly36kn0ug4k"
                frameborder = "0"
                allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
        </div>
        <div class = "project-content-info">
            <div class = "project-content-info-title">A Title About Something</div>
            <div class = "project-content-info-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec e Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec e Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec e Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nisl eget nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nisl eget nisl.</div>
        </div>
    </div>
</div>


*/

// Helpful project globals
function goBackHome() {
    const previousURL = document.referrer;
    const indexPageURL = 'index.html';

    if (previousURL.includes(indexPageURL)) {
        window.history.back();
    } else {
        window.location.href = indexPageURL;
    }
}

function makeProjectContent(projectContentData) {
    const divPageBlock = document.createElement("div");
    divPageBlock.className = "page-block";

    const projectContentDiv = document.createElement('div');
    projectContentDiv.classList.add('project-content', 'black-frame');

    const projectContentMediaDiv = document.createElement('div');
    projectContentMediaDiv.classList.add('project-content-media');

    const iframe = document.createElement('iframe');
    iframe.classList.add('project-content-media-content', 'grey-frame');

    iframe.title = 'YouTube Video Player';
    iframe.src = projectContentData.src;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    const projectContentInfoDiv = document.createElement('div');
    projectContentInfoDiv.classList.add('project-content-info');

    const projectContentInfoTitleDiv = document.createElement('div');
    projectContentInfoTitleDiv.classList.add('project-content-info-title');
    projectContentInfoTitleDiv.innerText = projectContentData.title;

    const projectContentInfoDescDiv = document.createElement('div');
    projectContentInfoDescDiv.classList.add('project-content-info-desc');
    projectContentInfoDescDiv.innerText = projectContentData.desc;

    projectContentMediaDiv.appendChild(iframe);
    projectContentDiv.appendChild(projectContentMediaDiv);
    projectContentInfoDiv.appendChild(projectContentInfoTitleDiv);
    projectContentInfoDiv.appendChild(projectContentInfoDescDiv);
    projectContentDiv.appendChild(projectContentInfoDiv);

    divPageBlock.appendChild(projectContentDiv);

    return divPageBlock;
}

function makeProjectHeader(projectData) {
    const divPageBlock = document.createElement("div");
    divPageBlock.className = "page-block";

    const divProjectHeader = document.createElement("div");
    divProjectHeader.className = "project-header";

    const divProjectHeaderLogo = document.createElement("div");
    divProjectHeaderLogo.className = "project-header-logo";

    const imgLogo = document.createElement("img");
    imgLogo.className = "project-header-logo-img";
    imgLogo.src = projectData.headerLogoSrc;
    divProjectHeaderLogo.appendChild(imgLogo);

    const divProjectHeaderInfo = document.createElement("div");
    divProjectHeaderInfo.className = "project-header-info";

    const divProjectTitle = document.createElement("div");
    divProjectTitle.className = "project-header-info-title";
    divProjectTitle.textContent = projectData.title;
    divProjectHeaderInfo.appendChild(divProjectTitle);

    const divProjectSubTitle = document.createElement("div");
    divProjectSubTitle.className = "project-header-info-subtitle";
    divProjectSubTitle.textContent = projectData.subTitle;
    divProjectHeaderInfo.appendChild(divProjectSubTitle);

    const divProjectDate = document.createElement("div");
    divProjectDate.className = "project-header-info-date";
    divProjectDate.textContent = projectData.date;
    divProjectHeaderInfo.appendChild(divProjectDate);

    const divProjectInfoBox = document.createElement("div");
    divProjectInfoBox.className = "project-header-info-box black-frame";

    const divProjectInfoBoxText = document.createElement("div");
    divProjectInfoBoxText.className = "project-header-info-box-text";
    divProjectInfoBoxText.textContent = projectData.headerText.join(" • ");
    divProjectInfoBox.appendChild(divProjectInfoBoxText);

    divProjectHeaderInfo.appendChild(divProjectInfoBox);

    divProjectHeader.appendChild(divProjectHeaderLogo);
    divProjectHeader.appendChild(divProjectHeaderInfo);

    divPageBlock.appendChild(divProjectHeader);

    return divPageBlock;
}