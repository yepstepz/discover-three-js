import { PerspectiveCamera, MathUtils } from 'https://unpkg.com/three/build/three.module.js';

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // fov = Field Of View
        1, // aspect ratio (dummy value)
        0.1, // near clipping plane
        100, // far clipping plane
    );

    // move the camera back so we can view the scene
    camera.position.set(-1.5, 1.5, 6.5);

    return camera;
}

export { createCamera };
