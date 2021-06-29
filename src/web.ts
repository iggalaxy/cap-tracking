import { WebPlugin } from '@capacitor/core';

import type { AuthorizationStatus, TrackingPlugin } from './definitions';

export class TrackingWeb extends WebPlugin implements TrackingPlugin {
  async getStatus(): Promise<{ status: AuthorizationStatus }> {
    return Promise.reject(
      'Tracking plugin not configured for web usage - iOS only',
    );
  }
}
