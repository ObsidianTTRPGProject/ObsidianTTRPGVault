---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Viktor"]
statblock: true
"name": "Viktor"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Neutral"
"ac": !!int "20"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "12"
- !!int "18"
- !!int "11"
- !!int "11"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "8"
"skillsaves":
  "Religion": !!int "4"
  "Persuasion": !!int "7"
"senses": "passive Perception 10"
"languages": "Common"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viktor is a 16th-level spellcaster. His spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). Viktor has the following paladin\
    \ spells prepared:\n\n1st level (4 1st-level slots): [bless](/compendium/spells/bless.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md), [thunderous smite](/compendium/spells/thunderous-smite.md)\n\
    \n2nd level (3 2nd-level slots): [aid](/compendium/spells/aid.md), [branding\
    \ smite](/compendium/spells/branding-smite.md), [lesser restoration](/compendium/spells/lesser-restoration.md)\n\
    \n3rd level (3 3rd-level slots): [blinding smite](/compendium/spells/blinding-smite.md),\
    \ [revivify](/compendium/spells/revivify.md)\n\n4th level (2 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [death ward](/compendium/spells/death-ward.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viktor has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viktor has a young gold shadow dragon that accompanies him at all times.\
    \ If Viktor dies, the young gold shadow dragon returns to the Shadowfell."
  "name": "Shadow Dragon Companion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viktor wields a Sun Blade. Viktor gains a +2 bonus to attack and damage\
    \ rolls made with this weapon, which deals radiant damage instead of slashing\
    \ damage (this is already factored into Viktor's stat block). When Viktor hits\
    \ an undead with this sword, that target takes an extra 1d8 radiant damage. The\
    \ sword's luminous blade emits bright light in a 15-foot radius and dim light\
    \ for an additional 15 feet. The light is sunlight."
  "name": "Sun Blade"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viktor makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) radiant damage or 11 (1d10 + 6) radiant damage if used with two hands.\
    \ An additional 4 (1d8) radiant damage is dealt if the target is undead."
  "name": "Sun Blade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +7 to hit, range 100/400 ft., one target. Hit:\
    \ 6 (1d10 + 1) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "MaBJoV"
name: Viktor
image: "[[Viktor.png]]"
---

# Viktor

```statblock
"name": "Viktor"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Neutral"
"ac": !!int "20"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "12"
- !!int "18"
- !!int "11"
- !!int "11"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "8"
"skillsaves":
  "Religion": !!int "4"
  "Persuasion": !!int "7"
"senses": "passive Perception 10"
"languages": "Common"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viktor is a 16th-level spellcaster. His spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). Viktor has the following paladin\
    \ spells prepared:\n\n1st level (4 1st-level slots): [bless](/compendium/spells/bless.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md), [thunderous smite](/compendium/spells/thunderous-smite.md)\n\
    \n2nd level (3 2nd-level slots): [aid](/compendium/spells/aid.md), [branding\
    \ smite](/compendium/spells/branding-smite.md), [lesser restoration](/compendium/spells/lesser-restoration.md)\n\
    \n3rd level (3 3rd-level slots): [blinding smite](/compendium/spells/blinding-smite.md),\
    \ [revivify](/compendium/spells/revivify.md)\n\n4th level (2 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [death ward](/compendium/spells/death-ward.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viktor has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viktor has a young gold shadow dragon that accompanies him at all times.\
    \ If Viktor dies, the young gold shadow dragon returns to the Shadowfell."
  "name": "Shadow Dragon Companion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viktor wields a Sun Blade. Viktor gains a +2 bonus to attack and damage\
    \ rolls made with this weapon, which deals radiant damage instead of slashing\
    \ damage (this is already factored into Viktor's stat block). When Viktor hits\
    \ an undead with this sword, that target takes an extra 1d8 radiant damage. The\
    \ sword's luminous blade emits bright light in a 15-foot radius and dim light\
    \ for an additional 15 feet. The light is sunlight."
  "name": "Sun Blade"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viktor makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) radiant damage or 11 (1d10 + 6) radiant damage if used with two hands.\
    \ An additional 4 (1d8) radiant damage is dealt if the target is undead."
  "name": "Sun Blade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +7 to hit, range 100/400 ft., one target. Hit:\
    \ 6 (1d10 + 1) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "MaBJoV"
"image": "[[Viktor.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 82*

## Description

Viktor was born into a large family of simple farmers harvesting cabbage, beets, and potatoes. His family's farmstead sits on the northern reaches of a village called Barovia. At an early age he learned about the dread master of Barovia ruling from atop Castle Ravenloft. It was his fate and the fate of every other Barovian to never leave the mist shrouded valley. The lord of Ravenloft and first vampire, Strahd Von Zarovich, would never allow that.

But Viktor's fate turned out to be different from the rest of his people. Viktor prayed to the Morninglord every day, promising to serve the Morninglord as a holy warrior against Strahd's evil. In his early 20s, when his family was pressuring him to settle down and marry, Viktor's prayers were finally answered, but not by the god that he had been praying to. Two strangers arrived in the village of Barovia. One, named Borivik, would become Viktor's most beloved friend. The other, Lothar, would introduce Viktor to a goddess who would listen to his pleas—the Raven Queen.

The three managed to escape Barovia with the help of the Raven Queen. They adventured together for many years, forming a strong bond of friendship. The Raven Queen felt her hold over Viktor slipping, as his friends provided him with love and companionship. So, she sent Viktor a gift: a gold dragon named Thraxis that would be his mount and partner. But Thraxis wasn't a normal dragon; he had been corrupted by the Shadowfell.

The whisperings of this new friend began to turn Viktor down a dark path, one that his friends were helpless to prevent. One night he convinced Lothar to return with him to the Shadowfell. Borivik refused to accompany them and so their friendship came to an end.

Viktor is sullen and without humor. His farmer's upbringing means he has no concept of formalities or subtleties. Viktor is distrustful of arcane magic and hates hags, witches, or undead entities that harness magical power.

**Viktor as a Contact.** Viktor becomes a contact for the Raven Circle at 7th level. Viktor can grant memory amulets to members of the Raven Circle in exchange for a devotion token. These amulets are shaped as the face of the person that they came from. When the memory is used, you are transformed into the creature as the [polymorph](/compendium/spells/polymorph.md) spell for 10 rounds. Every round that you stay in the form you must make a successful Wisdom saving throw to avoid being possessed by the memories. The possessing entity will lash out at your friends to try and inflict as much harm as possible in vengeance for utilizing its memories in such a manner. Once the 10 rounds are complete, the possessing entity departs.

**Memory Amulets from Viktor**

| Polymorph Form | Devotion Token | Required Level | Possession DC |
|----------------|----------------|----------------|---------------|
| Wolfwere | Feather | 7 | 10 |
| Skeleton warrior | Gold | 7 | 10 |
| Wolfwere alpha | Feather | 9 | 15 |
| Skeleton lord | Gold | 9 | 15 |
| Death knight | Gem | 12 | 20 |
^memory-amulets-from-viktor