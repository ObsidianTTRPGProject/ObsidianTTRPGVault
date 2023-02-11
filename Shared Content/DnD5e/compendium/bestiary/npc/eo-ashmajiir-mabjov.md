---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/tiefling
aliases: ["Eo Ashmajiir"]
statblock: true
"name": "Eo Ashmajiir"
"size": "Medium"
"type": "humanoid"
"subtype": "tiefling"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "81"
"hit_dice": "18d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "20"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "9"
  "Constitution": !!int "4"
"skillsaves":
  "Deception": !!int "9"
  "Arcana": !!int "9"
  "Persuasion": !!int "9"
"damage_resistances": "lightning"
"senses": "passive Perception 12"
"languages": "Abyssal, Celestial, Common, Draconic, Infernal, Undercommon"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eo Ashmajiir is an 18th-level spellcaster. Her spellcasting ability is\
    \ Charisma (spell save DC 17, +9 to hit with spell attacks). Eo can cast the following\
    \ spells:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [chromatic orb](/compendium/spells/chromatic-orb.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [mirror image](/compendium/spells/mirror-image.md),\
    \ [misty step](/compendium/spells/misty-step.md)\n\n3rd level (3 3rd-level slots):\
    \ [counterspell](/compendium/spells/counterspell.md), [fireball](/compendium/spells/fireball.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md)\n\n4th level (3 4th-level\
    \ slots): [banishment](/compendium/spells/banishment.md), [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (3 5th-level slots):\
    \ [dominate person](/compendium/spells/dominate-person.md), [scrying](/compendium/spells/scrying.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)\n\n6th level (1 6th-level\
    \ slots): [chain lightning](/compendium/spells/chain-lightning.md), [disintegrate](/compendium/spells/disintegrate.md)\n\
    \n7th level (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [teleport](/compendium/spells/teleport.md)\n\n8th level (1 8th-level slots):\
    \ [power word stun](/compendium/spells/power-word-stun.md)\n\n9th level (1\
    \ 9th-level slots): [wish](/compendium/spells/wish.md)\n Eo can cast these\
    \ spells with the Twinned Spell action.\n\n Eo uses Wish to ensure she has a\
    \ simulacrum of herself at all times."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Eo Ashmajiir casts a spell that deals lightning damage, that spell\
    \ deals an additional 5 damage. When Eo casts a spell that deals a type of damage\
    \ from the following list, she can change that damage type to lightning: acid,\
    \ cold, fire, poison, thunder."
  "name": "Lightning Affinity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eo Ashmajiir casts a spell from her spell list that targets only one creature\
    \ and doesn't have a range of self. This spell targets a second creature in range.\
    \ Eo cannot use this action in conjunction with her Lightning Affinity ability."
  "name": "Twinned Spell"
"source":
- "MaBJoV"
name: Eo Ashmajiir
image: "[[Eo Ashmajiir.png]]"
---

# Eo Ashmajiir

```statblock
"name": "Eo Ashmajiir"
"size": "Medium"
"type": "humanoid"
"subtype": "tiefling"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "81"
"hit_dice": "18d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "20"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "9"
  "Constitution": !!int "4"
"skillsaves":
  "Deception": !!int "9"
  "Arcana": !!int "9"
  "Persuasion": !!int "9"
"damage_resistances": "lightning"
"senses": "passive Perception 12"
"languages": "Abyssal, Celestial, Common, Draconic, Infernal, Undercommon"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eo Ashmajiir is an 18th-level spellcaster. Her spellcasting ability is\
    \ Charisma (spell save DC 17, +9 to hit with spell attacks). Eo can cast the following\
    \ spells:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [chromatic orb](/compendium/spells/chromatic-orb.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [mirror image](/compendium/spells/mirror-image.md),\
    \ [misty step](/compendium/spells/misty-step.md)\n\n3rd level (3 3rd-level slots):\
    \ [counterspell](/compendium/spells/counterspell.md), [fireball](/compendium/spells/fireball.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md)\n\n4th level (3 4th-level\
    \ slots): [banishment](/compendium/spells/banishment.md), [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (3 5th-level slots):\
    \ [dominate person](/compendium/spells/dominate-person.md), [scrying](/compendium/spells/scrying.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)\n\n6th level (1 6th-level\
    \ slots): [chain lightning](/compendium/spells/chain-lightning.md), [disintegrate](/compendium/spells/disintegrate.md)\n\
    \n7th level (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [teleport](/compendium/spells/teleport.md)\n\n8th level (1 8th-level slots):\
    \ [power word stun](/compendium/spells/power-word-stun.md)\n\n9th level (1\
    \ 9th-level slots): [wish](/compendium/spells/wish.md)\n Eo can cast these\
    \ spells with the Twinned Spell action.\n\n Eo uses Wish to ensure she has a\
    \ simulacrum of herself at all times."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Eo Ashmajiir casts a spell that deals lightning damage, that spell\
    \ deals an additional 5 damage. When Eo casts a spell that deals a type of damage\
    \ from the following list, she can change that damage type to lightning: acid,\
    \ cold, fire, poison, thunder."
  "name": "Lightning Affinity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eo Ashmajiir casts a spell from her spell list that targets only one creature\
    \ and doesn't have a range of self. This spell targets a second creature in range.\
    \ Eo cannot use this action in conjunction with her Lightning Affinity ability."
  "name": "Twinned Spell"
"source":
- "MaBJoV"
"image": "[[Eo Ashmajiir.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 116*

## Description

Born from the experiments of Belic Haphrat, a Red Wizard from the lands of Thay, Eo is a powerful tiefling sorceress. The offspring of a half-dragon and a succubus, Eo was raised by Belic as his own child, and showed an early affinity for magical gifts. As she grew older, Eo became increasingly useful to the Haphrat's families plans and schemes, eventually becoming a key cog in their complex machinations. Only then did Belic realize his daughter had been carefully manipulating him her entire life, working herself into a position of power and influence in his affairs so she could betray him. By then, however, it was too late, and Eo used her power to take control of Belic's mind, his family, and his wealth before ultimately discarding her adopted father when he ceased to be useful.

Eo is obsessed with her lineage, believing her bloodline makes her inherently superior to other beings. Her infatuation with her kinfolk—demons, devils, and dragons—has led her to walk the Nine Hells, playing dice games with demon lords and signing contracts with archdevils. She has sought audience with dragons of all kinds, including several of the most ancient wyrms in all of Faerûn. There are even rumors she possess a dragon orb, one of the most rare and powerful magical items.

The other driving influence in her life is the unbridled pursuit of hedonistic pleasure. Eo believes that the promise of the afterlife is a conspiracy by the gods to trick mortals into living lives of conformity, preparing them to be consigned to an eternity of sheer boredom after they die. In this way, Eo believes, the status quo of the Heavens and the Hells can be more easily maintained. Eo rebels against this status quo by pursuing earthly pleasures in all their forms, regardless of the long-term costs. She lives almost exclusively in the moment, relying on her wealth, fame, and privilege to protect her against any serious consequences of her actions.

Eo is a narcissist of the highest order, desiring attention, adulation, and unbridled praise at all times. Eager to be recognized as the most beautiful and the most powerful woman in history, she has spent much of her ill-gotten Thayvian fortune in a campaign to be elected Duke of Baldur's Gate. In her pursuit of political power, she continually tries to buy the love and loyalty of the populace with extravagant festivals where wine and illicit drugs are freely available in virtually unlimited quantities. While winning many of the ordinary citizens to her side, these public orgies have put her at odds with the reigning political establishment and various religious figures championing a more traditional morality.

Eo's only weakness is her children. Her son, Aeshma, has gone missing recently. Rumor has it that Eo gambled his soul away in a drunken game of cards with some fiendish lord, though there is no proof as to his fate. Whatever the truth may be, one thing is certain—Eo is desperate to find him... though whether for his sake or simply to protect her own reputation is up for debate.