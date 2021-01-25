import { MeshStandardMaterial } from 'https://unpkg.com/three/build/three.module.js';

function createMaterials() {
    const body = new MeshStandardMaterial({
        color: 'firebrick',
        flatShading: true,
    });

    const detail = new MeshStandardMaterial({
        color: 'darkslategray',
        flatShading: true,
    });

    const additional = new MeshStandardMaterial({
        color: 'yellow',
        flatShading: true,
    });

    const smoke = new MeshStandardMaterial({
        color: 'white',
        flatShading: true,
    });

    return { body, detail, additional, smoke };
}

export { createMaterials }
