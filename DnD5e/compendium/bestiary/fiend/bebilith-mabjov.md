---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/huge
- monster/type/fiend/demon
aliases: ["Bebilith"]
statblock: true
"name": "Bebilith"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "189"
"hit_dice": "18d12 + 72"
"stats":
- !!int "16"
- !!int "22"
- !!int "18"
- !!int "11"
- !!int "13"
- !!int "8"
"speed": "walk 40 ft., climb 40 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Stealth": !!int "10"
  "Perception": !!int "5"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 15"
"languages": "understands Abyssal but only speaks telepathically to its own kind"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bebilith can innately cast the following spell, requiring no material\
    \ components:\n\n3/day: [darkness](/compendium/spells/darkness.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bebilith may use a bonus action to mark prey that it has damaged. Only\
    \ one creature can be marked at a time. The bebilith always knows the exact location\
    \ of the marked prey on the current plane of existence, cannot be surprised by\
    \ it, and has advantage on all attack rolls against it."
  "name": "Relentless Hunter"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bebilith can climb difficult surfaces, including upside down, without\
    \ needing to make an ability check and ignores any movement restrictions caused\
    \ by webbing."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Bebilith uses [poisoned](/rules/conditions.md#poisoned) web if it can\
    \ and then makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d12\
    \ + 3) piercing damage plus 21 (6d6) poison damage. Any creature that drops to\
    \ zero hit points because it has been bit by the bebilith lights on fire and suffers\
    \ 7 (2d6) fire damage each round until healing is applied to them."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 12 (2d8\
    \ + 3) slashing damage."
  "name": "Foreleg"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 30/60 ft., one creature. Hit:\
    \ 36 (8d8) poison damage, and the target is [restrained](/rules/conditions.md#restrained)\
    \ by webbing. While [restrained](/rules/conditions.md#restrained), the target\
    \ takes 9 (2d8) poison damage at the start of each of its turns and the target\
    \ may then make a DC 17 Strength check to free itself from the webbing. Unlike\
    \ normal webs, fire cannot burn a bebilith's webbing but if used will ignite the\
    \ web inflicting an additional 3 (1d6) fire damage to trapped targets."
  "name": "Poisoned Web (Recharge 5-6)"
"source":
- "MaBJoV"
name: Bebilith
image: "[[Bebilith.png]]"
---

# Bebilith

```statblock
"name": "Bebilith"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "189"
"hit_dice": "18d12 + 72"
"stats":
- !!int "16"
- !!int "22"
- !!int "18"
- !!int "11"
- !!int "13"
- !!int "8"
"speed": "walk 40 ft., climb 40 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Stealth": !!int "10"
  "Perception": !!int "5"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 15"
"languages": "understands Abyssal but only speaks telepathically to its own kind"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bebilith can innately cast the following spell, requiring no material\
    \ components:\n\n3/day: [darkness](/compendium/spells/darkness.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bebilith may use a bonus action to mark prey that it has damaged. Only\
    \ one creature can be marked at a time. The bebilith always knows the exact location\
    \ of the marked prey on the current plane of existence, cannot be surprised by\
    \ it, and has advantage on all attack rolls against it."
  "name": "Relentless Hunter"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bebilith can climb difficult surfaces, including upside down, without\
    \ needing to make an ability check and ignores any movement restrictions caused\
    \ by webbing."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Bebilith uses [poisoned](/rules/conditions.md#poisoned) web if it can\
    \ and then makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d12\
    \ + 3) piercing damage plus 21 (6d6) poison damage. Any creature that drops to\
    \ zero hit points because it has been bit by the bebilith lights on fire and suffers\
    \ 7 (2d6) fire damage each round until healing is applied to them."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 12 (2d8\
    \ + 3) slashing damage."
  "name": "Foreleg"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 30/60 ft., one creature. Hit:\
    \ 36 (8d8) poison damage, and the target is [restrained](/rules/conditions.md#restrained)\
    \ by webbing. While [restrained](/rules/conditions.md#restrained), the target\
    \ takes 9 (2d8) poison damage at the start of each of its turns and the target\
    \ may then make a DC 17 Strength check to free itself from the webbing. Unlike\
    \ normal webs, fire cannot burn a bebilith's webbing but if used will ignite the\
    \ web inflicting an additional 3 (1d6) fire damage to trapped targets."
  "name": "Poisoned Web (Recharge 5-6)"
"source":
- "MaBJoV"
"image": "[[Bebilith.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 133*

## Description

> [!quote]- A quote from Volo  
> 
> It is said that the drow can imprison a Bebilith in a metal shell. This new creation is called a Retriever and is used by the dark elves to track down and exterminate their enemies.

Bebiliths, or Creepers of the Abyss, are arachnoid demons that prey upon other demons... though whether they do so out of hunger, cruelty, or a strange compulsion to inflict justice on their chaotic evil kin is unknown. Other demons typically leave the bebilith alone and killing them is considered a great taboo. Further adding to the intrigue of their strange mystique, it is believed several greater demonic beings pay homage to the bebiliths.

**Barbed Horrors.** Massive, hulking hunters, bebiliths possess foreleg claws that can carve through the thickest armor like warm butter. They can cast webs imbued with searing green fire, and the venom from their bite causes victims to ignite with green flames that burn them alive from the inside out. While their spiderlike appearance suggests the demon queen Lolth created them, most Abyssal scholars have refuted that theory. Their origins are seemingly lost in time, though most suspect the bebilith are natural predators that roamed the Abyss long before other demons spread across it in their teeming hordes.

**Relentless Hunters.** Though they typically feed upon other demons, a bebilith will attack any creature it encounters without hesitation. During the initial strike, they mark their prey using a combination of pheromones and demonic magic. Once marked, a bebilith can track its victim across any distance—the only way to escape pursuit is by killing the bebilith or fleeing the Abyss. Fortunately, bebiliths cannot be summoned to the prime material plane. However, the drow discovered a way to draw their spirits into mechanical, spider-like constructs called retrievers, which they use to hunt or track their enemies.

> [!quote] Carcerus Prison
> 
> The demodands of the Carcerus prison in Ust Natha have tortured a small number of bebilith into doing their bidding. These bebilith can use their relentless hunter ability on anyone ever imprisoned in Carcerus.
^carcerus-prison