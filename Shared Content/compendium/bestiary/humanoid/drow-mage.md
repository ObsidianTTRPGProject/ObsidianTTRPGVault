---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Drow Mage"]
statblock: true
"name": "Drow Mage"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "10"
- !!int "17"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Arcana": !!int "6"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow's spellcasting ability is Charisma (spell save DC 12). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each:\
    \ [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). The drow has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [poison spray](/compendium/spells/poison-spray.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md), [witch bolt](/compendium/spells/witch-bolt.md)\n\
    \n2nd level (3 2nd-level slots): [alter self](/compendium/spells/alter-self.md),\
    \ [misty step](/compendium/spells/misty-step.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [fly](/compendium/spells/fly.md), [lightning\
    \ bolt](/compendium/spells/lightning-bolt.md)\n\n4th level (3 4th-level slots):\
    \ [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md), [greater\
    \ invisibility](/compendium/spells/greater-invisibility.md)\n\n5th level (2\
    \ 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
    \ hands, plus 3 (1d6) poison damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow magically summons a [quasit](/compendium/bestiary/fiend/quasit.md),\
    \ or attempts to summon a [shadow demon](/compendium/bestiary/fiend/shadow-demon.md)\
    \ with a 50|50 percent|50% summoning chance% chance chance of success. The summoned\
    \ demon appears in an unoccupied space within 60 feet of its summoner, acts as\
    \ an ally of its summoner, and can't summon other demons. It remains for 10 minutes,\
    \ until it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "DC"
- "DIP"
- "IDRotF"
- "CM"
- "WBtW"
name: Drow Mage
image: "[[Drow Mage.png]]"
---

# Drow Mage

```statblock
"name": "Drow Mage"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "10"
- !!int "17"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Arcana": !!int "6"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow's spellcasting ability is Charisma (spell save DC 12). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each:\
    \ [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). The drow has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [poison spray](/compendium/spells/poison-spray.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md), [witch bolt](/compendium/spells/witch-bolt.md)\n\
    \n2nd level (3 2nd-level slots): [alter self](/compendium/spells/alter-self.md),\
    \ [misty step](/compendium/spells/misty-step.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [fly](/compendium/spells/fly.md), [lightning\
    \ bolt](/compendium/spells/lightning-bolt.md)\n\n4th level (3 4th-level slots):\
    \ [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md), [greater\
    \ invisibility](/compendium/spells/greater-invisibility.md)\n\n5th level (2\
    \ 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
    \ hands, plus 3 (1d6) poison damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow magically summons a [quasit](/compendium/bestiary/fiend/quasit.md),\
    \ or attempts to summon a [shadow demon](/compendium/bestiary/fiend/shadow-demon.md)\
    \ with a 50|50 percent|50% summoning chance% chance chance of success. The summoned\
    \ demon appears in an unoccupied space within 60 feet of its summoner, acts as\
    \ an ally of its summoner, and can't summon other demons. It remains for 10 minutes,\
    \ until it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "DC"
- "DIP"
- "IDRotF"
- "CM"
- "WBtW"
"image": "[[Drow Mage.png]]"
```
^statblock

*Source: Monster Manual p. 129, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Divine Contention, Dragon of Icespire Peak, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, The Wild Beyond the Witchlight*

## Description

**Drow.** Tens of thousands of years ago, the elves were divided, with those of benevolent disposition battling those that were selfish and cruel. The war among elvenkind ended when the good elves banished their malevolent kin to the subterranean depths. Here, in the lightless caverns and endless warrens of twisting passages, the dark elves-the drow-found refuge. They also found leadership in the only elven deity who had not forsaken them. At her command, the dark elves built an empire in the underworld.

**Children of Lolth.** The drow worship Lolth, a deity who resides in the Abyss. Known as the Spider Queen or the Demon Queen of Spiders, she is the figure around which the dark elves have built their subterranean civilization. Whatever she demands, the drow do. The wickedest of elves, drow are seldom seen by the surface world. Though they plot to destroy the elves that banished them, they no longer see themselves as exiles. They are the destined rulers of the darkness, and when Lolth commands them to rise up and destroy their surface-dwelling kin, they will.

