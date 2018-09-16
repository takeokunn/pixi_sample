const app = new PIXI.Application();
document.body.appendChild(app.view);

const background = PIXI.Sprite.fromImage('./button_test_BG.jpg');
background.width = app.screen.width;
background.height = app.screen.height;

app.stage.addChild(background);

const textureButton = PIXI.Texture.fromImage('./button.png');
const textureButtonDown = PIXI.Texture.fromImage('./buttonDown.png');
const textureButtonOver = PIXI.Texture.fromImage('./buttonOver.png');

const buttons = [];

const buttonPositions = [
    175, 75,
    655, 75,
    410, 325,
    150, 465,
    685, 445
];

for (let loop = 0; loop < 5; loop++) {
    const button = new PIXI.Sprite(textureButton);
    button.buttonMode = true;
    button.anchor.set(0.5);
    button.x = buttonPositions[loop * 2];
    button.y = buttonPositions[loop * 2 + 1];

    button.interactive = true;
    button.buttonMode = true;

    button
        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);

    app.stage.addChild(button);
    buttons.push(button);
}

buttons[0].scale.set(1.2);
buttons[2].rotation = Math.PI / 10;
buttons[3].scale.set(0.8);
buttons[4].scale.set(0.8,1.2);
buttons[4].rotation = Math.PI;

function onButtonDown() {
    this.isdown = true;
    this.texture = textureButtonDown;
    this.alpha = 1;
}

function onButtonUp() {
    this.isdown = false;
    if (this.isOver) {
        this.texture = textureButtonOver;
    }
    else {
        this.texture = textureButton;
    }
}

function onButtonOver() {
    this.isOver = true;
    if (this.isdown) {
        return;
    }
    this.texture = textureButtonOver;
}

function onButtonOut() {
    this.isOver = false;
    if (this.isdown) {
        return;
    }
    this.texture = textureButton;
}
