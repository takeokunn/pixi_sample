const app = new PIXI.Application();
document.body.appendChild(app.view);

const background = PIXI.Sprite.fromImage("./bkg-grass.jpg");
background.width = app.screen.width;
background.height = app.screen.height;
app.stage.addChild(background);

app.stop();

let filter;
const onLoaded = (loader, res) => {
    filter = new PIXI.Filter(null, res.shader.data);
    background.filters = [filter];
    app.start();
};
PIXI.loader.add('shader', './shader.frag')
    .load(onLoaded);

const ticker = delta => filter.uniforms.customUniform += 0.04 * delta;
app.ticker.add(ticker);
