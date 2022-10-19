---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/fey
- monster/environment/underwater
- monster/environment/coastal
aliases: ["Sea Hag"]
statblock: true
"name": "Sea Hag"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "16"
- !!int "13"
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "13"
"speed": "walk 30 ft., swim 40 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Aquan, Common, Giant"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any humanoid that starts its turn within 30 feet of the hag and can see\
    \ the hag's true form must make a DC 11 Wisdom saving throw. On a failed save,\
    \ the creature is [frightened](/rules/conditions.md#frightened) for 1 minute.\
    \ A creature can repeat the saving throw at the end of each of its turns, with\
    \ disadvantage if the hag is within line of sight, ending the effect on itself\
    \ on a success. If a creature's saving throw is successful or the effect ends\
    \ for it, the creature is immune to the hag's Horrific Appearance for the next\
    \ 24 hours.\n\nUnless the target is surprised or the revelation of the hag's true\
    \ form is sudden, the target can avert its eyes and avoid making the initial saving\
    \ throw. Until the start of its next turn, a creature that averts its eyes has\
    \ disadvantage on attack rolls against the hag."
  "name": "Horrific Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag targets one [frightened](/rules/conditions.md#frightened) creature\
    \ she can see within 30 feet of her. If the target can see the hag, it must succeed\
    \ on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points."
  "name": "Death Glare"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag covers herself and anything she is wearing or carrying with a magical\
    \ illusion that makes her look like an ugly creature of her general size and humanoid\
    \ shape. The effect ends if the hag takes a bonus action to end it or if she dies.\n\
    \nThe changes wrought by this effect fail to hold up to physical inspection. For\
    \ example, the hag could appear to have no claws, but someone touching her hand\
    \ might feel the claws. Otherwise, a creature must take an action to visually\
    \ inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check\
    \ to discern that the hag is disguised."
  "name": "Illusory Appearance"
"source":
- "MM"
- "PotA"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "MOT"
- "IDRotF"
- "JttRC"
name: Sea Hag
image: "[[Sea Hag.png]]"
---

# Sea Hag

```statblock
"name": "Sea Hag"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "16"
- !!int "13"
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "13"
"speed": "walk 30 ft., swim 40 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Aquan, Common, Giant"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any humanoid that starts its turn within 30 feet of the hag and can see\
    \ the hag's true form must make a DC 11 Wisdom saving throw. On a failed save,\
    \ the creature is [frightened](/rules/conditions.md#frightened) for 1 minute.\
    \ A creature can repeat the saving throw at the end of each of its turns, with\
    \ disadvantage if the hag is within line of sight, ending the effect on itself\
    \ on a success. If a creature's saving throw is successful or the effect ends\
    \ for it, the creature is immune to the hag's Horrific Appearance for the next\
    \ 24 hours.\n\nUnless the target is surprised or the revelation of the hag's true\
    \ form is sudden, the target can avert its eyes and avoid making the initial saving\
    \ throw. Until the start of its next turn, a creature that averts its eyes has\
    \ disadvantage on attack rolls against the hag."
  "name": "Horrific Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag targets one [frightened](/rules/conditions.md#frightened) creature\
    \ she can see within 30 feet of her. If the target can see the hag, it must succeed\
    \ on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points."
  "name": "Death Glare"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag covers herself and anything she is wearing or carrying with a magical\
    \ illusion that makes her look like an ugly creature of her general size and humanoid\
    \ shape. The effect ends if the hag takes a bonus action to end it or if she dies.\n\
    \nThe changes wrought by this effect fail to hold up to physical inspection. For\
    \ example, the hag could appear to have no claws, but someone touching her hand\
    \ might feel the claws. Otherwise, a creature must take an action to visually\
    \ inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check\
    \ to discern that the hag is disguised."
  "name": "Illusory Appearance"
"source":
- "MM"
- "PotA"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "MOT"
- "IDRotF"
- "JttRC"
"image": "[[Sea Hag.png]]"
```
^statblock

*Source: Monster Manual p. 179, Princes of the Apocalypse, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Journeys through the Radiant Citadel*

## Description

Sea hags live in dismal and polluted underwater lairs, surrounded by merrow and other aquatic monsters.

Beauty drives a sea hag to fits of anger. When confronted with something beautiful, the hag might simply attack it or deface it. If something beautiful gives hope, a sea hag wants it to cause despair. If it inspires courage, the sea hag wants it to cause fear.

**Ugly Inside and Out.** Sea hags are by far the ugliest of all hags, with slimy scales covering their pallid skin. A sea hag's hair resembles seaweed and covers her emaciated body, and her glassy eyes seem as lifeless as a doll's. Although a sea hag can hide her true form under a veil of illusion, the hag is cursed to forever appear ugly. Her illusory form appears haggard at best.

**Covens.** A sea hag that is part of a coven (see the "Hag Covens" sidebar) has a challenge rating of 4 (1,100 XP).

