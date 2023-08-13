/*

<div class = "skills-frame ">
    <div class = "skills-frame-header">Languages</div>
    <div class = "skills-frame-content grey-frame">

    </div>
</div>


Inside skills-frame-content grey-frame:

<div class = "skill-button">
    <div class = "skill-button-frame">
        <div class = "skill-button-frame-icon" style = "background-image: url(assets/about-me/me-icon.png)"/></div>
        <div class = "skill-button-frame-title grey-frame-small">HTML</div>
    </div>
</div>   

*/

function makeSkillsFrame(skillsData) {
    const skillsFrame = document.createElement('div');
    skillsFrame.classList.add('skills-frame');

    const skillsFrameHeader = document.createElement('div');
    skillsFrameHeader.classList.add('skills-frame-header');
    skillsFrameHeader.classList.add('select-disable');
    skillsFrameHeader.textContent = skillsData.title;

    const skillsFrameContent = document.createElement('div');
    skillsFrameContent.classList.add('skills-frame-content');
    skillsFrameContent.classList.add('grey-frame');
    skillsFrameContent.id = "skillButtonsContainer";

    skillsFrame.appendChild(skillsFrameHeader);
    skillsFrame.appendChild(skillsFrameContent);

    return skillsFrame;
}

var mobileId = 0
var mobileSelectedButton = null;

function SelectSkillButton(skillButton) {
    const skillButtonFrame = skillButton.querySelector('.skill-button-frame');
    const skillButtonFrameTitle = skillButton.querySelector('.skill-button-frame-title');
    skillButtonFrame.style.backgroundColor = 'rgb(60,60,60)';
    skillButtonFrame.style.top = '-10px';
    skillButtonFrame.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    skillButtonFrame.style.boxShadow = '0px 8px 10px -2px rgba(0, 0, 0, 0.5)';
    skillButtonFrameTitle.style.opacity = '1';
}

function DeselectSkillButton(skillButton) {
    const skillButtonFrame = skillButton.querySelector('.skill-button-frame');
    const skillButtonFrameTitle = skillButton.querySelector('.skill-button-frame-title');
    skillButtonFrame.style.backgroundColor = '';
    skillButtonFrame.style.top = '';
    skillButtonFrame.style.borderColor = '';
    skillButtonFrame.style.boxShadow = '';
    skillButtonFrameTitle.style.opacity = '';
}

function SelectSkillButtonMobile(skillButton) {

    if (mobileSelectedButton == skillButton) {
        DeselectSkillButton(mobileSelectedButton);
        mobileSelectedButton = null;
        return;
    }

    mobileId += 1;
    var cacheId = mobileId;

    if (mobileSelectedButton) {
        DeselectSkillButton(mobileSelectedButton);
    }

    setTimeout(() => {SelectSkillButton(skillButton);}, 40); // small set timeout to prevent an issue with z-clipping on mobile from new button being selected at same time

    mobileSelectedButton = skillButton;

    setTimeout(() => {
        if (cacheId != mobileId) return;
        DeselectSkillButton(mobileSelectedButton);
        mobileSelectedButton = null;
    }, 3000);
}

function makeSkillButton(skillData) {
    const skillButton = document.createElement('div');
    skillButton.classList.add('skill-button');

    const skillButtonFrame = document.createElement('div');
    skillButtonFrame.classList.add('skill-button-frame');
    skillButtonFrame.classList.add('select-disable');

    const skillButtonFrameIcon = document.createElement('img');
    skillButtonFrameIcon.classList.add('skill-button-frame-icon');
    skillButtonFrameIcon.classList.add('select-disable');
    skillButtonFrameIcon.src = skillData.imageSrc;

    const skillButtonFrameTitle = document.createElement('div');
    skillButtonFrameTitle.classList.add('skill-button-frame-title');
    skillButtonFrameTitle.classList.add('grey-frame-small');
    skillButtonFrameTitle.classList.add('select-disable');
    skillButtonFrameTitle.textContent = skillData.title;

    skillButtonFrame.appendChild(skillButtonFrameIcon);
    skillButtonFrame.appendChild(skillButtonFrameTitle);
    skillButton.appendChild(skillButtonFrame);

    skillButton.addEventListener('mouseenter', () => {
        if (!isUsingMouse) return;
        SelectSkillButton(skillButton)
    });

    skillButton.addEventListener('mouseleave', () => {
        if (!isUsingMouse) return;
        DeselectSkillButton(skillButton)
    });

    skillButton.addEventListener('touchstart', (event) => {
        SelectSkillButtonMobile(skillButton)
    }, true);

    return skillButton;
}
