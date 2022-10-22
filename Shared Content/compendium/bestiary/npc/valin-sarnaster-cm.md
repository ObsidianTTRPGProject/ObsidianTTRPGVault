---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/undead
aliases: ["Valin Sarnaster"]
statblock: true
"name": "Valin Sarnaster"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "18"
- !!int "16"
"speed": "walk 20 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Religion": !!int "5"
  "History": !!int "5"
"damage_vulnerabilities": "fire"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "The languages it knew in life"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin Sarnaster is a 10th-level spellcaster. Her spellcasting ability is\
    \ Wisdom (spell save DC 17, +9 to hit with spell attacks). Valin has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [command](/compendium/spells/command.md), [guiding bolt](/compendium/spells/guiding-bolt.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [hold person](/compendium/spells/hold-person.md), [silence](/compendium/spells/silence.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (3\
    \ 3rd-level slots): [clairvoyance](/compendium/spells/clairvoyance.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md)\n\n4th level (3 4th-level slots):\
    \ [divination](/compendium/spells/divination.md), [dimension door](/compendium/spells/dimension-door.md)\n\
    \n5th level (2 5th-level slots): [contagion](/compendium/spells/contagion.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [harm](/compendium/spells/harm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While her heart remains in Alessia's body, Valin re-forms inside her sarcophagus,\
    \ regaining all her hit points and becoming active again."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin can use her Dreadful Glare and makes one attack with her rotting\
    \ fist."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6\
    \ + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 16 Constitution saving throw or be cursed with mummy\
    \ rot. The cursed target can't regain hit points, and its hit point maximum decreases\
    \ by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's\
    \ hit point maximum to 0, the target dies, and its body turns to dust. The curse\
    \ lasts until removed by the [remove curse](/compendium/spells/remove-curse.md)\
    \ spell or other magic."
  "name": "Rotting Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin targets one creature she can see within 60 feet of her. If the target\
    \ can see Valin, it must succeed on a DC 16 Wisdom saving throw against this magic\
    \ or become [frightened](/rules/conditions.md#frightened) until the end of Valin's\
    \ next turn. If the target fails the saving throw by 5 or more, it is also [paralyzed](/rules/conditions.md#paralyzed)\
    \ for the same duration. A target that succeeds on the saving throw is immune\
    \ to the Dreadful Glare of all mummies and mummy lords for the next 24 hours."
  "name": "Dreadful Glare"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin makes one attack with her rotting fist or uses her Dreadful Glare."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blinding dust and sand swirls magically around Valin. Each creature within\
    \ 5 feet of Valin must succeed on a DC 16 Constitution saving throw or be [blinded](/rules/conditions.md#blinded)\
    \ until the end of her next turn."
  "name": "Blinding Dust"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin utters a blasphemous word. Each non-undead creature within 10 feet\
    \ of Valin that can hear the magical utterance must succeed on a DC 16 Constitution\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the end of\
    \ Valin's next turn."
  "name": "Blasphemous Word (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin magically unleashes negative energy. Creatures within 60 feet of\
    \ Valin, including ones behind barriers and around corners, can't regain hit points\
    \ until the end of Valin's next turn."
  "name": "Channel Negative Energy (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin magically transforms into a whirlwind of sand, moves up to 60 feet,\
    \ and reverts to her normal form. While in whirlwind form, Valin is immune to\
    \ all damage, and it can't be [grappled](/rules/conditions.md#grappled), [petrified](/rules/conditions.md#petrified),\
    \ knocked [prone](/rules/conditions.md#prone), [restrained](/rules/conditions.md#restrained),\
    \ or [stunned](/rules/conditions.md#stunned). Equipment worn or carried by Valin\
    \ remain in her possession."
  "name": "Whirlwind of Sand (Costs 2 Actions)"
"source":
- "CM"
name: Valin Sarnaster
image: "[[Valin Sarnaster.png]]"
---

# Valin Sarnaster

```statblock
"name": "Valin Sarnaster"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "18"
- !!int "16"
"speed": "walk 20 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Religion": !!int "5"
  "History": !!int "5"
"damage_vulnerabilities": "fire"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "The languages it knew in life"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin Sarnaster is a 10th-level spellcaster. Her spellcasting ability is\
    \ Wisdom (spell save DC 17, +9 to hit with spell attacks). Valin has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [command](/compendium/spells/command.md), [guiding bolt](/compendium/spells/guiding-bolt.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [hold person](/compendium/spells/hold-person.md), [silence](/compendium/spells/silence.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (3\
    \ 3rd-level slots): [clairvoyance](/compendium/spells/clairvoyance.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md)\n\n4th level (3 4th-level slots):\
    \ [divination](/compendium/spells/divination.md), [dimension door](/compendium/spells/dimension-door.md)\n\
    \n5th level (2 5th-level slots): [contagion](/compendium/spells/contagion.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [harm](/compendium/spells/harm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While her heart remains in Alessia's body, Valin re-forms inside her sarcophagus,\
    \ regaining all her hit points and becoming active again."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin can use her Dreadful Glare and makes one attack with her rotting\
    \ fist."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6\
    \ + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 16 Constitution saving throw or be cursed with mummy\
    \ rot. The cursed target can't regain hit points, and its hit point maximum decreases\
    \ by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's\
    \ hit point maximum to 0, the target dies, and its body turns to dust. The curse\
    \ lasts until removed by the [remove curse](/compendium/spells/remove-curse.md)\
    \ spell or other magic."
  "name": "Rotting Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin targets one creature she can see within 60 feet of her. If the target\
    \ can see Valin, it must succeed on a DC 16 Wisdom saving throw against this magic\
    \ or become [frightened](/rules/conditions.md#frightened) until the end of Valin's\
    \ next turn. If the target fails the saving throw by 5 or more, it is also [paralyzed](/rules/conditions.md#paralyzed)\
    \ for the same duration. A target that succeeds on the saving throw is immune\
    \ to the Dreadful Glare of all mummies and mummy lords for the next 24 hours."
  "name": "Dreadful Glare"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin makes one attack with her rotting fist or uses her Dreadful Glare."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blinding dust and sand swirls magically around Valin. Each creature within\
    \ 5 feet of Valin must succeed on a DC 16 Constitution saving throw or be [blinded](/rules/conditions.md#blinded)\
    \ until the end of her next turn."
  "name": "Blinding Dust"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin utters a blasphemous word. Each non-undead creature within 10 feet\
    \ of Valin that can hear the magical utterance must succeed on a DC 16 Constitution\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the end of\
    \ Valin's next turn."
  "name": "Blasphemous Word (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin magically unleashes negative energy. Creatures within 60 feet of\
    \ Valin, including ones behind barriers and around corners, can't regain hit points\
    \ until the end of Valin's next turn."
  "name": "Channel Negative Energy (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valin magically transforms into a whirlwind of sand, moves up to 60 feet,\
    \ and reverts to her normal form. While in whirlwind form, Valin is immune to\
    \ all damage, and it can't be [grappled](/rules/conditions.md#grappled), [petrified](/rules/conditions.md#petrified),\
    \ knocked [prone](/rules/conditions.md#prone), [restrained](/rules/conditions.md#restrained),\
    \ or [stunned](/rules/conditions.md#stunned). Equipment worn or carried by Valin\
    \ remain in her possession."
  "name": "Whirlwind of Sand (Costs 2 Actions)"
"source":
- "CM"
"image": "[[Valin Sarnaster.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 182*

## Description

Valin Sarnaster has been thoroughly corrupted by visions of a future in which she sees herself as the immortal heir of Savras's realm._The Canopic Being_came into her possession years ago, and an obsession with the dark rituals therein set the oracle on her present course.

Valin has become a powerful undead as the first step on her path to godhood, and is now a mummy lord.

Valin can use her lair actions in any area of the tomb.

**Valin Sarnaster's Lair.** Valin can use her lair actions in any area of the tomb.