import { createCards } from '../card.factory';
import { Card, CardActions } from '../cards.type';

export enum GeminateForm {
  'melee',
  'ranged',
};
export type GeminateCard = Card & { form: GeminateForm };

const geminatePath = '/geminate/abilities';

export const geminateCards: GeminateCard[] = createCards([
  { level: 'X', name: 'feeding frenzy', actions: { top: CardActions.activeLost, bottom: CardActions.discard }, form: GeminateForm.melee },
  { level: 'X', name: 'reckless jab', actions: { top: CardActions.discard, bottom: CardActions.lose }, form: GeminateForm.melee },
  { level: 'X', name: 'reshape the guise', actions: { top: CardActions.discard, bottom: CardActions.activeLost }, form: GeminateForm.ranged },
  { level: 'X', name: 'smoldering hatred', actions: { top: CardActions.discard, bottom: CardActions.lose }, form: GeminateForm.ranged },
  { level: 1, name: 'changelings boon', actions: { top: CardActions.discard, bottom: CardActions.activeLost }, form: GeminateForm.melee },
  { level: 1, name: 'drag down', actions: { top: CardActions.discard, bottom: CardActions.lose }, form: GeminateForm.melee },
  { level: 1, name: 'draining pincers', actions: { top: CardActions.lose, bottom: CardActions.discard }, form: GeminateForm.melee },
  { level: 1, name: 'flailing tendrils', actions: { top: CardActions.discard, bottom: CardActions.lose }, form: GeminateForm.melee },
  { level: 1, name: 'hornbeetle carapace', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard }, form: GeminateForm.melee },
  { level: 1, name: 'hornet stingers', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard }, form: GeminateForm.melee },
  { level: 1, name: 'icebound quills', actions: { top: CardActions.lose, bottom: CardActions.activeDiscard }, form: GeminateForm.melee },
  { level: 1, name: 'firefly swarm', actions: { top: CardActions.lose, bottom: CardActions.discard }, form: GeminateForm.ranged },
  { level: 1, name: 'hail of thorns', actions: { top: CardActions.lose, bottom: CardActions.discard }, form: GeminateForm.ranged },
  { level: 1, name: 'harvest the essence', actions: { top: CardActions.activeLost, bottom: CardActions.discard }, form: GeminateForm.ranged },
  { level: 1, name: 'into my embrace', actions: { top: CardActions.discard, bottom: CardActions.lose }, form: GeminateForm.ranged },
  { level: 1, name: 'mind spike', actions: { top: CardActions.lose, bottom: CardActions.discard }, form: GeminateForm.ranged },
  { level: 1, name: 'scarab flight', actions: { top: CardActions.discard, bottom: CardActions.activeLost }, form: GeminateForm.ranged },
  { level: 1, name: 'selfless offering', actions: { top: CardActions.discard, bottom: CardActions.discard }, form: GeminateForm.ranged },
  { level: 2, name: 'venomous barbs', actions: { top: CardActions.activeLost, bottom: CardActions.discard }, form: GeminateForm.melee },
  { level: 2, name: 'locust host', actions: { top: CardActions.activeLost, bottom: CardActions.discard }, form: GeminateForm.ranged },
  { level: 3, name: 'mandible storm', actions: { top: CardActions.discard, bottom: CardActions.activeLost }, form: GeminateForm.melee },
  { level: 3, name: 'dragonfly surge', actions: { top: CardActions.lose, bottom: CardActions.activeDiscard }, form: GeminateForm.ranged },
  { level: 4, name: 'thresh and flail', actions: { top: CardActions.lose, bottom: CardActions.discard }, form: GeminateForm.melee },
  { level: 4, name: 'luminous descent', actions: { top: CardActions.discard, bottom: CardActions.lose }, form: GeminateForm.ranged },
  { level: 5, name: 'formless grace', actions: { top: CardActions.activeLost, bottom: CardActions.discard }, form: GeminateForm.melee },
  { level: 5, name: 'chitinous horde', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeLost }, form: GeminateForm.ranged },
  { level: 6, name: 'corrosive acids', actions: { top: CardActions.discard, bottom: CardActions.activeDiscard }, form: GeminateForm.melee },
  { level: 6, name: 'hirudotherapy', actions: { top: CardActions.discard, bottom: CardActions.discard }, form: GeminateForm.ranged },
  { level: 7, name: 'two pronged entrapment', actions: { top: CardActions.activeDiscard, bottom: CardActions.lose }, form: GeminateForm.melee },
  { level: 7, name: 'alluring pheromones', actions: { top: CardActions.discard, bottom: CardActions.lose }, form: GeminateForm.ranged },
  { level: 8, name: 'accelerated metabolism', actions: { top: CardActions.discard, bottom: CardActions.activeLost }, form: GeminateForm.melee },
  { level: 8, name: 'oscillating entity', actions: { top: CardActions.activeLost, bottom: CardActions.discard }, form: GeminateForm.ranged },
  { level: 9, name: 'harbinger of ruin', actions: { top: CardActions.activeLost, bottom: CardActions.activeDiscard }, form: GeminateForm.melee },
  { level: 9, name: 'voice of salvation', actions: { top: CardActions.activeDiscard, bottom: CardActions.activeLost }, form: GeminateForm.ranged },
], geminatePath);
