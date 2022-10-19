---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Rahadin"]
statblock: true
"name": "Rahadin"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "14"
- !!int "22"
- !!int "17"
- !!int "15"
- !!int "16"
- !!int "18"
"speed": "walk 35 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "12"
  "Deception": !!int "8"
  "Stealth": !!int "14"
  "Insight": !!int "7"
  "Perception": !!int "11"
"senses": "darkvision 60 ft., passive Perception 21"
"languages": "Common, Elvish"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rahadin's innate spellcasting ability is Intelligence. He can innately\
    \ cast the following spells, requiring no components:\n\n1/day: [magic weapon](/compendium/spells/magic-weapon.md),\
    \ [nondetection](/compendium/spells/nondetection.md)\n\n3/day: [misty step](/compendium/spells/misty-step.md),\
    \ [phantom steed](/compendium/spells/phantom-steed.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature within 10 feet of Rahadin that isn't protected by a [mind\
    \ blank](/compendium/spells/mind-blank.md) spell hears in its mind the screams\
    \ of the thousands of people Rahadin has killed. As a bonus action, Rahadin can\
    \ force all creatures that can hear the screams to make a DC 16 Wisdom saving\
    \ throw. Each creature takes 16 (3d10) psychic damage on a failed save, or half\
    \ as much damage on a successful one."
  "name": "Deathly Choir"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rahadin has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rahadin can attempt to hide even when he is only lightly obscured by foliage,\
    \ heavy rain, falling snow, mist, and other natural phenomena."
  "name": "Mask of the Wild"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rahadin attacks three times with his scimitar, or twice with his [poisoned](/rules/conditions.md#poisoned)\
    \ darts."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 9 (1d6\
    \ + 6) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 20/60 ft., one target. Hit: 8\
    \ (1d4 + 6) piercing damage plus 5 (2d4) poison damage."
  "name": "Poisoned Dart"
"source":
- "CoS"
name: Rahadin
image: "[[Rahadin.png]]"
---

# Rahadin

```statblock
"name": "Rahadin"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "14"
- !!int "22"
- !!int "17"
- !!int "15"
- !!int "16"
- !!int "18"
"speed": "walk 35 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "12"
  "Deception": !!int "8"
  "Stealth": !!int "14"
  "Insight": !!int "7"
  "Perception": !!int "11"
"senses": "darkvision 60 ft., passive Perception 21"
"languages": "Common, Elvish"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rahadin's innate spellcasting ability is Intelligence. He can innately\
    \ cast the following spells, requiring no components:\n\n1/day: [magic weapon](/compendium/spells/magic-weapon.md),\
    \ [nondetection](/compendium/spells/nondetection.md)\n\n3/day: [misty step](/compendium/spells/misty-step.md),\
    \ [phantom steed](/compendium/spells/phantom-steed.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature within 10 feet of Rahadin that isn't protected by a [mind\
    \ blank](/compendium/spells/mind-blank.md) spell hears in its mind the screams\
    \ of the thousands of people Rahadin has killed. As a bonus action, Rahadin can\
    \ force all creatures that can hear the screams to make a DC 16 Wisdom saving\
    \ throw. Each creature takes 16 (3d10) psychic damage on a failed save, or half\
    \ as much damage on a successful one."
  "name": "Deathly Choir"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rahadin has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rahadin can attempt to hide even when he is only lightly obscured by foliage,\
    \ heavy rain, falling snow, mist, and other natural phenomena."
  "name": "Mask of the Wild"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rahadin attacks three times with his scimitar, or twice with his [poisoned](/rules/conditions.md#poisoned)\
    \ darts."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 9 (1d6\
    \ + 6) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 20/60 ft., one target. Hit: 8\
    \ (1d4 + 6) piercing damage plus 5 (2d4) poison damage."
  "name": "Poisoned Dart"
"source":
- "CoS"
"image": "[[Rahadin.png]]"
```
^statblock

*Source: Curse of Strahd p. 237*

## Description

Rahadin, the dusk elf chamberlain of Castle Ravenloft, has served Strahd's family faithfully for nearly five hundred years. He is Strahd's eternal servant, a longtime comrade-in-arms, and a ruthless warrior who has killed thousands in his lifetime.

**Exile.** Rahadin was exiled for refusing to bow down to a dusk elf prince whom he considered weak and corrupt. When the dusk elves later declined to pay fealty to King Barov, Rahadin helped Barov conquer them. The elf kingdom's royal line was obliterated, the dusk elves hunted like rabbits. The few that survived were either subjugated or forced to live among the Vistani. So pleased was Barov with Rahadin that the king made the dusk elf an honorary member of his family.

**Chamberlain.** After Barov died, Rahadin continued to fight as one of Strahd's generals. When the wars ended and Strahd turned his attention to building Castle Ravenloft, Rahadin saw to it that wizards and artisans were brought to Barovia. Years later, Strahd appointed Rahadin his castle chamberlain. Rahadin was pleased to do whatever Strahd asked of him, and he instilled terror in the castle staff by routinely flogging those who didn't perform their duties to his exacting standards.

When a dusk elf named Patrina Velikovna came knocking on Strahd's door, Rahadin could see that she intrigued Strahd, but Rahadin was suspicious of her motives. Patrina tried to seduce Strahd with the prospect of immortality - something Strahd desired above all. She told him of a vault of forbidden lore called the Amber Temple, where the secret of gaining immortality was hidden. While Strahd was off exploring the temple, Rahadin handled all of his master's affairs and began searching for a woman who could tear Strahd away from Patrina Velikovna. In this task, he failed. His goal was fulfilled, however, when Sergei, Strahd's brother, found Tatyana.

Tatyana was Strahd's type - a woman of exquisite beauty and gentle manner. When Strahd returned to Ravenloft, the young woman instantly caught his eye, and Rahadin had the pleasure of informing Patrina that her presence at the castle was no longer desired.

Rahadin's loyalty didn't waver after Tatyana died and Strahd became a vampire. Rahadin continued to do his master's bidding. Eager to put Tatyana out of his mind, Strahd lured more women to the castle, taking several of them as brides before draining their lives and turning them into vampire spawn. Rahadin would see to it that these women were lavished with jewels and fine clothes, and made comfortable during their stay in Ravenloft.

**Executioner.** Patrina Velikovna and her people were living among the Vistani when they heard of Tatyana's death and Strahd's curse. The ageless Patrina returned to Ravenloft in the hope of winning Strahd's love. This time, it was clear that Patrina craved Strahd's power and that Strahd would never love her. Rahadin assumed that Patrina would suffer the same fate as those women who had come before her. He was proven wrong when Patrina's own people stoned her to death to keep Strahd from claiming her as his wife.

Strahd was upset that the dusk elves had taken Patrina from him. After securing her body and entombing it in the catacombs of Ravenloft, Strahd sent Rahadin to punish the dusk elves. Rahadin slew the female elves so that the males couldn't breed. He also sliced off the ears of Patrina's brother, Kasimir, who had orchestrated the stoning.

**Screams of the Dead.** So dreadful a creature is Rahadin that anyone who stands within 10 feet of him can hear the howling screams of the countless men and women he has killed in his lifetime. Rahadin can't hear them, nor would he be haunted by them if he could. The only thing he cares about is Strahd von Zarovich, for whom he would gladly give his life.

**Rahadin's Traits.** **Ideal.** "Loyalty is everything."

**Bond.** "I am a son of King Barov von Zarovich, and I will serve his son - my brother and lord - forever."

**Flaw.** "I have slain thousands of men. I will slaughter thousands more to preserve the von Zarovich legacy."