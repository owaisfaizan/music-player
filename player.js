
const music = new Audio(``);
// music.play();

const songs = [
    {
        id: 1,
        SongsName: `On My Way <br> <div class="subtitle">
                        Alan walker
                    </div>`,
        poster:"images/1.jpg"
    },
    {
        id: 2,
        SongsName: `Dark Side <br> <div class="subtitle">
                        Alan walker
                    </div>`,
        poster:"images/2.jpg"
    },
    {
        id: 3,
        SongsName: `Faded <br> <div class="subtitle">
                        Alan walker
                    </div>`,
        poster:"images/3.jpg"
    },
    {
        id: 4,
        SongsName: `Agar Tum Sath Ho <br> <div class="subtitle">
                        Arjit Singh
                    </div>`,
        poster:"images/4.jpg"
    },
    {
        id: 5,
        SongsName: `TU HAI KAHAN <br> <div class="subtitle">
                        AUR
                    </div>`,
        poster:"images/5.jpg"
    },
    {
        id: 6,
        SongsName: `Shikayat<br> <div class="subtitle">
                        AUR
                    </div>`,
        poster:"images/6.jpg"
    },
    {
        id: 7,
        SongsName: `Barishain <br> <div class="subtitle">
                        Atif Aslam
                    </div>`,
        poster:"images/7.jpg"
    },
    {
        id: 8,
        SongsName: `Big Dawgs FT. kalmi<br> <div class="subtitle">
                        Kalmi
                    </div>`,
        poster:"images/8.jpg"
    },
    {
        id: 9,
        SongsName: `Cartoon on & on <br> <div class="subtitle">
                        Daneil levi
                    </div>`,
        poster:"images/9.jpg"
    },
    {
        id: 10,
        SongsName: `levitating <br> <div class="subtitle">
                        Dua Lipa
                    </div>`,
        poster:"images/10.jpg"
    },
    {
        id: 11,
        SongsName: `INSANE  <br> <div class="subtitle">
                        AP Dhillon
                    </div>`,
        poster:"images/11.jpg"
    },
    {
        id: 12,
        SongsName: `Lagdi Lahore Di AA <br> <div class="subtitle">
                        Street Dancer 3
                    </div>`,
        poster:"images/12.jpg"
    },
    {
        id: 13,
        SongsName: `Moonrise <br> <div class="subtitle">
                        Atif Aslam
                    </div>`,
        poster:"images/13.jpg"
    },
    {
        id: 14,
        SongsName: `Musafir <br> <div class="subtitle">
                        Atif Aslam
                    </div>`,
        poster:"images/14.jpg"
    },
    {
        id: 15,
        SongsName: `Zaroori Tha <br> <div class="subtitle">
                        Rahat Fateh Ali Khan
                    </div>`,
        poster:"images/15.jpg"
    },
    {
        id: 16,
        SongsName: `Saadaqi to hamari zara dekhiya <br> <div class="subtitle">
                        Nusrat fateh ali khan(NFAK)
                    </div>`,
        poster:"images/16.jpg"
    },
    {
        id: 17,
        SongsName: `Warriyo - Mortals <br> <div class="subtitle">
                        Mortals
                    </div>`,
        poster:"images/17.jpg"
    },
    
]












Array.from(document.getElementsByClassName('songitem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src=songs[i].poster
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].SongsName
});




              //search result


let searchres = document.getElementsByClassName('searchresults')[0];

songs.forEach(elem => {
    const {id, SongsName, poster} = elem;

    let card = document.createElement('a')
    card.classList.add('card');
    card.href = '#'+id;
    card.innerHTML = `<img src="${poster}" alt="">
                            <div class="contant">
                            ${SongsName}
                            </div>`;
    searchres.appendChild(card);

    card.addEventListener('click', (ell)=>{
        // console.log(index);
        // music.src = `music/${index}.mp3`;
        ell.preventDefault();
        music.src = `music/${id}.mp3`;
        posterplay.src =`images/${id}.jpg`;
        posternav.src =`images/${id}.jpg`;
        music.play();
        if (music.paused || music.currentTime <= 0) {
            music.play(); // Play the song
            playButton.textContent = 'Pause'; // Change button text to "Pause"
            wave.classList.add('active1');
            masterplay.classList.remove('bi-play-fill');
            masterplay.classList.add('bi-pause-fill');
        } else {
            music.pause(); // Pause the song
            playButton.textContent = 'Play'; // Change button text back to "Play"
            wave.classList.remove('active1');
            masterplay.classList.add('bi-play-fill');
            masterplay.classList.remove('bi-pause-fill');
        }
    })

    
});


