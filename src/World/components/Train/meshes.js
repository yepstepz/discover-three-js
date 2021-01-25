import { Mesh, Group } from 'https://unpkg.com/three/build/three.module.js';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    const cabin = new Mesh(geometries.cabin, materials.body)
    cabin.position.set(1.5, 1.4, 0);
    cabin.visible = false

    const chimney = new Mesh(geometries.chimney, materials.detail);
    chimney.position.set(-2, 1.9, 0)

    const nose = new Mesh(geometries.nose, materials.body);
    nose.position.set(-1, 1, 0)
    nose.rotation.z = Math.PI / 2;

    const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
    smallWheelRear.rotation.x = Math.PI / 2;
    smallWheelRear.position.y = 0.5;

    const smallWheelCenter = smallWheelRear.clone();
    smallWheelCenter.position.x = -1

    const smallWheelFront = smallWheelRear.clone();
    smallWheelFront.position.x = -2
    smallWheelFront.rotation.x = Math.PI / 2;

    const bigWheel = smallWheelRear.clone();
    bigWheel.position.set(1.5, 0.9, 0)
    bigWheel.scale.set(2, 1.25, 2);

    const cabinGroup = new Group()
    const bottomCabin = new Mesh(geometries.bottomCabin, materials.body)
    bottomCabin.position.set(1.5, 1, 0);

    const pillar = new Mesh(geometries.pillar, materials.body)
    pillar.position.set(0.65, 2, 0)
    const backPillar = pillar.clone()
    backPillar.position.x = 2.35

    const topCabin = new Mesh(geometries.topCabin, materials.body)
    topCabin.position.set(1.5, 2.3, 0)

    cabinGroup.add(bottomCabin, pillar,backPillar,topCabin)

    const railsGroup = new Group()
    const track = new Mesh(geometries.track, materials.detail)
    track.position.set(0, 0.06, -0.85)

    const rightTrack = track.clone()
    rightTrack.position.z = 0.85

    const board = new Mesh(geometries.board, materials.additional)
    board.rotation.y = Math.PI/2
    board.position.set(-2.45, 0.05, 0)

    railsGroup.add(track, rightTrack, board)

    for (let i = 1; i < 4; i++) {
        const additionalBoard = board.clone()
        additionalBoard.position.x = board.position.x + 1.5 * i
        railsGroup.add(additionalBoard)
    }

    const smokeGroup = new Group()

    const bubble = new Mesh(geometries.bubble, materials.smoke)
    bubble.position.set(-2, 3, 0)

    const secondBubble = bubble.clone()
    secondBubble.position.set(-2.55, 3.25, 0)
    secondBubble.scale.set(1.25,1.25,1.25)

    const thirdBubble = bubble.clone()
    thirdBubble.position.set(-1.55, 3.5, 0)
    thirdBubble.scale.set(1.5,1.5,1.5)


    smokeGroup.add(bubble, secondBubble, thirdBubble)

    return {
        cabin,
        chimney,
        smallWheelRear,
        smallWheelCenter,
        smallWheelFront,
        bigWheel,
        nose,
        cabinGroup,
        railsGroup,
        smokeGroup
    };
}

export { createMeshes }
