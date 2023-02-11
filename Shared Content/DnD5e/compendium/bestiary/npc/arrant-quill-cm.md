---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Arrant Quill"]
statblock: true
"name": "Arrant Quill"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "10"
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "15"
- !!int "20"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Deception": !!int "9"
  "History": !!int "7"
  "Performance": !!int "13"
  "Arcana": !!int "11"
"senses": "passive Perception 12"
"languages": "Common, Draconic, Elvish, Undercommon"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quill casts one of the following spells using Charisma as the spellcasting\
    \ ability (save DC 17):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [mind blank](/compendium/spells/mind-blank.md), [teleport](/compendium/spells/teleport.md)\n\
    \n3/day each: [detect magic](/compendium/spells/detect-magic.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [hold monster](/compendium/spells/hold-monster.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quill makes two attacks with his dagger and uses Supreme Mockery."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quill utters a short fable while targeting up to five creatures within\
    \ 30 feet of him that he can see. Each target that can hear Quill's magical fable\
    \ must make a DC 17 Wisdom saving throw, taking 36 (8d8) psychic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Quill's Fable (Recharge 6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quill hurls a string of insults laced with enchantments at a creature he\
    \ can see within 60 feet of him. If the creature can hear Quill (though it need\
    \ not understand him), it must succeed on a DC 17 Wisdom saving throw or take\
    \ 66 (12d10) psychic damage and have disadvantage on the next attack roll it makes\
    \ before the end of its next turn."
  "name": "Supreme Mockery"
"source":
- "CM"
name: Arrant Quill
image: "[[Arrant Quill.png]]"
---

# Arrant Quill

```statblock
"name": "Arrant Quill"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "10"
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "15"
- !!int "20"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Deception": !!int "9"
  "History": !!int "7"
  "Performance": !!int "13"
  "Arcana": !!int "11"
"senses": "passive Perception 12"
"languages": "Common, Draconic, Elvish, Undercommon"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quill casts one of the following spells using Charisma as the spellcasting\
    \ ability (save DC 17):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [mind blank](/compendium/spells/mind-blank.md), [teleport](/compendium/spells/teleport.md)\n\
    \n3/day each: [detect magic](/compendium/spells/detect-magic.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [hold monster](/compendium/spells/hold-monster.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quill makes two attacks with his dagger and uses Supreme Mockery."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quill utters a short fable while targeting up to five creatures within\
    \ 30 feet of him that he can see. Each target that can hear Quill's magical fable\
    \ must make a DC 17 Wisdom saving throw, taking 36 (8d8) psychic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Quill's Fable (Recharge 6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quill hurls a string of insults laced with enchantments at a creature he\
    \ can see within 60 feet of him. If the creature can hear Quill (though it need\
    \ not understand him), it must succeed on a DC 17 Wisdom saving throw or take\
    \ 66 (12d10) psychic damage and have disadvantage on the next attack roll it makes\
    \ before the end of its next turn."
  "name": "Supreme Mockery"
"source":
- "CM"
"image": "[[Arrant Quill.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 157*

## Description

Quill is a charismatic bard who carries himself with a quiet confidence that doesn't hint at the full extent of his skills or powers. His handsome features are marred by a scar that curves from the top of his left cheekbone down to his jaw, though he doesn't consider the scar disfiguring. If asked about the scar, he explains that he got it years ago when the man who burned down his home village slashed his face with a dagger. It serves as a grim reminder of his past.

Although outwardly friendly, Quill is driven by three selfish desires: to preserve his well-being, to alleviate his boredom, and to escape Wisteria Vale. He holds a grudge against the Harpers and Ryllia for imprisoning him in a place that reminds him of the people he lost in his childhood, though he also takes some comfort in being able to live out the life he could've had. His time spent alone with his thoughts in Wisteria Vale has led him to suspect that the Harpers were never going to find a cure, and that they were simply biding their time until he became complacent enough that they could kill him without his being a threat. Quill's corruption has convinced him that the Harpers have become a powerful force that must be taken down; he trusts only himself to identify and eliminate agents of tyranny.

As long as Quill remains in Wisteria Vale, he is immune to all damage and automatically succeeds on all saving throws. This feature is suppressed if Quill wills it (no action required) or while he is within 15 feet of Renekor the beholder.