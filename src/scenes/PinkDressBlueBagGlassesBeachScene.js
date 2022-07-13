import Phaser from "phaser";
import { finishGame } from "../assets/function/function";

export default class PinkDressBlueBagGlassesBeachScene extends Phaser.Scene {
  constructor() {
    super("PinkDressBlueBagGlassesBeachScene");
  }

  create() {
    let globalThis = this;
    this.add.image(0, 0, "beach").setOrigin(0, 0);
    const man = this.add.image(1000, 450, "man_happy");
    const girl = this.add
      .image(-150, 500, "girl_pink_dress_blue_bag_glasses")
      .setScale(0.8);
    const manText = this.add.image(400, 450, "Paul_bad_finish").setScale(0);
    const playNow = this.add
      .image(400, 650, "play_now")
      .setScale(0)
      .setInteractive();
    finishGame(man, girl, manText, playNow, globalThis);
  }
}
