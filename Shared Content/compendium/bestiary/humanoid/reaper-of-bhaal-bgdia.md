---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Reaper of Bhaal"]
statblock: true
"name": "Reaper of Bhaal"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "11"
- !!int "20"
- !!int "13"
- !!int "15"
- !!int "12"
- !!int "16"
"speed": "walk 40 ft."
"skillsaves":
  "Intimidation": !!int "5"
  "Stealth": !!int "9"
  "Perception": !!int "3"
  "Persuasion": !!int "5"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reaper's innate spellcasting ability is Charisma (spell save DC 13).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \n1/day each: [charm person](/compendium/spells/charm-person.md), [disguise\
    \ self](/compendium/spells/disguise-self.md), [sanctuary](/compendium/spells/sanctuary.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As long as the reaper is not [incapacitated](/rules/conditions.md#incapacitated),\
    \ hostile creatures within 5 feet of it gain vulnerability to piercing damage\
    \ unless they have resistance or immunity to such damage."
  "name": "Aura of Murder"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reaper makes two dagger attacks and uses Shroud Self."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d4 + 5) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reaper magically turns [invisible](/rules/conditions.md#invisible)\
    \ until the start of its next turn. This invisibility ends if the reaper makes\
    \ an attack roll, makes a damage roll, or casts a spell."
  "name": "Shroud Self"
"source":
- "BGDIA"
name: Reaper of Bhaal
image: "[[Reaper of Bhaal.png]]"
---

# Reaper of Bhaal

```statblock
"name": "Reaper of Bhaal"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "11"
- !!int "20"
- !!int "13"
- !!int "15"
- !!int "12"
- !!int "16"
"speed": "walk 40 ft."
"skillsaves":
  "Intimidation": !!int "5"
  "Stealth": !!int "9"
  "Perception": !!int "3"
  "Persuasion": !!int "5"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reaper's innate spellcasting ability is Charisma (spell save DC 13).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \n1/day each: [charm person](/compendium/spells/charm-person.md), [disguise\
    \ self](/compendium/spells/disguise-self.md), [sanctuary](/compendium/spells/sanctuary.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As long as the reaper is not [incapacitated](/rules/conditions.md#incapacitated),\
    \ hostile creatures within 5 feet of it gain vulnerability to piercing damage\
    \ unless they have resistance or immunity to such damage."
  "name": "Aura of Murder"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reaper makes two dagger attacks and uses Shroud Self."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d4 + 5) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reaper magically turns [invisible](/rules/conditions.md#invisible)\
    \ until the start of its next turn. This invisibility ends if the reaper makes\
    \ an attack roll, makes a damage roll, or casts a spell."
  "name": "Shroud Self"
"source":
- "BGDIA"
"image": "[[Reaper of Bhaal.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 233*

## Description

Bhaal's cultists emulate their deity, carrying out gruesome murders to spread fear and horror. They are charming and disarming when they wish, but in combat their true, bloodthirsty nature comes to the fore.

**Bloodletters.** All cultists of Bhaal learn to call upon their god's power to leave their victims vulnerable to their long-bladed knives. When Bhaal's magic works its power, stab wounds erupt in terrible gouts of blood. Seemingly minor wounds plunge deep into a victim's body and cause terrible pain and bleeding.

**Killers from the Shadows.** Bhaal's followers are cunning murderers who kill to strike fear and thrive on sowing terror in the cities they inhabit. They can call upon their god's power to blend into the shadows with ease, or even turn [invisible](/rules/conditions.md#invisible) for a crucial moment.

**Cult Ranks.** Low-ranking cultists of Bhaal are called night blades, whom Bhaal blesses with [darkvision](/rules/senses.md#darkvision) and superior stealth. Reapers are the next rank up. They gain the ability to turn [invisible](/rules/conditions.md#invisible) and can use Bhaal's magic to evade suspicion. The highest rank are the death's heads, who can take on the skull-faced guise of their deity to terrify their prey. In combat, they intimidate foes by shrugging off the deadliest attacks with ease, showing that resisting Bhaal's schemes is futile.