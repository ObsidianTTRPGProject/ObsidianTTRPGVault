---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/gargantuan
- monster/type/dragon
- monster/environment/hill
aliases: ["Burney the Barber"]
statblock: true
"name": "Burney the Barber"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "21"
"hp": !!int "350"
"hit_dice": "20d20 + 140"
"stats":
- !!int "27"
- !!int "12"
- !!int "25"
- !!int "20"
- !!int "17"
- !!int "19"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "8"
  "Wisdom": !!int "10"
  "Constitution": !!int "14"
"skillsaves":
  "Deception": !!int "11"
  "Stealth": !!int "8"
  "Perception": !!int "17"
"damage_immunities": "acid"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Burney fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney has the benefits of the [healer](/compendium/feats/healer.md) feat\
    \ as well as proficiency with both the [healer's kit](/compendium/items/healers-kit.md)\
    \ and the [herbalism kit](/compendium/items/herbalism-kit.md)."
  "name": "Healer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney has received several blessings in her service to Bahamut:\n\n- Unless\
    \ Burney decided otherwise, once any creature less powerful than a deity has taken\
    \ three steps from her, they can no longer remember her or having interacted with\
    \ her specifically.\n- Burney is under the effect of a permanent [mind blank](/compendium/spells/mind-blank.md)\
    \ spell, and cannot be detected by magical or mundane means unless she wishes\
    \ it. In exchange for this blessing, Burney can take no direct action against\
    \ the denizens of the Nine Hells, though she can certainly enlist the help of\
    \ those who can.\n- Burney always knows the location of the Wandering Emporium\
    \ and can transport herself there as though by a [word of recall](/compendium/spells/word-of-recall.md)\
    \ spell. This explains why Burney simply seems to appear amid the fully deployed\
    \ marketplace each morning it is active to provide service and tell stories.\n\
    - Once each day, when Burney so desires, she can instantly transport herself to\
    \ the court of Bahamut via a powerful blessing akin to the [plane shift](/compendium/spells/plane-shift.md)\
    \ spell."
  "name": "Bahamut's Blessings"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney can use its Frightful Presence. It then makes three attacks: one\
    \ with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Burney's choice that is within 120 feet of Burney and\
    \ aware of it must succeed on a DC 19 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Burney's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney uses one of the following breath weapons.\n\n- Acid Breath.\
    \ Burney exhales acid in a 90-foot line that is 10 feet wide. Each creature in\
    \ that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage\
    \ on a failed save, or half as much damage on a successful one.\n- Slowing Breath.\
    \ Burney exhales gas in a 90-foot cone. Each creature in that area must succeed\
    \ on a DC 22 Constitution saving throw. On a failed save, the creature can't use\
    \ reactions, its speed is halved, and it can't make more than one attack on its\
    \ turn. In addition, the creature can use either an action or a bonus action on\
    \ its turn, but not both. These effects last for 1 minute. The creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ with a successful save."
  "name": "Breath Weapons (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney magically polymorphs into a humanoid or beast that has a challenge\
    \ rating no higher than its own, or back into its true form. It reverts to its\
    \ true form if it dies. Any equipment it is wearing or carrying is absorbed or\
    \ borne by the new form (Burney's choice).\n\nIn a new form, Burney retains its\
    \ alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary\
    \ Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as\
    \ well as this action. Its statistics and capabilities are otherwise replaced\
    \ by those of the new form, except any class features or legendary actions of\
    \ that form."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney beats its wings. Each creature within 15 feet of Burney must succeed\
    \ on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and\
    \ be knocked [prone](/rules/conditions.md#prone). Burney can then fly up to half\
    \ its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "BGDIA"
name: Burney the Barber
image: "[[Burney the Barber.png]]"
---

# Burney the Barber

```statblock
"name": "Burney the Barber"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "21"
"hp": !!int "350"
"hit_dice": "20d20 + 140"
"stats":
- !!int "27"
- !!int "12"
- !!int "25"
- !!int "20"
- !!int "17"
- !!int "19"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "8"
  "Wisdom": !!int "10"
  "Constitution": !!int "14"
"skillsaves":
  "Deception": !!int "11"
  "Stealth": !!int "8"
  "Perception": !!int "17"
"damage_immunities": "acid"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Burney fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney has the benefits of the [healer](/compendium/feats/healer.md) feat\
    \ as well as proficiency with both the [healer's kit](/compendium/items/healers-kit.md)\
    \ and the [herbalism kit](/compendium/items/herbalism-kit.md)."
  "name": "Healer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney has received several blessings in her service to Bahamut:\n\n- Unless\
    \ Burney decided otherwise, once any creature less powerful than a deity has taken\
    \ three steps from her, they can no longer remember her or having interacted with\
    \ her specifically.\n- Burney is under the effect of a permanent [mind blank](/compendium/spells/mind-blank.md)\
    \ spell, and cannot be detected by magical or mundane means unless she wishes\
    \ it. In exchange for this blessing, Burney can take no direct action against\
    \ the denizens of the Nine Hells, though she can certainly enlist the help of\
    \ those who can.\n- Burney always knows the location of the Wandering Emporium\
    \ and can transport herself there as though by a [word of recall](/compendium/spells/word-of-recall.md)\
    \ spell. This explains why Burney simply seems to appear amid the fully deployed\
    \ marketplace each morning it is active to provide service and tell stories.\n\
    - Once each day, when Burney so desires, she can instantly transport herself to\
    \ the court of Bahamut via a powerful blessing akin to the [plane shift](/compendium/spells/plane-shift.md)\
    \ spell."
  "name": "Bahamut's Blessings"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney can use its Frightful Presence. It then makes three attacks: one\
    \ with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Burney's choice that is within 120 feet of Burney and\
    \ aware of it must succeed on a DC 19 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Burney's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney uses one of the following breath weapons.\n\n- Acid Breath.\
    \ Burney exhales acid in a 90-foot line that is 10 feet wide. Each creature in\
    \ that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage\
    \ on a failed save, or half as much damage on a successful one.\n- Slowing Breath.\
    \ Burney exhales gas in a 90-foot cone. Each creature in that area must succeed\
    \ on a DC 22 Constitution saving throw. On a failed save, the creature can't use\
    \ reactions, its speed is halved, and it can't make more than one attack on its\
    \ turn. In addition, the creature can use either an action or a bonus action on\
    \ its turn, but not both. These effects last for 1 minute. The creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ with a successful save."
  "name": "Breath Weapons (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney magically polymorphs into a humanoid or beast that has a challenge\
    \ rating no higher than its own, or back into its true form. It reverts to its\
    \ true form if it dies. Any equipment it is wearing or carrying is absorbed or\
    \ borne by the new form (Burney's choice).\n\nIn a new form, Burney retains its\
    \ alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary\
    \ Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as\
    \ well as this action. Its statistics and capabilities are otherwise replaced\
    \ by those of the new form, except any class features or legendary actions of\
    \ that form."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Burney beats its wings. Each creature within 15 feet of Burney must succeed\
    \ on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and\
    \ be knocked [prone](/rules/conditions.md#prone). Burney can then fly up to half\
    \ its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "BGDIA"
"image": "[[Burney the Barber.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 129*

## Environment

hill