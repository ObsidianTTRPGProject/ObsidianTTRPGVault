---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/huge
- monster/type/beast
aliases: ["Bhaal, Ravager"]
statblock: true
"name": "Bhaal, Ravager"
"size": "Huge"
"type": "beast"
"alignment": "Lawful Evil"
"ac": !!int "20"
"hp": !!int "351"
"hit_dice": "26d12 + 182"
"stats":
- !!int "28"
- !!int "24"
- !!int "24"
- !!int "14"
- !!int "16"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "14"
  "Strength": !!int "16"
"skillsaves":
  "Athletics": !!int "16"
  "Stealth": !!int "14"
  "Perception": !!int "10"
"damage_resistances": "necrotic"
"damage_immunities": "acid; cold; fire; lightning; poison; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened, incapacitated, paralyzed,\
  \ petrified, poisoned, stunned, unconscious"
"senses": "darkvision 120 ft., truesight 60 ft., passive Perception 20"
"languages": "Abyssal, Common, Primordial, Undercommon"
"cr": "24"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the ravager drops to 0 hit points, its form fractures. Within the\
    \ next 24 hours, it will reappear in its [slayer form](/compendium/bestiary/humanoid/bhaal-slayer-mabjov.md)\
    \ within 2d6 miles of where the ravager form fell."
  "name": "Avatar of Bhaal"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the ravager damages a creature with a melee attack and the target\
    \ is left with 20 or fewer remaining hit points, the creature must make a DC 21\
    \ Constitution saving throw or be reduced to 0 hit points."
  "name": "Cull the Weak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the ravager fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager's claw, bite, and spine attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of its turns, the ravager deals 16 (3d10) piercing\
    \ damage to any creature grappling it or being [grappled](/rules/conditions.md#grappled)\
    \ by it."
  "name": "Spiked Hide"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager uses its Fear aura (if available) and then makes one bite attack\
    \ and two claw attacks or two spine attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 5 ft., one target. Hit: 22 (3d8\
    \ + 9) slashing damage plus 7 (2d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 21 Constitution saving throw or have its hit point maximum\
    \ reduced by an amount equal to the damage taken. The target dies if this attack\
    \ reduces its hit point maximum to 0. The reduction lasts until removed by the\
    \ [greater restoration](/compendium/spells/greater-restoration.md) spell or other\
    \ magic."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 5 ft., one target. Hit: 25 (3d10\
    \ + 9) piercing damage plus 7 (2d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 21 Constitution saving throw or have its hit point maximum\
    \ reduced by an amount equal to the damage taken. The target dies if this attack\
    \ reduces its hit point maximum to 0. The reduction lasts until removed by the\
    \ [greater restoration](/compendium/spells/greater-restoration.md) spell or other\
    \ magic. Large or smaller creatures damaged by this attack are [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20) and the ravager cannot make another Bite attack until this grapple\
    \ ends."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +14 to hit, range 60/120 ft., one target. Hit:\
    \ 17 (3d6 + 7) piercing damage. If the target fails a DC 19 Constitution saving\
    \ throw, they are [stunned](/rules/conditions.md#stunned) until the end of their\
    \ next turn."
  "name": "Spines"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager makes a Wisdom (Perception) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager smashes the ground and creates a thunderwave. Any creature\
    \ in a 10-foot cube originating from the ravager must make a Constitution saving\
    \ throw against DC 20. On a failed save, the creature suffers 36 (8d8) thunder\
    \ and is pushed 5 feet away from the ravager.\n\nOn a successful save, the creature\
    \ takes half damage and is not pushed. The soundwave produced by this attack can\
    \ be heard up to 100 feet away."
  "name": "Smash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager flares its numerous spines and they elongate. Any creature\
    \ that starts their turn within 5 feet of ravager must make a DC 21 Dexterity\
    \ saving throw or suffer 44 (8d10) piercing damage. The damage is halved with\
    \ a successful save."
  "name": "Spiky Carapace (Costs 2 Actions)"
"source":
- "MaBJoV"
name: Bhaal, Ravager
image: "[[Bhaal, Ravager.png]]"
---

# Bhaal, Ravager

```statblock
"name": "Bhaal, Ravager"
"size": "Huge"
"type": "beast"
"alignment": "Lawful Evil"
"ac": !!int "20"
"hp": !!int "351"
"hit_dice": "26d12 + 182"
"stats":
- !!int "28"
- !!int "24"
- !!int "24"
- !!int "14"
- !!int "16"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "14"
  "Strength": !!int "16"
"skillsaves":
  "Athletics": !!int "16"
  "Stealth": !!int "14"
  "Perception": !!int "10"
"damage_resistances": "necrotic"
"damage_immunities": "acid; cold; fire; lightning; poison; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened, incapacitated, paralyzed,\
  \ petrified, poisoned, stunned, unconscious"
"senses": "darkvision 120 ft., truesight 60 ft., passive Perception 20"
"languages": "Abyssal, Common, Primordial, Undercommon"
"cr": "24"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the ravager drops to 0 hit points, its form fractures. Within the\
    \ next 24 hours, it will reappear in its [slayer form](/compendium/bestiary/humanoid/bhaal-slayer-mabjov.md)\
    \ within 2d6 miles of where the ravager form fell."
  "name": "Avatar of Bhaal"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the ravager damages a creature with a melee attack and the target\
    \ is left with 20 or fewer remaining hit points, the creature must make a DC 21\
    \ Constitution saving throw or be reduced to 0 hit points."
  "name": "Cull the Weak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the ravager fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager's claw, bite, and spine attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of its turns, the ravager deals 16 (3d10) piercing\
    \ damage to any creature grappling it or being [grappled](/rules/conditions.md#grappled)\
    \ by it."
  "name": "Spiked Hide"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager uses its Fear aura (if available) and then makes one bite attack\
    \ and two claw attacks or two spine attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 5 ft., one target. Hit: 22 (3d8\
    \ + 9) slashing damage plus 7 (2d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 21 Constitution saving throw or have its hit point maximum\
    \ reduced by an amount equal to the damage taken. The target dies if this attack\
    \ reduces its hit point maximum to 0. The reduction lasts until removed by the\
    \ [greater restoration](/compendium/spells/greater-restoration.md) spell or other\
    \ magic."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 5 ft., one target. Hit: 25 (3d10\
    \ + 9) piercing damage plus 7 (2d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 21 Constitution saving throw or have its hit point maximum\
    \ reduced by an amount equal to the damage taken. The target dies if this attack\
    \ reduces its hit point maximum to 0. The reduction lasts until removed by the\
    \ [greater restoration](/compendium/spells/greater-restoration.md) spell or other\
    \ magic. Large or smaller creatures damaged by this attack are [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20) and the ravager cannot make another Bite attack until this grapple\
    \ ends."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +14 to hit, range 60/120 ft., one target. Hit:\
    \ 17 (3d6 + 7) piercing damage. If the target fails a DC 19 Constitution saving\
    \ throw, they are [stunned](/rules/conditions.md#stunned) until the end of their\
    \ next turn."
  "name": "Spines"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager makes a Wisdom (Perception) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager smashes the ground and creates a thunderwave. Any creature\
    \ in a 10-foot cube originating from the ravager must make a Constitution saving\
    \ throw against DC 20. On a failed save, the creature suffers 36 (8d8) thunder\
    \ and is pushed 5 feet away from the ravager.\n\nOn a successful save, the creature\
    \ takes half damage and is not pushed. The soundwave produced by this attack can\
    \ be heard up to 100 feet away."
  "name": "Smash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ravager flares its numerous spines and they elongate. Any creature\
    \ that starts their turn within 5 feet of ravager must make a DC 21 Dexterity\
    \ saving throw or suffer 44 (8d10) piercing damage. The damage is halved with\
    \ a successful save."
  "name": "Spiky Carapace (Costs 2 Actions)"
"source":
- "MaBJoV"
"image": "[[Bhaal, Ravager.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 93*

## Description

> [!quote]- A quote from MINSC & BOO!  
> 
> When evil knocks on your door, don't ask who's there. Let your SWORD do the talking! But when you knock on evil's door, give it a good, hard KICK. And when evil asks, Who's there? tell them Boo sent you!

A wholly evil, debased and sadistic god, Bhaal—the God of Murder—is reviled by a majority of Faerûn's pantheon; his divine foes include Chauntea, Helm, Ilmater, Lathander, Lliira and Tyr.

Before his ascension to godhood, Bhaal was a power-hungry adventurer on Toril. Along with his companions Bane and Myrkul, he sought to attain the portfolio of Jergal, God of the Dead. Jergal willingly offered his realm to the Dark Three, though they couldn't decide amongst themselves who would rule. Upon Jergal's suggestion, the three divided his power, deciding how to divide it based on the outcome of a game. The three played a game of knucklebones, and Bane emerged as the victor. He claimed the domains of hatred, strife and tyranny as his own. Myrkul, coming second, chose rule over the dead. Finally, Bhaal chose the divine province of death and murder.

A century ago, Bhaal foresaw that he would die in the Time of Troubles and enacted a plan that would allow him to return to life by creating the Bhaalspawn—mortal children imbued with a fraction of his divine essence. While that plan took more than a century to come to fruition, Bhaal has indeed been reborn. Having been dead for more than a century, he now works to rebuild his following, which will augment his divine power. Some of his most powerful and devout followers include his Bhaalspawn son Sarevok and the famous sky captain Pelyious.

Bhaal has two avatar forms: a corpse-like male humanoid called the Slayer, and a huge beast known as the Ravager. He hunts victims at night in his Slayer form. When he has killed, it gives him the power to transform into the Ravager.