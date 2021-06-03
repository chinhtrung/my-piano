// const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// const timestamps = [];

// timestamps.unshift(getTimestamp());

// function getRandomNumber(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomKey() {
//   return keys[getRandomNumber(0, keys.length-1)]
// }

// function targetRandomKey() {
//   const key = document.getElementById(getRandomKey());
//   key.classList.add("selected");
//   let start = Date.now()
// }

// function getTimestamp() {
//   return Math.floor(Date.now() / 1000)
// }

// document.addEventListener("keyup", event => {
//   const keyPressed = String.fromCharCode(event.keyCode);
//   const keyElement = document.getElementById(keyPressed);
//   const highlightedKey = document.querySelector(".selected");
  
//   keyElement.classList.add("hit")
//   keyElement.addEventListener('animationend', () => {
//     keyElement.classList.remove("hit")
//   })
  
//   if (keyPressed === highlightedKey.innerHTML) {
//     timestamps.unshift(getTimestamp());
//     const elapsedTime = timestamps[0] - timestamps[1];
//     console.log(`Character per minute ${60/elapsedTime}`)
//     highlightedKey.classList.remove("selected");
//     targetRandomKey();
//   } 
// })

// targetRandomKey();

// var keyData = {
//     q: {
//         sound: new Howl({
//           urls: ['./sounds/bubbles.mp3']
//         })
//     },
//     w: {
//         sound: new Howl({
//           urls: ['./sounds/clay.mp3']
//         })
//     },
//     e: {
//         sound: new Howl({
//           urls: ['./sounds/confetti.mp3']
//         })
//     },
//     r: {
//         sound: new Howl({
//           urls: ['./sounds/corona.mp3']
//         })
//     },
//         t: {
//         sound: new Howl({
//           urls: ['./sounds/dotted-spiral.mp3']
//         })
//     },
//     y: {
//         sound: new Howl({
//           urls: ['./sounds/flash-1.mp3']
//         })
//     },
//     u: {
//         sound: new Howl({
//           urls: ['./sounds/flash-2.mp3']
//         })
//     },
//     i: {
//         sound: new Howl({
//           urls: ['./sounds/flash-3.mp3']
//         })
//     },
//     o: {
//         sound: new Howl({
//             urls: ['./sounds/glimmer.mp3']
//         })
//     },
//     p: {
//         sound: new Howl({
//           urls: ['./sounds/moon.mp3']
//         })
//     },
//     a: {
//         sound: new Howl({
//           urls: ['./sounds/pinwheel.mp3']
//         })
//     },
//     s: {
//         sound: new Howl({
//           urls: ['./sounds/piston-1.mp3']
//         })
//     },
//         d: {
//         sound: new Howl({
//           urls: ['./sounds/piston-2.mp3']
//         })
//     },
//     f: {
//         sound: new Howl({
//           urls: ['./sounds/prism-1.mp3']
//         })
//     },
//     g: {
//         sound: new Howl({
//           urls: ['./sounds/prism-2.mp3']
//         })
//     },
//     h: {
//         sound: new Howl({
//           urls: ['./sounds/prism-3.mp3']
//         })
//     },
//     j: {
//         sound: new Howl({
//           urls: ['./sounds/splits.mp3']
//         })
//     },
//     k: {
//         sound: new Howl({
//           urls: ['./sounds/squiggle.mp3']
//         })
//     },
//     l: {
//         sound: new Howl({
//           urls: ['./sounds/strike.mp3']
//         })
//     },
//     z: {
//         sound: new Howl({
//           urls: ['./sounds/suspension.mp3']
//         })
//     },
//     x: {
//         sound: new Howl({
//           urls: ['./sounds/timer.mp3']
//         })
//     },
//     c: {
//         sound: new Howl({
//           urls: ['./sounds/ufo.mp3']
//         })
//     },
//     v: {
//         sound: new Howl({
//           urls: ['./sounds/veil.mp3']
//         })
//     },
//     b: {
//         sound: new Howl({
//           urls: ['./sounds/wipe.mp3']
//         })
//     },
//     n: {
//         sound: new Howl({
//             urls: ['./sounds/zig-zag.mp3']
//         })
//     },
//     m: {
//         sound: new Howl({
//           urls: ['./sounds/moon.mp3']
//         })
//     }
// }

