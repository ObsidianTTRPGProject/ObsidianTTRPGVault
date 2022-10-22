---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/large
- monster/type/fiend
aliases: ["Demodand, Shator"]
statblock: true
"name": "Demodand, Shator"
"size": "Large"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "24"
- !!int "13"
- !!int "20"
- !!int "14"
- !!int "16"
- !!int "20"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "10"
  "Strength": !!int "12"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "12"
  "Insight": !!int "8"
  "Persuasion": !!int "10"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "acid, fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Abyssal, Common"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shator's innate spellcasting ability is Charisma (spell save DC 18,\
    \ +10 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [clairvoyance](/compendium/spells/clairvoyance.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [invisibility](/compendium/spells/invisibility.md) (self only), [spider climb](/compendium/spells/spider-climb.md),\
    \ [tongues](/compendium/spells/tongues.md)\n\n2/day each: [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [plane shift](/compendium/spells/plane-shift.md)\n\n3/day each: [cloudkill](/compendium/spells/cloudkill.md),\
    \ [tasha's hideous laughter](/compendium/spells/tashas-hideous-laughter.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the shator's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shator has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shator has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shator's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature within 5 feet of the shator is splattered with slime whenever\
    \ it hits the shator with a melee attack. The creature must make a DC 18 Dexterity\
    \ saving throw or becoming [paralyzed](/rules/conditions.md#paralyzed) for 1 minute.\
    \ A creature can repeat the saving throw at the end of each of its turns, ending\
    \ the [paralyzed](/rules/conditions.md#paralyzed) effect on itself on a success.."
  "name": "Poisonous Slime"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shator makes two claw attacks and one bite. It can substitute its bite\
    \ for a poisonous spit attack if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 16 (2d8\
    \ + 7) slashing damage plus 10 (3d6) acid damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 25 (4d8\
    \ + 7) piercing damage plus 14 (4d6) acid damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shator exhales poisonous spit in a 20-foot line that is 5 feet wide.\
    \ Each creature in that line must make a DC 18 Dexterity saving throw, taking\
    \ 36 (8d8) acid damage on a failed save and becoming [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the [paralyzed](/rules/conditions.md#paralyzed) effect on itself\
    \ on a success. The creature takes 18 (4d8) acid damage on a successful save."
  "name": "Poisonous Spit (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the shator rolls 1-2 on a d6 it summons in two Demodand, Farastu|MaBJoV|farastu,\
    \ a result of 3-4 summons in one [shator](/compendium/bestiary/fiend/demodand-shator-mabjov.md)."
  "name": "Summon Reinforcements (Recharges after a Short or Long Rest)"
"source":
- "MaBJoV"
name: Demodand, Shator
image: "[[Demodand, Shator.png]]"
---

# Demodand, Shator

```statblock
"name": "Demodand, Shator"
"size": "Large"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "24"
- !!int "13"
- !!int "20"
- !!int "14"
- !!int "16"
- !!int "20"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "10"
  "Strength": !!int "12"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "12"
  "Insight": !!int "8"
  "Persuasion": !!int "10"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "acid, fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Abyssal, Common"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shator's innate spellcasting ability is Charisma (spell save DC 18,\
    \ +10 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [clairvoyance](/compendium/spells/clairvoyance.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [invisibility](/compendium/spells/invisibility.md) (self only), [spider climb](/compendium/spells/spider-climb.md),\
    \ [tongues](/compendium/spells/tongues.md)\n\n2/day each: [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [plane shift](/compendium/spells/plane-shift.md)\n\n3/day each: [cloudkill](/compendium/spells/cloudkill.md),\
    \ [tasha's hideous laughter](/compendium/spells/tashas-hideous-laughter.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the shator's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shator has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shator has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shator's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature within 5 feet of the shator is splattered with slime whenever\
    \ it hits the shator with a melee attack. The creature must make a DC 18 Dexterity\
    \ saving throw or becoming [paralyzed](/rules/conditions.md#paralyzed) for 1 minute.\
    \ A creature can repeat the saving throw at the end of each of its turns, ending\
    \ the [paralyzed](/rules/conditions.md#paralyzed) effect on itself on a success.."
  "name": "Poisonous Slime"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shator makes two claw attacks and one bite. It can substitute its bite\
    \ for a poisonous spit attack if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 16 (2d8\
    \ + 7) slashing damage plus 10 (3d6) acid damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 25 (4d8\
    \ + 7) piercing damage plus 14 (4d6) acid damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shator exhales poisonous spit in a 20-foot line that is 5 feet wide.\
    \ Each creature in that line must make a DC 18 Dexterity saving throw, taking\
    \ 36 (8d8) acid damage on a failed save and becoming [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the [paralyzed](/rules/conditions.md#paralyzed) effect on itself\
    \ on a success. The creature takes 18 (4d8) acid damage on a successful save."
  "name": "Poisonous Spit (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the shator rolls 1-2 on a d6 it summons in two Demodand, Farastu|MaBJoV|farastu,\
    \ a result of 3-4 summons in one [shator](/compendium/bestiary/fiend/demodand-shator-mabjov.md)."
  "name": "Summon Reinforcements (Recharges after a Short or Long Rest)"
"source":
- "MaBJoV"
"image": "[[Demodand, Shator.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 135*

## Description

> [!quote]- A quote from MINSC & BOO!  
> 
> Me and Boo like many sticky things, most especially donuts and Boo's favorite, candied pecans. But some sticky things belong on the pointy end of a sword.

> [!quote]- A quote from Volo  
> 
> Demodands are difficult to study since they usually never leave their native plane of Carceri. However, the prison in Ust Natha presents a unique opportunity to view them up close. Not that I enjoyed the experience.

Demodands are primal creations of evil and implacable agents of destruction. Exiled to Carceri for their chaotic taint, they are also known as gehreleths or leths.

**Wardens of the Damned.** Though they are trapped in Carceri, the demodands do not consider themselves prisoners. Instead, they are the self-appointed wardens and jailors of the Tarterian Depths. They derive pleasure from tormenting and terrorizing their fellow captives through acts of brutality, cruelly taunting them the entire time. However, they make no distinction between those actually condemned to Carceri, and planar travelers just passing through. As far as the demodand are concerned, all must be prevented from escaping at any cost.

**A Trio of the Grotesque.** Demodands have three castes, each with a form so repulsive even other denizens of the Lower Planes view them with disgust. The farastu are forced to do the most menial tasks, under orders from their kelubar and shator superiors. When around weaker creatures they are vicious bullies; around more powerful beings they become whimpering cowards. The kelubars are the bureaucrats of the demodands, acting as intermediaries between the lowly farastu and their shator overlords. The kelubar decide which prisoners are rewarded, and which should be punished with extra torments. The shators make up the ruling caste, effectively serving as prison wardens to the lower-ranked guards.

**The Memory of Eons.** Each shator possesses an obsidian triangle. These powerful magical artifacts grant the demodands access to the collective memory of their kind; a shared recollection stretching back to the very dawn of time. The shators primarily use the triangles to track the identity of every being that has ever escaped Carceri, concocting elaborate, generation-spanning strategies to recapture these fugitive souls.