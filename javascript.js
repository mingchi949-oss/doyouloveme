const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.getElementById('question-container');
const successContainer = document.getElementById('success-container');
const statusGif = document.getElementById('status-gif');

// The list of guilt-tripping phrases from the video
const noPhrases = [
    "ARE YOU SURE?",
    "REALLY??",
    "SURE ABOUT THAT?",
    "I am VERY sad...",
    "Ok fine, I am telling you to STOP...",
    "If you say no, I will really be sad...",
    "Pookie please...",
    "I will be very very very sad..."
];

// Corresponding GIFs for the guilt-tripping
const noGifs = [
    "giphy (1).webp", // Shocked
    "200 (2).webp", // Crying
    "200 (3).webp", // Sad face
    "200 (4).webp", // Emotional
 // Maximum sadness
];

let phraseIndex = 0;
let yesButtonScale = 1;
let yesButtonFontSize = 1.5; // starting in rem

function handleNoInteraction() {
    // 1. Move the No button to a random position to make it "unclickable"
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = '1000';

    // 2. Change the text and image
    if (phraseIndex < noPhrases.length) {
        noBtn.innerText = noPhrases[phraseIndex];
        statusGif.src = noGifs[phraseIndex];
        phraseIndex++;
    } else {
        // Keep the last phrase and image visible if they keep trying to say No
        noBtn.innerText = noPhrases[noPhrases.length - 1];
        statusGif.src = noGifs[noGifs.length - 1];
    }

    // 3. Make the "Yes" button bigger
    yesButtonScale += 0.4; // Increases scale multiplier
    yesButtonFontSize += 0.3; // Increases text size
    
    yesBtn.style.transform = `scale(${yesButtonScale})`;
    yesBtn.style.fontSize = `${yesButtonFontSize}rem`;
    
    // Optional: Make the "Yes" button take over padding as it gets massive
    yesBtn.style.padding = `${15 + (yesButtonScale * 5)}px ${35 + (yesButtonScale * 10)}px`;
}

// Trigger logic on both click and mouse hover for maximum trap efficiency
noBtn.addEventListener('mouseenter', handleNoInteraction);
noBtn.addEventListener('click', handleNoInteraction);

// When they finally click YES
yesBtn.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');
});