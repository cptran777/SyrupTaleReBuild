export interface ISpriteParameters {
  framerate: number;
  images: Array<Object>;
  frames: Array<Array<number>>;
  animations: Record<string,
    // Single frame only
    | [number]
    // Starting, ending frame and animation name
    | [number, number, string, number]
  >;
}