import Phaser from "phaser";
import {
  sceneStart,
  hoverBtn,
  addBtn,
  addText,
  handAnimSet,
} from "../assets/function/function";

export default class BeachDressBlueBagScene extends Phaser.Scene {
  constructor() {
    super("BeachDressBlueBagScene");
  }

  preload() {}
  create() {
    let globalThis = this;
    this.add.image(0, 0, "bedroom").setOrigin(0, 0);
    this.add.image(400, 500, "girl_beach_dress_blue_bag");

    const btnGlasses = this.add
      .image(150, 650, "btn_glasses")
      .setScale(0)
      .setInteractive();

    const btnNecklace = this.add
      .image(650, 650, "btn_necklace")
      .setScale(0)
      .setInteractive();

    addBtn(btnGlasses, this);
    addBtn(btnNecklace, this);
    addText("choose_accessory", this);
    hoverBtn(btnGlasses, this);
    hoverBtn(btnNecklace, this);
    handAnimSet(this);

    this.input.on("gameobjectdown", listener);

    function listener(pointer, gameObject) {
      if (gameObject.texture.key !== "btn_necklace") {
        sceneStart(btnGlasses, "BeachDressBlueBagGlassesScene", globalThis);
      } else {
        sceneStart(btnNecklace, "BeachDressBlueBagNecklaceScene", globalThis);
      }
    }
  }
}
