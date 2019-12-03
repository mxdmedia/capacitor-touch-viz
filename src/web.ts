import { WebPlugin } from '@capacitor/core';
import { TouchVizPlugin } from './definitions';

export class TouchVizWeb extends WebPlugin implements TouchVizPlugin {
  constructor() {
    super({
      name: 'TouchViz',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const TouchViz = new TouchVizWeb();

export { TouchViz };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(TouchViz);
