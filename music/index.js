const songs = [
    { title: "Ordinary Person", file: "Aordinary Person.mp3" },
    { title: "Azhagooril Poothavale", file: "Azhagooril Poothavale.mp3" },
    { title: "Badass", file: "Badass.mp3" },
  { title: "Enjaami Thandhaane", file: "Enjaami Thandhaane.mp3" },
  { title: "Kannanlane Enadhullil", file: "Kannalanae_Enadhu.mp3" },
  { title: "Oorum Blood", file: "Oorum_Blood.mp3" },
  { title: "Thangapoovey", file: "Thangapoovey.mp3" }
];

let index = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const disc = document.getElementById("disc");

let isPlaying = false;


function loadSong(i) {
  title.textContent = songs[i].title;
  audio.src = songs[i].file;
}


function playSong() {
  isPlaying = true;
  audio.play();
  playBtn.innerHTML = `<i class="fa-regular fa-circle-pause"></i>`;
  disc.classList.add("animate-spin", "[animation-duration:5s]");
}


function pauseSong() {
  isPlaying = false;
  audio.pause();
  playBtn.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
  disc.classList.remove("animate-spin", "[animation-duration:5s]"); 
}


playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});


prevBtn.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  playSong();
});


nextBtn.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  loadSong(index);
  playSong();
});


audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
});

audio.addEventListener("ended", () => {
  nextBtn.click();
});


loadSong(index);
