---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/undead
- monster/environment/desert
aliases: ["Mummy Lord"]
statblock: true
"name": "Mummy Lord"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "18"
- !!int "16"
"speed": "walk 20 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Religion": !!int "5"
  "History": !!int "5"
"damage_vulnerabilities": "fire"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord is a 10th-level spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has\
    \ the following cleric spells prepared:\n\nCantrips (at will): [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [command](/compendium/spells/command.md), [guiding bolt](/compendium/spells/guiding-bolt.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [hold person](/compendium/spells/hold-person.md), [silence](/compendium/spells/silence.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (3\
    \ 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md)\n\n4th level (3 4th-level slots):\
    \ [divination](/compendium/spells/divination.md), [guardian of faith](/compendium/spells/guardian-of-faith.md)\n\
    \n5th level (2 5th-level slots): [contagion](/compendium/spells/contagion.md),\
    \ [insect plague](/compendium/spells/insect-plague.md)\n\n6th level (1 6th-level\
    \ slots): [harm](/compendium/spells/harm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A destroyed mummy lord gains a new body in 24 hours if its heart is intact,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the mummy lord's heart."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy can use its Dreadful Glare and makes one attack with its rotting\
    \ fist."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6\
    \ + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 16 Constitution saving throw or be cursed with mummy\
    \ rot. The cursed target can't regain hit points, and its hit point maximum decreases\
    \ by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's\
    \ hit point maximum to 0, the target dies, and its body turns to dust. The curse\
    \ lasts until removed by the [remove curse](/compendium/spells/remove-curse.md)\
    \ spell or other magic."
  "name": "Rotting Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord targets one creature it can see within 60 feet of it. If\
    \ the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving\
    \ throw against this magic or become [frightened](/rules/conditions.md#frightened)\
    \ until the end of the mummy's next turn. If the target fails the saving throw\
    \ by 5 or more, it is also [paralyzed](/rules/conditions.md#paralyzed) for the\
    \ same duration. A target that succeeds on the saving throw is immune to the Dreadful\
    \ Glare of all mummies and mummy lords for the next 24 hours."
  "name": "Dreadful Glare"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord makes one attack with its rotting fist or uses its Dreadful\
    \ Glare."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blinding dust and sand swirls magically around the mummy lord. Each creature\
    \ within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving\
    \ throw or be [blinded](/rules/conditions.md#blinded) until the end of the creature's\
    \ next turn."
  "name": "Blinding Dust"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord utters a blasphemous word. Each non-undead creature within\
    \ 10 feet of the mummy lord that can hear the magical utterance must succeed on\
    \ a DC 16 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of the mummy lord's next turn."
  "name": "Blasphemous Word (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord magically unleashes negative energy. Creatures within 60\
    \ feet of the mummy lord, including ones behind barriers and around corners, can't\
    \ regain hit points until the end of the mummy lord's next turn."
  "name": "Channel Negative Energy (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord magically transforms into a whirlwind of sand, moves up\
    \ to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy\
    \ lord is immune to all damage, and it can't be [grappled](/rules/conditions.md#grappled),\
    \ [petrified](/rules/conditions.md#petrified), knocked [prone](/rules/conditions.md#prone),\
    \ [restrained](/rules/conditions.md#restrained), or [stunned](/rules/conditions.md#stunned).\
    \ Equipment worn or carried by the mummy lord remain in its possession."
  "name": "Whirlwind of Sand (Costs 2 Actions)"
"source":
- "MM"
- "RoT"
- "SKT"
- "TCE"
- "CM"
name: Mummy Lord
image: "[[Mummy Lord.png]]"
---

# Mummy Lord

```statblock
"name": "Mummy Lord"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "18"
- !!int "16"
"speed": "walk 20 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Religion": !!int "5"
  "History": !!int "5"
"damage_vulnerabilities": "fire"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord is a 10th-level spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has\
    \ the following cleric spells prepared:\n\nCantrips (at will): [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [command](/compendium/spells/command.md), [guiding bolt](/compendium/spells/guiding-bolt.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [hold person](/compendium/spells/hold-person.md), [silence](/compendium/spells/silence.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (3\
    \ 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md)\n\n4th level (3 4th-level slots):\
    \ [divination](/compendium/spells/divination.md), [guardian of faith](/compendium/spells/guardian-of-faith.md)\n\
    \n5th level (2 5th-level slots): [contagion](/compendium/spells/contagion.md),\
    \ [insect plague](/compendium/spells/insect-plague.md)\n\n6th level (1 6th-level\
    \ slots): [harm](/compendium/spells/harm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A destroyed mummy lord gains a new body in 24 hours if its heart is intact,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the mummy lord's heart."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy can use its Dreadful Glare and makes one attack with its rotting\
    \ fist."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6\
    \ + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 16 Constitution saving throw or be cursed with mummy\
    \ rot. The cursed target can't regain hit points, and its hit point maximum decreases\
    \ by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's\
    \ hit point maximum to 0, the target dies, and its body turns to dust. The curse\
    \ lasts until removed by the [remove curse](/compendium/spells/remove-curse.md)\
    \ spell or other magic."
  "name": "Rotting Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord targets one creature it can see within 60 feet of it. If\
    \ the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving\
    \ throw against this magic or become [frightened](/rules/conditions.md#frightened)\
    \ until the end of the mummy's next turn. If the target fails the saving throw\
    \ by 5 or more, it is also [paralyzed](/rules/conditions.md#paralyzed) for the\
    \ same duration. A target that succeeds on the saving throw is immune to the Dreadful\
    \ Glare of all mummies and mummy lords for the next 24 hours."
  "name": "Dreadful Glare"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord makes one attack with its rotting fist or uses its Dreadful\
    \ Glare."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blinding dust and sand swirls magically around the mummy lord. Each creature\
    \ within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving\
    \ throw or be [blinded](/rules/conditions.md#blinded) until the end of the creature's\
    \ next turn."
  "name": "Blinding Dust"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord utters a blasphemous word. Each non-undead creature within\
    \ 10 feet of the mummy lord that can hear the magical utterance must succeed on\
    \ a DC 16 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of the mummy lord's next turn."
  "name": "Blasphemous Word (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord magically unleashes negative energy. Creatures within 60\
    \ feet of the mummy lord, including ones behind barriers and around corners, can't\
    \ regain hit points until the end of the mummy lord's next turn."
  "name": "Channel Negative Energy (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord magically transforms into a whirlwind of sand, moves up\
    \ to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy\
    \ lord is immune to all damage, and it can't be [grappled](/rules/conditions.md#grappled),\
    \ [petrified](/rules/conditions.md#petrified), knocked [prone](/rules/conditions.md#prone),\
    \ [restrained](/rules/conditions.md#restrained), or [stunned](/rules/conditions.md#stunned).\
    \ Equipment worn or carried by the mummy lord remain in its possession."
  "name": "Whirlwind of Sand (Costs 2 Actions)"
"source":
- "MM"
- "RoT"
- "SKT"
- "TCE"
- "CM"
"image": "[[Mummy Lord.png]]"
```
^statblock

*Source: Monster Manual p. 229, The Rise of Tiamat, Storm King's Thunder, Tasha's Cauldron of Everything, Candlekeep Mysteries*

## Description

In the tombs of the ancients, tyrannical monarchs and the high priests of dark gods lie in dreamless rest, waiting for the time when they might reclaim their thrones and reforge their ancient empires. The regalia of their terrible rule still adorns their linen-wrapped bodies, their moldering robes stitched with evil symbols and bronze armor etched with devices of dynasties that fell a thousand years before.

Under the direction of the most powerful priests, the ritual that creates a mummy can be increased in potency. The mummy lord that rises from such a ritual retains the memories and personality of its former life, and is gifted with supernatural resilience. Dead emperors wield the same infamous rune-marked blades that they did in legend. Sorcerer lords work the forbidden magic that once controlled a terrified populace, and the dark gods reward dead priest-kings' prayers by imparting divine spells.

**Heart of the Mummy Lord.** As part of the ritual that creates a mummy lord, the creature's heart and viscera are removed from the corpse and placed in canopic jars. These jars are usually carved from limestone or made of pottery, etched or painted with religious hieroglyphs.

As long as its shriveled heart remains intact, a mummy lord can't be permanently destroyed. When it drops to 0 hit points, the mummy lord turns to dust and re-forms at full strength 24 hours later, rising out of dust in close proximity to the canopic jar containing its heart. A mummy lord can be destroyed or prevented from re-forming by burning its heart to ashes. For this reason, a mummy lord usually keeps its heart and viscera in a hidden tomb or vault.

The mummy lord's heart has AC 5, 25 hit points, and immunity to all damage except fire.

**A Mummy Lord's Lair.** A mummy lord watches over an ancient temple or tomb that is protected by lesser undead and rigged with traps. Hidden in this temple is the sarcophagus where a mummy lord keeps its greatest treasures. A mummy lord encountered in its lair has a challenge rating of 16 (15,000 XP).

**Mummies.** Raised by dark funerary rituals, a mummy shambles from the shrouded stillness of a time-lost temple or tomb. Having been awoken from its rest, it punishes transgressors with the power of its unholy curse.

**Preserved Wrath.**  The long burial rituals that accompany a mummy's entombment help protect its body from rot. In the embalming process, the newly dead creature's organs are removed and placed in special jars, and its corpse is treated with preserving oils, herbs, and wrappings. After the body has been prepared, the corpse is typically wrapped in linen bandages.

More ephemeral or permanent offenses, such as revealing a secret the mummy wished kept or killing an individual the mummy loved, can't be so easily remedied. In such cases, a mummy might slaughter all the creatures responsible and still not sate its wrath.

**The Will of Dark Gods.**  An undead mummy is created when the priest of a death god or other dark deity ritually imbues a prepared corpse with necromantic magic. The mummy's linen wrappings are inscribed with necromantic markings before the burial ritual concludes with an invocation to darkness. As a mummy endures in undeath, it animates in response to conditions specified by the ritual. Most commonly, a transgression against its tomb, treasures, lands, or former loved ones will cause a mummy to rise.

**The Punished.**  Once deceased, an individual has no say in whether or not its body is made into a mummy. Some mummies were powerful individuals who displeased a high priest or pharaoh, or who committed crimes of treason, adultery, or murder. As punishment, they were cursed with eternal undeath, embalmed, mummified, and sealed away. Other times, mummies acting as tomb guardians are created from slaves put to death specifically to serve a greater purpose.

**Creature of Ritual.**  A mummy obeys the conditions and parameters laid down by the rituals that created it, driven only to punish transgressors. The overwhelming terror that foreshadows a mummy's attack can leave the intended victim paralyzed with fright. In the days following a mummy's touch, a victim's body rots from the outside in, until nothing but dust remains.

**Ending a Mummy's Curse.**  Rare magic can undo or dispel the ritual that gave rise to a mummy, allowing it to truly die. More commonly, a mummy can be sent back to its endless rest by undoing the transgression that caused it to rise. A sacred idol might be replaced in its niche, a stolen treasure could be returned to its tomb, or a temple might be purified of despoiling bloodshed.

**Undead Archives.**  Though they seldom bother to do so, mummies can speak. As a result, some serve as undead repositories of lost lore, and can be consulted by the descendants of those who created them. Powerful individuals sometimes intentionally sequester mummies away for occasional consultation.

**Undead Nature.**  A mummy doesn't require air, food, drink, or sleep.

## Environment

desert