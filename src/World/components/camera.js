import { PerspectiveCamera, MathUtils } from 'https://unpkg.com/three/build/three.module.js';

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // fov = Field Of View
        1, // aspect ratio (dummy value)
        0.1, // near clipping plane
        100, // far clipping plane
    );

    // move the camera back so we can view the scene
    camera.position.set(0, 0, 10);
    let direction = 1;
    camera.tick = (delta) => {
        // increase the cube's rotation each frame
        // camera.position.z += 0.16 * direction;
        // if (camera.position.z % 10 <= 0.16 ) {
        //     direction = direction * -1;
        // }
    };


    return camera;
}

export { createCamera };
