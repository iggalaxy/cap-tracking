import { registerPlugin } from '@capacitor/core';
const Tracking = registerPlugin('Tracking', {
    web: () => import('./web').then(m => new m.TrackingWeb()),
});
export * from './definitions';
export { Tracking };
//# sourceMappingURL=index.js.map