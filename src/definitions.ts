export interface TrackingPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
