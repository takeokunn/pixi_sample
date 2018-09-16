const app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

const defaultIcon = "url('./bunny.png'),auto";
const hoverIcon = "url('./bunny_saturated.png'),auto";

app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
app.renderer.plugins.interaction.cursorStyles.hover = hoverIcon;

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
    button.cursor = "hover";
    button.anchor.set(0.5);
    button.x = buttonPositions[loop * 2];
    button.y = buttonPositions[loop * 2 + 1];
    button.interactive = true;

    button
        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);

    buttons.push(button);
    app.stage.addChild(button);
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
