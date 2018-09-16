const app = new PIXI.Application(800, 600);
document.body.appendChild(app.view);

app.stage.position.set(400, 300);

const outlineFilterBlue = new PIXI.filters.OutlineFilter(2, 0x99ff99);
const outlineFilterRed = new PIXI.filters.GlowFilter(15, 2, 1, 0xff9999, 0.5)

function filterOn() {
    this.filters = [outlineFilterRed]
}

function filterOff() {
    this.filters = [outlineFilterBlue]
}

for(let loop = 0; loop < 20; loop++) {
    const bunny =  PIXI.Sprite.fromImage('./bunny.png');
    bunny.interactive = true;
    bunny.position.set((Math.random() * 2 - 1) * 300 | 0, (Math.random() * 2 - 1) * 200 | 0);
    bunny.scale.x = (Math.random() * 3 | 0 * 0.1) + 1
    bunny.on('pointerover', filterOn)
        .on('pointerout', filterOff);
    filterOff.call(bunny);
    app.stage.addChild(bunny);
}
