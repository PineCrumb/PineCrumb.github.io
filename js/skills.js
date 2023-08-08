/*

<div class = "skills-frame ">
    <div class = "skills-frame-header">Languages</div>
    <div class = "skills-frame-content grey-frame">

    </div>
</div>


Inside skills-frame-content grey-frame:

<div class = "skill-button">
    <div class = "skill-button-frame">
        <img class = "skill-button-frame-icon" src = "assets/about-me/me-icon.png"/>
        <div class = "skill-button-frame-title grey-frame-small">HTML</div>
    </div>
</div>   

*/

// easy code for checking if mobile or not
let isUsingMouse = false;

// Detect mouse movement
document.addEventListener('mousemove', () => {
  isUsingMouse = true;
});

// Detect touch interactions
document.addEventListener('touchstart', () => {
  isUsingMouse = false;
});

function makeSkillsFrame(skillsData) {
    const skillsFrame = document.createElement('div');
    skillsFrame.classList.add('skills-frame');

    const skillsFrameHeader = document.createElement('div');
    skillsFrameHeader.classList.add('skills-frame-header');
    skillsFrameHeader.textContent = skillsData.title;

    const skillsFrameContent = document.createElement('div');
    skillsFrameContent.classList.add('skills-frame-content');
    skillsFrameContent.classList.add('grey-frame');
    skillsFrameContent.id = "skillButtonsContainer";

    skillsFrame.appendChild(skillsFrameHeader);
    skillsFrame.appendChild(skillsFrameContent);

    return skillsFrame;
}

function makeSkillButton(skillData) {
    const skillButton = document.createElement('div');
    skillButton.classList.add('skill-button');

    const skillButtonFrame = document.createElement('div');
    skillButtonFrame.classList.add('skill-button-frame');

    const skillButtonFrameIcon = document.createElement('img');
    skillButtonFrameIcon.classList.add('skill-button-frame-icon');
    skillButtonFrameIcon.src = skillData.iconSrc;

    const skillButtonFrameTitle = document.createElement('div');
    skillButtonFrameTitle.classList.add('skill-button-frame-title');
    skillButtonFrameTitle.classList.add('grey-frame-small');
    skillButtonFrameTitle.textContent = skillData.title;

    skillButtonFrame.appendChild(skillButtonFrameIcon);
    skillButtonFrame.appendChild(skillButtonFrameTitle);
    skillButton.appendChild(skillButtonFrame);


    function MouseEnter() {
        skillButtonFrame.style.top = '-10px';
        skillButtonFrame.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        skillButtonFrameTitle.style.opacity = '1';
        skillButton.style.cursor = 'pointer';
    }

    function MouseLeave() {
        skillButtonFrame.style.top = '';
        skillButtonFrame.style.borderColor = '';
        skillButtonFrameTitle.style.opacity = '';
        skillButton.style.cursor = '';
    }

    mediaButton.addEventListener('mouseenter', () => {
        if (!isUsingMouse) return;
        MouseEnter()
    });

    mediaButton.addEventListener('mouseleave', MouseLeave);

    mediaButton.addEventListener('touchstart', (event) => {
        if (isUsingMouse) return;
        MouseEnter()
    });

    mediaButton.addEventListener('touchend', MouseLeave);

    return skillButton;
}
