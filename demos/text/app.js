const app = new PIXI.Application();
document.body.appendChild(app.view);

window.WebFontConfig = {
    google: {
        families: ['Snippet', 'Arvo:700italic', 'Podkova:700']
    },
    active: init()
};

(function() {
    const wf = document.createElement('script');
    wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

function init()
{
    PIXI.loader
        .add('desyrel', './desyrel.xml')
        .load(onAssetsLoaded);

    function onAssetsLoaded() {
        const bitmapFontText = new PIXI.extras.BitmapText('bitmap fonts are\n now supported!', { font: '35px Desyrel', align: 'right' });
        bitmapFontText.x = app.screen.width - bitmapFontText.textWidth - 20;
        bitmapFontText.y = 20;
        app.stage.addChild(bitmapFontText);
    }

    const background = PIXI.Sprite.fromImage('./textDemoBG.jpg');
    background.width = app.screen.width;
    background.height = app.screen.height;
    app.stage.addChild(background);

    const textSample = new PIXI.Text('Pixi.js can has\n multiline text!', {
        fontFamily: 'Snippet',
        fontSize: 35,
        fill: 'white',
        align: 'left'
    });
    textSample.position.set(20);

    const spinningText = new PIXI.Text('I\'m fun!', {
        fontWeight: 'bold',
        fontSize: 60,
        fontFamily: 'Arial',
        fill: '#cc00ff',
        align: 'center',
        stroke: '#FFFFFF',
        strokeThickness: 6
    });
    spinningText.anchor.set(0.5);
    spinningText.x = app.screen.width / 2;
    spinningText.y = app.screen.height / 2;

    const countingText = new PIXI.Text('COUNT 4EVAR: 0', {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 60,
        fontFamily: 'Arvo',
        fill: '#3e1707',
        align: 'center',
        stroke: '#a4410e',
        strokeThickness: 7
    });
    countingText.x = app.screen.width / 2;
    countingText.y = 500;
    countingText.anchor.x = 0.5;

    app.stage.addChild(textSample, spinningText, countingText);

    let count = 0;
    const ticker = () => {
        count += 0.05;
        countingText.text = 'COUNT 4EVAR: ' + Math.floor(count);
        spinningText.rotation += 0.03;
    };
    app.ticker.add(ticker);
}
