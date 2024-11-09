import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 9:27 */
export const Component2: FC<Props> = memo(function Component2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes._7a3681a71d048b315d7d04aaed1eac}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.unnamed}>
        <div className={classes.textBlock}>Дәстүр мен қуанышқа толы</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.unnamed2}>ӘЛЕМ</div>
    </div>
  );
});
