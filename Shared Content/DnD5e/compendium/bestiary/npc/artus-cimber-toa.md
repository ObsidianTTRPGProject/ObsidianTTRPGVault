---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Artus Cimber"]
statblock: true
"name": "Artus Cimber"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "14"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"stats":
- !!int "10"
- !!int "15"
- !!int "13"
- !!int "17"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "5"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "6"
  "History": !!int "9"
  "Survival": !!int "9"
"damage_immunities": "cold"
"senses": "passive Perception 13"
"languages": "Common, Draconic, Dwarvish, Goblin"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Artus wears the [Ring of Winter](/compendium/items/ring-of-winter-toa.md).\
    \ He and the ring can't be targeted by divination magic or perceived through magical\
    \ scrying sensors. While attuned to and wearing the ring, Artus ceases to age\
    \ and is immune to cold damage and the effects of extreme cold.\n\nArtus wields\
    \ [Bookmark](/compendium/items/bookmark-toa.md) a +3 dagger with additional magical\
    \ properties. As a bonus action, Artus can activate any one of the following properties\
    \ while attuned to the dagger, provided he has the weapon drawn:\n\n- Cause a\
    \ blue gem set into the dagger's pommel to shed bright light in a 20-foot radius\
    \ and dim light for an additional 20 feet, or make the gem go dark.\n- Turn the\
    \ dagger into a compass that, while resting on your palm, points north.\n- Cast\
    \ [dimension door](/compendium/spells/dimension-door.md) from the dagger. Once\
    \ this property is used, it can't be used again until the next dawn.\n- Cast [compulsion](/compendium/spells/compulsion.md)\
    \ (save DC 15) from the dagger. The range of the spell increases to 90 feet but\
    \ it targets only spiders that are beasts. Once this property is used, it can't\
    \ be used again until the next dawn."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Artus makes three attacks with Bookmark or his longbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d4\
    \ + 5) piercing damage."
  "name": "Bookmark (+3 Dagger)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target Hit: 6\
    \ (1d8 + 2) piercing damage."
  "name": "Longbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Ring of Winter has 12 charges and regains all its expended charges\
    \ daily at dawn. While attuned to and wearing the ring, Artus can expend the necessary\
    \ number of charges to activate one of the following properties:\n\n- Artus can\
    \ expend 1 charge and use the ring to lower the temperature in a 120-foot-radius\
    \ sphere centered on a point he can see within 300 feet of him. The temperature\
    \ in that area drops 20 degrees per minute, to a minimum of −30 degrees Fahrenheit.\
    \ Frost and ice begin to form on surfaces once the temperature drops below 32\
    \ degrees. This effect is permanent unless Artus uses the ring to end the effect\
    \ as an action, at which point the temperature in the area returns to normal at\
    \ a rate of 10 degrees per minute.\n- Artus can cast one of the following spells\
    \ from the ring (spell save DC 17) by expending the necessary number of charges:\
    \ [Bigby's hand](/compendium/spells/bigbys-hand.md) (2 charges) the hand is made\
    \ of ice, is immune to cold damage, and deals bludgeoning damage instead of force\
    \ damage as a clenched fist, [cone of cold](/compendium/spells/cone-of-cold.md)\
    \ (2 charges), [flesh to ice](/compendium/spells/flesh-to-stone.md) (3 charges);\
    \ as flesh to stone except that the target turns to solid ice with the density\
    \ and durability of stone, [ice storm](/compendium/spells/ice-storm.md) (2 charges),\
    \ [Otiluke's freezing sphere](/compendium/spells/otilukes-freezing-sphere.md)\
    \ (3 charges), [sleet storm](/compendium/spells/sleet-storm.md) (1 charge), [spike\
    \ growth](/compendium/spells/spike-growth.md) (1 charge) the spikes are made of\
    \ ice, or [wall of ice](/compendium/spells/wall-of-ice.md) (2 charges).\n- Artus\
    \ can expend the necessary number of charges and use the ring to create either\
    \ an inanimate ice object (2 charges) or an animated ice creature (4 charges).\
    \ The ice object can't have any moving parts, must be able to fit inside a 10-foot\
    \ cube, and has the density and durability of metal or stone (Artus's choice).\
    \ The ice creature must be modeled after a beast with a challenge rating of 2\
    \ or less. The ice creature has the same statistics as the beast it models, with\
    \ the following changes: the creature is a construct with vulnerability to fire\
    \ damage, immunity to cold and poison damage, and immunity to the following conditions:\
    \ [charmed](/rules/conditions.md#charmed), [exhaustion](/rules/conditions.md#exhaustion),\
    \ [frightened](/rules/conditions.md#frightened), [paralyzed](/rules/conditions.md#paralyzed),\
    \ [petrified](/rules/conditions.md#petrified), and [poisoned](/rules/conditions.md#poisoned).\
    \ The ice creature obeys only its creator's commands. The object or creature appears\
    \ in an unoccupied space within 60 feet of Artus. It melts into a pool of normal\
    \ water after 24 hours or when it drops to 0 hit points. In extreme heat, it loses\
    \ 5 (1d10) hit points per minute as it melts. Use the guidelines in chapter 8\
    \ of the Dungeon Master's Guide to determine the hit points of an inanimate object\
    \ if they become necessary."
  "name": "Ring of Winter"
