const tracks = [
    { title: "music name1", artist: "name1", src: "link of music" },
    { title: "music name2", artist: "name2", src: "link of music" },
    { title: "music name3", artist: "nam3", src: "link of music" }
];

let trackIndex = 0;
let isPlaying = false;
let currentAudio = new Audio(tracks[trackIndex].src);

const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function loadTrack(index) {
    currentAudio.pause();
    currentAudio = new Audio(tracks[index].src);
    trackTitle.textContent = tracks[index].title;
    trackArtist.textContent = tracks[index].artist;
    
    if (isPlaying) {
        currentAudio.play();
    }
}

function togglePlay() {
    if (isPlaying) {
        currentAudio.pause();
        playBtn.textContent = "▶";
    } else {
        currentAudio.play();
        playBtn.textContent = "⏸";
    }
    isPlaying = !isPlaying;
}

playBtn.addEventListener('click', togglePlay);

nextBtn.addEventListener('click', () => {
    trackIndex = (trackIndex + 1) % tracks.length;
    loadTrack(trackIndex);
});

prevBtn.addEventListener('click', () => {
    trackIndex = (trackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(trackIndex);
});

loadTrack(trackIndex);