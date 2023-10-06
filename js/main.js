import { DadsGameLoop } from "./DadsGameLoop.js"
import { registerGameLoop } from "https://atmostadam.github.io/game-library/gamedev.js";

window.addEventListener("load", function () {
    registerGameLoop(new DadsGameLoop()); // Ignore registerGameLoop for now. This will be covered in a future lesson.
});