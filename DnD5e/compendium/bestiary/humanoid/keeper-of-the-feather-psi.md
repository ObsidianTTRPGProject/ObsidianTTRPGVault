---
cssclass: json5e-monster
tags:
- compendium/src/psi
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
aliases: ["Keeper of the Feather"]
statblock: true
"name": "Keeper of the Feather"
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
  "desc": "The keeper is a 4th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12, +4 to hit with spell attacks). It has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [produce flame](/compendium/spells/produce-flame.md), [shillelagh](/compendium/spells/shillelagh.md)\n\
    \n1st level (4 1st-level slots): [entangle](/compendium/spells/entangle.md),\
    \ [longstrider](/compendium/spells/longstrider.md), [speak with animals](/compendium/spells/speak-with-animals.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [animal messenger](/compendium/spells/animal-messenger.md), [barkskin](/compendium/spells/barkskin.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The keeper can use its action to polymorph into a raven-humanoid hybrid\
    \ or into a raven, or back into its human form. Its statistics, other than its\
    \ size, are the same in each form. Any equipment it is wearing or carrying isn't\
    \ transformed. It reverts to its human form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The keeper can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom (Insight) check."
  "name": "Mimicry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The keeper regains 10 hit points at the start of its turn. If the keeper\
    \ takes damage from a silvered weapon or a spell, this trait doesn't function\
    \ at the start of the keeper's next turn. The keeper dies only if it starts its\
    \ turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The keeper makes two weapon attacks, one of which can be with its hand\
    \ crossbow."
  "name": "Multiattack (Human or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage in raven form, or 4 (1d4 + 2) piercing damage in hybrid form."
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
- "PSI"
name: Keeper of the Feather
image: "[[Keeper of the Feather.png]]"
---

# Keeper of the Feather

```statblock
"name": "Keeper of the Feather"
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
  "desc": "The keeper is a 4th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12, +4 to hit with spell attacks). It has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [produce flame](/compendium/spells/produce-flame.md), [shillelagh](/compendium/spells/shillelagh.md)\n\
    \n1st level (4 1st-level slots): [entangle](/compendium/spells/entangle.md),\
    \ [longstrider](/compendium/spells/longstrider.md), [speak with animals](/compendium/spells/speak-with-animals.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [animal messenger](/compendium/spells/animal-messenger.md), [barkskin](/compendium/spells/barkskin.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The keeper can use its action to polymorph into a raven-humanoid hybrid\
    \ or into a raven, or back into its human form. Its statistics, other than its\
    \ size, are the same in each form. Any equipment it is wearing or carrying isn't\
    \ transformed. It reverts to its human form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The keeper can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom (Insight) check."
  "name": "Mimicry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The keeper regains 10 hit points at the start of its turn. If the keeper\
    \ takes damage from a silvered weapon or a spell, this trait doesn't function\
    \ at the start of the keeper's next turn. The keeper dies only if it starts its\
    \ turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The keeper makes two weapon attacks, one of which can be with its hand\
    \ crossbow."
  "name": "Multiattack (Human or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage in raven form, or 4 (1d4 + 2) piercing damage in hybrid form."
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
- "PSI"
"image": "[[Keeper of the Feather.png]]"
```
^statblock

*Source: Plane Shift: Innistrad p. 40*