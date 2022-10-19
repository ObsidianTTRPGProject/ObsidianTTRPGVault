---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/huge
- monster/type/fiend/devil
aliases: ["Baalzebul"]
statblock: true
"name": "Baalzebul"
"size": "Huge"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "540"
"hit_dice": "40d12 + 280"
"stats":
- !!int "28"
- !!int "15"
- !!int "25"
- !!int "24"
- !!int "24"
- !!int "26"
"speed": "walk 20 ft., burrow 20 ft., climb 20 ft."
"saves":
  "Charisma": !!int "16"
  "Intelligence": !!int "15"
  "Strength": !!int "17"
  "Constitution": !!int "15"
"skillsaves":
  "Intimidation": !!int "16"
  "Athletics": !!int "17"
  "Deception": !!int "24"
  "Insight": !!int "15"
  "Persuasion": !!int "16"
"damage_resistances": "acid; cold; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., tremorsense 10 ft., passive Perception 17"
"languages": "all, telepathy 100 ft."
"cr": "26"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul's innate spellcasting ability is Charisma (spell save DC 24,\
    \ +16 to hit with spell attacks). He can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [animate dead](/compendium/spells/animate-dead.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [detect\
    \ magic](/compendium/spells/detect-magic.md), [fireball](/compendium/spells/fireball.md),\
    \ [hallow](/compendium/spells/hallow.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [suggestion](/compendium/spells/suggestion.md), [teleport](/compendium/spells/teleport.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)\n\n1/day each: [wish](/compendium/spells/wish.md)\n\
    \n3/day each: [dispel evil and good](/compendium/spells/dispel-evil-and-good.md),\
    \ [symbol](/compendium/spells/symbol.md) (pain or insanity)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede Baalzebul's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul scores a critical hit on a roll of 19 or 20."
  "name": "Decipher Weakness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Baalzebul fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Insects do not attack Baalzebul and as a bonus action he can command any\
    \ number of them within 50 feet to take move or action attacks."
  "name": "Lord of Flies"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul's slam attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul regains 20 hit points at the start of his turn. If he takes radiant\
    \ damage, this trait doesn't function at the start of his next turn. Baalzebul\
    \ dies only if he starts his turn with 0 hit points and is unable to regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 10 feet of Baalzebul must succeed\
    \ on a DC 21 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the start of the creature's next turn. On a successful saving throw, the\
    \ creature is immune to this stench for 1 hour."
  "name": "Stench of the Slug"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When casting animate dead, Baalzebul can summon 10 additional zombies or\
    \ skeletons as long as sufficient corpses are available."
  "name": "Undead Mastery"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul uses his Fear and Weakness gaze (if available) and then makes\
    \ two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 14 (1d10\
    \ + 9) bludgeoning damage. Baalzebul's attacks wither the limbs of opponents he\
    \ strikes. Any creature hit by Baalzebul's slam attack must make a DC 21 Constitution\
    \ saving throw. Failure means the target loses the use of their legs (stuck in\
    \ the [prone](/rules/conditions.md#prone) position) or their arms (unable to cast\
    \ spells or engage in attacks; lose any AC bonus from shields). Baalzebul decides\
    \ whether he targets arms or legs before making the attack roll. This withering\
    \ effect lasts for one minute but at the end of each of their turns the afflicted\
    \ creature may repeat the saving throw."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul activates a gaze attack and triggers two effects on everyone\
    \ within 50 feet of him. The first requires a DC 21 Charisma saving throw; failure\
    \ means the target is [frightened](/rules/conditions.md#frightened) of Baalzebul\
    \ as per the [fear](/compendium/spells/fear.md) spell. The second effect requires\
    \ another DC 21 Charisma saving throw. Failure means the target suffers the effects\
    \ of the [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md) spell.\
    \ Both effects last one minute."
  "name": "Fear and Weakness Gaze (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul magically teleports, along with any equipment he is wearing and\
    \ carrying, up to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul summons 1d6 [horned devils](/compendium/bestiary/fiend/horned-devil.md),\
    \ 1d4 [ice devils](/compendium/bestiary/fiend/ice-devil.md), or 1 [pit fiend](/compendium/bestiary/fiend/pit-fiend.md)."
  "name": "Summon Allies (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul uses his Teleport action."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul disgorges a swarm of biting flies (otherwise same as insect plague)\
    \ that deals 44 (8d10) piercing damage and does not require concentration."
  "name": "Insect Gorge (Costs 2 Actions)"
"source":
- "MaBJoV"
name: Baalzebul
image: "[[Baalzebul.png]]"
---

# Baalzebul

```statblock
"name": "Baalzebul"
"size": "Huge"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "540"
"hit_dice": "40d12 + 280"
"stats":
- !!int "28"
- !!int "15"
- !!int "25"
- !!int "24"
- !!int "24"
- !!int "26"
"speed": "walk 20 ft., burrow 20 ft., climb 20 ft."
"saves":
  "Charisma": !!int "16"
  "Intelligence": !!int "15"
  "Strength": !!int "17"
  "Constitution": !!int "15"
"skillsaves":
  "Intimidation": !!int "16"
  "Athletics": !!int "17"
  "Deception": !!int "24"
  "Insight": !!int "15"
  "Persuasion": !!int "16"
"damage_resistances": "acid; cold; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., tremorsense 10 ft., passive Perception 17"
"languages": "all, telepathy 100 ft."
"cr": "26"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul's innate spellcasting ability is Charisma (spell save DC 24,\
    \ +16 to hit with spell attacks). He can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [animate dead](/compendium/spells/animate-dead.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [detect\
    \ magic](/compendium/spells/detect-magic.md), [fireball](/compendium/spells/fireball.md),\
    \ [hallow](/compendium/spells/hallow.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [suggestion](/compendium/spells/suggestion.md), [teleport](/compendium/spells/teleport.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)\n\n1/day each: [wish](/compendium/spells/wish.md)\n\
    \n3/day each: [dispel evil and good](/compendium/spells/dispel-evil-and-good.md),\
    \ [symbol](/compendium/spells/symbol.md) (pain or insanity)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede Baalzebul's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul scores a critical hit on a roll of 19 or 20."
  "name": "Decipher Weakness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Baalzebul fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Insects do not attack Baalzebul and as a bonus action he can command any\
    \ number of them within 50 feet to take move or action attacks."
  "name": "Lord of Flies"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul's slam attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul regains 20 hit points at the start of his turn. If he takes radiant\
    \ damage, this trait doesn't function at the start of his next turn. Baalzebul\
    \ dies only if he starts his turn with 0 hit points and is unable to regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 10 feet of Baalzebul must succeed\
    \ on a DC 21 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the start of the creature's next turn. On a successful saving throw, the\
    \ creature is immune to this stench for 1 hour."
  "name": "Stench of the Slug"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When casting animate dead, Baalzebul can summon 10 additional zombies or\
    \ skeletons as long as sufficient corpses are available."
  "name": "Undead Mastery"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul uses his Fear and Weakness gaze (if available) and then makes\
    \ two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 14 (1d10\
    \ + 9) bludgeoning damage. Baalzebul's attacks wither the limbs of opponents he\
    \ strikes. Any creature hit by Baalzebul's slam attack must make a DC 21 Constitution\
    \ saving throw. Failure means the target loses the use of their legs (stuck in\
    \ the [prone](/rules/conditions.md#prone) position) or their arms (unable to cast\
    \ spells or engage in attacks; lose any AC bonus from shields). Baalzebul decides\
    \ whether he targets arms or legs before making the attack roll. This withering\
    \ effect lasts for one minute but at the end of each of their turns the afflicted\
    \ creature may repeat the saving throw."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul activates a gaze attack and triggers two effects on everyone\
    \ within 50 feet of him. The first requires a DC 21 Charisma saving throw; failure\
    \ means the target is [frightened](/rules/conditions.md#frightened) of Baalzebul\
    \ as per the [fear](/compendium/spells/fear.md) spell. The second effect requires\
    \ another DC 21 Charisma saving throw. Failure means the target suffers the effects\
    \ of the [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md) spell.\
    \ Both effects last one minute."
  "name": "Fear and Weakness Gaze (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul magically teleports, along with any equipment he is wearing and\
    \ carrying, up to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul summons 1d6 [horned devils](/compendium/bestiary/fiend/horned-devil.md),\
    \ 1d4 [ice devils](/compendium/bestiary/fiend/ice-devil.md), or 1 [pit fiend](/compendium/bestiary/fiend/pit-fiend.md)."
  "name": "Summon Allies (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul uses his Teleport action."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baalzebul disgorges a swarm of biting flies (otherwise same as insect plague)\
    \ that deals 44 (8d10) piercing damage and does not require concentration."
  "name": "Insect Gorge (Costs 2 Actions)"
"source":
- "MaBJoV"
"image": "[[Baalzebul.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 91*

## Description

> [!quote]- A quote from Volo  
> 
> I have no idea how the big dolt and his hamster scrounged up information on so many dangerous entities, but it's foolish to write about them if you ask me. There's a reason I've never written a book about the Nine Hells.

Baalzebul, is an archdevil and the lord of Maladomini, the seventh layer of the Nine Hells. He is known as the Lord of the Flies because his tightly woven web of intrigue traps even the smallest fly. In recent centuries he has been cursed with a new hideous form by the Lord of the Nine Hells—Asmodeus. This form has earned him a new title—The Slug Archduke.

Baalzebul was originally known as Triel, one of the most powerful and beautiful angels to be found in Celestia. Triel's selfish acts in the name of achieving his perfection resulted in his corruption and exile from Celestia. After his fall, Asmodeus, perhaps out of some lingering sense of sympathy, quickly promoted Baalzebul to the ranks of devilish nobility. Baalzebul's ruthless lust for power served him well and before long he not only displaced the ancient, original Lord of Maladomini but managed to become the only archdevil to rule two layers of the Nine Hells, although he ruled Malbolge through the devil Moloch.

However, Baalzebul's pride continued to be his undoing. When he attempted to take Asmodeus's throne, his schemes were discovered and thwarted. Asmodeus inflicted a series of bizarre penalties upon Baalzebul. He was cursed to appear as a slug for one year per lie he had told to a devil. Any deal he struck with a mortal would result in a disaster for the participant. His castle was turned to excrement and filled with filth and his dominion of Malbolge was stripped from him.

Despite his punishments, Baalzebul is still dangerously cunning and charismatic. Even if trapped in the form of a slug, he is still the Lord of Lies, whose every deception is made with ease. Every one of his untruths is told with a specific purpose in mind. Only other devils are safe from his lies, as Baalzebul wishes to return to his original beautiful form.

If forced into combat Baalzebul's first tactic is to belch out gargantuan clouds of flesh-devouring flies. Baalzebul's stench is so putrid that simply trying to get anywhere close to him is sickening. Despite his bloated form, he can still burrow underground and easily scale surfaces. He is easy to track, since he always leaves a thick layer of putrid slime in his wake.