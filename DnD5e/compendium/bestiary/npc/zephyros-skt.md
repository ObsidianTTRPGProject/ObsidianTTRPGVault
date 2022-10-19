---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/huge
- monster/type/giant
aliases: ["Zephyros"]
statblock: true
"name": "Zephyros"
"size": "Huge"
"type": "giant"
"alignment": "Neutral Good"
"ac": !!int "14"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "27"
- !!int "10"
- !!int "22"
- !!int "18"
- !!int "16"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "8"
  "Constitution": !!int "11"
"skillsaves":
  "Insight": !!int "8"
  "Perception": !!int "8"
"senses": "passive Perception 17"
"languages": "Common, Giant"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zephyros's innate spellcasting ability is Charisma. He can innately cast\
    \ the following spells, requiring no material components:\n\nAt will: [detect\
    \ magic](/compendium/spells/detect-magic.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [light](/compendium/spells/light.md)\n\n1/day each: [control weather](/compendium/spells/control-weather.md),\
    \ [gaseous form](/compendium/spells/gaseous-form.md)\n\n3/day each: [feather\
    \ fall](/compendium/spells/feather-fall.md), [fly](/compendium/spells/fly.md),\
    \ [misty step](/compendium/spells/misty-step.md), [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zephyros casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 17, +11 to\
    \ hit with spell attacks):\n\nAt will: [message](/compendium/spells/message.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1/day each: [cone of cold](/compendium/spells/cone-of-cold.md), [contact\
    \ other plane](/compendium/spells/contact-other-plane.md) (cast as 1 action),\
    \ [greater invisibility](/compendium/spells/greater-invisibility.md), [mass suggestion](/compendium/spells/mass-suggestion.md),\
    \ [nondetection](/compendium/spells/nondetection.md), [Otiluke's resilient sphere](/compendium/spells/otilukes-resilient-sphere.md),\
    \ [protection from energy](/compendium/spells/protection-from-energy.md), [tongues](/compendium/spells/tongues.md)\n\
    \n2/day each: [gust of wind](/compendium/spells/gust-of-wind.md), [levitate](/compendium/spells/levitate.md),\
    \ [magic missile](/compendium/spells/magic-missile.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zephyros has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zephyros tries to throw a Small or Medium creature within 10 feet of it.\
    \ The target must succeed on a DC 20 Dexterity saving throw or be hurled up to\
    \ 60 feet horizontally in a direction of Zephyros's choice and land [prone](/rules/conditions.md#prone),\
    \ taking 1d8 bludgeoning damage for every 10 feet it was thrown."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A magical aura of wind surrounds Zephyros. The aura is a 10-foot-radius\
    \ sphere that lasts as long as he maintains concentration on it (as if concentrating\
    \ on a spell). While the aura is in effect, Zephyros gains a +2 bonus to his AC\
    \ against ranged weapon attacks, and all open flames within the aura are extinguished\
    \ unless they are magical."
  "name": "Wind Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zephyros makes two staff attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 20 (3d6\
    \ + 10) bludgeoning damage, or 23 (3d8 + 10) bludgeoning damage if used with two\
    \ hands. This damage is considered magical.."
  "name": "Staff of the Magi"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit:\
    \ 30 (4d10 + 8) bludgeoning damage."
  "name": "Rock"
"source":
- "SKT"
name: Zephyros
image: "[[Zephyros.png]]"
---

# Zephyros

```statblock
"name": "Zephyros"
"size": "Huge"
"type": "giant"
"alignment": "Neutral Good"
"ac": !!int "14"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "27"
- !!int "10"
- !!int "22"
- !!int "18"
- !!int "16"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "8"
  "Constitution": !!int "11"
"skillsaves":
  "Insight": !!int "8"
  "Perception": !!int "8"
"senses": "passive Perception 17"
"languages": "Common, Giant"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zephyros's innate spellcasting ability is Charisma. He can innately cast\
    \ the following spells, requiring no material components:\n\nAt will: [detect\
    \ magic](/compendium/spells/detect-magic.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [light](/compendium/spells/light.md)\n\n1/day each: [control weather](/compendium/spells/control-weather.md),\
    \ [gaseous form](/compendium/spells/gaseous-form.md)\n\n3/day each: [feather\
    \ fall](/compendium/spells/feather-fall.md), [fly](/compendium/spells/fly.md),\
    \ [misty step](/compendium/spells/misty-step.md), [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zephyros casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 17, +11 to\
    \ hit with spell attacks):\n\nAt will: [message](/compendium/spells/message.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1/day each: [cone of cold](/compendium/spells/cone-of-cold.md), [contact\
    \ other plane](/compendium/spells/contact-other-plane.md) (cast as 1 action),\
    \ [greater invisibility](/compendium/spells/greater-invisibility.md), [mass suggestion](/compendium/spells/mass-suggestion.md),\
    \ [nondetection](/compendium/spells/nondetection.md), [Otiluke's resilient sphere](/compendium/spells/otilukes-resilient-sphere.md),\
    \ [protection from energy](/compendium/spells/protection-from-energy.md), [tongues](/compendium/spells/tongues.md)\n\
    \n2/day each: [gust of wind](/compendium/spells/gust-of-wind.md), [levitate](/compendium/spells/levitate.md),\
    \ [magic missile](/compendium/spells/magic-missile.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zephyros has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zephyros tries to throw a Small or Medium creature within 10 feet of it.\
    \ The target must succeed on a DC 20 Dexterity saving throw or be hurled up to\
    \ 60 feet horizontally in a direction of Zephyros's choice and land [prone](/rules/conditions.md#prone),\
    \ taking 1d8 bludgeoning damage for every 10 feet it was thrown."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A magical aura of wind surrounds Zephyros. The aura is a 10-foot-radius\
    \ sphere that lasts as long as he maintains concentration on it (as if concentrating\
    \ on a spell). While the aura is in effect, Zephyros gains a +2 bonus to his AC\
    \ against ranged weapon attacks, and all open flames within the aura are extinguished\
    \ unless they are magical."
  "name": "Wind Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zephyros makes two staff attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 20 (3d6\
    \ + 10) bludgeoning damage, or 23 (3d8 + 10) bludgeoning damage if used with two\
    \ hands. This damage is considered magical.."
  "name": "Staff of the Magi"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit:\
    \ 30 (4d10 + 8) bludgeoning damage."
  "name": "Rock"
"source":
- "SKT"
"image": "[[Zephyros.png]]"
```
^statblock

*Source: Storm King's Thunder p. 33*

## Description

Cloud giants live extravagant lives high above the world, showing little concern for the plights of other races except as amusement. They are muscular with light skin and have hair of silver or blue.

**High and Mighty.** Cloud giants are spread to the winds, encompassing vast areas of the world. In times of need, scattered cloud giant families band together as a unified clan. However, they can seldom do so quickly.

Attuned to the magic of their airy domains, cloud giants are able to turn into mist and create clouds of billowing fog. They dwell in castles on high mountain peaks, or on the solid clouds that once held their fiefs.

Still gracing the skies on occasion, these magic clouds are a lasting remnant of the giants' lost empires. Better spellcasters than most other giants, some cloud giants can control weather, bring storms, and steer the wind almost as well as their cousins, the storm giants.

**Affluent Princes.** Although cloud giants are lower in the ordning than storm giants, the reclusive storm giants rarely engage with the rest of giantkind. As a result, many cloud giants see themselves as having the highest status and power among the giant races.

They order lesser giants to seek out wealth and art on their behalf, employing fire giants as smiths and crafters, and using frost giants as reavers, raiders, and plunderers. Dimwitted hill giants serve them as brutes and combat fodder-sometimes fighting for the cloud giants' amusement. A cloud giant might order hill or frost giants to steal from nearby humanoid lands, which it considers to be a fair tax for its continued beneficence. On their mountain summits and solid clouds, cloud giants keep extraordinary gardens. Grapes as big as apples grow there, along with apples the size of pumpkins, and pumpkins the size of wagons. From the errant seeds of these gardens, tales of cottagesized produce and magic beans are spread in the mortal realm.

As humanoid nobles keep an aerie for hunting hawks, so do cloud giants keep griffons, perytons, and wyverns as their own flying beasts of prey. Such creatures also patrol the cloud giants' gardens by night, along with trained predators such as owlbears and lions.

**Children of the Trickster.** The patron god and father of the cloud giants is Memnor the Trickster, the cleverest and slyest of the giant deities. Cloud giants align themselves according to the aspects and exploits of Memnor that they most admire, with evil cloud giants emulating his deceitfulness and self-interest and good cloud giants emulating his intellect and silvertongued speech. Family members usually align in the same direction.

**Wealth and Power.** A cloud giant earns its place in the ordning by the treasure it accumulates, the wealth it wears, and the gifts it bestows on other cloud giants.

However, value is only one part of the assessment. The extravagances a cloud giant wears or places about its home must also be beautiful or wondrous. Sacks of gold or gems are worth less to a cloud giant than the jewelry that might be crafted from those materials, creating treasures that bring esteem to a cloud giant's household.

Rather than steal from one another or fight over treasures, cloud giants are inveterate gamblers with a hunger for high risks and high rewards. They frequently bet on the outcome of events nominally outside their control, such as the lives of lesser creatures. Ordning ranks and kings' ransoms can be won and lost in bets over the military triumphs of humanoid nations. Fixing wagers by interfering in the conflict causes the loss of the bet, but such deceit is considered to be cheating only if it is discovered. Otherwise, it is cleverness honoring Memnor.

**Giants.** Ancient empires once cast long shadows over a world that quaked beneath the giants' feet. In those lost days, these towering figures were dragon slayers, dreamers, crafters, and kings, but their kind fell from glory long ago. However, even divided among secluded clans scattered throughout the world, the giants maintain thecustoms and traditions of old.

**Old as Legend.** In remote regions of the world, the last remaining plinths, monoliths, and statues of the great giant empires bow their heads in desolate obscurity.Where once those empires sprawled across all lands, now the giants dwell in isolated tribes and clans.

Giants are almost as old as dragons, which were still young when the giants' heavy feet first shook the foundations of the world. As they spread across new lands, giants and dragons fought bitter generational wars that nearly brought both sides low. No living giant remembers what started the conflict, but myths and tales of their race's glorious dawn are still sung in their steadings and holdfasts, vilifying the primeval wyrms.Giants and dragons continue to harbor grudges against one another, and it is seldom that they will meet or occupy the same area without a fight.

**The Ordning.** Each of the main giant races-the cloud, fire, frost, hill, stone, and storm giants-are related by common elements of history, religion, and culture. They view one another as kindred, keeping any inherent animosity over territory and ambition to a minimum.

Giants belong to a caste structure called the ordning. Based on social class and highly organized, the ordning assigns a social rank to each giant. By understanding its place in the ordning, a giant knows which other giants are inferior or superior to it, since no two giants are equal. Each of the giant races analyzes a different combination of skills or qualities to determine the ordning. Giants make excelling in these qualities the purpose of their lives.

At the highest level of the ordning, the races of the giants are also ranked according to status. Storm giants are the highest in the ordning, followed by cloud giants, fire giants, frost giants, stone giants, hill giants, and finally giant kin such as fomorians, ettins, and ogres.

Regardless of a giant's rank among its own race, the chief of a hill giant tribe is inferior to the most common of stone giants. The lowest ranked giant of any type is superior to the highest ranked giant of an inferior type. It isn't considered evil to disrespect or even betray a giant of another type, merely rude.

**Giant Gods.** When the giants' ancient empires fell, Annam, father of all giants, forsook his children and the world. He swore never to look upon either again until the giants had returned to their glory and reclaimed their birthright as rulers of the world. As a result, giants pray not to Annam but to his divine children, along with a host of hero-deities and godly villains that make up the giants' pantheon.

Chief among these gods are the children of Annam, whose sons represent each type of giant: Stronmaus for storm giants, Memnor for cloud giants, Skoraeus Stonebones for stone giants, Thrym for frost giants, Surtur for fire giants, and Grolantor for hill giants. Not all giants automatically revere their kind's primary deity, however. Many good cloud giants refuse to worship the deceitful Memnor, and a storm giant dwelling in the icy mountains of the north might pay more homage to Thrym than Stronmaus. Other giants feel a stronger connection to Annam's daughters, who include Hiatea, the huntress and home warden; Iallanis, goddess of love and peace; and Diancastra, an impetuous and arrogant trickster.

Some giants abandon their own gods and fall prey to demon cults, paying homage to Baphomet or Kostchtchie. To worship them or any other non-giant deity is a great sin against the ordning, and almost certain to make a giant an outcast.