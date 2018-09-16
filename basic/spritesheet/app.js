const app = new PIXI.Application(800, 600, { backgroundColor : 0x1099bb });
document.body.appendChild(app.view);

const onAssetsLoaded = () => {
    const frames = [];
    for (var i = 0; i < 30; i++) {
        const val = i < 10 ? '0' + i : i;
        frames.push(PIXI.Texture.fromFrame('rollSequence00' + val + '.png'));
    }

    const anim = new PIXI.extras.AnimatedSprite(frames);

    anim.x = app.screen.width / 2;
    anim.y = app.screen.height / 2;
    anim.anchor.set(0.5);
    anim.animationSpeed = 0.5;
    anim.play();

    app.stage.addChild(anim);

    const ticker = () => anim.rotation += 0.01;
    app.ticker.add(ticker);
};


PIXI.loader
    .add('./fighter.json')
    .load(onAssetsLoaded);
