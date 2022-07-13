import Phaser from "phaser";
import {
  sceneStart,
  hoverBtn,
  addBtn,
  addText,
  handAnimSet,
} from "../assets/function/function";

export default class PinkDressStrawBagCollarScene extends Phaser.Scene {
  constructor() {
    super("PinkDressStrawBagCollarScene");
  }

  preload() {}
  create() {
    let globalThis = this;
    this.add.image(0, 0, "bedroom").setOrigin(0, 0);
    this.add.image(400, 500, "girl_pink_dress_straw_bag_collar");

    const btnBalcony = this.add
      .image(150, 650, "btn_balcony")
      .setScale(0)
      .setInteractive();

    const btnBeach = this.add
      .image(650, 650, "btn_beach")
      .setScale(0)
      .setInteractive();

    addBtn(btnBalcony, this);
    addBtn(btnBeach, this);
    addText("choose_place", this);
    hoverBtn(btnBalcony, this);
    hoverBtn(btnBeach, this);
    handAnimSet(this);

    this.input.on("gameobjectdown", listener);

    function listener(pointer, gameObject) {
      if (gameObject.texture.key !== "btn_beach") {
        sceneStart(
          btnBalcony,
          "PinkDressStrawBagCollarBalconyScene",
          globalThis
        );
      } else {
        sceneStart(btnBeach, "PinkDressStrawBagCollarBeachScene", globalThis);
      }
    }
  }
}
