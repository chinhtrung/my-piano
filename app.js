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
        piaKeyClass: ".white.C.octave2",
        piaKeyPressClass: "white-press"
    },
    "~" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".black.Db.octave2",
        piaKeyPressClass: "black-press"
    },
    "1" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.D.octave2",
        piaKeyPressClass: "white-press"
    },
    "!" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".black.Eb.octave2",
        piaKeyPressClass: "black-press"
    },
    "2" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.E.octave2",
        piaKeyPressClass: "white-press"
    },
    "@" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.F.octave2",
        piaKeyPressClass: "white-press"
    },
    "3" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.F.octave2",
        piaKeyPressClass: "white-press"
    },
    "#" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".black.Gb.octave2",
        piaKeyPressClass: "black-press"
    },
    "4" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.G.octave2",
        piaKeyPressClass: "white-press"
    },
    "$" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".black.Ab.octave2",
        piaKeyPressClass: "black-press"
    },
    "5" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.A.octave2",
        piaKeyPressClass: "white-press"
    },
    "%" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".black.Bb.octave2",
        piaKeyPressClass: "black-press"
    },
    "6" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.B.octave2",
        piaKeyPressClass: "white-press"
    },
    "^" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.C.octave3",
        piaKeyPressClass: "white-press"
    },
    "q" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".white.C.octave3",
        piaKeyPressClass: "white-press"
    },
    "Q" : {
        sound: new Howl({
            urls: ['./sounds/bubbles.mp3']
        }),
        piaKeyClass: ".black.Db.octave3",
        piaKeyPressClass: "black-press"
    },
    "w" : {
        sound: new Howl({
            urls: ['./sounds/clay.mp3']
        }),
        piaKeyClass: ".white.D.octave3",
        piaKeyPressClass: "white-press"
    },
    "W" : {
        sound: new Howl({
            urls: ['./sounds/clay.mp3']
        }),
        piaKeyClass: ".black.Eb.octave3",
        piaKeyPressClass: "black-press"
    },
    "e" : {
        sound: new Howl({
            urls: ['./sounds/confetti.mp3']
        }),
        piaKeyClass: ".white.E.octave3",
        piaKeyPressClass: "white-press"
    },
    "E" : {
        sound: new Howl({
            urls: ['./sounds/confetti.mp3']
        }),
        piaKeyClass: ".white.F.octave3",
        piaKeyPressClass: "white-press"
    },
    "r" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.F.octave3",
        piaKeyPressClass: "white-press"
    },
    "R" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Gb.octave3",
        piaKeyPressClass: "black-press"
    },
    "t" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.G.octave3",
        piaKeyPressClass: "white-press"
    },
    "T" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Ab.octave3",
        piaKeyPressClass: "black-press"
    },
    "a" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.A.octave3",
        piaKeyPressClass: "white-press"
    },
    "A" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Bb.octave3",
        piaKeyPressClass: "black-press"
    },
    "s" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.B.octave3",
        piaKeyPressClass: "white-press"
    },
    "S" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.C.octave4",
        piaKeyPressClass: "white-press"
    },
    "d" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.C.octave4",
        piaKeyPressClass: "white-press"
    },
    "D" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Db.octave4",
        piaKeyPressClass: "black-press"
    },
    "f" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.D.octave4",
        piaKeyPressClass: "white-press"
    },
    "F" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Eb.octave4",
        piaKeyPressClass: "black-press"
    },
    "g" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.E.octave4",
        piaKeyPressClass: "white-press"
    },
    "G" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.F.octave4",
        piaKeyPressClass: "white-press"
    },
    "z" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.F.octave4",
        piaKeyPressClass: "white-press"
    },
    "Z" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Gb.octave4",
        piaKeyPressClass: "black-press"
    },
    "x" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.G.octave4",
        piaKeyPressClass: "white-press"
    },
    "X" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Ab.octave4",
        piaKeyPressClass: "black-press"
    },
    "c" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.A.octave4",
        piaKeyPressClass: "white-press"
    },
    "C" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Bb.octave4",
        piaKeyPressClass: "black-press"
    },
    "v" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.B.octave4",
        piaKeyPressClass: "white-press"
    },
    "V" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.C.octave5",
        piaKeyPressClass: "white-press"
    },
    "b" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.C.octave5",
        piaKeyPressClass: "white-press"
    },
    "B" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Db.octave5",
        piaKeyPressClass: "black-press"
    },
    "n" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.D.octave5",
        piaKeyPressClass: "white-press"
    },
    "N" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Eb.octave5",
        piaKeyPressClass: "black-press"
    },
    "m" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.E.octave5",
        piaKeyPressClass: "white-press"
    },
    "M" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.F.octave5",
        piaKeyPressClass: "white-press"
    },
    "h" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.F.octave5",
        piaKeyPressClass: "white-press"
    },
    "H" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.Gb.octave5",
        piaKeyPressClass: "white-press"
    },
    "j" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.G.octave5",
        piaKeyPressClass: "white-press"
    },
    "J" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Ab.octave5",
        piaKeyPressClass: "black-press"
    },
    "k" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.A.octave5",
        piaKeyPressClass: "white-press"
    },
    "K" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Bb.octave5",
        piaKeyPressClass: "black-press"
    },
    "l" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.B.octave5",
        piaKeyPressClass: "white-press"
    },
    "L" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.C.octave6",
        piaKeyPressClass: "white-press"
    },

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

    "7" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.C.octave7",
        piaKeyPressClass: "white-press"
    },
    "&" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Db.octave7",
        piaKeyPressClass: "black-press"
    },
    "8" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.D.octave7",
        piaKeyPressClass: "white-press"
    },
    "*" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Eb.octave7",
        piaKeyPressClass: "black-press"
    },
    "9" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.E.octave7",
        piaKeyPressClass: "white-press"
    },
    "(" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.F.octave7",
        piaKeyPressClass: "white-press"
    },
    "0" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.F.octave7",
        piaKeyPressClass: "white-press"
    },
    ")" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Gb.octave7",
        piaKeyPressClass: "black-press"
    },
    "-" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.G.octave7",
        piaKeyPressClass: "white-press"
    },
    "_" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Ab.octave7",
        piaKeyPressClass: "black-press"
    },
    "=" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.A.octave7",
        piaKeyPressClass: "white-press"
    },
    "+" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".black.Bb.octave7",
        piaKeyPressClass: "black-press"
    },
    "Backspace" : {
        sound: new Howl({
            urls: ['./sounds/corona.mp3']
        }),
        piaKeyClass: ".white.B.octave7",
        piaKeyPressClass: "white-press"
    },
}



var lastEvent;
var heldKeys = {};

document.onkeydown = function (e) {
    if (lastEvent && lastEvent.key == e.key) {
        return;
    }

    console.dir(e);

    lastEvent = e;
    heldKeys[e.key] = true;

    let keyOnKeyboard = document.querySelector("#" + e.code);
    let note = document.querySelector(keyData[e.key].piaKeyClass);

    if(keyData[e.key]){
        keyData[e.key].sound.play();
    }

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


