console.log("welcome to spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("resources/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");
let currentPlaying;
let isPlaying = false;
let songs = [
  {
    songName: "Salam-e-Ishq",
    filePath: "resources/songs/1.mp3",
    coverPath: "resources/covers/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "resources/songs/2.mp3",
    coverPath: "resources/covers/2.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "resources/songs/3.mp3",
    coverPath: "resources/covers/3.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "resources/songs/4.mp3",
    coverPath: "resources/covers/4.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "resources/songs/5.mp3",
    coverPath: "resources/covers/5.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "resources/songs/6.mp3",
    coverPath: "resources/covers/6.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "resources/songs/7.mp3",
    coverPath: "resources/covers/7.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "resources/songs/8.mp3",
    coverPath: "resources/covers/8.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "resources/songs/9.mp3",
    coverPath: "resources/covers/9.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "resources/songs/10.mp3",
    coverPath: "resources/covers/10.jpg",
  },
];
masterSongName.innerText = masterSongName.innerText
    ? document.getElementById("masterSongName")
    : songs[0].songName;
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();

    gif.style.opacity = 1;
    isPlaying = true;
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
    isPlaying = false;
    makeAllPlays();
  }
});
// Listen to events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      songIndex = parseInt(e.target.id);
      if (songIndex === currentPlaying && isPlaying) {
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle");
        audioElement.currentTime = 0;
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
        isPlaying = false;
      } else {
        makeAllPlays();
        currentPlaying = songIndex;
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
       play();
      }
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  play()
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  play()
});


const play = () =>{
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.src = `resources/songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
  isPlaying = true;
}