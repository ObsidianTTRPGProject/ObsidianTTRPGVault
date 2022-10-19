---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Sarevok"]
statblock: true
"name": "Sarevok"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "21"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"stats":
- !!int "20"
- !!int "10"
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "8"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "12"
  "Religion": !!int "5"
  "History": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Abyssal, Common, Infernal"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok is a 12th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 16, +8 to hit with spell attacks). Sarevok has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [command](/compendium/spells/command.md), [guiding bolt](/compendium/spells/guiding-bolt.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [hold person](/compendium/spells/hold-person.md), [silence](/compendium/spells/silence.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (3\
    \ 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md)\n\n4th level (3 4th-level slots):\
    \ [divination](/compendium/spells/divination.md), [guardian of faith](/compendium/spells/guardian-of-faith.md)\n\
    \n5th level (2 5th-level slots): [contagion](/compendium/spells/contagion.md),\
    \ [insect plague](/compendium/spells/insect-plague.md)\n\n6th level (1 6th-level\
    \ slots): [harm](/compendium/spells/harm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Sarevok is killed he gains a new body in 24 hours, regaining all his\
    \ hit points and becoming active again. The new body appears on the altar of the\
    \ temple of Bhaal beneath Baldur's Gate. This ability ceases to function if a\
    \ cleric of good alignment casts the spell hallow on the altar in the temple of\
    \ Bhaal."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok can cast a spell and make one attack with his long sword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage or 10 (1d10 + 5) if wielded in two hands. If the target\
    \ is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed\
    \ by Bhaal. The cursed target can't regain hit points. The curse lasts until removed\
    \ by the [remove curse](/compendium/spells/remove-curse.md) spell or other magic."
  "name": "Long Sword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok makes an attack with his long sword. If he hits the target and\
    \ has advantage on the attack roll, then he deals an additional 21 (6d6) slashing\
    \ damage. If the target is a creature, it must succeed on a DC 16 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) for 10 minutes."
  "name": "Assassin's Strike"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok makes one attack with his long sword."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok casts a cantrip from his spell list."
  "name": "Cast Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok unleashes\n\nBhaal's power. Creatures within 30 feet of Sarevok,\
    \ including ones behind barriers and around corners, can't regain hit points until\
    \ the end of Sarevok's next turn."
  "name": "Channel Bhaal's Hate (Costs 2 Actions)"
"source":
- "MaBJoV"
name: Sarevok
image: "[[Sarevok.png]]"
---

# Sarevok

```statblock
"name": "Sarevok"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "21"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"stats":
- !!int "20"
- !!int "10"
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "8"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "12"
  "Religion": !!int "5"
  "History": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Abyssal, Common, Infernal"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok is a 12th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 16, +8 to hit with spell attacks). Sarevok has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [command](/compendium/spells/command.md), [guiding bolt](/compendium/spells/guiding-bolt.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [hold person](/compendium/spells/hold-person.md), [silence](/compendium/spells/silence.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (3\
    \ 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md)\n\n4th level (3 4th-level slots):\
    \ [divination](/compendium/spells/divination.md), [guardian of faith](/compendium/spells/guardian-of-faith.md)\n\
    \n5th level (2 5th-level slots): [contagion](/compendium/spells/contagion.md),\
    \ [insect plague](/compendium/spells/insect-plague.md)\n\n6th level (1 6th-level\
    \ slots): [harm](/compendium/spells/harm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Sarevok is killed he gains a new body in 24 hours, regaining all his\
    \ hit points and becoming active again. The new body appears on the altar of the\
    \ temple of Bhaal beneath Baldur's Gate. This ability ceases to function if a\
    \ cleric of good alignment casts the spell hallow on the altar in the temple of\
    \ Bhaal."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok can cast a spell and make one attack with his long sword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage or 10 (1d10 + 5) if wielded in two hands. If the target\
    \ is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed\
    \ by Bhaal. The cursed target can't regain hit points. The curse lasts until removed\
    \ by the [remove curse](/compendium/spells/remove-curse.md) spell or other magic."
  "name": "Long Sword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok makes an attack with his long sword. If he hits the target and\
    \ has advantage on the attack roll, then he deals an additional 21 (6d6) slashing\
    \ damage. If the target is a creature, it must succeed on a DC 16 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) for 10 minutes."
  "name": "Assassin's Strike"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok makes one attack with his long sword."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok casts a cantrip from his spell list."
  "name": "Cast Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sarevok unleashes\n\nBhaal's power. Creatures within 30 feet of Sarevok,\
    \ including ones behind barriers and around corners, can't regain hit points until\
    \ the end of Sarevok's next turn."
  "name": "Channel Bhaal's Hate (Costs 2 Actions)"
"source":
- "MaBJoV"
"image": "[[Sarevok.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 124*

## Description

Sarevok Anchev is a powerful Deathbringer, an elite group of warriors trained to kill their enemies with a single, seemingly random strike in combat. He is also one of the Bhaalspawn, the mortal offspring of the dead god Bhaal. Sarevok attempted to reclaim the divine seat of the Lord of Murder vacated by his immortal father's demise, but his plans were thwarted when he was slain by his half-brother, Abdel Adrian, who rejected his heritage and fought against his Bhaalspawn siblings.

Sarevok's spirit was sent to the Abyss as punishment. There he eventually crossed paths with Abdel a second time when his noble-hearted brother ventured into the lower realms on a dangerous quest to stop another Bhaalspawn named Melissan. Sarevok agreed to help Abdel kill Melissan, on the condition that Abdel helped him escape the eternal torments of the Abyss.

Abdel agreed, and Sarevok was reborn into the mortal world. After his rebirth, Sarevok was true to his word, and the two brothers fought side-by-side against their half-sister. Ultimately Melissan was defeated, and Sarevok was granted a second chance at life.

With his prodigious strength, his legendary skill in battle, and the Sword of Chaos—a life-stealing, enchanted blade—Sarevok became one of the most famous mercenaries in Faerûn. Yet his many accomplishments brought him no joy. He felt no thrill at victory in battle, no delight in the routing of his enemies. The power he accumulated was bitter as ashes on his tongue, and he became a man haunted by his former life. The realization that no earthly achievements could ever compare to what he once almost had—immortality and godhood—left him broken and empty.

Sarevok plunged into a deep despair. To numb his pain, he indulged in every vice imaginable, squandering his wealth and health on alcohol and drugs. While his divine heritage slowed his aging, it did not stop it entirely, and after decades of self-abuse he was eventually reduced to an old man begging in the streets of Baldur's Gate.

This was how his father—Bhaal, the reborn god of murder—found him. But even though it was dimmed, Bhaal recognized his own divine spark in the pathetic old man, and he sensed Sarevok still had potential. Bhaal recruited him to become the high priest of his fledgling clergy, giving Sarevok new purpose... and another chance to become an agent of death and destruction.