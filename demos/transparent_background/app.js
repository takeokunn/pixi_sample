const app = new PIXI.Application(800, 600, { transparent: true });
document.body.appendChild(app.view);

const bunny = PIXI.Sprite.fromImage('./bunny.png');
bunny.anchor.set(0.5);
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

const ticker = () => bunny.rotation += 0.1;
app.ticker.add(ticker);
