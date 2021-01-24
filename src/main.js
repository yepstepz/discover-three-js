import { World } from './World/world.js';

// create the main function
function main() {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');
    const buttonMove = document.querySelector('#move');

    // 1. Create an instance of the World app
    const world = new World(container)
    world.render();
    world.start();

    // buttonMove.addEventListener('click', () => {
    //     world.moveCam();
    // })
    // buttonStop.addEventListener('click', () => {
    //     world.stop();
    // })
}

// call main to start the app
main();
