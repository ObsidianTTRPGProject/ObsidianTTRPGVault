---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Pelyious Avhoste"]
statblock: true
"name": "Pelyious Avhoste"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "17"
- !!int "11"
- !!int "13"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Strength": !!int "8"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "8"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical weapons\
  \ that aren't silvered"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "Abyssal, Common, Draconic"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pelyious is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 15, +7 to hit with spell attacks). Pelyious has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
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
  "desc": "Pelyious can use his action to polymorph into a crocodile-humanoid hybrid,\
    \ or back into his true form, which is humanoid. His statistics are the same in\
    \ each form. Any equipment he is wearing or carrying isn't transformed. He reverts\
    \ to his true form if he dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pelyious can hold his breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In humanoid form, Pelyious makes two scimitar attacks or two hand crossbow\
    \ attacks. In hybrid form, he can substitute one scimitar attack for a bite attack."
  "name": "Multiattack (Humanoid or Hybrid Form)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage. The target is [grappled](/rules/conditions.md#grappled),\
    \ escape DC 16 until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Pelyious can't bite another target."
  "name": "Bite (Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 30/90 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage plus 7 (2d6) poison damage."
  "name": "Hand Crossbow (Humanoid or Hybrid Form)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage plus 7 (2d6) poison damage."
  "name": "Scimitar (Humanoid or Hybrid Form)"
"source":
- "MaBJoV"
name: Pelyious Avhoste
image: "[[Pelyious Avhoste.png]]"
---

# Pelyious Avhoste

```statblock
"name": "Pelyious Avhoste"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "17"
- !!int "11"
- !!int "13"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Strength": !!int "8"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "8"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical weapons\
  \ that aren't silvered"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "Abyssal, Common, Draconic"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pelyious is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 15, +7 to hit with spell attacks). Pelyious has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
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
  "desc": "Pelyious can use his action to polymorph into a crocodile-humanoid hybrid,\
    \ or back into his true form, which is humanoid. His statistics are the same in\
    \ each form. Any equipment he is wearing or carrying isn't transformed. He reverts\
    \ to his true form if he dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pelyious can hold his breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In humanoid form, Pelyious makes two scimitar attacks or two hand crossbow\
    \ attacks. In hybrid form, he can substitute one scimitar attack for a bite attack."
  "name": "Multiattack (Humanoid or Hybrid Form)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage. The target is [grappled](/rules/conditions.md#grappled),\
    \ escape DC 16 until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Pelyious can't bite another target."
  "name": "Bite (Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 30/90 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage plus 7 (2d6) poison damage."
  "name": "Hand Crossbow (Humanoid or Hybrid Form)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage plus 7 (2d6) poison damage."
  "name": "Scimitar (Humanoid or Hybrid Form)"
"source":
- "MaBJoV"
"image": "[[Pelyious Avhoste.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 120*

## Description

Pelyious is a Halruaan sky captain who hires out his services to those with a desperate need to get somewhere quickly. His skyship is one of the fastest in all Faerûn, designed by his uncle, Zythan Oolorius Avhoste, the famed Halruaan designer.

Charismatic, cultured and sophisticated, Pelyious is a lover of ancient art and music. He professes an admiration for the extinct Netherese—precursors to the Halruaan people—and the ancient kingdom of Mezro. His skyship is decorated with artifacts and paintings from these cultures, and he enjoys showing off his impressive collection to his guests. He is also an excellent musician and delights in playing complex compositions from the "lost ages" that haven't been heard in centuries.

Though a bit pretentious, Pelyious is unfailingly courteous and polite. He has utter disdain for those who do not share his refinement, viewing them as barbarous, rude, or just plain uncouth.

Pelyious is a skilled ship captain and an excellent swordsman. He has also been mentored in the magical arts by his uncle Zythan. This combination of skills makes him an unpredictable and dangerous opponent; someone who can engage in close melee combat or use magical spells from range.

However, unbeknown to most, Pelyious and his crew are also faithful servants of Bhaal, the God of Murder. Beneath his cultured veneer lurks a bloodthirsty monster (a lycanthropic form he learned through an ancient Mezro ritual), and he occasionally plans "murder rituals" where he turns his entire Halruaan skyship into a slaughterhouse. Victims in these massacres are not merely killed, but often tortured, mutilated, and eventually skinned. While most of the remains are tossed over the side of the airship when it crosses the oceans, the hearts and other vital organs of his victims are used for ritual feasts to celebrate the slaughter.

Pelyious prefers to reserve these ritual killing sprees for those that have insulted him, tried to cheat him, or offended his honor in some manner. However, if no suitable candidates have made themselves available, Pelyious sometimes has to settle on victims that he genuinely likes, for the Lord of Murder can only wait so long for his sacrifices. Pelyious shows no remorse when forced to slaughter those he considers friends, as his devotion to Bhaal supersedes all other loyalties.

Pelyious crews his airship with a family of wolfweres. Most stay in their human forms when there are passengers on board, though the alpha, who is also the wife of Pelyious, likes to take the role of a wolf that Pelyious has tamed.