---
cssclass: json5e-monster
tags:
- compendium/src/psk
- monster/size/small
- monster/type/beast
aliases: ["Gremlin"]
statblock: true
"name": "Gremlin"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "12"
- !!int "13"
- !!int "13"
- !!int "3"
- !!int "13"
- !!int "6"
"speed": "walk 40 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gremlin can pinpoint, by scent, the location of refined or unrefined\
    \ aether within 30 feet of it."
  "name": "Aether Scent"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gremlin drains aether from an aether-powered device it can see within\
    \ 5 feet of it. If the object isn't being worn or carried, the touch automatically\
    \ drains aether. If the object is being worn or carried by a creature, the creature\
    \ must succeed on a DC 11 Dexterity saving throw to keep it out of the gremlin's\
    \ reach.\n\nIf the aether-powered device grants any bonus (to attack rolls, damage\
    \ rolls, Armor Class, and so on), that bonus is reduced by 1. If the device has\
    \ charges, it loses 1 charge. Otherwise, it stops functioning for 1 round. Left\
    \ unhindered, a gremlin can completely destroy an aether-powered device."
  "name": "Siphon"
"source":
- "PSK"
name: Gremlin
image: "[[Gremlin.png]]"
---

# Gremlin

```statblock
"name": "Gremlin"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "12"
- !!int "13"
- !!int "13"
- !!int "3"
- !!int "13"
- !!int "6"
"speed": "walk 40 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gremlin can pinpoint, by scent, the location of refined or unrefined\
    \ aether within 30 feet of it."
  "name": "Aether Scent"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gremlin drains aether from an aether-powered device it can see within\
    \ 5 feet of it. If the object isn't being worn or carried, the touch automatically\
    \ drains aether. If the object is being worn or carried by a creature, the creature\
    \ must succeed on a DC 11 Dexterity saving throw to keep it out of the gremlin's\
    \ reach.\n\nIf the aether-powered device grants any bonus (to attack rolls, damage\
    \ rolls, Armor Class, and so on), that bonus is reduced by 1. If the device has\
    \ charges, it loses 1 charge. Otherwise, it stops functioning for 1 round. Left\
    \ unhindered, a gremlin can completely destroy an aether-powered device."
  "name": "Siphon"
"source":
- "PSK"
"image": "[[Gremlin.png]]"
```
^statblock

*Source: Plane Shift: Kaladesh p. 26*