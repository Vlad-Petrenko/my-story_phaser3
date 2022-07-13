import Phaser from "phaser";
import {
  sceneStart,
  hoverBtn,
  addBtn,
  addText,
  handAnimSet,
} from "../assets/function/function";

export default class BeachDressBlueBagGlassesScene extends Phaser.Scene {
  constructor() {
    super("BeachDressBlueBagGlassesScene");
  }

  preload() {}
  create() {
    let globalThis = this;
    this.add.image(0, 0, "bedroom").setOrigin(0, 0);
    this.add.image(400, 500, "girl_beach_dress_blue_bag_glasses");

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
          "BeachDressBlueBagGlassesBalconyScene",
          globalThis
        );
      } else {
        sceneStart(btnBeach, "BeachDressBlueBagGlassesBeachScene", globalThis);
      }
    }
  }
}
