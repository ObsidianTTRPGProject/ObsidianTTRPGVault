---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/elemental
- monster/environment/coastal
aliases: ["Djinni"]
statblock: true
"name": "Djinni"
"size": "Large"
"type": "elemental"
"alignment": "Chaotic Good"
"ac": !!int "17"
"hp": !!int "161"
"hit_dice": "14d10 + 84"
"stats":
- !!int "21"
- !!int "15"
- !!int "22"
- !!int "15"
- !!int "16"
- !!int "20"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
"damage_immunities": "lightning, thunder"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Auran"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The djinni's innate spellcasting ability is Charisma (spell save DC 17,\
    \ +9 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n1/day each: [conjure elemental](/compendium/spells/conjure-elemental.md)\
    \ ([air elemental](/compendium/bestiary/elemental/air-elemental.md) only), [creation](/compendium/spells/creation.md),\
    \ [gaseous form](/compendium/spells/gaseous-form.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [major image](/compendium/spells/major-image.md), [plane shift](/compendium/spells/plane-shift.md)\n\
    \n3/day each: [create food and water](/compendium/spells/create-food-and-water.md)\
    \ (can create wine instead of water), [tongues](/compendium/spells/tongues.md),\
    \ [wind walk](/compendium/spells/wind-walk.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the djinni dies, its body disintegrates into a warm breeze, leaving\
    \ behind only equipment the djinni was wearing or carrying."
  "name": "Elemental Demise"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The djinni makes three scimitar attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice)."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms\
    \ on a point the djinni can see within 120 feet of it. The whirlwind lasts as\
    \ long as the djinni maintains concentration (as if concentrating on a spell).\
    \ Any creature but the djinni that enters the whirlwind must succeed on a DC 18\
    \ Strength saving throw or be [restrained](/rules/conditions.md#restrained) by\
    \ it. The djinni can move the whirlwind up to 60 feet as an action, and creatures\
    \ [restrained](/rules/conditions.md#restrained) by the whirlwind move with it.\
    \ The whirlwind ends if the djinni loses sight of it.\n\nA creature can use its\
    \ action to free a creature [restrained](/rules/conditions.md#restrained) by the\
    \ whirlwind, including itself, by succeeding on a DC 18 Strength check. If the\
    \ check succeeds, the creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ and moves to the nearest space outside the whirlwind."
  "name": "Create Whirlwind"
"source":
- "MM"
- "PotA"
- "GoS"
- "TCE"
- "CM"
- "JttRC"
name: Djinni
image: "[[Djinni.png]]"
---

# Djinni

```statblock
"name": "Djinni"
"size": "Large"
"type": "elemental"
"alignment": "Chaotic Good"
"ac": !!int "17"
"hp": !!int "161"
"hit_dice": "14d10 + 84"
"stats":
- !!int "21"
- !!int "15"
- !!int "22"
- !!int "15"
- !!int "16"
- !!int "20"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
"damage_immunities": "lightning, thunder"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Auran"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The djinni's innate spellcasting ability is Charisma (spell save DC 17,\
    \ +9 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n1/day each: [conjure elemental](/compendium/spells/conjure-elemental.md)\
    \ ([air elemental](/compendium/bestiary/elemental/air-elemental.md) only), [creation](/compendium/spells/creation.md),\
    \ [gaseous form](/compendium/spells/gaseous-form.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [major image](/compendium/spells/major-image.md), [plane shift](/compendium/spells/plane-shift.md)\n\
    \n3/day each: [create food and water](/compendium/spells/create-food-and-water.md)\
    \ (can create wine instead of water), [tongues](/compendium/spells/tongues.md),\
    \ [wind walk](/compendium/spells/wind-walk.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the djinni dies, its body disintegrates into a warm breeze, leaving\
    \ behind only equipment the djinni was wearing or carrying."
  "name": "Elemental Demise"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The djinni makes three scimitar attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice)."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms\
    \ on a point the djinni can see within 120 feet of it. The whirlwind lasts as\
    \ long as the djinni maintains concentration (as if concentrating on a spell).\
    \ Any creature but the djinni that enters the whirlwind must succeed on a DC 18\
    \ Strength saving throw or be [restrained](/rules/conditions.md#restrained) by\
    \ it. The djinni can move the whirlwind up to 60 feet as an action, and creatures\
    \ [restrained](/rules/conditions.md#restrained) by the whirlwind move with it.\
    \ The whirlwind ends if the djinni loses sight of it.\n\nA creature can use its\
    \ action to free a creature [restrained](/rules/conditions.md#restrained) by the\
    \ whirlwind, including itself, by succeeding on a DC 18 Strength check. If the\
    \ check succeeds, the creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ and moves to the nearest space outside the whirlwind."
  "name": "Create Whirlwind"
"source":
- "MM"
- "PotA"
- "GoS"
- "TCE"
- "CM"
- "JttRC"
"image": "[[Djinni.png]]"
```
^statblock

