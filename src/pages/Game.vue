<script setup>
//In order to work with this project you need some reasoning skills, a good understanding of javascript and the basics of Three.js and Vue.js
//Flip animation taken from and modified for my needs
//https://codepen.io/boytchev/pen/wvQRERM?editors=1010

import Confetti from "../components/Confetti.vue";
import Navbar from "../components/Navbar.vue";
import { ref, onMounted } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { Tween, Easing, update } from "three/addons/libs/tween.module.js"
import * as THREE from 'three';
import { language } from "../languages";
import { store } from '../store.js'

const canvas = ref(null)
const version = ref(0)



function changeLanguage() {
    if (store.current_language === "fr") {
        store.current_language = "eng"
    } else {
        store.current_language = "fr"
    }
}

const info = ref(false)

const number_of_flips = ref(0)
const numbers_of_crepes = ref(4)
const lowest_crepe = ref(0)
const highest_crepe = ref(0)
// const score = ref(0)
const solving = ref(false)
const can_solve = ref(false)
//const flipping = ref(false)


let raycaster;


const old_group_position_y = ref(0)
let clicked_id = undefined
let light
let scene;
let camera;
let renderer;
let controls;

let won = false


const pointer = new THREE.Vector2(Infinity, Infinity);
const group = new THREE.Group();




let crepes = []
let table = []
let restart_table = []

raycaster = new THREE.Raycaster();

onMounted(() => {
    try {
      
        // if (!localStorage.getItem("minimum_recod_flips")) {
        //     localStorage.setItem("minimum_recod_flips", 1000);
        // }
        // score.value = localStorage.getItem("minimum_recod_flips")
        scene = new THREE.Scene()
        scene.background = new THREE.Color('gainsboro');
        light = new THREE.DirectionalLight('white', 1);
        light.position.set(1, 1, 1);
        scene.add(light)

        scene.add(group)
        let ambientLight = new THREE.AmbientLight('white', 0.5);
        scene.add(ambientLight);
        renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true })
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight);

        camera.position.set(0, 2, 10);

        camera.lookAt(scene.position);

        controls = new OrbitControls(camera, renderer.domElement);

        controls.enableDamping = true;
        initCrepes()
        animate()
    } catch (error) {

    }
})


//The Fisher-Yates algorith https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
//////////////////////////////////////////////


function randomCrepe() {
    while (group.children.length) {
        scene.attach(group.children[0]);
    }
    number_of_flips.value = 0
    // localStorage.setItem("minimum_recod_flips", 1000)
    // score.value = localStorage.getItem("minimum_recod_flips")
    solving.value = true

    for (let i = 0; i < crepes.length; i++) {
        crepes[i].rotation.set(0, 0, 0)
    }

    shuffleArray(crepes)
    table = []
    if (version.value === 1) {
        for (let i = crepes.length - 1; i >= 0; i--) {
            table.push({ id: crepes[i].id, side: Math.floor(Math.random() * 2) })
        }
    } else {
        for (let i = crepes.length - 1; i >= 0; i--) {
            table.push({ id: crepes[i].id, side: 0 })
        }
    }

    restart_table = []

    for (let i = crepes.length - 1; i >= 0; i--) {
        crepes[i].position.y = 0.2 * i - 0.5;
        restart_table.push({ id: crepes[i].id, y: crepes[i].position.y, side: table[i].side })
    }

    for (let i = 0; i < crepes.length; i++) {

        if (table[i].side === 1) {
            crepes[i].rotation.x += (Math.PI / 2) * 2
        }
        table[i].side = restart_table[i].side
    }
    solving.value = false
    can_solve.value = true
    // console.log(table);
    // console.log(restart_table);
}

