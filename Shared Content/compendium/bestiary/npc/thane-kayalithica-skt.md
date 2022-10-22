---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/huge
- monster/type/giant
aliases: ["Thane Kayalithica"]
statblock: true
"name": "Thane Kayalithica"
"size": "Huge"
"type": "giant"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "170"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "15"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "12"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Giant"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant's innate spellcasting ability is Wisdom. It can innately cast\
    \ the following spells, requiring no material components:\n\n1/day each: [stoneskin](/compendium/spells/stoneskin.md),\
    \ [time stop](/compendium/spells/time-stop.md)\n\n3/day each: [meld into stone](/compendium/spells/meld-into-stone.md),\
    \ [stone shape](/compendium/spells/stone-shape.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky\
    \ terrain."
  "name": "Stone Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant meditates for 1 hour, during which time it can do nothing else.\
    \ At the end of the hour, provided the giant's meditation has been uninterrupted,\
    \ it becomes [petrified](/rules/conditions.md#petrified) for 8 hours. At the end\
    \ of this time, the giant is no longer [petrified](/rules/conditions.md#petrified)\
    \ and gains tremorsense out to a range of 30 feet, as well as a measure of innate\
    \ spellcasting ability for the next 24 hours."
  "name": "Olach Morrah"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant tries to throw a Small or Medium creature within 10 feet of it.\
    \ The target must succeed on a DC 17 Dexterity saving throw or be hurled up to\
    \ 60 feet horizontally in a direction of the giant's choice. and land [prone](/rules/conditions.md#prone),\
    \ taking 1d6 bludgeoning damage for every 10 feet it was thrown."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant sends a rock tumbling along the ground in a 30-foot line that\
    \ is 5 feet wide. Each creature in that line must make a DC 17 Dexterity saving\
    \ throw, taking 22 (3d10 + 6) bludgeoning damage and falling [prone](/rules/conditions.md#prone)\
    \ on a failed save"
  "name": "Rolling Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two adamantine greatclub attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28\
    \ (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 17 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Rock"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a rock or similar object is hurled at the giant, the giant can, with\
    \ a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning\
    \ damage from it."
  "name": "Rock Catching"
"source":
- "SKT"
name: Thane Kayalithica
image: "[[Thane Kayalithica.png]]"
---

# Thane Kayalithica

```statblock
"name": "Thane Kayalithica"
"size": "Huge"
"type": "giant"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "170"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "15"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "12"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Giant"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant's innate spellcasting ability is Wisdom. It can innately cast\
    \ the following spells, requiring no material components:\n\n1/day each: [stoneskin](/compendium/spells/stoneskin.md),\
    \ [time stop](/compendium/spells/time-stop.md)\n\n3/day each: [meld into stone](/compendium/spells/meld-into-stone.md),\
    \ [stone shape](/compendium/spells/stone-shape.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky\
    \ terrain."
  "name": "Stone Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant meditates for 1 hour, during which time it can do nothing else.\
    \ At the end of the hour, provided the giant's meditation has been uninterrupted,\
    \ it becomes [petrified](/rules/conditions.md#petrified) for 8 hours. At the end\
    \ of this time, the giant is no longer [petrified](/rules/conditions.md#petrified)\
    \ and gains tremorsense out to a range of 30 feet, as well as a measure of innate\
    \ spellcasting ability for the next 24 hours."
  "name": "Olach Morrah"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant tries to throw a Small or Medium creature within 10 feet of it.\
    \ The target must succeed on a DC 17 Dexterity saving throw or be hurled up to\
    \ 60 feet horizontally in a direction of the giant's choice. and land [prone](/rules/conditions.md#prone),\
    \ taking 1d6 bludgeoning damage for every 10 feet it was thrown."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant sends a rock tumbling along the ground in a 30-foot line that\
    \ is 5 feet wide. Each creature in that line must make a DC 17 Dexterity saving\
    \ throw, taking 22 (3d10 + 6) bludgeoning damage and falling [prone](/rules/conditions.md#prone)\
    \ on a failed save"
  "name": "Rolling Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two adamantine greatclub attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28\
    \ (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 17 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Rock"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a rock or similar object is hurled at the giant, the giant can, with\
    \ a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning\
    \ damage from it."
  "name": "Rock Catching"
"source":
- "SKT"
"image": "[[Thane Kayalithica.png]]"
```
^statblock

*Source: Storm King's Thunder p. 153*

## Description

Stone giants are reclusive, quiet, and peaceful as long as they are left alone. Their granite-gray skin, gaunt features, and black, sunken eyes endow stone giants with a stern countenance. They are private creatures, hiding their lives and art away from the world.

**Inhabitants of a Stone World.** Secluded caves are the homes of the stone giants. Cavern networks are their towns, rocky tunnels their roads, and underground streams their waterways. Isolated mountain ranges aretheir continents, with the vast spans of land between seen as oceans that the stone giants only rarely cross.

