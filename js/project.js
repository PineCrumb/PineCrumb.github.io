
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