const clicked_restart = ref(false)
function restartCrepes() {
    
    if (clicked_restart.value) return
    clicked_restart.value = true
    while (group.children.length) {
        scene.attach(group.children[0]);
    }

    table = []
    let ok = true
    let low = lowest_crepe.value
    for (let i = 0; i < restart_table.length; i++) {

        table[i] = {
            id: restart_table[i].id,
            side: restart_table[i].side
        }
        if (table[i].id !== low) {
            ok = false
        }
        low++
    }

    for (let i = 0; i < restart_table.length; i++) {
        for (let j = 0; j < crepes.length; j++) {
            if (restart_table[i].id === crepes[j].id) {
                crepes[j].rotation.set(0, 0, 0)
                if (restart_table[i].side === 1) {
                    crepes[j].rotation.x += (Math.PI / 2) * 2
                }
                crepes[j].position.set(crepes[j].position.x, restart_table[i].y, crepes[j].position.z)
            }

        }
    }

    number_of_flips.value = 0

    if (!ok) {
        can_solve.value = true
    } else {
        can_solve.value = false
    }
    won = false
    solving.value = false
    // console.log(table);
    // console.log(restart_table);
}

function initCrepes() {
    // score.value = 1000
    // localStorage.getItem("minimum_recod_flips", score.value)
    won = false
    group.clear()
    restart_table = []
    table = []
    number_of_flips.value = 0
    if (crepes.length > 0) {
        for (let i = 0; i < crepes.length; i++) {
            crepes[i].geometry.dispose()
            scene.remove(crepes[i])
        }
    }

    crepes = []

    for (let i = numbers_of_crepes.value - 1; i >= 0; i--) {
        let color = new THREE.Color().setHSL(i / numbers_of_crepes.value, i % 2, i % 2 ? 0.5 : 1);
        let geometry = new THREE.CylinderGeometry(1.2 - i / numbers_of_crepes.value / 1,
            1.2 - i / numbers_of_crepes.value / 1, 0.18)

        let disc

        if (version.value === 1) {

            const positionAttribute = geometry.getAttribute('position');
            const colorAttribute = new THREE.Float32BufferAttribute(positionAttribute.count * 3, 3);

            for (let j = 0; j < positionAttribute.count; j += 1) {

                let vertexColor = new THREE.Color();
                if (j >= positionAttribute.count - 196 / 3) {
                    vertexColor.setRGB(0, 0, 0); // Black color for the bottom side

                } else {
                    vertexColor.copy(color); 
                }
                colorAttribute.setXYZ(j, vertexColor.r, vertexColor.g, vertexColor.b);
            }

            geometry.setAttribute('color', colorAttribute);
            disc = new THREE.Mesh(
                geometry,
                new THREE.MeshLambertMaterial({
                    vertexColors: true
                }));
        } else {

            disc = new THREE.Mesh(
                geometry,
                new THREE.MeshLambertMaterial({
                    color: color,
                }));
        }


        disc.position.y = 0.2 * i - 0.5;
        table.push({ id: disc.id, side: 0 })
        restart_table.push({ id: disc.id, y: disc.position.y, side: 0 })
        crepes.push(disc);
        scene.add(disc)
    }

    lowest_crepe.value = table[0].id
    highest_crepe.value = table[table.length - 1].id

}

function addCrepe() {

    if (crepes.length < 20) {
        old_group_position_y.value = null
        for (let i = 0; i < crepes.length; i++) {
            crepes[i].geometry.dispose()
            scene.remove(crepes[i])
        }
        
        table = []
        crepes = []
        crepes.length = 0
        highest_crepe.value += 1
        numbers_of_crepes.value += 1

        initCrepes()
    }
}

function removeCrepe() {

    if (crepes.length > 4) {
        old_group_position_y.value = null
        for (let i = 0; i < crepes.length; i++) {
            crepes[i].geometry.dispose()
            scene.remove(crepes[i])
        }
     
        table = []
        crepes = []
        crepes.length = 0
        numbers_of_crepes.value -= 1
        highest_crepe.value -= 1

        initCrepes()
    }

}



