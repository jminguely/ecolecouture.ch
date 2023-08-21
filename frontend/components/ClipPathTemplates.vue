<template>
  <svg width="0" height="0">
    <defs>
      <clipPath id="buttonClip1" clipPathUnits="objectBoundingBox">
        <path
          d="M0.231,0.036 c0.156,0,0.619,-0.117,0.7,0.071 c0.081,0.188,0.104,0.679,0,0.786 c-0.104,0.107,-0.442,0.107,-0.562,0.107 C0.249,1,0,0.962,0,0.604 S0.074,0.036,0.231,0.036"
        />
      </clipPath>
      <clipPath id="buttonClip2" clipPathUnits="objectBoundingBox">
        <path
          d="M0.796,0.963 c-0.162,0,-0.64,0.119,-0.724,-0.073 c-0.084,-0.192,-0.107,-0.693,0,-0.802 C0.179,-0.021,0.529,0.011,0.653,0.011 c0.124,0,0.347,-0.094,0.347,0.272 S0.958,0.963,0.796,0.963"
        />
      </clipPath>
      <clipPath id="buttonClip3" clipPathUnits="objectBoundingBox">
        <path
          d="M0.24,0.036 c0.163,0,0.644,-0.116,0.728,0.071 c0.084,0.187,0.019,0.964,-0.387,0.888 C0.176,0.919,0,0.957,0,0.601 S0.077,0.036,0.24,0.036"
        />
      </clipPath>
      <clipPath id="buttonClip4" clipPathUnits="objectBoundingBox">
        <path
          d="M0.928,0.119 c0.084,0.186,0.107,0.67,0,0.776 C0.821,1,0.471,1,0.347,1 c-0.124,0,-0.392,-0.224,-0.34,-0.646 C0.058,-0.067,0.844,-0.067,0.928,0.119"
        />
      </clipPath>
      <clipPath id="buttonClip5" clipPathUnits="objectBoundingBox">
        <path
          d="M0.227,0.036 c0.162,0,0.642,-0.117,0.725,0.071 c0.084,0.188,0.051,0.6,-0.057,0.707 c-0.107,0.107,-0.401,0.186,-0.526,0.186 C0.246,1,0,0.801,0,0.443 S0.065,0.036,0.227,0.036"
        />
      </clipPath>
      <clipPath id="thumbClip1" clipPathUnits="objectBoundingBox">
        <path
          d="M0.463,0 c0.26,0,0.537,0.177,0.537,0.425 c0,0.248,-0.144,0.575,-0.478,0.575 C0.187,1,0,0.765,0,0.513 C0,0.261,0.203,0,0.463,0"
        />
      </clipPath>
      <clipPath id="thumbClip2" clipPathUnits="objectBoundingBox">
        <path
          d="M0.454,0 c0.404,0,0.546,0.257,0.546,0.469 C1,0.681,0.875,1,0.559,1 S0,0.817,0,0.589 C0,0.361,0.05,0,0.454,0"
        />
      </clipPath>
      <clipPath id="thumbClip3" clipPathUnits="objectBoundingBox">
        <path
          d="M0.464,0.001 c0.26,0,0.537,0.177,0.537,0.425 c0,0.248,-0.144,0.575,-0.478,0.575 C0.188,1,0.001,0.766,0.001,0.514 C0.001,0.262,0.204,0.001,0.464,0.001"
        />
      </clipPath>
      <clipPath id="thumbClip4" clipPathUnits="objectBoundingBox">
        <path
          d="M0.999,0.25 c0.007,0.248,-0.057,0.408,-0.166,0.55 C0.725,0.942,0.541,1,0.323,1 C0.104,1,-0.043,0.847,0.011,0.679 c0.055,-0.168,0.127,-0.25,0.311,-0.332 C0.508,0.266,0.493,0.01,0.628,0.002 c0.135,-0.008,0.365,0,0.372,0.248"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<style lang="postcss">
.button {
  padding: 0.75em 1.25em;
  text-decoration: none;
  display: inline-block;
}

.button-shape-1 {
  clip-path: url(#buttonClip1);
}

.button-shape-2 {
  clip-path: url(#buttonClip2);
}

.button-shape-3 {
  clip-path: url(#buttonClip3);
}

.button-shape-4 {
  clip-path: url(#buttonClip4);
}

.button-shape-5 {
  clip-path: url(#buttonClip5);
}

.thumb-shape-1 {
  clip-path: url(#thumbClip1);
}

.thumb-shape-2 {
  clip-path: url(#thumbClip2);
}

.thumb-shape-3 {
  clip-path: url(#thumbClip3);
}

.thumb-shape-4 {
  clip-path: url(#thumbClip4);
}
</style>
