import { MathUtils, Vector3 } from 'https://unpkg.com/three/build/three.module.js';

import { createCamera } from './components/camera.js';
import { createMeshGroup } from './components/meshGroup.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { Train } from './components/Train/Train.js';
import { loadBirds } from './components/birds/birds.js';
import {
    createAxesHelper,
    createGridHelper,
} from './components/helpers.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;
let controls;

let birds

class World {
    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        controls = createControls(camera, renderer.domElement);
        const { ambientLight, mainLight } = createLights();
        loop.updatables.push(controls);

        scene.add(ambientLight, mainLight);


        const resizer = new Resizer(container, camera, renderer);
    }

    // 2. Render the scene
    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }

    async init() {
        // asynchronous setup here
        // load bird models
        birds = await loadBirds();
        const { parrot, flamingo, stork } = birds
        // move the target to the center of the front bird
        controls.target.copy(parrot.position);

        scene.add(parrot, flamingo, stork);
    }
}

export { World };
