---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/huge
- monster/type/aberration
aliases: ["Greater Star Spawn Emissary"]
statblock: true
"name": "Greater Star Spawn Emissary"
"size": "Huge"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "290"
"hit_dice": "20d12 + 160"
"stats":
- !!int "24"
- !!int "13"
- !!int "26"
- !!int "27"
- !!int "22"
- !!int "25"
"speed": "walk 40 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "14"
  "Wisdom": !!int "13"
  "Intelligence": !!int "15"
  "Constitution": !!int "15"
"skillsaves":
  "Perception": !!int "13"
  "Arcana": !!int "22"
"damage_resistances": "acid, force, necrotic, psychic"
"condition_immunities": "charmed, frightened"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "all, telepathy 1,000 ft."
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the emissary fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (4/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The emissary doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The emissary makes three attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 20 (2d10\
    \ + 7) piercing damage plus 13 (3d8) acid damage."
  "name": "Lashing Maw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +15 to hit, range 120 ft., one creature. Hit: 27\
    \ (3d12 + 8) psychic damage."
  "name": "Psychic Orb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The emissary expels bile that splashes all creatures in a 30-foot-radius\
    \ sphere centered on a point within 120 feet of the emissary. Each creature in\
    \ that area must make a DC 23 Dexterity saving throw, taking 55 (10d10) acid damage\
    \ on a failed save, or half as much damage on a successful one. For each creature\
    \ that fails the saving throw, a [gibbering mouther](/compendium/bestiary/aberration/gibbering-mouther.md)\
    \ (see its entry in the Monster Manual) appears in an unoccupied space on a surface\
    \ that can support it within 30 feet of that creature. The gibbering mouthers\
    \ act right after the emissary on the same initiative count, gaining a +7 bonus\
    \ to their attack and damage rolls, and fighting until they are destroyed. They\
    \ disappear when the emissary dies."
  "name": "Unearthly Bile (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The emissary teleports up to 30 feet to an unoccupied space it can see\
    \ and makes one attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The emissary causes the ground in a 20-foot square that it can see within\
    \ 90 feet of it to turn into teeth and maws until the start of its next turn.\
    \ The area becomes difficult terrain for the duration. Any creature takes 10 (3d6)\
    \ piercing damage for each 5 feet it moves on this terrain."
  "name": "Warp Space (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The emissary unleashes a psychic wave. Each creature within 30 feet of\
    \ the emissary must succeed on a DC 23 Wisdom saving throw or take 32 (5d12) psychic\
    \ damage. In addition, every spell ends on creatures and objects of the emissary's\
    \ choice in that area."
  "name": "Mind Cloud (Costs 3 Actions)"
"source":
- "VRGR"
name: Greater Star Spawn Emissary
image: "[[Greater Star Spawn Emissary.png]]"
---

# Greater Star Spawn Emissary

```statblock
"name": "Greater Star Spawn Emissary"
"size": "Huge"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "290"
"hit_dice": "20d12 + 160"
"stats":
- !!int "24"
- !!int "13"
- !!int "26"
- !!int "27"
- !!int "22"
- !!int "25"
"speed": "walk 40 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "14"
  "Wisdom": !!int "13"
  "Intelligence": !!int "15"
  "Constitution": !!int "15"
"skillsaves":
  "Perception": !!int "13"
  "Arcana": !!int "22"
"damage_resistances": "acid, force, necrotic, psychic"
"condition_immunities": "charmed, frightened"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "all, telepathy 1,000 ft."
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the emissary fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (4/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The emissary doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The emissary makes three attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 20 (2d10\
    \ + 7) piercing damage plus 13 (3d8) acid damage."
  "name": "Lashing Maw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +15 to hit, range 120 ft., one creature. Hit: 27\
    \ (3d12 + 8) psychic damage."
  "name": "Psychic Orb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The emissary expels bile that splashes all creatures in a 30-foot-radius\
    \ sphere centered on a point within 120 feet of the emissary. Each creature in\
    \ that area must make a DC 23 Dexterity saving throw, taking 55 (10d10) acid damage\
    \ on a failed save, or half as much damage on a successful one. For each creature\
    \ that fails the saving throw, a [gibbering mouther](/compendium/bestiary/aberration/gibbering-mouther.md)\
    \ (see its entry in the Monster Manual) appears in an unoccupied space on a surface\
    \ that can support it within 30 feet of that creature. The gibbering mouthers\
    \ act right after the emissary on the same initiative count, gaining a +7 bonus\
    \ to their attack and damage rolls, and fighting until they are destroyed. They\
    \ disappear when the emissary dies."
  "name": "Unearthly Bile (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The emissary teleports up to 30 feet to an unoccupied space it can see\
    \ and makes one attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The emissary causes the ground in a 20-foot square that it can see within\
    \ 90 feet of it to turn into teeth and maws until the start of its next turn.\
    \ The area becomes difficult terrain for the duration. Any creature takes 10 (3d6)\
    \ piercing damage for each 5 feet it moves on this terrain."
  "name": "Warp Space (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The emissary unleashes a psychic wave. Each creature within 30 feet of\
    \ the emissary must succeed on a DC 23 Wisdom saving throw or take 32 (5d12) psychic\
    \ damage. In addition, every spell ends on creatures and objects of the emissary's\
    \ choice in that area."
  "name": "Mind Cloud (Costs 3 Actions)"
"source":
- "VRGR"
"image": "[[Greater Star Spawn Emissary.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 245*

## Description

An emissary's greater form sheds all pretense of being part of a plane's reality and openly mocks it. A destructive titan, this form rises in a 25-foot-tall pillar of violent flesh amalgamating the meat and voices of every form the emissary has ever mimicked. Manifestations of alien hunger erupt from this horror in waves of ravenous organs and mind-breaking psychic assaults.

**Star Spawn Emissary.** Few understand the full hungry hostility of the multiverse. Star spawn emissaries are the fingers of alien realms, digits that tip the scales of reality toward terror. Heralded by ominous astrological events, these ravenous invaders make worlds ready for unimaginable masters or distant, greater manifestations of themselves. Employing their malleable forms, emissaries work to undermine perceptions of order, trust, and reality on global scales, readying worlds for sanity-shattering revelations and cascading apocalypses. Only when truly threatened, or when their foes have lost all hope, do emissaries reveal their actual, impossible forms.

**Forms of the Emissary.** Star spawn emissaries can assume two forms: a lesser form suited to infiltration and a greater, physically overwhelming form. To destroy an emissary, characters must reduce each of its forms to 0 hit points one after another. Typically, a star spawn emissary is initially encountered in its lesser form. When this form is destroyed, the emissary's body collapses into a gory slurry. It then instantly returns in its greater form. Only if the emissary is defeated in its greater form does the star spawn die.

After finishing a long rest, a greater star spawn emissary regains its lesser form if it was destroyed. When an emissary transitions from one form to another, it loses all the traits and actions of the previous form and gains those of the new form.