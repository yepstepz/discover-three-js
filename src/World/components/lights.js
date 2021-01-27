import {
    DirectionalLight,
    PointLight,
    SpotLight,
    RectAreaLight,
    AmbientLight,
    HemisphereLight,
} from 'https://unpkg.com/three/build/three.module.js';

function createLights() {
    const ambientLight = new HemisphereLight(
        'white',
        'darkslategrey',
        5,
    );

    const mainLight = new DirectionalLight('white', 4);
    mainLight.position.set(10, 10, 10);

    return { ambientLight, mainLight };
}

export { createLights };
