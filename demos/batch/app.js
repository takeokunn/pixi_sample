const app = new PIXI.Application();
document.body.appendChild(app.view);

const sprites = new PIXI.particles.ParticleContainer(10000, {
    scale: true,
    position: true,
    rotation: true,
    uvs: true,
    alpha: true
});
app.stage.addChild(sprites);

const maggots = [];
const totalSprites = 10000;

for (let loop = 0; loop < totalSprites; loop++) {
    const dude = PIXI.Sprite.fromImage('./tinyMaggot.png');
    dude.tint = Math.random() * 0xE8D4CD;
    dude.anchor.set(0.5);
    dude.scale.set(0.8 + Math.random() * 0.3);
    dude.x = Math.random() * app.screen.width;
    dude.y = Math.random() * app.screen.height;
    dude.tint = Math.random() * 0x808080;
    dude.direction = Math.random() * Math.PI * 2;
    dude.turningSpeed = Math.random() - 0.8;
    dude.speed = (2 + Math.random() * 2) * 0.2;
    dude.offset = Math.random() * 100;
    maggots.push(dude);
    sprites.addChild(dude);
}

const dudeBoundsPadding = 100;
const dudeBounds = new PIXI.Rectangle(
    -dudeBoundsPadding,
    -dudeBoundsPadding,
    app.screen.width + dudeBoundsPadding * 2,
    app.screen.height + dudeBoundsPadding * 2
);

let tick = 0;
const ticker = () => {
    for (let loop = 0; loop < maggots.length; loop++) {
        const dude = maggots[loop];
        dude.scale.y = 0.95 + Math.sin(tick + dude.offset) * 0.05;
        dude.direction += dude.turningSpeed * 0.01;
        dude.x += Math.sin(dude.direction) * (dude.speed * dude.scale.y);
        dude.y += Math.cos(dude.direction) * (dude.speed * dude.scale.y);
        dude.rotation = -dude.direction + Math.PI;

        if (dude.x < dudeBounds.x) {
            dude.x += dudeBounds.width;
        }
        else if (dude.x > dudeBounds.x + dudeBounds.width) {
            dude.x -= dudeBounds.width;
        }

        if (dude.y < dudeBounds.y) {
            dude.y += dudeBounds.height;
        }
        else if (dude.y > dudeBounds.y + dudeBounds.height) {
            dude.y -= dudeBounds.height;
        }
    }
    tick += 0.1;
};
app.ticker.add(ticker);
