---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Bone Knight"]
statblock: true
"name": "Bone Knight"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "20"
"hp": !!int "84"
"hit_dice": "13d8 + 26"
"stats":
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
"skillsaves":
  "Intimidation": !!int "6"
  "Athletics": !!int "7"
  "Deception": !!int "6"
"damage_resistances": "necrotic, poison"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight is an 8th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 14, +6 to hit with spell attacks). It has the following paladin\
    \ spells prepared:\n\n1st level (4 1st-level slots): [command](/compendium/spells/command.md),\
    \ [compelled duel](/compendium/spells/compelled-duel.md), [hellish rebuke](/compendium/spells/hellish-rebuke.md),\
    \ [wrathful smite](/compendium/spells/wrathful-smite.md)\n\n2nd level (3 2nd-level\
    \ slots): [branding smite](/compendium/spells/branding-smite.md), [crown of\
    \ madness](/compendium/spells/crown-of-madness.md), [darkness](/compendium/spells/darkness.md),\
    \ [find steed](/compendium/spells/find-steed.md), [magic weapon](/compendium/spells/magic-weapon.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the knight can target one skeleton or zombie it can\
    \ see within 30 feet of it. The target must make a DC 14 Wisdom saving throw.\
    \ On a failed save, the target must obey the knight's commands until the knight\
    \ dies or until the knight releases it as a bonus action. The knight can command\
    \ up to twelve undead at a time this way."
  "name": "Commander of Bones"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While within 60 feet of the knight, any undead ally of the knight has advantage\
    \ on saving throws against any effect that turns undead."
  "name": "Master of the Pallid Banner"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight attacks twice with one of its weapons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage."
  "name": "Longbow"
"source":
- "ERLW"
name: Bone Knight
image: "[[Bone Knight.png]]"
---

# Bone Knight

```statblock
"name": "Bone Knight"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "20"
"hp": !!int "84"
"hit_dice": "13d8 + 26"
"stats":
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
"skillsaves":
  "Intimidation": !!int "6"
  "Athletics": !!int "7"
  "Deception": !!int "6"
"damage_resistances": "necrotic, poison"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight is an 8th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 14, +6 to hit with spell attacks). It has the following paladin\
    \ spells prepared:\n\n1st level (4 1st-level slots): [command](/compendium/spells/command.md),\
    \ [compelled duel](/compendium/spells/compelled-duel.md), [hellish rebuke](/compendium/spells/hellish-rebuke.md),\
    \ [wrathful smite](/compendium/spells/wrathful-smite.md)\n\n2nd level (3 2nd-level\
    \ slots): [branding smite](/compendium/spells/branding-smite.md), [crown of\
    \ madness](/compendium/spells/crown-of-madness.md), [darkness](/compendium/spells/darkness.md),\
    \ [find steed](/compendium/spells/find-steed.md), [magic weapon](/compendium/spells/magic-weapon.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the knight can target one skeleton or zombie it can\
    \ see within 30 feet of it. The target must make a DC 14 Wisdom saving throw.\
    \ On a failed save, the target must obey the knight's commands until the knight\
    \ dies or until the knight releases it as a bonus action. The knight can command\
    \ up to twelve undead at a time this way."
  "name": "Commander of Bones"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While within 60 feet of the knight, any undead ally of the knight has advantage\
    \ on saving throws against any effect that turns undead."
  "name": "Master of the Pallid Banner"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight attacks twice with one of its weapons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage."
  "name": "Longbow"
"source":
- "ERLW"
"image": "[[Bone Knight.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 316*

## Description

Bone knights are the champions of the Order of the Emerald Claw. Clad in distinctive bonecraft armor—heavy armor adorned with the bones of fallen enemies—these fearsome warriors command squads of undead soldiers as they pursue the sinister goals of Lady Illmarrow.

**Karrnathi Patriots.** Early in the Last War, Karrnath turned to the necromancers of the Blood of Vol to bolster the nation's army with undead forces. The skeletons and zombies created by the necromancers were mindless creatures that required guidance. The first bone knights were appointed to provide this control.

Devoted paladins of the Blood of Vol were fused into suits of bonecraft armor, whose magic focused their divine gifts, allowing them to command units of mindless undead. Bonecraft armor can't be removed without killing the knight who wears it, and when donning it, each bone knight understood that their former life was over.

**The Fall of the Emerald Claw.** During the Last War, many bone knights took service with the Order of the Emerald Claw, helping that name strike fear into the enemies of Karrnath. In the last decade, King Kaius III of Karrnath has done much to ensure a peaceful end to the Last War. Under the terms of the Treaty of Thronehold, Kaius sealed most of Karrnath's undead in deep vaults, and the Order of the Emerald Claw was disbanded. A few bone knights remained in service to the crown, but most were cast aside—still bound to their bonecraft armor and still convinced of Karrnathi supremacy. These bone knights felt that Kaius had betrayed both them and their nation, leading their once-proud order to find a new purpose in the service of Lady Illmarrow.