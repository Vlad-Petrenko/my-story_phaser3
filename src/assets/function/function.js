export const sceneStart = (btn, sceneName, thisCont) => {
  thisCont.tweens.add({
    targets: btn,
    scale: 0.4,
    duration: 300,
  });
  setTimeout(() => {
    thisCont.scene.start(sceneName);
  }, 300);
};

export const hoverBtn = (btn, thisCont) => {
  return btn
    .on(
      "pointerover",
      () => {
        thisCont.tweens.add({
          targets: btn,
          duration: 400,
          scale: 0.7,
        });
      },
      thisCont
    )
    .on(
      "pointerout",
      () => {
        thisCont.tweens.add({
          targets: btn,
          duration: 400,
          scale: 1,
        });
      },
      thisCont
    );
};

export const addBtn = (btn, thisCont) => {
  thisCont.tweens.add({
    targets: btn,
    scale: 1,
    duration: 300,
  });
};

export const addText = (text, thisCont) => {
  const chooseText = thisCont.add.image(400, 50, text).setScale(0);
  thisCont.tweens.add({
    targets: chooseText,
    scale: 1,
    duration: 300,
    delay: 1700,
  });
};

export const finishGame = (man, girl, manText, playNow, thisCont) => {
  thisCont.tweens.add({
    targets: man,
    x: 500,
    duration: 100,
    delay: 100,
  });

  thisCont.tweens.add({
    targets: girl,
    x: 300,
    duration: 100,
    delay: 100,
  });

  thisCont.tweens.add({
    targets: manText,
    scale: 0.8,
    duration: 200,
    delay: 100,
  });

  setTimeout(() => {
    manText.destroy();
  }, 1200);

  hoverBtn(playNow, thisCont);

  thisCont.tweens.add({
    targets: playNow,
    scale: 1,
    duration: 400,
    delay: 1200,
  });

  thisCont.input.on("gameobjectdown", () => {
    sceneStart(playNow, "IntroScene", thisCont);
  });
};

export const handAnimSet = (thisCont) => {
  const handAnim = thisCont.add.image(150, 700, "hand").setScale(0);
  thisCont.tweens.add({
    targets: handAnim,
    delay: 1700,
    duration: 300,
    scale: 0.7,
  });
  thisCont.tweens.add({
    targets: handAnim,
    delay: 2000,
    duration: 1000,
    repeat: -1,
    yoyo: true,
    hold: 150,
    x: 700,
  });
};
