---
cssclass: json5e-monster
tags:
- compendium/src/ai
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Brahma Lutier"]
statblock: true
"name": "Brahma Lutier"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "12"
- !!int "15"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "3"
  "Performance": !!int "5"
  "Persuasion": !!int "5"
"senses": "passive Perception 13"
"languages": "Common, Elvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brahma is a 4th-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 13, +5 to hit with spell attacks). She has the following bard\
    \ spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [message](/compendium/spells/message.md), [vicious mockery](/compendium/spells/vicious-mockery.md)\n\
    \n1st level (4 1st-level slots): [charm person](/compendium/spells/charm-person.md),\
    \ [heroism](/compendium/spells/heroism.md), [illusory script](/compendium/spells/illusory-script.md),\
    \ [sleep](/compendium/spells/sleep.md), [unseen servant](/compendium/spells/unseen-servant.md)\n\
    \n2nd level (3 2nd-level slots): [cloud of daggers](/compendium/spells/cloud-of-daggers.md),\
    \ [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brahma has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put her to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brahma can use a bonus action to target one creature she can see within\
    \ 30 feet of her. If the target can hear Brahma, it must succeed on a DC 13 Charisma\
    \ saving throw or have disadvantage on ability checks, attack rolls, and saving\
    \ throws until the start of Brahma's next turn."
  "name": "Taunt (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "War Lute"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brahma targets one creature that can see or hear her, which must succeed\
    \ on a DC 13 Wisdom saving throw or be [charmed](/rules/conditions.md#charmed)\
    \ by her for 1 minute. The target can repeat the save at the end of each of its\
    \ turns, ending the effect on itself on a success. It has disadvantage on these\
    \ saves if being [charmed](/rules/conditions.md#charmed) by Brahma is something\
    \ the target openly or secretly desires. For 1 hour after the charm effect ends,\
    \ the target has disadvantage on Intelligence, Wisdom, or Charisma checks made\
    \ as part of a contest with Brahma."
  "name": "Song of Domination (3/Day)"
"source":
- "AI"
name: Brahma Lutier
image: "[[Brahma Lutier.png]]"
---

# Brahma Lutier

```statblock
"name": "Brahma Lutier"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "12"
- !!int "15"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "3"
  "Performance": !!int "5"
  "Persuasion": !!int "5"
"senses": "passive Perception 13"
"languages": "Common, Elvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brahma is a 4th-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 13, +5 to hit with spell attacks). She has the following bard\
    \ spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [message](/compendium/spells/message.md), [vicious mockery](/compendium/spells/vicious-mockery.md)\n\
    \n1st level (4 1st-level slots): [charm person](/compendium/spells/charm-person.md),\
    \ [heroism](/compendium/spells/heroism.md), [illusory script](/compendium/spells/illusory-script.md),\
    \ [sleep](/compendium/spells/sleep.md), [unseen servant](/compendium/spells/unseen-servant.md)\n\
    \n2nd level (3 2nd-level slots): [cloud of daggers](/compendium/spells/cloud-of-daggers.md),\
    \ [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brahma has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put her to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brahma can use a bonus action to target one creature she can see within\
    \ 30 feet of her. If the target can hear Brahma, it must succeed on a DC 13 Charisma\
    \ saving throw or have disadvantage on ability checks, attack rolls, and saving\
    \ throws until the start of Brahma's next turn."
  "name": "Taunt (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "War Lute"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brahma targets one creature that can see or hear her, which must succeed\
    \ on a DC 13 Wisdom saving throw or be [charmed](/rules/conditions.md#charmed)\
    \ by her for 1 minute. The target can repeat the save at the end of each of its\
    \ turns, ending the effect on itself on a success. It has disadvantage on these\
    \ saves if being [charmed](/rules/conditions.md#charmed) by Brahma is something\
    \ the target openly or secretly desires. For 1 hour after the charm effect ends,\
    \ the target has disadvantage on Intelligence, Wisdom, or Charisma checks made\
    \ as part of a contest with Brahma."
  "name": "Song of Domination (3/Day)"
"source":
- "AI"
"image": "[[Brahma Lutier.png]]"
```
^statblock

*Source: Acquisitions Incorporated p. 205*

## Description

Formally a former member of the "B" Team, Brahma Lutier is a gifted cartographer, spy, and troubadour. Tutored in at least the latter of those vocations by Audra Courtier (wife of Propha Dran and co-owner of the Dran & Courtier inn of Red Larch), Brahma's specialty is a song of domination that is legendarily difficult to resist.

Her retirement is said to be connected to a falling out with husband Oak Truestrike, and Brahma has been operating as a solo agent for some time now. Known for a personality that is murderous and cheery in equal part, she utilizes an instrument of dragonborn design in combat. Known as a war lute, this unique item comes replete with hidden storage and powerful weaponry.