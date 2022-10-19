---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/construct
- monster/environment/urban
aliases: ["Shield Guardian"]
statblock: true
"name": "Shield Guardian"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "18"
- !!int "8"
- !!int "18"
- !!int "7"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 10"
"languages": "understands commands given in any language but can't speak"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shield guardian is magically bound to an amulet. As long as the guardian\
    \ and its amulet are on the same plane of existence, the amulet's wearer can telepathically\
    \ call the guardian to travel to it, and the guardian knows the distance and direction\
    \ to the amulet. If the guardian is within 60 feet of the amulet's wearer, half\
    \ of any damage the wearer takes (rounded up) is transferred to the guardian."
  "name": "Bound"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shield guardian regains 10 hit points at the start of its turn if it\
    \ has at least 1 hit point."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A spellcaster who wears the shield guardian's amulet can cause the guardian\
    \ to store one spell of 4th level or lower. To do so, the wearer must cast the\
    \ spell on the guardian. The spell has no effect but is stored within the guardian.\
    \ When commanded to do so by the wearer or when a situation arises that was predefined\
    \ by the spellcaster, the guardian casts the stored spell with any parameters\
    \ set by the original caster, requiring no components. When the spell is cast\
    \ or a new spell is stored, any previously stored spell is lost."
  "name": "Spell Storing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The guardian makes two fist attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Fist"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature makes an attack against the wearer of the guardian's amulet,\
    \ the guardian grants a +2 bonus to the wearer's AC if the guardian is within\
    \ 5 feet of the wearer."
  "name": "Shield"
"source":
- "MM"
- "CoS"
- "PotA"
- "SKT"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "IDRotF"
- "CRCotN"
name: Shield Guardian
image: "[[Shield Guardian.png]]"
---

# Shield Guardian

```statblock
"name": "Shield Guardian"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "18"
- !!int "8"
- !!int "18"
- !!int "7"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 10"
"languages": "understands commands given in any language but can't speak"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shield guardian is magically bound to an amulet. As long as the guardian\
    \ and its amulet are on the same plane of existence, the amulet's wearer can telepathically\
    \ call the guardian to travel to it, and the guardian knows the distance and direction\
    \ to the amulet. If the guardian is within 60 feet of the amulet's wearer, half\
    \ of any damage the wearer takes (rounded up) is transferred to the guardian."
  "name": "Bound"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shield guardian regains 10 hit points at the start of its turn if it\
    \ has at least 1 hit point."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A spellcaster who wears the shield guardian's amulet can cause the guardian\
    \ to store one spell of 4th level or lower. To do so, the wearer must cast the\
    \ spell on the guardian. The spell has no effect but is stored within the guardian.\
    \ When commanded to do so by the wearer or when a situation arises that was predefined\
    \ by the spellcaster, the guardian casts the stored spell with any parameters\
    \ set by the original caster, requiring no components. When the spell is cast\
    \ or a new spell is stored, any previously stored spell is lost."
  "name": "Spell Storing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The guardian makes two fist attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Fist"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature makes an attack against the wearer of the guardian's amulet,\
    \ the guardian grants a +2 bonus to the wearer's AC if the guardian is within\
    \ 5 feet of the wearer."
  "name": "Shield"
"source":
- "MM"
- "CoS"
- "PotA"
- "SKT"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "IDRotF"
- "CRCotN"
"image": "[[Shield Guardian.png]]"
```
^statblock

*Source: Monster Manual p. 271, Curse of Strahd, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Icewind Dale: Rime of the Frostmaiden, Critical Role: Call of the Netherdeep*

## Description

Wizards and other spellcasters create shield guardians for protection. A shield guardian treads beside its master, absorbing damage to keep its master alive as long as possible.

**Master's Amulet.** Every shield guardian has an amulet magically linked to it. A shield guardian can have only one corresponding amulet, and if that amulet is destroyed, the shield guardian is [incapacitated](/rules/conditions.md#incapacitated) until a replacement amulet is created. A shield guardian's amulet is subject to direct attack if it isn't being worn or carried. It has AC 10, 10 hit points, and immunity to poison and psychic damage. Crafting an amulet requires 1 week and costs 1,000 gp in components.

A shield guardian's solitary focus is to protect the amulet's wearer. The amulet's wearer can command the guardian to attack its enemies or to guard the wielder against attack. If an attack threatens to injure the wearer, the construct can magically absorb the blow into its own body, even at a distance.

A spellcaster can store a single spell within a shield guardian, which can then cast the spell on command or under specific conditions. Many a wizard has been rendered helpless by enemies, only to surprise those foes when its shield guardian unleashes potent magical power.

**Magnificent Treasure.** Because a shield guardian's ownership can be transferred by giving its matching amulet to another creature, some wizards collect exorbitant sums from princes, nobles, and crime lords to create shield guardians for them. At the same time, a shield guardian makes a mighty prize for anyone who slays its master and claims its amulet.

**Construct Nature.** A shield guardian doesn't require air, food, drink, or sleep.

## Environment

urban