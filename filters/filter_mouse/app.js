const app = new PIXI.Application();
document.body.appendChild(app.view);

// Create background image
const background = PIXI.Sprite.fromImage("./bkg-grass.jpg");
background.width = app.screen.width;
background.height = app.screen.height;
app.stage.addChild(background);

const shaderFrag = `
precision mediump float;

uniform vec2 mouse;
uniform vec2 resolution;
uniform float time;

void main() {
  //pixel coords are inverted in framebuffer
  vec2 pixelPos = vec2(gl_FragCoord.x, resolution.y - gl_FragCoord.y);
  if (length(mouse - pixelPos) < 25.0) {
    //yellow circle, alpha=0.7
    gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0) * 0.7;
  } else {
    // blend with underlying image, alpha=0.5
    gl_FragColor = vec4(sin(time), mouse.x / resolution.x, mouse.y / resolution.y, 1) * 0.5;
  }
}
`;

const container = new PIXI.Container();
container.filterArea = app.screen;
app.stage.addChild(container);
const filter = new PIXI.Filter(null, shaderFrag);
container.filters = [filter];

// Animate the filter
app.ticker.add((delta) => {
    let v2 = filter.uniforms.mouse;
    const global = app.renderer.plugins.interaction.mouse.global;
    v2[0] = global.x;
    v2[1] = global.y;
    filter.uniforms.mouse = v2;

    v2 = filter.uniforms.resolution;
    v2[0] = app.screen.width;
    v2[1] = app.screen.height;
    filter.uniforms.resolution = v2;
});
