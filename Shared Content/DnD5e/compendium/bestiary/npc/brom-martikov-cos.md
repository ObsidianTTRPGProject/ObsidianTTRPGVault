---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/small
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
aliases: ["Brom Martikov"]
statblock: true
"name": "Brom Martikov"
"size": "Small"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
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
  "desc": "Brom can use its action to polymorph into a raven-humanoid hybrid or into\
    \ a raven, or back into its human form. Its statistics, other than its size, are\
    \ the same in each form. Any equipment it is wearing or carrying isn't transformed.\
    \ It reverts to its human form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brom can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom (Insight) check."
  "name": "Mimicry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brom regains 10 hit points at the start of its turn. If Brom takes damage\
    \ from a silvered weapon or a spell, this trait doesn't function at the start\
    \ of Brom's next turn. Brom dies only if it starts its turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brom makes two weapon attacks, one of which can be with its hand crossbow."
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
- "CoS"
name: Brom Martikov
image: "[[Brom Martikov.png]]"
---

# Brom Martikov

```statblock
"name": "Brom Martikov"
"size": "Small"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
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
  "desc": "Brom can use its action to polymorph into a raven-humanoid hybrid or into\
    \ a raven, or back into its human form. Its statistics, other than its size, are\
    \ the same in each form. Any equipment it is wearing or carrying isn't transformed.\
    \ It reverts to its human form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brom can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom (Insight) check."
  "name": "Mimicry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brom regains 10 hit points at the start of its turn. If Brom takes damage\
    \ from a silvered weapon or a spell, this trait doesn't function at the start\
    \ of Brom's next turn. Brom dies only if it starts its turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Brom makes two weapon attacks, one of which can be with its hand crossbow."
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
- "CoS"
"image": "[[Brom Martikov.png]]"
```
^statblock

*Source: Curse of Strahd p. 98*