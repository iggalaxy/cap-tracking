import { registerPlugin } from '@capacitor/core';

import type { TrackingPlugin } from './definitions';

const Tracking = registerPlugin<TrackingPlugin>('Tracking', {
  web: () => import('./web').then(m => new m.TrackingWeb()),
});

export * from './definitions';
export { Tracking };
