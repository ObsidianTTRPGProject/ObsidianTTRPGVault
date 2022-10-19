---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Reckoner"]
statblock: true
"name": "Reckoner"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "12"
- !!int "15"
- !!int "15"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "2"
  "Perception": !!int "3"
  "Arcana": !!int "4"
"senses": "passive Perception 13"
"languages": "Common plus any one language"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reckoner is a 5th-level Boros spellcaster. Its spellcasting ability\
    \ is Intelligence (spell save DC 12, +4 to hit with spell attacks). The reckoner\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [blade\
    \ ward](/compendium/spells/blade-ward.md), [light](/compendium/spells/light.md),\
    \ [message](/compendium/spells/message.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [guiding bolt](/compendium/spells/guiding-bolt.md),\
    \ [shield](/compendium/spells/shield.md), [thunderwave](/compendium/spells/thunderwave.md),\
    \ [witch bolt](/compendium/spells/witch-bolt.md)\n\n2nd level (3 2nd-level slots):\
    \ [blur](/compendium/spells/blur.md), [levitate](/compendium/spells/levitate.md)\n\
    \n3rd level (2 3rd-level slots): [lightning bolt](/compendium/spells/lightning-bolt.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reckoner has advantage on initiative rolls."
  "name": "First Strike"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature hits the reckoner with an attack, the attacker takes lightning\
    \ damage equal to half the damage dealt by the attack."
  "name": "Lightning Backlash (Recharge 5-6)"
"source":
- "GGR"
name: Reckoner
image: "[[Reckoner.png]]"
---

# Reckoner

```statblock
"name": "Reckoner"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "12"
- !!int "15"
- !!int "15"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "2"
  "Perception": !!int "3"
  "Arcana": !!int "4"
"senses": "passive Perception 13"
"languages": "Common plus any one language"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reckoner is a 5th-level Boros spellcaster. Its spellcasting ability\
    \ is Intelligence (spell save DC 12, +4 to hit with spell attacks). The reckoner\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [blade\
    \ ward](/compendium/spells/blade-ward.md), [light](/compendium/spells/light.md),\
    \ [message](/compendium/spells/message.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [guiding bolt](/compendium/spells/guiding-bolt.md),\
    \ [shield](/compendium/spells/shield.md), [thunderwave](/compendium/spells/thunderwave.md),\
    \ [witch bolt](/compendium/spells/witch-bolt.md)\n\n2nd level (3 2nd-level slots):\
    \ [blur](/compendium/spells/blur.md), [levitate](/compendium/spells/levitate.md)\n\
    \n3rd level (2 3rd-level slots): [lightning bolt](/compendium/spells/lightning-bolt.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reckoner has advantage on initiative rolls."
  "name": "First Strike"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature hits the reckoner with an attack, the attacker takes lightning\
    \ damage equal to half the damage dealt by the attack."
  "name": "Lightning Backlash (Recharge 5-6)"
"source":
- "GGR"
"image": "[[Reckoner.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 231*

## Description

Boros reckoners combine physical power and magical prowess, serving as the shock troops of the legion. They are adept at breaking up mobs and organized lines of defense. Sometimes described as living thunderstorms, reckoners charge their bodies with lightning that bursts forth in their spells and lashes out at enemies who harm them. Many reckoners are minotaurs.