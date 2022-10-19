---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/half-elf
aliases: ["Jaheira"]
statblock: true
"name": "Jaheira"
"size": "Medium"
"type": "humanoid"
"subtype": "half-elf"
"alignment": "Any Non-Lawful alignment"
"ac": !!int "11"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "14"
- !!int "12"
- !!int "16"
- !!int "12"
- !!int "20"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "10"
  "Constitution": !!int "8"
"skillsaves":
  "Medicine": !!int "10"
  "Nature": !!int "6"
  "Perception": !!int "10"
"senses": "darkvision 60 ft., passive Perception 20"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jaheira is a 15th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 18, +10 to hit with spell attacks). She has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [produce flame](/compendium/spells/produce-flame.md),\
    \ [shillelagh](/compendium/spells/shillelagh.md)\n\n1st level (4 1st-level slots):\
    \ [entangle](/compendium/spells/entangle.md), [longstrider](/compendium/spells/longstrider.md),\
    \ [speak with animals](/compendium/spells/speak-with-animals.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [barkskin](/compendium/spells/barkskin.md)\n\n3rd level (3 3rd-level slots):\
    \ [conjure animals](/compendium/spells/conjure-animals.md), [water breathing](/compendium/spells/water-breathing.md)\n\
    \n4th level (3 4th-level slots): [dominate beast](/compendium/spells/dominate-beast.md),\
    \ [locate creature](/compendium/spells/locate-creature.md), [stoneskin](/compendium/spells/stoneskin.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)\n\n5th level (3 5th-level\
    \ slots): [commune with nature](/compendium/spells/commune-with-nature.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [tree stride](/compendium/spells/tree-stride.md)\n\
    \n6th level (1 6th-level slots): [heal](/compendium/spells/heal.md), [heroes'\
    \ feast](/compendium/spells/heroes-feast.md), [sunbeam](/compendium/spells/sunbeam.md)\n\
    \n7th level (1 7th-level slots): [fire storm](/compendium/spells/fire-storm.md)\n\
    \n8th level (1 8th-level slots): [animal shapes](/compendium/spells/animal-shapes.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jaheira has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Jaheira to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jaheira makes two attacks with her quarterstaff."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit (+10 to hit with shillelagh), reach 5\
    \ ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning\
    \ damage if wielded with two hands or 9 (1d8 + 5) bludgeoning damage with shillelagh."
  "name": "Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jaheira casts the spell conjure animals using a 7th level slot. She can\
    \ choose to summon three CR 2 beasts or six CR 1 beasts. All summoned beasts have\
    \ maximum hit points. The damage from the summoned beasts natural weapons are\
    \ considered magical for the purpose of overcoming immunity and resistance to\
    \ nonmagical attacks and damage."
  "name": "Mighty Summons (1/Day)"
"source":
- "MaBJoV"
name: Jaheira
image: "[[Jaheira.png]]"
---

# Jaheira

```statblock
"name": "Jaheira"
"size": "Medium"
"type": "humanoid"
"subtype": "half-elf"
"alignment": "Any Non-Lawful alignment"
"ac": !!int "11"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "14"
- !!int "12"
- !!int "16"
- !!int "12"
- !!int "20"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "10"
  "Constitution": !!int "8"
"skillsaves":
  "Medicine": !!int "10"
  "Nature": !!int "6"
  "Perception": !!int "10"
"senses": "darkvision 60 ft., passive Perception 20"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jaheira is a 15th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 18, +10 to hit with spell attacks). She has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [produce flame](/compendium/spells/produce-flame.md),\
    \ [shillelagh](/compendium/spells/shillelagh.md)\n\n1st level (4 1st-level slots):\
    \ [entangle](/compendium/spells/entangle.md), [longstrider](/compendium/spells/longstrider.md),\
    \ [speak with animals](/compendium/spells/speak-with-animals.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [barkskin](/compendium/spells/barkskin.md)\n\n3rd level (3 3rd-level slots):\
    \ [conjure animals](/compendium/spells/conjure-animals.md), [water breathing](/compendium/spells/water-breathing.md)\n\
    \n4th level (3 4th-level slots): [dominate beast](/compendium/spells/dominate-beast.md),\
    \ [locate creature](/compendium/spells/locate-creature.md), [stoneskin](/compendium/spells/stoneskin.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)\n\n5th level (3 5th-level\
    \ slots): [commune with nature](/compendium/spells/commune-with-nature.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [tree stride](/compendium/spells/tree-stride.md)\n\
    \n6th level (1 6th-level slots): [heal](/compendium/spells/heal.md), [heroes'\
    \ feast](/compendium/spells/heroes-feast.md), [sunbeam](/compendium/spells/sunbeam.md)\n\
    \n7th level (1 7th-level slots): [fire storm](/compendium/spells/fire-storm.md)\n\
    \n8th level (1 8th-level slots): [animal shapes](/compendium/spells/animal-shapes.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jaheira has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Jaheira to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jaheira makes two attacks with her quarterstaff."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit (+10 to hit with shillelagh), reach 5\
    \ ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning\
    \ damage if wielded with two hands or 9 (1d8 + 5) bludgeoning damage with shillelagh."
  "name": "Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jaheira casts the spell conjure animals using a 7th level slot. She can\
    \ choose to summon three CR 2 beasts or six CR 1 beasts. All summoned beasts have\
    \ maximum hit points. The damage from the summoned beasts natural weapons are\
    \ considered magical for the purpose of overcoming immunity and resistance to\
    \ nonmagical attacks and damage."
  "name": "Mighty Summons (1/Day)"
"source":
- "MaBJoV"
"image": "[[Jaheira.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 60*

## Description

Jaheira is a half-elf druid and an experienced leader within the organization known as the Harpers. She originally traveled to the Sword Coast with Khalid, her husband and fellow Harper, to investigate the Iron Crisis of 1368 DR on behalf of the secretive organization. Khalid was killed during the mission and Jaheira has never remarried. Although harsh and somewhat abrasive, Jaheira is fiercely loyal to the Harpers.

Born to a noble Tethyrian family loyal to King Alemander, Jaheira lost her parents at a young age at the hands of a mob during the country's violent civil war. She would have met the same fate, had a servant not saved her by smuggling her out of the castle. Chance led the pair to find a group of druids in the nearby forest, which took Jaheira in and raised her.

Jaheira believes that true balance and protection of nature can only come through action. When given no other choice, however, Jaheira strongly prefers to facilitate good over evil.

Jaheira has been a member of the Harpers for more than a century, though her elven blood gives her an appearance that is still relatively youthful. However, her age means that she is no longer an active Harper agent. Instead she seeks out those that she feels might help with the Harper cause and tries to recruit them. Jaheira is always on the lookout for an excuse to go back out on to the field and use her magic to destroy those who would harm the natural world or oppose the goals of the Harpers.

**Jaheira as a Contact.** Jaheira becomes available as a contact for the Harpers at 9th level. Jaheira can put you in contact with a powerful Harper ally. These allies can come to your aid in a time of need. The cost is a magic item that Jaheira enchants. When you require assistance, you may read the magical rune and your item will vanish to be replaced by a powerful ally who will fight by your side for one hour.

**Allies via Jaheira**

| Ally | Required Level | Magic Item Sacrifice |
|------|----------------|----------------------|
| Mage, unicorn or Vellin (see entry in on next page) | 9 | Uncommon Boots, Cloak, Ring, Rod, Staff, Wand or Weapon |
| Assassin (named Arylin Moonblade), young silver dragon or deva | 12 | Uncommon Boots, Cloak, Ring, Rod, Staff, Wand or Weapon |
| Archmage (named either alustriel silverhand, Elminster Aumar or laeral silverhand), adult brass dragon or Jaheira | 14 | Rare Boots, Cloak, Ring, Rod, Staff, Wand or Weapon |
| Planetar | 16 | Rare Boots, Cloak, Ring, Rod, Staff, Wand or Weapon |
^allies-via-jaheira