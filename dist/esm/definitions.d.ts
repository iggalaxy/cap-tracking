export declare enum AuthorizationStatus {
    NOT_DETERMINED = 0,
    RESTRICTED = 1,
    DENIED = 2,
    AUTHORIZED = 3
}
export interface TrackingPlugin {
    getStatus(): Promise<{
        status: AuthorizationStatus;
    }>;
}
