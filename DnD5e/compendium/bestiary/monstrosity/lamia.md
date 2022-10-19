---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/monstrosity
- monster/environment/desert
aliases: ["Lamia"]
statblock: true
"name": "Lamia"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "97"
"hit_dice": "13d10 + 26"
"stats":
- !!int "16"
- !!int "13"
- !!int "15"
- !!int "14"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "7"
  "Stealth": !!int "3"
  "Insight": !!int "4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lamia's innate spellcasting ability is Charisma (spell save DC 13).\
    \ It can innately cast the following spells, requiring no material components.\n\
    \nAt will: [disguise self](/compendium/spells/disguise-self.md) (any humanoid\
    \ form), [major image](/compendium/spells/major-image.md)\n\n1/day: [geas](/compendium/spells/geas.md)\n\
    \n3/day each: [charm person](/compendium/spells/charm-person.md), [mirror\
    \ image](/compendium/spells/mirror-image.md), [scrying](/compendium/spells/scrying.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lamia makes two attacks: one with its claws and one with its dagger\
    \ or Intoxicating Touch."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10\
    \ + 3) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: The target\
    \ is magically cursed for 1 hour. Until the curse ends, the target has disadvantage\
    \ on Wisdom saving throws and all ability checks."
  "name": "Intoxicating Touch"
"source":
- "MM"
- "GoS"
- "MOT"
- "CM"
- "WBtW"
name: Lamia
image: "[[Lamia.png]]"
---

# Lamia

```statblock
"name": "Lamia"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "97"
"hit_dice": "13d10 + 26"
"stats":
- !!int "16"
- !!int "13"
- !!int "15"
- !!int "14"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "7"
  "Stealth": !!int "3"
  "Insight": !!int "4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lamia's innate spellcasting ability is Charisma (spell save DC 13).\
    \ It can innately cast the following spells, requiring no material components.\n\
    \nAt will: [disguise self](/compendium/spells/disguise-self.md) (any humanoid\
    \ form), [major image](/compendium/spells/major-image.md)\n\n1/day: [geas](/compendium/spells/geas.md)\n\
    \n3/day each: [charm person](/compendium/spells/charm-person.md), [mirror\
    \ image](/compendium/spells/mirror-image.md), [scrying](/compendium/spells/scrying.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lamia makes two attacks: one with its claws and one with its dagger\
    \ or Intoxicating Touch."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10\
    \ + 3) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: The target\
    \ is magically cursed for 1 hour. Until the curse ends, the target has disadvantage\
    \ on Wisdom saving throws and all ability checks."
  "name": "Intoxicating Touch"
"source":
- "MM"
- "GoS"
- "MOT"
- "CM"
- "WBtW"
"image": "[[Lamia.png]]"
```
^statblock

*Source: Monster Manual p. 201, Ghosts of Saltmarsh, Mythic Odysseys of Theros, Candlekeep Mysteries, The Wild Beyond the Witchlight*

## Description

Ruined desert cities and the tombs of forgotten monarchs make perfect lairs for the wicked lamias. These decadent monsters take what has been forgotten and make it the seat of their hedonistic rule, surrounding themselves with sycophants. Lamias rely on [jackalweres](/compendium/bestiary/humanoid/jackalwere.md) to perform various tasks, sending them across the wastes to capture slaves or steal treasures from caravans, encampments, or villages, concealed by the lamia's magic as they attack.

A lamia has a beautiful humanoid upper body that merges into a powerful four-legged leonine form. Its vicious black claws speak to its predatory nature, as does its hunger for torture and humanoid flesh.

**Tyrants of Pleasure.** Lamias adorn their crumbling havens with finery stolen from passing caravans, then use magic to further accentuate their lairs, masking decay with illusion. A lair's breathtaking gardens, finely decorated apartments, and numerous slaves seem at odds with its remoteness and state of ruin.

Using its intoxicating touch, a lamia weakens the minds of its enemies, making them more susceptible to its enchantment spells and turning them into its slaves. Those it beguiles with [geas](/compendium/spells/geas.md) spells are pitted against each other in elaborate contests for the lamia's amusement.

**Vain Predators.** Always anxious to gain more wealth and slaves, a lamia uses a pool of water or a mirror in conjunction with a [scrying](/compendium/spells/scrying.md) spell to view its domain. A lamia uses this power to watch over trade routes and nearby settlements, or to seek out objects and creatures it fancies.

Lamias are particularly fond of seeking out adventurers with pure hearts to seduce and corrupt to evil, savoring the destruction of their virtue. They use their magic to lure potential victims to their lairs, relying on illusion and their thralls to capture hapless foes. Lamias prize beauty and strength above all else, however. Any prisoner that falls short of their esteem becomes the main course in a horrible feast, or is set free to die while wandering the wastes.

As long as they have slaves to face their enemies, lamias fight from the fringes, beguiling foes with magic if they can. A lamia pressed into melee never stays there for long, shredding flesh with claw and dagger before springing away to safety.

**Minions of Graz'zt.** The demon lord Graz'zt creates lamias from his mortal servants, granting them immortality in return for monstrous power and an oath of fealty. Graz'zt sometimes tasks lamias with guarding locations important to him, but lamias in his service remain free to spread their evil as they see fit.

## Environment

desert