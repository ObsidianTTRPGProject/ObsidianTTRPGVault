---
cssclass: json5e-monster
tags:
- compendium/src/vgm
- monster/size/small
- monster/type/humanoid/goblinoid
- monster/environment/arctic
- monster/environment/desert
- monster/environment/underdark
- monster/environment/urban
aliases: ["Booyahg Slave of the Fiend"]
statblock: true
"name": "Booyahg Slave of the Fiend"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "7"
  "Religion": !!int "4"
  "Arcana": !!int "4"
  "Persuasion": !!int "7"
"damage_resistances": "slashing from nonmagical attacks not made with silvered weapons"
"senses": "darkvision 60 ft., darkvision 60 ft., passive Perception 11"
"languages": "any two languages (usually Abyssal or Infernal), Goblin"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goblin's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [alter self](/compendium/spells/alter-self.md), [false life](/compendium/spells/false-life.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only), [mage armor](/compendium/spells/mage-armor.md)\
    \ (self only), [silent image](/compendium/spells/silent-image.md)\n\n1/day each:\
    \ [feeblemind](/compendium/spells/feeblemind.md), [finger of death](/compendium/spells/finger-of-death.md),\
    \ [plane shift](/compendium/spells/plane-shift.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goblin is a 17th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell\
    \ slots when it finishes a short or long rest. It knows the following warlock\
    \ spells:\n\nCantrips (at will): [eldritch blast](/compendium/spells/eldritch-blast.md),\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [friends](/compendium/spells/friends.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st-5th level (4 5th-level slots): [banishment](/compendium/spells/banishment.md),\
    \ [burning hands](/compendium/spells/burning-hands.md), [flame strike](/compendium/spells/flame-strike.md),\
    \ [hellish rebuke](/compendium/spells/hellish-rebuke.md), [magic circle](/compendium/spells/magic-circle.md),\
    \ [scorching ray](/compendium/spells/scorching-ray.md), [scrying](/compendium/spells/scrying.md),\
    \ [stinking cloud](/compendium/spells/stinking-cloud.md), [suggestion](/compendium/spells/suggestion.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the goblin makes an ability check or saving throw, it can add a d10\
    \ to the roll. It can do this after the roll is made but before any of the roll's\
    \ effects occur."
  "name": "Dark One's Own Luck (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Goblin can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage plus 10 (3d6) fire damage."
  "name": "Mace"
"source":
- "VGM"
name: Booyahg Slave of the Fiend
image: "[[Booyahg Slave of the Fiend.png]]"
---

# Booyahg Slave of the Fiend

```statblock
"name": "Booyahg Slave of the Fiend"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "7"
  "Religion": !!int "4"
  "Arcana": !!int "4"
  "Persuasion": !!int "7"
"damage_resistances": "slashing from nonmagical attacks not made with silvered weapons"
"senses": "darkvision 60 ft., darkvision 60 ft., passive Perception 11"
"languages": "any two languages (usually Abyssal or Infernal), Goblin"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goblin's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [alter self](/compendium/spells/alter-self.md), [false life](/compendium/spells/false-life.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only), [mage armor](/compendium/spells/mage-armor.md)\
    \ (self only), [silent image](/compendium/spells/silent-image.md)\n\n1/day each:\
    \ [feeblemind](/compendium/spells/feeblemind.md), [finger of death](/compendium/spells/finger-of-death.md),\
    \ [plane shift](/compendium/spells/plane-shift.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goblin is a 17th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell\
    \ slots when it finishes a short or long rest. It knows the following warlock\
    \ spells:\n\nCantrips (at will): [eldritch blast](/compendium/spells/eldritch-blast.md),\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [friends](/compendium/spells/friends.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st-5th level (4 5th-level slots): [banishment](/compendium/spells/banishment.md),\
    \ [burning hands](/compendium/spells/burning-hands.md), [flame strike](/compendium/spells/flame-strike.md),\
    \ [hellish rebuke](/compendium/spells/hellish-rebuke.md), [magic circle](/compendium/spells/magic-circle.md),\
    \ [scorching ray](/compendium/spells/scorching-ray.md), [scrying](/compendium/spells/scrying.md),\
    \ [stinking cloud](/compendium/spells/stinking-cloud.md), [suggestion](/compendium/spells/suggestion.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the goblin makes an ability check or saving throw, it can add a d10\
    \ to the roll. It can do this after the roll is made but before any of the roll's\
    \ effects occur."
  "name": "Dark One's Own Luck (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Goblin can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage plus 10 (3d6) fire damage."
  "name": "Mace"
"source":
- "VGM"
"image": "[[Booyahg Slave of the Fiend.png]]"
```
^statblock

*Source: Volo's Guide to Monsters p. 42*

## Description

This goblin warlock serves a patron who can extract payment in flesh if the goblin doesn't do as promised. Often this patron is a coven of hags serving as the tribe's boss, a fiend that has made its way into the world, or an undying lord such as a lich or a vampire. (For more information on undying lord patrons, see the "Sword Coast Adventurer's Guide").

**Booyahgs.** Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

## Environment

arctic, desert, underdark, urban