let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
     let inputv = input.value.toUpperCase();
     let items = searchres.getElementsByTagName('a');

     for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('contant')[0];
        let textvalue = as.textContent || as.innerHTML;

        if (textvalue.toUpperCase().indexOf(inputv) > -1 ) {
            items[index].style.display="flex";
        } else {
            items[index].style.display="none";
        }
        if (inputv==0) {
            searchres.style.display="none";
        } else {
            searchres.style.display="";
        }
     }
}); 



let playButton = document.getElementById('playbutton');

// Event listener to handle the "Play" button functionality
playButton.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play(); // Play the song
        playButton.textContent = 'Pause'; // Change button text to "Pause"
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    } else {
        music.pause(); // Pause the song
        playButton.textContent = 'Play'; // Change button text back to "Play"
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
});




let masterplay =document.getElementById('play');

let wave =document.getElementById('wave');

masterplay.addEventListener('click', () =>{
    if (music.paused || music.currenttime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
        el.target.classList.remove('bi-pause-circle-fill');
        el.target.classList.add('bi-play-circle-fill');
    }
})



const playlist = ()=>{
    Array.from(document.getElementsByClassName('Playlistplay')).forEach((el)=>{
        el.style.background = `rgba(101, 165, 111, .0)`;
        el.classList.remove('bi-pause-circle-fill');
        el.classList.add('bi-play-circle-fill');
        
    })
}
const background = ()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
        el.style.background = `rgba(101, 165, 111, .0)`;
    })
}



let index = 0;
let posternav = document.getElementById('posternav');
let posterplay = document.getElementById('poster');
let download = document.getElementById('download');
let title = document.getElementById('title');
let titlenav = document.getElementById('titlenav');
Array.from(document.getElementsByClassName('Playlistplay')).forEach((e)=>{
     e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `music/${index}.mp3`;
        posterplay.src =`images/${index}.jpg`;
        posternav.src =`images/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        
        download.href = `music/${index}.mp3`;


        let songtitle = songs.filter((els) => {
            return els.id == index;
        });
        songtitle.forEach((elss) =>{
            let {SongsName} = elss;

            let songnameOnly = SongsName.split('<br>')[0].trim();

            title.innerHTML = SongsName;
            titlenav.innerHTML = SongsName;
            download.href = `music/${index}.mp3`;
            download.setAttribute('download', songnameOnly)
        });

        background();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = `rgba(101, 165, 111, .35)`; 

        if (el.target.classList.contains('bi-play-circle-fill')) {
            // If the element has the 'bi-play-circle-fill' class (indicating play state)
            playlist();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill'); // Switch to pause icon
            wave.classList.add('active1'); // Add wave effect or animation
            masterplay.classList.remove('bi-play-fill');
            masterplay.classList.add('bi-pause-fill');
        
        } else {
            // If the element does NOT have the 'bi-play-circle-fill' class (indicating pause state)
            el.target.classList.remove('bi-pause-circle-fill');
            el.target.classList.add('bi-play-circle-fill'); // Switch to play icon
            wave.classList.remove('active1'); // Remove wave effect or animation
            music.pause();
            masterplay.classList.add('bi-play-fill');
            masterplay.classList.remove('bi-pause-fill');
        }

        


     });
})



let current_time = document.getElementById('currenttime');
let end_time = document.getElementById('endtime');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
     let music_cur = music.currentTime;
     let music_dur = music.duration;
     let min1 =Math.floor(music_dur/60);
     let sec1 =Math.floor(music_dur%60);
     if (sec1<10) {
        sec1 =`0${sec1}`;
     }

     end_time.innerHTML=`${min1}:${sec1}`;

     let min2 = Math.floor(music_cur/60)
     let sec2 =Math.floor(music_cur%60);

     if (sec2<10) {
        sec2 =`0${sec2}`;
     }

     current_time.innerHTML=`${min2}:${sec2}`;


     let progressbar = parseInt((music_cur / music_dur) * 100);
     seek.value =progressbar;

     let seekbar = seek.value;
     bar2.style.width=`${seekbar}%`;
     dot.style.left = `${seekbar}%`;


});



seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
})


let volicon = document.getElementById('volicon');
let vol = document.getElementById('vol');

let volbar = document.getElementById('volbar');
let dot2 = document.getElementById('dot2');



vol.addEventListener('change', () => {
    if (vol.value == 0) {
        volicon.classList.remove('bi-volume-up-fill', 'bi-volume-down-fill');
        volicon.classList.add('bi-volume-mute-fill');
    } else if (vol.value <= 50) {
        volicon.classList.remove('bi-volume-up-fill', 'bi-volume-mute-fill');
        volicon.classList.add('bi-volume-down-fill');
    } else {
        volicon.classList.remove('bi-volume-down-fill', 'bi-volume-mute-fill');
        volicon.classList.add('bi-volume-up-fill');
    }
    let vola = vol.value;
    volbar.style.width= `${vola}%`;
    dot2.style.left= `${vola}%`;

    music.volume = vol.value / 100; // Set volume
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
        
    }
    music.src = `music/${index}.mp3`;
        posterplay.src =`images/${index}.jpg`;
        posternav.src =`images/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        


        let songtitle = songs.filter((els) => {
            return els.id == index;
        });
        songtitle.forEach((elss) =>{
            let {SongsName} = elss;
            title.innerHTML = SongsName;
            titlenav.innerHTML = SongsName;
        });

        background();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = `rgba(101, 165, 111, .35)`; 

        if (el.target.classList.contains('bi-play-circle-fill')) {
            // If the element has the 'bi-play-circle-fill' class (indicating play state)
            playlist();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill'); // Switch to pause icon
            wave.classList.add('active1'); // Add wave effect or animation
            masterplay.classList.remove('bi-play-fill');
            masterplay.classList.add('bi-pause-fill');
        
        } else {
            // If the element does NOT have the 'bi-play-circle-fill' class (indicating pause state)
            el.target.classList.remove('bi-pause-circle-fill');
            el.target.classList.add('bi-play-circle-fill'); // Switch to play icon
            wave.classList.remove('active1'); // Remove wave effect or animation
            music.pause();
            masterplay.classList.add('bi-play-fill');
            masterplay.classList.remove('bi-pause-fill');
        }
})


