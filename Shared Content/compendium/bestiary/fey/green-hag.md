---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/fey
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
aliases: ["Green Hag"]
statblock: true
"name": "Green Hag"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "3"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Draconic, Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 12). She\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/compendium/spells/dancing-lights.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [vicious mockery](/compendium/spells/vicious-mockery.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag can mimic animal sounds and humanoid voices. A creature that hears\
    \ the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight)\
    \ check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag covers herself and anything she is wearing or carrying with a magical\
    \ illusion that makes her look like another creature of her general size and humanoid\
    \ shape. The illusion ends if the hag takes a bonus action to end it or if she\
    \ dies.\n\nThe changes wrought by this effect fail to hold up to physical inspection.\
    \ For example, the hag could appear to have smooth skin, but someone touching\
    \ her would feel her rough flesh. Otherwise, a creature must take an action to\
    \ visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation)\
    \ check to discern that the hag is disguised."
  "name": "Illusory Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag magically turns [invisible](/rules/conditions.md#invisible) until\
    \ she attacks or casts a spell, or until her concentration ends (as if concentrating\
    \ on a spell). While [invisible](/rules/conditions.md#invisible), she leaves no\
    \ physical evidence of her passage, so she can be tracked only by magic. Any equipment\
    \ she wears or carries is [invisible](/rules/conditions.md#invisible) with her."
  "name": "Invisible Passage"
"source":
- "MM"
- "ToA"
- "GoS"
- "IMR"
- "EGW"
- "MOT"
- "TCE"
- "CM"
- "WBtW"
- "JttRC"
name: Green Hag
image: "[[Green Hag.png]]"
---

# Green Hag

```statblock
"name": "Green Hag"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "3"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Draconic, Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 12). She\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/compendium/spells/dancing-lights.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [vicious mockery](/compendium/spells/vicious-mockery.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag can mimic animal sounds and humanoid voices. A creature that hears\
    \ the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight)\
    \ check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag covers herself and anything she is wearing or carrying with a magical\
    \ illusion that makes her look like another creature of her general size and humanoid\
    \ shape. The illusion ends if the hag takes a bonus action to end it or if she\
    \ dies.\n\nThe changes wrought by this effect fail to hold up to physical inspection.\
    \ For example, the hag could appear to have smooth skin, but someone touching\
    \ her would feel her rough flesh. Otherwise, a creature must take an action to\
    \ visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation)\
    \ check to discern that the hag is disguised."
  "name": "Illusory Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag magically turns [invisible](/rules/conditions.md#invisible) until\
    \ she attacks or casts a spell, or until her concentration ends (as if concentrating\
    \ on a spell). While [invisible](/rules/conditions.md#invisible), she leaves no\
    \ physical evidence of her passage, so she can be tracked only by magic. Any equipment\
    \ she wears or carries is [invisible](/rules/conditions.md#invisible) with her."
  "name": "Invisible Passage"
"source":
- "MM"
- "ToA"
- "GoS"
- "IMR"
- "EGW"
- "MOT"
- "TCE"
- "CM"
- "WBtW"
- "JttRC"
"image": "[[Green Hag.png]]"
```
^statblock

*Source: Monster Manual p. 177, Tomb of Annihilation, Ghosts of Saltmarsh, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel*

## Description

The wretched and hateful green hags dwell in dying forests, lonely swamps, and misty moors, making their homes in caves. Green hags love to manipulate other creatures into doing their bidding, masking their intentions behind layers of deception. They lure victims to them by mimicking voices calling out for help, or drive unwanted visitors away by imitating the cries of fierce beasts.

**Obsession with Tragedy.** Green hags revel in the failings and tragedies of other creatures. They derive joy from bringing people low and seeing hope turn into despair, not just for individuals but also for whole nations.

**Covens.** A green hag that is part of a coven (see the "Hag Covens" sidebar) has a challenge rating of 5 (1,800 XP).

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

forest, swamp, hill