---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/huge
- monster/type/giant
aliases: ["King Hekaton"]
statblock: true
"name": "King Hekaton"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Good"
"ac": !!int "16"
"hp": !!int "330"
"hit_dice": "20d12 + 100"
"stats":
- !!int "29"
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "18"
"speed": "walk 50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Strength": !!int "14"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "14"
  "Perception": !!int "9"
  "History": !!int "8"
  "Arcana": !!int "8"
"damage_resistances": "cold"
"damage_immunities": "lightning, thunder"
"senses": "passive Perception 19"
"languages": "Common, Giant"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant's innate spellcasting ability is Charisma (spell save DC 17).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [detect magic](/compendium/spells/detect-magic.md), [feather fall](/compendium/spells/feather-fall.md),\
    \ [levitate](/compendium/spells/levitate.md), [light](/compendium/spells/light.md)\n\
    \n3/day each: [control weather](/compendium/spells/control-weather.md), [water\
    \ breathing](/compendium/spells/water-breathing.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hekaton can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hekaton makes two broken chain attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 18 (3d6\
    \ + 9) bludgeoning damage."
  "name": "Broken Chain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 120/480 ft., one target. Hit:\
    \ 18 (3d10 + 2) piercing damage."
  "name": "Ballista"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hekaton hurls a magical lightning bolt at a point he can see within 500\
    \ feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity\
    \ saving throw, taking 54 (12d8) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Strike (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hekaton stomps the ground, triggering a thunderclap. All other creatures\
    \ within 15 feet of him must succeed on a DC 17 Constitution saving throw or take\
    \ 33 (6d10) thunder damage and be [deafened](/rules/conditions.md#deafened) until\
    \ the start of Hekaton's next turn. On a successful save, a creature takes half\
    \ as much damage and isn't [deafened](/rules/conditions.md#deafened). The thunderclap\
    \ can be heard out to a range of 1,200 feet."
  "name": "Thunderous Stomp (Recharge 6)"
"source":
- "SKT"
name: King Hekaton
image: "[[King Hekaton.png]]"
---

# King Hekaton

```statblock
"name": "King Hekaton"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Good"
"ac": !!int "16"
"hp": !!int "330"
"hit_dice": "20d12 + 100"
"stats":
- !!int "29"
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "18"
"speed": "walk 50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Strength": !!int "14"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "14"
  "Perception": !!int "9"
  "History": !!int "8"
  "Arcana": !!int "8"
"damage_resistances": "cold"
"damage_immunities": "lightning, thunder"
"senses": "passive Perception 19"
"languages": "Common, Giant"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant's innate spellcasting ability is Charisma (spell save DC 17).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [detect magic](/compendium/spells/detect-magic.md), [feather fall](/compendium/spells/feather-fall.md),\
    \ [levitate](/compendium/spells/levitate.md), [light](/compendium/spells/light.md)\n\
    \n3/day each: [control weather](/compendium/spells/control-weather.md), [water\
    \ breathing](/compendium/spells/water-breathing.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hekaton can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hekaton makes two broken chain attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 18 (3d6\
    \ + 9) bludgeoning damage."
  "name": "Broken Chain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 120/480 ft., one target. Hit:\
    \ 18 (3d10 + 2) piercing damage."
  "name": "Ballista"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hekaton hurls a magical lightning bolt at a point he can see within 500\
    \ feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity\
    \ saving throw, taking 54 (12d8) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Strike (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hekaton stomps the ground, triggering a thunderclap. All other creatures\
    \ within 15 feet of him must succeed on a DC 17 Constitution saving throw or take\
    \ 33 (6d10) thunder damage and be [deafened](/rules/conditions.md#deafened) until\
    \ the start of Hekaton's next turn. On a successful save, a creature takes half\
    \ as much damage and isn't [deafened](/rules/conditions.md#deafened). The thunderclap\
    \ can be heard out to a range of 1,200 feet."
  "name": "Thunderous Stomp (Recharge 6)"
"source":
- "SKT"
"image": "[[King Hekaton.png]]"
```
^statblock

*Source: Storm King's Thunder p. 222*

## Description

Storm giants are contemplative seers that live in places far removed from mortal civilization. Most have pale purple-gray skin and hair, and glittering emerald eyes.

Some rare storm giants are violet-skinned, with deep violet or blue-black hair and silvery gray or purple eyes. They are benevolent and wise unless angered, in response to which the fury of a storm giant can affect the fate of thousands.

**Distant Prophet-Kings.** Storm giants live in isolated refuges so far above the surface of the world or below the sea that they are beyond the reach of most other creatures. Some make their abodes in cloud-top castles so high that flying dragons appear as specks below. Others live atop mountain peaks that pierce the clouds. Some occupy palaces covered with algae and coral at the bottom of the ocean, or grim fortresses in undersea rifts.

**Detached Oracles.** Storm giants recall the glory of ancient giant empires forged by the god Annam. They seek to restore what was lost when those empires fell. They don't compete for status in the ordning but live out the centuries of their existence in contemplative seclusion, watching the starry heavens and the ocean's depths for signs, symbols, and omens of Annam's favor.

Storm giants see the events of the world in a wide perspective. They can foretell the rise and fall of kings and empires, see the beginnings and ends of fortune and disaster, and find the patterns within seemingly unrelated events. By reading omens and prophesying, storm giants learn of vast secrets previously unknown and troves of lore utterly forgotten.

Kings will rise and fall, wars will be won and lost, and good and evil will wrestle in conflict. Storm giants have watched these events in the manner of mortal gods over many lifetimes, and they know it is pointless to intervene. Even so, a storm giant might willingly disclose certain secrets to benevolent beings that visit its remote domain with specific purpose. Such creatures must speak and act respectfully, however, for a storm giant roused to anger is a force of utter destruction.

**Solitary Lives.** Storm giants communicate infrequently with others of their kind. They do so usually to compare signs and omens or engage in a rare courtship. Storm giant parents stay together to raise a child to maturity, then return to the solitary isolation they cherish.

Some humanoid cultures worship storm giants as they would worship lesser gods, creating myths and stories around the giants' exploits and vast knowledge. A storm giant is governed by the dictates of its conscience, however, and not by any culture's laws or codes of honor. As such, a storm giant that bends its mind toward greed or gains a taste for petty power can easily become a terrible threat.

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