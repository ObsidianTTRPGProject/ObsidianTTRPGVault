---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/small
- monster/type/aberration
aliases: ["Gibberling"]
statblock: true
"name": "Gibberling"
"size": "Small"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "6"
- !!int "8"
- !!int "8"
"speed": "walk 25 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, the gibberling can gain advantage on all melee\
    \ weapon attack rolls during that turn, but attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Reckless"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in bright light, gibberlings have disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Light Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A gibberling gains advantage on stealth checks if it uses an action to\
    \ burrow into dirt."
  "name": "Burrow"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. The target is\
    \ [grappled](/rules/conditions.md#grappled) (escape DC 10). All gibberlings within\
    \ 5 ft. of the target can use a reaction to make a dagger attack with advantage\
    \ on the attack roll."
  "name": "Swarm"
"source":
- "MaBJoV"
name: Gibberling
image: "[[Gibberling.png]]"
---

# Gibberling

```statblock
"name": "Gibberling"
"size": "Small"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "6"
- !!int "8"
- !!int "8"
"speed": "walk 25 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, the gibberling can gain advantage on all melee\
    \ weapon attack rolls during that turn, but attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Reckless"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in bright light, gibberlings have disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Light Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A gibberling gains advantage on stealth checks if it uses an action to\
    \ burrow into dirt."
  "name": "Burrow"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. The target is\
    \ [grappled](/rules/conditions.md#grappled) (escape DC 10). All gibberlings within\
    \ 5 ft. of the target can use a reaction to make a dagger attack with advantage\
    \ on the attack roll."
  "name": "Swarm"
"source":
- "MaBJoV"
"image": "[[Gibberling.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 141*

## Description

> [!quote]- A quote from Volo  
> 
> Gibberlings are appropriately named, for they babble, or should I say gibber, incessantly. They are unpredictable and thus barely worthy of any kind of research. Thus, why I didn't include them in my book "Volo's Guide to Monsters".

> [!quote]- A quote from Gibberling  
> 
> SKREEEEEEEEGLURKLGLURKL! blarkblarkblarkblark. JagAjaGaJaGaJagAjAga!?

Gibberlings are small, feral humanoids believed to have originally come from the Far Realm, a distant plane characterized by chaos and madness. However, just how these creatures reached the Prime Material Plane and Faerûn is unknown. Regardless, these deadly, wild creatures have become an increasingly common sight for unfortunate travelers along the Sword Coast who stray from major roads at night. Luckily, the gibberlings' intense fear of all sources of light, including fire, make safeguarding camps and settlements a simple task.

**Madness Made Flesh.** Gibberlings are short, squat creatures roughly the same height as the average gnome, though their hunched posture makes them appear to be even smaller. Thick black fur covers most of their muscular bodies, though bare patches of sickly gray skin are found on their faces, arms, and legs. Jetblack eyes and a perpetual deranged grin adorn the bestial face of a gibberling, which is framed by pointed ears topped with hairy tufts.

**Chattering Hunger.** Gibberlings roam the wilderness in large groups, largely preferring to stay within dense forests and caverns. They are exclusively carnivorous and do not hesitate to eat the flesh of their fallen kin. Gibberlings are rarely able to surprise their prey, as they constantly shriek, howl, and chatter. Although these vocalizations appear to be a form communication, the few linguists who study these creatures have concluded that these noises are not a language.

**Unpredictable Combatants.** Even a novice adventurer could make short work of a single gibberling, though they always travel in packs. If left unchecked, these groups swell to vast hordes that devour everything in their path. Despite their animalistic behavior, gibberlings are intelligent enough to wield weapons, albeit ones stolen from victims rather than forged themselves. When such arms are unavailable, gibberlings improvise using rocks, bones, and large sticks. Gibberlings lack any sense of self-preservation; with no concept of retreat, a gibberling always fights to the death.