---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/dragon
- monster/environment/underdark
aliases: ["Young Red Shadow Dragon"]
statblock: true
"name": "Young Red Shadow Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "23"
- !!int "10"
- !!int "21"
- !!int "14"
- !!int "11"
- !!int "19"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "5"
  "Wisdom": !!int "5"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "10"
  "Perception": !!int "10"
"damage_resistances": "necrotic"
"damage_immunities": "fire"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 18"
"languages": "Common, Draconic"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the dragon has resistance to damage that\
    \ isn't force, psychic, or radiant."
  "name": "Living Shadow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the dragon can take the Hide action as\
    \ a bonus action."
  "name": "Shadow Stealth"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the dragon has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 3 (1d6) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales shadowy fire in a 30-foot cone. Each creature in that\
    \ area must make a DC 18 Dexterity saving throw, taking 56 (16d6) necrotic damage\
    \ on a failed save, or half as much damage on a successful one. A humanoid reduced\
    \ to 0 hit points by this damage dies, and an undead [shadow](/compendium/bestiary/undead/shadow.md)\
    \ rises from its corpse and acts immediately after the dragon in the initiative\
    \ count. The shadow is under the dragon's control."
  "name": "Shadow Breath (Recharge 5-6)"
"source":
- "MM"
name: Young Red Shadow Dragon
image: "[[Young Red Shadow Dragon.png]]"
---

# Young Red Shadow Dragon

```statblock
"name": "Young Red Shadow Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "23"
- !!int "10"
- !!int "21"
- !!int "14"
- !!int "11"
- !!int "19"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "5"
  "Wisdom": !!int "5"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "10"
  "Perception": !!int "10"
"damage_resistances": "necrotic"
"damage_immunities": "fire"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 18"
"languages": "Common, Draconic"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the dragon has resistance to damage that\
    \ isn't force, psychic, or radiant."
  "name": "Living Shadow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the dragon can take the Hide action as\
    \ a bonus action."
  "name": "Shadow Stealth"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the dragon has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 3 (1d6) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales shadowy fire in a 30-foot cone. Each creature in that\
    \ area must make a DC 18 Dexterity saving throw, taking 56 (16d6) necrotic damage\
    \ on a failed save, or half as much damage on a successful one. A humanoid reduced\
    \ to 0 hit points by this damage dies, and an undead [shadow](/compendium/bestiary/undead/shadow.md)\
    \ rises from its corpse and acts immediately after the dragon in the initiative\
    \ count. The shadow is under the dragon's control."
  "name": "Shadow Breath (Recharge 5-6)"
"source":
- "MM"
"image": "[[Young Red Shadow Dragon.png]]"
```
^statblock

*Source: Monster Manual p. 85*

## Description

Shadow dragons are true dragons that were either born in the Shadowfell or transformed by years spent within its dismal confines. Some shadow dragons embrace the Shadowfell for its bleak landscapes and desolation. Others seek to return to the Material Plane, hungry to spread the darkness and evil of the Plane of Shadow.

**Dark Portals.** Portals to the Shadowfell manifest in forlorn places and the deep gloom of subterranean caverns. The dragons that lair in such places often discover these portals and find themselves transported to a new realm. Ancient dragons that sleep in their lairs for months or years at a time might find themselves spirited away, never knowing that a portal has formed without their knowledge as they dream.

**Recast in Shadow.** The transformation to a shadow dragon happens over a period of years, during which time a dragon's scales lose their luster and fade to a charcoal hue. Its leathery wings become translucent, its eyes paling to pools of opalescent gray. Shadow dragons find sunlight abhorrent, and they are weaker in bright light than they are in darkness. Darkness makes the dragon fade to a spectral shadow of its former self. The magical nature of dragons holds an attraction for the Shadowfell, which seems somehow to crave the might and majesty of these great reptiles. The Shadowfell also has a dispiriting effect on its denizens, such that the longer a creature remains on the plane, the more it accepts the plane's malaise. As months and years pass for a dragon on the Shadowfell, it becomes aware of the transformation being wrought upon it, and yet can do nothing to prevent it.

**Back in the World.** A shadow dragon is so suffused with the power of the Shadowfell that even a return to the Material Plane can't undo its transformation. Some shadow dragons attempt to lure other creatures from the mortal realm back to the Shadowfell to keep them company, at least until they tire of their guests and devour them. Others are happy to leave the Shadowfell behind forever, understanding that treasure and power are easier to come by in the Material Plane.

**Shadow Dragon Template.** Only a true dragon can transform into a shadow dragon, and only if it is born in the Shadowfell or remains there for several years. A dracolich can't be turned into a shadow dragon, since it loses its draconic nature when it becomes undead.

When a dragon becomes a shadow dragon, it retains its statistics except as described below. The shadow dragon might retain or lose any or all of its lair actions or inherit new ones, as the DM sees fit.

**Damage Resistances.** The dragon has resistance to necrotic damage.

**Skill Proficiency Stealth.** The dragon's proficiency bonus is doubled for its Dexterity ([Stealth](/rules/skills.md#Stealth)) checks.

**Living Shadow.** While in dim light or darkness, the dragon has resistance to damage that isn't force, psychic, or radiant.

**Shadow Stealth.** While in dim light or darkness, the dragon can take the Hide action as a bonus action.

**Sunlight Sensitivity.** While in sunlight, the dragon has disadvantage on attack rolls, as well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight.

**New Action Bite.** If the dragon deals acid, cold, fire, lightning, or poison damage with its bite, change that damage type to necrotic.

**New Action Shadow Breath.** Any damage-dealing breath weapon possessed by the dragon deals necrotic damage instead of its original damage type. A humanoid reduced to 0 hit points by this damage dies, and an undead shadow rises from its corpse and acts immediately after the dragon in the initiative count. The shadow is under the dragon's control.

## Environment

underdark