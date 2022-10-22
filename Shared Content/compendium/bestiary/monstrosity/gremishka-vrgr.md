---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/tiny
- monster/type/monstrosity
aliases: ["Gremishka"]
statblock: true
"name": "Gremishka"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "10"
"hit_dice": "4d4"
"stats":
- !!int "6"
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "11"
- !!int "4"
"speed": "walk 30 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": "understands Common but can't speak"
"cr": "1/8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 2 (1d4\
    \ + 2) piercing damage plus 3 (1d6) force damage."
  "name": "Bite"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Immediately after a creature within 30 feet of the gremishka casts a spell,\
    \ the gremishka can spontaneously react to the magic. Roll a d6 to determine the\
    \ effect:\n\n1-2. The gremishka emanates magical energy. Each creature within\
    \ 30 feet of the gremishka must succeed on a DC 10 Constitution saving throw or\
    \ take 3 (1d6) force damage.\n\n3-4. The gremishka surges with magical energy\
    \ and regains 3 (1d6) hit points.\n\n5-6. The gremishka explodes and dies,\
    \ and one swarm of gremishkas instantly appears in the space where this gremishka\
    \ died. The swarm uses the gremishka's initiative."
  "name": "Magic Allergy (1/Day)"
"source":
- "VRGR"
name: Gremishka
image: "[[Gremishka.png]]"
---

# Gremishka

```statblock
"name": "Gremishka"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "10"
"hit_dice": "4d4"
"stats":
- !!int "6"
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "11"
- !!int "4"
"speed": "walk 30 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": "understands Common but can't speak"
"cr": "1/8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 2 (1d4\
    \ + 2) piercing damage plus 3 (1d6) force damage."
  "name": "Bite"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Immediately after a creature within 30 feet of the gremishka casts a spell,\
    \ the gremishka can spontaneously react to the magic. Roll a d6 to determine the\
    \ effect:\n\n1-2. The gremishka emanates magical energy. Each creature within\
    \ 30 feet of the gremishka must succeed on a DC 10 Constitution saving throw or\
    \ take 3 (1d6) force damage.\n\n3-4. The gremishka surges with magical energy\
    \ and regains 3 (1d6) hit points.\n\n5-6. The gremishka explodes and dies,\
    \ and one swarm of gremishkas instantly appears in the space where this gremishka\
    \ died. The swarm uses the gremishka's initiative."
  "name": "Magic Allergy (1/Day)"
"source":
- "VRGR"
"image": "[[Gremishka.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 235*

## Description

Gremishkas are the vicious products of mistakes made by novice spellcasters seeking to create life. The results are cat-sized, magically unstable creatures with a taste for the trappings of magic—particularly spellbooks, spell components, familiars, and the like. Gremishkas delight in tormenting magic-users, holding vicious grudges against those who gave them life as they infest the walls of spellcasters' homes or the surrounding lands.

Despite their feral appearances, gremishkas are cunning creatures. They might imitate the sounds of whimpering children or wounded animals to coax victims into tight quarters. While they favor attacking spellcasters, gremishkas are opportunistic hunters and lash out at anything they think they can overwhelm—or just get a bite of.

Gremishkas have an unstable relationship with magic. Spells cast near a gremishka might rebound onto those nearby or cause the monster to explode, its scaly chunks rapidly reforming into duplicate gremishkas. These spontaneously created swarms can rapidly turn a single annoying gremishka into a chittering, magic-reflecting wave of teeth and claws.