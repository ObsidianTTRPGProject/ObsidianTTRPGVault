---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/large
- monster/type/monstrosity
aliases: ["Yakfolk Warrior"]
statblock: true
"name": "Yakfolk Warrior"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"stats":
- !!int "18"
- !!int "11"
- !!int "15"
- !!int "14"
- !!int "15"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Survival": !!int "4"
"senses": "passive Perception 12"
"languages": "Common, Yikaria"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yakfolk attempts to magically possess a humanoid or giant. The yakfolk\
    \ must touch the target throughout a short rest, or the attempt fails. At the\
    \ end of the rest, the target must succeed on a DC 12 Constitution saving throw\
    \ or be possessed by the yakfolk, which disappears with everything it is carrying\
    \ and wearing. Until the possession ends, the target is [incapacitated](/rules/conditions.md#incapacitated),\
    \ loses control of its body, and is unaware of its surroundings. The yakfolk now\
    \ controls the body and can't be targeted by any attack, spell, or other effect,\
    \ and it retains its alignment; its Intelligence, Wisdom, and Charisma scores;\
    \ and its proficiencies. It otherwise uses the target's statistics, except the\
    \ target's knowledge, class features, feats, and proficiencies.\n\nThe possession\
    \ lasts until either the body drops to 0 hit points, the yakfolk ends the possession\
    \ as an action, or the yakfolk is forced out of the body by an effect such as\
    \ the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md) spell.\
    \ When the possession ends, the yakfolk reappears in an unoccupied space within\
    \ 5 feet of the body and is [stunned](/rules/conditions.md#stunned) until the\
    \ end of its next turn. If the host body dies while it is possessed by the yakfolk,\
    \ the yakfolk dies as well, and its body doesn't reappear."
  "name": "Possession (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yakfolk makes two attacks, either with its greatsword or its longbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 18 (4d6\
    \ + 4) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 150/600 ft., one target. Hit:\
    \ 9 (2d8) piercing damage."
  "name": "Longbow"
"source":
- "SKT"
name: Yakfolk Warrior
image: "[[Yakfolk Warrior.png]]"
---

# Yakfolk Warrior

```statblock
"name": "Yakfolk Warrior"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"stats":
- !!int "18"
- !!int "11"
- !!int "15"
- !!int "14"
- !!int "15"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Survival": !!int "4"
"senses": "passive Perception 12"
"languages": "Common, Yikaria"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yakfolk attempts to magically possess a humanoid or giant. The yakfolk\
    \ must touch the target throughout a short rest, or the attempt fails. At the\
    \ end of the rest, the target must succeed on a DC 12 Constitution saving throw\
    \ or be possessed by the yakfolk, which disappears with everything it is carrying\
    \ and wearing. Until the possession ends, the target is [incapacitated](/rules/conditions.md#incapacitated),\
    \ loses control of its body, and is unaware of its surroundings. The yakfolk now\
    \ controls the body and can't be targeted by any attack, spell, or other effect,\
    \ and it retains its alignment; its Intelligence, Wisdom, and Charisma scores;\
    \ and its proficiencies. It otherwise uses the target's statistics, except the\
    \ target's knowledge, class features, feats, and proficiencies.\n\nThe possession\
    \ lasts until either the body drops to 0 hit points, the yakfolk ends the possession\
    \ as an action, or the yakfolk is forced out of the body by an effect such as\
    \ the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md) spell.\
    \ When the possession ends, the yakfolk reappears in an unoccupied space within\
    \ 5 feet of the body and is [stunned](/rules/conditions.md#stunned) until the\
    \ end of its next turn. If the host body dies while it is possessed by the yakfolk,\
    \ the yakfolk dies as well, and its body doesn't reappear."
  "name": "Possession (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yakfolk makes two attacks, either with its greatsword or its longbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 18 (4d6\
    \ + 4) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 150/600 ft., one target. Hit:\
    \ 9 (2d8) piercing damage."
  "name": "Longbow"
"source":
- "SKT"
"image": "[[Yakfolk Warrior.png]]"
```
^statblock

*Source: Storm King's Thunder p. 244*

## Description

Yakfolk, known among themselves as Yikaria ("the Lucky Chosen" in their language), are ogre-sized humanoids. Their heads resemble disgruntled yaks, complete with curved horns and dour expressions. Their hulking bodies are coated with thick fur and hair, and many outsiders can't tell the males and females apart.

**Yakfolk Society.** Other civilized races treat yakfolk as "bogeymen"-a scary race of evil, ruthless, and powerful savages. They dwell in secluded settlements sheltered from the worst of nature's abuse, including mountain valleys, soaring plateaus, and desert oases. In these seemingly idyllic hideaways, the yakfolk rule over humanoid slaves with iron fists. For all their learning and culture, yakfolk are enormously evil overlords. They care for their hapless subjects only to the extent that a live slave is more useful than a dead one, and keeping one alive is easier than laboring oneself. It's not that yakfolk are lazy-quite the contrary. They simply consider most menial tasks beneath them.

Outsiders that stumble into an enclave of yakfolk are usually surprised and pleased to find what appears to be a utopia, and the yakfolk foster that image until the strangers can be disarmed and enslaved.

Yakfolk have a drive for learning, particularly when it comes to the secrets of elemental magic and dark knowledge that might serve to corrupt or dominate others. Knowledge that the yakfolk can't gain or use is to be destroyed. Unsentimental by nature, yakfolk parents pack children off to communal creches once they are weaned, never to recognize them again. Yakfolk feel no loyalty to their families-only to their god and race.

**Servants of the Forgotten God.** Yakfolk function as a malignant theocracy in service to the Forgotten God. The worship of this savage, nameless deity directs their lives. The god takes the form of a male Yikaria, but the deity's face is worn smooth into a featureless mask. The deity is appeased by sacrifice, which the followers carry out by offering slaves in the Manner Elemental-that is, by fire (immolation), earth (live burial), water (drown ing), or air (throwing the victim off a great height). Sac rifices are meant to ensure the benevolence of the deity and to punish disobedient slaves.

The Forgotten God enabled the yakfolk to enslave dao for a time. It is said that the Forgotten God journeyed to the Elemental Plane of Earth and, through guile and deception, defeated the Grand Khan of the dao. The price of that defeat was harsh: the dao were forced to serve the Forgotten God and its minions-and forbidden to attack them-"for a thousand years and a year." The sentence has since expired, and yakfolk can no longer summon dao as they once did, but fear of the Forgotten God has kept the dao from seeking vengeance.

**Skin Crawlers.** A yakfolk's most frightening weapon is its ability to magically crawl under another creature's skin, control its body, and suppress its mind. The yak-folk use this ability to spy on enemies, rob them, murder their leaders, and kidnap their young.