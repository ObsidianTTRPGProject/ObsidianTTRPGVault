---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/huge
- monster/type/fiend/demon
aliases: ["Yeenoghu"]
statblock: true
"name": "Yeenoghu"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"hp": !!int "333"
"hit_dice": "23d12 + 184"
"stats":
- !!int "29"
- !!int "16"
- !!int "23"
- !!int "15"
- !!int "24"
- !!int "15"
"speed": "walk 50 ft."
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "14"
  "Constitution": !!int "15"
"skillsaves":
  "Intimidation": !!int "9"
  "Perception": !!int "14"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "24"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yeenoghu casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt will:\
    \ [detect magic](/compendium/spells/detect-magic.md)\n\n1/day: [teleport](/compendium/spells/teleport.md)\n\
    \n3/day each: [dispel magic](/compendium/spells/dispel-magic.md), [fear](/compendium/spells/fear.md),\
    \ [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Yeenoghu fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yeenoghu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yeenoghu makes three Flail attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 22 (2d12\
    \ + 9) force damage. If it's his turn, Yeenoghu can cause the target to suffer\
    \ one of the following additional effects, each of which he can apply only once\
    \ per turn\n\n- Confusion. The target must succeed on a DC 17 Wisdom saving\
    \ throw or be affected by the confusion spell until the start of Yeenoghu's next\
    \ turn.\n- Force. The target takes an extra 13 (2d12) force damage.\n- Paralysis.\
    \ The target must succeed on a DC 17 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ until the start of Yeenoghu's next turn."
  "name": "Flail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 20 (2d10\
    \ + 9) acid damage."
  "name": "Bite"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Yeenoghu reduces a creature to 0 hit points with a melee attack, he\
    \ moves up to half his speed and makes one Bite attack."
  "name": "Rampage"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yeenoghu moves up to his speed."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yeenoghu makes one Flail attack. If the attack hits, the target must succeed\
    \ on a DC 24 Strength saving throw or be pushed up to 15 feet in a straight line\
    \ away from Yeenoghu. If the saving throw fails by 5 or more, the target is also\
    \ knocked [prone](/rules/conditions.md#prone)."
  "name": "Swat Away"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yeenoghu makes a separate Bite attack against each creature within 10 feet\
    \ of him."
  "name": "Savage (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
name: Yeenoghu
image: "[[Yeenoghu.png]]"
---

# Yeenoghu

```statblock
"name": "Yeenoghu"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"hp": !!int "333"
"hit_dice": "23d12 + 184"
"stats":
- !!int "29"
- !!int "16"
- !!int "23"
- !!int "15"
- !!int "24"
- !!int "15"
"speed": "walk 50 ft."
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "14"
  "Constitution": !!int "15"
"skillsaves":
  "Intimidation": !!int "9"
  "Perception": !!int "14"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "24"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yeenoghu casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt will:\
    \ [detect magic](/compendium/spells/detect-magic.md)\n\n1/day: [teleport](/compendium/spells/teleport.md)\n\
    \n3/day each: [dispel magic](/compendium/spells/dispel-magic.md), [fear](/compendium/spells/fear.md),\
    \ [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Yeenoghu fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yeenoghu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yeenoghu makes three Flail attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 22 (2d12\
    \ + 9) force damage. If it's his turn, Yeenoghu can cause the target to suffer\
    \ one of the following additional effects, each of which he can apply only once\
    \ per turn\n\n- Confusion. The target must succeed on a DC 17 Wisdom saving\
    \ throw or be affected by the confusion spell until the start of Yeenoghu's next\
    \ turn.\n- Force. The target takes an extra 13 (2d12) force damage.\n- Paralysis.\
    \ The target must succeed on a DC 17 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ until the start of Yeenoghu's next turn."
  "name": "Flail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 20 (2d10\
    \ + 9) acid damage."
  "name": "Bite"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Yeenoghu reduces a creature to 0 hit points with a melee attack, he\
    \ moves up to half his speed and makes one Bite attack."
  "name": "Rampage"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yeenoghu moves up to his speed."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yeenoghu makes one Flail attack. If the attack hits, the target must succeed\
    \ on a DC 24 Strength saving throw or be pushed up to 15 feet in a straight line\
    \ away from Yeenoghu. If the saving throw fails by 5 or more, the target is also\
    \ knocked [prone](/rules/conditions.md#prone)."
  "name": "Swat Away"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yeenoghu makes a separate Bite attack against each creature within 10 feet\
    \ of him."
  "name": "Savage (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "[[Yeenoghu.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 270, Mordenkainen's Tome of Foes p. 155*

## Description

The Beast of Butchery appears as a great scarred gnoll, towering 14 feet tall. Yeenoghu is the Gnoll Lord, and his creations are made in his twisted image. When the demon lord hunted across the Material Plane, packs of hyenas followed in his wake, and those that ate of great Yeenoghu's kills became gnolls. Few others worship the Beast of Butchery, but those who do tend to take on a gnoll-like aspect, hunching over and filing their teeth down to points.

Yeenoghu wants nothing more than slaughter and senseless destruction. Gnolls are his favorite instruments, and he drives his gnoll followers to ever-greater atrocities in his name, even imbuing some of their commanders with his powers, which transforms them into flinds (in this book). Yeenoghu takes pleasure in causing fear before death, and he sows sorrow and despair through destroying beloved things. He doesn't parlay; to meet him is to do battle with him—unless he becomes bored and wanders away. The Beast of Butchery has a long rivalry with Baphomet, the Horned King, and the two demon lords and their followers attack one another on sight.

The Gnoll Lord is covered in matted fur and leathery hide, and his face resembles a grinning predator's skull. He wields a triple-headed flail called the Butcher, which he can summon into his hand at will, although he is as likely to tear his prey apart with his teeth.

**Cultists of Yeenoghu.** > [!note]
> See the Cult of Yeenoghu

**Yeenoghu's Lair.** Yeenoghu's lair in the Abyss is called the Death Dells. Its barren hills and ravines serve as a hunting ground, where he pursues captured mortals in a cruel game. Yeenoghu's lair is a place of blood and death, populated by [gnolls](/compendium/bestiary/humanoid/gnoll.md), [hyenas](/compendium/bestiary/beast/hyena.md), and [ghouls](/compendium/bestiary/undead/ghoul.md), and there are few structures or signs of civilization on his layer of the Abyss.

The challenge rating of Yeenoghu is 25 (75,000 XP) when he's encountered in his lair.