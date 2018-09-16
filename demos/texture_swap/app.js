const app = new PIXI.Application();
document.body.appendChild(app.view);

const texture = PIXI.Texture.fromImage('./flowerTop.png');
const secondTexture = PIXI.Texture.fromImage('./eggHead.png');

const dude = new PIXI.Sprite(texture);
dude.anchor.set(0.5);
dude.x = app.screen.width / 2;
dude.y = app.screen.height / 2;
dude.interactive = true;
dude.buttonMode = true;
app.stage.addChild(dude);

let bool = false;
const handleTap = () => {
    bool = !bool;
    dude.texture = bool? secondTexture : texture;
};
dude.on('pointertap', handleTap);

const ticker = () => dude.rotation += 0.1;
app.ticker.add(ticker);
