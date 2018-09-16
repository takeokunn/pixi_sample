const app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);

const texture = PIXI.Texture.fromImage('./bunny.png');

for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.x = (i % 5) * 30;
    bunny.y = Math.floor(i / 5) * 30;
    bunny.rotation = Math.random() * (Math.PI * 2)
    container.addChild(bunny);
}

const brt = new PIXI.BaseRenderTexture(300, 300, PIXI.SCALE_MODES.LINEAR, 1);
const rt = new PIXI.RenderTexture(brt);

const sprite = new PIXI.Sprite(rt);

sprite.x = 450;
sprite.y = 60;
app.stage.addChild(sprite);

container.x = 100;
container.y = 60;

const ticker = () => app.renderer.render(container, rt);
app.ticker.add(ticker);
