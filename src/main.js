import { World } from './World/world.js';

// create the main function
async function main() {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');

    // create a new world
    const world = new World(container);

    // complete async tasks
    await world.init();
    world.start();

    document.querySelector('#move').addEventListener('click', () => {
    })
    // buttonStop.addEventListener('click', () => {
    //     world.stop();
    // })
}

// call main to start the app
main().catch((err) => {
    console.error(err);
});
