import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    const globalThis = this;
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const loadingText = this.make.text({
      x: 400,
      y: 350,
      text: "Loading...",
      style: {
        font: "36px Nunito",
        fill: "#ffffff",
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: 400,
      y: 395,
      text: "0%",
      style: {
        font: "24px Nunito",
        fill: "#ffffff",
      },
    });

    percentText.setOrigin(0.5, 0.5);

    this.load.on("progress", function (value) {
      percentText.setText(parseInt(value * 100) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on("complete", function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      globalThis.scene.start("IntroScene");
    });

    this.load.image("bedroom", require("../assets/bgImage/bedroom.jpg"));
    this.load.image("beach", require("../assets/bgImage/beach.jpg"));
    this.load.image("balcony", require("../assets/bgImage/balcony.jpg"));
    this.load.image(
      "Lexy_start_text",
      require("../assets/text/Lexy_start_text.png")
    );
    this.load.image(
      "Paul_start_text",
      require("../assets/text/Paul_start_text.png")
    );
    this.load.image(
      "Paul_good_finish",
      require("../assets/text/Paul_good_finish.png")
    );
    this.load.image(
      "Paul_bad_finish",
      require("../assets/text/Paul_bad_finish.png")
    );
    this.load.image("man_happy", require("../assets/heroes/man_happy.png"));
    this.load.image(
      "man_mysterious",
      require("../assets/heroes/man_mysterious.png")
    );
    this.load.image("man_normal", require("../assets/heroes/man_normal.png"));
    this.load.image("girl_happy", require("../assets/heroes/girl_happy.png"));
    this.load.image("girl_sad", require("../assets/heroes/girl_sad.png"));
    this.load.image("girl_shy", require("../assets/heroes/girl_shy.png"));
    this.load.image(
      "girl_suprised",
      require("../assets/heroes/girl_suprised.png")
    );
    this.load.image("choose_dress", require("../assets/text/choose_dress.png"));
    this.load.image(
      "choose_accessory",
      require("../assets/text/choose_accessory.png")
    );
    this.load.image("choose_bag", require("../assets/text/choose_bag.png"));
    this.load.image("choose_place", require("../assets/text/choose_place.png"));
    this.load.image(
      "btn_beach_dress",
      require("../assets/button/btn_beach_dress.png")
    );
    this.load.image(
      "btn_pink_dress",
      require("../assets/button/btn_pink_dress.png")
    );
    this.load.image(
      "btn_straw_bag",
      require("../assets/button/btn_straw_bag.png")
    );
    this.load.image(
      "btn_blue_bag",
      require("../assets/button/btn_blue_bag.png")
    );
    this.load.image("btn_glasses", require("../assets/button/btn_glasses.png"));
    this.load.image(
      "btn_necklace",
      require("../assets/button/btn_necklace.png")
    );
    this.load.image("btn_collar", require("../assets/button/btn_collar.png"));
    this.load.image("btn_balcony", require("../assets/button/btn_balcony.png"));
    this.load.image("btn_beach", require("../assets/button/btn_beach.png"));
    this.load.image(
      "girl_beach_dress",
      require("../assets/heroes/girl_beach_dress.png")
    );
    this.load.image(
      "girl_beach_dress_blue_bag_glasses",
      require("../assets/heroes/girl_beach_dress_blue_bag_glasses.png")
    );
    this.load.image(
      "girl_beach_dress_blue_bag",
      require("../assets/heroes/girl_beach_dress_blue_bag.png")
    );
    this.load.image(
      "girl_beach_dress_straw_bag_glasses",
      require("../assets/heroes/girl_beach_dress_straw_bag_glasses.png")
    );
    this.load.image(
      "girl_beach_dress_straw_bag_necklace",
      require("../assets/heroes/girl_beach_dress_straw_bag_necklace.png")
    );
    this.load.image(
      "girl_beach_dress_straw_bag",
      require("../assets/heroes/girl_beach_dress_straw_bag.png")
    );
    this.load.image(
      "girl_beach_dress_blue_bag_necklace",
      require("../assets/heroes/girl_beach_dress_blue_bag_necklace.png")
    );
    this.load.image(
      "girl_pink_dress",
      require("../assets/heroes/girl_pink_dress.png")
    );
    this.load.image(
      "girl_pink_dress_straw_bag",
      require("../assets/heroes/girl_pink_dress_straw_bag.png")
    );
    this.load.image(
      "girl_pink_dress_straw_bag_glasses",
      require("../assets/heroes/girl_pink_dress_straw_bag_glasses.png")
    );
    this.load.image(
      "girl_pink_dress_straw_bag_collar",
      require("../assets/heroes/girl_pink_dress_straw_bag_collar.png")
    );
    this.load.image(
      "girl_pink_dress_blue_bag",
      require("../assets/heroes/girl_pink_dress_blue_bag.png")
    );
    this.load.image(
      "girl_pink_dress_blue_bag_glasses",
      require("../assets/heroes/girl_pink_dress_blue_bag_glasses.png")
    );
    this.load.image(
      "girl_pink_dress_blue_bag_collar",
      require("../assets/heroes/girl_pink_dress_blue_bag_collar.png")
    );
    this.load.image("hand", require("../assets/hand.png"));
    this.load.image("play_now", require("../assets/text/play_now.png"));
  }
}
