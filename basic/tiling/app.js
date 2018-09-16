const app = new PIXI.Application();
document.body.appendChild(app.view);

const texture = PIXI.Texture.fromImage('./p2.jpeg');

const tilingSprite = new PIXI.extras.TilingSprite(
    texture,
    app.screen.width,
    app.screen.height
);
app.stage.addChild(tilingSprite);

const ticker = delta => {
    tilingSprite.tileScale.x = 2 + Math.sin(delta / 2);
    tilingSprite.tileScale.y = 2 + Math.cos(delta / 3);

    tilingSprite.tilePosition.x += 1;
    tilingSprite.tilePosition.y += 1;
}

app.ticker.add(ticker);
