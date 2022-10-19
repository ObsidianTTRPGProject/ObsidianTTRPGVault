---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/large
- monster/type/undead
aliases: ["Miirym"]
statblock: true
"name": "Miirym"
"size": "Large"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "262"
"hit_dice": "25d10 + 125"
"stats":
- !!int "17"
- !!int "10"
- !!int "20"
- !!int "18"
- !!int "15"
- !!int "23"
"speed": "walk 0 ft., fly 60 ft. (hover)"
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "7"
  "Wisdom": !!int "9"
  "Intelligence": !!int "11"
  "Constitution": !!int "12"
"skillsaves":
  "Stealth": !!int "14"
  "Perception": !!int "16"
  "History": !!int "11"
  "Arcana": !!int "11"
"damage_resistances": "acid, fire, lightning, thunder"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, poisoned,\
  \ prone, restrained"
"senses": "blindsight 60 ft., darkvision 120 ft.; see also \"x-ray vision\" below,\
  \ passive Perception 26"
"languages": "Common, Draconic"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym casts one of the following spells, using Charisma as the spellcasting\
    \ ability (save DC 21) and requiring no material components:\n\nAt will: [dancing\
    \ lights](/compendium/spells/dancing-lights.md), [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1/day each: [dispel evil and good](/compendium/spells/dispel-evil-and-good.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)\n\n3/day each: [detect\
    \ magic](/compendium/spells/detect-magic.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [locate creature](/compendium/spells/locate-creature.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym can't leave Candlekeep and is immune to any effect that would place\
    \ her in a location outside it, including an extradimensional space. If she dies,\
    \ Miirym regains her form and all her hit points after 1d10 days, reappearing\
    \ in the location where she died or in the nearest unoccupied space."
  "name": "Bound to Candlekeep"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym regains 40 hit points at the start of her turn. If Miirym takes\
    \ damage from a magic weapon or a spell, this trait doesn't function at the start\
    \ of Miirym's next turn. Miirym dies only if she starts her turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym can move through other creatures and objects as if they were difficult\
    \ terrain. She takes 5 (1d10) force damage if she ends her turn inside an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Miirym fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym can see through solid matter out to a range of 60 feet. To her,\
    \ opaque creatures, objects, and obstacles within that distance appear transparent\
    \ and don't prevent light from passing through them. This vision can penetrate\
    \ 5 feet of stone, 3 inches of common metal, and up to 10 feet of wood or dirt.\
    \ Thicker substances block this vision, as does a thin sheet of lead."
  "name": "X-Ray Vision"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 34 (9d6\
    \ + 3) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym uses one of the following breath weapons:"
  "name": "Breath Weapon (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym exhales an icy blast in a 90-foot cone. Each creature in that area\
    \ must make a DC 21 Constitution saving throw, taking 67 (15d8) cold damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Cold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym exhales a bolt of necrotic energy in a 120-foot line that is 10\
    \ feet wide. Each creature in that line must make a DC 21 Dexterity saving throw,\
    \ taking 82 (15d10) necrotic damage on a failed save, or half as much damage on\
    \ a successful one."
  "name": "Necrotic Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym exhales paralyzing gas in a 90-foot cone. Each creature in that\
    \ area must succeed on a DC 21 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Paralyzing Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Miirym's choice that is within 120 feet of her and aware\
    \ of her must succeed on a DC 21 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Miirym's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym makes a bite attack."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym magically teleports up to 120 feet to an unoccupied space she can\
    \ see."
  "name": "Teleport (Costs 2 Actions)"
"source":
- "CM"
name: Miirym
image: "[[Miirym.png]]"
---

# Miirym

```statblock
"name": "Miirym"
"size": "Large"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "262"
"hit_dice": "25d10 + 125"
"stats":
- !!int "17"
- !!int "10"
- !!int "20"
- !!int "18"
- !!int "15"
- !!int "23"
"speed": "walk 0 ft., fly 60 ft. (hover)"
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "7"
  "Wisdom": !!int "9"
  "Intelligence": !!int "11"
  "Constitution": !!int "12"
"skillsaves":
  "Stealth": !!int "14"
  "Perception": !!int "16"
  "History": !!int "11"
  "Arcana": !!int "11"
"damage_resistances": "acid, fire, lightning, thunder"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, poisoned,\
  \ prone, restrained"
"senses": "blindsight 60 ft., darkvision 120 ft.; see also \"x-ray vision\" below,\
  \ passive Perception 26"
"languages": "Common, Draconic"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym casts one of the following spells, using Charisma as the spellcasting\
    \ ability (save DC 21) and requiring no material components:\n\nAt will: [dancing\
    \ lights](/compendium/spells/dancing-lights.md), [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1/day each: [dispel evil and good](/compendium/spells/dispel-evil-and-good.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)\n\n3/day each: [detect\
    \ magic](/compendium/spells/detect-magic.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [locate creature](/compendium/spells/locate-creature.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym can't leave Candlekeep and is immune to any effect that would place\
    \ her in a location outside it, including an extradimensional space. If she dies,\
    \ Miirym regains her form and all her hit points after 1d10 days, reappearing\
    \ in the location where she died or in the nearest unoccupied space."
  "name": "Bound to Candlekeep"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym regains 40 hit points at the start of her turn. If Miirym takes\
    \ damage from a magic weapon or a spell, this trait doesn't function at the start\
    \ of Miirym's next turn. Miirym dies only if she starts her turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym can move through other creatures and objects as if they were difficult\
    \ terrain. She takes 5 (1d10) force damage if she ends her turn inside an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Miirym fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym can see through solid matter out to a range of 60 feet. To her,\
    \ opaque creatures, objects, and obstacles within that distance appear transparent\
    \ and don't prevent light from passing through them. This vision can penetrate\
    \ 5 feet of stone, 3 inches of common metal, and up to 10 feet of wood or dirt.\
    \ Thicker substances block this vision, as does a thin sheet of lead."
  "name": "X-Ray Vision"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 34 (9d6\
    \ + 3) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym uses one of the following breath weapons:"
  "name": "Breath Weapon (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym exhales an icy blast in a 90-foot cone. Each creature in that area\
    \ must make a DC 21 Constitution saving throw, taking 67 (15d8) cold damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Cold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym exhales a bolt of necrotic energy in a 120-foot line that is 10\
    \ feet wide. Each creature in that line must make a DC 21 Dexterity saving throw,\
    \ taking 82 (15d10) necrotic damage on a failed save, or half as much damage on\
    \ a successful one."
  "name": "Necrotic Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym exhales paralyzing gas in a 90-foot cone. Each creature in that\
    \ area must succeed on a DC 21 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Paralyzing Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Miirym's choice that is within 120 feet of her and aware\
    \ of her must succeed on a DC 21 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Miirym's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym makes a bite attack."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Miirym magically teleports up to 120 feet to an unoccupied space she can\
    \ see."
  "name": "Teleport (Costs 2 Actions)"
"source":
- "CM"
"image": "[[Miirym.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 16*

## Description

Well over 1,500 years ago, the silver dragon Miirym broke into Candlekeep, intent on adding its riches to her hoard. She devoured scholars and destroyed a score of irreplaceable books before she was confronted by an archmage and bound into service to protect Candlekeep as penance for her misdeeds. The wizard passed away before Miirym's sentence had been served, and other spellcasters were unable to break the enchantment that bound her.

Time passed and so did Miirym, whose corpse has long since crumbled into dust. Unfortunately for Miirym, the enchantment remains in effect on her spirit. The spectral dragon—what's left of her—dwells in the catacombs and caves under the library. Those who have visited the depths describe Miirym as a set of immense spectral jaws whose essence roils with the promise of breath weapons and spells of destruction.

Adventurers who explore the passages beneath Candlekeep might encounter Miirym, who's more interested in news of present-day Faerûn than in fighting. Indeed, Miirym is an engaging conversationalist if one has the inclination to chat with her.

Miirym doesn't have a treasure hoard. Instead, she protects the books and scrolls kept in her subterranean domain. The Sentinel Wyrm can be summoned by the Keeper of Tomes and called upon to defend Candlekeep from invaders who would plunder or destroy it. In her role as Candlekeep's defender, Miirym can move anywhere within the library fortress, passing through walls and other solid barriers. She can't enter extradimensional spaces, since they are not on the same plane of existence as Candlekeep.