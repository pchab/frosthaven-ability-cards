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
import { pyroclast } from "@/domain/pyroclast/class";
import { snowdancer } from './snowdancer/class';
import { trapper } from './trapper/class';
import type { FrosthavenClassNames } from './frosthaven-class.type';

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
  pyroclast,
  snowdancer,
  trapper,
];

export const frosthavenClasses = [
  ...starterClasses,
  ...unlockedClasses,
];

function upperFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function classNameToURI(className: FrosthavenClassNames): string {
  return className.replace(' ', '-').toLowerCase();
}

export function classURIToName(className: string): FrosthavenClassNames {
  return className.split('-').map(upperFirstLetter).join(' ') as FrosthavenClassNames;
}
