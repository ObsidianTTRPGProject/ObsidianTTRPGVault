---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/monstrosity
- monster/environment/swamp
aliases: ["Catoblepas"]
statblock: true
"name": "Catoblepas"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"stats":
- !!int "19"
- !!int "12"
- !!int "21"
- !!int "3"
- !!int "14"
- !!int "8"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature other than a catoblepas that starts its turn within 10 feet\
    \ of the catoblepas must succeed on a DC 16 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the start of the creature's next turn. On a successful saving throw, the\
    \ creature is immune to the Stench of any catoblepas for 1 hour."
  "name": "Stench"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 21 (5d6\
    \ + 4) bludgeoning damage, and the target must succeed on a DC 16 Constitution\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the start of\
    \ the catoblepas's next turn."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The catoblepas targets one creature it can see within 30 feet of it. The\
    \ target must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic\
    \ damage on a failed save, or half as much damage on a successful one. If the\
    \ saving throw fails by 5 or more, the target instead takes 64 necrotic damage.\
    \ The target dies if reduced to 0 hit points by this ray."
  "name": "Death Ray (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
name: Catoblepas
image: "[[Catoblepas.png]]"
---

# Catoblepas

```statblock
"name": "Catoblepas"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"stats":
- !!int "19"
- !!int "12"
- !!int "21"
- !!int "3"
- !!int "14"
- !!int "8"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature other than a catoblepas that starts its turn within 10 feet\
    \ of the catoblepas must succeed on a DC 16 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the start of the creature's next turn. On a successful saving throw, the\
    \ creature is immune to the Stench of any catoblepas for 1 hour."
  "name": "Stench"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 21 (5d6\
    \ + 4) bludgeoning damage, and the target must succeed on a DC 16 Constitution\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the start of\
    \ the catoblepas's next turn."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The catoblepas targets one creature it can see within 30 feet of it. The\
    \ target must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic\
    \ damage on a failed save, or half as much damage on a successful one. If the\
    \ saving throw fails by 5 or more, the target instead takes 64 necrotic damage.\
    \ The target dies if reduced to 0 hit points by this ray."
  "name": "Death Ray (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
"image": "[[Catoblepas.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 70, Volo's Guide to Monsters p. 129*

## Description

The catoblepas is as loathsome as the vile swamplands in which it lives, a conglomeration of bloated buffalo, dinosaur, warthog, and hippopotamus parts. Despite its ungainly physiology, a catoblepas resembles a natural animal in its behavior, ambling through its marshy home, munching choice vegetation, eating the occasional bit of carrion, and wallowing in mire. A catoblepas might be found with the one mate it chooses for life and, on occasion, with a calf. A catoblepas attacks anyone that moves too close, especially if guarding its young.

A catoblepas's stink, like the stench of death mixed with swamp gas and skunk musk, gives it away as being much more ghastly than its appearance suggests. When it is on the attack, a catoblepas reveals the extent of its horrific nature. The creature's serpentine neck has trouble lifting its head, but one glare from its bloodshot eyes can rot flesh. At the end of its tail is a club that can rattle body and soul if it strikes true, leaving a victim unable to act while the catoblepas feasts on its body.

**Blighted Territory.** A catoblepas's nature as a creature of disease and decay brings out similar characteristics in the creature's swampy habitat. Such a wetland becomes gloomy, tangled, and more fetid than it was before. Beneficial qualities of the environment, such as healing herbs and clean water, become degraded, and swamp gases take on a hint of the catoblepas's foulness. Animals in the area are more aggressive and liable to be diseased. Degenerate creatures are likely to take up residence near a catoblepas's territory, as are those seeking to avoid notice.

**Catoblepas in Folklore.** Ordinary folk rarely see a catoblepas, but the creature has such a feared reputation that stories about it are ingrained in the popular culture. Any rumor of a catoblepas taking up residence nearby is taken to be a bad omen, even if the rumor is proven false. In some lands, the silhouette of a catoblepas, with its tail extended over its body and its head held low, is a baleful heraldic figure signifying death or doom.

Sages say that gods of pestilence and rot created catoblepases as embodiments of their influence, while other stories link them to misfortune. Some such tales claim that swamp-dwelling hags tend catoblepases like cattle, drinking the monsters' milk and using them as guardians or pets. Other legends say that those of impure heart can tame a catoblepas and whisper of malevolent warlocks and wicked knights who ride them into battle.

## Environment

swamp