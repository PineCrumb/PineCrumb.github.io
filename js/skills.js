/*

<div class = "skills-frame ">
    <div class = "skills-frame-header">Languages</div>
    <div class = "skills-frame-content grey-frame">

    </div>
</div>


*/

function makeSkillsFrame(skillsData) {
    const skillsFrame = document.createElement('div');
    skillsFrame.classList.add('skills-frame');

    const skillsFrameHeader = document.createElement('div');
    skillsFrameHeader.classList.add('skills-frame-header');
    skillsFrameHeader.textContent = skillsData.title;

    const skillsFrameContent = document.createElement('div');
    skillsFrameContent.classList.add('skills-frame-content');
    skillsFrameContent.classList.add('grey-frame');

    skillsFrame.appendChild(skillsFrameHeader);
    skillsFrame.appendChild(skillsFrameContent);

    return skillsFrame;
}

function makeSkillButton(skillData) {
    const skillButton = document.createElement('div');
    return skillButton;
}
