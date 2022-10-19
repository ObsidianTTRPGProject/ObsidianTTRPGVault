---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Drow Priestess of Lolth"]
statblock: true
"name": "Drow Priestess of Lolth"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "17"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Religion": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow's spellcasting ability is Charisma (spell save DC 15). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each:\
    \ [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow is a 10th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (save DC 14, +6 to hit with spell attacks). The drow has the following cleric\
    \ spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [resistance](/compendium/spells/resistance.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [animal friendship](/compendium/spells/animal-friendship.md),\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [detect poison and disease](/compendium/spells/detect-poison-and-disease.md),\
    \ [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\n2nd level (3 2nd-level\
    \ slots): [lesser restoration](/compendium/spells/lesser-restoration.md), [protection\
    \ from poison](/compendium/spells/protection-from-poison.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [conjure animals](/compendium/spells/conjure-animals.md)\
    \ (2 giant spiders), [dispel magic](/compendium/spells/dispel-magic.md)\n\n4th\
    \ level (3 4th-level slots): [divination](/compendium/spells/divination.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md)\n\n5th level\
    \ (2 5th-level slots): [insect plague](/compendium/spells/insect-plague.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow makes two scourge attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage plus 17 (5d6) poison damage."
  "name": "Scourge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow attempts to magically summon a [yochlol](/compendium/bestiary/fiend/yochlol.md)\
    \ with a 30|30 percent|30% summoning chance% chance chance of success. If the\
    \ attempt fails, the drow takes 5 (1d10) psychic damage. Otherwise, the summoned\
    \ demon appears in an unoccupied space within 60 feet of its summoner, acts as\
    \ an ally of its summoner, and can't summon other demons. It remains for 10 minutes,\
    \ until it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
name: Drow Priestess of Lolth
image: "[[Drow Priestess of Lolth.png]]"
---

# Drow Priestess of Lolth

```statblock
"name": "Drow Priestess of Lolth"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "17"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Religion": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow's spellcasting ability is Charisma (spell save DC 15). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each:\
    \ [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow is a 10th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (save DC 14, +6 to hit with spell attacks). The drow has the following cleric\
    \ spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [resistance](/compendium/spells/resistance.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [animal friendship](/compendium/spells/animal-friendship.md),\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [detect poison and disease](/compendium/spells/detect-poison-and-disease.md),\
    \ [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\n2nd level (3 2nd-level\
    \ slots): [lesser restoration](/compendium/spells/lesser-restoration.md), [protection\
    \ from poison](/compendium/spells/protection-from-poison.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [conjure animals](/compendium/spells/conjure-animals.md)\
    \ (2 giant spiders), [dispel magic](/compendium/spells/dispel-magic.md)\n\n4th\
    \ level (3 4th-level slots): [divination](/compendium/spells/divination.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md)\n\n5th level\
    \ (2 5th-level slots): [insect plague](/compendium/spells/insect-plague.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow makes two scourge attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage plus 17 (5d6) poison damage."
  "name": "Scourge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow attempts to magically summon a [yochlol](/compendium/bestiary/fiend/yochlol.md)\
    \ with a 30|30 percent|30% summoning chance% chance chance of success. If the\
    \ attempt fails, the drow takes 5 (1d10) psychic damage. Otherwise, the summoned\
    \ demon appears in an unoccupied space within 60 feet of its summoner, acts as\
    \ an ally of its summoner, and can't summon other demons. It remains for 10 minutes,\
    \ until it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
"image": "[[Drow Priestess of Lolth.png]]"
```
^statblock

*Source: Monster Manual p. 129, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh*

## Description

Female drow with blood ties to a noble house are molded and trained from birth to become priestesses of Lolth. The Spider Queen doesn't allow male drow to hold such positions.

Such priestesses execute the will of the Spider Queen, and as a result, they wield tremendous power and influence in drow society. The matron mothers who rule the drow houses are the most powerful of Lolth's priestesses, but they must constantly balance their devotion to the Spider Queen with their devotion to their families.

**Drow.** Tens of thousands of years ago, the elves were divided, with those of benevolent disposition battling those that were selfish and cruel. The war among elvenkind ended when the good elves banished their malevolent kin to the subterranean depths. Here, in the lightless caverns and endless warrens of twisting passages, the dark elves-the drow-found refuge. They also found leadership in the only elven deity who had not forsaken them. At her command, the dark elves built an empire in the underworld.

