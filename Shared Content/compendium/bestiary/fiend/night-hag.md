---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/fiend
aliases: ["Night Hag"]
statblock: true
"name": "Night Hag"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "5"
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"condition_immunities": "charmed"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Abyssal, Common, Infernal, Primordial"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 14, +6\
    \ to hit with spell attacks). She can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md)\n\n2/day each: [plane\
    \ shift](/compendium/spells/plane-shift.md) (self only), [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md),\
    \ [sleep](/compendium/spells/sleep.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A night hag carries two very rare magic items that she must craft for herself.\
    \ If either object is lost, the night hag will go to great lengths to retrieve\
    \ it, as creating a new tool takes time and effort.\n\nHeartstone: This lustrous\
    \ black gem allows a night hag to become ethereal while it is in her possession.\
    \ The touch of a heartstone also cures any disease. Crafting a heartstone takes\
    \ 30 days.\n\nSoul Bag: When an evil humanoid dies as a result of a night hag's\
    \ Nightmare Haunting, the hag catches the soul in this black sack made of stitched\
    \ flesh. A soul bag can hold only one evil soul at a time, and only the night\
    \ hag who crafted the bag can catch a soul with it. Crafting a soul bag takes\
    \ 7 days and a humanoid sacrifice (whose flesh is used to make the bag)."
  "name": "Night Hag Items"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws (Hag Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag magically polymorphs into a Small or Medium female humanoid, or\
    \ back into her true form. Her statistics are the same in each form. Any equipment\
    \ she is wearing or carrying isn't transformed. She reverts to her true form if\
    \ she dies."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag magically enters the Ethereal Plane from the Material Plane, or\
    \ vice versa. To do so, the hag must have a heartstone in her possession."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While on the Ethereal Plane, the hag magically touches a sleeping humanoid\
    \ on the Material Plane. A [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md)\
    \ spell cast on the target prevents this contact, as does a magic circle. As long\
    \ as the contact persists, the target has dreadful visions. If these visions last\
    \ for at least 1 hour, the target gains no benefit from its rest, and its hit\
    \ point maximum is reduced by 5 (1d10). If this effect reduces the target's hit\
    \ point maximum to 0, the target dies, and if the target was evil, its soul is\
    \ trapped in the hag's soul bag. The reduction to the target's hit point maximum\
    \ lasts until removed by the  [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or similar magic."
  "name": "Nightmare Haunting (1/Day)"
"source":
- "MM"
- "CoS"
- "ToA"
- "WDMM"
- "GoS"
- "BGDIA"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "JttRC"
name: Night Hag
image: "[[Night Hag.png]]"
---

# Night Hag

```statblock
"name": "Night Hag"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "5"
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"condition_immunities": "charmed"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Abyssal, Common, Infernal, Primordial"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 14, +6\
    \ to hit with spell attacks). She can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md)\n\n2/day each: [plane\
    \ shift](/compendium/spells/plane-shift.md) (self only), [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md),\
    \ [sleep](/compendium/spells/sleep.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A night hag carries two very rare magic items that she must craft for herself.\
    \ If either object is lost, the night hag will go to great lengths to retrieve\
    \ it, as creating a new tool takes time and effort.\n\nHeartstone: This lustrous\
    \ black gem allows a night hag to become ethereal while it is in her possession.\
    \ The touch of a heartstone also cures any disease. Crafting a heartstone takes\
    \ 30 days.\n\nSoul Bag: When an evil humanoid dies as a result of a night hag's\
    \ Nightmare Haunting, the hag catches the soul in this black sack made of stitched\
    \ flesh. A soul bag can hold only one evil soul at a time, and only the night\
    \ hag who crafted the bag can catch a soul with it. Crafting a soul bag takes\
    \ 7 days and a humanoid sacrifice (whose flesh is used to make the bag)."
  "name": "Night Hag Items"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws (Hag Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag magically polymorphs into a Small or Medium female humanoid, or\
    \ back into her true form. Her statistics are the same in each form. Any equipment\
    \ she is wearing or carrying isn't transformed. She reverts to her true form if\
    \ she dies."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag magically enters the Ethereal Plane from the Material Plane, or\
    \ vice versa. To do so, the hag must have a heartstone in her possession."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While on the Ethereal Plane, the hag magically touches a sleeping humanoid\
    \ on the Material Plane. A [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md)\
    \ spell cast on the target prevents this contact, as does a magic circle. As long\
    \ as the contact persists, the target has dreadful visions. If these visions last\
    \ for at least 1 hour, the target gains no benefit from its rest, and its hit\
    \ point maximum is reduced by 5 (1d10). If this effect reduces the target's hit\
    \ point maximum to 0, the target dies, and if the target was evil, its soul is\
    \ trapped in the hag's soul bag. The reduction to the target's hit point maximum\
    \ lasts until removed by the  [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or similar magic."
  "name": "Nightmare Haunting (1/Day)"
"source":
- "MM"
- "CoS"
- "ToA"
- "WDMM"
- "GoS"
- "BGDIA"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "JttRC"
"image": "[[Night Hag.png]]"
```
^statblock

*Source: Monster Manual p. 178, Curse of Strahd, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, Journeys through the Radiant Citadel*

## Description

Sly and subversive, night hags want to see the virtuous turn to villainy: love turned into obsession, kindness turned to hate, devotion to disregard, and generosity to selfishness. Night hags take perverse joy in corrupting mortals.

Night hags were once creatures of the Feywild, but their foulness saw them exiled to Hades long ago, where they degenerated into fiends. The night hags have long since spread across the Lower Planes.

**Soulmongers.** While a humanoid sleeps, a night hag can straddle the person ethereally and intrude upon its dreams. Any creature with [truesight](/rules/senses.md#truesight) can see the hag's spectral form straddling its prey. The ethereal hag fills her victim's head with doubts and fears, in the hope of tricking it into performing evil acts in the waking world. The hag continues her nightly visitations until the victim finally expires in its sleep. If the hag has driven her victim to commit evil deeds, she traps its corrupted soul in her soul bag (see the "Night Hag Items" sidebar) for transport to Hades.

**Covens.** A night hag that is part of a coven (see the "Hag Covens" sidebar) has a challenge rating of 7 (2,900 XP).

> [!quote] Night Hag Items
> 
> A night hag carries two very rare magic items that she must craft for herself. If either object is lost, the night hag will go to great lengths to retrieve it, as creating a new tool takes time and effort.
> 
> **Heartstone.** This lustrous black gem allows a night hag to become ethereal while it is in her possession. The touch of a heartstone also cures any disease. Crafting a heartstone takes 30 days.
> 
> **Soul Bag.** When an evil humanoid dies as a result of a night hag's Nightmare Haunting, the hag catches the soul in this black sack made of stitched flesh. A soul bag can hold only one evil soul at a time, and only the night hag who crafted the bag can catch a soul with it. Crafting a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make the bag).
^night-hag-items

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