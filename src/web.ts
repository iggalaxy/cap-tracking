import { WebPlugin } from '@capacitor/core';

import type { TrackingPlugin } from './definitions';

export class TrackingWeb extends WebPlugin implements TrackingPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
