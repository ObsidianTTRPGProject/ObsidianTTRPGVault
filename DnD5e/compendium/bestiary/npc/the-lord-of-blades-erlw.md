---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/humanoid/warforged
aliases: ["The Lord of Blades"]
statblock: true
"name": "The Lord of Blades"
"size": "Medium"
"type": "humanoid"
"subtype": "warforged"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "195"
"hit_dice": "23d8 + 92"
"stats":
- !!int "20"
- !!int "15"
- !!int "18"
- !!int "19"
- !!int "17"
- !!int "18"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "10"
  "Strength": !!int "11"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "11"
  "Perception": !!int "9"
  "History": !!int "10"
  "Arcana": !!int "10"
"damage_resistances": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "passive Perception 19"
"languages": "Common, Draconic, Dwarvish, Elvish"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades is a 20th-level spellcaster. His spellcasting ability\
    \ is Intelligence (spell save DC 18, +10 to hit with spell attacks). He has the\
    \ following artificer spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md)\
    \ (see \"Actions\" below), [mage hand](/compendium/spells/mage-hand.md), [mending](/compendium/spells/mending.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [expeditious retreat](/compendium/spells/expeditious-retreat.md),\
    \ [sanctuary](/compendium/spells/sanctuary.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [blur](/compendium/spells/blur.md), [heat\
    \ metal](/compendium/spells/heat-metal.md), [scorching ray](/compendium/spells/scorching-ray.md),\
    \ [see invisibility](/compendium/spells/see-invisibility.md)\n\n3rd level (3\
    \ 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md), [fly](/compendium/spells/fly.md),\
    \ [haste](/compendium/spells/haste.md)\n\n4th level (3 4th-level slots): [freedom\
    \ of movement](/compendium/spells/freedom-of-movement.md), [Mordenkainen's faithful\
    \ hound](/compendium/spells/mordenkainens-faithful-hound.md)\n\n5th level (2\
    \ 5th-level slots): [animate objects](/compendium/spells/animate-objects.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any critical hit against the Lord of Blades becomes a normal hit."
  "name": "Adamantine Plating"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that grapples the Lord of Blades or is [grappled](/rules/conditions.md#grappled)\
    \ by him takes 13 (3d8) slashing damage. A creature takes 13 (3d8) slashing damage\
    \ if it starts its turn grappling or being [grappled](/rules/conditions.md#grappled)\
    \ by the Lord of Blades."
  "name": "Bladed Armor"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the Lord of Blades moves at least 10 feet straight toward a target and\
    \ then hits it with his adamantine sixblade on the same turn, the target takes\
    \ an extra 11 (2d10) slashing damage. If the target is a creature, it must succeed\
    \ on a DC 19 Strength saving throw or be pushed up to 10 feet away and knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades has advantage on saving throws against being [poisoned](/rules/conditions.md#poisoned),\
    \ is immune to disease, and magic can't put him to sleep."
  "name": "Warforged Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades makes three attacks: two with his adamantine sixblade\
    \ and one with his bladed wings."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 21 (3d10\
    \ + 5) slashing damage plus 7 (2d6) force damage."
  "name": "Adamantine Sixblade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +11 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 8 (1d6 + 5) slashing damage."
  "name": "Bladed Wings"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +10 to hit, range 120 ft., one target. Hit: 22 (4d10)\
    \ fire damage."
  "name": "Fire Bolt (Cantrip)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades makes one weapon attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades casts one of his cantrips."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades casts a spell of 2nd level or lower from his spell list\
    \ that takes 1 action to cast."
  "name": "Cast a Spell (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades moves up to his speed without provoking opportunity\
    \ attacks, then makes one attack with his adamantine sixblade. He can make one\
    \ bladed wings attack against each creature he moves past."
  "name": "Blade Dash (Costs 3 Actions)"
"source":
- "ERLW"
name: The Lord of Blades
image: "[[The Lord of Blades.png]]"
---

# The Lord of Blades

```statblock
"name": "The Lord of Blades"
"size": "Medium"
"type": "humanoid"
"subtype": "warforged"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "195"
"hit_dice": "23d8 + 92"
"stats":
- !!int "20"
- !!int "15"
- !!int "18"
- !!int "19"
- !!int "17"
- !!int "18"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "10"
  "Strength": !!int "11"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "11"
  "Perception": !!int "9"
  "History": !!int "10"
  "Arcana": !!int "10"
"damage_resistances": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "passive Perception 19"
"languages": "Common, Draconic, Dwarvish, Elvish"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades is a 20th-level spellcaster. His spellcasting ability\
    \ is Intelligence (spell save DC 18, +10 to hit with spell attacks). He has the\
    \ following artificer spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md)\
    \ (see \"Actions\" below), [mage hand](/compendium/spells/mage-hand.md), [mending](/compendium/spells/mending.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [expeditious retreat](/compendium/spells/expeditious-retreat.md),\
    \ [sanctuary](/compendium/spells/sanctuary.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [blur](/compendium/spells/blur.md), [heat\
    \ metal](/compendium/spells/heat-metal.md), [scorching ray](/compendium/spells/scorching-ray.md),\
    \ [see invisibility](/compendium/spells/see-invisibility.md)\n\n3rd level (3\
    \ 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md), [fly](/compendium/spells/fly.md),\
    \ [haste](/compendium/spells/haste.md)\n\n4th level (3 4th-level slots): [freedom\
    \ of movement](/compendium/spells/freedom-of-movement.md), [Mordenkainen's faithful\
    \ hound](/compendium/spells/mordenkainens-faithful-hound.md)\n\n5th level (2\
    \ 5th-level slots): [animate objects](/compendium/spells/animate-objects.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any critical hit against the Lord of Blades becomes a normal hit."
  "name": "Adamantine Plating"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that grapples the Lord of Blades or is [grappled](/rules/conditions.md#grappled)\
    \ by him takes 13 (3d8) slashing damage. A creature takes 13 (3d8) slashing damage\
    \ if it starts its turn grappling or being [grappled](/rules/conditions.md#grappled)\
    \ by the Lord of Blades."
  "name": "Bladed Armor"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the Lord of Blades moves at least 10 feet straight toward a target and\
    \ then hits it with his adamantine sixblade on the same turn, the target takes\
    \ an extra 11 (2d10) slashing damage. If the target is a creature, it must succeed\
    \ on a DC 19 Strength saving throw or be pushed up to 10 feet away and knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades has advantage on saving throws against being [poisoned](/rules/conditions.md#poisoned),\
    \ is immune to disease, and magic can't put him to sleep."
  "name": "Warforged Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades makes three attacks: two with his adamantine sixblade\
    \ and one with his bladed wings."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 21 (3d10\
    \ + 5) slashing damage plus 7 (2d6) force damage."
  "name": "Adamantine Sixblade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +11 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 8 (1d6 + 5) slashing damage."
  "name": "Bladed Wings"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +10 to hit, range 120 ft., one target. Hit: 22 (4d10)\
    \ fire damage."
  "name": "Fire Bolt (Cantrip)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades makes one weapon attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades casts one of his cantrips."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades casts a spell of 2nd level or lower from his spell list\
    \ that takes 1 action to cast."
  "name": "Cast a Spell (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Lord of Blades moves up to his speed without provoking opportunity\
    \ attacks, then makes one attack with his adamantine sixblade. He can make one\
    \ bladed wings attack against each creature he moves past."
  "name": "Blade Dash (Costs 3 Actions)"
"source":
- "ERLW"
"image": "[[The Lord of Blades.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 300*

## Description

The Lord of Blades is a warforged warlord who has broken all ties with his former masters. He has established a nation for his people deep in the Mournland, centered in a great fortress where warforged from all over Khorvaire can come and feel a sense of belonging. No one knows what the Lord of Blades plans for his followers, but many fear that he intends to build a legion of warforged zealots, primed to march from the Mournland to unleash destruction on their former masters.

Some tales assert that the Lord of Blades led the warforged armies of Cyre in the Last War. Others cast him as a newer warforged, perhaps the last to come out of the Cannith creation forges before the Thronehold Accords led to their dismantling. One story claims the Lord of Blades caused the destruction of Cyre and warns that he plans to repeat the Day of Mourning in each of the remaining Five Nations. Whatever the truth, he has become a beacon for warforged everywhere.

**Warforged Nature.** The Lord of Blades doesn't require air, food, drink, or sleep.