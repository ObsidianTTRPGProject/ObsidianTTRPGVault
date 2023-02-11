---
cssclass: json5e-monster
tags:
- compendium/src/mcv1sc
- monster/size/large
- monster/type/construct
aliases: ["Fractine"]
statblock: true
"name": "Fractine"
"size": "Large"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"stats":
- !!int "1"
- !!int "13"
- !!int "16"
- !!int "18"
- !!int "18"
- !!int "11"
"speed": "walk 0 ft., fly 60 ft. (hover)"
"skillsaves":
  "Perception": !!int "8"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled,\
  \ paralyzed, petrified, poisoned, prone, restrained, stunned"
"senses": "blindsight 360 ft. (blind beyond this radius), passive Perception 18"
"languages": ""
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fractine has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A spellcaster can use the fractine as a substitute focus when casting the\
    \ [scrying](/compendium/spells/scrying.md) spell or similar magic, provided the\
    \ spellcaster and the fractine are within 5 feet of each other."
  "name": "Scrying Focus"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fractine can occupy another creature's space and vice versa. It can\
    \ move through other creatures and objects as if they were difficult terrain,\
    \ but it takes 5 (1d10) force damage if it ends its turn inside an object."
  "name": "Two-Dimensionality"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fractine doesn't require air, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one target. Hit: 24 (8d6)\
    \ force damage."
  "name": "Extradimensional Touch"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fractine targets one creature of its size or smaller in its space.\
    \ The target must succeed on a DC 16 Dexterity saving throw or be imprisoned in\
    \ a demiplane. While the creature is imprisoned, a distorted image of it can be\
    \ seen on the fractine's two-dimensional surface.\n\nThe demiplane moves with\
    \ the fractine, has indestructible and opaque walls, and is only as big as it\
    \ needs to be to contain the target, which doesn't suffer from hunger or thirst\
    \ while imprisoned. No other creature can enter the demiplane, and the fractine\
    \ can't be harmed from within the demiplane.\n\nThe fractine can imprison only\
    \ one creature at a time and can release that creature as a bonus action. If the\
    \ fractine is reduced to 0 hit points, any creature in the fractine's demiplane\
    \ is released instantly. A released creature reappears in an unoccupied space\
    \ as close to the fractine (or where it died) as possible. A creature can leave\
    \ the demiplane on its own by using magic that enables planar travel, such as\
    \ the [plane shift](/compendium/spells/plane-shift.md) spell."
  "name": "Imprison"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being damaged by a creature it can see within 120 feet of\
    \ itself, the fractine forces that creature to make a DC 16 Constitution saving\
    \ throw. On a failed save, the creature takes 24 (8d6) force damage. On a successful\
    \ save, the creature takes half as much damage."
  "name": "Mirrored Damage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a Large fractine that has at least 10 hit points remaining takes bludgeoning,\
    \ piercing, slashing, or thunder damage from any source, it splits into two Medium\
    \ fractines. The new fractines occupy the space formerly occupied by the original\
    \ fractine, and each new fractine has hit points equal to half the original's,\
    \ rounded down. If the original fractine had a creature trapped in its demiplane,\
    \ that creature is released when the fractine splits, reappearing in an unoccupied\
    \ space as close to the new fractines as possible."
  "name": "Split"
"source":
- "MCV1SC"
name: Fractine
image: "[[Fractine.png]]"
---

# Fractine