"source":
- "ToA"
name: Artus Cimber
image: "[[Artus Cimber.png]]"
---

# Artus Cimber

```statblock
"name": "Artus Cimber"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "14"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"stats":
- !!int "10"
- !!int "15"
- !!int "13"
- !!int "17"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "5"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "6"
  "History": !!int "9"
  "Survival": !!int "9"
"damage_immunities": "cold"
"senses": "passive Perception 13"
"languages": "Common, Draconic, Dwarvish, Goblin"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Artus wears the [Ring of Winter](/compendium/items/ring-of-winter-toa.md).\
    \ He and the ring can't be targeted by divination magic or perceived through magical\
    \ scrying sensors. While attuned to and wearing the ring, Artus ceases to age\
    \ and is immune to cold damage and the effects of extreme cold.\n\nArtus wields\
    \ [Bookmark](/compendium/items/bookmark-toa.md) a +3 dagger with additional magical\
    \ properties. As a bonus action, Artus can activate any one of the following properties\
    \ while attuned to the dagger, provided he has the weapon drawn:\n\n- Cause a\
    \ blue gem set into the dagger's pommel to shed bright light in a 20-foot radius\
    \ and dim light for an additional 20 feet, or make the gem go dark.\n- Turn the\
    \ dagger into a compass that, while resting on your palm, points north.\n- Cast\
    \ [dimension door](/compendium/spells/dimension-door.md) from the dagger. Once\
    \ this property is used, it can't be used again until the next dawn.\n- Cast [compulsion](/compendium/spells/compulsion.md)\
    \ (save DC 15) from the dagger. The range of the spell increases to 90 feet but\
    \ it targets only spiders that are beasts. Once this property is used, it can't\
    \ be used again until the next dawn."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Artus makes three attacks with Bookmark or his longbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d4\
    \ + 5) piercing damage."
  "name": "Bookmark (+3 Dagger)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target Hit: 6\
    \ (1d8 + 2) piercing damage."
  "name": "Longbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Ring of Winter has 12 charges and regains all its expended charges\
    \ daily at dawn. While attuned to and wearing the ring, Artus can expend the necessary\
    \ number of charges to activate one of the following properties:\n\n- Artus can\
    \ expend 1 charge and use the ring to lower the temperature in a 120-foot-radius\
    \ sphere centered on a point he can see within 300 feet of him. The temperature\
    \ in that area drops 20 degrees per minute, to a minimum of −30 degrees Fahrenheit.\
    \ Frost and ice begin to form on surfaces once the temperature drops below 32\
    \ degrees. This effect is permanent unless Artus uses the ring to end the effect\
    \ as an action, at which point the temperature in the area returns to normal at\
    \ a rate of 10 degrees per minute.\n- Artus can cast one of the following spells\
    \ from the ring (spell save DC 17) by expending the necessary number of charges:\
    \ [Bigby's hand](/compendium/spells/bigbys-hand.md) (2 charges) the hand is made\
    \ of ice, is immune to cold damage, and deals bludgeoning damage instead of force\
    \ damage as a clenched fist, [cone of cold](/compendium/spells/cone-of-cold.md)\
    \ (2 charges), [flesh to ice](/compendium/spells/flesh-to-stone.md) (3 charges);\
    \ as flesh to stone except that the target turns to solid ice with the density\
    \ and durability of stone, [ice storm](/compendium/spells/ice-storm.md) (2 charges),\
    \ [Otiluke's freezing sphere](/compendium/spells/otilukes-freezing-sphere.md)\
    \ (3 charges), [sleet storm](/compendium/spells/sleet-storm.md) (1 charge), [spike\
    \ growth](/compendium/spells/spike-growth.md) (1 charge) the spikes are made of\
    \ ice, or [wall of ice](/compendium/spells/wall-of-ice.md) (2 charges).\n- Artus\
    \ can expend the necessary number of charges and use the ring to create either\
    \ an inanimate ice object (2 charges) or an animated ice creature (4 charges).\
    \ The ice object can't have any moving parts, must be able to fit inside a 10-foot\
    \ cube, and has the density and durability of metal or stone (Artus's choice).\
    \ The ice creature must be modeled after a beast with a challenge rating of 2\
    \ or less. The ice creature has the same statistics as the beast it models, with\
    \ the following changes: the creature is a construct with vulnerability to fire\
    \ damage, immunity to cold and poison damage, and immunity to the following conditions:\
    \ [charmed](/rules/conditions.md#charmed), [exhaustion](/rules/conditions.md#exhaustion),\
    \ [frightened](/rules/conditions.md#frightened), [paralyzed](/rules/conditions.md#paralyzed),\
    \ [petrified](/rules/conditions.md#petrified), and [poisoned](/rules/conditions.md#poisoned).\
    \ The ice creature obeys only its creator's commands. The object or creature appears\
    \ in an unoccupied space within 60 feet of Artus. It melts into a pool of normal\
    \ water after 24 hours or when it drops to 0 hit points. In extreme heat, it loses\
    \ 5 (1d10) hit points per minute as it melts. Use the guidelines in chapter 8\
    \ of the Dungeon Master's Guide to determine the hit points of an inanimate object\
    \ if they become necessary."
  "name": "Ring of Winter"
"source":
- "ToA"
"image": "[[Artus Cimber.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 212*

## Description

A former member of the Harpers, Artus Cimber is the keeper of the Ring of Winter. He found the ring in the jungles of Chult, where he also met his wife, Alisanda. The ring halts its wearer's natural aging and has allowed Artus to survive well beyond his natural lifespan. The ring also defies magical attempts to divine its location and that of its wearer. On his fingers above the knuckles, Artus has tattooed the names of his dearly departed animal companions-a pair of talking wombats named Byrt and Lugg.

Artus has spent most of his life trying to keep the Ring of Winter out of evil hands, but his return to Chult is focused on reuniting with his beloved Alisanda, who disappeared along with the city of Mezro during the Spellplague. No longer content to wait for Alisanda and Mezro to return on their own, Artus has been seeking the means to bring them back. He believes that Saja N'baza, an ancient guardian naga, can help him. As such, his search has been focused on locating the ruins of Orolunga, where the naga is said to dwell. Fate has handed Artus a saurial traveling companion named Dragonbait, whom he met in Port Nyanzaru. The two are always on the move. Consequently, their location in the adventure is randomly determined.

**Using Artus.** Artus has never been to Omu, and he has no idea where the city is. However, he has a powerful artifact in his possession and a good heart. If the characters explain why they've come to Chult, Artus puts aside his personal quest and offers to help them find Omu and destroy the Soulmonger.

The first time a situation forces Artus to use the Ring of Winter, he warns the characters that evil forces are after the ring and that his presence in the party might put the characters in danger.

**Artus Cimber's Traits.** **Ideal.** "The preservation of knowledge and history is important to me."

**Bond.** "I long to be reunited with my wife, Alisanda."

**Flaw.** "I am slow to trust strangers-adventurers in particular."