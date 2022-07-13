import Phaser from "phaser";
import {
  sceneStart,
  hoverBtn,
  addBtn,
  handAnimSet,
  addText,
} from "../assets/function/function";

export default class IntroScene extends Phaser.Scene {
  constructor() {
    super("IntroScene");
  }

  create() {
    let globalThis = this;
    const bgImage = this.add.image(0, 0, "bedroom").setOrigin(0, 0);
    bgImage.setAlpha(0.3);

    this.anims.create({
      key: "emotion_man",
      frames: [
        { key: "man_normal" },
        { key: "man_mysterious" },
        { key: "man_happy", duration: 50 },
      ],
      frameRate: 5,
      repeat: 4,
    });

    this.anims.create({
      key: "emotion_girl",
      frames: [
        { key: "girl_suprised" },
        { key: "girl_sad" },
        { key: "girl_shy", duration: 50 },
      ],
      frameRate: 5,
      repeat: 4,
    });

    const playbleMan = this.add
      .sprite(1000, 450, "man_normal")
      .play("emotion_man");

    const manText = this.add.image(350, 350, "Paul_start_text").setScale(0);

    const girl = this.add.sprite(-150, 450, "girl_happy").play("emotion_girl");

    const girlText = this.add.image(350, 400, "Lexy_start_text").setScale(0);

    const btnBeachDress = this.add
      .image(150, 650, "btn_beach_dress")
      .setScale(0)
      .setInteractive();

    const btnPinkDress = this.add
      .image(650, 650, "btn_pink_dress")
      .setScale(0)
      .setInteractive();

    this.tweens.add({
      targets: playbleMan,
      x: 600,
      duration: 400,
    });

    this.tweens.add({
      targets: manText,
      scale: 0.3,
      duration: 200,
      delay: 300,
    });

    setTimeout(() => {
      playbleMan.destroy();
      manText.destroy();
    }, 1300);

    this.tweens.add({
      targets: girl,
      x: 200,
      duration: 300,
      delay: 1400,
    });

    this.tweens.add({
      targets: girlText,
      scale: 0.3,
      duration: 200,
      delay: 1500,
    });

    setTimeout(() => {
      girlText.destroy();
    }, 2300);

    this.tweens.add({
      targets: girl,
      scale: 1.3,
      x: 400,
      y: 500,
      duration: 300,
      delay: 2300,
    });

    setTimeout(() => {
      addBtn(btnPinkDress, this);
      addBtn(btnBeachDress, this);
      this.add.image(400, 50, "choose_dress");
      bgImage.setAlpha(1);
      handAnimSet(this);
    }, 2500);

    hoverBtn(btnPinkDress, this);
    hoverBtn(btnBeachDress, this);

    this.input.on("gameobjectdown", listener);

    function listener(pointer, gameObject) {
      if (gameObject.texture.key !== "btn_pink_dress") {
        sceneStart(btnBeachDress, "BeachDressScene", globalThis);
      } else {
        sceneStart(btnPinkDress, "PinkDressScene", globalThis);
      }
    }
  }
}
