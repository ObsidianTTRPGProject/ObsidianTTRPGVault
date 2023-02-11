---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/humanoid/shapechanger
- monster/environment/grassland
- monster/environment/desert
aliases: ["Jackalwere"]
statblock: true
"name": "Jackalwere"
"size": "Medium"
"type": "humanoid"
"subtype": "shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "11"
- !!int "15"
- !!int "11"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "walk 40 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "passive Perception 12"
"languages": "Common (can't speak in jackal form)"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jackalwere can use its action to polymorph into a specific Medium human\
    \ or a jackal-humanoid hybrid, or back into its true form (that of a Small jackal).\
    \ Other than its size, its statistics are the same in each form. Any equipment\
    \ it is wearing or carrying isn't transformed. It reverts to its true form if\
    \ it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jackalwere has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jackalwere has advantage on an attack roll against a creature if at\
    \ least one of the jackalwere's allies is within 5 feet of the creature and the\
    \ ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite (Jackal or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar (Human or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jackalwere gazes at one creature it can see within 30 feet of it. The\
    \ target must make a DC 10 Wisdom saving throw. On a failed save, the target succumbs\
    \ to a magical slumber, falling [unconscious](/rules/conditions.md#unconscious)\
    \ for 10 minutes or until someone uses an action to shake the target awake. A\
    \ creature that successfully saves against the effect is immune to this jackalwere's\
    \ gaze for the next 24 hours. Undead and creatures immune to being [charmed](/rules/conditions.md#charmed)\
    \ aren't affected by it."
  "name": "Sleep Gaze"
"source":
- "MM"
- "PotA"
- "GoS"
- "BGDIA"
- "CM"
- "JttRC"
name: Jackalwere
image: "[[Jackalwere.png]]"
---

# Jackalwere

```statblock
"name": "Jackalwere"
"size": "Medium"
"type": "humanoid"
"subtype": "shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "11"
- !!int "15"
- !!int "11"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "walk 40 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "passive Perception 12"
"languages": "Common (can't speak in jackal form)"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jackalwere can use its action to polymorph into a specific Medium human\
    \ or a jackal-humanoid hybrid, or back into its true form (that of a Small jackal).\
    \ Other than its size, its statistics are the same in each form. Any equipment\
    \ it is wearing or carrying isn't transformed. It reverts to its true form if\
    \ it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jackalwere has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jackalwere has advantage on an attack roll against a creature if at\
    \ least one of the jackalwere's allies is within 5 feet of the creature and the\
    \ ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite (Jackal or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar (Human or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jackalwere gazes at one creature it can see within 30 feet of it. The\
    \ target must make a DC 10 Wisdom saving throw. On a failed save, the target succumbs\
    \ to a magical slumber, falling [unconscious](/rules/conditions.md#unconscious)\
    \ for 10 minutes or until someone uses an action to shake the target awake. A\
    \ creature that successfully saves against the effect is immune to this jackalwere's\
    \ gaze for the next 24 hours. Undead and creatures immune to being [charmed](/rules/conditions.md#charmed)\
    \ aren't affected by it."
  "name": "Sleep Gaze"
"source":
- "MM"
- "PotA"
- "GoS"
- "BGDIA"
- "CM"
- "JttRC"
"image": "[[Jackalwere.png]]"
```
^statblock

*Source: Monster Manual p. 193, Princes of the Apocalypse, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Candlekeep Mysteries, Journeys through the Radiant Citadel*

## Description

Ordinary jackals tainted by demonic power, jackalweres haunt roads and trails, waylaying and murdering those they meet.

A jackalwere has three physical forms that it shifts between. In its true form, it is indistinguishable from a normal jackal. It can take human form, often appearing gaunt and affecting a wretched demeanor to beg goodwill from strangers. When travelers welcome a jackalwere into their midst, the monster adopts its human-sized hybrid form, with the fur and head of a jackal but standing on two legs as it attacks.

**Beguilers and Cowards.** The demon lord Graz'zt created jackalweres to serve his devoted servants, the lamias. Reaching out from the Abyss, he bestowed jackals with the gift of speech and the ability to assume humanoid forms. A jackalwere is born to lie, and perceptive creatures might notice it wincing in pain when it speaks the truth.

A jackalwere prefers to fight alongside jackals and others of its kind. Under the direction of jackalweres, jackals are fierce and loyal companions.

**Supernatural Servants.** Jackalweres kidnap humanoids for their lamia masters, condemning victims to a lifetime of slavery or an agonizing death. A jackalwere's magical gaze renders a foe [unconscious](/rules/conditions.md#unconscious), allowing the monster to bind a creature or drag it away.

A jackalwere might also use its gaze to incapacitate a deadly enemy long enough to make good its escape.

## Environment

grassland, desert