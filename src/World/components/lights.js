import {
    DirectionalLight,
    PointLight,
    SpotLight,
    RectAreaLight,
    AmbientLight,
    HemisphereLight,
} from 'https://unpkg.com/three/build/three.module.js';

function createLights() {
    const hemisphereLight = new HemisphereLight('white', 'grey', 3)
    const ambientLight = new AmbientLight('white', 2);

    const mainLight = new DirectionalLight('white', 10);
    mainLight.position.set(10, 10, 10);

    const spotLight = new SpotLight('white', 100);
    spotLight.position.set(5, 5, -5);

    return { ambientLight, mainLight, spotLight, hemisphereLight };
}

export { createLights };
