---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Xan Moonblade"]
statblock: true
"name": "Xan Moonblade"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"hp": !!int "54"
"hit_dice": "12d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Performance": !!int "6"
  "Acrobatics": !!int "9"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xan is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). Xan has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [mage\
    \ armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [misty step](/compendium/spells/misty-step.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (3 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xan wields a Moonblade. The Moonblade has a +3 bonus to attack and damage\
    \ rolls (already factored into Xan's attacks) and has the finesse property."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xan can use a bonus action to start a bladesong. His bladesong lasts for\
    \ 1 minute. While using bladesong his movement increases to 40 ft., he gains a\
    \ +3 bonus to his AC and he gains a +3 bonus to all concentration checks."
  "name": "Bladesong"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xan has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Xan to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xan makes two attacks with his Moonblade."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) slashing damage or 11 (1d10 + 6) slashing damage if wielded with two hands."
  "name": "Moonblade"
"source":
- "MaBJoV"
name: Xan Moonblade
image: "[[Xan Moonblade.png]]"
---

# Xan Moonblade

```statblock
"name": "Xan Moonblade"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"hp": !!int "54"
"hit_dice": "12d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Performance": !!int "6"
  "Acrobatics": !!int "9"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xan is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). Xan has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [mage\
    \ armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [misty step](/compendium/spells/misty-step.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (3 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xan wields a Moonblade. The Moonblade has a +3 bonus to attack and damage\
    \ rolls (already factored into Xan's attacks) and has the finesse property."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xan can use a bonus action to start a bladesong. His bladesong lasts for\
    \ 1 minute. While using bladesong his movement increases to 40 ft., he gains a\
    \ +3 bonus to his AC and he gains a +3 bonus to all concentration checks."
  "name": "Bladesong"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xan has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Xan to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xan makes two attacks with his Moonblade."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) slashing damage or 11 (1d10 + 6) slashing damage if wielded with two hands."
  "name": "Moonblade"
"source":
- "MaBJoV"
"image": "[[Xan Moonblade.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 38*

## Description

Xan is an elven bladesinger raised in the city of Evereska, one of the largest elven enclaves left in Faerûn, its population size second only to that of the island nation of Evermeet. With its name meaning "fortress home" in elvish, Evereska has remained hidden within the Western Heartlands for millennia. This secrecy is the major reason why the city remains as one of the last major elven enclaves in the North, whereas most others have fallen to outsiders. Because of this, Evereska is sometimes called the Last City.

Xan splits his time between his home city and the fortress library of Candlekeep. He originally encountered the monks of Candlekeep when he traveled with the Bhaalspawn, Abdel Adrian. Since then, he has found the library a comfortable second home with aims that are often aligned with that of Evereska.

Xan is one of the Blessed of Corellon and has changed gender many times over his life. His ability to change gender after an elven trance is something that he uses often, and it is usually his mercurial moods that will determine his choice.

Xan wields a moonblade forged by the smiths of Myth Drannor. Each moonblade is unique, with Xan's taking the form of a longsword wreathed in magical blue flames. Although such weapons are normally passed along elven bloodlines, Xan's sword appears specifically bound to him. Xan desires to eventually leave the mortal world and journey to Evermeet, but before he does that, he wants to find a worthy heir to his moonblade.

**Xan as a Contact.** Xan is available as a contact at 9th level. Xan is able to give you access to the rarest books in Candlekeep. It is important to note that the cost of obtaining a Manual of Golems does not cover the cost of constructing the golem.

**Xan's Books and Scrolls for Sale**

| Books and Scrolls | Required Level | Cost |
|-------------------|----------------|------|
| Spell scroll—5th level spells from wizard list | 9 | 2,000 gp |
| Spell scroll—6th level spells from wizard list | 12 | 4,000 gp |
| Spell scroll—7th level spells from wizard list | 12 | 7,500 gp |
| Manual of bodily health | 15 | 30,000 gp |
| Manual of gainful exercise | 15 | 30,000 gp |
| Manual of golems—clay | 12 | 5,000 gp |
| Manual of golems—flesh | 9 | 5,000 gp |
| Manual of golems—iron | 16 | 10,000 gp |
| Manual of golems—stone | 14 | 10,000 gp |
| Manual of quickness of action | 15 | 30,000 gp |
| Tome of clear thought | 15 | 30,000 gp |
| Tome of leadership and influence | 15 | 30,000 gp |
| Tome of understanding | 15 | 30,000 gp |
^xans-books-and-scrolls-for-sale