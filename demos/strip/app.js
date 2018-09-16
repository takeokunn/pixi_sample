const app = new PIXI.Application();
document.body.appendChild(app.view);

const ropeLength = 918 / 20;
const points = [];

for (let i = 0; i < 20; i++) {
    points.push(new PIXI.Point(i * ropeLength, 0));
}

const strip = new PIXI.mesh.Rope(PIXI.Texture.fromImage('./snake.png'), points);
strip.x = -459;

const snakeContainer = new PIXI.Container();
snakeContainer.x = 400;
snakeContainer.y = 300;
snakeContainer.scale.set(800 / 1100);
snakeContainer.addChild(strip);
app.stage.addChild(snakeContainer);

let count = 0;
const ticker = () => {
    count += 0.1;
    for (let loop = 0; loop < points.length; loop++) {
        points[loop].y = Math.sin((loop * 0.5) + count) * 30;
        points[loop].x = loop * ropeLength + Math.cos((loop * 0.3) + count) * 20;
    }
};
app.ticker.add(ticker);
