import Phaser from "phaser";
import { finishGame } from "../assets/function/function";

export default class BeachDressStrawBagNecklaceBalconyScene extends Phaser.Scene {
  constructor() {
    super("BeachDressStrawBagNecklaceBalconyScene");
  }

  create() {
    let globalThis = this;
    this.add.image(0, 0, "balcony").setOrigin(0, 0);
    const man = this.add.image(1000, 450, "man_happy");
    const girl = this.add
      .image(-150, 500, "girl_beach_dress_straw_bag_necklace")
      .setScale(0.8);
    const manText = this.add.image(400, 450, "Paul_good_finish").setScale(0);
    const playNow = this.add
      .image(400, 650, "play_now")
      .setScale(0)
      .setInteractive();
    finishGame(man, girl, manText, playNow, globalThis);
  }
}
