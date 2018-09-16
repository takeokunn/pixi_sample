const app = new PIXI.Application();
document.body.appendChild(app.view);

PIXI.loader
    .add('spritesheet', './monsters.json')
    .load(onAssetsLoaded);

const aliens = [];
const alienFrames = [
    'eggHead.png',
    'flowerTop.png',
    'helmlok.png',
    'skully.png'
];

const alienContainer = new PIXI.Container();
alienContainer.x = 400;
alienContainer.y = 300;
app.stage.addChild(alienContainer);

app.stage.interactive = true;

function onAssetsLoaded() {
    for (let loop = 0; loop < 100; loop++) {
        const frameName = alienFrames[loop % 4];
        const alien = PIXI.Sprite.fromFrame(frameName);
        alien.tint = Math.random() * 0xFFFFFF;
        alien.x = Math.random() * 800 - 400;
        alien.y = Math.random() * 600 - 300;
        alien.anchor.x = 0.5;
        alien.anchor.y = 0.5;
        aliens.push(alien);
        alienContainer.addChild(alien);
    }
    app.start();
}

const onClick = () => {
    alienContainer.cacheAsBitmap = !alienContainer.cacheAsBitmap
    console.log(alienContainer.cacheAsBitmap)
};
app.stage.on('pointertap', onClick);

let count = 0;
const ticker = () => {
    count += 0.01;
    for (let loop = 0; loop < 100; loop++) {
        const alien = aliens[loop];
        // alien.rotation += 0.1;
    }
    alienContainer.scale.x = Math.sin(count);
    alienContainer.scale.y = Math.sin(count);
    alienContainer.rotation += 0.01;
};
app.ticker.add(ticker);
