---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/fiend
aliases: ["Mordakhesh"]
statblock: true
"name": "Mordakhesh"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "170"
"hit_dice": "20d8 + 80"
"stats":
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "15"
- !!int "17"
- !!int "20"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "8"
  "Strength": !!int "10"
  "Constitution": !!int "9"
"skillsaves":
  "Athletics": !!int "10"
  "Insight": !!int "8"
  "Perception": !!int "8"
  "Persuasion": !!int "10"
"damage_vulnerabilities": "piercing from magic weapons wielded by good creatures"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "Common, Infernal"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mordakhesh's spellcasting ability is Charisma (spell save DC 18, +10 to\
    \ hit with spell attacks). Mordakhesh can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [chromatic orb](/compendium/spells/chromatic-orb.md)\
    \ (see \"Actions\" below), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [disguise self](/compendium/spells/disguise-self.md)\n\n1/day each: [banishing\
    \ smite](/compendium/spells/banishing-smite.md), [destructive wave](/compendium/spells/destructive-wave.md),\
    \ [fly](/compendium/spells/fly.md), [mass suggestion](/compendium/spells/mass-suggestion.md),\
    \ [staggering smite](/compendium/spells/staggering-smite.md), [suggestion](/compendium/spells/suggestion.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mordakhesh can't be affected or detected by spells of 6th level or lower\
    \ unless he wishes to be. Mordakhesh has advantage on saving throws against all\
    \ other spells and magical effects."
  "name": "Limited Magic Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mordakhesh makes three greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage plus 5 (1d10) force damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +10 to hit, range 120 ft., one creature. Hit: 13\
    \ (3d8) damage of a type chosen by Mordakhesh: acid, cold, fire, lightning, poison,\
    \ or thunder."
  "name": "Chromatic Orb"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mordakhesh makes one weapon attack or casts [chromatic orb](/compendium/spells/chromatic-orb.md)."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Modakhesh gains resistance to one damage type of his choice—acid, cold,\
    \ fire, lightning, poison, or thunder—until the start of his next turn."
  "name": "Chromatic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mordakhesh targets up to two allies that he can see within 30 feet of him.\
    \ If a target can see and hear him, the target can make one weapon attack as a\
    \ reaction and gains advantage on the attack roll."
  "name": "Warlord's Command (Costs 2 Actions)"
"source":
- "ERLW"
name: Mordakhesh
image: "[[Mordakhesh.png]]"
---

# Mordakhesh

```statblock
"name": "Mordakhesh"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "170"
"hit_dice": "20d8 + 80"
"stats":
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "15"
- !!int "17"
- !!int "20"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "8"
  "Strength": !!int "10"
  "Constitution": !!int "9"
"skillsaves":
  "Athletics": !!int "10"
  "Insight": !!int "8"
  "Perception": !!int "8"
  "Persuasion": !!int "10"
"damage_vulnerabilities": "piercing from magic weapons wielded by good creatures"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "Common, Infernal"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mordakhesh's spellcasting ability is Charisma (spell save DC 18, +10 to\
    \ hit with spell attacks). Mordakhesh can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [chromatic orb](/compendium/spells/chromatic-orb.md)\
    \ (see \"Actions\" below), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [disguise self](/compendium/spells/disguise-self.md)\n\n1/day each: [banishing\
    \ smite](/compendium/spells/banishing-smite.md), [destructive wave](/compendium/spells/destructive-wave.md),\
    \ [fly](/compendium/spells/fly.md), [mass suggestion](/compendium/spells/mass-suggestion.md),\
    \ [staggering smite](/compendium/spells/staggering-smite.md), [suggestion](/compendium/spells/suggestion.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mordakhesh can't be affected or detected by spells of 6th level or lower\
    \ unless he wishes to be. Mordakhesh has advantage on saving throws against all\
    \ other spells and magical effects."
  "name": "Limited Magic Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mordakhesh makes three greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage plus 5 (1d10) force damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +10 to hit, range 120 ft., one creature. Hit: 13\
    \ (3d8) damage of a type chosen by Mordakhesh: acid, cold, fire, lightning, poison,\
    \ or thunder."
  "name": "Chromatic Orb"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mordakhesh makes one weapon attack or casts [chromatic orb](/compendium/spells/chromatic-orb.md)."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Modakhesh gains resistance to one damage type of his choice—acid, cold,\
    \ fire, lightning, poison, or thunder—until the start of his next turn."
  "name": "Chromatic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mordakhesh targets up to two allies that he can see within 30 feet of him.\
    \ If a target can see and hear him, the target can make one weapon attack as a\
    \ reaction and gains advantage on the attack roll."
  "name": "Warlord's Command (Costs 2 Actions)"
"source":
- "ERLW"
"image": "[[Mordakhesh.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 301*

## Description

In the age when fiends and dragons waged war across Eberron, rakshasas served the fiendish lords as strategists and generals. A rakshasa named Mordakhesh rose up through the ranks to become one of the greatest commanders of his age, and a dragon-slaying specialist. For this, he earned the nickname Shadowsword, along with a legendary reputation for leaving death in his wake.

Mordakhesh serves as the prakhutu or "speaker" of his imprisoned master, Rak Tulkhesh, and he seeks to free his lord by bathing the world in blood. Like a spider with multiple webs, he has agents and pawns (which he calls his "claws") established in armies across Khorvaire. The most significant of those is the barbarian horde he amasses in the Demon Wastes—warriors who threaten to sweep into Aundair on a tide of blood.

Many of the horrors of the Last War were instigated—or at least encouraged—by Mordakhesh's operatives, and his claws are known to have perpetrated some of the most brutal massacres of that conflict. No one knows how far the Shadowsword's reach extends, or which commanders in the armies of Khorvaire serve him.