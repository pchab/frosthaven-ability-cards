import { bannerSpear } from './banner-spear/class';
import { blinkblade } from './blinkblade/class';
import { boneshaper } from './boneshaper/class';
import { deathwalker } from './deathwalker/class';
import { deepwraith } from './deepwraith/class';
import { drifter } from './drifter/class';
import { fist } from './fist/class';
import { geminate } from './geminate/class';
import { hive } from './hive/class';
import { painConduit } from './pain-conduit/class';
import { snowdancer } from './snowdancer/class';
import { trapper } from './trapper/class';

const starterClasses = [
  bannerSpear,
  blinkblade,
  boneshaper,
  deathwalker,
  drifter,
  geminate,
];
const unlockedClasses = [
  deepwraith,
  fist,
  hive,
  painConduit,
  snowdancer,
  trapper,
];

export const frosthavenClasses = [
  ...starterClasses,
  ...unlockedClasses,
];
