export enum AuthorizationStatus {
  NOT_DETERMINED,
  RESTRICTED,
  DENIED,
  AUTHORIZED,
}

export interface TrackingPlugin {
  getStatus(): Promise<{ status: AuthorizationStatus }>;
}
