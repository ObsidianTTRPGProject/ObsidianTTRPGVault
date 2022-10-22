---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/undead
aliases: ["Aribeth de Tylmarande"]
statblock: true
"name": "Aribeth de Tylmarande"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Religion": !!int "4"
  "Perception": !!int "5"
"damage_immunities": "necrotic; bludgeoning, piercing, slashing from nonmagical weapons\
  \ that aren't silvered"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Elvish, Infernal"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth is a 11th-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). Aribeth has the following\
    \ paladin spells prepared:\n\n1st level (4 1st-level slots): [command](/compendium/spells/command.md),\
    \ [searing smite](/compendium/spells/searing-smite.md), [shield of faith](/compendium/spells/shield-of-faith.md)\n\
    \n2nd level (3 2nd-level slots): [aid](/compendium/spells/aid.md), [magic\
    \ weapon](/compendium/spells/magic-weapon.md)\n\n3rd level (3 3rd-level slots):\
    \ [dispel magic](/compendium/spells/dispel-magic.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Aribeth has disadvantage on attack rolls, as well as\
    \ on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth regains 20 hit points at the start of her turn. If Aribeth takes\
    \ radiant damage, this trait doesn't function at the start of Aribeth's next turn.\
    \ Aribeth's body is destroyed only if she starts her turn with 0 hit points and\
    \ doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth knows the distance to and direction of any creature that has broken\
    \ a pact with Mephistopheles, even if the creature and Aribeth are on different\
    \ planes of existence."
  "name": "Infernal Tracker"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth is accompanied by a nightmare. The nightmare allows Aribeth to\
    \ use it as a mount."
  "name": "Nightmare"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "3 [shadows](/compendium/bestiary/undead/shadow.md) hide within the saddle\
    \ of Aribeth's nightmare. These shadows only come out if there is a creature within\
    \ 30 feet that is at 0 hit points. When that happens, 1 shadow will emerge and\
    \ attack the creature in order to make it fail a death saving throw. It continues\
    \ to do so until the creature is dead."
  "name": "Shadows"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth makes three longsword attacks or three attacks with her sword called\
    \ Void."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage or 8 (1d10 + 3) slashing damage if used with two hands,\
    \ plus 9 (3d6) necrotic damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage or 8 (1d10 + 3) slashing damage if used with two hands,\
    \ plus 9 (3d6) necrotic damage. A creature reduced to 0 hit points from damage\
    \ dealt by the sword Void dies and can't be revived by any means short of a [wish](/compendium/spells/wish.md)\
    \ spell."
  "name": "Void"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth adds 4 to her AC against one melee attack that would hit her. To\
    \ do so, Aribeth must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MaBJoV"
name: Aribeth de Tylmarande
image: "[[Aribeth de Tylmarande.png]]"
---

# Aribeth de Tylmarande

```statblock
"name": "Aribeth de Tylmarande"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Religion": !!int "4"
  "Perception": !!int "5"
"damage_immunities": "necrotic; bludgeoning, piercing, slashing from nonmagical weapons\
  \ that aren't silvered"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Elvish, Infernal"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth is a 11th-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). Aribeth has the following\
    \ paladin spells prepared:\n\n1st level (4 1st-level slots): [command](/compendium/spells/command.md),\
    \ [searing smite](/compendium/spells/searing-smite.md), [shield of faith](/compendium/spells/shield-of-faith.md)\n\
    \n2nd level (3 2nd-level slots): [aid](/compendium/spells/aid.md), [magic\
    \ weapon](/compendium/spells/magic-weapon.md)\n\n3rd level (3 3rd-level slots):\
    \ [dispel magic](/compendium/spells/dispel-magic.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Aribeth has disadvantage on attack rolls, as well as\
    \ on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth regains 20 hit points at the start of her turn. If Aribeth takes\
    \ radiant damage, this trait doesn't function at the start of Aribeth's next turn.\
    \ Aribeth's body is destroyed only if she starts her turn with 0 hit points and\
    \ doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth knows the distance to and direction of any creature that has broken\
    \ a pact with Mephistopheles, even if the creature and Aribeth are on different\
    \ planes of existence."
  "name": "Infernal Tracker"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth is accompanied by a nightmare. The nightmare allows Aribeth to\
    \ use it as a mount."
  "name": "Nightmare"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "3 [shadows](/compendium/bestiary/undead/shadow.md) hide within the saddle\
    \ of Aribeth's nightmare. These shadows only come out if there is a creature within\
    \ 30 feet that is at 0 hit points. When that happens, 1 shadow will emerge and\
    \ attack the creature in order to make it fail a death saving throw. It continues\
    \ to do so until the creature is dead."
  "name": "Shadows"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth makes three longsword attacks or three attacks with her sword called\
    \ Void."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage or 8 (1d10 + 3) slashing damage if used with two hands,\
    \ plus 9 (3d6) necrotic damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage or 8 (1d10 + 3) slashing damage if used with two hands,\
    \ plus 9 (3d6) necrotic damage. A creature reduced to 0 hit points from damage\
    \ dealt by the sword Void dies and can't be revived by any means short of a [wish](/compendium/spells/wish.md)\
    \ spell."
  "name": "Void"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aribeth adds 4 to her AC against one melee attack that would hit her. To\
    \ do so, Aribeth must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MaBJoV"
"image": "[[Aribeth de Tylmarande.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 108*

## Description

Aribeth was once an elven paladin of Tyr, the Blind God of Justice. Renowned for her beauty and beloved for her kindness, she was the personal guard of Nasher Alagonder, the lord of the city of Neverwinter. But when her fiancé, Fenthick Moss, was unjustly hanged for treason, grief and a desire for vengeance corrupted her once noble spirit. She started down a path of revenge against her lord, her people, and even her god that ultimately ended with her own death.

After she was killed, the arch devil Mephistopheles sought out Aribeth's spirit in Hell. He made a bargain with the fallen paladin, offering her a chance to mete out justice once again as she had done when she served Tyr. Aribeth accepted and was returned to the world of the living.

The decades Aribeth had spent in hell, along with the betrayals she had experienced in her first life, had transformed her into a shell of a person. Devoid of conscience, remorse, and compassion, Mephistopheles made her into a hunter of those who had broken pacts made with the powers of Hell.

But despite his efforts to completely break her, Mephistopheles soon recognized that a tiny spark of Aribeth's former kindness and compassion remained, buried deep within her. In acknowledgement of this, he bestowed upon Aribeth an unholy sword called Void that would eat the souls of its victims, sparing them from being damned to the eternal suffering of the Nine Hells. However, Mephistopheles only granted Aribeth permission to use this sword to spare one out of every nine victims, knowing that choosing who to save and who to let suffer would be a constant burden that would eventually corrupt the last noble vestiges of Aribeth's soul.

But Aribeth was smart enough to understand her overlord's true plan. Instead of actively selecting who Void will spare, she makes the choice by using a simple, but extremely precise, scale that resembles the holy symbol she once carried as a priest of Tyr. When she encounters her victims, she asks them for a gold piece. If they give it to her, she places it on the scale, measuring the weight to the thousandth of an ounce. If the scale comes to balance on the last digit of "9", she will slay them with Void, sparing her the emotional burden of personally deciding who will be cast down and who will be spared.

Even now, though she still serves as an avatar of Mephistopheles, Aribeth is not evil in the strict sense. Her victims are never the innocent, and she only unleashes her savage justice upon those who deserve it through their own choices and actions. And she takes no pleasure in her duties; no cruel revelry in the suffering she inflicts. In this way she is more akin to a relentless force of nature—unstoppable and uncaring, but unbiased in her dispensation of dark justice.