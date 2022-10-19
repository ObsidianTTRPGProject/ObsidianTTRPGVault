---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/elemental
- monster/environment/underwater
- monster/environment/coastal
aliases: ["Marid"]
statblock: true
"name": "Marid"
"size": "Large"
"type": "elemental"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"hp": !!int "229"
"hit_dice": "17d10 + 136"
"stats":
- !!int "22"
- !!int "12"
- !!int "26"
- !!int "18"
- !!int "17"
- !!int "18"
"speed": "walk 30 ft., fly 60 ft., swim 90 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
"damage_resistances": "acid, cold, lightning"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 13"
"languages": "Aquan"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The marid's innate spellcasting ability is Charisma (spell save DC 16,\
    \ +8 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [create or destroy water](/compendium/spells/create-or-destroy-water.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [detect\
    \ magic](/compendium/spells/detect-magic.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [purify food and drink](/compendium/spells/purify-food-and-drink.md)\n\n1/day\
    \ each: [conjure elemental](/compendium/spells/conjure-elemental.md) ([water\
    \ elemental](/compendium/bestiary/elemental/water-elemental.md) only), [control\
    \ water](/compendium/spells/control-water.md), [gaseous form](/compendium/spells/gaseous-form.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [plane shift](/compendium/spells/plane-shift.md)\n\
    \n3/day each: [tongues](/compendium/spells/tongues.md), [water breathing](/compendium/spells/water-breathing.md),\
    \ [water walk](/compendium/spells/water-walk.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The marid can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the marid dies, its body disintegrates into a burst of water and foam,\
    \ leaving behind only equipment the marid was wearing or carrying."
  "name": "Elemental Demise"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The marid makes two trident attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +10 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 13 (2d6 + 6) piercing damage, or 15 (2d8 + 6) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Trident"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The marid magically shoots water in a 60-foot line that is 5 feet wide.\
    \ Each creature in that line must make a DC 16 Dexterity saving throw. On a failure,\
    \ a target takes 21 (6d6) bludgeoning damage and, if it is Huge or smaller, is\
    \ pushed up to 20 feet away from the marid and knocked [prone](/rules/conditions.md#prone).\
    \ On a success, a target takes half the bludgeoning damage, but is neither pushed\
    \ nor knocked [prone](/rules/conditions.md#prone)."
  "name": "Water Jet"
"source":
- "MM"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "EGW"
- "TCE"
- "JttRC"
name: Marid
image: "[[Marid.png]]"
---

# Marid

```statblock
"name": "Marid"
"size": "Large"
"type": "elemental"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"hp": !!int "229"
"hit_dice": "17d10 + 136"
"stats":
- !!int "22"
- !!int "12"
- !!int "26"
- !!int "18"
- !!int "17"
- !!int "18"
"speed": "walk 30 ft., fly 60 ft., swim 90 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
"damage_resistances": "acid, cold, lightning"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 13"
"languages": "Aquan"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The marid's innate spellcasting ability is Charisma (spell save DC 16,\
    \ +8 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [create or destroy water](/compendium/spells/create-or-destroy-water.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [detect\
    \ magic](/compendium/spells/detect-magic.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [purify food and drink](/compendium/spells/purify-food-and-drink.md)\n\n1/day\
    \ each: [conjure elemental](/compendium/spells/conjure-elemental.md) ([water\
    \ elemental](/compendium/bestiary/elemental/water-elemental.md) only), [control\
    \ water](/compendium/spells/control-water.md), [gaseous form](/compendium/spells/gaseous-form.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [plane shift](/compendium/spells/plane-shift.md)\n\
    \n3/day each: [tongues](/compendium/spells/tongues.md), [water breathing](/compendium/spells/water-breathing.md),\
    \ [water walk](/compendium/spells/water-walk.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The marid can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the marid dies, its body disintegrates into a burst of water and foam,\
    \ leaving behind only equipment the marid was wearing or carrying."
  "name": "Elemental Demise"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The marid makes two trident attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +10 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 13 (2d6 + 6) piercing damage, or 15 (2d8 + 6) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Trident"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The marid magically shoots water in a 60-foot line that is 5 feet wide.\
    \ Each creature in that line must make a DC 16 Dexterity saving throw. On a failure,\
    \ a target takes 21 (6d6) bludgeoning damage and, if it is Huge or smaller, is\
    \ pushed up to 20 feet away from the marid and knocked [prone](/rules/conditions.md#prone).\
    \ On a success, a target takes half the bludgeoning damage, but is neither pushed\
    \ nor knocked [prone](/rules/conditions.md#prone)."
  "name": "Water Jet"
"source":
- "MM"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "EGW"
- "TCE"
- "JttRC"
"image": "[[Marid.png]]"
```
^statblock

*Source: Monster Manual p. 146, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything, Journeys through the Radiant Citadel*

## Description

Hailing from the Elemental Plane of Water, the marids are the most wondrous of genie-kind. Although all genies wield great power, even the lowliest marid sees itself as clearly superior to the flighty djinn, the ground-hugging dao, and the fuming efreet. Large and piscine, marids are a strange sight to behold, particularly when clad in the finely stitched vests and colorful pantaloons they favor. They speak in voices as soft as the sea breeze or as sonorous as storm waves breaking against a rocky cliff. In flight, their lower bodies transform into columns of foamy water.

**Water Lords.** Water is a marid's native element, and the genie can manipulate water in virtually any way it desires. A marid can walk on water and breathe naturally beneath its surface. It can create water or shape clouds of fog and mist from the vapor in the air. It can even transform itself into mist, or use water as a weapon to bludgeon its foes.

**Marid Homes.** Marids are rare on the Material Plane. They inhabit mighty and majestic coral fortresses located in the Elemental Plane of Water. These citadels float in the depths of the plane and contain opulent, air-filled chambers where slaves and guests reside.

A marid doesn't expect much from its slaves, simply wanting to have them for the status of ownership. Marids go out of their way to obtain skilled slaves, and aren't above kidnapping mortal artists, entertainers, or storytellers for use in their courts.

**Egotistical Hierarchs.** All marids claim a title of nobility, and the race is awash in shahs, sultans, muftis, and khedives. Most of these titles are mere pretense on the part of the self-important marids.

Marids treat all others-including other genies-as inferiors of various grades, ranging from poor cousins to petty annoyances. They tolerate djinn, dislike dao, and despise efreet.

Humanoids are among the lowest of the creatures that marids must tolerate, although they sometimes deal with powerful wizards and exceptional leaders on an almost-equal footing. Doing so has sometimes proven to be a mistake, since wizards have managed to imprison marids in conch shells, flasks, and decanters over the ages. Bribery and flattery are the best means of dealing with marids, to which an obsequious mortal is a creature that knows its place.

**Whimsical Storytellers.** Marids are champion tale-tellers, whose favorite legends emphasize the prowess of marids in general and of the speaker in particular. Fanciful genies, they lie often and creatively. They aren't always malicious in their deception, but embellishments suit their fancy. Marids consider it a crime for a lesser being to interrupt one of their tales, and offending a marid is a sure way to invoke its wrath.

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

underwater, coastal