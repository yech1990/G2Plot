import { Plot } from '../../core/plot';
import { Adaptor } from '../../core/adaptor';
import { ProgressOptions } from './types';
import { adaptor } from './adaptor';

export { ProgressOptions };

export class Progress extends Plot<ProgressOptions> {
  /** 图表类型 */
  public type: string = 'process';

  protected getDefaultOptions() {
    return {
      percent: 0.2,
      color: ['#FAAD14', '#E8EDF3'],
    };
  }

  /**
   * 获取 进度图 的适配器
   */
  protected getSchemaAdaptor(): Adaptor<ProgressOptions> {
    return adaptor;
  }
}
