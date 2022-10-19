---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/drow
aliases: ["Viconia DeVir"]
statblock: true
"name": "Viconia DeVir"
"size": "Medium"
"type": "humanoid"
"subtype": "drow"
"alignment": "Neutral Evil"
"ac": !!int "21"
"hp": !!int "81"
"hit_dice": "18d8"
"stats":
- !!int "25"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "20"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "10"
  "Constitution": !!int "5"
"skillsaves":
  "Religion": !!int "12"
  "Insight": !!int "10"
  "Persuasion": !!int "7"
"damage_resistances": "necrotic"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Celestial, Common, Elvish"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viconia's spellcasting ability is Charisma (spell save DC 15). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each:\
    \ [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viconia is a 16th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 18, +10 to hit with spell attacks). Viconia has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (2\
    \ 3rd-level slots): [bestow curse](/compendium/spells/bestow-curse.md), [spirit\
    \ guardians](/compendium/spells/spirit-guardians.md)\n\n4th level (3 4th-level\
    \ slots): [death ward](/compendium/spells/death-ward.md), [wall of fire](/compendium/spells/wall-of-fire.md)\n\
    \n5th level (2 5th-level slots): [antilife shell](/compendium/spells/antilife-shell.md),\
    \ [flame strike](/compendium/spells/flame-strike.md)\n\n6th level (1 6th-level\
    \ slots): [blade barrier](/compendium/spells/blade-barrier.md)\n\n7th level\
    \ (1 7th-level slots): [divine word](/compendium/spells/divine-word.md)\n\n\
    8th level (1 8th-level slots): [holy aura](/compendium/spells/holy-aura.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viconia wears a belt of fire giant strength and a cloak of protection and\
    \ wields a mace +3. Without the belt, her strength is 12 and her speed is reduced\
    \ to 20 ft."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viconia has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Viconia to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, Viconia has resistance to damage that isn't\
    \ force, psychic, or radiant."
  "name": "Living Shadow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Viconia has disadvantage on attack rolls, as well as\
    \ on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viconia attacks with her Mace +3 and casts a spell."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 13 (1d6\
    \ + 10) bludgeoning damage plus 9 (2d8) necrotic damage."
  "name": "Mace, +3"
"source":
- "MaBJoV"
name: Viconia DeVir
image: "[[Viconia DeVir.png]]"
---

# Viconia DeVir

```statblock
"name": "Viconia DeVir"
"size": "Medium"
"type": "humanoid"
"subtype": "drow"
"alignment": "Neutral Evil"
"ac": !!int "21"
"hp": !!int "81"
"hit_dice": "18d8"
"stats":
- !!int "25"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "20"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "10"
  "Constitution": !!int "5"
"skillsaves":
  "Religion": !!int "12"
  "Insight": !!int "10"
  "Persuasion": !!int "7"
"damage_resistances": "necrotic"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Celestial, Common, Elvish"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viconia's spellcasting ability is Charisma (spell save DC 15). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each:\
    \ [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viconia is a 16th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 18, +10 to hit with spell attacks). Viconia has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (2\
    \ 3rd-level slots): [bestow curse](/compendium/spells/bestow-curse.md), [spirit\
    \ guardians](/compendium/spells/spirit-guardians.md)\n\n4th level (3 4th-level\
    \ slots): [death ward](/compendium/spells/death-ward.md), [wall of fire](/compendium/spells/wall-of-fire.md)\n\
    \n5th level (2 5th-level slots): [antilife shell](/compendium/spells/antilife-shell.md),\
    \ [flame strike](/compendium/spells/flame-strike.md)\n\n6th level (1 6th-level\
    \ slots): [blade barrier](/compendium/spells/blade-barrier.md)\n\n7th level\
    \ (1 7th-level slots): [divine word](/compendium/spells/divine-word.md)\n\n\
    8th level (1 8th-level slots): [holy aura](/compendium/spells/holy-aura.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viconia wears a belt of fire giant strength and a cloak of protection and\
    \ wields a mace +3. Without the belt, her strength is 12 and her speed is reduced\
    \ to 20 ft."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viconia has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Viconia to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, Viconia has resistance to damage that isn't\
    \ force, psychic, or radiant."
  "name": "Living Shadow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Viconia has disadvantage on attack rolls, as well as\
    \ on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viconia attacks with her Mace +3 and casts a spell."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 13 (1d6\
    \ + 10) bludgeoning damage plus 9 (2d8) necrotic damage."
  "name": "Mace, +3"
"source":
- "MaBJoV"
"image": "[[Viconia DeVir.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 126*

## Description

> [!quote]- A quote from MINSC & BOO!  
> 
> Me and Boo can attest that Viconia never helped us write the chapter about Ust Natha.

Viconia DeVir is an exiled drow cleric in the service of Shar, goddess of darkness and loss. Once a loyal priestess of Lolth in the great drow city of Menzoberranzan, Viconia and House DeVir first lost the Spider Queen's favor when she refused to sacrifice an infant, an act she saw as pointless. In a desperate attempt to appease Lolth, her own mother arranged for Viconia to be sacrificed herself. She was saved by her devoted brother, Valas, who freed her and slew their mother in the process. For this crime, Valas was transformed into a drider, a monstrous centaur-like creature with a drow torso grafted onto the body of an immense spider. These events contributed to the once great House DeVir's destruction at the hands of House Do'Urden nearly a century ago.

Viconia fled Menzoberranzan and soon left the Underdark altogether to evade retribution from Lolth's minions. Stripped of most of her spellcasting abilities, she eventually found solace and newfound power in the worship of Shar, an ancient deity outside the Dark Seldarine. Like Lolth, Shar is a cruel goddess who values strength and duplicity.

Viconia has now lived apart from drow society for almost a century. During that time, she traveled with the Bhaalspawn Abdel Adrian, but eventually their relationship soured. In recent years, Shar has directed her to work with elemental cults that worship the Elder Elemental Eye. Viconia has faithfully carried out her goddesses wishes, which has often put her into conflict with surface organizations such as the Lord's Alliance or the Harpers.

When not working with cults of elemental evil, Viconia travels the Underdark looking for fellow outcasts. She has put together a motely band including a pair of driders named Cackle and Backle and a deep spider that she has raised since she saved it from being eaten by its mother. She also rides an achaierai that lost the rest of its flock to a war band of dwarves.