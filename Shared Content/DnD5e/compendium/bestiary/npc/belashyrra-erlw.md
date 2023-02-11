---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/aberration
aliases: ["Belashyrra"]
statblock: true
"name": "Belashyrra"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "304"
"hit_dice": "32d8 + 160"
"stats":
- !!int "24"
- !!int "21"
- !!int "20"
- !!int "25"
- !!int "22"
- !!int "23"
"speed": "walk 40 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "13"
  "Wisdom": !!int "13"
  "Intelligence": !!int "14"
"skillsaves":
  "Perception": !!int "13"
  "Arcana": !!int "14"
"damage_resistances": "poison, psychic"
"condition_immunities": "blinded, charmed, exhaustion, frightened, poisoned, prone"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature tries to read Belashyrra's thoughts or deals psychic damage\
    \ to it, that creature must succeed on a DC 22 Intelligence saving throw or be\
    \ [stunned](/rules/conditions.md#stunned) for 1 minute. The [stunned](/rules/conditions.md#stunned)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Alien Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra can see through the eyes of all creatures within 120 feet of\
    \ it. It can use its Eye Ray through any creature within 120 feet of it, as though\
    \ it were in that creature's space."
  "name": "Eye Thief"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Belashyrra fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra regains 20 hit points at the start of its turn. If it takes\
    \ radiant damage, this trait doesn't function at the start of its next turn. Belashyrra\
    \ dies only if it starts its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Belashyrra can teleport up to 30 feet to an unoccupied\
    \ space it can see."
  "name": "Teleport"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra makes two attacks with its claws and uses its Eye Ray once."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 17 (3d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra shoots one of the following magical eye rays of its choice,\
    \ targeting one creature it can see within 120 feet of it:\n\n- 1. Psyche-Reconstruction\
    \ Ray. The target must make a DC 22 Wisdom saving throw, taking 49 (9d10) psychic\
    \ damage on a failed save, or half as much damage on a successful one. If this\
    \ damage reduces a creature to 0 hit points, it dies and transforms into a spectator\
    \ under Belashyrra's control and acts immediately after Belashyrra in the initiative\
    \ order. The target can't be returned to its original form by any means short\
    \ of a [wish](/compendium/spells/wish.md) spell.\n- 2. Domination Ray. The\
    \ target must succeed on a DC 22 Wisdom saving throw or be [charmed](/rules/conditions.md#charmed)\
    \ by Belashyrra for 1 minute or until the target takes damage. Belashyrra can\
    \ issue telepathic commands to the [charmed](/rules/conditions.md#charmed) creature\
    \ (no action required), which it does its best to obey.\n- 3. Mind-Weakening\
    \ Ray. The target must succeed on a DC 22 Intelligence saving throw or take\
    \ 36 (8d8) psychic damage and be unable to cast spells or activate magic items\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 4. Blinding Ray. The\
    \ target and each creature within 10 feet of it must succeed on a DC 22 Constitution\
    \ saving throw or take 19 (3d12) radiant damage and be [blinded](/rules/conditions.md#blinded)\
    \ for 1 minute. Until this blindness ends, Belyshyrra can see through the [blinded](/rules/conditions.md#blinded)\
    \ creature's eyes. The [blinded](/rules/conditions.md#blinded) creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Eye Ray"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra makes one claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra targets a creature it can see within 60 feet of it. The target\
    \ must succeed on a DC 22 Wisdom saving throw or take 22 (4d10) psychic damage\
    \ and immediately use its reaction, if available, to move as far as its speed\
    \ allows away from Belashyrra."
  "name": "Implant Fear (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra rips at the bonds of reality in its immediate area. Each creature\
    \ within 10 feet of Belashyrra must succeed on a DC 22 Constitution saving throw\
    \ or take 19 (3d12) force damage and gain one level of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Rend Reality (Costs 3 Actions)"
"source":
- "ERLW"
name: Belashyrra
image: "[[Belashyrra.png]]"
---

# Belashyrra

