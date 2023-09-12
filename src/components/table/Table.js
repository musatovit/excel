import {ExelComponent} from '@/core/ExelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';

export class Table extends ExelComponent {
  static className = 'excel__table'
  #startPos = null

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
    });
  }

  toHTML() {
    return createTable(30)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}
