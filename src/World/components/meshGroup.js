import {
    SphereBufferGeometry,
    Group,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    ConeBufferGeometry,
    CylinderBufferGeometry,
    DodecahedronBufferGeometry
} from 'https://unpkg.com/three/build/three.module.js';

function createMeshGroup() {
    // a group holds other objects
    // but cannot be seen itself
    const group = new Group();

    const geometry = new SphereBufferGeometry(0.25, 16, 16);

    const material = new MeshStandardMaterial({
        color: 'indigo',
        flatShading: true,
    });

    // create one prototype sphere
    const protoSphere = new Mesh(geometry, material);

    // every sphere inside the group will be scaled
    group.scale.multiplyScalar(2);

    // add the sphere to the group
    group.add(protoSphere);

    // create twenty clones of the protoSphere
    // and add each to the group
    // 0.05 = 1/20 (20 spheres with i between 0 and 1)
    for (let i = 0; i < 1; i += 0.05) {
        const sphere = protoSphere.clone();

        // position the spheres on around a circle
        sphere.position.x = Math.cos(2 * Math.PI * i);
        sphere.position.y = Math.sin(2 * Math.PI * i);

        group.add(sphere);
    }
    const radiansPerSecond = MathUtils.degToRad(30);
    group.tick = (delta) => {
        group.rotation.z -= delta * radiansPerSecond;
    };

    return group;
}

export { createMeshGroup };
