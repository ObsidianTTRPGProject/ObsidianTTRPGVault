---
cssclass: json5e-monster
tags:
- compendium/src/llk
- monster/size/medium
- monster/type/undead/shapechanger
- monster/environment/urban
aliases: ["Ctenmiir the Vampire"]
statblock: true
"name": "Ctenmiir the Vampire"
"size": "Medium"
"type": "undead"
"subtype": "shapechanger"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft., climb 10 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "9"
  "Wisdom": !!int "7"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "7"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "the languages it knew in life"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir is imprisoned within a magical iron coffin mounted atop animated\
    \ golem legs. Ctenmiir's coffin has a speed of 30 feet and a climbing speed of\
    \ 10 feet, and protects the vampire from sunlight even as it prevents him from\
    \ escaping his servitude."
  "name": "Coffin Imprisonment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Ctenmiir isn't in sunlight or running water, it can use its action to\
    \ polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.\n\
    \nWhile in bat form, Ctenmiir can't speak, its walking speed is 5 feet, and it\
    \ has a flying speed of 30 feet. Its statistics, other than its size and speed,\
    \ are unchanged. Anything it is wearing transforms with it, but nothing it is\
    \ carrying does. It reverts to its true form if it dies.\n\nWhile in mist form,\
    \ Ctenmiir can't take any actions, speak, or manipulate objects. It is weightless,\
    \ has a flying speed of 20 feet, can hover, and can enter a hostile creature's\
    \ space and stop there. In addition, if air can pass through a space, the mist\
    \ can do so without squeezing, and it can't pass through water. It has advantage\
    \ on Strength, Dexterity, and Constitution saving throws, and it is immune to\
    \ all nonmagical damage, except the damage it takes from sunlight."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Ctenmiir fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When it drops to 0 hit points outside its resting place, Ctenmiir transforms\
    \ into a cloud of mist (as in the Shapechanger trait) instead of falling [unconscious](/rules/conditions.md#unconscious),\
    \ provided that it isn't in sunlight or running water. If it can't transform,\
    \ it is destroyed.\n\nWhile it has 0 hit points in mist form, it can't revert\
    \ to its vampire form, and it must reach its resting place within 2 hours or be\
    \ destroyed. Once in its resting place, it reverts to its vampire form. It is\
    \ then [paralyzed](/rules/conditions.md#paralyzed) until it regains at least 1\
    \ hit point. After spending 1 hour in its resting place with 0 hit points, it\
    \ regains 1 hit point."
  "name": "Misty Escape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir regains 20 hit points at the start of its turn if it has at least\
    \ 1 hit point and isn't in sunlight or running water. If Ctenmiir takes radiant\
    \ damage or damage from holy water, this trait doesn't function at the start of\
    \ Ctenmiir's next turn."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir has the following flaws:\n\n_Forbiddance._ Ctenmiir can't enter\
    \ a residence without an invitation from one of the occupants.\n\n_Harmed by Running\
    \ Water._ Ctenmiir takes 20 acid damage if it ends its turn in running water.\n\
    \n_Stake to the Heart._ If a piercing weapon made of wood is driven into Ctenmiir's\
    \ heart while Ctenmiir is [incapacitated](/rules/conditions.md#incapacitated)\
    \ in its resting place, Ctenmiir is [paralyzed](/rules/conditions.md#paralyzed)\
    \ until the stake is removed.\n\n_Sunlight Hypersensitivity._ Ctenmiir takes 20\
    \ radiant damage when it starts its turn in sunlight. While in sunlight, it has\
    \ disadvantage on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack (Vampire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8\
    \ + 4) bludgeoning damage. Instead of dealing damage, Ctenmiir can grapple the\
    \ target (escape DC 18)."
  "name": "Unarmed Strike (Vampire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or\
    \ a creature that is [grappled](/rules/conditions.md#grappled) by Ctenmiir, [incapacitated](/rules/conditions.md#incapacitated),\
    \ or [restrained](/rules/conditions.md#restrained). Hit: 7 (1d6 + 4) piercing\
    \ damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced\
    \ by an amount equal to the necrotic damage taken, and Ctenmiir regains hit points\
    \ equal to that amount. The reduction lasts until the target finishes a long rest.\
    \ The target dies if this effect reduces its hit point maximum to 0. A humanoid\
    \ slain in this way and then buried in the ground rises the following night as\
    \ a [vampire spawn](/compendium/bestiary/undead/vampire-spawn.md) under Ctenmiir's\
    \ control."
  "name": "Bite (Bat or Vampire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir targets one humanoid it can see within 30 feet of it. If the target\
    \ can see Ctenmiir, the target must succeed on a DC 17 Wisdom saving throw against\
    \ this magic or be [charmed](/rules/conditions.md#charmed) by Ctenmiir. The [charmed](/rules/conditions.md#charmed)\
    \ target regards Ctenmiir as a trusted friend to be heeded and protected. Although\
    \ the target isn't under Ctenmiir's control, it takes Ctenmiir's requests or actions\
    \ in the most favorable way it can, and it is a willing target for Ctenmiir's\
    \ bite attack.\n\nEach time Ctenmiir or Ctenmiir's companions do anything harmful\
    \ to the target, it can repeat the saving throw, ending the effect on itself on\
    \ a success. Otherwise, the effect lasts 24 hours or until Ctenmiir is destroyed,\
    \ is on a different plane of existence than the target, or takes a bonus action\
    \ to end the effect."
  "name": "Charm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir magically calls 2d4 swarms of [bats](/compendium/bestiary/beast/swarm-of-bats.md)\
    \ or [rats](/compendium/bestiary/beast/swarm-of-rats.md), provided that the sun\
    \ isn't up. While outdoors, Ctenmiir can call 3d6 [wolves](/compendium/bestiary/beast/wolf.md)\
    \ instead. The called creatures arrive in 1d4 rounds, acting as allies of Ctenmiir\
    \ and obeying its spoken commands. The beasts remain for 1 hour, until Ctenmiir\
    \ dies, or until Ctenmiir dismisses them as a bonus action."
  "name": "Children of the Night (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir moves up to its speed without provoking opportunity attacks."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir makes one unarmed strike."
  "name": "Unarmed Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir makes one bite attack."
  "name": "Bite (Costs 2 Actions)"
"source":
- "LLK"
name: Ctenmiir the Vampire
image: "[[Ctenmiir the Vampire.png]]"
---

# Ctenmiir the Vampire

```statblock
"name": "Ctenmiir the Vampire"
"size": "Medium"
"type": "undead"
"subtype": "shapechanger"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft., climb 10 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "9"
  "Wisdom": !!int "7"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "7"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "the languages it knew in life"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir is imprisoned within a magical iron coffin mounted atop animated\
    \ golem legs. Ctenmiir's coffin has a speed of 30 feet and a climbing speed of\
    \ 10 feet, and protects the vampire from sunlight even as it prevents him from\
    \ escaping his servitude."
  "name": "Coffin Imprisonment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Ctenmiir isn't in sunlight or running water, it can use its action to\
    \ polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.\n\
    \nWhile in bat form, Ctenmiir can't speak, its walking speed is 5 feet, and it\
    \ has a flying speed of 30 feet. Its statistics, other than its size and speed,\
    \ are unchanged. Anything it is wearing transforms with it, but nothing it is\
    \ carrying does. It reverts to its true form if it dies.\n\nWhile in mist form,\
    \ Ctenmiir can't take any actions, speak, or manipulate objects. It is weightless,\
    \ has a flying speed of 20 feet, can hover, and can enter a hostile creature's\
    \ space and stop there. In addition, if air can pass through a space, the mist\
    \ can do so without squeezing, and it can't pass through water. It has advantage\
    \ on Strength, Dexterity, and Constitution saving throws, and it is immune to\
    \ all nonmagical damage, except the damage it takes from sunlight."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Ctenmiir fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When it drops to 0 hit points outside its resting place, Ctenmiir transforms\
    \ into a cloud of mist (as in the Shapechanger trait) instead of falling [unconscious](/rules/conditions.md#unconscious),\
    \ provided that it isn't in sunlight or running water. If it can't transform,\
    \ it is destroyed.\n\nWhile it has 0 hit points in mist form, it can't revert\
    \ to its vampire form, and it must reach its resting place within 2 hours or be\
    \ destroyed. Once in its resting place, it reverts to its vampire form. It is\
    \ then [paralyzed](/rules/conditions.md#paralyzed) until it regains at least 1\
    \ hit point. After spending 1 hour in its resting place with 0 hit points, it\
    \ regains 1 hit point."
  "name": "Misty Escape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir regains 20 hit points at the start of its turn if it has at least\
    \ 1 hit point and isn't in sunlight or running water. If Ctenmiir takes radiant\
    \ damage or damage from holy water, this trait doesn't function at the start of\
    \ Ctenmiir's next turn."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir has the following flaws:\n\n_Forbiddance._ Ctenmiir can't enter\
    \ a residence without an invitation from one of the occupants.\n\n_Harmed by Running\
    \ Water._ Ctenmiir takes 20 acid damage if it ends its turn in running water.\n\
    \n_Stake to the Heart._ If a piercing weapon made of wood is driven into Ctenmiir's\
    \ heart while Ctenmiir is [incapacitated](/rules/conditions.md#incapacitated)\
    \ in its resting place, Ctenmiir is [paralyzed](/rules/conditions.md#paralyzed)\
    \ until the stake is removed.\n\n_Sunlight Hypersensitivity._ Ctenmiir takes 20\
    \ radiant damage when it starts its turn in sunlight. While in sunlight, it has\
    \ disadvantage on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack (Vampire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8\
    \ + 4) bludgeoning damage. Instead of dealing damage, Ctenmiir can grapple the\
    \ target (escape DC 18)."
  "name": "Unarmed Strike (Vampire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or\
    \ a creature that is [grappled](/rules/conditions.md#grappled) by Ctenmiir, [incapacitated](/rules/conditions.md#incapacitated),\
    \ or [restrained](/rules/conditions.md#restrained). Hit: 7 (1d6 + 4) piercing\
    \ damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced\
    \ by an amount equal to the necrotic damage taken, and Ctenmiir regains hit points\
    \ equal to that amount. The reduction lasts until the target finishes a long rest.\
    \ The target dies if this effect reduces its hit point maximum to 0. A humanoid\
    \ slain in this way and then buried in the ground rises the following night as\
    \ a [vampire spawn](/compendium/bestiary/undead/vampire-spawn.md) under Ctenmiir's\
    \ control."
  "name": "Bite (Bat or Vampire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir targets one humanoid it can see within 30 feet of it. If the target\
    \ can see Ctenmiir, the target must succeed on a DC 17 Wisdom saving throw against\
    \ this magic or be [charmed](/rules/conditions.md#charmed) by Ctenmiir. The [charmed](/rules/conditions.md#charmed)\
    \ target regards Ctenmiir as a trusted friend to be heeded and protected. Although\
    \ the target isn't under Ctenmiir's control, it takes Ctenmiir's requests or actions\
    \ in the most favorable way it can, and it is a willing target for Ctenmiir's\
    \ bite attack.\n\nEach time Ctenmiir or Ctenmiir's companions do anything harmful\
    \ to the target, it can repeat the saving throw, ending the effect on itself on\
    \ a success. Otherwise, the effect lasts 24 hours or until Ctenmiir is destroyed,\
    \ is on a different plane of existence than the target, or takes a bonus action\
    \ to end the effect."
  "name": "Charm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir magically calls 2d4 swarms of [bats](/compendium/bestiary/beast/swarm-of-bats.md)\
    \ or [rats](/compendium/bestiary/beast/swarm-of-rats.md), provided that the sun\
    \ isn't up. While outdoors, Ctenmiir can call 3d6 [wolves](/compendium/bestiary/beast/wolf.md)\
    \ instead. The called creatures arrive in 1d4 rounds, acting as allies of Ctenmiir\
    \ and obeying its spoken commands. The beasts remain for 1 hour, until Ctenmiir\
    \ dies, or until Ctenmiir dismisses them as a bonus action."
  "name": "Children of the Night (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir moves up to its speed without provoking opportunity attacks."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir makes one unarmed strike."
  "name": "Unarmed Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ctenmiir makes one bite attack."
  "name": "Bite (Costs 2 Actions)"
"source":
- "LLK"
"image": "[[Ctenmiir the Vampire.png]]"
```
^statblock

*Source: Lost Laboratory of Kwalish p. 4*

## Environment

urban