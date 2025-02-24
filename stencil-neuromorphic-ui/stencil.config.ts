import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-neuromorphic-ui',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};
