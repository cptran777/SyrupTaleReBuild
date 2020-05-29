// We only have types for createJS/easelJS. This file exports additional types for 

declare namespace createjs {
  export class LoadQueue {
    addEventListener(key: string, callback: Function): void;
    loadFile(filename: string): void;
    loadManifest(manifest: Array<string> | string | Object, loadNow?: boolean, basePath?: string): void;
    getResult(resourceName: string, rawResult?: boolean): Object;
    constructor(preferXHR?: boolean, basePath?: string, crossOrigin?: string)
  }
}
