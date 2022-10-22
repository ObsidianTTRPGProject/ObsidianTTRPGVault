---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/small
- monster/type/dragon
aliases: ["Drake Companion"]
statblock: true
"name": "Drake Companion"
"size": "Small"
"type": "dragon"
"alignment": "Unaligned"
"stats":
- !!int "16"
- !!int "12"
- !!int "15"
- !!int "8"
- !!int "14"
- !!int "8"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "0"
  "Wisdom": !!int "0"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Draconic"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When you summon the drake, choose a damage type: acid, cold, fire, lightning,\
    \ or poison. The chosen type determines the drake's damage immunity and the damage\
    \ of its Infused Strikes trait."
  "name": "Draconic Essence"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 plus PB to hit, reach 5 ft., one target. Hit:\
    \ 1d6 plus PB piercing damage."
  "name": "Bite"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When another creature within 30 feet of the drake that it can see hits\
    \ a target with a weapon attack, the drake infuses the strike with its essence,\
    \ causing the target to take an extra 1d6 damage of the type determined by its\
    \ Draconic Essence."
  "name": "Infused Strikes"
"source":
- "FTD"
name: Drake Companion
image: "[[Drake Companion.png]]"
---

# Drake Companion

```statblock
"name": "Drake Companion"
"size": "Small"
"type": "dragon"
"alignment": "Unaligned"
"stats":
- !!int "16"
- !!int "12"
- !!int "15"
- !!int "8"
- !!int "14"
- !!int "8"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "0"
  "Wisdom": !!int "0"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Draconic"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When you summon the drake, choose a damage type: acid, cold, fire, lightning,\
    \ or poison. The chosen type determines the drake's damage immunity and the damage\
    \ of its Infused Strikes trait."
  "name": "Draconic Essence"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 plus PB to hit, reach 5 ft., one target. Hit:\
    \ 1d6 plus PB piercing damage."
  "name": "Bite"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When another creature within 30 feet of the drake that it can see hits\
    \ a target with a weapon attack, the drake infuses the strike with its essence,\
    \ causing the target to take an extra 1d6 damage of the type determined by its\
    \ Draconic Essence."
  "name": "Infused Strikes"
"source":
- "FTD"
"image": "[[Drake Companion.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 15*