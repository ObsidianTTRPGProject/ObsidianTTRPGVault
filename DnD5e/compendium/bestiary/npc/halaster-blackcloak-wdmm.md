---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Halaster Blackcloak"]
statblock: true
"name": "Halaster Blackcloak"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "246"
"hit_dice": "29d8 + 116"
"stats":
- !!int "10"
- !!int "18"
- !!int "18"
- !!int "24"
- !!int "18"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "11"
  "Intelligence": !!int "14"
"skillsaves":
  "Perception": !!int "11"
  "History": !!int "21"
  "Arcana": !!int "21"
"damage_resistances": "fire; lightning (granted by the blast scepter, see \"Special\
  \ Equipment\" below)"
"senses": "darkvision 120 ft., passive Perception 21"
"languages": "Abyssal, Celestial, Common, Draconic, Dwarvish, Elvish, Infernal, Undercommon"
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Halaster is a 20th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 22, +14 to hit with spell attacks). He can cast [disguise self](/compendium/spells/disguise-self.md)\
    \ and [invisibility](/compendium/spells/invisibility.md) at will. He can cast\
    \ [fly](/compendium/spells/fly.md) and [lightning bolt](/compendium/spells/lightning-bolt.md)\
    \ once each without expending a spell slot, but can't do so again until he finishes\
    \ a short or long rest. Halaster has the following wizard spells prepared:\n\n\
    At will: [disguise self](/compendium/spells/disguise-self.md), [invisibility](/compendium/spells/invisibility.md)\n\
    \n1/day: [fly](/compendium/spells/fly.md), [lightning bolt](/compendium/spells/lightning-bolt.md)\n\
    \nCantrips (at will): [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [mage armor](/compendium/spells/mage-armor.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md),\
    \ [silent image](/compendium/spells/silent-image.md)\n\n2nd level (3 2nd-level\
    \ slots): [arcane lock](/compendium/spells/arcane-lock.md), [cloud of daggers](/compendium/spells/cloud-of-daggers.md),\
    \ [darkvision](/compendium/spells/darkvision.md), [knock](/compendium/spells/knock.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [fireball](/compendium/spells/fireball.md)\n\
    \n4th level (3 4th-level slots): [confusion](/compendium/spells/confusion.md),\
    \ [hallucinatory terrain](/compendium/spells/hallucinatory-terrain.md), [polymorph](/compendium/spells/polymorph.md)\n\
    \n5th level (3 5th-level slots): [Bigby's hand](/compendium/spells/bigbys-hand.md),\
    \ [geas](/compendium/spells/geas.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (2 6th-level slots): [chain lightning](/compendium/spells/chain-lightning.md),\
    \ [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md),\
    \ [programmed illusion](/compendium/spells/programmed-illusion.md)\n\n7th level\
    \ (2 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [symbol](/compendium/spells/symbol.md), [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [maze](/compendium/spells/maze.md), [mind\
    \ blank](/compendium/spells/mind-blank.md)\n\n9th level (1 9th-level slots):\
    \ [meteor swarm](/compendium/spells/meteor-swarm.md), [wish](/compendium/spells/wish.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Halaster wears a robe of eyes that lets him see in all directions, gives\
    \ him darkvision out to a range of 120 feet, grants advantage on Wisdom (Perception)\
    \ checks that rely on sight, and allows him to see [invisible](/rules/conditions.md#invisible)\
    \ creatures and objects, as well as into the Ethereal Plane, out to a range of\
    \ 120 feet.\n\nHalaster wields a blast scepter (a very rare magic item that requires\
    \ attunement). It can be used as an arcane focus. Whoever is attuned to the blast\
    \ scepter gains resistance to fire and lightning damage and can, as an action,\
    \ use it to cast [thunderwave](/compendium/spells/thunderwave.md) as a 4th-level\
    \ spell (save DC 16) without expending a spell slot.\n\nHalaster also wears a\
    \ horned ring (a very rare magic item that requires attunement), which allows\
    \ an attuned wearer to ignore Undermountain's magical restrictions (see \"Alterations\
    \ to Magic\")."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When he finishes a short rest, Halaster recovers all his spell slots of\
    \ 5th level and lower."
  "name": "Arcane Recovery (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Halaster fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Halaster dies in Undermountain, he revives after 1d10 days, with all\
    \ his hit points and any missing body parts restored. His new body appears in\
    \ a random safe location in Undermountain."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Halaster uses his blast scepter to cast [thunderwave](/compendium/spells/thunderwave.md)\
    \ as a 4th-level spell. Each creature in a 15-foot cube originating from him must\
    \ make a DC 16 Constitution saving throw. On a failed save, a creature takes 5d8\
    \ thunder damage and is pushed 10 feet away. On a successful save, the creature\
    \ takes half as much damage and isn't pushed"
  "name": "Blast Scepter"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Halaster casts a spell of 3rd level or lower."
  "name": "Cast Spell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Halaster expends a spell slot of 4th level or lower and gains 5 temporary\
    \ hit points per level of the slot."
  "name": "Spell Ward (Costs 2 Actions)"
"source":
- "WDMM"
name: Halaster Blackcloak
image: "[[Halaster Blackcloak.png]]"
---

# Halaster Blackcloak

```statblock
"name": "Halaster Blackcloak"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "246"
"hit_dice": "29d8 + 116"
"stats":
- !!int "10"
- !!int "18"
- !!int "18"
- !!int "24"
- !!int "18"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "11"
  "Intelligence": !!int "14"
"skillsaves":
  "Perception": !!int "11"
  "History": !!int "21"
  "Arcana": !!int "21"
"damage_resistances": "fire; lightning (granted by the blast scepter, see \"Special\
  \ Equipment\" below)"
"senses": "darkvision 120 ft., passive Perception 21"
"languages": "Abyssal, Celestial, Common, Draconic, Dwarvish, Elvish, Infernal, Undercommon"
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Halaster is a 20th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 22, +14 to hit with spell attacks). He can cast [disguise self](/compendium/spells/disguise-self.md)\
    \ and [invisibility](/compendium/spells/invisibility.md) at will. He can cast\
    \ [fly](/compendium/spells/fly.md) and [lightning bolt](/compendium/spells/lightning-bolt.md)\
    \ once each without expending a spell slot, but can't do so again until he finishes\
    \ a short or long rest. Halaster has the following wizard spells prepared:\n\n\
    At will: [disguise self](/compendium/spells/disguise-self.md), [invisibility](/compendium/spells/invisibility.md)\n\
    \n1/day: [fly](/compendium/spells/fly.md), [lightning bolt](/compendium/spells/lightning-bolt.md)\n\
    \nCantrips (at will): [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [mage armor](/compendium/spells/mage-armor.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md),\
    \ [silent image](/compendium/spells/silent-image.md)\n\n2nd level (3 2nd-level\
    \ slots): [arcane lock](/compendium/spells/arcane-lock.md), [cloud of daggers](/compendium/spells/cloud-of-daggers.md),\
    \ [darkvision](/compendium/spells/darkvision.md), [knock](/compendium/spells/knock.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [fireball](/compendium/spells/fireball.md)\n\
    \n4th level (3 4th-level slots): [confusion](/compendium/spells/confusion.md),\
    \ [hallucinatory terrain](/compendium/spells/hallucinatory-terrain.md), [polymorph](/compendium/spells/polymorph.md)\n\
    \n5th level (3 5th-level slots): [Bigby's hand](/compendium/spells/bigbys-hand.md),\
    \ [geas](/compendium/spells/geas.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (2 6th-level slots): [chain lightning](/compendium/spells/chain-lightning.md),\
    \ [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md),\
    \ [programmed illusion](/compendium/spells/programmed-illusion.md)\n\n7th level\
    \ (2 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [symbol](/compendium/spells/symbol.md), [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [maze](/compendium/spells/maze.md), [mind\
    \ blank](/compendium/spells/mind-blank.md)\n\n9th level (1 9th-level slots):\
    \ [meteor swarm](/compendium/spells/meteor-swarm.md), [wish](/compendium/spells/wish.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Halaster wears a robe of eyes that lets him see in all directions, gives\
    \ him darkvision out to a range of 120 feet, grants advantage on Wisdom (Perception)\
    \ checks that rely on sight, and allows him to see [invisible](/rules/conditions.md#invisible)\
    \ creatures and objects, as well as into the Ethereal Plane, out to a range of\
    \ 120 feet.\n\nHalaster wields a blast scepter (a very rare magic item that requires\
    \ attunement). It can be used as an arcane focus. Whoever is attuned to the blast\
    \ scepter gains resistance to fire and lightning damage and can, as an action,\
    \ use it to cast [thunderwave](/compendium/spells/thunderwave.md) as a 4th-level\
    \ spell (save DC 16) without expending a spell slot.\n\nHalaster also wears a\
    \ horned ring (a very rare magic item that requires attunement), which allows\
    \ an attuned wearer to ignore Undermountain's magical restrictions (see \"Alterations\
    \ to Magic\")."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When he finishes a short rest, Halaster recovers all his spell slots of\
    \ 5th level and lower."
  "name": "Arcane Recovery (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Halaster fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Halaster dies in Undermountain, he revives after 1d10 days, with all\
    \ his hit points and any missing body parts restored. His new body appears in\
    \ a random safe location in Undermountain."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Halaster uses his blast scepter to cast [thunderwave](/compendium/spells/thunderwave.md)\
    \ as a 4th-level spell. Each creature in a 15-foot cube originating from him must\
    \ make a DC 16 Constitution saving throw. On a failed save, a creature takes 5d8\
    \ thunder damage and is pushed 10 feet away. On a successful save, the creature\
    \ takes half as much damage and isn't pushed"
  "name": "Blast Scepter"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Halaster casts a spell of 3rd level or lower."
  "name": "Cast Spell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Halaster expends a spell slot of 4th level or lower and gains 5 temporary\
    \ hit points per level of the slot."
  "name": "Spell Ward (Costs 2 Actions)"
"source":
- "WDMM"
"image": "[[Halaster Blackcloak.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 310*

## Description

As the master of Undermountain, Halaster can alter the entire dungeon to some extent. His lair actions and regional effects don't extend beyond Undermountain.

Halaster, the Mad Mage of Undermountain, is the deranged individual behind most of the traps and horrors found in the great dungeon under Waterdeep. Undermountain is his home, an amusement gallery in which others perform to entertain him.

The Mad Mage knows the ever-changing ways of Undermountain as no one else does, for he is the one who controls those changes. He prefers to remain unseen, skulking about invisibly or peering through scrying sensors that resemble wide-open eyes surrounded by sparkling motes of light.

Halaster's abilities far exceed those of most mortal wizards. His expertise with magic gates allows him to travel far and wide to engage in magical research. He spends much of his time creating gates, moving them around, and casting elder runes on them. Halaster's gates connect the different levels of Undermountain, thus enabling him to bring new monsters into the dungeon to replenish those that die or escape. Even as groups of adventurers try to gain decisive control of just a small section of Undermountain's halls, Halaster constantly alters the dungeon's perils to thwart them.

Halaster's true form is that of a tall, gaunt, male human, but he uses magic to take on many other visages and shapes. No matter what form he wears, the Mad Mage giggles and mutters incessantly. Contrary to appearances, however, Halaster is alert and attentive to the activities and preparations of all beings near him. He never willingly enters combat without first casting mage armor and mind blank on himself.