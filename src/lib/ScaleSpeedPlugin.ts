import { ScrollbarPlugin } from 'smooth-scrollbar';

import type { Data2d } from 'smooth-scrollbar/interfaces';

export default class ScaleSpeedPlugin extends ScrollbarPlugin {
  static override pluginName = 'scaleSpeed';
  static override defaultOptions = { speed: 1 };

  override transformDelta(delta: Data2d) {
    const { speed } = this.options as { speed: number };
    return {
      x: delta.x * speed,
      y: delta.y * speed,
    };
  }
}