```statblock
"name": "Fractine"
"size": "Large"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"stats":
- !!int "1"
- !!int "13"
- !!int "16"
- !!int "18"
- !!int "18"
- !!int "11"
"speed": "walk 0 ft., fly 60 ft. (hover)"
"skillsaves":
  "Perception": !!int "8"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled,\
  \ paralyzed, petrified, poisoned, prone, restrained, stunned"
"senses": "blindsight 360 ft. (blind beyond this radius), passive Perception 18"
"languages": ""
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fractine has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A spellcaster can use the fractine as a substitute focus when casting the\
    \ [scrying](/compendium/spells/scrying.md) spell or similar magic, provided the\
    \ spellcaster and the fractine are within 5 feet of each other."
  "name": "Scrying Focus"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fractine can occupy another creature's space and vice versa. It can\
    \ move through other creatures and objects as if they were difficult terrain,\
    \ but it takes 5 (1d10) force damage if it ends its turn inside an object."
  "name": "Two-Dimensionality"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fractine doesn't require air, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one target. Hit: 24 (8d6)\
    \ force damage."
  "name": "Extradimensional Touch"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fractine targets one creature of its size or smaller in its space.\
    \ The target must succeed on a DC 16 Dexterity saving throw or be imprisoned in\
    \ a demiplane. While the creature is imprisoned, a distorted image of it can be\
    \ seen on the fractine's two-dimensional surface.\n\nThe demiplane moves with\
    \ the fractine, has indestructible and opaque walls, and is only as big as it\
    \ needs to be to contain the target, which doesn't suffer from hunger or thirst\
    \ while imprisoned. No other creature can enter the demiplane, and the fractine\
    \ can't be harmed from within the demiplane.\n\nThe fractine can imprison only\
    \ one creature at a time and can release that creature as a bonus action. If the\
    \ fractine is reduced to 0 hit points, any creature in the fractine's demiplane\
    \ is released instantly. A released creature reappears in an unoccupied space\
    \ as close to the fractine (or where it died) as possible. A creature can leave\
    \ the demiplane on its own by using magic that enables planar travel, such as\
    \ the [plane shift](/compendium/spells/plane-shift.md) spell."
  "name": "Imprison"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being damaged by a creature it can see within 120 feet of\
    \ itself, the fractine forces that creature to make a DC 16 Constitution saving\
    \ throw. On a failed save, the creature takes 24 (8d6) force damage. On a successful\
    \ save, the creature takes half as much damage."
  "name": "Mirrored Damage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a Large fractine that has at least 10 hit points remaining takes bludgeoning,\
    \ piercing, slashing, or thunder damage from any source, it splits into two Medium\
    \ fractines. The new fractines occupy the space formerly occupied by the original\
    \ fractine, and each new fractine has hit points equal to half the original's,\
    \ rounded down. If the original fractine had a creature trapped in its demiplane,\
    \ that creature is released when the fractine splits, reappearing in an unoccupied\
    \ space as close to the new fractines as possible."
  "name": "Split"
"source":
- "MCV1SC"
"image": "[[Fractine.png]]"
```
^statblock

*Source: Monster Compendium Volume 1: Spelljammer Creatures p. 7*

## Description

> [!quote]- A quote from Emilou the Charismatic, Warlock and Scion of Acamar  
> 
> I've encountered a creature unlike any other in the multiverse: a flickering mirror tumbling across the Astral Sea toward some unknown destination, with a beholder's distorted reflection in its surface. Initially, I feared it was some kind of vessel. Now I believe the beholder was the mirror's prisoner.
> 
> As the flickering mirror approached me, I grew fearful. Would it imprison me as well? Luckily, it didn't. As it hovered next to me, I felt a curious tingling sensation. When I tried to touch it, the mirror withdrew slightly, as though it feared some harm might befall it or me. I remember casting a spell or two, hoping to communicate with the creature. A few seconds later, it stopped flickering and flew away. I think it feeds on magical energy.
> 
> This entity has piqued my curiosity. I must learn more. To the library at Starhold!

A fractine is a bizarre, two-dimensional creature that flies through Wildspace and the Astral Sea, folding and refolding like a piece of origami. When it encounters another creature, it flattens into a plane that resembles a trapezoidal mirror between 9 and 13 feet tall.

Astral explorers who have encountered fractines attest that the creatures are intelligent and often allow themselves to be used as scrying sensors, their reflective surfaces substituting for the mirror needed to cast certain divination spells. While being used in this way, the fractine siphons magical energy from the spellcaster—not enough to cause harm, but enough to make the caster take notice.

A fractine needs light and magical energy to survive. It can draw sustenance from a nearby light source, spellcaster, magic item, or magical effect without causing harm to anyone or anything. A fractine that doesn't consume light or magical energy for ten days begins to flicker. A day later, it folds in on itself and self-destructs, leaving no trace of itself behind. The destruction of a fractine is accompanied by a loud sound reminiscent of shattering glass.

A fractine attacks by falling on its targets, dealing damage as it passes through them. A fractine can also imprison a creature inside a demiplane contained within its two-dimensional form, the prisoner's distorted reflection visible in the fractine's glassy surface.

Bludgeoning, piercing, slashing, and thunder damage can cause a fractine to break into two smaller fractines, each one autonomous and capable of imprisoning creatures. When a fractine dies, it folds in on itself and disappears, releasing any creature trapped inside it.