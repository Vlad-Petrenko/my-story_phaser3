import Phaser from "phaser";
import {
  sceneStart,
  hoverBtn,
  addBtn,
  addText,
  handAnimSet,
} from "../assets/function/function";

export default class PinkDressBlueBagScene extends Phaser.Scene {
  constructor() {
    super("PinkDressBlueBagScene");
  }

  preload() {}
  create() {
    let globalThis = this;
    this.add.image(0, 0, "bedroom").setOrigin(0, 0);
    this.add.image(400, 500, "girl_pink_dress_blue_bag");

    const btnGlasses = this.add
      .image(150, 650, "btn_glasses")
      .setScale(0)
      .setInteractive();

    const btnCollar = this.add
      .image(650, 650, "btn_collar")
      .setScale(0)
      .setInteractive();

    addBtn(btnCollar, this);
    addBtn(btnGlasses, this);
    addText("choose_accessory", this);
    hoverBtn(btnCollar, this);
    hoverBtn(btnGlasses, this);
    handAnimSet(this);

    this.input.on("gameobjectdown", listener);

    function listener(pointer, gameObject) {
      if (gameObject.texture.key !== "btn_glasses") {
        sceneStart(btnCollar, "PinkDressBlueBagCollarScene", globalThis);
      } else {
        sceneStart(btnGlasses, "PinkDressBlueBagGlassesScene", globalThis);
      }
    }
  }
}
