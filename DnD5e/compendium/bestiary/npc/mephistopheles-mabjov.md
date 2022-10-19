---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/large
- monster/type/fiend/devil
aliases: ["Mephistopheles"]
statblock: true
"name": "Mephistopheles"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "460"
"hit_dice": "40d10 + 240"
"stats":
- !!int "22"
- !!int "23"
- !!int "22"
- !!int "30"
- !!int "28"
- !!int "26"
"speed": "walk 40 ft., fly 100 ft."
"saves":
  "Charisma": !!int "16"
  "Wisdom": !!int "17"
  "Intelligence": !!int "18"
"skillsaves":
  "Deception": !!int "24"
  "Insight": !!int "25"
  "Persuasion": !!int "24"
"damage_resistances": "acid; cold; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all, telepathy 100 ft."
"cr": "27"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles's innate spellcasting ability is Charisma (spell save DC\
    \ 24, +16 to hit with spell attacks). He can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [animate dead](/compendium/spells/animate-dead.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [detect\
    \ magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fireball](/compendium/spells/fireball.md), [geas](/compendium/spells/geas.md)\
    \ (duration 1 year), [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [hallow](/compendium/spells/hallow.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [locate creature](/compendium/spells/locate-creature.md), [locate object](/compendium/spells/locate-object.md),\
    \ [major image](/compendium/spells/major-image.md), [resurrection](/compendium/spells/resurrection.md),\
    \ [scrying](/compendium/spells/scrying.md), [suggestion](/compendium/spells/suggestion.md),\
    \ [teleport](/compendium/spells/teleport.md), [true seeing](/compendium/spells/true-seeing.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md), [wall of ice](/compendium/spells/wall-of-ice.md)\n\
    \n1/day each: [meteor swarm](/compendium/spells/meteor-swarm.md), [symbol](/compendium/spells/symbol.md)\
    \ (any), [wish](/compendium/spells/wish.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles is a 15th-level spellcaster. His spellcasting ability is\
    \ Intelligence (spell save DC 26, +18 to hit with spell attacks). Mephistopheles\
    \ has the following spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [absorb elements](/compendium/spells/absorb-elements-xge.md), [mage\
    \ armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [scorching ray](/compendium/spells/scorching-ray.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [haste](/compendium/spells/haste.md), [sending](/compendium/spells/sending.md),\
    \ [slow](/compendium/spells/slow.md)\n\n4th level (3 4th-level slots): [Melf's\
    \ acid arrow](/compendium/spells/melfs-acid-arrow.md), [banishment](/compendium/spells/banishment.md),\
    \ [storm sphere](/compendium/spells/storm-sphere-xge.md)\n\n5th level (2 5th-level\
    \ slots): [Bigby's hand](/compendium/spells/bigbys-hand.md), [cone of cold](/compendium/spells/cone-of-cold.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [chain lightning](/compendium/spells/chain-lightning.md), [disintegrate](/compendium/spells/disintegrate.md),\
    \ [eyebite](/compendium/spells/eyebite.md)\n\n7th level (1 7th-level slots):\
    \ [delayed blast fireball](/compendium/spells/delayed-blast-fireball.md), [forcecage](/compendium/spells/forcecage.md),\
    \ [whirlwind](/compendium/spells/whirlwind-xge.md)\n\n8th level (1 8th-level\
    \ slots): [Abi-Dalzim's Horrid Wilting](/compendium/spells/abi-dalzims-horrid-wilting-xge.md),\
    \ [sunburst](/compendium/spells/sunburst.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede Mephistopheles's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles is covered in dark flames. At the start of his turn, any\
    \ creature within 5 feet of him takes 7 (2d6) fire damage, if Mephistopheles desires\
    \ it."
  "name": "Flames of Hell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles doesn't provoke opportunity attacks when he flies out of\
    \ an enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Mephistopheles inflicts fire damage from a Hellfire ability on any\
    \ opponent that fire damage ignores the target's fire resistance and immunity.\
    \ Mephistopheles is immune to damage from his own hellfire abilities."
  "name": "Hellfire Mastery"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Mephistopheles fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles regains 20 hit points at the start of his turn. If he takes\
    \ radiant damage, this trait doesn't function at the start of his next turn. Mephistopheles\
    \ dies only if he starts his turn with 0 hit points and is unable to regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles uses his Hellfire Lash ability (if available) and then makes\
    \ two attacks with his ranseur."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 20 (2d10\
    \ + 9) piercing damage. At Mephistopheles's whim, a successful hit does an additional\
    \ 27 (6d8) fire or cold damage."
  "name": "Ranseur, +3"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles's body and any equipment he is wearing or carrying turns\
    \ to ash and he magically teleports up to 120 feet to an unoccupied space he can\
    \ see and reforms."
  "name": "Ashen Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles unleashes a 60-foot long lash of hellfire that ignites a\
    \ 5-foot radius around where it strikes. Any targets in the area of effect must\
    \ make a DC 22 Dexterity check or take 22 (5d8) fire damage. The damage is halved\
    \ on a successful saving throw."
  "name": "Hellfire Lash (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles summons 1d4 [ice devils](/compendium/bestiary/fiend/ice-devil.md)."
  "name": "Summon Allies (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles selects an area up to 160 feet away from him and creates\
    \ a hellfire explosion in a 20-foot radius. Anyone in the area that fails the\
    \ DC 22 Dexterity saving throw takes 38 (7d10) fire damage. Those that succeed\
    \ suffer only half the damage."
  "name": "Hellfire Storm (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles uses his wings to generate a burst of heat. Each creature\
    \ within 10 feet of him must succeed on a DC 22 Dexterity saving throw or take\
    \ 10 (3d6) bludgeoning damage and be knocked [prone](/rules/conditions.md#prone).\
    \ They also must make a DC 22 Constitution saving throw or suffer 10 (3d6) fire\
    \ damage."
  "name": "Hellfire Wings"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles uses his Ashen Teleport action."
  "name": "Teleport"
"source":
- "MaBJoV"
name: Mephistopheles
image: "[[Mephistopheles.png]]"
---

# Mephistopheles

```statblock
"name": "Mephistopheles"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "460"
"hit_dice": "40d10 + 240"
"stats":
- !!int "22"
- !!int "23"
- !!int "22"
- !!int "30"
- !!int "28"
- !!int "26"
"speed": "walk 40 ft., fly 100 ft."
"saves":
  "Charisma": !!int "16"
  "Wisdom": !!int "17"
  "Intelligence": !!int "18"
"skillsaves":
  "Deception": !!int "24"
  "Insight": !!int "25"
  "Persuasion": !!int "24"
"damage_resistances": "acid; cold; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all, telepathy 100 ft."
"cr": "27"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles's innate spellcasting ability is Charisma (spell save DC\
    \ 24, +16 to hit with spell attacks). He can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [animate dead](/compendium/spells/animate-dead.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [detect\
    \ magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fireball](/compendium/spells/fireball.md), [geas](/compendium/spells/geas.md)\
    \ (duration 1 year), [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [hallow](/compendium/spells/hallow.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [locate creature](/compendium/spells/locate-creature.md), [locate object](/compendium/spells/locate-object.md),\
    \ [major image](/compendium/spells/major-image.md), [resurrection](/compendium/spells/resurrection.md),\
    \ [scrying](/compendium/spells/scrying.md), [suggestion](/compendium/spells/suggestion.md),\
    \ [teleport](/compendium/spells/teleport.md), [true seeing](/compendium/spells/true-seeing.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md), [wall of ice](/compendium/spells/wall-of-ice.md)\n\
    \n1/day each: [meteor swarm](/compendium/spells/meteor-swarm.md), [symbol](/compendium/spells/symbol.md)\
    \ (any), [wish](/compendium/spells/wish.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles is a 15th-level spellcaster. His spellcasting ability is\
    \ Intelligence (spell save DC 26, +18 to hit with spell attacks). Mephistopheles\
    \ has the following spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [absorb elements](/compendium/spells/absorb-elements-xge.md), [mage\
    \ armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [scorching ray](/compendium/spells/scorching-ray.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [haste](/compendium/spells/haste.md), [sending](/compendium/spells/sending.md),\
    \ [slow](/compendium/spells/slow.md)\n\n4th level (3 4th-level slots): [Melf's\
    \ acid arrow](/compendium/spells/melfs-acid-arrow.md), [banishment](/compendium/spells/banishment.md),\
    \ [storm sphere](/compendium/spells/storm-sphere-xge.md)\n\n5th level (2 5th-level\
    \ slots): [Bigby's hand](/compendium/spells/bigbys-hand.md), [cone of cold](/compendium/spells/cone-of-cold.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [chain lightning](/compendium/spells/chain-lightning.md), [disintegrate](/compendium/spells/disintegrate.md),\
    \ [eyebite](/compendium/spells/eyebite.md)\n\n7th level (1 7th-level slots):\
    \ [delayed blast fireball](/compendium/spells/delayed-blast-fireball.md), [forcecage](/compendium/spells/forcecage.md),\
    \ [whirlwind](/compendium/spells/whirlwind-xge.md)\n\n8th level (1 8th-level\
    \ slots): [Abi-Dalzim's Horrid Wilting](/compendium/spells/abi-dalzims-horrid-wilting-xge.md),\
    \ [sunburst](/compendium/spells/sunburst.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede Mephistopheles's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles is covered in dark flames. At the start of his turn, any\
    \ creature within 5 feet of him takes 7 (2d6) fire damage, if Mephistopheles desires\
    \ it."
  "name": "Flames of Hell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles doesn't provoke opportunity attacks when he flies out of\
    \ an enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Mephistopheles inflicts fire damage from a Hellfire ability on any\
    \ opponent that fire damage ignores the target's fire resistance and immunity.\
    \ Mephistopheles is immune to damage from his own hellfire abilities."
  "name": "Hellfire Mastery"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Mephistopheles fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles regains 20 hit points at the start of his turn. If he takes\
    \ radiant damage, this trait doesn't function at the start of his next turn. Mephistopheles\
    \ dies only if he starts his turn with 0 hit points and is unable to regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles uses his Hellfire Lash ability (if available) and then makes\
    \ two attacks with his ranseur."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 20 (2d10\
    \ + 9) piercing damage. At Mephistopheles's whim, a successful hit does an additional\
    \ 27 (6d8) fire or cold damage."
  "name": "Ranseur, +3"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles's body and any equipment he is wearing or carrying turns\
    \ to ash and he magically teleports up to 120 feet to an unoccupied space he can\
    \ see and reforms."
  "name": "Ashen Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles unleashes a 60-foot long lash of hellfire that ignites a\
    \ 5-foot radius around where it strikes. Any targets in the area of effect must\
    \ make a DC 22 Dexterity check or take 22 (5d8) fire damage. The damage is halved\
    \ on a successful saving throw."
  "name": "Hellfire Lash (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles summons 1d4 [ice devils](/compendium/bestiary/fiend/ice-devil.md)."
  "name": "Summon Allies (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles selects an area up to 160 feet away from him and creates\
    \ a hellfire explosion in a 20-foot radius. Anyone in the area that fails the\
    \ DC 22 Dexterity saving throw takes 38 (7d10) fire damage. Those that succeed\
    \ suffer only half the damage."
  "name": "Hellfire Storm (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles uses his wings to generate a burst of heat. Each creature\
    \ within 10 feet of him must succeed on a DC 22 Dexterity saving throw or take\
    \ 10 (3d6) bludgeoning damage and be knocked [prone](/rules/conditions.md#prone).\
    \ They also must make a DC 22 Constitution saving throw or suffer 10 (3d6) fire\
    \ damage."
  "name": "Hellfire Wings"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mephistopheles uses his Ashen Teleport action."
  "name": "Teleport"
"source":
- "MaBJoV"
"image": "[[Mephistopheles.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 99*

## Description

> [!quote]- A quote from Volo  
> 
> If there were ever a subject I would never dare to write about it's the lord of Cania. I don't know the real reason of how the ranger came into information on this lord of Hell, but he claims it has something to do with his hamster. His hamster! How did I ever get bamboozled into editing this tome.

Mephistopheles is the lord of Cania, the eighth level of the Nine Hells, and the most powerful archdevil next to Asmodeus himself. He is famed as Hell's most powerful wizard and the wielder of a power known as Hellfire.

Mephistopheles is an ancient entity, a being rivaling even Asmodeus in terms of age. During his time as an archdevil he had been responsible for many schemes to try and unseat the Lord of the Nine. One of his infamous schemes was an alliance between himself, Dispater, Mammon, and Geryon. They conspired to take power from the other archdevils, Baalzebul, Zariel, Belial and Moloch. With this increased power, Mephistopheles would then be able to challenge Asmodeus himself. But he was betrayed by Geryon, who had been secretly siding with Asmodeus. Despite the blatancy of his rebellion, he was the archdevil that suffered the least: not cursed like Mammon or Baalzebul; not cast down like Belial, Moloch or Geryon. This has led many to believe that there is some ancient secret to the relationship between the Asmodeus and Mephistopheles, though what it could be is a mystery none have discovered.

Mephistopheles is a brilliant tactician and strategist, and he has an unparalleled understanding of Hell's political machinations and the potential pitfalls of every scheme and alliance. He is courteous and charming when he speaks, demonstrating a wry wit while projecting an image of self-restraint and composure. But beneath this civil persona lurks a savage, barely controlled temper, and he often flies into uncontrollable rages when alone in his palace. In addition to his barely contained anger, Mephistopheles suffers from obsessive envy, and he is bitterly resentful that he is "merely" the second most powerful archdevil.

As the foremost wizard of the Nine Hells, Mephistopheles often resorts to magic when forced to defend himself. But his greatest power comes from the ability to wield Hellfire itself. Created by tapping into the profane essence of Hell, Hellfire is unimaginably, unbearably hot. Unless he chooses to suppress it, his body emanates dark flames, causing anyone who touches him to be scorched by the unholy energy. Mephistopheles can also shape Hellfire any way he wishes, making it his most potent weapon.