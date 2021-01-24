import { DirectionalLight, PointLight, SpotLight, RectAreaLight } from 'https://unpkg.com/three/build/three.module.js';

function createLights() {
    // Create a directional light
    const light = new DirectionalLight('white', 8);

    // move the light right, up, and towards us
    light.position.set(10, 10, 10);

    light.tick = (delta) => {

    }

    return light;
}

export { createLights };
