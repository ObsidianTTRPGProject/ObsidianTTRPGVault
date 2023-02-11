---
cssclass: json5e-monster
tags:
- compendium/src/sdw
- monster/size/huge
- monster/type/dragon
aliases: ["Lhammaruntosz"]
statblock: true
"name": "Lhammaruntosz"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "212"
"hit_dice": "17d12 + 102"
"stats":
- !!int "25"
- !!int "10"
- !!int "23"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "7"
  "Perception": !!int "12"
"damage_immunities": "lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz's spellcasting ability is Charisma (spell save DC 17). She\
    \ can innately cast the following spells, requiring no material components:\n\n\
    1/day each: [create food and water](/compendium/spells/create-food-and-water.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [speak with animals](/compendium/spells/speak-with-animals.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz is an 8th-level spellcaster. Her spellcasting ability is\
    \ Charisma (spell save DC 17; +9 to hit with spell attacks). She has the following\
    \ sorcerer spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [mending](/compendium/spells/mending.md)\n\
    \n1st level (4 1st-level slots): [charm person](/compendium/spells/charm-person.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [expeditious retreat](/compendium/spells/expeditious-retreat.md),\
    \ [sleep](/compendium/spells/sleep.md)\n\n2nd level (3 2nd-level slots): [darkness](/compendium/spells/darkness.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [protection from energy](/compendium/spells/protection-from-energy.md)\n\n4th\
    \ level (2 4th-level slots): [dimension door](/compendium/spells/dimension-door.md),\
    \ [stoneskin](/compendium/spells/stoneskin.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Lhammaruntosz fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz regains 5 hit points at the start of her turn."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz can use her Frightful Presence. She then makes three attacks:\
    \ one with her bite and two with her claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Lhammaruntosz's choice that is within 120 feet of her\
    \ and aware of her must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Lhammaruntosz's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz uses one of the following breath weapons."
  "name": "Breath Weapons (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz exhales lightning in a 90- foot line that is 5 feet wide.\
    \ Each creature in that line must make a DC 19 Dexterity saving throw, taking\
    \ 66 (12d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz exhales repulsion energy in a 30-foot cone. Each creature\
    \ in that area must succeed on a DC 19 Strength saving throw. On a failed save,\
    \ the creature is pushed 60 feet away from the dragon."
  "name": "Repulsion Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz magically polymorphs into a humanoid or beast that has a\
    \ challenge rating no higher than her own, or back into her true form. She reverts\
    \ to her true form if she dies. Any equipment she is wearing or carrying is absorbed\
    \ or borne by the new form (Lhammaruntosz's choice).\n\nIn a new form, Lhammaruntosz\
    \ retains her alignment, hit points, Hit Dice, ability to speak, proficiencies,\
    \ Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores,\
    \ as well as this action. Her statistics and capabilities are otherwise replaced\
    \ by those of the new form, except any class features or legendary actions of\
    \ that form."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz makes a Wisdom (Perception) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz beats its wings. Each creature within 10 feet of Lhammaruntosz\
    \ must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). Lhammaruntosz can\
    \ then fly up to half her flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "SDW"
name: Lhammaruntosz
image: "[[Lhammaruntosz.png]]"
---

# Lhammaruntosz

```statblock
"name": "Lhammaruntosz"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "212"
"hit_dice": "17d12 + 102"
"stats":
- !!int "25"
- !!int "10"
- !!int "23"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "7"
  "Perception": !!int "12"
"damage_immunities": "lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz's spellcasting ability is Charisma (spell save DC 17). She\
    \ can innately cast the following spells, requiring no material components:\n\n\
    1/day each: [create food and water](/compendium/spells/create-food-and-water.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [speak with animals](/compendium/spells/speak-with-animals.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz is an 8th-level spellcaster. Her spellcasting ability is\
    \ Charisma (spell save DC 17; +9 to hit with spell attacks). She has the following\
    \ sorcerer spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [mending](/compendium/spells/mending.md)\n\
    \n1st level (4 1st-level slots): [charm person](/compendium/spells/charm-person.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [expeditious retreat](/compendium/spells/expeditious-retreat.md),\
    \ [sleep](/compendium/spells/sleep.md)\n\n2nd level (3 2nd-level slots): [darkness](/compendium/spells/darkness.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [protection from energy](/compendium/spells/protection-from-energy.md)\n\n4th\
    \ level (2 4th-level slots): [dimension door](/compendium/spells/dimension-door.md),\
    \ [stoneskin](/compendium/spells/stoneskin.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Lhammaruntosz fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz regains 5 hit points at the start of her turn."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz can use her Frightful Presence. She then makes three attacks:\
    \ one with her bite and two with her claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Lhammaruntosz's choice that is within 120 feet of her\
    \ and aware of her must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Lhammaruntosz's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz uses one of the following breath weapons."
  "name": "Breath Weapons (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz exhales lightning in a 90- foot line that is 5 feet wide.\
    \ Each creature in that line must make a DC 19 Dexterity saving throw, taking\
    \ 66 (12d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz exhales repulsion energy in a 30-foot cone. Each creature\
    \ in that area must succeed on a DC 19 Strength saving throw. On a failed save,\
    \ the creature is pushed 60 feet away from the dragon."
  "name": "Repulsion Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz magically polymorphs into a humanoid or beast that has a\
    \ challenge rating no higher than her own, or back into her true form. She reverts\
    \ to her true form if she dies. Any equipment she is wearing or carrying is absorbed\
    \ or borne by the new form (Lhammaruntosz's choice).\n\nIn a new form, Lhammaruntosz\
    \ retains her alignment, hit points, Hit Dice, ability to speak, proficiencies,\
    \ Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores,\
    \ as well as this action. Her statistics and capabilities are otherwise replaced\
    \ by those of the new form, except any class features or legendary actions of\
    \ that form."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz makes a Wisdom (Perception) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lhammaruntosz beats its wings. Each creature within 10 feet of Lhammaruntosz\
    \ must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). Lhammaruntosz can\
    \ then fly up to half her flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "SDW"
"image": "[[Lhammaruntosz.png]]"
```
^statblock

*Source: Sleeping Dragon's Wake*

## Description

Lhammaruntosz, a bronze dragon with the ability to heal quickly, spent decades defending Leilon and the surrounding area as the captain of the Scaly Eye, a fleet that battled pirates and other threats. To honor her deeds, the Swords of Leilon constructed the Bronze Shrine, a massive temple to Bahamut, god of metallic dragons, in a cliff overlooking the sea. The shrine's face is carved in Lhammaruntosz's likeness and includes quarters for the rest of the Scaly Eye and a magic statue of Bahamut, which the dragon can use to commune with the deity.

In recent decades Lhammaruntosz has retreated inside the shrine, becoming reclusive due to a attack by a disguised demon which has driven her mad. She leaves on rare occasions to hunt for food, returning as soon as possible. Members of the Scaly Eye still live within the Bronze Shrine, as Lhammaruntosz has ordered them to stay on as her guardians.