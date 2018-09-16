const app = new PIXI.Application();
document.body.appendChild(app.view);

PIXI.loader
    .add('flowerTop', './flowerTop.png')
    .load((loader, resources) => init(resources.flowerTop.texture));

function init(texture) {
    const textures = [texture];
    const D8 = PIXI.GroupD8;

    for (let rotate = 1; rotate < 16; rotate++) {
        const h = D8.isVertical(rotate) ? texture.frame.width : texture.frame.height;
        const w = D8.isVertical(rotate) ? texture.frame.height : texture.frame.width;

        const crop = new PIXI.Rectangle(texture.frame.x, texture.frame.y, w, h);
        const trim = crop;
        let rotatedTexture;
        if (rotate % 2 == 0) {
            rotatedTexture = new PIXI.Texture(texture.baseTexture, texture.frame, crop, trim, rotate);
        } else {
            rotatedTexture = new PIXI.Texture(texture.baseTexture, texture.frame, crop, trim, rotate - 1);
            rotatedTexture.rotate++;
        }
        textures.push(rotatedTexture);
    }

    const offsetX = app.screen.width / 16 | 0;
    const offsetY = app.screen.height / 8 | 0;
    const gridW = app.screen.width / 4 | 0;
    const gridH = app.screen.height / 5 | 0;

    for (let loop = 0; loop < 16; loop++) {
        const dude = new PIXI.Sprite(textures[loop < 8 ? loop * 2 : (loop - 8) * 2 + 1]);
        dude.scale.x = 0.5;
        dude.scale.y = 0.5;
        dude.x = offsetX + gridW * (loop % 4);
        dude.y = offsetY + gridH * (loop / 4 | 0);
        app.stage.addChild(dude);

        const text = new PIXI.Text("rotate = " + dude.texture.rotate, {
            fontFamily:'Courier New',
            fontSize:'12px',
            fill: 'white',
            align: 'left'
        });
        text.x = dude.x;
        text.y = dude.y - 20;
        app.stage.addChild(text);
    }
}
