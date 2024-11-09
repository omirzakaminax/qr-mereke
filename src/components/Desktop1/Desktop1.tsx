import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import { Component2 } from './Component2/Component2';
import classes from './Desktop1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Component2 />
      <div className={classes.rectangle1}></div>
      <div className={classes.qRMereke}>QRMereke</div>
      <div className={classes.unnamed}>Мерекелер</div>
      <div className={classes.unnamed2}>Викторина</div>
      <div className={classes.unnamed3}>Архив</div>
      <Component1 />
    </div>
  );
});
