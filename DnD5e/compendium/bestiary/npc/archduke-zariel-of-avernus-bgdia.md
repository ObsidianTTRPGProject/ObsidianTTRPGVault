---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/large
- monster/type/fiend/devil
aliases: ["Archduke Zariel of Avernus"]
statblock: true
"name": "Archduke Zariel of Avernus"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "580"
"hit_dice": "40d10 + 360"
"stats":
- !!int "27"
- !!int "24"
- !!int "28"
- !!int "26"
- !!int "27"
- !!int "30"
"speed": "walk 50 ft., fly 150 ft."
"saves":
  "Charisma": !!int "18"
  "Wisdom": !!int "16"
  "Intelligence": !!int "16"
"skillsaves":
  "Intimidation": !!int "18"
  "Perception": !!int "16"
"damage_resistances": "fire; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 26"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel's innate spellcasting ability is Charisma (spell save DC 26). She\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [alter self](/compendium/spells/alter-self.md) (can become Medium\
    \ when changing her appearance), [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [fireball](/compendium/spells/fireball.md), [invisibility](/compendium/spells/invisibility.md)\
    \ (self only), [wall of fire](/compendium/spells/wall-of-fire.md)\n\n3/day each:\
    \ [blade barrier](/compendium/spells/blade-barrier.md), [dispel evil and good](/compendium/spells/dispel-evil-and-good.md),\
    \ [finger of death](/compendium/spells/finger-of-death.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede Zariel's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel's weapon attacks are magical. When she hits with any weapon, the\
    \ weapon deals an extra 36 (8d8) fire damage (included in the weapon attacks below)."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Zariel fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel regains 20 hit points at the start of her turn. If she takes radiant\
    \ damage, this trait doesn't function at the start of her next turn. Zariel dies\
    \ only if she starts her turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel attacks twice with her flail and once with Matalotok. She can substitute\
    \ Horrid Touch for Matalotok."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 17 (2d8\
    \ + 8) piercing damage plus 36 (8d8) fire damage."
  "name": "Flail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning, or 19 (2d10 + 8) bludgeoning damage if used with two hands,\
    \ plus 36 (8d8) fire damage. In addition, the weapon emits a burst of cold that\
    \ deals 10 (3d6) cold damage to each creature within 30 feet of it."
  "name": "Matalotok (Warhammer)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel touches one creature within 10 feet of her. The target must succeed\
    \ on a DC 26 Constitution saving throw or take 44 (8d10) necrotic damage and be\
    \ [poisoned](/rules/conditions.md#poisoned) for 1 minute. While [poisoned](/rules/conditions.md#poisoned)\
    \ in this way, the target is also [blinded](/rules/conditions.md#blinded) and\
    \ [deafened](/rules/conditions.md#deafened). The target can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Horrid Touch (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel magically teleports, along with any equipment she is wearing and\
    \ carrying, up to 120 feet to an unoccupied space she can see."
  "name": "Teleport"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel turns her magical gaze toward one creature she can see within 120\
    \ feet of her and commands it to combust. The target must succeed on a DC 26 Wisdom\
    \ saving throw or take 22 (4d10) fire damage."
  "name": "Immolating Gaze (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel uses her Teleport action."
  "name": "Teleport"
"source":
- "BGDIA"
name: Archduke Zariel of Avernus
image: "[[Archduke Zariel of Avernus.png]]"
---

# Archduke Zariel of Avernus

```statblock
"name": "Archduke Zariel of Avernus"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "580"
"hit_dice": "40d10 + 360"
"stats":
- !!int "27"
- !!int "24"
- !!int "28"
- !!int "26"
- !!int "27"
- !!int "30"
"speed": "walk 50 ft., fly 150 ft."
"saves":
  "Charisma": !!int "18"
  "Wisdom": !!int "16"
  "Intelligence": !!int "16"
"skillsaves":
  "Intimidation": !!int "18"
  "Perception": !!int "16"
"damage_resistances": "fire; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 26"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel's innate spellcasting ability is Charisma (spell save DC 26). She\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [alter self](/compendium/spells/alter-self.md) (can become Medium\
    \ when changing her appearance), [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [fireball](/compendium/spells/fireball.md), [invisibility](/compendium/spells/invisibility.md)\
    \ (self only), [wall of fire](/compendium/spells/wall-of-fire.md)\n\n3/day each:\
    \ [blade barrier](/compendium/spells/blade-barrier.md), [dispel evil and good](/compendium/spells/dispel-evil-and-good.md),\
    \ [finger of death](/compendium/spells/finger-of-death.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede Zariel's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel's weapon attacks are magical. When she hits with any weapon, the\
    \ weapon deals an extra 36 (8d8) fire damage (included in the weapon attacks below)."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Zariel fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel regains 20 hit points at the start of her turn. If she takes radiant\
    \ damage, this trait doesn't function at the start of her next turn. Zariel dies\
    \ only if she starts her turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel attacks twice with her flail and once with Matalotok. She can substitute\
    \ Horrid Touch for Matalotok."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 17 (2d8\
    \ + 8) piercing damage plus 36 (8d8) fire damage."
  "name": "Flail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning, or 19 (2d10 + 8) bludgeoning damage if used with two hands,\
    \ plus 36 (8d8) fire damage. In addition, the weapon emits a burst of cold that\
    \ deals 10 (3d6) cold damage to each creature within 30 feet of it."
  "name": "Matalotok (Warhammer)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel touches one creature within 10 feet of her. The target must succeed\
    \ on a DC 26 Constitution saving throw or take 44 (8d10) necrotic damage and be\
    \ [poisoned](/rules/conditions.md#poisoned) for 1 minute. While [poisoned](/rules/conditions.md#poisoned)\
    \ in this way, the target is also [blinded](/rules/conditions.md#blinded) and\
    \ [deafened](/rules/conditions.md#deafened). The target can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Horrid Touch (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel magically teleports, along with any equipment she is wearing and\
    \ carrying, up to 120 feet to an unoccupied space she can see."
  "name": "Teleport"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel turns her magical gaze toward one creature she can see within 120\
    \ feet of her and commands it to combust. The target must succeed on a DC 26 Wisdom\
    \ saving throw or take 22 (4d10) fire damage."
  "name": "Immolating Gaze (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zariel uses her Teleport action."
  "name": "Teleport"
"source":
- "BGDIA"
"image": "[[Archduke Zariel of Avernus.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 243*

## Description

Once a mighty angel charged with watching the tides of the Blood War, Zariel succumbed to the corrupting influence of the Nine Hells and fell from grace. Asmodeus admired Zariel's passion for war and offered her rulership of Avernus. She accepted his offer and was transformed by Asmodeus into an archdevil.

Zariel's "rise" came at the expense of Bel, her pit fiend predecessor. Zariel and Bel hate each other. To keep Bel busy and out of her sight, Zariel tasks him with forging weapons, armor, and gruesome demon-slaying machines.

To replenish her legions, Zariel needs the souls of mortals to create lemures, which she can then promote to higher forms of devils. Only by tempting mortals with power on the Material Plane and striking bargains with them can she bind them to her in the afterlife.

**Matalotok.** Zariel recently defeated the demon lord Kostchtchie and took his hammer, Matalotok, which grants Zariel immunity to cold damage. Without this hammer, Zariel has resistance to cold damage instead.