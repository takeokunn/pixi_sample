const app = new PIXI.Application(800, 600);
document.body.appendChild(app.view);

const brush = new PIXI.Graphics();
brush.beginFill(0xffffff);
brush.drawCircle(0, 0, 50);
brush.endFill();

PIXI.loader
    .add('t1', './bkg-grass.jpg')
    .add('t2', './BGrotate.jpg')
    .load(setup);

function setup(loader, resources) {
    const background = new PIXI.Sprite(resources['t1'].texture);
    background.width = app.screen.width;
    background.height = app.screen.height;
    app.stage.addChild(background);

    const imageToReveal = new PIXI.Sprite(resources['t2'].texture)
    imageToReveal.width = app.screen.width;
    imageToReveal.height = app.screen.height;
    app.stage.addChild(imageToReveal);

    const renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);

    const renderTextureSprite = new PIXI.Sprite(renderTexture);
    imageToReveal.mask = renderTextureSprite;
    app.stage.addChild(renderTextureSprite);

    app.stage.interactive = true;
    app.stage
        .on('pointerdown', pointerDown)
        .on('pointerup', pointerUp)
        .on('pointermove', pointerMove);

    let dragging = false;

    function pointerMove(event) {
        if (dragging) {
            brush.position.copy(event.data.global);
            app.renderer.render(brush, renderTexture, false, null, false);
        }
    }

    function pointerDown(event) {
        dragging = true;
        pointerMove(event);
    }

    function pointerUp(event) {
        dragging = false;
    }
}
