const app = new PIXI.Application(800, 600, { backgroundColor : 0x1099bb });
document.body.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);

const texture = PIXI.Texture.fromImage('./bunny.png');

for (var i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;
    container.addChild(bunny);
}

container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

container.pivot.x = 100;
container.pivot.y = 100;

const ticker = delta => container.rotation += 0.01 * delta;
app.ticker.add(ticker);
