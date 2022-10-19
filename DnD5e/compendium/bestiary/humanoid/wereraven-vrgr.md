---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
aliases: ["Wereraven"]
statblock: true
"name": "Wereraven"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "11"
- !!int "13"
- !!int "15"
- !!int "14"
"speed": "walk 30 ft. (fly 50 ft. in raven and hybrid forms)"
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Common (can't speak in raven form)"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wereraven can use its action to polymorph into a raven-humanoid hybrid\
    \ or into a raven, or back into its human form. Its statistics, other than its\
    \ size, are the same in each form. Any equipment it is wearing or carrying isn't\
    \ transformed. It reverts to its human form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wereraven can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom (Insight) check."
  "name": "Mimicry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wereraven regains 10 hit points at the start of its turn. If the wereraven\
    \ takes damage from a silvered weapon or a spell, this trait doesn't function\
    \ at the start of the wereraven's next turn. The wereraven dies only if it starts\
    \ its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wereraven makes two weapon attacks, one of which can be with its hand\
    \ crossbow."
  "name": "Multiattack (Human or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage in raven form, or 4 (1d4 + 2) piercing damage in hybrid form. If the\
    \ target is humanoid, it must succeed on a DC 10 Constitution saving throw or\
    \ be cursed with wereraven lycanthropy."
  "name": "Beak (Raven or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword (Human or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow (Human or Hybrid Form Only)"
"source":
- "VRGR"
- "CM"
- "CoS"
name: Wereraven
image: "[[Wereraven.png]]"
---

# Wereraven

```statblock
"name": "Wereraven"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "11"
- !!int "13"
- !!int "15"
- !!int "14"
"speed": "walk 30 ft. (fly 50 ft. in raven and hybrid forms)"
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Common (can't speak in raven form)"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wereraven can use its action to polymorph into a raven-humanoid hybrid\
    \ or into a raven, or back into its human form. Its statistics, other than its\
    \ size, are the same in each form. Any equipment it is wearing or carrying isn't\
    \ transformed. It reverts to its human form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wereraven can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom (Insight) check."
  "name": "Mimicry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wereraven regains 10 hit points at the start of its turn. If the wereraven\
    \ takes damage from a silvered weapon or a spell, this trait doesn't function\
    \ at the start of the wereraven's next turn. The wereraven dies only if it starts\
    \ its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wereraven makes two weapon attacks, one of which can be with its hand\
    \ crossbow."
  "name": "Multiattack (Human or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage in raven form, or 4 (1d4 + 2) piercing damage in hybrid form. If the\
    \ target is humanoid, it must succeed on a DC 10 Constitution saving throw or\
    \ be cursed with wereraven lycanthropy."
  "name": "Beak (Raven or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword (Human or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow (Human or Hybrid Form Only)"
"source":
- "VRGR"
- "CM"
- "CoS"
"image": "[[Wereraven.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 253, Candlekeep Mysteries, Curse of Strahd p. 242*

## Description

Wereravens are secretive and extraordinarily cautious lycanthropes that trust one another but are wary of just about everyone else. Although skilled at blending into society, they keep mostly to themselves, respect local laws, and strive to do good whenever possible.

In their human and hybrid forms, wereravens favor light weapons. They are reluctant to make bite attacks in raven form for fear of spreading their curse to those who don't deserve it or who would abuse it.

**A Kindness of Wereravens.** Wereravens refer to their tightly knit groups as kindnesses. A kindness of wereravens usually numbers between seven and twelve individuals. Not surprisingly, wereravens get along well with ravens and often hide in plain sight among them.

**Charitable Collectors.** Wereravens like to collect shiny trinkets and precious baubles. They are fond of sharing their wealth with those in need and, in their humanoid forms, modestly give money to charity. They take steps to keep magic items out of evil hands by stashing them in secret hiding places.

**Characters as Wereravens.** The Monster Manual has rules for characters afflicted with lycanthropy. The following text applies to wereraven characters specifically.

A character cursed with wereraven lycanthropy gains a Dexterity of 15 if his or her score isn't already higher. Attack and damage rolls for the wereraven's bite are based on whichever is higher of the character's Strength and Dexterity. The bite of a wereraven in raven form deals 1 piercing damage (no ability modifier applies to this damage) and carries the curse of lycanthropy; see the "Player Characters as Lycanthropes" sidebar in the lycanthropes entry in the Monster Manual for details.