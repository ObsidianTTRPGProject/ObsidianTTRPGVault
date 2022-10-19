---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/cleric
- monster/environment/desert
- monster/environment/urban
aliases: ["War Priest"]
statblock: true
"name": "War Priest"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Religion": !!int "4"
"senses": "passive Perception 13"
"languages": "any two languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The war priest casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 15):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1/day each: [banishment](/compendium/spells/banishment.md), [command](/compendium/spells/command.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [flame strike](/compendium/spells/flame-strike.md),\
    \ [guardian of faith](/compendium/spells/guardian-of-faith.md), [hold person](/compendium/spells/hold-person.md),\
    \ [lesser restoration](/compendium/spells/lesser-restoration.md), [revivify](/compendium/spells/revivify.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The war priest makes two Maul attacks, and it uses Holy Fire."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage  plus Hit: 10 (3d6) radiant damage."
  "name": "Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The war priest targets one creature it can see within 60 feet of it. The\
    \ target must make a DC 15 Wisdom saving throw. On a failed save, the target takes\
    \ 12 (2d8 + 3) radiant damage, and it is [blinded](/rules/conditions.md#blinded)\
    \ until the start of the war priest's next turn. On a successful save, the target\
    \ takes half as much damage and isn't [blinded](/rules/conditions.md#blinded)."
  "name": "Holy Fire"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The war priest or one creature of its choice within 60 feet of it regains\
    \ 12 (2d8 + 3) hit points."
  "name": "Healing Light (Recharge 4-6)"
"source":
- "MPMM"
- "VGM"
name: War Priest
image: "[[War Priest.png]]"
---

# War Priest

```statblock
"name": "War Priest"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Religion": !!int "4"
"senses": "passive Perception 13"
"languages": "any two languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The war priest casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 15):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1/day each: [banishment](/compendium/spells/banishment.md), [command](/compendium/spells/command.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [flame strike](/compendium/spells/flame-strike.md),\
    \ [guardian of faith](/compendium/spells/guardian-of-faith.md), [hold person](/compendium/spells/hold-person.md),\
    \ [lesser restoration](/compendium/spells/lesser-restoration.md), [revivify](/compendium/spells/revivify.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The war priest makes two Maul attacks, and it uses Holy Fire."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage  plus Hit: 10 (3d6) radiant damage."
  "name": "Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The war priest targets one creature it can see within 60 feet of it. The\
    \ target must make a DC 15 Wisdom saving throw. On a failed save, the target takes\
    \ 12 (2d8 + 3) radiant damage, and it is [blinded](/rules/conditions.md#blinded)\
    \ until the start of the war priest's next turn. On a successful save, the target\
    \ takes half as much damage and isn't [blinded](/rules/conditions.md#blinded)."
  "name": "Holy Fire"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The war priest or one creature of its choice within 60 feet of it regains\
    \ 12 (2d8 + 3) hit points."
  "name": "Healing Light (Recharge 4-6)"
"source":
- "MPMM"
- "VGM"
"image": "[[War Priest.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 254, Volo's Guide to Monsters p. 218*

## Description

War priests worship deities of war, protection, and strategy. They plan tactics, lead soldiers into battle, confront enemy spellcasters, and tend to casualties. A war priest might command an army or serve as the right hand of a [warlord](/compendium/bestiary/humanoid/warlord-mpmm.md) (appears in "this book") on the battlefield.

War priests typically adorn themselves with a symbol of their faith. You can roll on the War Priest Holy Symbols table below, or choose one that fits your campaign.

**War Priest Holy Symbols**

| dice: d8 | Holy Symbol |
|----------|-------------|
|  | Vial of iridescent liquid |
|  | Hilt of a broken sword |
|  | Piece of stained glass from a shrine |
|  | Clay figurine of a [ki-rin](/compendium/bestiary/celestial/ki-rin-mpmm.md) or another Celestial |
|  | [Torch](/compendium/items/torch.md) carved so that a hand appears to be holding the flame |
|  | Circlet of woven reeds |
|  | Scrimshawed bone |
|  | Vessel such as a cup, a [jug](/compendium/items/jug.md), an urn, or an amphora |
^war-priest-holy-symbols

## Environment

desert, urban