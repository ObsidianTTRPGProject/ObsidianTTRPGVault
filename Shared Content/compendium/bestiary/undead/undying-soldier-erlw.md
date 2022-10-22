---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/undead
aliases: ["Undying Soldier"]
statblock: true
"name": "Undying Soldier"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Good"
"ac": !!int "17"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Religion": !!int "4"
  "Perception": !!int "3"
  "History": !!int "4"
"damage_vulnerabilities": "necrotic"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Elvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier magically sheds bright light in a 10-foot radius and dim light\
    \ for an additional 10 feet. The soldier can extinguish or restore this light\
    \ as a bonus action."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier has advantage on saving throws against any effect that turns\
    \ undead."
  "name": "Turn Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier makes two spear attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage or 7 (1d8 + 3) piercing damage\
    \ if used with two hands to make a melee attack, plus 9 (2d8) radiant damage if\
    \ the target is a fiend or undead."
  "name": "Spear"
"source":
- "ERLW"
name: Undying Soldier
image: "[[Undying Soldier.png]]"
---

# Undying Soldier

```statblock
"name": "Undying Soldier"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Good"
"ac": !!int "17"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Religion": !!int "4"
  "Perception": !!int "3"
  "History": !!int "4"
"damage_vulnerabilities": "necrotic"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Elvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier magically sheds bright light in a 10-foot radius and dim light\
    \ for an additional 10 feet. The soldier can extinguish or restore this light\
    \ as a bonus action."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier has advantage on saving throws against any effect that turns\
    \ undead."
  "name": "Turn Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The soldier makes two spear attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage or 7 (1d8 + 3) piercing damage\
    \ if used with two hands to make a melee attack, plus 9 (2d8) radiant damage if\
    \ the target is a fiend or undead."
  "name": "Spear"
"source":
- "ERLW"
"image": "[[Undying Soldier.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 311*

## Description

Undying soldiers make up the army of Aerenal's City of the Dead. They guard the temples of the Undying Court and the mansions of the noble lines of Aerenal, and Aereni ambassadors are often accompanied by undead bodyguards. Undying soldiers wear heirloom armor and wield ornate weaponry.

The undying are undead creatures sustained by positive energy or the devotion of mortal beings. Where strong negative emotions can trap a spirit as a ghost or wraith, the undying are spirits who linger because they are cherished and who in turn seek to protect and guide the people of their community.

Though it's possible for undying to appear anywhere, it is rare for them to manifest naturally. The only place where they are found in significant numbers is the island of Aerenal, a land whose close ties to the plane of Irian suffuse it with positive energy. The elves of Aerenal spent thousands of years working to develop rituals that tap into this energy, allowing them to preserve their greatest citizens as undying.

**The Face of Death.** The light of Irian sustains the spirit, but it doesn't preserve the physical body. The undying appear as desiccated corpses, their flesh withering away over centuries. At the same time, the spirit of the undying surrounds the body—an aura of light forming a spectral shadow of the soul. The light shed by an undying doesn't generate heat, but it provides a sense of warmth and comfort.

The most powerful of the undying can separate their spirits from their physical forms, existing as beings of pure light. This state is the ultimate goal of the elves of Aerenal, and such beings are known as ascendant councilors.

**Bound by Love and Light.** Undying are sustained by positive energy, whether found in manifest zones tied to Irian—such as in Shae Mordai, the Aereni City of the Dead—or freely given by the devotion of mortal beings. The worship of the Undying Court is what sustains the undying of Aerenal, but devotion is a finite resource. As such, each elf that becomes an undying must earn their afterlife. If an undying elf leaves Aerenal, they require a community of elves or another source of positive energy to sustain them. Failing this, their light fades and they eventually die.

**The Undying Court.** The honored undead of Aerenal are united in the Undying Court. Based in the city of Shae Mordai, the members of the Undying Court spend their time meditating, engaging in research, or continuing to perfect the arts they practiced in life. They serve as guides and advisors to the living, and members of the noble lines of Aerenal can exercise the rite of counsel to consult with ancestors in Shae Mordai.

The greatest members of the Undying Court are the ascendant councilors. These beings of pure light are focused on contemplating the mysteries of life and the planes, and can work together to wield godlike power that allows them to shield Aerenal from almost any threat. However, the ascendant councilors can exercise power beyond Aerenal only by acting through devoted mortals—paladins and clerics of the Undying Court.

**Undead Nature.** An undying doesn't require air, food, drink, or sleep.