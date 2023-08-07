
/*

<div class="media-button">
    <div class="media-button-frame">
        <img class="media-button-thumbnail" src="assets/LomThumbnail.png" />
        <div class = "media-button-content">
            <p class = "media-button-title">Land of Merchants (Supersocial)</p>
            <p class = "media-button-sub-title">Lead Developer</p>
            <div class = "media-button-reveal-clipping">
                <div class = "media-button-reveal-content"> sdlf  sdd s s dfsdf fsds fdsdf sdf sdf sdf sdf sdf sdfsd fsdf  sfds dfsdf sdf sdf sdf  sdf sd fjsld j </div>
            </div>
            <p class = "media-button-date">April 2021 - Feb 2022</p>
        </div>
    </div>
</div>

*/

function makeMediaButton(mediaData) {
    const entry = document.createElement('div');
    entry.classList.add('media-button');

    const frame = document.createElement('div');
    frame.classList.add('media-button-frame');
    frame.classList.add('grey-frame');

    const image = document.createElement('img');
    image.classList.add('media-button-thumbnail');
    image.src = mediaData.imageSrc;

    const content = document.createElement('div');
    content.classList.add('media-button-content');

    const title = document.createElement('p');
    title.classList.add('media-button-title');
    title.textContent = mediaData.title;

    const subTitle = document.createElement('p');
    subTitle.classList.add('media-button-sub-title');
    subTitle.textContent = mediaData.subTitle;

    const revealClipping = document.createElement('div');
    revealClipping.classList.add('media-button-reveal-clipping');

    const revealContent = document.createElement('div');
    revealContent.classList.add('media-button-reveal-content');
    revealContent.textContent = mediaData.content;

    const date = document.createElement('p');
    date.classList.add('media-button-date');
    date.textContent = mediaData.date;

    content.appendChild(title);
    content.appendChild(subTitle);
    revealClipping.appendChild(revealContent);
    content.appendChild(revealClipping);
    content.appendChild(date);
    frame.appendChild(image);
    frame.appendChild(content);
    entry.appendChild(frame);

    return entry;
}