In their dark, quiet caves, stone giants wordlessly chip away at elaborate carvings, measuring time in the echoing drip of water into cavern pools. In the deepest chambers of a stone giant settlement, far from the chittering of bats or the patrols paced out by the giants' cave bear companions, are holy places where silence and darkness are complete. Stone takes on its most sacred quality in these cavern cathedrals, their buttresses and columns carved with a beauty that shames the legendary stone craft of the dwarves.

**Carvers and Seers.** Among stone giants, artistry ranks as the greatest virtue. They create intricate murals, paint sprawling murals across cavern walls, and indulge in a wide variety of other artistic disciplines.They esteem stone carving as the greatest of skills.

Stone giants strive to draw shapes out of raw stone, which they believe reveal meaning inspired by their god, Skoraeus Stonebones. The giants appoint the tribe's best carvers as their leaders, shamans, and prophets. The holy hands of such giants become the hands of the god as they work.

**Graceful Athletes.** Despite their great size and musculature, stone giants are lithe and graceful. Skilled rock throwers are granted positions of high rank in the giants' ordning, testing and demonstrating their ability to hurl and catch enormous boulders. Such giants take the front ranks when a tribe has cause to defend its home or attack its enemies. However, even in combat, artistry is key. A stone giant hurling a rock performs not just a feat of brute strength but also one of stunning athleticism and poise.

**Dreamers under Sky.** Stone giants view the world outside their underground homes as a realm of dreams where nothing is entirely true or real. They behave in the surface world the way humanoids might behave in their own dreams, making little account for their actions and never fully trusting what they see or hear. A promise made above ground need not be kept. Insults can be made without apology. Killing prey or sentient beings is no cause for guilt in the dreaming world beneath the sky.

Stone giants lacking in athletic grace or artistic skill dwell at the fringes of their society, serving as the tribe's outlying guardians and far-wandering hunters. When trespassers stray too far into the mountain territory of a stone giant clan, those guardians greet them with hurled rocks and showers of splintered stone. Survivors of such encounters spread tales of stone giant violence, never realizing how little those brutes dwelling in the unreal dreaming world resemble their quiet and artistic kin.

**Giants.** Ancient empires once cast long shadows over a world that quaked beneath the giants' feet. In those lost days, these towering figures were dragon slayers, dreamers, crafters, and kings, but their kind fell from glory long ago. However, even divided among secluded clans scattered throughout the world, the giants maintain the customs and traditions of old.

**Old as Legend.** In remote regions of the world, the last remaining plinths, monoliths, and statues of the great giant empires bow their heads in desolate obscurity.Where once those empires sprawled across all lands, now the giants dwell in isolated tribes and clans.

Giants are almost as old as dragons, which were still young when the giants' heavy feet first shook the foundations of the world. As they spread across new lands, giants and dragons fought bitter generational wars that nearly brought both sides low. No living giant remembers what started the conflict, but myths and tales of their race's glorious dawn are still sung in their steadings and holdfasts, vilifying the primeval wyrms.Giants and dragons continue to harbor grudges against one another, and it is seldom that they will meet or occupy the same area without a fight.

**The Ordning.** Each of the main giant races-the cloud, fire, frost, hill, stone, and storm giants-are related by common elements of history, religion, and culture. They view one another as kindred, keeping any inherent animosity over territory and ambition to a minimum.

Giants belong to a caste structure called the ordning. Based on social class and highly organized, the ordning assigns a social rank to each giant. By understanding its place in the ordning, a giant knows which other giants are inferior or superior to it, since no two giants are equal. Each of the giant races analyzes a different combination of skills or qualities to determine the ordning. Giants make excelling in these qualities the purpose of their lives.

At the highest level of the ordning, the races of the giants are also ranked according to status. Storm giants are the highest in the ordning, followed by cloud giants, fire giants, frost giants, stone giants, hill giants, and finally giant kin such as fomorians, ettins, and ogres.

Regardless of a giant's rank among its own race, the chief of a hill giant tribe is inferior to the most common of stone giants. The lowest ranked giant of any type is superior to the highest ranked giant of an inferior type. It isn't considered evil to disrespect or even betray a giant of another type, merely rude.

**Giant Gods.** When the giants' ancient empires fell, Annam, father of all giants, forsook his children and the world. He swore never to look upon either again until the giants had returned to their glory and reclaimed their birthright as rulers of the world. As a result, giants pray not to Annam but to his divine children, along with a host of hero-deities and godly villains that make up the giants' pantheon.

Chief among these gods are the children of Annam, whose sons represent each type of giant: Stronmaus for storm giants, Memnor for cloud giants, Skoraeus Stonebones for stone giants, Thrym for frost giants, Surtur for fire giants, and Grolantor for hill giants. Not all giants automatically revere their kind's primary deity, however. Many good cloud giants refuse to worship the deceitful Memnor, and a storm giant dwelling in the icy mountains of the north might pay more homage to Thrym than Stronmaus. Other giants feel a stronger connection to Annam's daughters, who include Hiatea, the huntress and home warden; Iallanis, goddess of love and peace; and Diancastra, an impetuous and arrogant trickster.

Some giants abandon their own gods and fall prey to demon cults, paying homage to Baphomet or Kostchtchie. To worship them or any other non-giant deity is a great sin against the ordning, and almost certain to make a giant an outcast.