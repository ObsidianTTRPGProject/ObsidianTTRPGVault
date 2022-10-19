---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/giant
- monster/environment/forest
- monster/environment/urban
aliases: ["Oni"]
statblock: true
"name": "Oni"
"size": "Large"
"type": "giant"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"stats":
- !!int "19"
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "3"
  "Wisdom": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "8"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Giant"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oni's innate spellcasting ability is Charisma (spell save DC 13). The\
    \ oni can innately cast the following spells, requiring no material components:\n\
    \nAt will: [darkness](/compendium/spells/darkness.md), [invisibility](/compendium/spells/invisibility.md)\n\
    \n1/day each: [charm person](/compendium/spells/charm-person.md), [cone of\
    \ cold](/compendium/spells/cone-of-cold.md), [gaseous form](/compendium/spells/gaseous-form.md),\
    \ [sleep](/compendium/spells/sleep.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oni's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oni regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oni makes two attacks, either with its claws or its glaive."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage."
  "name": "Claw (Oni Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form."
  "name": "Glaive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oni magically polymorphs into a Small or Medium humanoid, into a Large\
    \ giant, or back into its true form. Other than its size, its statistics are the\
    \ same in each form. The only equipment that is transformed is its glaive, which\
    \ shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts\
    \ to its true form, and its glaive reverts to its normal size."
  "name": "Change Shape"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "WDMM"
- "GoS"
- "ERLW"
- "EGW"
- "TCE"
- "WBtW"
- "JttRC"
name: Oni
image: "[[Oni.png]]"
---

# Oni

```statblock
"name": "Oni"
"size": "Large"
"type": "giant"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"stats":
- !!int "19"
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "3"
  "Wisdom": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "8"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Giant"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oni's innate spellcasting ability is Charisma (spell save DC 13). The\
    \ oni can innately cast the following spells, requiring no material components:\n\
    \nAt will: [darkness](/compendium/spells/darkness.md), [invisibility](/compendium/spells/invisibility.md)\n\
    \n1/day each: [charm person](/compendium/spells/charm-person.md), [cone of\
    \ cold](/compendium/spells/cone-of-cold.md), [gaseous form](/compendium/spells/gaseous-form.md),\
    \ [sleep](/compendium/spells/sleep.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oni's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oni regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oni makes two attacks, either with its claws or its glaive."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage."
  "name": "Claw (Oni Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form."
  "name": "Glaive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oni magically polymorphs into a Small or Medium humanoid, into a Large\
    \ giant, or back into its true form. Other than its size, its statistics are the\
    \ same in each form. The only equipment that is transformed is its glaive, which\
    \ shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts\
    \ to its true form, and its glaive reverts to its normal size."
  "name": "Change Shape"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "WDMM"
- "GoS"
- "ERLW"
- "EGW"
- "TCE"
- "WBtW"
- "JttRC"
"image": "[[Oni.png]]"
```
^statblock

*Source: Monster Manual p. 239, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel*

## Description

In nursery rhymes, oni are fearsome bogeymen that haunt the nightmares of children and adults alike, yet they are very real and always hungry. They find human babies especially delicious. Oni look like demonic ogres with blue or green skin, dark hair, and a pair of short ivory horns protruding from their foreheads. Their eyes are dark with strikingly white pupils, and their teeth and claws are jet black.

**Night Haunters.** By the light of day, an oni hides its true form with magic, gaining the trust of those it intends to betray when darkness descends. These creatures can change their size as well as their shape, appearing as humanoids as they pass through towns, pretending to be travelers, woodcutters, or frontier folk. In such a form, an oni takes stock of the selection of humanoids in a settlement and devises ways to abduct and devour some of them.

**Magical Ogres.** Oni are sometimes called ogre mages because of their innate magical ability. Though they are only distantly related to true ogres, they share the ogres' habit of joining forces with other evil creatures. An oni serves a master if doing so proves lucrative or provides it with a luxurious, well-defended home. Oni covet magic, and they work for evil wizards and hags in exchange for useful magic items.

## Environment

forest, urban