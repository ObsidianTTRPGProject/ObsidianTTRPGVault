---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
aliases: ["Baba Lysaga"]
statblock: true
"name": "Baba Lysaga"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"stats":
- !!int "18"
- !!int "10"
- !!int "16"
- !!int "20"
- !!int "17"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
"skillsaves":
  "Religion": !!int "13"
  "Arcana": !!int "13"
"senses": "passive Perception 13"
"languages": "Abyssal, Common, Draconic, Dwarvish, Giant"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baba Lysaga is a 16th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). Baba Lysaga has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [sleep](/compendium/spells/sleep.md),\
    \ [witch bolt](/compendium/spells/witch-bolt.md)\n\n2nd level (3 2nd-level slots):\
    \ [crown of madness](/compendium/spells/crown-of-madness.md), [enlarge/reduce](/compendium/spells/enlarge-reduce.md),\
    \ [misty step](/compendium/spells/misty-step.md)\n\n3rd level (3 3rd-level slots):\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [fireball](/compendium/spells/fireball.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md)\n\n4th level (3 4th-level\
    \ slots): [blight](/compendium/spells/blight.md), [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (2 5th-level slots):\
    \ [cloudkill](/compendium/spells/cloudkill.md), [geas](/compendium/spells/geas.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [programmed illusion](/compendium/spells/programmed-illusion.md), [true seeing](/compendium/spells/true-seeing.md)\n\
    \n7th level (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [mirage arcane](/compendium/spells/mirage-arcane.md)\n\n8th level (1 8th-level\
    \ slots): [power word stun](/compendium/spells/power-word-stun.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baba Lysaga can use an action to polymorph into a [swarm of insects](/compendium/bestiary/beast/swarm-of-insects.md)\
    \ (flies), or back into her true form. While in swarm form, she has a walking\
    \ speed of 5 feet and a flying speed of 30 feet. Anything she is wearing transforms\
    \ with her, but nothing she is carrying does."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baba Lysaga is shielded against divination magic, as though protected by\
    \ a [nondetection](/compendium/spells/nondetection.md) spell."
  "name": "Blessing of Mother Night"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baba Lysaga makes three attacks with her quarterstaff."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage if wielded with two\
    \ hands."
  "name": "Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baba Lysaga summons 1d4 swarms of insects. A summoned swarm appears in\
    \ an unoccupied space within 60 feet of Baba Lysaga and acts as her ally. It remains\
    \ until it dies or until Baba Lysaga dismisses it as an action."
  "name": "Summon Swarms of Insects (Recharges after a Short or Long Rest)"
"source":
- "CoS"
name: Baba Lysaga
image: "[[Baba Lysaga.png]]"
---

# Baba Lysaga

```statblock
"name": "Baba Lysaga"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"stats":
- !!int "18"
- !!int "10"
- !!int "16"
- !!int "20"
- !!int "17"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
"skillsaves":
  "Religion": !!int "13"
  "Arcana": !!int "13"
"senses": "passive Perception 13"
"languages": "Abyssal, Common, Draconic, Dwarvish, Giant"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baba Lysaga is a 16th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). Baba Lysaga has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [sleep](/compendium/spells/sleep.md),\
    \ [witch bolt](/compendium/spells/witch-bolt.md)\n\n2nd level (3 2nd-level slots):\
    \ [crown of madness](/compendium/spells/crown-of-madness.md), [enlarge/reduce](/compendium/spells/enlarge-reduce.md),\
    \ [misty step](/compendium/spells/misty-step.md)\n\n3rd level (3 3rd-level slots):\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [fireball](/compendium/spells/fireball.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md)\n\n4th level (3 4th-level\
    \ slots): [blight](/compendium/spells/blight.md), [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (2 5th-level slots):\
    \ [cloudkill](/compendium/spells/cloudkill.md), [geas](/compendium/spells/geas.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [programmed illusion](/compendium/spells/programmed-illusion.md), [true seeing](/compendium/spells/true-seeing.md)\n\
    \n7th level (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [mirage arcane](/compendium/spells/mirage-arcane.md)\n\n8th level (1 8th-level\
    \ slots): [power word stun](/compendium/spells/power-word-stun.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baba Lysaga can use an action to polymorph into a [swarm of insects](/compendium/bestiary/beast/swarm-of-insects.md)\
    \ (flies), or back into her true form. While in swarm form, she has a walking\
    \ speed of 5 feet and a flying speed of 30 feet. Anything she is wearing transforms\
    \ with her, but nothing she is carrying does."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baba Lysaga is shielded against divination magic, as though protected by\
    \ a [nondetection](/compendium/spells/nondetection.md) spell."
  "name": "Blessing of Mother Night"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baba Lysaga makes three attacks with her quarterstaff."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage if wielded with two\
    \ hands."
  "name": "Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baba Lysaga summons 1d4 swarms of insects. A summoned swarm appears in\
    \ an unoccupied space within 60 feet of Baba Lysaga and acts as her ally. It remains\
    \ until it dies or until Baba Lysaga dismisses it as an action."
  "name": "Summon Swarms of Insects (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "[[Baba Lysaga.png]]"
```
^statblock

*Source: Curse of Strahd p. 228*

## Description

Two women gave life to Strahd von Zarovich. The first was Queen Ravenovia van Roeyen, Strahd's biological mother. The second was the queen's midwife, a devout follower of Mother Night named Baba Lysaga. Although it was the former who raised Strahd and enabled him to follow in his father's footsteps, it was the latter who sensed a potential for greatness and darkness in Strahd surpassing that of any other mortal. Lysaga believed then, as she believes now, that she is Strahd's true mother.

**Other Mother.** When Strahd was still a baby in his crib, Baba Lysaga cast protective spells on him and crept into his nursery on stormy nights to sing magical rhymes to him. She also placed the "spark of magic" in him, ensuring that he would become a spellcaster.

Baba Lysaga's unhealthy attachment to the baby Strahd did not go unnoticed. After she received several disturbing reports, Queen Ravenovia was forced to banish the midwife from the kingdom. Lysaga never saw Strahd again, but she has succeeded in staying alive to witness the triumphs of her beloved boy, who, in her mind, is eternally blessed. Despite the horrors Strahd has wrought, Lysaga still envisions him as the perfect child she delivered into the world. Strahd is the only thing in her life that matters to her.

**Mother Nearest.** During her exile, Baba Lysaga made countless sacrifices to Mother Night, pleading with the goddess to afflict Queen Ravenovia with ill health and visit death upon her. Lysaga eventually got her wish, and after Strahd settled in the valley of Barovia, Lysaga moved as close to him as she dared to.

In the filth-ridden depths of her heart, Lysaga knows that Strahd would never accept her as his true mother, nor could she bear his rejection. As a result, she has never confronted him. She would rather exist in perpetual denial, whiling away the days, months, and years practicing fell magic and looking for ways to help her "son."

**Raven Bane.** Baba Lysaga has allies in Castle Ravenloft - a coven of witches. Through the aid of these witches, Lysaga recently uncovered a potential threat to Strahd: a secret society of wereravens called the Keepers of the Feather, a group that uses ordinary ravens as their spies.

Strahd doesn't consider the wereravens a serious threat, but Lysaga has chosen to make them the bane of her existence. After much searching and scrying, she discovered a wereraven refuge at the Wizard of Wines winery (chapter 12), and she has begun to wage war against it. In addition, she has forged an alliance with the mad druids that haunt Yester Hill (chapter 14), convincing them that she gave birth to Strahd, whom the druids consider a god. With the druids on her side, she expects to rid Barovia of its wereraven menace.

**Gifts of Mother Night.** The goddess Mother Night has bestowed magical gifts on Baba Lysaga as rewards for her ceaseless devotion to Strahd. Her skin has the resilience of stone, she is resistant to harmful magic, and she is shielded against divination magic. Mother Night has also imparted to Lysaga the secret of longevity, which requires her to bathe in the blood of beasts on nights of the new moon. Failure to do so causes Lysaga to age rapidly, becoming mere dust and bones in a matter of seconds.

**Baba Lysaga's Traits.** **Ideal.** "No love is greater than a mother's love for her son."

**Bond.** "I am the mother of Strahd. Anyone who disputes this fact can rot."

**Flaw.** "I will not rest until the last of my son's enemies are destroyed."