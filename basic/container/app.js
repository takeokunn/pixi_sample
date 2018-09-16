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

    const ticker = delta => bunny.rotation += 0.1 * delta;
    app.ticker.add(ticker);
}

container.x = (app.screen.width - container.width) / 2;
container.y = (app.screen.height - container.height) / 2;
