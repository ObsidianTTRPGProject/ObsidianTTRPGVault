---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/beast
- monster/type/humanoid/shapechanger
aliases: ["Wolfwere"]
statblock: true
"name": "Wolfwere"
"size": "Medium"
"type": "humanoid"
"subtype": "beast, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "18"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "8"
- !!int "15"
"speed": "walk 30 ft. (40 ft. in dire wolf form)"
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical weapons that\
  \ aren't iron"
"senses": "passive Perception 13"
"languages": "Common (can't speak in wolf form)"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolfwere can use its action to polymorph into a wolf-humanoid hybrid\
    \ or into a human or elf, or back into its true form, which is a dire wolf. Its\
    \ statistics, other than its AC, are the same in each form. Any equipment it is\
    \ wearing or carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolfwere has advantage on Wisdom (Perception) checks that rely on hearing\
    \ or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolfwere has advantage on an attack roll against a creature if at least\
    \ one of the wolfwere's allies is within 5 ft. of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolfwere makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack (Hybrid form only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 4) slashing damage or 10 (1d10 + 5) slashing damage if used with two hands."
  "name": "Longsword (Humanoid form only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage. If the target is a creature, it must succeed on a DC 14\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Bite (Wolf or Hybrid form only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4\
    \ + 4) slashing damage."
  "name": "Claws (Hybrid form only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolfwere plays a magical melody on an instrument. Every humanoid within\
    \ 200 ft. of the wolfwere that can hear the melody must succeed on a DC 13 Wisdom\
    \ saving throw or be [slowed](/compendium/spells/slow.md) for 10 minutes. A creature\
    \ can repeat the saving throw at the end of each of its turns. If a creature's\
    \ saving throw is successful, the effect ends on it. A target that successfully\
    \ saves is immune to this wolfwere's melody for the next 24 hours."
  "name": "Lethargic Song (Humanoid form only)"
"source":
- "MaBJoV"
name: Wolfwere
image: "[[Wolfwere.png]]"
---

# Wolfwere

```statblock
"name": "Wolfwere"
"size": "Medium"
"type": "humanoid"
"subtype": "beast, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "18"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "8"
- !!int "15"
"speed": "walk 30 ft. (40 ft. in dire wolf form)"
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical weapons that\
  \ aren't iron"
"senses": "passive Perception 13"
"languages": "Common (can't speak in wolf form)"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolfwere can use its action to polymorph into a wolf-humanoid hybrid\
    \ or into a human or elf, or back into its true form, which is a dire wolf. Its\
    \ statistics, other than its AC, are the same in each form. Any equipment it is\
    \ wearing or carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolfwere has advantage on Wisdom (Perception) checks that rely on hearing\
    \ or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolfwere has advantage on an attack roll against a creature if at least\
    \ one of the wolfwere's allies is within 5 ft. of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolfwere makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack (Hybrid form only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 4) slashing damage or 10 (1d10 + 5) slashing damage if used with two hands."
  "name": "Longsword (Humanoid form only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage. If the target is a creature, it must succeed on a DC 14\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Bite (Wolf or Hybrid form only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4\
    \ + 4) slashing damage."
  "name": "Claws (Hybrid form only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolfwere plays a magical melody on an instrument. Every humanoid within\
    \ 200 ft. of the wolfwere that can hear the melody must succeed on a DC 13 Wisdom\
    \ saving throw or be [slowed](/compendium/spells/slow.md) for 10 minutes. A creature\
    \ can repeat the saving throw at the end of each of its turns. If a creature's\
    \ saving throw is successful, the effect ends on it. A target that successfully\
    \ saves is immune to this wolfwere's melody for the next 24 hours."
  "name": "Lethargic Song (Humanoid form only)"
"source":
- "MaBJoV"
"image": "[[Wolfwere.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 155*

## Description

> [!quote]- A quote from MINSC  
> 
> I remember being told that wolfweres were nature's perfect predator. Boo disagreed with this though. There is nothing more fearsome than a pissed off space hamster!

> [!quote]- A quote from Wolfwere  
> 
> Shhhh... close your eyes.
> 
> Dream of starlight, dream of sights unseen, and I shall join you soon.

Wolfweres are shapeshifters that have the natural form of a large wolf but can transform at will into both humanoid and bipedal hybrid shapes. These hateful creatures are much more intelligent than a normal wolf and use this preternatural cunning to hunt their favorite prey: humans. Although some believe them to be the offspring of werewolves and normal wolves—and this may very well be their origin—wolfweres are their own species and their form of lycanthropy is not a transmissible curse or disease. Like werewolves, wolfweres are repelled by wolfsbane but are vulnerable to iron rather than silver weapons.

**Strange Packs.** Although some wolfweres are solitary, others choose to stay in familial bands. However, they most often run in packs of normal wolves or worgs. Wolfweres are able to influence and command these beasts, making them much more vicious and bolder. Rarely, a wolfwere may choose to blend in with human society. Wolfweres never associate with werewolves, as the two share a mutual hatred and will attack each other unprovoked.

**Myriad Forms.** A wolfwere's natural form is similar in size and appearance to that of a dire wolf. In combat, they usually shift into a hybrid form, which is able to both bite and use weapons with its human-like hands. To trick stronger prey, a wolfwere dons a charismatic human shape. Unlike werewolves, wolfweres have no single humanoid form to revert to. Instead, a wolfwere can transform into any humanoid shape it desires, though they almost universally choose ones with great physical beauty. Wolfweres have the ability to sense what their particular prey would find attractive and assume a seductive disguise. Wolfweres have less control over their appearance when they involuntarily transform under a new moon, though they usually assume a shape they have taken on recently.

**A Sedating Melody.** While in their humanoid forms, wolfweres have the ability to sing a song that induces a lethargy in their prey that is similar to a [slow](/compendium/spells/slow.md) spell. Many wolfweres play stringed instruments and pose as bards to avoid arousing suspicion while they work their charms.