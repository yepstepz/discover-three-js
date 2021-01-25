import { BoxBufferGeometry, CylinderBufferGeometry, SphereBufferGeometry } from 'https://unpkg.com/three/build/three.module.js';

function createGeometries() {
    const cabin = new BoxBufferGeometry(2, 2.25, 1.5)
    const nose = new CylinderBufferGeometry(0.75, 0.75, 3, 12)
    const wheel = new CylinderBufferGeometry(0.4, 0.4, 1.75, 16)
    const chimney = new CylinderBufferGeometry(0.3, 0.1, 0.5)
    const pillar = new BoxBufferGeometry(0.3, 0.5, 1.5)

    const bottomCabin = new BoxBufferGeometry(2, 1.5, 1.5)
    const topCabin = new BoxBufferGeometry(2, 0.3, 1.5)

    const track = new BoxBufferGeometry (6, 0.10, 0.5)
    const board = new BoxBufferGeometry (1.75, 0.10, 0.15)

    const bubble = new SphereBufferGeometry( 0.25, 16, 16 )



    return { cabin, nose, wheel, chimney, bottomCabin, topCabin, pillar, track, board, bubble }
}

export { createGeometries }
