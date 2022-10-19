---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/monstrosity/shapechanger
aliases: ["Dread Doppelganger"]
statblock: true
"name": "Dread Doppelganger"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "20"
- !!int "14"
- !!int "17"
- !!int "14"
- !!int "15"
"speed": "walk 40 ft."
"skillsaves":
  "Deception": !!int "7"
  "Stealth": !!int "8"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dread doppelganger's spellcasting ability is Intelligence (spell save\
    \ DC 14). It can innately cast the following spells, requiring no components:\n\
    \n1/day each: [mirror image](/compendium/spells/mirror-image.md), [mislead](/compendium/spells/mislead.md)\n\
    \n3/day each: [phantasmal killer](/compendium/spells/phantasmal-killer.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dread doppelganger can use its action to polymorph into a Small or\
    \ Medium humanoid it has seen, or back into its true form. Its statistics, other\
    \ than its size, are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In the first round of a combat, the dread doppelganger has advantage on\
    \ attack rolls against any creature it has surprised."
  "name": "Ambusher"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dread doppelganger surprises a creature and hits it with an attack\
    \ during the first round of combat, the target takes an extra 10 (3d6) damage\
    \ from the attack."
  "name": "Surprise Attack"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dread doppelganger makes three melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, range 5 ft., one target. Hit: 8 (1d6\
    \ + 5)."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dread doppelganger magically reads the surface thoughts of one creature\
    \ within 60 ft. of it. The effect can penetrate barriers, but 3 ft. of wood or\
    \ dirt, 2 ft. of stone, 2 inches of metal, or a thin sheet of lead blocks it.\
    \ While the target is in range, the dread doppelganger can continue reading its\
    \ thoughts, as long as the dread doppelganger's Concentration isn't broken (as\
    \ if concentrating on a spell). While reading the target's mind, the doppelganger\
    \ has advantage on Wisdom (Insight) and Charisma ([Deception](/rules/skills.md#Deception),\
    \ [Intimidation](/rules/skills.md#Intimidation), and [Persuasion](/rules/skills.md#Persuasion))\
    \ checks against the target."
  "name": "Read Thoughts"
"source":
- "MaBJoV"
name: Dread Doppelganger
image: "[[Dread Doppelganger.png]]"
---

# Dread Doppelganger

```statblock
"name": "Dread Doppelganger"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "20"
- !!int "14"
- !!int "17"
- !!int "14"
- !!int "15"
"speed": "walk 40 ft."
"skillsaves":
  "Deception": !!int "7"
  "Stealth": !!int "8"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dread doppelganger's spellcasting ability is Intelligence (spell save\
    \ DC 14). It can innately cast the following spells, requiring no components:\n\
    \n1/day each: [mirror image](/compendium/spells/mirror-image.md), [mislead](/compendium/spells/mislead.md)\n\
    \n3/day each: [phantasmal killer](/compendium/spells/phantasmal-killer.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dread doppelganger can use its action to polymorph into a Small or\
    \ Medium humanoid it has seen, or back into its true form. Its statistics, other\
    \ than its size, are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In the first round of a combat, the dread doppelganger has advantage on\
    \ attack rolls against any creature it has surprised."
  "name": "Ambusher"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dread doppelganger surprises a creature and hits it with an attack\
    \ during the first round of combat, the target takes an extra 10 (3d6) damage\
    \ from the attack."
  "name": "Surprise Attack"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dread doppelganger makes three melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, range 5 ft., one target. Hit: 8 (1d6\
    \ + 5)."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dread doppelganger magically reads the surface thoughts of one creature\
    \ within 60 ft. of it. The effect can penetrate barriers, but 3 ft. of wood or\
    \ dirt, 2 ft. of stone, 2 inches of metal, or a thin sheet of lead blocks it.\
    \ While the target is in range, the dread doppelganger can continue reading its\
    \ thoughts, as long as the dread doppelganger's Concentration isn't broken (as\
    \ if concentrating on a spell). While reading the target's mind, the doppelganger\
    \ has advantage on Wisdom (Insight) and Charisma ([Deception](/rules/skills.md#Deception),\
    \ [Intimidation](/rules/skills.md#Intimidation), and [Persuasion](/rules/skills.md#Persuasion))\
    \ checks against the target."
  "name": "Read Thoughts"
"source":
- "MaBJoV"
"image": "[[Dread Doppelganger.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 139*

## Description

> [!quote]- A quote from Doppelganger  
> 
> Let me borrow your face... You won't be needing it anymore.

The dread doppelganger is an ancient member of that race. It has lived for centuries adopting the forms of hundreds or even thousands of different creatures. The long years of impersonating others has drained these elder beings of any kind of empathy. Most dread doppelgangers work alone, though sometimes they will lead a band of younger members of their kind.

**Emotionless.** Dread doppelgangers have impersonated the feelings and emotions of so many others that they find it difficult to feel emotions of their own. Because of this they make excellent spies and assassins, for they don't experience remorse for anything that they might have to do. Dread doppelgangers seek out increasingly risky and bizarre behavior in order to instill any kind of emotion. Often this means they will take on dangerous jobs that could bring about their own death.

**Unnatural Gait.** In their natural form dread doppelgangers move about in a disturbing fashion. They are so used to mimicking the movements of others that their own manner of moving seems broken and chaotic. While they might seem ungainly and clumsy when they move, they can lash out at speeds that often surprise their victims.