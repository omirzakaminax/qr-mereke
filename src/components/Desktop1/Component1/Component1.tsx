import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1.module.css';
import { Vector1Icon } from './Vector1Icon';
import { Vector2Icon } from './Vector2Icon';

interface Props {
  className?: string;
}
/* @figmaId 9:14 */
export const Component1: FC<Props> = memo(function Component1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.turcsKirghizes1}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.unnamed}>ТАРИХ ОСЫ ЖЕРДЕ БАСТАЛАДЫ</div>
      <div className={classes.unnamed2}>
        Дәстүр – халқымыздың жүрегі. Әр мереке ата-бабаларымыздың мұрасын жаңғыртып, болашаққа жалғайды. Наурыздан
        бастап Тәуелсіздік күніне дейін, әрбір мереке бізді біріктіріп, ұлттық рухты сақтауға шақырады. Алайда ұмытылып
        бара жатқан мерекелер көп...
      </div>
      <div className={classes.unnamed3}>Мерекелеріміздің мағызы</div>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon} />
      </div>
      <div className={classes.unnamed4}>Қазақ мерекелері бойынша біліміңізді сынап көру</div>
      <div className={classes.vector2}>
        <Vector2Icon className={classes.icon2} />
      </div>
    </div>
  );
});