next.addEventListener('click', ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('songitem')).length) {
        index = 1
        
    }
    music.src = `music/${index}.mp3`;
        posterplay.src =`images/${index}.jpg`;
        posternav.src =`images/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        


        let songtitle = songs.filter((els) => {
            return els.id == index;
        });
        songtitle.forEach((elss) =>{
            let {SongsName} = elss;
            title.innerHTML = SongsName;
            titlenav.innerHTML = SongsName;
        });

        background();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = `rgba(101, 165, 111, .35)`; 

        if (el.target.classList.contains('bi-play-circle-fill')) {
            // If the element has the 'bi-play-circle-fill' class (indicating play state)
            playlist();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill'); // Switch to pause icon
            wave.classList.add('active1'); // Add wave effect or animation
            masterplay.classList.remove('bi-play-fill');
            masterplay.classList.add('bi-pause-fill');
        
        } else {
            // If the element does NOT have the 'bi-play-circle-fill' class (indicating pause state)
            el.target.classList.remove('bi-pause-circle-fill');
            el.target.classList.add('bi-play-circle-fill'); // Switch to play icon
            wave.classList.remove('active1'); // Remove wave effect or animation
            music.pause();
            masterplay.classList.add('bi-play-fill');
            masterplay.classList.remove('bi-pause-fill');
        }
})



let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () =>{
    let a = shuffle.innerHTML.trim();

    switch(a) {
        case "Next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'Next';
            break;
    }
})





const next_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index ++;
    }
        music.src = `music/${index}.mp3`;
        posterplay.src =`images/${index}.jpg`;
        posternav.src =`images/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        
        download.href = `music/${index}.mp3`;


        let songtitle = songs.filter((els) => {
            return els.id == index;
        });
        songtitle.forEach((elss) =>{
            let {SongsName} = elss;

            let songnameOnly = SongsName.split('<br>')[0].trim();

            title.innerHTML = SongsName;
            titlenav.innerHTML = SongsName;
            download.setAttribute('download', songnameOnly)
        });

        background();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = `rgba(101, 165, 111, .35)`; 

        if (el.target.classList.contains('bi-play-circle-fill')) {
            // If the element has the 'bi-play-circle-fill' class (indicating play state)
            playlist();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill'); // Switch to pause icon
            wave.classList.add('active1'); // Add wave effect or animation
            masterplay.classList.remove('bi-play-fill');
            masterplay.classList.add('bi-pause-fill');
        
        } else {
            // If the element does NOT have the 'bi-play-circle-fill' class (indicating pause state)
            el.target.classList.remove('bi-pause-circle-fill');
            el.target.classList.add('bi-play-circle-fill'); // Switch to play icon
            wave.classList.remove('active1'); // Remove wave effect or animation
            music.pause();
            masterplay.classList.add('bi-play-fill');
            masterplay.classList.remove('bi-pause-fill');
        }
}

