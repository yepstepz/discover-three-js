import {
    BoxBufferGeometry,
    CircleBufferGeometry,
    Mesh,
    MeshBasicMaterial,
    MeshStandardMaterial,
    TextureLoader,
    MathUtils
} from 'https://unpkg.com/three/build/three.module.js';

const materials = {
    'basic': MeshBasicMaterial,
    'standard': MeshStandardMaterial
}

function createMaterial () {
    // create a texture loader.
    const textureLoader = new TextureLoader();
    //textureLoader.crossOrigin = "";
    // load a texture
    const bwTexture = textureLoader.load(
        '/assets/textures/uv-test-bw.png',
    );

    const colTexture = textureLoader.load(
        '/assets/textures/uv-test-col.png',
    );

    // create a "standard" material using
    // the texture we just loaded as a color map
    const material = new MeshStandardMaterial({
        map: bwTexture,
    });

    return material;
}

const radiansPerSecond = MathUtils.degToRad(30);

function createCube() {

    // create a geometry
    const geometry = new BoxBufferGeometry(2, 2, 2);

    const material = createMaterial()

    const cube = new Mesh(geometry, material);

    //cube.rotation.set(-0.5, -0.1, 0.8);
    let direction = 1;
    // this method will be called once per frame
    cube.tick = (delta) => {
        // increase the cube's rotation each frame
        // cube.position.x -= 0.16 * direction;
        // if (cube.position.x < -10 || cube.position.x > 10 ) {
        //     direction = direction * -1;
        // }
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };

    return cube;
}

export { createCube };
