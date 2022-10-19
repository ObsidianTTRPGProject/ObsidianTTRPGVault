---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Borivik Windheim"]
statblock: true
"name": "Borivik Windheim"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "17"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "11"
- !!int "20"
- !!int "14"
- !!int "11"
- !!int "16"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "7"
"skillsaves":
  "Nature": !!int "8"
  "Stealth": !!int "13"
  "Perception": !!int "11"
  "Survival": !!int "11"
"senses": "passive Perception 21"
"languages": "Common, Elvish, Sylvan"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borivik is a 11th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 15, +7 to hit with spell attacks). Borivik has the following\
    \ ranger spells prepared:\n\n1st level (4 1st-level slots): [absorb elements](/compendium/spells/absorb-elements-xge.md),\
    \ [ensnaring strike](/compendium/spells/ensnaring-strike.md), [speak with animals](/compendium/spells/speak-with-animals.md)\n\
    \n2nd level (3 2nd-level slots): [cordon of arrows](/compendium/spells/cordon-of-arrows.md),\
    \ [lesser restoration](/compendium/spells/lesser-restoration.md), [pass without\
    \ trace](/compendium/spells/pass-without-trace.md)\n\n3rd level (3 3rd-level\
    \ slots): [daylight](/compendium/spells/daylight.md), [nondetection](/compendium/spells/nondetection.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borivik has a half-dozen bolts of undead slaying. If he strikes an undead\
    \ with one of these bolts, it must make a DC 17 Constitution saving throw, taking\
    \ an extra 6d10 piercing damage on a failed save, or half as much extra damage\
    \ on a successful one."
  "name": "Bolts of Undead Slaying"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Borivik can add 1d10 to his next attack or damage roll\
    \ with a crossbow."
  "name": "Crossbow Expert"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borivik can take the Disengage or Hide action as a bonus action on each\
    \ of his turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borivik makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, ranged 100/400 ft., one target. Hit:\
    \ 10 (1d10 + 5) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "MaBJoV"
name: Borivik Windheim
image: "[[Borivik Windheim.png]]"
---

# Borivik Windheim

```statblock
"name": "Borivik Windheim"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "17"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "11"
- !!int "20"
- !!int "14"
- !!int "11"
- !!int "16"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "7"
"skillsaves":
  "Nature": !!int "8"
  "Stealth": !!int "13"
  "Perception": !!int "11"
  "Survival": !!int "11"
"senses": "passive Perception 21"
"languages": "Common, Elvish, Sylvan"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borivik is a 11th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 15, +7 to hit with spell attacks). Borivik has the following\
    \ ranger spells prepared:\n\n1st level (4 1st-level slots): [absorb elements](/compendium/spells/absorb-elements-xge.md),\
    \ [ensnaring strike](/compendium/spells/ensnaring-strike.md), [speak with animals](/compendium/spells/speak-with-animals.md)\n\
    \n2nd level (3 2nd-level slots): [cordon of arrows](/compendium/spells/cordon-of-arrows.md),\
    \ [lesser restoration](/compendium/spells/lesser-restoration.md), [pass without\
    \ trace](/compendium/spells/pass-without-trace.md)\n\n3rd level (3 3rd-level\
    \ slots): [daylight](/compendium/spells/daylight.md), [nondetection](/compendium/spells/nondetection.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borivik has a half-dozen bolts of undead slaying. If he strikes an undead\
    \ with one of these bolts, it must make a DC 17 Constitution saving throw, taking\
    \ an extra 6d10 piercing damage on a failed save, or half as much extra damage\
    \ on a successful one."
  "name": "Bolts of Undead Slaying"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Borivik can add 1d10 to his next attack or damage roll\
    \ with a crossbow."
  "name": "Crossbow Expert"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borivik can take the Disengage or Hide action as a bonus action on each\
    \ of his turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borivik makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, ranged 100/400 ft., one target. Hit:\
    \ 10 (1d10 + 5) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "MaBJoV"
"image": "[[Borivik Windheim.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 56*

## Description

Borovik Windheim is a skilled ranger and undead hunter originally from the distant lands of Oerth. He was a scout for the ancient Order of the Heart. Long ago, Borovik was leading a small band of the Order of the Heart when a strange mist rose and carried them to the Shadowfell. One by one, the horrors of that land took Borovik's companions, until Borovik was the lone survivor. Borovik blamed himself for the deaths of so many of his close friends, but he never succumbed to despair.

Borovik's will to survive allowed him to cease being the hunted and instead become the hunter. He learned everything he could in a land overrun with undead and aberrations of nature. During his time in the Shadowfell he became a master at hunting and killing undead. He even was mentored by the famous vampire hunter, Rudolph Van Richten. He also forged a friendship with two men who would become his closest companions, Lothar an Uthgardt barbarian and Viktor a holy warrior.

Borovik comes across as eccentric and strange to those that don't know him well. At times, Borovik will have one sided conversations with his long dead companions from the Order of the Heart. It is a coping mechanism that he learned during his time in the Shadowfell and also a way for him to keep their memory alive.

With the help of his companion Lothar, Borivik escaped the Shadowfell to the world of Faerûn. There he came into contact with the Flaming Fist. They helped him recover from the horrors he had endured in the Shadowfell and in recompense, Borivik became one of their most ardent supporters.

Borivik's weapon of choice is a heavy crossbow. He carries with him a wide array of ammunition and other paraphernalia designed to kill all kinds of monsters with a focus on items that can be used on denizens of the Shadowfell. He is willing to share his experience in fighting the undead with any who express interest.

**Borivik as a Contact.** Borivik becomes available as a contact for the Flaming Fist at 7th level.

**Ammunition Available from Nauk**

| Ammunition | Required Level | Cost |
|------------|----------------|------|
| Ammunition, +1 | 1 | 50 gp per ammunition |
| Antitoxin | 1 | 30 gp |
| Holy water | 1 | 10 gp |
| Ammunition, +2 | 9 | 200 gp per ammunition |
| Oil of slipperiness | 9 | 250 gp |
| Dust of disappearance | 9 | 300 gp |
| Dust of dryness | 9 | 200 gp |
| Ring of resistance—necrotic | 9 | 1000 gp |
| Ammunition, +3 | 12 | 1000 gp per ammunition |
| Arrow/bolt of undead slaying | 14 | 5000 gp per ammunition |
^ammunition-available-from-nauk