document.addEventListener('mousedown', (event) => {

    if (event.detail === 2 && !solving.value && !info.value) {

        pointer.x = ((event.clientX / window.innerWidth) * 2 - 1);
        pointer.y = (-(event.clientY / window.innerHeight) * 2 + 1);
        raycaster.setFromCamera(pointer, camera);
        const intersection = raycaster.intersectObjects(crepes);

        if (!(intersection.length > 0 && intersection[0].object.type === "Mesh")) return
        while (group.children.length) {
            scene.attach(group.children[0]);
        }
        group.rotation.z = 0;
        group.position.y = 0;
        solving.value = true
        let y = intersection[0].object.position.y
        clicked_id = intersection[0].object.id

        group.position.y = (0.2 * (numbers_of_crepes.value - 1) - 0.5 + y) / 2;

        let i = 0
        while (i < crepes.length) {
            if (crepes[i].position.y >= y) {

                group.attach(crepes[i])
            }
            i++
        }

        old_group_position_y.value = group.position.y

        // new Tween(group.position)
        //     .to({ y: group.position.y + 1 }, 300)
        //     .easing(Easing.Quadratic.Out)
        //     .onComplete(()=>{
        //         flipping.value = true
        //     solving.value = true
        //     })
        //     .start();

        i = 0
        while (i < table.length) {
            if (table[i].id === clicked_id) {
                break
            }
            i++
        }

        if (version.value === 1) {
            if (i === 0) {
                table[0].side = (table[0].side === 0) ? 1 : 0
            } else {
                for (let j = 0; j < i + 1; j++) {
                    table[j].side = (table[j].side === 0) ? 1 : 0
                }
            }
        }
        for (let j = 0; j < i / 2; j++) {
            let tmp = table[j]
            table[j] = table[i - j]
            table[i - j] = tmp
        }

        new Tween(group.position)
            .to({ y: group.position.y + 1 }, 300)
            .easing(Easing.Quadratic.Out)
            .chain(new Tween(group.position)
                .to({ y: old_group_position_y.value }, 300)
                .easing(Easing.Quadratic.In))
            .start();

        new Tween(group.rotation)
            .to({ z: Math.PI }, 600)
            .onComplete(() => {


                number_of_flips.value += 1

                solving.value = false


                let low = lowest_crepe.value
                let k = 0
                won = true

                while (k < table.length) {

                    if (table[k].id !== low) {
                        won = false
                        break
                    }
                    k++
                    low++
                }
                if (version.value === 1) {

                    for (let ii = 0; ii < table.length; ii++) {
                        if (table[ii].side !== 0) {
                            won = false
                            ii = table.length
                        }
                    }
                }

                if (won) {
                    can_solve.value = false
                } else {
                    can_solve.value = true
                }
                if (version.value === 1) {
                    if (won) {

                        // if (score.value > number_of_flips.value) {
                        //     score.value = number_of_flips.value
                        //     localStorage.setItem("minimum_recod_flips", score.value)
                        // }
                        alertWon()
                    }
                } else {
                    if (won && i !== 0) {

                        // if (score.value > number_of_flips.value) {
                        //     score.value = number_of_flips.value
                        //     localStorage.setItem("minimum_recod_flips", score.value)
                        // }
                        alertWon()
                    }
                }

            })
            .start()
    }

}, false);



window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}, false);

window.addEventListener('zoom', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}, false);


function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

// function cancelFlip() {

// new Tween(group.position)
//     .to({ y: old_group_position_y.value }, 300)
//     .easing(Easing.Quadratic.In)
//     .onComplete(()=>{
//         solving.value = false
//         flipping.value = false
//     })
//     .start()
// }

// async function flip() {


//    new Tween(group.rotation)
//        .to({ z: Math.PI }, 600)
//        .start()
//    new Tween(group.position)
//        .to({ y: old_group_position_y.value }, 1200)
//        .easing(Easing.Quadratic.In)
//        .onComplete(() => {
//            let i = 0

//            while (i < table.length) {
//                if (table[i] === clicked_id) {
//                    break
//                }
//                i++
//            }

//            for (let j = 0; j < i / 2; j++) {
//                let tmp = table[j]
//                table[j] = table[i - j]
//                table[i - j] = tmp
//            }
//          //  console.log(table);
//            solving.value = false
//            can_solve.value = true
//            flipping.value = false
//        })
//        .start()