**Creatures of Darkness.** The drow have lived underground for so long that they have evolved to their surroundings and can see in the dark. However, they can no longer stand sunlight. When slaves are in short supply in the Underdark, the drow send raiding parties to the surface to capture humanoids under cover of darkness, bringing them back to their cities to be tortured into submission. Beyond those occasional excursions, the drow are content to remain in their subterranean realm, where they feel secure and in control.

**Underdark Cities.** The dark elves build fantastic cities in enormous caverns where food and water are abundant. Their ability to sculpt stone rivals that of the greatest dwarf artisans, yet their structures retain a decidedly elven aesthetic. Though appearing delicate, drow settlements are structurally sound and remarkably resilient. The drow like to hollow out enormous stalagmites and stalactites, creating populated spires that rise from the floors and ceilings. A drow city is a sprawling metropolis enclosed by high walls. Non-drow visitors must conduct their business outside the walls under watchful eyes. The drow raise and keep giant spiders to help protect their cities against intruders, even as they drape those cities in beautiful webbing, creating a gossamer snare to catch flying enemies that would otherwise soar over the walls.

**Drow Magic.** Just as the drow have adapted to underground life, so too has their magic. In addition to using that magic to carve their cities from stone, they empower their weapons, create dangerous new magic items, and summon demons from the Abyss. Drow spellcasters are supremely arrogant and never hesitate to use their magic in the most abhorrent ways.

**Arms and Armor.** Drow craft weapons made of adamantine, a dark and supernaturally hard metal. Drow artisans adorn their weapons and armor with web-like filigree and spider motifs, and mages sometimes imbue items with magic to enhance their effectiveness. However, such magic fades when exposed to sunlight, so that magical drow weapons and armor rarely retain their enhancement bonuses and magical properties when brought to the surface.

**Cutthroat Politics.** Drow politics are cutthroat and rife with intrigue. When drow work together, it is typically to destroy a common foe and ensure their own survival, and such alliances are short lived and fraught with peril.

Drow society is divided into noble houses, each ruled by a matron who seeks to raise the prestige and power of her house above all others. Other high-ranking members of the house are blood relatives, while the middling ranks are flush with drow from weaker families that have sworn fealty to the greater house. Clinging precariously to the bottom rung of a house's social ladder are the house slaves, made up of drow of low birth and the occasional non-drow captive.

**Matriarchal Rule.** Lolth, through her faithful priestesses, dictates the rules of drow society, ensuring that her orders and plots are carried out. Since Lolth is prone to manifesting on the Material Plane and directly punishing those that disobey her, the drow have learned to heed what she says and do as her priestesses command.

In drow society, males are subservient to females. A male drow might lead an Underdark patrol or a raiding party to the surface, but he reports to a female drow-either the matron of his house or one of her hand-picked female subordinates. Although male drow can fill almost any function in drow society, they can't be priests, nor can they rule a house.

**Poison Predilection.** Distilled from spider venom and the flora of the Underdark, poison can be found in abundance among the drow, and it plays an important part in their culture and politics. Drow mages concoct a viscid toxin that leaves enemies [unconscious](/rules/conditions.md#unconscious). Drow warriors coat their blades and crossbow bolts with this venom, looking forward to the interrogation and torture that follows combat.

> [!quote] Variant: Drow Magic Armor and Weapons
> 
> Drow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.
> 
> - A drow wearing a +1 chain shirt and carrying a +1 shortsword has AC 16 and a +1 bonus on attack and damage rolls with shortsword attacks.
> - A drow elite warrior wearing +2 studded leather and carrying a +2 shortsword has AC 20 and a +2 bonus on attack and damage rolls with shortsword attacks.
> - A drow priestess of Lolth wearing +3 scale mail has AC 19.
^variant-drow-magic-armor-and-weapons

## Environment

underdark