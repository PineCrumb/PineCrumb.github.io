
/*

<a class="media-button">
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
</a>

.media-button:hover {
    z-index: 1;
    cursor: pointer;
}

.media-button:hover .media-button-frame {
    top: -10px;
    background-color: rgb(85, 85, 85);
    height: calc(100% + 140px);
    width: calc(100% + 20px);
    z-index: 1;
}

.media-button:hover .media-button-thumbnail {
    filter: grayscale(0%);
}

.media-button:hover .media-button-reveal-clipping {
    opacity: 1;
}

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

function applyHoverStyles(frame, image, revealClipping) {
    frame.style.top = '-10px';
    frame.style.backgroundColor = 'rgb(85, 85, 85)';
    frame.style.height = 'calc(100% + 140px)';
    frame.style.width = 'calc(100% + 20px)';
    frame.style.zIndex = '1';

    image.style.filter = 'grayscale(0%)';
    revealClipping.style.opacity = '1';
}

function removeHoverStyles(frame, image, revealClipping) {
    frame.style.top = '';
    frame.style.backgroundColor = '';
    frame.style.height = '';
    frame.style.width = '';
    frame.style.zIndex = '';

    image.style.filter = '';
    revealClipping.style.opacity = '';
}

function addMediaButtonEventListeners(entry) {
    const frame = entry.querySelector('.media-button-frame');
    const image = entry.querySelector('.media-button-thumbnail');
    const revealClipping = entry.querySelector('.media-button-reveal-clipping');

    entry.addEventListener('mouseenter', () => {
        if (!isUsingMouse) return;
        applyHoverStyles(frame, image, revealClipping);
        entry.style.cursor = 'pointer';
    });

    entry.addEventListener('mouseleave', () => {
        removeHoverStyles(frame, image, revealClipping);
        entry.style.cursor = '';
    });

    // entry.addEventListener('touchstart', (event) => {
    //     applyHoverStyles(frame, image, revealClipping);
    //     event.preventDefault(); // Prevents scrolling while touching
    // });

    // entry.addEventListener('touchend', () => {
    //     removeHoverStyles(frame, image, revealClipping);
    // });
}

function makeMediaButton(mediaData) {
    const entry = document.createElement('a');
    entry.classList.add('media-button');
    entry.href = mediaData.url;
    entry.style.textDecoration = 'none';
    entry.style.color = 'inherit';

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

    addMediaButtonEventListeners(entry);

    return entry;
}