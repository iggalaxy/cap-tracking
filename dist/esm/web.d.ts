import { WebPlugin } from '@capacitor/core';
import type { AuthorizationStatus, TrackingPlugin } from './definitions';
export declare class TrackingWeb extends WebPlugin implements TrackingPlugin {
    getStatus(): Promise<{
        status: AuthorizationStatus;
    }>;
}