**Hags.** Hags represent all that is evil and cruel. Though they resemble withered crones, there is nothing mortal about these monstrous creatures, whose forms reflect only the wickedness in their hearts.

**Faces of Evil.** Ancient beings with origins in the Feywild, hags are cankers on the mortal world. Their withered faces are framed by long, frayed hair, horrid moles and warts dot their blotchy skin, and their long, skinny fingers are tipped by claws that can slice open flesh with a touch. Their simple clothes are always tattered and filthy.

All hags possess magical powers, and some have an affinity for spellcasting. They can alter their forms or curse their foes, and their arrogance inspires them to view their magic as a challenge to the magic of the gods, whom they blaspheme at every opportunity.

Hags name themselves in darkly whimsical ways, claiming monikers such as Black Morwen, Peggy Pigknuckle, Grandmother Titchwillow, Nanna Shug, Rotten Ethel, or Auntie Wormtooth.

**Monstrous Motherhood.** Hags propagate by snatching and devouring human infants. After stealing a baby from its cradle or its mother's womb, the hag consumes the poor child. A week later, the hag gives birth to a daughter who looks human until her thirteenth birthday, whereupon the child transforms into the spitting image of her hag mother.

Hags sometimes raise the daughters they spawn, creating covens. A hag might also return the child to its grieving parents, only to watch from the shadows as the child grows up to become a horror.

**Dark Bargains.** Arrogant to a fault, hags believe themselves to be the most cunning of creatures, and they treat all others as inferior. Even so, a hag is open to dealing with mortals as long as those mortals show the proper respect and deference. Over their long lives, hags accumulate much knowledge of local lore, dark creatures, and magic, which they are pleased to sell.

Hags enjoy watching mortals bring about their own downfall, and a bargain with a hag is always dangerous. The terms of such bargains typically involve demands to compromise principles or give up something dear-especially if the thing lost diminishes or negates the knowledge gained through the bargain.

**A Foul Nature.** Hags love the macabre and festoon their garb with dead things and accentuate their appearance with bones, bits of flesh, and filth. They nurture blemishes and pick at wounds to produce weeping, suppurating flesh. Attractive creatures evoke disgust in a hag, which might "help" such creatures by disfiguring or transforming them.

This embrace of the disturbing and unpleasant extends to all aspects of a hag's life. A hag might fly in a magical giant's skull, landing it on a tree shaped to resemble an enormous headless body. Another might travel with a menagerie of monsters and slaves kept in cages, and disguised by illusions to lure unwary creatures close. Hags sharpen their teeth on millstones and spin cloth from the intestines of their victims, reacting with glee to the horror their actions invoke.

**Dark Sorority.** Hags maintain contact with each other and share knowledge. Through such contacts, it is likely that any given hag knows of every other hag in existence. Hags don't like each other, but they abide by an ageless code of conduct. Hags announce their presence before crossing into another hag's territory, bring gifts when entering another hag's dwelling, and break no oaths given to other hags-as long as the oath isn't given with the fingers crossed.

Some humanoids make the mistake of thinking that the hags' rules of conduct apply to all creatures. When confronted by such an individual, a hag might find it amusing to string the fool along for a while before teaching it a permanent lesson.

**Dark Lairs.** Hags dwell in dark and twisted woods, bleak moors, storm-lashed seacoasts, and gloomy swamps. In time, the landscape around a hag's lair reflects the creature's noxiousness, such that the land itself can attack and kill trespassers. Trees twisted by darkness attack passersby, while vines snake through the undergrowth to snare and drag off creatures one at a time. Foul stinking fogs turn the air to poison, and conceal pools of quicksand and sinkholes that consume unwary wanderers.

> [!quote] Hag Covens
> 
> When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.
> 
> A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.
> 
> **Shared Spellcasting.** While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:
> 
> - 1st level (4 slots): [identify](/compendium/spells/identify.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)
> - 2nd level (3 slots): [hold person](/compendium/spells/hold-person.md), [locate object](/compendium/spells/locate-object.md)
> - 3rd level (3 slots): [bestow curse](/compendium/spells/bestow-curse.md), [counterspell](/compendium/spells/counterspell.md), [lightning bolt](/compendium/spells/lightning-bolt.md)
> - 4th level (3 slots): [phantasmal killer](/compendium/spells/phantasmal-killer.md), [polymorph](/compendium/spells/polymorph.md)
> - 5th level (2 slots): [contact other plane](/compendium/spells/contact-other-plane.md), [scrying](/compendium/spells/scrying.md)
> - 6th level (1 slot): [eyebite](/compendium/spells/eyebite.md)
> 
> For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12 + the hag's Intelligence modifier, and the spell attack bonus is 4 + the hag's Intelligence modifier.
> 
> **Hag Eye.** A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and [darkvision](/rules/senses.md#darkvision) with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is [blinded](/rules/conditions.md#blinded) for 24 hours.
> 
> A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while [blinded](/rules/conditions.md#blinded). During the ritual, if the hags take any action other than performing the ritual, they must start over.
^hag-covens

## Environment

underwater, coastal