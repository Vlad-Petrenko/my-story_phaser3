import Phaser from "phaser";
import {
  sceneStart,
  hoverBtn,
  addBtn,
  addText,
  handAnimSet,
} from "../assets/function/function";

export default class PinkDressScene extends Phaser.Scene {
  constructor() {
    super("PinkDressScene");
  }

  create() {
    let globalThis = this;
    this.add.image(0, 0, "bedroom").setOrigin(0, 0);
    this.add.image(400, 500, "girl_pink_dress");

    const btnBlueBag = this.add
      .image(150, 650, "btn_blue_bag")
      .setScale(0)
      .setInteractive();

    const btnStrawBag = this.add
      .image(650, 650, "btn_straw_bag")
      .setScale(0)
      .setInteractive();

    addBtn(btnStrawBag, this);
    addBtn(btnBlueBag, this);
    addText("choose_bag", this);
    hoverBtn(btnStrawBag, this);
    hoverBtn(btnBlueBag, this);
    handAnimSet(this);

    this.input.on("gameobjectdown", listener);

    function listener(pointer, gameObject) {
      if (gameObject.texture.key !== "btn_blue_bag") {
        sceneStart(btnStrawBag, "PinkDressStrawBagScene", globalThis);
      } else {
        sceneStart(btnBlueBag, "PinkDressBlueBagScene", globalThis);
      }
    }
  }
}
