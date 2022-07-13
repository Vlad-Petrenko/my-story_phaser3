import Phaser from "phaser";

import PreloadScene from "./scenes/PreloadScene.js";
import IntroScene from "./scenes/IntroScene.js";
import BeachDressScene from "./scenes/BeachDressScene.js";
import BeachDressStrawBagScene from "./scenes/BeachDressStrawBagScene.js";
import BeachDressStrawBagNecklaceScene from "./scenes/BeachDressStrawBagNecklaceScene.js";
import BeachDressStrawBagGlassesScene from "./scenes/BeachDressStrawBagGlassesScene.js";
import BeachDressStrawBagNecklaceBalconyScene from "./scenes/BeachDressStrawBagNecklaceBalconyScene.js";
import BeachDressStrawBagGlassesBalconyScene from "./scenes/BeachDressStrawBagGlassesBalconyScene.js";
import BeachDressBlueBagScene from "./scenes/BeachDressBlueBagScene.js";
import BeachDressBlueBagGlassesScene from "./scenes/BeachDressBlueBagGlassesScene.js";
import BeachDressBlueBagNecklaceScene from "./scenes/BeachDressBlueBagNecklaceScene.js";
import BeachDressBlueBagNecklaceBalconyScene from "./scenes/BeachDressBlueBagNecklaceBalconyScene.js";
import BeachDressBlueBagGlassesBalconyScene from "./scenes/BeachDressBlueBagGlassesBalconyScene.js";
import BeachDressBlueBagGlassesBeachScene from "./scenes/BeachDressBlueBagGlassesBeachScene.js";
import BeachDressBlueBagNecklaceBeachScene from "./scenes/BeachDressBlueBagNecklaceBeachScene.js";
import BeachDressStrawBagGlassesBeachScene from "./scenes/BeachDressStrawBagGlassesBeachScene.js";
import BeachDressStrawBagNecklaceBeachScene from "./scenes/BeachDressStrawBagNecklaceBeachScene.js";
import PinkDressScene from "./scenes/PinkDressScene.js";
import PinkDressStrawBagScene from "./scenes/PinkDressStrawBagScene.js";
import PinkDressBlueBagScene from "./scenes/PinkDressBlueBagScene.js";
import PinkDressBlueBagCollarScene from "./scenes/PinkDressBlueBagCollarScene.js";
import PinkDressBlueBagGlassesScene from "./scenes/PinkDressBlueBagGlassesScene.js";
import PinkDressStrawBagCollarScene from "./scenes/PinkDressStrawBagCollarScene.js";
import PinkDressStrawBagGlassesScene from "./scenes/PinkDressStrawBagGlassesScene.js";
import PinkDressBlueBagCollarBalconyScene from "./scenes/PinkDressBlueBagCollarBalconyScene.js";
import PinkDressBlueBagCollarBeachScene from "./scenes/PinkDressBlueBagCollarBeachScene.js";
import PinkDressBlueBagGlassesBalconyScene from "./scenes/PinkDressBlueBagGlassesBalconyScene.js";
import PinkDressBlueBagGlassesBeachScene from "./scenes/PinkDressBlueBagGlassesBeachScene.js";
import PinkDressStrawBagCollarBalconyScene from "./scenes/PinkDressStrawBagCollarBalconyScene.js";
import PinkDressStrawBagCollarBeachScene from "./scenes/PinkDressStrawBagCollarBeachScene.js";
import PinkDressStrawBagGlassesBalconyScene from "./scenes/PinkDressStrawBagGlassesBalconyScene.js";
import PinkDressStrawBagGlassesBeachScene from "./scenes/PinkDressStrawBagGlassesBeachScene.js";

const GAME_HEIGHT = 800;
const GAME_WIDTH = 800;

const config = {
  title: "myGame",
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  parent: "game",

  scale: {
    parent: "mygame",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  scene: [
    PreloadScene,
    IntroScene,
    BeachDressScene,
    BeachDressStrawBagScene,
    BeachDressBlueBagScene,
    BeachDressStrawBagNecklaceScene,
    BeachDressStrawBagGlassesScene,
    BeachDressBlueBagNecklaceScene,
    BeachDressBlueBagGlassesScene,
    BeachDressStrawBagGlassesBalconyScene,
    BeachDressBlueBagGlassesBeachScene,
    BeachDressStrawBagNecklaceBalconyScene,
    BeachDressBlueBagNecklaceBeachScene,
    BeachDressBlueBagNecklaceBalconyScene,
    BeachDressStrawBagNecklaceBeachScene,
    BeachDressBlueBagGlassesBalconyScene,
    BeachDressStrawBagGlassesBeachScene,
    PinkDressScene,
    PinkDressStrawBagScene,
    PinkDressBlueBagScene,
    PinkDressBlueBagCollarScene,
    PinkDressBlueBagGlassesScene,
    PinkDressStrawBagCollarScene,
    PinkDressStrawBagGlassesScene,
    PinkDressBlueBagCollarBalconyScene,
    PinkDressBlueBagCollarBeachScene,
    PinkDressBlueBagGlassesBalconyScene,
    PinkDressBlueBagGlassesBeachScene,
    PinkDressStrawBagCollarBalconyScene,
    PinkDressStrawBagCollarBeachScene,
    PinkDressStrawBagGlassesBalconyScene,
    PinkDressStrawBagGlassesBeachScene,
  ],
};

export const game = new Phaser.Game(config);
