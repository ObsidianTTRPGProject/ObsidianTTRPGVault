---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Ezmerelda d'Avenir"]
statblock: true
"name": "Ezmerelda d'Avenir"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Good"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "14"
- !!int "19"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
"skillsaves":
  "Medicine": !!int "3"
  "Sleight of Hand": !!int "7"
  "Deception": !!int "9"
  "Stealth": !!int "7"
  "Insight": !!int "3"
  "Perception": !!int "6"
  "Performance": !!int "6"
  "Acrobatics": !!int "7"
  "Arcana": !!int "6"
  "Survival": !!int "6"
"senses": "passive Perception 16"
"languages": "Common, Elvish"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ezmerelda is a 7th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). Ezmerelda has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md)\n\
    \n2nd level (3 2nd-level slots): [darkvision](/compendium/spells/darkvision.md),\
    \ [knock](/compendium/spells/knock.md), [mirror image](/compendium/spells/mirror-image.md)\n\
    \n3rd level (3 3rd-level slots): [clairvoyance](/compendium/spells/clairvoyance.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md), [magic circle](/compendium/spells/magic-circle.md)\n\
    \n4th level (1 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In addition to her magic armor and weapons, Ezmerelda has two [potions\
    \ of greater healing](/compendium/items/potion-of-greater-healing.md), six [vials\
    \ of holy water](/compendium/items/holy-water-flask.md), and three wooden stakes."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ezmerelda makes three attacks: two with her +1 rapier and one with her\
    \ +1 handaxe or her silvered shortsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) piercing damage."
  "name": "Rapier +1"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) slashing damage."
  "name": "Handaxe +1"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Silvered Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ezmerelda targets one creature that she can see within 30 feet of her.\
    \ The target must succeed on a DC 14 Wisdom saving throw or be cursed. While cursed,\
    \ the target has vulnerability to one type of damage of Ezmerelda's choice. The\
    \ curse lasts until ended with a [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell, a [remove curse](/compendium/spells/remove-curse.md) spell, or similar\
    \ magic. When the curse ends, Ezmerelda takes 3d6 psychic damage."
  "name": "Curse (Recharges after a Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ezmerelda targets one creature that she can see within 10 feet of her and\
    \ casts one of the following spells on the target (save DC 14), requiring neither\
    \ somatic nor material components to do so: animal friendship, charm person, or\
    \ hold person. If the target succeeds on the initial saving throw, Ezmerelda is\
    \ [blinded](/rules/conditions.md#blinded) until the end of her next turn. Once\
    \ a target succeeds on a saving throw against this effect, it is immune to the\
    \ Evil Eye power of all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
name: Ezmerelda d'Avenir
image: "[[Ezmerelda d'Avenir.png]]"
---

# Ezmerelda d'Avenir

```statblock
"name": "Ezmerelda d'Avenir"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Good"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "14"
- !!int "19"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
"skillsaves":
  "Medicine": !!int "3"
  "Sleight of Hand": !!int "7"
  "Deception": !!int "9"
  "Stealth": !!int "7"
  "Insight": !!int "3"
  "Perception": !!int "6"
  "Performance": !!int "6"
  "Acrobatics": !!int "7"
  "Arcana": !!int "6"
  "Survival": !!int "6"
"senses": "passive Perception 16"
"languages": "Common, Elvish"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ezmerelda is a 7th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). Ezmerelda has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md)\n\
    \n2nd level (3 2nd-level slots): [darkvision](/compendium/spells/darkvision.md),\
    \ [knock](/compendium/spells/knock.md), [mirror image](/compendium/spells/mirror-image.md)\n\
    \n3rd level (3 3rd-level slots): [clairvoyance](/compendium/spells/clairvoyance.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md), [magic circle](/compendium/spells/magic-circle.md)\n\
    \n4th level (1 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In addition to her magic armor and weapons, Ezmerelda has two [potions\
    \ of greater healing](/compendium/items/potion-of-greater-healing.md), six [vials\
    \ of holy water](/compendium/items/holy-water-flask.md), and three wooden stakes."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ezmerelda makes three attacks: two with her +1 rapier and one with her\
    \ +1 handaxe or her silvered shortsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) piercing damage."
  "name": "Rapier +1"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) slashing damage."
  "name": "Handaxe +1"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Silvered Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ezmerelda targets one creature that she can see within 30 feet of her.\
    \ The target must succeed on a DC 14 Wisdom saving throw or be cursed. While cursed,\
    \ the target has vulnerability to one type of damage of Ezmerelda's choice. The\
    \ curse lasts until ended with a [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell, a [remove curse](/compendium/spells/remove-curse.md) spell, or similar\
    \ magic. When the curse ends, Ezmerelda takes 3d6 psychic damage."
  "name": "Curse (Recharges after a Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ezmerelda targets one creature that she can see within 10 feet of her and\
    \ casts one of the following spells on the target (save DC 14), requiring neither\
    \ somatic nor material components to do so: animal friendship, charm person, or\
    \ hold person. If the target succeeds on the initial saving throw, Ezmerelda is\
    \ [blinded](/rules/conditions.md#blinded) until the end of her next turn. Once\
    \ a target succeeds on a saving throw against this effect, it is immune to the\
    \ Evil Eye power of all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "[[Ezmerelda d'Avenir.png]]"
```
^statblock

