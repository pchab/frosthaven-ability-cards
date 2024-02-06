import { createCard } from '../card.factory';
import { Card } from '../cards.type';

export enum GeminateForm {
  'melee',
  'ranged',
};
export type GeminateCard = Card & { form: GeminateForm };

export const geminateCards: GeminateCard[] = [
  // createCard({ level: 1, path: '/geminate/fh-changelings-boon.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/fh-drag-down.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/fh-draining-pincers.png', form: GeminateForm.melee }),
  // createCard({ level: 1, path: '/geminate/fh-flailing-tendrils.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/fh-hornbeetle-carapace.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/fh-hornet-stingers.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/fh-icebound-quills.png', form: GeminateForm.melee }),
  createCard({ level: 1, path: '/geminate/fh-firefly-swarm.png', form: GeminateForm.ranged }),
  // createCard({ level: 1, path: '/geminate/fh-hail-of-thorns.png', form: GeminateForm.ranged }),
  // createCard({ level: 1, path: '/geminate/fh-harvest-the-essence.png', form: GeminateForm.ranged }),
  createCard({ level: 1, path: '/geminate/fh-into-my-embrace.png', form: GeminateForm.ranged }),
  createCard({ level: 1, path: '/geminate/fh-mind-spike.png', form: GeminateForm.ranged }),
  createCard({ level: 1, path: '/geminate/fh-scarab-flight.png', form: GeminateForm.ranged }),
  createCard({ level: 1, path: '/geminate/fh-selfless-offering.png', form: GeminateForm.ranged }),
  // createCard({ level: 'X', path: '/geminate/fh-feeding-frenzy.png', form: GeminateForm.melee }),
  createCard({ level: 'X', path: '/geminate/fh-reckless-jab.png', form: GeminateForm.melee }),
  createCard({ level: 'X', path: '/geminate/fh-reshape-the-guise.png', form: GeminateForm.ranged }),
  createCard({ level: 'X', path: '/geminate/fh-smoldering-hatred.png', form: GeminateForm.ranged }),
  createCard({ level: 2, path: '/geminate/fh-venomous-barbs.png', form: GeminateForm.melee }),
  // createCard({ level: 2, path: '/geminate/fh-locust-host.png', form: GeminateForm.ranged }),
  createCard({ level: 3, path: '/geminate/fh-mandible-storm.png', form: GeminateForm.melee }),
  createCard({ level: 3, path: '/geminate/fh-dragonfly-surge.png', form: GeminateForm.ranged }),
  createCard({ level: 4, path: '/geminate/fh-thresh-and-flail.png', form: GeminateForm.melee }),
  createCard({ level: 4, path: '/geminate/fh-luminous-descent.png', form: GeminateForm.ranged }),
  createCard({ level: 5, path: '/geminate/fh-formless-grace.png', form: GeminateForm.melee }),
  createCard({ level: 5, path: '/geminate/fh-chitinous-horde.png', form: GeminateForm.ranged }),
  createCard({ level: 6, path: '/geminate/fh-hirudotherapy.png', form: GeminateForm.ranged }),
  createCard({ level: 6, path: '/geminate/fh-corrosive-acids.png', form: GeminateForm.melee }),
  createCard({ level: 7, path: '/geminate/fh-two-pronged-entrapment.png', form: GeminateForm.melee }),
  createCard({ level: 7, path: '/geminate/fh-alluring-pheromones.png', form: GeminateForm.ranged }),
  createCard({ level: 8, path: '/geminate/fh-accelerated-metabolism.png', form: GeminateForm.melee }),
  createCard({ level: 8, path: '/geminate/fh-oscillating-entity.png', form: GeminateForm.ranged }),
  createCard({ level: 9, path: '/geminate/fh-harbinger-of-ruin.png', form: GeminateForm.melee }),
  createCard({ level: 9, path: '/geminate/fh-voice-of-salvation.png', form: GeminateForm.ranged }),
];
