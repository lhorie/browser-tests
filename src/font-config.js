/*
Purpose
1) Data for @font-face generation
2) Used to build an in-memory font fallback tree at runtime
3) Fallbacks at and above the specified preloadDepth will be preloaded/prefetched on page load
4) Remaining fonts will lazily load, text will temporarily use fallback font until the font has loaded
*/

import {assetUrl} from 'fusion-core';
export const preloadDepth = 1;
export const fonts = {
  'Lato-Regular': {
    urls: {
      woff2: assetUrl('./static/lato-regular-webfont.woff2'),
    },
    fallback: {
      name: 'Helvetica',
    },
  },
  'Lato-Bold': {
    urls: {
      woff2: assetUrl('./static/lato-bold-webfont.woff2'),
    },
    fallback: {
      name: 'Lato-Regular',
      styles: {
        'font-weight': 'bold',
      },
    },
  },
  'Lato-Italic': {
    urls: {
      woff2: assetUrl('./static/lato-italic-webfont.woff2'),
    },
    fallback: {
      name: 'Lato-Regular',
      styles: {
        'font-style': 'italic',
      },
    },
  },
};
