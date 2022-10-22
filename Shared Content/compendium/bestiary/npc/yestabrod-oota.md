---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/large
- monster/type/monstrosity
aliases: ["Yestabrod"]
statblock: true
"name": "Yestabrod"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "15"
- !!int "10"
"speed": "walk 30 ft."
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Abyssal, telepathy 60 ft."
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Yestabrod fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (3d4\
    \ + 1) bludgeoning damage plus 7 (3d4) poison damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yestabrod releases spores in a 30-foot cone. Each creature in that area\
    \ must succeed on a DC 12 Dexterity saving throw or take 1d6 acid damage at the\
    \ start of each of Yestabrod's turns. A creature can repeat the saving throw at\
    \ the end of each of its turn, ending the effect on itself on a success."
  "name": "Caustic Spores (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yestabrod releases spores that burst out in a cloud that fills a 10-foot-radius\
    \ sphere centered on it, and the cloud lingers for 1 minute. Any flesh-and-blood\
    \ creature in the cloud when it appears, or that enters it later, must make a\
    \ DC 12 Constitution saving throw. On a successful save, the creature can't be\
    \ infected by these spores for 24 hours. On a failed save, the creature is infected\
    \ with a disease called the spores of Zuggtmoy and also gains a random form of\
    \ indefinite madness (determined by rolling on the Madness of Zuggtmoy table in\
    \ appendix D) that lasts until the creature is cured of the disease or dies. While\
    \ infected in this way, the creature can't be reinfected, and it must be repeat\
    \ the saving throw at the end of every 24 hours, ending the infection on a success.\
    \ On a failure, the infected creature's body is slowly taken over by fungal growth,\
    \ and after three such failed saves, the creature dies and is reanimated as a\
    \ spore servant if it's a type of creature that can be (see the \"Myconids\" entry\
    \ in the Monster Manual)."
  "name": "Infestation Spores (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gore, offal, and acid erupt from a corpse within 20 feet of Yestabrod.\
    \ Creatures within 10 feet of the corpse must succeed on a DC 12 Dexterity saving\
    \ throw or take 7 (2d6) acid damage."
  "name": "Corpse Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yestabrod absorbs putrescence from a corpse within 5 feet of it, regaining\
    \ 1d8 + 2 hit points"
  "name": "Foul Absorption"
"source":
- "OotA"
name: Yestabrod
image: "[[Yestabrod.png]]"
---

# Yestabrod

```statblock
"name": "Yestabrod"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "15"
- !!int "10"
"speed": "walk 30 ft."
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Abyssal, telepathy 60 ft."
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Yestabrod fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (3d4\
    \ + 1) bludgeoning damage plus 7 (3d4) poison damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yestabrod releases spores in a 30-foot cone. Each creature in that area\
    \ must succeed on a DC 12 Dexterity saving throw or take 1d6 acid damage at the\
    \ start of each of Yestabrod's turns. A creature can repeat the saving throw at\
    \ the end of each of its turn, ending the effect on itself on a success."
  "name": "Caustic Spores (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yestabrod releases spores that burst out in a cloud that fills a 10-foot-radius\
    \ sphere centered on it, and the cloud lingers for 1 minute. Any flesh-and-blood\
    \ creature in the cloud when it appears, or that enters it later, must make a\
    \ DC 12 Constitution saving throw. On a successful save, the creature can't be\
    \ infected by these spores for 24 hours. On a failed save, the creature is infected\
    \ with a disease called the spores of Zuggtmoy and also gains a random form of\
    \ indefinite madness (determined by rolling on the Madness of Zuggtmoy table in\
    \ appendix D) that lasts until the creature is cured of the disease or dies. While\
    \ infected in this way, the creature can't be reinfected, and it must be repeat\
    \ the saving throw at the end of every 24 hours, ending the infection on a success.\
    \ On a failure, the infected creature's body is slowly taken over by fungal growth,\
    \ and after three such failed saves, the creature dies and is reanimated as a\
    \ spore servant if it's a type of creature that can be (see the \"Myconids\" entry\
    \ in the Monster Manual)."
  "name": "Infestation Spores (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gore, offal, and acid erupt from a corpse within 20 feet of Yestabrod.\
    \ Creatures within 10 feet of the corpse must succeed on a DC 12 Dexterity saving\
    \ throw or take 7 (2d6) acid damage."
  "name": "Corpse Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yestabrod absorbs putrescence from a corpse within 5 feet of it, regaining\
    \ 1d8 + 2 hit points"
  "name": "Foul Absorption"
"source":
- "OotA"
"image": "[[Yestabrod.png]]"
```
^statblock

*Source: Out of the Abyss p. 233*