**Children of Lolth.** The drow worship Lolth, a deity who resides in the Abyss. Known as the Spider Queen or the Demon Queen of Spiders, she is the figure around which the dark elves have built their subterranean civilization. Whatever she demands, the drow do. The wickedest of elves, drow are seldom seen by the surface world. Though they plot to destroy the elves that banished them, they no longer see themselves as exiles. They are the destined rulers of the darkness, and when Lolth commands them to rise up and destroy their surface-dwelling kin, they will.

**Creatures of Darkness.** The drow have lived underground for so long that they have evolved to their surroundings and can see in the dark. However, they can no longer stand sunlight. When slaves are in short supply in the Underdark, the drow send raiding parties to the surface to capture humanoids under cover of darkness, bringing them back to their cities to be tortured into submission. Beyond those occasional excursions, the drow are content to remain in their subterranean realm, where they feel secure and in control.

**Underdark Cities.** The dark elves build fantastic cities in enormous caverns where food and water are abundant. Their ability to sculpt stone rivals that of the greatest dwarf artisans, yet their structures retain a decidedly elven aesthetic. Though appearing delicate, drow settlements are structurally sound and remarkably resilient. The drow like to hollow out enormous stalagmites and stalactites, creating populated spires that rise from the floors and ceilings. A drow city is a sprawling metropolis enclosed by high walls. Non-drow visitors must conduct their business outside the walls under watchful eyes. The drow raise and keep giant spiders to help protect their cities against intruders, even as they drape those cities in beautiful webbing, creating a gossamer snare to catch flying enemies that would otherwise soar over the walls.

**Drow Magic.** Just as the drow have adapted to underground life, so too has their magic. In addition to using that magic to carve their cities from stone, they empower their weapons, create dangerous new magic items, and summon demons from the Abyss. Drow spellcasters are supremely arrogant and never hesitate to use their magic in the most abhorrent ways.

**Arms and Armor.** Drow craft weapons made of adamantine, a dark and supernaturally hard metal. Drow artisans adorn their weapons and armor with web-like filigree and spider motifs, and mages sometimes imbue items with magic to enhance their effectiveness. However, such magic fades when exposed to sunlight, so that magical drow weapons and armor rarely retain their enhancement bonuses and magical properties when brought to the surface.

**Cutthroat Politics.** Drow politics are cutthroat and rife with intrigue. When drow work together, it is typically to destroy a common foe and ensure their own survival, and such alliances are short lived and fraught with peril.

Drow society is divided into noble houses, each ruled by a matron who seeks to raise the prestige and power of her house above all others. Other high-ranking members of the house are blood relatives, while the middling ranks are flush with drow from weaker families that have sworn fealty to the greater house. Clinging precariously to the bottom rung of a house's social ladder are the house slaves, made up of drow of low birth and the occasional non-drow captive.

**Matriarchal Rule.** Lolth, through her faithful priestesses, dictates the rules of drow society, ensuring that her orders and plots are carried out. Since Lolth is prone to manifesting on the Material Plane and directly punishing those that disobey her, the drow have learned to heed what she says and do as her priestesses command.

In drow society, males are subservient to females. A male drow might lead an Underdark patrol or a raiding party to the surface, but he reports to a female drow-either the matron of his house or one of her hand-picked female subordinates. Although male drow can fill almost any function in drow society, they can't be priests, nor can they rule a house.

**Poison Predilection.** Distilled from spider venom and the flora of the Underdark, poison can be found in abundance among the drow, and it plays an important part in their culture and politics. Drow mages concoct a viscid toxin that leaves enemies [unconscious](/rules/conditions.md#unconscious). Drow warriors coat their blades and crossbow bolts with this venom, looking forward to the interrogation and torture that follows combat.

> [!quote] Variant: Drow Magic Armor and Weapons
> 
> Drow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.
> 
> - A drow wearing a +1 chain shirt and carrying a +1 shortsword has AC 16 and a +1 bonus on attack and damage rolls with shortsword attacks.
> - A drow elite warrior wearing +2 studded leather and carrying a +2 shortsword has AC 20 and a +2 bonus on attack and damage rolls with shortsword attacks.
> - A drow priestess of Lolth wearing +3 scale mail has AC 19.
^variant-drow-magic-armor-and-weapons

## Environment

underdark