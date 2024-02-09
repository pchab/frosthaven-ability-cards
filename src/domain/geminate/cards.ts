import { createCard } from '../card.factory';
import { Card } from '../cards.type';

export enum GeminateForm {
  'melee',
  'ranged',
};
export type GeminateCard = Card & { form: GeminateForm };

export const geminateCards: GeminateCard[] = [
  createCard({ level: 'X', path: '/geminate/abilities/fh-feeding-frenzy.png', form: GeminateForm.melee }),
  createCard({ level: 'X', path: '/geminate/abilities/fh-reckless-jab.png', form: GeminateForm.melee }),
  createCard({ level: 'X', path: '/geminate/abilities/fh-reshape-the-guise.png', form: GeminateForm.ranged }),
  createCard({ level: 'X', path: '/geminate/abilities/fh-smoldering-hatred.png', form: GeminateForm.ranged }),
  createCard({ level: 1, path: '/geminate/abilities/fh-changelings-boon.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/abilities/fh-drag-down.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/abilities/fh-draining-pincers.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/abilities/fh-flailing-tendrils.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/abilities/fh-hornbeetle-carapace.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/abilities/fh-hornet-stingers.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/abilities/fh-icebound-quills.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/abilities/fh-firefly-swarm.png', form: GeminateForm.ranged }),
  createCard({ level: 1, path: '/geminate/abilities/fh-hail-of-thorns.png', form: GeminateForm.ranged }),
  createCard({ level: 1, path: '/geminate/abilities/fh-harvest-the-essence.png', form: GeminateForm.ranged }),
  createCard({ level: 1, path: '/geminate/abilities/fh-into-my-embrace.png', form: GeminateForm.ranged }),
  createCard({ level: 1, path: '/geminate/abilities/fh-mind-spike.png', form: GeminateForm.ranged }),
  createCard({ level: 1, path: '/geminate/abilities/fh-scarab-flight.png', form: GeminateForm.ranged }),
  createCard({ level: 1, path: '/geminate/abilities/fh-selfless-offering.png', form: GeminateForm.ranged }),
  createCard({ level: 2, path: '/geminate/abilities/fh-venomous-barbs.png', form: GeminateForm.melee }),
  createCard({ level: 2, path: '/geminate/abilities/fh-locust-host.png', form: GeminateForm.ranged }),
  createCard({ level: 3, path: '/geminate/abilities/fh-mandible-storm.png', form: GeminateForm.melee }),
  createCard({ level: 3, path: '/geminate/abilities/fh-dragonfly-surge.png', form: GeminateForm.ranged }),
  createCard({ level: 4, path: '/geminate/abilities/fh-thresh-and-flail.png', form: GeminateForm.melee }),
  createCard({ level: 4, path: '/geminate/abilities/fh-luminous-descent.png', form: GeminateForm.ranged }),
  createCard({ level: 5, path: '/geminate/abilities/fh-formless-grace.png', form: GeminateForm.melee }),
  createCard({ level: 5, path: '/geminate/abilities/fh-chitinous-horde.png', form: GeminateForm.ranged }),
  createCard({ level: 6, path: '/geminate/abilities/fh-corrosive-acids.png', form: GeminateForm.melee }),
  createCard({ level: 6, path: '/geminate/abilities/fh-hirudotherapy.png', form: GeminateForm.ranged }),
  createCard({ level: 7, path: '/geminate/abilities/fh-two-pronged-entrapment.png', form: GeminateForm.melee }),
  createCard({ level: 7, path: '/geminate/abilities/fh-alluring-pheromones.png', form: GeminateForm.ranged }),
  createCard({ level: 8, path: '/geminate/abilities/fh-accelerated-metabolism.png', form: GeminateForm.melee }),
  createCard({ level: 8, path: '/geminate/abilities/fh-oscillating-entity.png', form: GeminateForm.ranged }),
  createCard({ level: 9, path: '/geminate/abilities/fh-harbinger-of-ruin.png', form: GeminateForm.melee }),
  createCard({ level: 9, path: '/geminate/abilities/fh-voice-of-salvation.png', form: GeminateForm.ranged }),
];
