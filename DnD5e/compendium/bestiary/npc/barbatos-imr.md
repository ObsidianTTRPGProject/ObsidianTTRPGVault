---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Barbatos"]
statblock: true
"name": "Barbatos"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Animal Handling": !!int "5"
  "Deception": !!int "3"
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Common"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Barbatos is a 6th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). He has the following ranger\
    \ spells prepared:\n\n1st level (4 1st-level slots): [ensnaring strike](/compendium/spells/ensnaring-strike.md),\
    \ [hail of thorns](/compendium/spells/hail-of-thorns.md), [hunter's mark](/compendium/spells/hunters-mark.md)\n\
    \n2nd level (2 2nd-level slots): [locate animals or plants](/compendium/spells/locate-animals-or-plants.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any nonmagical weapon made of metal that hits Barbatos corrodes. After\
    \ dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage\
    \ rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition\
    \ made of metal that hits Barbatos is destroyed after dealing damage."
  "name": "Rust Monster Cloak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Barbatos regains 10 hit points at the start of his turn. If Barbatos takes\
    \ acid or fire damage, this trait doesn't function at the start of Barbatos's\
    \ next turn. Barbatos dies only if he starts his turn with 0 hit points and doesn't\
    \ regenerate."
  "name": "Heart of the Troll"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Barbatos makes two bone shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bone Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7\
    \ (1d8 + 3) piercing damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) for 1 hour. If\
    \ the saving throw fails by 5 or more, the target is also [unconscious](/rules/conditions.md#unconscious).\
    \ The target regains consciousness if it takes damage or if another creature takes\
    \ an action to shake it."
  "name": "Light Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Barbatos corrodes a nonmagical ferrous metal object he can see within 5\
    \ feet of himself. If the object isn't being worn or carried, the touch destroys\
    \ a 1-foot cube of it. If the object is being worn or carried by a creature, the\
    \ creature can make a DC 12 Dexterity saving throw to avoid Barbatos's touch.\n\
    \nIf the object touched is either metal armor or a metal shield being worn or\
    \ carried, it takes a permanent and cumulative 1 penalty to the AC it offers.\
    \ Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed.\
    \ If the object touched is a held metal weapon, it rusts as described in Barbatos's\
    \ Rust Monster Cloak trait."
  "name": "Cloak Sweep"
"source":
- "IMR"
name: Barbatos
image: "[[Barbatos.png]]"
---

# Barbatos

```statblock
"name": "Barbatos"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Animal Handling": !!int "5"
  "Deception": !!int "3"
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Common"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Barbatos is a 6th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). He has the following ranger\
    \ spells prepared:\n\n1st level (4 1st-level slots): [ensnaring strike](/compendium/spells/ensnaring-strike.md),\
    \ [hail of thorns](/compendium/spells/hail-of-thorns.md), [hunter's mark](/compendium/spells/hunters-mark.md)\n\
    \n2nd level (2 2nd-level slots): [locate animals or plants](/compendium/spells/locate-animals-or-plants.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any nonmagical weapon made of metal that hits Barbatos corrodes. After\
    \ dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage\
    \ rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition\
    \ made of metal that hits Barbatos is destroyed after dealing damage."
  "name": "Rust Monster Cloak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Barbatos regains 10 hit points at the start of his turn. If Barbatos takes\
    \ acid or fire damage, this trait doesn't function at the start of Barbatos's\
    \ next turn. Barbatos dies only if he starts his turn with 0 hit points and doesn't\
    \ regenerate."
  "name": "Heart of the Troll"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Barbatos makes two bone shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bone Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7\
    \ (1d8 + 3) piercing damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) for 1 hour. If\
    \ the saving throw fails by 5 or more, the target is also [unconscious](/rules/conditions.md#unconscious).\
    \ The target regains consciousness if it takes damage or if another creature takes\
    \ an action to shake it."
  "name": "Light Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Barbatos corrodes a nonmagical ferrous metal object he can see within 5\
    \ feet of himself. If the object isn't being worn or carried, the touch destroys\
    \ a 1-foot cube of it. If the object is being worn or carried by a creature, the\
    \ creature can make a DC 12 Dexterity saving throw to avoid Barbatos's touch.\n\
    \nIf the object touched is either metal armor or a metal shield being worn or\
    \ carried, it takes a permanent and cumulative 1 penalty to the AC it offers.\
    \ Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed.\
    \ If the object touched is a held metal weapon, it rusts as described in Barbatos's\
    \ Rust Monster Cloak trait."
  "name": "Cloak Sweep"
"source":
- "IMR"
"image": "[[Barbatos.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 52*