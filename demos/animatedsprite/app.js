const app = new PIXI.Application();
document.body.appendChild(app.view);

const onAssetsLoaded = () => {
    const explosionTextures = [];

    for (let loop = 0; loop < 26; loop++) {
         const texture = PIXI.Texture.fromFrame('Explosion_Sequence_A ' + (loop + 1) + '.png');
         explosionTextures.push(texture);
    }

    for (let loop = 0; loop < 50; loop++) {
        const explosion = new PIXI.extras.AnimatedSprite(explosionTextures);
        explosion.x = Math.random() * app.screen.width;
        explosion.y = Math.random() * app.screen.height;
        explosion.anchor.set(0.5);
        explosion.rotation = Math.random() * Math.PI;
        explosion.scale.set(0.75 + Math.random() * 0.5);
        explosion.gotoAndPlay(Math.random() * 27);
        app.stage.addChild(explosion);
    }
    app.start();
};

PIXI.loader
    .add('spritesheet', './mc.json')
    .load(onAssetsLoaded);
