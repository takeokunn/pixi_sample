const app = new PIXI.Application();
document.body.appendChild(app.view);

const onAssetsLoaded = (loader, resources) => {
    const textures = [];

    for (let loop = 0; loop < 10; loop++) {
         const framekey = '0123456789 ' + loop + '.ase';
         const texture = PIXI.Texture.fromFrame(framekey);
         const time = resources.spritesheet.data.frames[framekey].duration;
         textures.push({ texture, time });
    }

    const scaling = 4;

    const slow = new PIXI.extras.AnimatedSprite(textures);
    slow.anchor.set(0.5);
    slow.scale.set(scaling);
    slow.animationSpeed = 0.5;
    slow.x = (app.screen.width - slow.width) / 2;
    slow.y = app.screen.height / 2;
    slow.play();
    app.stage.addChild(slow);

    const fast = new PIXI.extras.AnimatedSprite(textures);
    fast.anchor.set(0.5);
    fast.scale.set(scaling);
    fast.x = (app.screen.width + fast.width) / 2;
    fast.y = app.screen.height / 2;
    fast.play();
    app.stage.addChild(fast);

    app.start();
};

PIXI.loader
    .add('spritesheet', './0123456789.json')
    .load(onAssetsLoaded);
