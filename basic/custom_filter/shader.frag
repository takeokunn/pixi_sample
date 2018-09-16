precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;
uniform float customUniform;

void main(void)
{
   vec2 uvs = vTextureCoord.xy;
   vec4 fg = texture2D(uSampler, vTextureCoord);
   fg.r = uvs.y + cos(customUniform);
   gl_FragColor = fg;
}
