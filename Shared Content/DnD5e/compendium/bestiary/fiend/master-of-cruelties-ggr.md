---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/large
- monster/type/fiend/demon
aliases: ["Master of Cruelties"]
statblock: true
"name": "Master of Cruelties"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"stats":
- !!int "18"
- !!int "17"
- !!int "16"
- !!int "19"
- !!int "16"
- !!int "21"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "9"
  "Deception": !!int "9"
  "Performance": !!int "9"
  "Persuasion": !!int "9"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "truesight 120 ft., passive Perception 13"
"languages": "Abyssal, Common, telepathy 120 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The master's innate spellcasting ability is Charisma (spell save DC 17).\
    \ The master can innately cast the following spells, requiring no material components:\n\
    \nAt will: [charm person](/compendium/spells/charm-person.md) (as a 3rd-level\
    \ spell), [crown of madness](/compendium/spells/crown-of-madness.md)\n\n1/day:\
    \ [dominate person](/compendium/spells/dominate-person.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When any other creature starts its turn within 30 feet of the master, that\
    \ creature must succeed on a DC 17 Wisdom saving throw, or it must immediately\
    \ take the Attack action, making one melee attack against a random creature within\
    \ reach. If no creatures are within reach, it makes a ranged attack against a\
    \ random creature within range, throwing its weapon if necessary."
  "name": "Aura of Blood Lust"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever a creature within 60 feet of the master dies, the master gains\
    \ 15 temporary hit points and has advantage on all attack rolls, ability checks,\
    \ and saving throws until the end of its next turn."
  "name": "Feed on the Crowd"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The master has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The master makes two melee attacks with its spear."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing\
    \ damage if used with two hands to make a melee attack, plus 13 (3d8) psychic\
    \ damage."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 120 feet of the master must succeed on a DC 17 Wisdom\
    \ saving throw or be [charmed](/rules/conditions.md#charmed) by the master for\
    \ 1 hour. While [charmed](/rules/conditions.md#charmed) in this way, a creature's\
    \ speed is 0. If the [charmed](/rules/conditions.md#charmed) creature takes damage,\
    \ it can repeat the saving throw, ending the effect on itself on a success. A\
    \ target that succeeds on the saving throw is immune to the Captivating Presence\
    \ of all masters of cruelties for the next 24 hours."
  "name": "Captivating Presence (Recharge 6)"
"source":
- "GGR"
name: Master of Cruelties
image: "[[Master of Cruelties.png]]"
---

# Master of Cruelties

```statblock
"name": "Master of Cruelties"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"stats":
- !!int "18"
- !!int "17"
- !!int "16"
- !!int "19"
- !!int "16"
- !!int "21"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "9"
  "Deception": !!int "9"
  "Performance": !!int "9"
  "Persuasion": !!int "9"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "truesight 120 ft., passive Perception 13"
"languages": "Abyssal, Common, telepathy 120 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The master's innate spellcasting ability is Charisma (spell save DC 17).\
    \ The master can innately cast the following spells, requiring no material components:\n\
    \nAt will: [charm person](/compendium/spells/charm-person.md) (as a 3rd-level\
    \ spell), [crown of madness](/compendium/spells/crown-of-madness.md)\n\n1/day:\
    \ [dominate person](/compendium/spells/dominate-person.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When any other creature starts its turn within 30 feet of the master, that\
    \ creature must succeed on a DC 17 Wisdom saving throw, or it must immediately\
    \ take the Attack action, making one melee attack against a random creature within\
    \ reach. If no creatures are within reach, it makes a ranged attack against a\
    \ random creature within range, throwing its weapon if necessary."
  "name": "Aura of Blood Lust"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever a creature within 60 feet of the master dies, the master gains\
    \ 15 temporary hit points and has advantage on all attack rolls, ability checks,\
    \ and saving throws until the end of its next turn."
  "name": "Feed on the Crowd"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The master has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The master makes two melee attacks with its spear."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing\
    \ damage if used with two hands to make a melee attack, plus 13 (3d8) psychic\
    \ damage."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 120 feet of the master must succeed on a DC 17 Wisdom\
    \ saving throw or be [charmed](/rules/conditions.md#charmed) by the master for\
    \ 1 hour. While [charmed](/rules/conditions.md#charmed) in this way, a creature's\
    \ speed is 0. If the [charmed](/rules/conditions.md#charmed) creature takes damage,\
    \ it can repeat the saving throw, ending the effect on itself on a success. A\
    \ target that succeeds on the saving throw is immune to the Captivating Presence\
    \ of all masters of cruelties for the next 24 hours."
  "name": "Captivating Presence (Recharge 6)"
"source":
- "GGR"
"image": "[[Master of Cruelties.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 196*

## Description

When a master of cruelties steps up as ringleader of a Rakdos show, the audience can be assured of a performance they will remember for the rest of their lives—however brief that might be.

The mesmerizing presence of a master of cruelties draws every eye to the demon and commands an audience's full attention. With every act of depraved torment the demon performs, onlookers are drawn more and more into the blood lust. Audiences clamor for more violence, and those who get too caught up in the revelry feel compelled to partake in the indiscriminate killing.

**Demons.** Just as angels are incarnations of the ideals of justice, demons embody depraved impulses: selfishness, cruelty, hatred, greed, and lust for power. Demons are strongly associated with the Cult of Rakdos; in fact, the demons of Ravnica might have been created by Rakdos in the same way that angels were created by the Boros Legion's founder. As a demon lord who has chosen to live in Ravnica, Rakdos claims authority over all the demons of this world-even if some of them, ambitious and headstrong as demons are, rebel against his authority.

Demons are agents of destruction that work their acts of terror in plain sight under the auspices of the Cult of Rakdos. They exhibit their cruelty in dramatic performances that leave the audience members blood-soaked but ecstatic. They incite mob riots that raze entire city blocks. The only thing demons fear is Rakdos himself, who doesn't tolerate rivals and hates to be upstaged.

**Demonic "Devils.".** The creatures called "devils" in Ravnica are minor demons akin to [quasits](/compendium/bestiary/fiend/quasit.md). While the larger demons embody evil qualities such as blood lust and torment, these lesser demons reflect the whimsical and chaotic side of Rakdos and his cult. Their mischievous antics cause disorder and destruction out of proportion to the demons' small size.

**Diabolic Demons.** Many of the demons of Ravnica are monstrous, winged creatures of human-like form. They are best represented by the statistics of the [nalfeshnee](/compendium/bestiary/fiend/nalfeshnee.md), the [shadow demon](/compendium/bestiary/fiend/shadow-demon.md), or the [vrock](/compendium/bestiary/fiend/vrock.md) in the Monster Manual. Demons associated with the Cult of Rakdos often have fiery attacks that make them similar to barbed devils or horned devils, except that they are demons. (They are chaotic evil, they speak Abyssal and not Infernal, and they lack Devil's Sight.)