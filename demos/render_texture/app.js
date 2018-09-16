const app = new PIXI.Application();
document.body.appendChild(app.view);

let renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);
let renderTexture2 = PIXI.RenderTexture.create(app.screen.width, app.screen.height);
const currentTexture = renderTexture;

const outputSprite = new PIXI.Sprite(currentTexture);
outputSprite.x = 400;
outputSprite.y = 300;
outputSprite.anchor.set(0.5);
app.stage.addChild(outputSprite);

const stuffContainer = new PIXI.Container();
stuffContainer.x = 400;
stuffContainer.y = 300;
app.stage.addChild(stuffContainer);

const fruits = [
    './spinObj_01.png',
    './spinObj_02.png',
    './spinObj_03.png',
    './spinObj_04.png',
    './spinObj_05.png',
    './spinObj_06.png',
    './spinObj_07.png',
    './spinObj_08.png'
];

const items = [];

for (let loop = 0; loop < 20; loop++) {
    const item = PIXI.Sprite.fromImage(fruits[loop % fruits.length]);
    item.x = Math.random() * 400 - 200;
    item.y = Math.random() * 400 - 200;
    item.anchor.set(0.5);
    stuffContainer.addChild(item);
    items.push(item);
}

let count = 0;
const ticker = () => {
    count += 0.01;

    for (let loop = 0; loop < items.length; loop++) {
        const item = items[loop];
        item.rotation += 0.1;
    }

    let temp = renderTexture;
    renderTexture = renderTexture2;
    renderTexture2 = temp;

    outputSprite.texture = renderTexture;
    stuffContainer.rotation -= 0.01;
    outputSprite.scale.set(1 + Math.sin(count) * 0.2);

    app.renderer.render(app.stage, renderTexture2, false);
};

app.ticker.add(ticker);
