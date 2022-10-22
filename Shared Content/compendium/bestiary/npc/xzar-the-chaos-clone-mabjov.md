---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Xzar the Chaos Clone"]
statblock: true
"name": "Xzar the Chaos Clone"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"stats":
- !!int "12"
- !!int "16"
- !!int "12"
- !!int "20"
- !!int "10"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "9"
"skillsaves":
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Common, Infernal, Primordial, Undercommon, telepathy 60 ft."
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xzar is an 16th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 17, +12 to hit with spell attacks). Xzar has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [poison spray](/compendium/spells/poison-spray.md)\n\n1st level (4 1st-level\
    \ slots): [false life](/compendium/spells/false-life.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\n2nd level (3\
    \ 2nd-level slots): [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md),\
    \ [mirror image](/compendium/spells/mirror-image.md), [misty step](/compendium/spells/misty-step.md)\n\
    \n3rd level (3 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [vampiric touch](/compendium/spells/vampiric-touch.md)\n\n4th level (3 4th-level\
    \ slots): [blight](/compendium/spells/blight.md), [evard's black tentacles](/compendium/spells/evards-black-tentacles.md)\n\
    \n5th level (3 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md),\
    \ [conjure elemental](/compendium/spells/conjure-elemental.md), [scrying](/compendium/spells/scrying.md)\n\
    \n6th level (1 6th-level slots): [circle of death](/compendium/spells/circle-of-death.md),\
    \ [create undead](/compendium/spells/create-undead.md)\n\n7th level (1 7th-level\
    \ slots): [finger of death](/compendium/spells/finger-of-death.md), [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [Abi-Dalzim's Horrid Wilting](/compendium/spells/abi-dalzims-horrid-wilting-xge.md),\
    \ [clone](/compendium/spells/clone.md)\nNecromancy spell of 1st level or higher"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Since Xzar doesn't have a soul, resurrection magic is able to work upon\
    \ him no matter how much time has passed. For example, a revivify would work on\
    \ Xzar a week after he died. The only drawback is that True Resurrection and Wish\
    \ are unable to bring Xzar back to life if no body exists."
  "name": "No Soul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Xzar kills a creature that is neither a construct nor undead with\
    \ a spell of 1st level or higher, Xzar regains hit points equal to twice the spell's\
    \ level, or three times if it is a necromancy spell."
  "name": "Grim Harvest (1/Turn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xzar's infusion with the Chaos Phage gives him the following benefits:\n\
    \n- Xzar regains 10 hit points at the start of his turn if he has at least 1 hit\
    \ point\n- Xzar has advantage on saving throws against spells and other magical\
    \ effects\n- Xzar has resistance to acid, cold, fire, lightning, thunder\n- Xzar\
    \ has darkvision and telepathy to 60 ft."
  "name": "Chaos Phage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Staff"
"source":
- "MaBJoV"
name: Xzar the Chaos Clone
image: "[[Xzar the Chaos Clone.png]]"
---

# Xzar the Chaos Clone

```statblock
"name": "Xzar the Chaos Clone"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"stats":
- !!int "12"
- !!int "16"
- !!int "12"
- !!int "20"
- !!int "10"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "9"
"skillsaves":
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Common, Infernal, Primordial, Undercommon, telepathy 60 ft."
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xzar is an 16th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 17, +12 to hit with spell attacks). Xzar has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [poison spray](/compendium/spells/poison-spray.md)\n\n1st level (4 1st-level\
    \ slots): [false life](/compendium/spells/false-life.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\n2nd level (3\
    \ 2nd-level slots): [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md),\
    \ [mirror image](/compendium/spells/mirror-image.md), [misty step](/compendium/spells/misty-step.md)\n\
    \n3rd level (3 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [vampiric touch](/compendium/spells/vampiric-touch.md)\n\n4th level (3 4th-level\
    \ slots): [blight](/compendium/spells/blight.md), [evard's black tentacles](/compendium/spells/evards-black-tentacles.md)\n\
    \n5th level (3 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md),\
    \ [conjure elemental](/compendium/spells/conjure-elemental.md), [scrying](/compendium/spells/scrying.md)\n\
    \n6th level (1 6th-level slots): [circle of death](/compendium/spells/circle-of-death.md),\
    \ [create undead](/compendium/spells/create-undead.md)\n\n7th level (1 7th-level\
    \ slots): [finger of death](/compendium/spells/finger-of-death.md), [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [Abi-Dalzim's Horrid Wilting](/compendium/spells/abi-dalzims-horrid-wilting-xge.md),\
    \ [clone](/compendium/spells/clone.md)\nNecromancy spell of 1st level or higher"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Since Xzar doesn't have a soul, resurrection magic is able to work upon\
    \ him no matter how much time has passed. For example, a revivify would work on\
    \ Xzar a week after he died. The only drawback is that True Resurrection and Wish\
    \ are unable to bring Xzar back to life if no body exists."
  "name": "No Soul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Xzar kills a creature that is neither a construct nor undead with\
    \ a spell of 1st level or higher, Xzar regains hit points equal to twice the spell's\
    \ level, or three times if it is a necromancy spell."
  "name": "Grim Harvest (1/Turn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xzar's infusion with the Chaos Phage gives him the following benefits:\n\
    \n- Xzar regains 10 hit points at the start of his turn if he has at least 1 hit\
    \ point\n- Xzar has advantage on saving throws against spells and other magical\
    \ effects\n- Xzar has resistance to acid, cold, fire, lightning, thunder\n- Xzar\
    \ has darkvision and telepathy to 60 ft."
  "name": "Chaos Phage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Staff"
"source":
- "MaBJoV"
"image": "[[Xzar the Chaos Clone.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 128*

## Description

> [!quote]- A quote from Volo  
> 
> I have long wondered what a creature without a soul would be like. It is unfortunate that the first example is also insane.

Xzar was a talented necromancer known for his erratic and bizarre behavior. He worked with the Zhentarim for a number of years with a halfling partner named Montaron or "Monty," as Xzar called him. The two of them got involved in the Bhaalspawn incident more than a century ago and their partnership dissolved soon after.

Xzar decided to attempt a magical ritual that would turn him into a lich. While successful at achieving this goal, once he embraced undeath he quickly descended into insanity. Xzar lost track of his phylactery and thus didn't feed it the souls required to fuel his undead state. Several decades later his body had crumbled to dust and Xzar had devolved into a demilich.

Before becoming a lich, Xzar had created a clone as a contingency against death. A clone usually remains inert until a soul reanimates the body. But the Slaad Lord Ssendam was able to animate the clone body by using the power of the Chaos Phage. The animated clone has the base personality of Xzar, along with his magical skills with necromancy.

This reanimated Xzar is missing a soul and because of this he does not feel whole. This has made him even more erratic than the original Xzar. Xzar is desperate to create a new soul for himself and everything he does is in pursuit of that goal. He does revere his Slaad creator, but mostly because Ssendam has promised to aid him in his quest to create a soul.

Xzar is pragmatic and manipulative enough to appear amicable while sizing up potential allies (or victims). Many of Xzar's casual observations come out as gibberish, though they can often have cryptic meanings.