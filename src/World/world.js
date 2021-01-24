import { MathUtils } from 'https://unpkg.com/three/build/three.module.js';

import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

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

class World {
    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        const cube = createCube();

        const { ambientLight, mainLight, spotLight, hemisphereLight } = createLights();



        const controls = createControls(camera, renderer.domElement);
        controls.enablePan = false
        controls.enableDamping = true;

        loop.updatables.push(controls);

        scene.add(mainLight, hemisphereLight,  cube);

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
}

export { World };