// }


async function solveAnimation(id) {
    while (group.children.length) {
        scene.attach(group.children[0]);
    }
    group.rotation.z = 0;
    group.position.y = 0;

    const object = scene.getObjectById(id);

    let y = object.position.y

    group.position.y = (0.2 * (numbers_of_crepes.value - 1) - 0.5 + y) / 2;

    let i = 0

    while (i < crepes.length) {
        if (crepes[i].position.y >= y) {
            group.attach(crepes[i])
        }
        i++
    }

    let old_y = group.position.y


    new Tween(group.position)
        .to({ y: group.position.y + 1 }, 100)
        .easing(Easing.Quadratic.Out)
        .chain(new Tween(group.position)

            .to({ y: old_y }, 100)
            .easing(Easing.Quadratic.In))
        .start();

    new Tween(group.rotation)
        .to({ z: Math.PI }, 200).start()
    id = -1
}


// This is the most difficult part of code
// To solve crepes i use recursion
// version 0 is the default one
// version 1 is where the crepe has black side

// So you need to sort from lowest crepe at top to highest at bottom they are represent in array as [15, 16, 17, 18] 4 crepes
// The trick is to place the biggest crepe to top if it is not at it

// let's say if an array is [15, 17, 16, 18] when you flip the index 1(17) you are flipping also all crepes above
// so it will be [17, 15, 16, 18] then you need to place it to index 2(in place of 16) so you flip crepe 16
// it becomes [16, 15, 17, 18] and now you need to flip crepe at index 1(15) to place it at beggining 

// max crepe is starting at highest and each time it is decreasing say from 18 to 17 etc. also the end index k is incrementing from 0 to +1 in order get wanted position of crepe
async function solve(max, k) {
    solving.value = true

    let i = 0
    // i am looking for a biggest crepe's position
    while (i < table.length) {
        if (table[i].id >= max) {
            max = table[i].id
            break
        }
        i++
    }
    // for default version check if the max crepe is the latest crepe if true you have solved!
    // for black side version you just check color !
    if (i === 0 && max === table[i].id && k === table.length - 1) {
        //   console.log(max, i, k, table, " done 1");
        if (version.value === 1) {
            let ok = true
            for (let ii = 0; ii < table.length; ii++) {
                if (table[ii].side === 1) {
                    ok = false
                    ii = table.length
                }
            }
            if (ok) {
                can_solve.value = false
                solving.value = false
                clicked_restart.value = false
                console.log("done");
                return
            }
        } else {
            console.log("done");
            clicked_restart.value = false
            can_solve.value = false
            solving.value = false
            return
        }
    }

    //when i is 0 means the crepe that we are looking for is at begging of array
    if (i === 0) {
        // means that the crepe is the latest crepe there are no crepe left so the game is solved!
        if (k === table.length - 1) {
            // black side version you need to flip it
            if (version.value === 1) {
                if (table[0].side === 1) {
                    //    console.log(max, i, k, table, "flip the top");
                    solveAnimation(table[0].id)
                    await delay(600)
                    table[i].side = (table[i].side === 0) ? 1 : 0
                    console.log("done");
                    can_solve.value = false
                    solving.value = false
                    return
                }

            } else {

                //   console.log(max, i, k, table, "swap index 0 with index 1");
                let tmp = table[0]
                table[0] = table[1]
                table[1] = tmp

                solveAnimation(table[0].id)
                await delay(600)
                table[0] = (table[0] === 1) ? 0 : 1
                table[1] = (table[1] === 1) ? 0 : 1
                
                console.log("done");
                can_solve.value = false
                solving.value = false
                return
            }

        } else {

            //crepe is at begging but there still are crepes that are next max crepes

            //white side crepe flip it to black side because when you going to flip where it position has to be, it will be flipped correctly(black side down)
            if (version.value === 1 && table[i].side === 0) {
                solveAnimation(table[0].id)
                await delay(600)
                table[0].side = 1
            }

            //swap all positions in an array till the current end index (k)
            for (let j = 0; j < (table.length - k) / 2; j++) {
                let tmp = table[j]
                table[j] = table[table.length - 1 - j - k]
                table[table.length - 1 - j - k] = tmp
            }
            solveAnimation(table[i].id)
            await delay(600)
            //swap black side to white side and vice versa
            if (version.value === 1) {
                for (let j = 0; j < (table.length - k); j++) {
                    table[j].side = (table[j].side === 0) ? 1 : 0
                }
            }

            //  console.log(max, i, k, table, " position 0");
          
        }
    }

    // our crepe is not at begging means in between till i/2
    // we need to place it to begging of array example we look for a crepe 18 [15, 16, 18, 17] we swap all from that i to begging [18, 16, 15, 17]
    
    else if (i > 0 && (table.length - 1 - k) !== i) {
        //  console.log(max, i, k, table, "between");
        // swap all positions till i
        for (let j = 0; j < i / 2; j++) {

            let tmp = table[j]
            table[j] = table[i - j]
            table[i - j] = tmp

        }

        solveAnimation(max)
        await delay(600)
        // swap all colors till i + 1
        if (version.value === 1) {
            for (let j = 0; j < i + 1; j++) {
                table[j].side = (table[j].side === 0) ? 1 : 0
            }

        }

    
         // because it is now at begging we need to redo for it
        max += 1
        k--
    }

    //special case for black side crepe if it is at it position you need to flip to begging else continue
    else if (i === table.length - 1 - k && version.value === 1 && table[i].side === 1) {
            
            solveAnimation(table[i].id)
            await delay(600)
            // again swap all crepes from current to begging
            for (let j = 0; j < (table.length - k) / 2; j++) {

                let tmp = table[j]
                table[j] = table[table.length - 1 - j - k]

                table[table.length - 1 - j - k] = tmp

            }
            // swap all sides
            for (let j = 0; j < (table.length - k); j++) {
                    table[j].side = (table[j].side === 0) ? 1 : 0
            }
           
            // because it is now at begging we need to redo for it
            max += 1
            k--
    }
    k++
    max -= 1
    await delay(100)
    solve(max, k)
}

