import type { Card } from '../cards.type';
import { type FrosthavenClass } from '../frosthaven-class.type';

export function mapCharacterNameToSecretary(name: FrosthavenClass<Card>['name']) {
  return {
    'Banner Spear': 'banner-spear',
    'Bladeswarm': 'envx',
    'Blinkblade': 'blinkblade',
    'Boneshaper': 'boneshaper',
    'Crashing Tide': 'coral',
    'Deathwalker': 'deathwalker',
    'Deepwraith': 'kelp',
    'Drifter': 'drifter',
    'Frozen Fist': 'fist',
    'Geminate': 'geminate',
    'Hive': 'prism',
    'Infuser': 'astral',
    'Metal Mosaic': 'drill',
    'Pain Conduit': 'shackles',
    'Pyroclast': 'meteor',
    'Shattersong': 'shards',
    'Snowdancer': 'snowflake',
    'Trapper': 'trap',
  }[name];
}
