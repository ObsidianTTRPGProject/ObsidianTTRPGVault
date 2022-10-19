---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Faldorn"]
statblock: true
"name": "Faldorn"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"stats":
- !!int "12"
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "20"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "10"
  "Intelligence": !!int "6"
"skillsaves":
  "Medicine": !!int "10"
  "Nature": !!int "11"
  "Perception": !!int "10"
  "Survival": !!int "15"
"senses": "passive Perception 20"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Faldorn is a 18th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 18, +12 to hit with spell attacks). She has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [produce flame](/compendium/spells/produce-flame.md),\
    \ [shillelagh](/compendium/spells/shillelagh.md)\n\n1st level (4 1st-level slots):\
    \ [entangle](/compendium/spells/entangle.md), [longstrider](/compendium/spells/longstrider.md),\
    \ [speak with animals](/compendium/spells/speak-with-animals.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [barkskin](/compendium/spells/barkskin.md)\n\n3rd level (3 3rd-level slots):\
    \ [conjure animals](/compendium/spells/conjure-animals.md), [water breathing](/compendium/spells/water-breathing.md)\n\
    \n4th level (3 4th-level slots): [dominate beast](/compendium/spells/dominate-beast.md),\
    \ [locate creature](/compendium/spells/locate-creature.md), [stoneskin](/compendium/spells/stoneskin.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)\n\n5th level (3 5th-level\
    \ slots): [commune with nature](/compendium/spells/commune-with-nature.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [tree stride](/compendium/spells/tree-stride.md)\n\
    \n6th level (1 6th-level slots): [heal](/compendium/spells/heal.md), [heroes'\
    \ feast](/compendium/spells/heroes-feast.md), [sunbeam](/compendium/spells/sunbeam.md)\n\
    \n7th level (1 7th-level slots): [fire storm](/compendium/spells/fire-storm.md)\n\
    \n8th level (1 8th-level slots): [animal shapes](/compendium/spells/animal-shapes.md)\n\
    \n9th level (1 9th-level slots): [foresight](/compendium/spells/foresight.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "This staff can be wielded as a magic quarterstaff that grants a +2 bonus\
    \ to attack and damage rolls made with it and grants Faldorn a +2 bonus to spell\
    \ attack rolls (already factored into Faldorn's attacks). The staff has 10 charges.\
    \ It regains 1d6 + 4 expended charges daily at dawn. Faldorn can use an action\
    \ to expend 1 or more of the staff's charges to cast one of the following spells\
    \ from it, with a spell save DC of 14: [animal friendship](/compendium/spells/animal-friendship.md)\
    \ (1 charge), [awaken](/compendium/spells/awaken.md) (5 charges), [barkskin](/compendium/spells/barkskin.md)\
    \ (2 charges), [locate animals or plants](/compendium/spells/locate-animals-or-plants.md)\
    \ (2 charges), [speak with animals](/compendium/spells/speak-with-animals.md)\
    \ (1 charge), [speak with plants](/compendium/spells/speak-with-plants.md) (3\
    \ charges), or [wall of thorns](/compendium/spells/wall-of-thorns.md) (6 charges).\
    \ Faldorn can use an action to cast the [pass without trace](/compendium/spells/pass-without-trace.md)\
    \ spell without using any charges."
  "name": "Staff of the Woodlands"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Faldorn makes a melee attack and casts a spell. Or she casts a spell and\
    \ uses Change Shape if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage, or 7 (1d8 + 3) bludgeoning damage if wielded with two\
    \ hands."
  "name": "Staff of the Woodlands"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Faldorn magically polymorphs into a beast or elemental with a challenge\
    \ rating of 6 or less, and can remain in this form for up to 9 hours. Faldorn\
    \ reverts to her true form if she dies or falls [unconscious](/rules/conditions.md#unconscious).\
    \ She can revert to her true form using a bonus action on her turn.\n\nWhile in\
    \ a new form, Faldorn retains her game statistics and ability to speak, but her\
    \ AC, movement modes, Strength, and Dexterity are replaced by those of the new\
    \ form, and she gains any special senses, proficiencies, traits, actions, and\
    \ reactions (except class features, legendary actions, and lair actions) that\
    \ the new form has but that she lacks. She can cast her spells with verbal or\
    \ somatic components in her new form. The new form's attacks count as magical\
    \ for the purpose of overcoming resistances and immunity to nonmagical attacks."
  "name": "Change Shape (2/Day)"
"source":
- "MaBJoV"
name: Faldorn
image: "[[Faldorn.png]]"
---

# Faldorn

```statblock
"name": "Faldorn"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"stats":
- !!int "12"
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "20"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "10"
  "Intelligence": !!int "6"
"skillsaves":
  "Medicine": !!int "10"
  "Nature": !!int "11"
  "Perception": !!int "10"
  "Survival": !!int "15"
"senses": "passive Perception 20"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Faldorn is a 18th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 18, +12 to hit with spell attacks). She has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [produce flame](/compendium/spells/produce-flame.md),\
    \ [shillelagh](/compendium/spells/shillelagh.md)\n\n1st level (4 1st-level slots):\
    \ [entangle](/compendium/spells/entangle.md), [longstrider](/compendium/spells/longstrider.md),\
    \ [speak with animals](/compendium/spells/speak-with-animals.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [barkskin](/compendium/spells/barkskin.md)\n\n3rd level (3 3rd-level slots):\
    \ [conjure animals](/compendium/spells/conjure-animals.md), [water breathing](/compendium/spells/water-breathing.md)\n\
    \n4th level (3 4th-level slots): [dominate beast](/compendium/spells/dominate-beast.md),\
    \ [locate creature](/compendium/spells/locate-creature.md), [stoneskin](/compendium/spells/stoneskin.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)\n\n5th level (3 5th-level\
    \ slots): [commune with nature](/compendium/spells/commune-with-nature.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [tree stride](/compendium/spells/tree-stride.md)\n\
    \n6th level (1 6th-level slots): [heal](/compendium/spells/heal.md), [heroes'\
    \ feast](/compendium/spells/heroes-feast.md), [sunbeam](/compendium/spells/sunbeam.md)\n\
    \n7th level (1 7th-level slots): [fire storm](/compendium/spells/fire-storm.md)\n\
    \n8th level (1 8th-level slots): [animal shapes](/compendium/spells/animal-shapes.md)\n\
    \n9th level (1 9th-level slots): [foresight](/compendium/spells/foresight.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "This staff can be wielded as a magic quarterstaff that grants a +2 bonus\
    \ to attack and damage rolls made with it and grants Faldorn a +2 bonus to spell\
    \ attack rolls (already factored into Faldorn's attacks). The staff has 10 charges.\
    \ It regains 1d6 + 4 expended charges daily at dawn. Faldorn can use an action\
    \ to expend 1 or more of the staff's charges to cast one of the following spells\
    \ from it, with a spell save DC of 14: [animal friendship](/compendium/spells/animal-friendship.md)\
    \ (1 charge), [awaken](/compendium/spells/awaken.md) (5 charges), [barkskin](/compendium/spells/barkskin.md)\
    \ (2 charges), [locate animals or plants](/compendium/spells/locate-animals-or-plants.md)\
    \ (2 charges), [speak with animals](/compendium/spells/speak-with-animals.md)\
    \ (1 charge), [speak with plants](/compendium/spells/speak-with-plants.md) (3\
    \ charges), or [wall of thorns](/compendium/spells/wall-of-thorns.md) (6 charges).\
    \ Faldorn can use an action to cast the [pass without trace](/compendium/spells/pass-without-trace.md)\
    \ spell without using any charges."
  "name": "Staff of the Woodlands"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Faldorn makes a melee attack and casts a spell. Or she casts a spell and\
    \ uses Change Shape if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage, or 7 (1d8 + 3) bludgeoning damage if wielded with two\
    \ hands."
  "name": "Staff of the Woodlands"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Faldorn magically polymorphs into a beast or elemental with a challenge\
    \ rating of 6 or less, and can remain in this form for up to 9 hours. Faldorn\
    \ reverts to her true form if she dies or falls [unconscious](/rules/conditions.md#unconscious).\
    \ She can revert to her true form using a bonus action on her turn.\n\nWhile in\
    \ a new form, Faldorn retains her game statistics and ability to speak, but her\
    \ AC, movement modes, Strength, and Dexterity are replaced by those of the new\
    \ form, and she gains any special senses, proficiencies, traits, actions, and\
    \ reactions (except class features, legendary actions, and lair actions) that\
    \ the new form has but that she lacks. She can cast her spells with verbal or\
    \ somatic components in her new form. The new form's attacks count as magical\
    \ for the purpose of overcoming resistances and immunity to nonmagical attacks."
  "name": "Change Shape (2/Day)"
"source":
- "MaBJoV"
"image": "[[Faldorn.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 50*

## Description

Faldorn is a human druid who is secretly a Shadow Master, one of the leaders of a militant sect of druids called the Shadow Druids. She is a devout follower of the beliefs of the Shadow Druids, believing that civilization is a cancer that threatens to make all the mortal races into weaklings.

Faldorn was born into the Black Raven Uthgardt tribe of the North. Her tribe resided within the Spine of the World, an icy mountain range in far northwest Faerûn. As an infant, Faldorn was offered to a Shadow Druid enclave and was later inducted into their ranks. Never knowing any other family, she grew to become a fervent worshipper of nature and the Shadow Druid's tenets. Over the decades, Faldorn rose through the ranks of her order until she eventually claimed leadership in a battle with the former Shadow Master. She returned to her Uthgardt tribe for a few years to take a husband, but abandoned him and the son that they had together after a few years.

Recently, Faldorn has taken it upon herself to infiltrate the Emerald Enclave. She joined the order and quickly rose through the ranks to become a Hierophant. She now is biding her time for one of the three members of the Elder Circle to die, so that she can take their place. Once she is a member of the Elder Circle, it will be easy for her to subvert the Emerald Enclave to do the bidding of the Shadow Druids. Her only worry is one of her former henchmen, an elven ranger named Kivan. He knows of her connections to the Shadow Druids and could potentially out her to the Elder Circle.

Faldorn is usually accompanied by corrupted fey creatures known as hamadryads. She claims that she is the only one willing to take in these sad creatures cast aside by nature.

**Faldorn as a Contact.** Faldorn becomes available as a contact for the Emerald Enclave at 7th level. Faldorn can give you a small magic item that can be used to summon a powerful ally that will help you for 24 hours. You must use the item as described below to summon the ally. When the ally is summoned you must use an action and succeed at a [Persuasion](/rules/skills.md#Persuasion) check to convince it to help you. Faldorn gives these items for free, but she only grants each item once.

**Summoning Allies with Faldorn**

| Item Required | Required Level | Activation | Summoned Ally | Persuasion Check DC |
|---------------|----------------|------------|---------------|---------------------|
| Magical acorn | 7 | Plant it in the ground with an action | In one round the acorn grows into an awakened tree | 10 |
| Apple | 8 | Eat the apply and spit out the seeds with an action | The seeds transform into 1d4 hamadryads | 10 |
| Decanter of oil | 9 | Use an action to burn the body of a beast killed only 1 minute earlier with the oil from the decanter | A salamander bursts from the body | 15 |
| Crown of thorns | 10 | Succeed with an attack roll to place the crown of thorns on a humanoid of CR 5 or less | The humanoid permanently transforms into a shambling mound | 15 |
| Bone Knife | 11 | Use the knife to cut out the heart of a dragon slain within 8 hours | The heart transforms into a wyvern | 10 |
| Vial of tree sap | 12 | Succeed with an attack roll to pour the sap on a Plant creature of CR 5 or less | The plant creature transforms into a treant with an evil alignment | 15 |
^summoning-allies-with-faldorn