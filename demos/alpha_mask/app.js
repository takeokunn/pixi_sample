const app = new PIXI.Application();
document.body.appendChild(app.view);

app.stage.interactive = true;

const bg = PIXI.Sprite.fromImage('./bkg.jpg');
app.stage.addChild(bg);

const cells = PIXI.Sprite.fromImage('./cells.png');
cells.scale.set(1.5);

const mask = PIXI.Sprite.fromImage('./flowerTop.png');
mask.anchor.set(0.5);
mask.x = 310;
mask.y = 190;

cells.mask = mask;

app.stage.addChild(mask, cells);

const target = new PIXI.Point();

const reset = () => {
    target.x = Math.floor(Math.random() * 550);
    target.y = Math.floor(Math.random() * 300);
};

const ticker = () => {
    mask.x += (target.x - mask.x) * 0.1;
    mask.y += (target.y - mask.y) * 0.1;
    if (Math.abs(mask.x - target.x) < 1) {
        reset();
    }
};

reset();
app.ticker.add(ticker);
