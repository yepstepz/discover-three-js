function setupModel(data) {
    const model = data.scene.children[0];

    model.material.customProgramCacheKey = () => {}
    model.geometry.hasAttribute = () => {}

    return model;
}

export { setupModel };
