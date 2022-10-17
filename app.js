const tomorrowTunes = document.getElementById("dest");
const tomorrow = document.querySelector(".tunde");
const one = document.querySelector("#one");
const deets = document.querySelector(".deets");
const home = document.querySelector(".home");
const collectionSection = document.getElementById("collect");
const collection = document.querySelector(".collection");
const changeActive = document.querySelectorAll(".pest");
const three = document.getElementById("three");

tomorrowTunes.addEventListener("click", () => {
  deets.classList.add("inactive");
  tomorrow.classList.add("act");
  collection.classList.remove("active");
  three.classList.add("inactive");
  document.body.style.backgroundImage = "url('data/Rectangle 20.png')";
});

home.addEventListener("click", () => {
  deets.classList.remove("inactive");
  tomorrow.classList.remove("act");
  collection.classList.remove("active");
  three.classList.remove("inactive");
  document.body.style.background = "#1d2123";
});

collectionSection.addEventListener("click", () => {
  deets.classList.add("inactive");
  tomorrow.classList.remove("act");
  collection.classList.add("active");
  three.classList.add("inactive");
  document.body.style.background = "#1d2123";
});

changeActive.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    changeActive.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// MUSIC SECTION

const container = document.getElementById("two");
const nextBtn = document.querySelector(".fa-forward");
const prevBtn = document.querySelector(".fa-backward");
const playBtn = document.querySelector(".playBtn");
const shuffleBtn = document.querySelector(".fa-shuffle");
const title = document.querySelector(".title");
const image = document.querySelector(".name-img");
const artiste = document.querySelector(".name");
const audio = document.getElementById("audio");
const musicList = document.querySelectorAll(".music-list");
const progress = document.querySelector(".progress-bar");
const progressRange = document.querySelector("#range");

const optionsTwo = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "56f4b16b7amshc16c2d4f2aea8a3p18b6d1jsn5da8bf6e8934",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

async function getAlbum() {
  const response = await fetch(
    "https://spotify23.p.rapidapi.com/albums/?ids=6kgDkAupBVRSqbJPUaTJwQ",
    optionsTwo
  );

  const data = await response.json();

  const result = data.albums;

  let songIndex = 0;
  let index = 19;

  let rep = result.map((dat) => dat.tracks.items);

  rep.map((item) => {
    loadSong(item[songIndex]);

    function loadSong(songs) {
      title.innerText = songs.name;
      audio.src = songs.preview_url;
      artiste.innerText = songs.artists[0].name;
      image.src = `img/love damini cover.jfif`;
    }

    function prev() {
      songIndex--;

      if (songIndex < 0) {
        songIndex = item.length - 1;
      }

      loadSong(item[songIndex]);

      playSong();
    }

    function next() {
      songIndex++;

      if (songIndex > item.length - 1) {
        songIndex = 0;
      }

      loadSong(item[songIndex]);

      playSong();
    }

    shuffleBtn.addEventListener("click", () => {
      loadSong(item[Math.floor(index * Math.random() + 1)]);
      console.log(Math.floor(Math.random() * songIndex));
      playSong();
    });
    audio.addEventListener("ended", next);

    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);
  });

  function playSong() {
    container.classList.add("play");
    playBtn.querySelector("i.fa-solid").classList.remove("fa-play");
    playBtn.querySelector("i.fa-solid").classList.add("fa-pause");

    audio.play();
  }
  function pauseSong() {
    container.classList.remove("play");
    playBtn.querySelector("i.fa-solid").classList.add("fa-play");
    playBtn.querySelector("i.fa-solid").classList.remove("fa-pause");

    audio.pause();
  }

  function updateTime(e) {
    let { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;

    progress.style.width = `${progressPercent}%`;
  }

  function setProgress(e) {
    const click = e.offsetX;
    const width = this.clientWidth;
    const duration = audio.duration;

    audio.currentTime = (click / width) * duration;
  }

  playBtn.addEventListener("click", () => {
    const isPlaying = container.classList.contains("play");

    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  audio.addEventListener("timeupdate", updateTime);
  progressRange.addEventListener("click", setProgress);
}

getAlbum();

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "56f4b16b7amshc16c2d4f2aea8a3p18b6d1jsn5da8bf6e8934",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

// async function getSong() {
//   const response = await fetch(
//     "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=7&startFrom=0",
//     options
//   );

//   const data = await response.json();

//   const results = data.tracks;

//   const responseTwo = await fetch(
//     "https://shazam.p.rapidapi.com/charts/track?locale=en-US&listId=ip-country-chart-US&pageSize=8&startFrom=17",
//     options
//   );

//   const dataTwo = await responseTwo.json();

//   const resultTwo = dataTwo.tracks;

//   const releases = document.querySelector(".detailsOne");
//   const releasesTwo = document.querySelector(".detailsTwo");

//   results.map((res) => {
//     let { title, subtitle, images } = res;

//     releases.innerHTML += `
//             <div class="release-img">
//                   <img src="${images.coverart}" alt="">
//                   <p>${title}</p>
//                   <small>${subtitle}</small>
//             </div>
//     `;
//   });

//   resultTwo.map((res) => {
//     let { title, subtitle, images } = res;

//     releasesTwo.innerHTML += `
//         <div class="release-img">
//               <img src="${images.coverart}" alt="">
//               <p width="10%">${title}</p>
//               <small>${subtitle}</small>
//        </div>
//     `;
//   });
// }

// getSong();

const toggleBtn = document.getElementById("hamburger");
const sideBar = document.querySelector(".icon-div");
const closeBtn = document.getElementById("close-btn");

toggleBtn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("active");
  sideBar.style.transition = "0.4s ease";
});
