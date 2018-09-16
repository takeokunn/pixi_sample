const app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
const sprite = PIXI.Sprite.fromImage('./bunny.png');

sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

sprite.interactive = true;
sprite.buttonMode = true;

const onClick = () => {
    sprite.scale.x *= 1.25;
    sprite.scale.y *= 1.25;
}
sprite.on('pointerdown', onClick);

app.stage.addChild(sprite);
