const app = new PIXI.Application(800, 600, { antialias: true });
document.body.appendChild(app.view);

app.stage.interactive = true;

const bg = PIXI.Sprite.fromImage('./BGrotate.jpg');
bg.anchor.set(0.5);
bg.x = app.screen.width / 2;
bg.y = app.screen.height / 2;
app.stage.addChild(bg);

const container = new PIXI.Container();
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

const bgFront = PIXI.Sprite.fromImage('./SceneRotate.jpg');
bgFront.anchor.set(0.5);

const light2 = PIXI.Sprite.fromImage('./LightRotate2.png');
light2.anchor.set(0.5);

const light1 = PIXI.Sprite.fromImage('./LightRotate1.png');
light1.anchor.set(0.5);

const panda =  PIXI.Sprite.fromImage('./panda.png');
panda.anchor.set(0.5);

container.addChild(bgFront, light2, light1, panda);
app.stage.addChild(container);

const thing = new PIXI.Graphics();
app.stage.addChild(thing);
thing.x = app.screen.width / 2;
thing.y = app.screen.height / 2;
thing.lineStyle(0);

container.mask = thing;

const handleTap = () => container.mask = container.mask? null : thing;
app.stage.on('pointertap', handleTap);

const help = new PIXI.Text('Click or tap to turn masking on / off.', {
    fontFamily: 'Arial',
    fontSize: 12,
    fontWeight:'bold',
    fill: 'white'
});
help.y = app.screen.height - 26;
help.x = 10;
app.stage.addChild(help);

let count = 0;
const ticker = () => {
    count += 0.1;

    bg.rotation += 0.01;
    bgFront.rotation -= 0.01;

    light1.rotation += 0.02;
    light2.rotation += 0.01;

    panda.scale.x = 1 + Math.sin(count) * 0.04;
    panda.scale.y = 1 + Math.cos(count) * 0.04;

    thing.clear();

    thing.beginFill(0x8bc5ff, 0.4);
    thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);
    thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count)* 20);
    thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count)* 20);
    thing.lineTo(-120 + Math.cos(count)* 20, 100 + Math.sin(count)* 20);
    thing.rotation = count * 0.1;
};
app.ticker.add(ticker);
