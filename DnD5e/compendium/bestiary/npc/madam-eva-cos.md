---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Madam Eva"]
statblock: true
"name": "Madam Eva"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "10"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"stats":
- !!int "8"
- !!int "11"
- !!int "12"
- !!int "17"
- !!int "20"
- !!int "18"
"speed": "walk 20 ft."
"saves":
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "8"
  "Deception": !!int "8"
  "Religion": !!int "7"
  "Insight": !!int "13"
  "Perception": !!int "9"
  "Arcana": !!int "7"
"senses": "passive Perception 19"
"languages": "Abyssal, Common, Elvish, Infernal"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Madam Eva is a 16th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 17, +9 to hit with spell attacks). Madam Eva has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [mending](/compendium/spells/mending.md), [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [bane](/compendium/spells/bane.md), [command](/compendium/spells/command.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [protection\
    \ from evil and good](/compendium/spells/protection-from-evil-and-good.md)\n\n\
    2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [protection from poison](/compendium/spells/protection-from-poison.md), [spiritual\
    \ weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (3 3rd-level\
    \ slots): [create food and water](/compendium/spells/create-food-and-water.md),\
    \ [speak with dead](/compendium/spells/speak-with-dead.md), [spirit guardians](/compendium/spells/spirit-guardians.md)\n\
    \n4th level (3 4th-level slots): [divination](/compendium/spells/divination.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [guardian\
    \ of faith](/compendium/spells/guardian-of-faith.md)\n\n5th level (2 5th-level\
    \ slots): [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [raise dead](/compendium/spells/raise-dead.md)\n\n6th level (1 6th-level slots):\
    \ [find the path](/compendium/spells/find-the-path.md), [harm](/compendium/spells/harm.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)\n\n7th level (1 7th-level\
    \ slots): [fire storm](/compendium/spells/fire-storm.md), [regenerate](/compendium/spells/regenerate.md)\n\
    \n8th level (1 8th-level slots): [earthquake](/compendium/spells/earthquake.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Madam Eva targets one creature that she can see within 30 feet of her.\
    \ The target must succeed on a DC 17 Wisdom saving throw or be cursed. While cursed,\
    \ the target is [blinded](/rules/conditions.md#blinded) and [deafened](/rules/conditions.md#deafened).\
    \ The curse lasts until ended with a [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell, a [remove curse](/compendium/spells/remove-curse.md) spell, or similar\
    \ magic. When the curse ends, Madam Eva takes 5d6 psychic damage."
  "name": "Curse (Recharges after a Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Madam Eva targets one creature that she can see within 10 feet of her and\
    \ casts one of the following spells on the target (save DC 17), requiring neither\
    \ somatic nor material components to do so: [animal friendship](/compendium/spells/animal-friendship.md),\
    \ [charm person](/compendium/spells/charm-person.md), or [hold person](/compendium/spells/hold-person.md).\
    \ If the target succeeds on the initial saving throw, Madam Eva is [blinded](/rules/conditions.md#blinded)\
    \ until the end of her next turn. Once a target succeeds on a saving throw against\
    \ this effect, it is immune to the Evil Eye power of all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
name: Madam Eva
image: "[[Madam Eva.png]]"
---

# Madam Eva

```statblock
"name": "Madam Eva"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "10"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"stats":
- !!int "8"
- !!int "11"
- !!int "12"
- !!int "17"
- !!int "20"
- !!int "18"
"speed": "walk 20 ft."
"saves":
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "8"
  "Deception": !!int "8"
  "Religion": !!int "7"
  "Insight": !!int "13"
  "Perception": !!int "9"
  "Arcana": !!int "7"
"senses": "passive Perception 19"
"languages": "Abyssal, Common, Elvish, Infernal"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Madam Eva is a 16th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 17, +9 to hit with spell attacks). Madam Eva has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [mending](/compendium/spells/mending.md), [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [bane](/compendium/spells/bane.md), [command](/compendium/spells/command.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [protection\
    \ from evil and good](/compendium/spells/protection-from-evil-and-good.md)\n\n\
    2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [protection from poison](/compendium/spells/protection-from-poison.md), [spiritual\
    \ weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (3 3rd-level\
    \ slots): [create food and water](/compendium/spells/create-food-and-water.md),\
    \ [speak with dead](/compendium/spells/speak-with-dead.md), [spirit guardians](/compendium/spells/spirit-guardians.md)\n\
    \n4th level (3 4th-level slots): [divination](/compendium/spells/divination.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [guardian\
    \ of faith](/compendium/spells/guardian-of-faith.md)\n\n5th level (2 5th-level\
    \ slots): [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [raise dead](/compendium/spells/raise-dead.md)\n\n6th level (1 6th-level slots):\
    \ [find the path](/compendium/spells/find-the-path.md), [harm](/compendium/spells/harm.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)\n\n7th level (1 7th-level\
    \ slots): [fire storm](/compendium/spells/fire-storm.md), [regenerate](/compendium/spells/regenerate.md)\n\
    \n8th level (1 8th-level slots): [earthquake](/compendium/spells/earthquake.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Madam Eva targets one creature that she can see within 30 feet of her.\
    \ The target must succeed on a DC 17 Wisdom saving throw or be cursed. While cursed,\
    \ the target is [blinded](/rules/conditions.md#blinded) and [deafened](/rules/conditions.md#deafened).\
    \ The curse lasts until ended with a [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell, a [remove curse](/compendium/spells/remove-curse.md) spell, or similar\
    \ magic. When the curse ends, Madam Eva takes 5d6 psychic damage."
  "name": "Curse (Recharges after a Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Madam Eva targets one creature that she can see within 10 feet of her and\
    \ casts one of the following spells on the target (save DC 17), requiring neither\
    \ somatic nor material components to do so: [animal friendship](/compendium/spells/animal-friendship.md),\
    \ [charm person](/compendium/spells/charm-person.md), or [hold person](/compendium/spells/hold-person.md).\
    \ If the target succeeds on the initial saving throw, Madam Eva is [blinded](/rules/conditions.md#blinded)\
    \ until the end of her next turn. Once a target succeeds on a saving throw against\
    \ this effect, it is immune to the Evil Eye power of all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "[[Madam Eva.png]]"
```
^statblock

*Source: Curse of Strahd p. 233*

## Description

The fortune-teller Madam Eva lives among the Vistani but isn't truly one of them. She appears to be in her seventies, but she is, in fact, much older.

**Royal Blood.** Madam Eva is Strahd's half-sister, though Strahd is unaware of this fact. Her real name is Katarina, and she is the daughter of a Vistani woman whom King Barov, Strahd's father, took to his bed during one of his many crusades. Madam Eva knows she is Strahd's half-sister but has told no one of the royal blood flowing through her veins.

**Mother Night.** Over four hundred years ago, Katarina came to Barovia and insinuated herself into Strahd's court, working as a maid in Castle Ravenloft. She came to know the castle like the back of her hand, and she was present for the wedding of Sergei and Tatyana. After Strahd went mad and murdered his brother, she fled the castle and took refuge with the Vistani. Later, she forged a pact with the goddess Mother Night, trading her youth for the power to undo the evil that Strahd had wrought. Mother Night transformed Katarina into an ageless crone gifted with the power of magical foresight. In the guise of Madam Eva, she uses this ability to help Strahd. She can send her Vistani out in their wagons to visit other worlds and bring adventurers to Strahd's domain, in hopes that they will find a way to destroy the vampire or set Strahd free.

**For the Love of Strahd.** The Dark Powers of Ravenloft would consider Madam Eva a worthy choice to replace Strahd as the master of Ravenloft, but she has all the power she desires and doesn't seek to supplant him. She would rather help Strahd find someone else to succeed him, although she has grave doubts about her ability to locate such an individual.

None of Madam Eva's Vistani kin know her true identity or purpose. They puzzle over her desire to remain in Barovia.

**Madam Eva's Traits.** **Ideal.** "I wish Strahd to be free of his curse."

**Bond.** "The Vistani are my people now."

**Flaw.** "The people whose fates I divine aren't important. They are but the means to an end."