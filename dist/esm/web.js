import { WebPlugin } from '@capacitor/core';
export class TrackingWeb extends WebPlugin {
    async getStatus() {
        return Promise.reject('Tracking plugin not configured for web usage - iOS only');
    }
}
//# sourceMappingURL=web.js.map