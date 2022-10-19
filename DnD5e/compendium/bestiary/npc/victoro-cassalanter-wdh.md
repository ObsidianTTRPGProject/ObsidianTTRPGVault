---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/medium
- monster/type/humanoid/half-elf
aliases: ["Victoro Cassalanter"]
statblock: true
"name": "Victoro Cassalanter"
"size": "Medium"
"type": "humanoid"
"subtype": "half-elf"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"stats":
- !!int "13"
- !!int "13"
- !!int "14"
- !!int "16"
- !!int "17"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Religion": !!int "7"
  "Insight": !!int "7"
  "History": !!int "7"
  "Persuasion": !!int "8"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Draconic, Elvish, Infernal"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro is a 15th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 15, +7 to hit with spell attacks). Victoro has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [light](/compendium/spells/light.md), [mending](/compendium/spells/mending.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [charm person](/compendium/spells/charm-person.md),\
    \ [command](/compendium/spells/command.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [protection from evil\
    \ and good](/compendium/spells/protection-from-evil-and-good.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [augury](/compendium/spells/augury.md), [lesser\
    \ restoration](/compendium/spells/lesser-restoration.md), [mirror image](/compendium/spells/mirror-image.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\
    \n3rd level (3 3rd-level slots): [blink](/compendium/spells/blink.md), [clairvoyance](/compendium/spells/clairvoyance.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [magic circle](/compendium/spells/magic-circle.md),\
    \ [protection from energy](/compendium/spells/protection-from-energy.md)\n\n4th\
    \ level (3 4th-level slots): [banishment](/compendium/spells/banishment.md),\
    \ [dimension door](/compendium/spells/dimension-door.md), [divination](/compendium/spells/divination.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [polymorph](/compendium/spells/polymorph.md)\n\
    \n5th level (2 5th-level slots): [dominate person](/compendium/spells/dominate-person.md),\
    \ [flame strike](/compendium/spells/flame-strike.md), [modify memory](/compendium/spells/modify-memory.md),\
    \ [insect plague](/compendium/spells/insect-plague.md)\n\n6th level (1 6th-level\
    \ slots): [heal](/compendium/spells/heal.md)\n\n7th level (1 7th-level slots):\
    \ [divine word](/compendium/spells/divine-word.md)\n\n8th level (1 8th-level\
    \ slots): [earthquake](/compendium/spells/earthquake.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro wears a [ring of protection](/compendium/items/ring-of-protection.md)\
    \ and [glamoured studded leather](/compendium/items/glamoured-studded-leather.md)\
    \ disguised to look like fine clothing. He carries a [rod of rulership](/compendium/items/rod-of-rulership.md)\
    \ shaped like a ruby-tipped cane."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro can use an action to present the rod and command obedience from\
    \ each creature of his choice that he can see within 120 feet of him. Each target\
    \ must succeed on a DC 15 Wisdom saving throw or be [charmed](/rules/conditions.md#charmed)\
    \ for 8 hours by Victoro. While [charmed](/rules/conditions.md#charmed) in this\
    \ way, the creature regards Victoro as its trusted leader. If harmed by Victoro\
    \ or his companions, or commanded to do something contrary to its nature, a target\
    \ ceases to be [charmed](/rules/conditions.md#charmed) in this way. The rod can't\
    \ be used again until the next dawn."
  "name": "Rod of Rulership"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro makes two attacks with his rapier."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) piercing damage."
  "name": "Rapier"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro becomes [invisible](/rules/conditions.md#invisible) until the end\
    \ of his next turn. He becomes visible early immediately after he attacks or casts\
    \ a spell."
  "name": "Cloak of Shadows (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro summons a [barbed devil](/compendium/bestiary/fiend/barbed-devil.md).\
    \ The devil appears in an unoccupied space within 30 feet of Victoro, acts as\
    \ Victoro's ally, and can't summon other devils. It remains for 1 minute, until\
    \ it or Victoro dies, or until Victoro dismisses it as an action."
  "name": "Summon Devil (Recharges after 9 Days)"
"source":
- "WDH"
name: Victoro Cassalanter
image: "[[Victoro Cassalanter.png]]"
---

# Victoro Cassalanter

```statblock
"name": "Victoro Cassalanter"
"size": "Medium"
"type": "humanoid"
"subtype": "half-elf"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"stats":
- !!int "13"
- !!int "13"
- !!int "14"
- !!int "16"
- !!int "17"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Religion": !!int "7"
  "Insight": !!int "7"
  "History": !!int "7"
  "Persuasion": !!int "8"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Draconic, Elvish, Infernal"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro is a 15th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 15, +7 to hit with spell attacks). Victoro has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [light](/compendium/spells/light.md), [mending](/compendium/spells/mending.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [charm person](/compendium/spells/charm-person.md),\
    \ [command](/compendium/spells/command.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [protection from evil\
    \ and good](/compendium/spells/protection-from-evil-and-good.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [augury](/compendium/spells/augury.md), [lesser\
    \ restoration](/compendium/spells/lesser-restoration.md), [mirror image](/compendium/spells/mirror-image.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\
    \n3rd level (3 3rd-level slots): [blink](/compendium/spells/blink.md), [clairvoyance](/compendium/spells/clairvoyance.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [magic circle](/compendium/spells/magic-circle.md),\
    \ [protection from energy](/compendium/spells/protection-from-energy.md)\n\n4th\
    \ level (3 4th-level slots): [banishment](/compendium/spells/banishment.md),\
    \ [dimension door](/compendium/spells/dimension-door.md), [divination](/compendium/spells/divination.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [polymorph](/compendium/spells/polymorph.md)\n\
    \n5th level (2 5th-level slots): [dominate person](/compendium/spells/dominate-person.md),\
    \ [flame strike](/compendium/spells/flame-strike.md), [modify memory](/compendium/spells/modify-memory.md),\
    \ [insect plague](/compendium/spells/insect-plague.md)\n\n6th level (1 6th-level\
    \ slots): [heal](/compendium/spells/heal.md)\n\n7th level (1 7th-level slots):\
    \ [divine word](/compendium/spells/divine-word.md)\n\n8th level (1 8th-level\
    \ slots): [earthquake](/compendium/spells/earthquake.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro wears a [ring of protection](/compendium/items/ring-of-protection.md)\
    \ and [glamoured studded leather](/compendium/items/glamoured-studded-leather.md)\
    \ disguised to look like fine clothing. He carries a [rod of rulership](/compendium/items/rod-of-rulership.md)\
    \ shaped like a ruby-tipped cane."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro can use an action to present the rod and command obedience from\
    \ each creature of his choice that he can see within 120 feet of him. Each target\
    \ must succeed on a DC 15 Wisdom saving throw or be [charmed](/rules/conditions.md#charmed)\
    \ for 8 hours by Victoro. While [charmed](/rules/conditions.md#charmed) in this\
    \ way, the creature regards Victoro as its trusted leader. If harmed by Victoro\
    \ or his companions, or commanded to do something contrary to its nature, a target\
    \ ceases to be [charmed](/rules/conditions.md#charmed) in this way. The rod can't\
    \ be used again until the next dawn."
  "name": "Rod of Rulership"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro makes two attacks with his rapier."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) piercing damage."
  "name": "Rapier"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro becomes [invisible](/rules/conditions.md#invisible) until the end\
    \ of his next turn. He becomes visible early immediately after he attacks or casts\
    \ a spell."
  "name": "Cloak of Shadows (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Victoro summons a [barbed devil](/compendium/bestiary/fiend/barbed-devil.md).\
    \ The devil appears in an unoccupied space within 30 feet of Victoro, acts as\
    \ Victoro's ally, and can't summon other devils. It remains for 1 minute, until\
    \ it or Victoro dies, or until Victoro dismisses it as an action."
  "name": "Summon Devil (Recharges after 9 Days)"
"source":
- "WDH"
"image": "[[Victoro Cassalanter.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 218*

## Description

The lord of House Cassalanter is a devilishly handsome half-elf who likes coin and power. He and his wife gained both by cutting a deal with Asmodeus-which involved trading away the souls of their three children.

Victoro is a priest of Asmodeus, though his devotion to the Lord of the Nine Hells is a secret known only to his wife and his closest friends. Most Waterdavians know him as a successful banker, philanthropist, and worshiper of Lathander. Some of his business profits go toward feeding and sheltering the poor. But behind this veneer of generosity, Victoro is a self-serving beast.

The soul of Victoro's eldest son, Osvaldo, is forever lost and can't be saved. To allay his guilt, Victoro has forged a plan to win back the souls of his young twins, Terenzio and Elzerina. Under the terms of the contract, their souls will be forfeit on their ninth birthdays, and that day is fast approaching. But Victoro can buy his way out of the obligation by providing, as the contract states, "one shy of a million gold coins and the sacrifice of one shy of a hundred unfortunate souls."

Victoro is well schooled, suave, slow to anger, and blessed with good health, long life, and immunity to disease. He dresses in the latest fashions and walks with a ruby-tipped cane, though not because he needs to. This cane has the magical properties of a rod of rulership.