const repeat_music = () => {
        index;
        music.src = `music/${index}.mp3`;
        posterplay.src =`images/${index}.jpg`;
        posternav.src =`images/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        
        download.href = `music/${index}.mp3`;


        let songtitle = songs.filter((els) => {
            return els.id == index;
        });
        songtitle.forEach((elss) =>{
            let {SongsName} = elss;

            let songnameOnly = SongsName.split('<br>')[0].trim();

            title.innerHTML = SongsName;
            titlenav.innerHTML = SongsName;
            download.setAttribute('download', songnameOnly)
        });

        background();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = `rgba(101, 165, 111, .35)`; 

        if (el.target.classList.contains('bi-play-circle-fill')) {
            // If the element has the 'bi-play-circle-fill' class (indicating play state)
            playlist();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill'); // Switch to pause icon
            wave.classList.add('active1'); // Add wave effect or animation
            masterplay.classList.remove('bi-play-fill');
            masterplay.classList.add('bi-pause-fill');
        
        } else {
            // If the element does NOT have the 'bi-play-circle-fill' class (indicating pause state)
            el.target.classList.remove('bi-pause-circle-fill');
            el.target.classList.add('bi-play-circle-fill'); // Switch to play icon
            wave.classList.remove('active1'); // Remove wave effect or animation
            music.pause();
            masterplay.classList.add('bi-play-fill');
            masterplay.classList.remove('bi-pause-fill');
        }
}

const random_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random() * songs.length)+1);
    }
    music.src = `music/${index}.mp3`;
    posterplay.src =`images/${index}.jpg`;
    posternav.src =`images/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    download.href = `music/${index}.mp3`;


    let songtitle = songs.filter((els) => {
        return els.id == index;
    });
    songtitle.forEach((elss) =>{
        let {SongsName} = elss;

        let songnameOnly = SongsName.split('<br>')[0].trim();

        title.innerHTML = SongsName;
        titlenav.innerHTML = SongsName;
        download.setAttribute('download', songnameOnly)
    });

    background();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = `rgba(101, 165, 111, .35)`; 

    if (el.target.classList.contains('bi-play-circle-fill')) {
        // If the element has the 'bi-play-circle-fill' class (indicating play state)
        playlist();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill'); // Switch to pause icon
        wave.classList.add('active1'); // Add wave effect or animation
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    
    } else {
        // If the element does NOT have the 'bi-play-circle-fill' class (indicating pause state)
        el.target.classList.remove('bi-pause-circle-fill');
        el.target.classList.add('bi-play-circle-fill'); // Switch to play icon
        wave.classList.remove('active1'); // Remove wave effect or animation
        music.pause();
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
}

music.addEventListener('ended', () =>{
    let b = shuffle.innerHTML; // Get the current shuffle state

    switch (b) {
        case 'Next':
            next_music();
            break;
        case 'repeat':
            repeat_music();
            break;
        case 'random':
            random_music();
            break;
    }
    
})




let pop_songs_left = document.getElementById('pop_songs_left');
let pop_songs_right = document.getElementById('pop_songs_right');
let pop_artist_left = document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let popsongs = document.getElementsByClassName('popsongs')[0];
let items = document.getElementsByClassName('item')[0];
pop_songs_right.addEventListener('click', () => {
    popsongs.scrollLeft += 350;
})
pop_songs_left.addEventListener('click', () =>{
    popsongs.scrollLeft -= 350;
})

pop_artist_right.addEventListener('click', () => {
    items.scrollLeft += 350;
})
pop_artist_left.addEventListener('click', () =>{
    items.scrollLeft -= 350;
});




               // media section//





if (window.matchMedia("(max-width: 850px)").matches) {
    let manulist = document.getElementById('manulist');
    let manuside = document.getElementsByClassName('manuside')[0];
    
    manulist.addEventListener('click', () => {
        manuside.style.transform = "unset";
        manulist.style.opacity = 0;
    });
    
    let songside = document.getElementsByClassName('songside')[0];
    
    songside.addEventListener('click', () => {
        manuside.style.transform = "translateX(-100%)";
        manulist.style.opacity = 1;
    });
}

// Optionally, listen for screen resizing
        let manulist = document.getElementById('manulist');
        let manuside = document.getElementsByClassName('manuside')[0];
window.addEventListener('resize', () => {
    if (window.matchMedia("(max-width: 850px)").matches) {        
        manulist.addEventListener('click', () => {
            manuside.style.transform = "unset";
            manulist.style.opacity = 0;
        });
        let songside = document.getElementsByClassName('songside')[0];
        
        songside.addEventListener('click', () => {
            manuside.style.transform = "translateX(-100%)";
            manulist.style.opacity = 1;
        });
    }
    else{
        songside.addEventListener('click', () => {
            manuside.style.transform = "translateX(-100%)";
            manulist.style.opacity = 1;
        });
    }
});

