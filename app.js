const music = new Audio('audio/12.mp3');
//music.play();
const songs = [
    {
        id: 1,
        songName: `4.10 <br> 
        <div class="subtitle"> DIVINE</div>`,
        poster: "image/1.png"
    },
    {
        id: 2,
        songName: `Yaad <br> 
        <div class="subtitle"> karan Aujla , DIVINE, Jonita Gandhi </div>`,
        poster: "image/2.png"
    },
    {
        id: 3,
        songName: `Chorni <br> 
        <div class="subtitle"> DIVINE, Sidhu Moose Wala</div>`,
        poster: "image/3.png"
    },
    {
        id: 4,
        songName: `cheques <br> 
        <div class="subtitle"> Shubh</div>`,
        poster: "image/4.png"
    },
    {
        id: 5,
        songName: `Check It Out <br> 
        <div class="subtitle"> Parmish Verma</div>`,
        poster: "image/5.png"
    },
    {
        id: 6,
        songName: `Cause Of you <br> 
        <div class="subtitle"> Zehr Vibe</div>`,
        poster: "image/6.png"
    },
    {
        id: 7,
        songName: `Case <br> 
        <div class="subtitle"> Diljit Dosanjh, Instanse</div>`,
        poster: "image/7.png"
    },
    {
        id: 8,
        songName: `California Life <br> 
        <div class="subtitle"> Cheema Y, Gur Sidhu </div>`,
        poster: "image/8.png"
    },
    {
        id: 9,
        songName: `Caleboose <br> 
        <div class="subtitle"> Sidhu moosi wala</div>`,
        poster: "image/9.png"
    },
    {
        id: 10,
        songName: `Vigdiyaan Heeran(Honey 3.0) <br> 
        <div class="subtitle"> Alan Walker</div>`,
        poster: "image/10.png"
    },
    {
        id: 11,
        songName: `Bandana <br> 
        <div class="subtitle"> Shubh</div>`,
        poster: "image/11.png"
    },
    {
        id: 12,
        songName: `Baller <br> 
        <div class="subtitle"> Shubh</div>`,
        poster: "image/12.png"
    },
    {
        id: 13,
        songName: `Naina <br> 
        <div class="subtitle"> Diljit Dosanjh- Ft Badsha</div>`,
        poster: "image/13.png"
    },
    {
        id: 14,
        songName: `Bachke Bachke <br> 
        <div class="subtitle"> Ikky and Karan Aujla </div>`,
        poster: "image/14.png"
    },
    {
        id: 15,
        songName: `Attraction  <br> 
        <div class="subtitle"> Prodgk and Sukha
        </div>`,
        poster: "image/15.png"
    },
    {
        id: 16,
        songName: `Arjen vally <br> 
        <div class="subtitle"> Animal</div>`,
        poster: "image/16.png"
    },
    {
        id: 17,
        songName: `Apa Fer Milaangey
         <br> 
        <div class="subtitle">Savi Kahlon</div>`,
        poster: "image/17.png"
    },
    {
        id: 18,
        songName: `Akhiyaan Gulaab<br> 
        <div class="subtitle"> Mitraz</div>`,
        poster: "image/18.png"
    },
    {
        id: 19,
        songName: `Chandigarh ka chokhra <br> 
        <div class="subtitle"> Sunanda Sharma</div>`,
        poster: "image/19.png"
    },
    {
        id: 20,
        songName: `8 ASLE <br> 
        <div class="subtitle"> SUKHA | GURLEZ AKHTAR | CHANI NATTAN |</div>`,
        poster: "image/20.png"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});
const makeAllplays =() =>{
    Array.from(document.getElementsByClassName('playlistPaly')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground =() =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPaly')).forEach((e)=>{
    e.addEventListener('click', (el) => {
        index = el.target.id; 
        //console.log(index);
        music.src=`audio/${index}.mp3`;
        poster_master_play.src = `image/${index}.png`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id ==index;
        });
        songTitles.forEach(els => {
            let {songName, poster} = els;
            title.innerHTML = songName;
        });
      makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration; 

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    //console.log(music_dur);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () =>{
   if(vol.value == 0) {
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-off-fill');
   }
  if(vol.value > 0){
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.add('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
  }
  if (vol.value > 50) {
    vol_icon.classList.add('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=> {
 index -= 1;
 if (index < 1 ) {
    index = Array.from(document.getElementsByClassName('songItem')).length;
 }

 music.src=`audio/${index}.mp3`;
        poster_master_play.src = `image/${index}.png`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id ==index;
        });
        songTitles.forEach(els => {
            let {songName, poster} = els;
            title.innerHTML = songName;
        });

      makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click', ()=> {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length ) {
      index = 1;  
     }
    
    
     music.src=`audio/${index}.mp3`;
            poster_master_play.src = `image/${index}.png`;
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
    
            let songTitles = songs.filter((els) =>{
                return els.id ==index;
            });
            songTitles.forEach(els => {
                let {songName, poster} = els;
                title.innerHTML = songName;
            });
    
          makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
            makeAllplays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active1');
    
});
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=330;

})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330;
})
/*id="pop_art_left*/
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];
pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft +=330;

})  
pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -=330;
})