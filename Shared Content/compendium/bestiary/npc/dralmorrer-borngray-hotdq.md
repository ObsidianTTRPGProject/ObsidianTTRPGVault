---
cssclass: json5e-monster
tags:
- compendium/src/hotdq
- monster/size/medium
- monster/type/humanoid/high-elf
aliases: ["Dralmorrer Borngray"]
statblock: true
"name": "Dralmorrer Borngray"
"size": "Medium"
"type": "humanoid"
"subtype": "high elf"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Deception": !!int "1"
  "Religion": !!int "5"
  "Insight": !!int "2"
  "Perception": !!int "2"
  "Arcana": !!int "5"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Bullywug, Draconic, Elvish, Goblin, Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dralmorrer is a 7th-level spellcaster that uses Intelligence as his spellcasting\
    \ ability (spell save DC 13, +5 to hit with spell attacks). Dralmorrer has the\
    \ following spells prepared from the wizard spell list:\n\nCantrips (at will):\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [prestidigitation](/compendium/spells/prestidigitation.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [longstrider](/compendium/spells/longstrider.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (2 2nd-level slots): [magic weapon](/compendium/spells/magic-weapon.md),\
    \ [misty step](/compendium/spells/misty-step.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dralmorrer has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Dralmorrer uses his action to cast a cantrip, he can also take a bonus\
    \ action to make one weapon attack."
  "name": "War Magic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Provided his longsword is on the same plane Dralmorrer can take a bonus\
    \ action to teleport it to his hand."
  "name": "Weapon Bond"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dralmorrer attacks twice, either with his longsword or dagger."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or ranged 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
"source":
- "HotDQ"
- "ToD"
name: Dralmorrer Borngray
image: "[[Dralmorrer Borngray.png]]"
---

# Dralmorrer Borngray

```statblock
"name": "Dralmorrer Borngray"
"size": "Medium"
"type": "humanoid"
"subtype": "high elf"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Deception": !!int "1"
  "Religion": !!int "5"
  "Insight": !!int "2"
  "Perception": !!int "2"
  "Arcana": !!int "5"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Bullywug, Draconic, Elvish, Goblin, Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dralmorrer is a 7th-level spellcaster that uses Intelligence as his spellcasting\
    \ ability (spell save DC 13, +5 to hit with spell attacks). Dralmorrer has the\
    \ following spells prepared from the wizard spell list:\n\nCantrips (at will):\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [prestidigitation](/compendium/spells/prestidigitation.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [longstrider](/compendium/spells/longstrider.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (2 2nd-level slots): [magic weapon](/compendium/spells/magic-weapon.md),\
    \ [misty step](/compendium/spells/misty-step.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dralmorrer has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Dralmorrer uses his action to cast a cantrip, he can also take a bonus\
    \ action to make one weapon attack."
  "name": "War Magic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Provided his longsword is on the same plane Dralmorrer can take a bonus\
    \ action to teleport it to his hand."
  "name": "Weapon Bond"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dralmorrer attacks twice, either with his longsword or dagger."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or ranged 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
"source":
- "HotDQ"
- "ToD"
"image": "[[Dralmorrer Borngray.png]]"
```
^statblock

*Source: Hoard of the Dragon Queen p. 90, Tyranny of Dragons p. 184*