```statblock
"name": "Belashyrra"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "304"
"hit_dice": "32d8 + 160"
"stats":
- !!int "24"
- !!int "21"
- !!int "20"
- !!int "25"
- !!int "22"
- !!int "23"
"speed": "walk 40 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "13"
  "Wisdom": !!int "13"
  "Intelligence": !!int "14"
"skillsaves":
  "Perception": !!int "13"
  "Arcana": !!int "14"
"damage_resistances": "poison, psychic"
"condition_immunities": "blinded, charmed, exhaustion, frightened, poisoned, prone"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature tries to read Belashyrra's thoughts or deals psychic damage\
    \ to it, that creature must succeed on a DC 22 Intelligence saving throw or be\
    \ [stunned](/rules/conditions.md#stunned) for 1 minute. The [stunned](/rules/conditions.md#stunned)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Alien Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra can see through the eyes of all creatures within 120 feet of\
    \ it. It can use its Eye Ray through any creature within 120 feet of it, as though\
    \ it were in that creature's space."
  "name": "Eye Thief"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Belashyrra fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra regains 20 hit points at the start of its turn. If it takes\
    \ radiant damage, this trait doesn't function at the start of its next turn. Belashyrra\
    \ dies only if it starts its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Belashyrra can teleport up to 30 feet to an unoccupied\
    \ space it can see."
  "name": "Teleport"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra makes two attacks with its claws and uses its Eye Ray once."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 17 (3d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra shoots one of the following magical eye rays of its choice,\
    \ targeting one creature it can see within 120 feet of it:\n\n- 1. Psyche-Reconstruction\
    \ Ray. The target must make a DC 22 Wisdom saving throw, taking 49 (9d10) psychic\
    \ damage on a failed save, or half as much damage on a successful one. If this\
    \ damage reduces a creature to 0 hit points, it dies and transforms into a spectator\
    \ under Belashyrra's control and acts immediately after Belashyrra in the initiative\
    \ order. The target can't be returned to its original form by any means short\
    \ of a [wish](/compendium/spells/wish.md) spell.\n- 2. Domination Ray. The\
    \ target must succeed on a DC 22 Wisdom saving throw or be [charmed](/rules/conditions.md#charmed)\
    \ by Belashyrra for 1 minute or until the target takes damage. Belashyrra can\
    \ issue telepathic commands to the [charmed](/rules/conditions.md#charmed) creature\
    \ (no action required), which it does its best to obey.\n- 3. Mind-Weakening\
    \ Ray. The target must succeed on a DC 22 Intelligence saving throw or take\
    \ 36 (8d8) psychic damage and be unable to cast spells or activate magic items\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 4. Blinding Ray. The\
    \ target and each creature within 10 feet of it must succeed on a DC 22 Constitution\
    \ saving throw or take 19 (3d12) radiant damage and be [blinded](/rules/conditions.md#blinded)\
    \ for 1 minute. Until this blindness ends, Belyshyrra can see through the [blinded](/rules/conditions.md#blinded)\
    \ creature's eyes. The [blinded](/rules/conditions.md#blinded) creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Eye Ray"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra makes one claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra targets a creature it can see within 60 feet of it. The target\
    \ must succeed on a DC 22 Wisdom saving throw or take 22 (4d10) psychic damage\
    \ and immediately use its reaction, if available, to move as far as its speed\
    \ allows away from Belashyrra."
  "name": "Implant Fear (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Belashyrra rips at the bonds of reality in its immediate area. Each creature\
    \ within 10 feet of Belashyrra must succeed on a DC 22 Constitution saving throw\
    \ or take 19 (3d12) force damage and gain one level of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Rend Reality (Costs 3 Actions)"
"source":
- "ERLW"
"image": "[[Belashyrra.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 286*

## Description

Belashyrra is the Lord of Eyes, also known to its cultists as the All-Seer or the Glorious Eye. Stories told of Belashyrra in the Shadow Marches whisper that the Lord of Eyes can see every evil deed a person commits, and that those touched by this daelkyr suffer terrible hallucinations that inevitably drive them to violence or death.

**Dreadful Visions.** The madness of Belashyrra is tied to sight: images that can't be unseen, horrific hallucinations, the fear of blindness and of being watched—or realizing that something else is using your eyes. Belashyrra can force its victims to question whether what they perceive is real, or can fill their world with such terrors that they willingly blind themselves to escape.

Belashyrra sees mortals as raw materials to be exploited or insects to be exterminated. However, the Lord of Eyes has been known to take an interest in specific mortals. Belashyrra's warlocks serve as its envoys in the world and are often directed to seek out creatures and sites that the daelkyr wishes to see through their eyes.

**Belashyrra's Cults.** The Lord of Eyes has followers across Khorvaire, and its cults are typically driven by mad visions. Devoted cultists can grow eyes in unusual locations, and might have [darkvision](/rules/senses.md#darkvision) or other supernatural abilities when they view the world through those eyes. Beholderkin often advise or lead Belashyrra's cults, and cultists typically treat these aberrations as divine beings.

**Belashyrra's Lair.** Belashyrra makes its lair in the Citadel of Lidless Eyes deep in Khyber, a site that appears to have been molded from molten stone, chitin, and flesh. Across its warped and liquid expanses, thousands of eyes of every size and shape peer into the endless darkness. Beholders, dolgrims, and stranger aberrations dwell within the halls of the citadel, which is one of the few places where such creatures are willing to live side by side.

Some beholderkin serve Belashyrra as guards and agents, while others spend their lives in deep meditation, pursuing inner visions known only to the Lord of Eyes. It's rumored that anyone who sits on the citadel's throne can see through the eyes of any sentient creature on Eberron or in Khyber. If encountered in its lair, Belashyrra has a challenge rating of 23 (50,000 XP).

**Madness of Belashyrra.** If a creature goes mad in Belashyrra's lair or while it can see the daelkyr, it gains a form of indefinite madness. Roll on the Madness of Belashyrra table to determine the nature of this madness, which takes the form of a character flaw that lasts until cured. Chapter 8 of the "Dungeon Master's Guide" has more information on madness.

**Madness of Belashyrra**

| dice: d6 | Flaw (lasts until cured) |
|----------|--------------------------|
| 1 | "I constantly see shapes moving in the shadows." |
| 2 | "I perceive certain types of people—vocations or entire societies—as hideous monsters." |
| 3 | "Someone is watching everything I do." |
| 4 | "When I close my eyes, I see my past misdeeds." |
| 5 | "I don't trust my sight. I have no idea what's real and what's a hallucination." |
| 6 | "Something watches the world through my eyes. To thwart them, I keep my eyes closed or covered." |
^madness-of-belashyrra