---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/small
- monster/type/humanoid/halfling
aliases: ["Vellin Farstride"]
statblock: true
"name": "Vellin Farstride"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Neutral Good"
"ac": !!int "17"
"hp": !!int "91"
"hit_dice": "14d6 + 42"
"stats":
- !!int "11"
- !!int "20"
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "11"
"speed": "walk 25 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "6"
"skillsaves":
  "Nature": !!int "8"
  "Deception": !!int "4"
  "Stealth": !!int "13"
  "Perception": !!int "10"
  "Survival": !!int "10"
  "Persuasion": !!int "8"
"senses": "passive Perception 20"
"languages": "Abyssal, Common, Halfling, Infernal, telepathy 30 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vellin is accompanied by a [wolf](/compendium/bestiary/beast/wolf.md) with\
    \ maximum hit points (18) named Akela. Vellin can mount or dismount Akela using\
    \ 5 ft. of movement. While mounted, Vellin can order Akela to Dash, Disengage,\
    \ and Dodge. In addition, Vellin has an [owl](/compendium/bestiary/beast/owl.md)\
    \ companion with maximum hit points (3). On Vellin's turn, the owl can perform\
    \ a flyby on a creature of Vellin's choice. The next attack that Vellin makes\
    \ against that creature has advantage."
  "name": "Animal Companions"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vellin has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vellin has advantage on Wisdom (Perception) checks that rely on hearing\
    \ or sight."
  "name": "Keen Hearing and Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Vellin hits a Fiend with a weapon attack he deals an additional 7\
    \ (2d6) damage."
  "name": "Fiend Slayer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vellin can take the Disengage or Hide action as a bonus action on each\
    \ of his turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vellin makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, ranged 80/320 ft., one target. Hit:\
    \ 8 (1d6 + 5) piercing damage."
  "name": "Shortbow"
"source":
- "MaBJoV"
name: Vellin Farstride
image: "[[Vellin Farstride.png]]"
---

# Vellin Farstride

```statblock
"name": "Vellin Farstride"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Neutral Good"
"ac": !!int "17"
"hp": !!int "91"
"hit_dice": "14d6 + 42"
"stats":
- !!int "11"
- !!int "20"
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "11"
"speed": "walk 25 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "6"
"skillsaves":
  "Nature": !!int "8"
  "Deception": !!int "4"
  "Stealth": !!int "13"
  "Perception": !!int "10"
  "Survival": !!int "10"
  "Persuasion": !!int "8"
"senses": "passive Perception 20"
"languages": "Abyssal, Common, Halfling, Infernal, telepathy 30 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vellin is accompanied by a [wolf](/compendium/bestiary/beast/wolf.md) with\
    \ maximum hit points (18) named Akela. Vellin can mount or dismount Akela using\
    \ 5 ft. of movement. While mounted, Vellin can order Akela to Dash, Disengage,\
    \ and Dodge. In addition, Vellin has an [owl](/compendium/bestiary/beast/owl.md)\
    \ companion with maximum hit points (3). On Vellin's turn, the owl can perform\
    \ a flyby on a creature of Vellin's choice. The next attack that Vellin makes\
    \ against that creature has advantage."
  "name": "Animal Companions"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vellin has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vellin has advantage on Wisdom (Perception) checks that rely on hearing\
    \ or sight."
  "name": "Keen Hearing and Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Vellin hits a Fiend with a weapon attack he deals an additional 7\
    \ (2d6) damage."
  "name": "Fiend Slayer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vellin can take the Disengage or Hide action as a bonus action on each\
    \ of his turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vellin makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, ranged 80/320 ft., one target. Hit:\
    \ 8 (1d6 + 5) piercing damage."
  "name": "Shortbow"
"source":
- "MaBJoV"
"image": "[[Vellin Farstride.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 62*

## Description

> [!quote]- A quote from MINSC  
> 
> COURAGE, FRIENDSHIP, AND the sound of steel on steel! These are the stuff of all great adventures. The fight for justice is hard, sweaty work, but when the times get tough, the tough get hamsters!

Vellin Farstride has earned his last name with a travelogue that would be the envy of any would-be explorer. Vellin specializes in hunting fiendish enemies and other extra planar threats. Vellin is almost always accompanied by his faithful wolf, Akela, and often rides the beast into battle.

Originally from the world of Oerth, Vellin arrived in Faerûn several years ago. Between those two worlds Vellin traveled the Astral Sea, hunted demons in the Blood War, dealt with hags in the Gray Waste and assassinated Infernal Dukes on Avernus. Vellin quickly fell in love with the vast and beautiful wilds of Faerûn and decided that it would be his home. In order to protect his new home, Vellin wanted to band together with formidable allies that could protect it from outer planar threats. He discovered that the Harpers had values that were closest to his own.

Vellin is adept at diplomacy and deception, out of necessity from having to deal with Fiendish powers. Though not physically intimidating, his quiet intensity and well-earned confidence can be very convincing. He prefers simple and direct language, even when dealing with nobles and royalty, but can employ eloquence and flattery when the need arises.

**Vellin as a Contact.** Vellin is the primary contact for members of the Harpers at low levels. Vellin is an expert at obtaining mounts on short notice for those who need to get somewhere quickly. Each member of your group gets access to the type of mount requested. If any of the mounts die while under your control (or a member of your group), you can never use that type of mount again. Otherwise, you can use the mount as long as needed.

**Mounts via Vellin**

| Mount | Required Level | Terrain |
|-------|----------------|---------|
| Riding horses | 1 | Land |
| Camels | 1 | Desert |
| Dolphins | 3 | Water |
| Hippogriffons | 3 | Air |
| Giant striders | 7 | Fire |
| Polar bears | 7 | Cold |
^mounts-via-vellin