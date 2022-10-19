---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Rictavio"]
statblock: true
"name": "Rictavio"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "77"
"hit_dice": "14d8 + 14"
"stats":
- !!int "9"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "18"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "4"
"skillsaves":
  "Medicine": !!int "7"
  "Sleight of Hand": !!int "4"
  "Religion": !!int "6"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Arcana": !!int "9"
"senses": "passive Perception 17"
"languages": "Abyssal, Common, Elvish, Infernal"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rictavio is a 9th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 15, +7 to hit with spell attacks). Rictavio has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [light](/compendium/spells/light.md), [mending](/compendium/spells/mending.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [cure wounds](/compendium/spells/cure-wounds.md), [detect evil and\
    \ good](/compendium/spells/detect-evil-and-good.md), [protection from evil and\
    \ good](/compendium/spells/protection-from-evil-and-good.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [augury](/compendium/spells/augury.md), [lesser\
    \ restoration](/compendium/spells/lesser-restoration.md), [protection from poison](/compendium/spells/protection-from-poison.md)\n\
    \n3rd level (3 3rd-level slots): [magic circle](/compendium/spells/magic-circle.md),\
    \ [remove curse](/compendium/spells/remove-curse.md), [speak with dead](/compendium/spells/speak-with-dead.md)\n\
    \n4th level (3 4th-level slots): [death ward](/compendium/spells/death-ward.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md)\n\n5th level\
    \ (1 5th-level slots): [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In addition to his sword cane, Rictavio wears a [hat of disguise](/compendium/items/hat-of-disguise.md)\
    \ and a [ring of mind shielding](/compendium/items/ring-of-mind-shielding.md),\
    \ and he carries a [spell scroll](/compendium/items/spell-scroll-5th-level.md)\
    \ of [raise dead](/compendium/spells/raise-dead.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Rictavio hits an undead with a weapon attack, the undead takes an\
    \ extra 10 (3d6) damage of the weapon's type."
  "name": "Undead Slayer"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rictavio makes two attacks with his sword cane."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage (wooden cane) or piercing damage (silvered sword)."
  "name": "Sword Cane"
"source":
- "CoS"
name: Rictavio
image: "[[Rictavio.png]]"
---

# Rictavio

```statblock
"name": "Rictavio"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "77"
"hit_dice": "14d8 + 14"
"stats":
- !!int "9"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "18"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "4"
"skillsaves":
  "Medicine": !!int "7"
  "Sleight of Hand": !!int "4"
  "Religion": !!int "6"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Arcana": !!int "9"
"senses": "passive Perception 17"
"languages": "Abyssal, Common, Elvish, Infernal"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rictavio is a 9th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 15, +7 to hit with spell attacks). Rictavio has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [light](/compendium/spells/light.md), [mending](/compendium/spells/mending.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [cure wounds](/compendium/spells/cure-wounds.md), [detect evil and\
    \ good](/compendium/spells/detect-evil-and-good.md), [protection from evil and\
    \ good](/compendium/spells/protection-from-evil-and-good.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [augury](/compendium/spells/augury.md), [lesser\
    \ restoration](/compendium/spells/lesser-restoration.md), [protection from poison](/compendium/spells/protection-from-poison.md)\n\
    \n3rd level (3 3rd-level slots): [magic circle](/compendium/spells/magic-circle.md),\
    \ [remove curse](/compendium/spells/remove-curse.md), [speak with dead](/compendium/spells/speak-with-dead.md)\n\
    \n4th level (3 4th-level slots): [death ward](/compendium/spells/death-ward.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md)\n\n5th level\
    \ (1 5th-level slots): [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In addition to his sword cane, Rictavio wears a [hat of disguise](/compendium/items/hat-of-disguise.md)\
    \ and a [ring of mind shielding](/compendium/items/ring-of-mind-shielding.md),\
    \ and he carries a [spell scroll](/compendium/items/spell-scroll-5th-level.md)\
    \ of [raise dead](/compendium/spells/raise-dead.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Rictavio hits an undead with a weapon attack, the undead takes an\
    \ extra 10 (3d6) damage of the weapon's type."
  "name": "Undead Slayer"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rictavio makes two attacks with his sword cane."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage (wooden cane) or piercing damage (silvered sword)."
  "name": "Sword Cane"
"source":
- "CoS"
"image": "[[Rictavio.png]]"
```
^statblock

*Source: Curse of Strahd p. 238*

## Description

Several months ago, a colorfully dressed half-elf bard came to Barovia in a carnival wagon, with a pet monkey on his shoulder. He took over an abandoned tower on Lake Baratok before rolling into the town of Vallaki several months later. Claiming to be a carnival ringmaster in search of new actors, he began regaling locals with tales of distant lands.

**Monster Hunter.** The half-elf ringmaster is, in fact, a legendary human vampire hunter named Rudolph van Richten. Van Richten's tale is a sad one. A scholar and doctor from a land called Darkon, he married his childhood sweetheart, Ingrid, and together they had a son, Erasmus. When he was fourteen, Erasmus was stolen away by Vistani and sold to a vampire named Baron Metus to be used as a companion. By the time van Richten found his son, it was too late: the baron had already transformed Erasmus into a vampire spawn. Erasmus begged his father to end his suffering, which van Richten did by pounding a wooden stake through his son's chest. Baron Metus avenged that deed by killing van Richten's wife, and van Richten has lived with the horror of his family's destruction ever since. After destroying Baron Metus in turn, van Richten sought revenge against the Vistani and took up a life of hunting evil monsters.

**The Waiting Game.** Van Richten isn't a young man anymore. He knows his road is coming to an end, but his work isn't done. He has come to Barovia to kill Strahd von Zarovich, the greatest vampire of them all. Van Richten has studied Strahd for years and knows he can't hope to best the vampire in a straight-up confrontation: he must wait for the right moment to strike. He has good evidence to suggest that Strahd periodically hibernates in his coffin, sometimes for years, when all is quiet in the realm. While he bides his time, van Richten hides in plain sight with the aid of a hat of disguise, his thoughts protected by a ring of mind shielding. He is trying to learn more about the Keepers of the Feather - a society of wereravens that oppose Strahd - while trying not to expose the secret society to their mutual enemy. He thinks the wereravens might prove helpful when the time comes. Van Richten also wants to take out as many of Strahd's spies as he can, starting with evil Vistani.

**Man with a Plan.**  Van Richten doesn't know that his former protégé, a good-aligned Vistana named Ezmerelda d'Avenir, has come to Barovia looking for him. He taught her many of his monster-hunting techniques, but she doesn't know all of his tricks and disguises. So far, their paths haven't crossed. In the event that van Richten becomes aware of Ezmerelda's presence, he does his utmost to protect her without putting his own plans in jeopardy. If he can manipulate a party of adventurers into keeping an eye on her, he will do so.

Van Richten works alone. A curse placed on him long ago by a Vistani seer brings doom to those he befriends. Furthermore, he believes too much is at stake to risk exposure. Consequently, if he thinks he's in danger of being unmasked, he retreats to his tower (see chapter 11) or some other quiet corner of Strahd's domain.

**Rictavio's Traits.** **Ideal.** "Evil cannot go unchallenged."

**Bond.** "To protect those I love, I must keep them distant and hidden from my enemies."

**Flaw.** "I am cursed. Thus, I will never have peace."