*Source: Curse of Strahd p. 231*

## Description

Ezmerelda d'Avenir, a Vistana, is the protégé of Rudolph van Richten - despite the fact that her first encounter with the vampire hunter was anything but pleasant.

**Witness to Tragedy.** When Ezmerelda was a little girl, her family kidnapped van Richten's teenage son, Erasmus, and delivered him into the clutches of a vampire. Even today, years later, she can still hear Erasmus's pleas for mercy. That event haunted her childhood.

Van Richten tracked down Ezmerelda's family soon after the kidnapping, but not before the Vistani had sold the boy. Though van Richten could have done them harm, he instead interrogated Ezmerelda's mother and father on the whereabouts of his missing son. Satisfied with their answers, he spared their lives before departing with the information they had given him. Ezmerelda witnessed van Richten's act of mercy and was deeply moved by it.

**Van Richten's Tragic Tale.** At the age of fifteen, Ezmerelda, still troubled by what her family had done to van Richten, ran away from home. After many harrowing adventures, she tracked down van Richten two years later. Thinking she was a Vistana assassin, he put a sword to her throat and threatened to spill her blood. Ezmerelda convinced him that she genuinely wanted to help him find his missing son, whereupon van Richten told her the saddest of tales. He had found his son, who had been transformed into a vampire spawn. When Erasmus pleaded to his father for salvation, van Richten granted his request by ending his existence.

**Farewell.** Ezmerelda remained by van Richten's side for two years, helping him track down and slay many creatures of the night. But because van Richten could never bring himself to fully trust a Vistana, he kept secrets from her. The two vampire hunters got on each other's nerves, and their arguments became more frequent. At last, Ezmerelda suggested that they part company with some shred of their friendship still intact, and van Richten agreed.

**Ezmerelda's Secret.** Since bidding farewell to van Richten, Ezmerelda has amassed a sizable personal fortune, some of which she used to buy a wagon to carry her vampire-slaying paraphernalia. On one of her less successful adventures, a werewolf bit off her right leg below the knee, and although she avoided being afflicted with lycanthropy, Ezmerelda was sidelined for months. She commissioned a master artisan to craft a prosthetic lower leg and foot. After several tries, he delivered a prosthesis that restored her mobility. She has since adapted well to the false appendage.

**The Great Vampire Hunt.** While in the company of a Vistani caravan, Ezmerelda heard a rumor that Rudolph van Richten had gone to Barovia to slay the most powerful vampire of them all. She decided that he might need help and traveled for months to reach Strahd's domain. She rode her wagon to Vallaki and learned about an old tower that seemed the sort of place van Richten would use as a base. When she arrived there, she found some of van Richten's belongings, but of the vampire hunter there was no sign. Although she is anxious to learn the whereabouts of her mentor, she is also eager to earn his trust and respect. To that end, she has been poring over van Richten's research and learning about Strahd and Castle Ravenloft, with every intention of dispatching the vampire herself.

**Tarokka Deck.** Ezmerelda keeps a deck of tarokka cards in her wagon (chapter 11, area V1). Although the cards aren't magical, Ezmerelda can use them to perform a card reading for the characters (see chapter 1), like the one that can be performed by Madam Eva.

**Ezmerelda d'Avenir's Traits.** **Ideal.** "Evil that feeds on the innocent is the worst of all evils and must be destroyed."

**Bond.** "My mentor and teacher, Dr. Rudolph van Richten, is like a father to me."

**Flaw.** "I go where angels fear to tread."