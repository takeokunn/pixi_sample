const app = new PIXI.Application(800, 600, { backgroundColor : 0x1099bb });
document.body.appendChild(app.view);

const bunny = PIXI.Sprite.fromImage('./bunny.png');
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;
bunny.anchor.set(1);

app.stage.addChild(bunny);

const ticker = delta => bunny.rotation += 0.1 * delta;
app.ticker.add(ticker);
