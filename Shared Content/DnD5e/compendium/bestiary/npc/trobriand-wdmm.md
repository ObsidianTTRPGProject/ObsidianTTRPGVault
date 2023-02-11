---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/large
- monster/type/construct
aliases: ["Trobriand"]
statblock: true
"name": "Trobriand"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "210"
"hit_dice": "20d10 + 100"
"stats":
- !!int "24"
- !!int "9"
- !!int "20"
- !!int "20"
- !!int "11"
- !!int "1"
"speed": "walk 30 ft."
"damage_immunities": "fire; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Trobriand is an 18th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 20, +12 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md)\n\
    \n2nd level (3 2nd-level slots): [blur](/compendium/spells/blur.md), [detect\
    \ thoughts](/compendium/spells/detect-thoughts.md), [misty step](/compendium/spells/misty-step.md),\
    \ [shatter](/compendium/spells/shatter.md)\n\n3rd level (3 3rd-level slots):\
    \ [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fireball](/compendium/spells/fireball.md), [haste](/compendium/spells/haste.md)\n\
    \n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md), [greater\
    \ invisibility](/compendium/spells/greater-invisibility.md)\n\n5th level (3\
    \ 5th-level slots): [animate objects](/compendium/spells/animate-objects.md),\
    \ [Bigby's hand](/compendium/spells/bigbys-hand.md), [scrying](/compendium/spells/scrying.md)\n\
    \n6th level (1 6th-level slots): [chain lightning](/compendium/spells/chain-lightning.md),\
    \ [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [forcecage](/compendium/spells/forcecage.md)\n\n8th level (1 8th-level slots):\
    \ [incendiary cloud](/compendium/spells/incendiary-cloud.md), [power word stun](/compendium/spells/power-word-stun.md)\n\
    \n9th level (1 9th-level slots): [power word kill](/compendium/spells/power-word-kill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever Trobriand is subjected to fire damage, it takes no damage and\
    \ instead regains a number of hit points equal to the fire damage dealt."
  "name": "Fire Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Trobriand is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Trobriand has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Trobriand's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Trobriand makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8\
    \ + 7) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10\
    \ + 7) slashing damage."
  "name": "Sword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Trobriand exhales poisonous gas in a 15-foot cone. Each creature in that\
    \ area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Poison Breath (Recharge 5-6)"
"source":
- "WDMM"
name: Trobriand
image: "[[Trobriand.png]]"
---

# Trobriand

```statblock
"name": "Trobriand"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "210"
"hit_dice": "20d10 + 100"
"stats":
- !!int "24"
- !!int "9"
- !!int "20"
- !!int "20"
- !!int "11"
- !!int "1"
"speed": "walk 30 ft."
"damage_immunities": "fire; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Trobriand is an 18th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 20, +12 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md)\n\
    \n2nd level (3 2nd-level slots): [blur](/compendium/spells/blur.md), [detect\
    \ thoughts](/compendium/spells/detect-thoughts.md), [misty step](/compendium/spells/misty-step.md),\
    \ [shatter](/compendium/spells/shatter.md)\n\n3rd level (3 3rd-level slots):\
    \ [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fireball](/compendium/spells/fireball.md), [haste](/compendium/spells/haste.md)\n\
    \n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md), [greater\
    \ invisibility](/compendium/spells/greater-invisibility.md)\n\n5th level (3\
    \ 5th-level slots): [animate objects](/compendium/spells/animate-objects.md),\
    \ [Bigby's hand](/compendium/spells/bigbys-hand.md), [scrying](/compendium/spells/scrying.md)\n\
    \n6th level (1 6th-level slots): [chain lightning](/compendium/spells/chain-lightning.md),\
    \ [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [forcecage](/compendium/spells/forcecage.md)\n\n8th level (1 8th-level slots):\
    \ [incendiary cloud](/compendium/spells/incendiary-cloud.md), [power word stun](/compendium/spells/power-word-stun.md)\n\
    \n9th level (1 9th-level slots): [power word kill](/compendium/spells/power-word-kill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever Trobriand is subjected to fire damage, it takes no damage and\
    \ instead regains a number of hit points equal to the fire damage dealt."
  "name": "Fire Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Trobriand is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Trobriand has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Trobriand's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Trobriand makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8\
    \ + 7) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10\
    \ + 7) slashing damage."
  "name": "Sword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Trobriand exhales poisonous gas in a 15-foot cone. Each creature in that\
    \ area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Poison Breath (Recharge 5-6)"
"source":
- "WDMM"
"image": "[[Trobriand.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 294*