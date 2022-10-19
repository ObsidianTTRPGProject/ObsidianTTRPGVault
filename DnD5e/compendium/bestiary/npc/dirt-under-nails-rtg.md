---
cssclass: json5e-monster
tags:
- compendium/src/rtg
- monster/size/medium
- monster/type/plant
aliases: ["Dirt-Under-Nails"]
statblock: true
"name": "Dirt-Under-Nails"
"size": "Medium"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "7"
  "Religion": !!int "4"
  "Arcana": !!int "4"
  "Persuasion": !!int "7"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "telepathy 60 ft."
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock's innate spellcasting ability is Charisma. It can innately\
    \ cast the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [alter self](/compendium/spells/alter-self.md), [false life](/compendium/spells/false-life.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only), [mage armor](/compendium/spells/mage-armor.md)\
    \ (self only), [silent image](/compendium/spells/silent-image.md)\n\n1/day each:\
    \ [feeblemind](/compendium/spells/feeblemind.md), [finger of death](/compendium/spells/finger-of-death.md),\
    \ [plane shift](/compendium/spells/plane-shift.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dirt-Under-Nails is a 17th level spellcaster. His spellcasting ability\
    \ is Charisma (spell save DC 17, +9 to hit with spell attacks). He regains his\
    \ expended spell slots when he finishes a short or long rest. He knows the following\
    \ warlock spells:\n\nCantrips (at will): [chill touch](/compendium/spells/chill-touch.md),\
    \ [eldritch blast](/compendium/spells/eldritch-blast.md), [friends](/compendium/spells/friends.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st-5th level (4 5th-level slots): [armor of Agathys](/compendium/spells/armor-of-agathys.md),\
    \ [banishment](/compendium/spells/banishment.md), [burning hands](/compendium/spells/burning-hands.md),\
    \ [cloudkill](/compendium/spells/cloudkill.md), [flame strike](/compendium/spells/flame-strike.md),\
    \ [magic circle](/compendium/spells/magic-circle.md), [scorching ray](/compendium/spells/scorching-ray.md),\
    \ [scrying](/compendium/spells/scrying.md), [stinking cloud](/compendium/spells/stinking-cloud.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the warlock makes an ability check or saving throw, it can add a d10\
    \ to the roll. It can do this after the roll is made but before any of the roll's\
    \ effects occur."
  "name": "Dark One's Own Luck (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dirt-Under-Nails regains 10 hit points at the start of his turn if he is\
    \ in contact with the ground. If Dirt-Under-Nails takes fire damage, this trait\
    \ doesn't function at the start of his next turn. Dirt-Under-Nails dies only if\
    \ he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dirt-Under-Nails can see and hear what any plant within 120 ft can see\
    \ and hear. In addition, Dirt-Under- Nails can communicate telepathically with\
    \ any plant within this range."
  "name": "Shared Senses"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While holding this [rod](/compendium/items/2-rod-of-the-pact-keeper.md),\
    \ Dirt-Under-Nails gains a +2 bonus to spell attack rolls and to the saving throw\
    \ DCs of his warlock spells (included in modifications, below). In addition, he\
    \ can regain 1 warlock spell slot as an action while holding the rod. He can't\
    \ use this property again until he finishes a long rest."
  "name": "Special Equipment (+2 Rod of the Pact Keeper)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once on each of its turns, Dirt-Under-Nails can use 10 feet of his movement\
    \ to step magically into one copse of mushrooms within 5 feet of him and emerge\
    \ from a second copse of mushrooms within 60 feet of it, appearing in an unoccupied\
    \ space within 5 feet of the second copse. Both copses of mushrooms must be Large\
    \ or bigger. Dirt-Under-Nails doesn't need to be able to see the second copse\
    \ to use this ability."
  "name": "Tree Stride"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage plus 10 (3d6) fire damage."
  "name": "Mace"
"source":
- "RtG"
name: Dirt-Under-Nails
image: "[[Dirt-Under-Nails.png]]"
---

# Dirt-Under-Nails

```statblock
"name": "Dirt-Under-Nails"
"size": "Medium"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "7"
  "Religion": !!int "4"
  "Arcana": !!int "4"
  "Persuasion": !!int "7"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "telepathy 60 ft."
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock's innate spellcasting ability is Charisma. It can innately\
    \ cast the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [alter self](/compendium/spells/alter-self.md), [false life](/compendium/spells/false-life.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only), [mage armor](/compendium/spells/mage-armor.md)\
    \ (self only), [silent image](/compendium/spells/silent-image.md)\n\n1/day each:\
    \ [feeblemind](/compendium/spells/feeblemind.md), [finger of death](/compendium/spells/finger-of-death.md),\
    \ [plane shift](/compendium/spells/plane-shift.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dirt-Under-Nails is a 17th level spellcaster. His spellcasting ability\
    \ is Charisma (spell save DC 17, +9 to hit with spell attacks). He regains his\
    \ expended spell slots when he finishes a short or long rest. He knows the following\
    \ warlock spells:\n\nCantrips (at will): [chill touch](/compendium/spells/chill-touch.md),\
    \ [eldritch blast](/compendium/spells/eldritch-blast.md), [friends](/compendium/spells/friends.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st-5th level (4 5th-level slots): [armor of Agathys](/compendium/spells/armor-of-agathys.md),\
    \ [banishment](/compendium/spells/banishment.md), [burning hands](/compendium/spells/burning-hands.md),\
    \ [cloudkill](/compendium/spells/cloudkill.md), [flame strike](/compendium/spells/flame-strike.md),\
    \ [magic circle](/compendium/spells/magic-circle.md), [scorching ray](/compendium/spells/scorching-ray.md),\
    \ [scrying](/compendium/spells/scrying.md), [stinking cloud](/compendium/spells/stinking-cloud.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the warlock makes an ability check or saving throw, it can add a d10\
    \ to the roll. It can do this after the roll is made but before any of the roll's\
    \ effects occur."
  "name": "Dark One's Own Luck (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dirt-Under-Nails regains 10 hit points at the start of his turn if he is\
    \ in contact with the ground. If Dirt-Under-Nails takes fire damage, this trait\
    \ doesn't function at the start of his next turn. Dirt-Under-Nails dies only if\
    \ he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dirt-Under-Nails can see and hear what any plant within 120 ft can see\
    \ and hear. In addition, Dirt-Under- Nails can communicate telepathically with\
    \ any plant within this range."
  "name": "Shared Senses"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While holding this [rod](/compendium/items/2-rod-of-the-pact-keeper.md),\
    \ Dirt-Under-Nails gains a +2 bonus to spell attack rolls and to the saving throw\
    \ DCs of his warlock spells (included in modifications, below). In addition, he\
    \ can regain 1 warlock spell slot as an action while holding the rod. He can't\
    \ use this property again until he finishes a long rest."
  "name": "Special Equipment (+2 Rod of the Pact Keeper)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once on each of its turns, Dirt-Under-Nails can use 10 feet of his movement\
    \ to step magically into one copse of mushrooms within 5 feet of him and emerge\
    \ from a second copse of mushrooms within 60 feet of it, appearing in an unoccupied\
    \ space within 5 feet of the second copse. Both copses of mushrooms must be Large\
    \ or bigger. Dirt-Under-Nails doesn't need to be able to see the second copse\
    \ to use this ability."
  "name": "Tree Stride"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage plus 10 (3d6) fire damage."
  "name": "Mace"
"source":
- "RtG"
"image": "[[Dirt-Under-Nails.png]]"
```
^statblock

*Source: Return to Glory p. 32*