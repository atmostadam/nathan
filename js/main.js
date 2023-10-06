import { NathansGameLoop } from "./NathansGameLoop.js"
import { registerGameLoop } from "https://atmostadam.github.io/game-library/gamedev.js";

window.addEventListener("load", function () {
    registerGameLoop(new NathansGameLoop()); // Ignore registerGameLoop for now. This will be covered in a future lesson.
});