function runRecursiveSolve() {
    number_of_flips.value = 0
    solve(highest_crepe.value, 0)
}

function animate(t) {
    camera.updateMatrixWorld();
    controls.update();
    update()
    light.position.copy(camera.position);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}


function alertInfo() {
    if (info.value) {
        cancelInfo()
    } else {
        document.getElementById("alertInfo").classList = "absolute z-40 lg:flex-col lg:w-1/3 lg:left-1/3 lg:top-1/4 sm:left-0 md:left-0 sm:h-full opacity-100 bg-white"
        info.value = true
    }
}
function cancelInfo() {
    document.getElementById("alertInfo").classList = "absolute -z-10 opacity-0"
    info.value = false
}

function alertWon() {
    // console.log("Alert win");
    toggleConfetti()
    solving.value = true
    document.getElementById("winInfo").classList = "absolute flex justify-center items-center text-center z-40 w-full top-1/4 opacity-100"
    setTimeout(() => {
        number_of_flips.value = 0
        document.getElementById("winInfo").classList = "absolute -z-10 opacity-0"
        solving.value = false
    }, 4000);
}

// State variables
const confettiVisible = ref(false);
const confettiKey = ref(0); // Initial key value

// Method to toggle confetti and update animation properties
const toggleConfetti = () => {
    confettiVisible.value = !confettiVisible.value;
    confettiKey.value++; // Increment the key to trigger animation
};
</script>
<template>
    <Navbar class="absolute p-2" />
    <div id="alertInfo" class="absolute -z-10 opacity-0">
        <div class=" bg-blue-500 text-white font-bold text-xl p-2">
            Info
        </div>
        <div class="flex-col">
            <p class="p-2 text-black-900 text-2xl">{{ language[store.current_language].game_rule_title }}</p>
            <p class="p-2 text-black-900 text-xl">{{ language[store.current_language].game_rule_description }}</p>
            <br><br><br>
            <p class="p-2 text-black-900 text-2xl">{{ language[store.current_language].how_to_play_title }}</p>
            <p class="p-2 text-black-900 text-xl">{{ language[store.current_language].how_to_play_description }}</p>
            <a class="float-left p-2 py-4 text-blue-500 text-xl" href="https://portail.terra-numerica.org/res/rsrc/785"
                target="_blank">{{ language[store.current_language].link_text }}</a>

            <button @click="cancelInfo"
                class="rounded float-right px-5 p-2 m-2 bg-blue-500 text-white font-bold">OK</button>
        </div>
    </div>


    <div id="winInfo" class="absolute -z-10 opacity-0">
        <!-- Confetti animation code  -->
        <!-- https://codepen.io/amardeeprai/pen/YzNLEav -->
        <div class="confetti">
            <div class="confetti__wrapper">
                <span v-for="n in 51">
                    <Confetti :class="'confetti-left-' + (n - 1)"
                        :key="confettiKey" />
                    <Confetti :class="'confetti-right-' + (n - 1)"
                        :key="confettiKey" />
                </span>
            </div>
        </div>
        <p class="bg-white p-2 text-xl w-auto h-auto">{{ language[store.current_language].winMessage }}</p>
    </div>




    <div id="actions_group" class="absolute z-10 flex flex-wrap w-full justify-center items-center bottom-0">
        <button @click="changeLanguage" class="rounded p-2 m-2 bg-gray-900 text-white font-bold text-xl">{{
            language[store.current_language].lang }}</button>
        <button v-bind:disabled="solving" @click="alertInfo" class="rounded p-2 m-2 bg-gray-900 text-white font-bold">
            Info
        </button>
        <button v-bind:disabled="solving" @click="() => { (version === 0 ? version = 1 : version = 0), initCrepes() }"
            class="rounded p-2 px-4 m-2 bg-gray-900 text-white font-bold">
            Version {{ version }}
        </button>

        <button v-bind:disabled="solving" class="rounded p-2 m-2 bg-amber-400 text-black font-bold text-xl"
            @click.prevent="randomCrepe">{{ language[store.current_language].randomize }}</button>
        <button v-bind:disabled="solving || !(numbers_of_crepes > 4)"
            class="rounded-l p-2 m-2 bg-blue-500 text-white font-bold text-xl" @click.prevent="removeCrepe">-</button>
        <span class="rounded-none p-2 text-black font-bold text-xl">{{ numbers_of_crepes }}</span>
        <button v-bind:disabled="solving || !(numbers_of_crepes < 20)"
            class="rounded-r p-2 m-2 bg-blue-500 text-white font-bold text-xl" @click.prevent="addCrepe">+</button>
        <button v-bind:disabled="solving" class="rounded p-2 m-2 bg-teal-600 text-white font-bold text-xl"
            @click.prevent="restartCrepes">{{ language[store.current_language].restart }}</button>
        <span class="p-2 m-2 text-black font-bold text-xl">{{ language[store.current_language].flips_text }}: {{ number_of_flips
        }}</span>
        <!-- <span class="p-2 m-2 text-black font-bold text-xl">{{ language[store.current_language].score }}: {{ score }}</span> -->
        <button v-bind:disabled="won || solving || !can_solve"
            class="flex justify-end rounded p-2 m-2 bg-blue-500 text-black font-bold text-xl"
            @click.prevent="runRecursiveSolve">{{ language[store.current_language].solve
            }}</button>
           <a href="#/" class="rounded px-5 p-2 m-2 bg-amber-400 text-black font-bold text-xl">{{ language[store.current_language].back }}</a>
    </div>
 
    <canvas class="z-0" ref="canvas"></canvas>

</template>

<style setup>

    html,
    body{
    overscroll-behavior-x: none;
    overscroll-behavior-y: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    } 

    body {
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    }

</style>