var keyData = {
    "`" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.C.octave1",
        piaKeyPressClass: "white-press"
    },
    "~" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".black.Db.octave1",
        piaKeyPressClass: "black-press"
    },
    "1" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.D.octave1",
        piaKeyPressClass: "white-press"
    },
    "!" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".black.Eb.octave1",
        piaKeyPressClass: "black-press"
    },
    "2" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.E.octave1",
        piaKeyPressClass: "white-press"
    },
    "@" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.F.octave1",
        piaKeyPressClass: "white-press"
    },
    "3" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.F.octave1",
        piaKeyPressClass: "white-press"
    },
    "#" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".black.Gb.octave1",
        piaKeyPressClass: "black-press"
    },
    "4" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.G.octave1",
        piaKeyPressClass: "white-press"
    },
    "$" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".black.Ab.octave1",
        piaKeyPressClass: "black-press"
    },
    "5" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.A.octave1",
        piaKeyPressClass: "white-press"
    },
    "%" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".black.Bb.octave1",
        piaKeyPressClass: "black-press"
    },
    "6" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.B.octave1",
        piaKeyPressClass: "white-press"
    },
    "^" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.C.octave2",
        piaKeyPressClass: "white-press"
    },

    // q: {
    //     sound: new Howl({
    //       urls: ['./sounds/bubbles.mp3']
    //     })
    // },
    // w: {
    //     sound: new Howl({
    //       urls: ['./sounds/clay.mp3']
    //     })
    // },
    // e: {
    //     sound: new Howl({
    //       urls: ['./sounds/confetti.mp3']
    //     })
    // },
    // r: {
    //     sound: new Howl({
    //       urls: ['./sounds/corona.mp3']
    //     })
    // },
    //     t: {
    //     sound: new Howl({
    //       urls: ['./sounds/dotted-spiral.mp3']
    //     })
    // },
    // y: {
    //     sound: new Howl({
    //       urls: ['./sounds/flash-1.mp3']
    //     })
    // },
    // u: {
    //     sound: new Howl({
    //       urls: ['./sounds/flash-2.mp3']
    //     })
    // },
    // i: {
    //     sound: new Howl({
    //       urls: ['./sounds/flash-3.mp3']
    //     })
    // },
    // o: {
    //     sound: new Howl({
    //         urls: ['./sounds/glimmer.mp3']
    //     })
    // },
    // p: {
    //     sound: new Howl({
    //       urls: ['./sounds/moon.mp3']
    //     })
    // },
    // a: {
    //     sound: new Howl({
    //       urls: ['./sounds/pinwheel.mp3']
    //     })
    // },
    // s: {
    //     sound: new Howl({
    //       urls: ['./sounds/piston-1.mp3']
    //     })
    // },
    //     d: {
    //     sound: new Howl({
    //       urls: ['./sounds/piston-2.mp3']
    //     })
    // },
    // f: {
    //     sound: new Howl({
    //       urls: ['./sounds/prism-1.mp3']
    //     })
    // },
    // g: {
    //     sound: new Howl({
    //       urls: ['./sounds/prism-2.mp3']
    //     })
    // },
    // h: {
    //     sound: new Howl({
    //       urls: ['./sounds/prism-3.mp3']
    //     })
    // },
    // j: {
    //     sound: new Howl({
    //       urls: ['./sounds/splits.mp3']
    //     })
    // },
    // k: {
    //     sound: new Howl({
    //       urls: ['./sounds/squiggle.mp3']
    //     })
    // },
    // l: {
    //     sound: new Howl({
    //       urls: ['./sounds/strike.mp3']
    //     })
    // },
    // z: {
    //     sound: new Howl({
    //       urls: ['./sounds/suspension.mp3']
    //     })
    // },
    // x: {
    //     sound: new Howl({
    //       urls: ['./sounds/timer.mp3']
    //     })
    // },
    // c: {
    //     sound: new Howl({
    //       urls: ['./sounds/ufo.mp3']
    //     })
    // },
    // v: {
    //     sound: new Howl({
    //       urls: ['./sounds/veil.mp3']
    //     })
    // },
    // b: {
    //     sound: new Howl({
    //       urls: ['./sounds/wipe.mp3']
    //     })
    // },
    // n: {
    //     sound: new Howl({
    //         urls: ['./sounds/zig-zag.mp3']
    //     })
    // },
    // m: {
    //     sound: new Howl({
    //       urls: ['./sounds/moon.mp3']
    //     })
    // }
}



var lastEvent;
var heldKeys = {};

document.onkeydown = function (e) {
    if (lastEvent && lastEvent.key == e.key) {
        return;
    }

    lastEvent = e;
    heldKeys[e.key] = true;

    let keyOnKeyboard = document.querySelector("#" + e.code);
    let note = document.querySelector(keyData[e.key].piaKeyClass);

    if(keyData[e.key]){
        keyData[e.key].sound.play();
    }

    console.dir(e);

    keyOnKeyboard.classList.add("selected");
    console.log(keyData[e.key].piaKeyPressClass);
    note.classList.add(keyData[e.key].piaKeyPressClass);
};

document.onkeyup = function (e) {
    let keyOnKeyboard = document.querySelector("#" + e.code);
    let note = document.querySelector(keyData[e.key].piaKeyClass);
    
    lastEvent = null;
    heldKeys[e.key] = false;
    keyOnKeyboard.classList.remove("selected");
    note.classList.remove(keyData[e.key].piaKeyPressClass);
}


