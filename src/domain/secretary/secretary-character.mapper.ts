import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';

export function mapCharacterNameToSecretary(name: FrosthavenClass<Card>['name']) {
  return {
    [FrosthavenClassNames.BannerSpear]: 'banner-spear',
    [FrosthavenClassNames.Blinkblade]: 'blinkblade',
    [FrosthavenClassNames.Boneshaper]: 'boneshaper',
    [FrosthavenClassNames.CrashingTide]: 'coral',
    [FrosthavenClassNames.Deathwalker]: 'deathwalker',
    [FrosthavenClassNames.Deepwraith]: 'kelp',
    [FrosthavenClassNames.Drifter]: 'drifter',
    [FrosthavenClassNames.FrozenFist]: 'fist',
    [FrosthavenClassNames.Geminate]: 'geminate',
    [FrosthavenClassNames.Hive]: 'prism',
    [FrosthavenClassNames.PainConduit]: 'shackles',
    [FrosthavenClassNames.Pyroclast]: 'meteor',
    [FrosthavenClassNames.Snowdancer]: 'snowflake',
    [FrosthavenClassNames.Trapper]: 'trap',
  }[name];
}