*Source: Monster Manual p. 144, Princes of the Apocalypse, Ghosts of Saltmarsh, Tasha's Cauldron of Everything, Candlekeep Mysteries, Journeys through the Radiant Citadel*

## Description

Proud, sensuous genies from the Elemental Plane of Air, the djinn are attractive, tall, well-muscled humanoids with blue skin and dark eyes. They dress in airy, shimmering silks, designed as much for comfort as to flaunt their musculature.

**Airy Aesthetes.** Djinn rule floating islands of cloud stuff covered with enormous pavilions, or topped with wondrous buildings, courtyards, fountains, and gardens. Creatures of comfort and ease, djinn enjoy succulent fruits, pungent wines, fine perfumes, and beautiful music.

Djinn are known for their sense of mischief and their favorable attitude toward mortals. Among genies, djinn deal coolly with efreet and marids, whom they view as haughty. They openly despise dao and strike against them with little provocation.

**Masters of the Wind.** Masters of the air, the djinn ride powerful whirlwinds that they create and direct on a whim, and which can even carry passengers. Creatures that stand against a djinni are assaulted by wind and thunder, even as the djinni spins away on that wind if outmatched in combat. When a djinni flies, its lower body transforms into a column of swirling air.

**Accepting Servitors.** The djinn believe that servitude is a matter of fate, and that no being can contest the hand of fate. As a result, of all the genies, djinn are the ones most amenable to servitude, though they never enjoy it. Djinn treat their slaves more like servants deserving of kindness and protection, and they part with them reluctantly.

A mortal who desires the brief service of a djinni can entreat it with fine gifts, or use flattery to bribe it into compliance. Powerful wizards are able to forgo such niceties, however, if they can summon, bind into service, or imprison a djinni using magic. Long-term service displeases a djinni, and imprisonment is inexcusable. Djinn resent the cruel wizards that have imprisoned their kind in bottles, iron flasks, and wind instruments throughout the ages. Betrayal, particularly by a mortal whom a djinni trusted, is a vile deed that only deadly vengeance can amend.

**Genies.** Genies are rare elemental creatures out of story and legend. Only a few can be found on the Material Plane. The rest reside on the Elemental Planes, where they rule from lavish palaces and are attended by worshipful slaves.

Genies are as brilliant as they are mighty, as proud as they are majestic. Haughty and decadent, they have a profound sense of entitlement that stems from the knowledge that few creatures except the gods and other genies can challenge their power.

**Creatures of the Elements.**  A genie is born when the soul of a sentient living creature melds with the primordial matter of an elemental plane. Only under rare circumstances does such an elemental-infused soul coalesce into a manifest form and create a genie.

A genie usually retains no connection to the soul that gave it form. That life force is a building block that determines the genie's form and apparent gender, as well as one or two key personality traits. Although they resemble humanoid beings, genies are elemental spirits given physical form. They don't mate with other genies or produce genie offspring, as all new genies are born out of the same mysterious fusion of spirit energy and elemental power. A genie with a stronger connection to its mortal soul might choose to sire a child with a mortal, although such offspring are rare.

When a genie perishes, it leaves nothing behind except what it was wearing or carrying, along with a small trace of its native element: a pile of dust, a gust of wind, a flash of fire and smoke, or a burst of water and foam.

In contrast to their love of slaves, most genies loathe being bound to service themselves. A genie obeys the will of another only when bribed or compelled by magic. All genies command the power of their native element, but a rare few also possess the power to grant wishes. For both these reasons, mortal mages often seek to bind genies into service.

Noble genies cultivate the jealousy and envy of other genies, asserting their superiority at every opportunity. Other genies respect the influence of the noble genies, knowing how unwise it is to defy a creature that can alter reality at a whim. A genie isn't beholden to any noble genie, however, and will sometimes choose to defy a noble genie's will and risk the consequences.

Their miraculous powers, the grandeur of their abodes, and the numbers of their slaves allow some genies to deceive themselves into believing they are as powerful as the gods. Some go so far as to demand that mortals of other realms-even whole continents or worlds-bow down before them.

**Rule or Be Ruled.**  Mortal slaves serve to validate a genie's power and high self-opinion. A hundred flattering voices are music to a genie's ears, while two hundred mortal slaves prostrated at its feet are proof that it is lord and master. Genies view slaves as living property, and a genie without property amounts to nothing among its own kind. As a result, many genies treasure their slaves, treating them as honored members of their households. Evil genies freely threaten and abuse their slaves, but never to the extent that the slaves are no longer of use.

**Decadent Nobility.**  Noble genies are the rarest of their kind. They are used to getting what they want, and have learned to trade their ability to grant wishes to attain the objects of their desire. This constant indulgence has made them decadent, while their supreme power over reality makes them haughty and arrogant. Their vast palaces overflow with wonders and sensory delights beyond imagination.

**The Power of Worship.**  Genies acknowledge the gods as powerful entities but have no desire to court or worship them. They find the endless fawning and mewling of religious devotees tiresome-except as it is directed toward them by their worshipful slaves.

## Environment

coastal