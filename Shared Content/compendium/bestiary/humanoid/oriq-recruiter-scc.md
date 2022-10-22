---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/medium
- monster/type/humanoid/warlock
aliases: ["Oriq Recruiter"]
statblock: true
"name": "Oriq Recruiter"
"size": "Medium"
"type": "humanoid"
"subtype": "warlock"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "8"
  "Insight": !!int "4"
  "Arcana": !!int "5"
  "Persuasion": !!int "6"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "passive Perception 12"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The recruiter casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 14):\n\
    \nAt will: [disguise self](/compendium/spells/disguise-self.md), [silent image](/compendium/spells/silent-image.md)\n\
    \n1/day: [suggestion](/compendium/spells/suggestion.md)\n\n2/day: [charm\
    \ person](/compendium/spells/charm-person.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The AC of the recruiter includes its Charisma modifier while it isn't wearing\
    \ armor or wielding a shield."
  "name": "Misdirecting Defense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The recruiter wears an Oriq mask. While wearing the mask, the recruiter\
    \ can't be targeted by any divination magic or perceived through magical scrying\
    \ sensors, and it adds double its proficiency bonus to Charisma (Deception) checks\
    \ (included above)."
  "name": "Oriq Mask"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The recruiter makes two Psychic Knife attacks. It can use Spellcasting\
    \ in place of one of the attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +6 to hit, reach 5 ft. or range 30 ft.,\
    \ one creature. Hit: 21 (5d6 + 4) psychic damage."
  "name": "Psychic Knife"
"source":
- "SCC"
name: Oriq Recruiter
image: "[[Oriq Recruiter.png]]"
---

# Oriq Recruiter

```statblock
"name": "Oriq Recruiter"
"size": "Medium"
"type": "humanoid"
"subtype": "warlock"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "8"
  "Insight": !!int "4"
  "Arcana": !!int "5"
  "Persuasion": !!int "6"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "passive Perception 12"
"languages": "Common plus any two languages"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The recruiter casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 14):\n\
    \nAt will: [disguise self](/compendium/spells/disguise-self.md), [silent image](/compendium/spells/silent-image.md)\n\
    \n1/day: [suggestion](/compendium/spells/suggestion.md)\n\n2/day: [charm\
    \ person](/compendium/spells/charm-person.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The AC of the recruiter includes its Charisma modifier while it isn't wearing\
    \ armor or wielding a shield."
  "name": "Misdirecting Defense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The recruiter wears an Oriq mask. While wearing the mask, the recruiter\
    \ can't be targeted by any divination magic or perceived through magical scrying\
    \ sensors, and it adds double its proficiency bonus to Charisma (Deception) checks\
    \ (included above)."
  "name": "Oriq Mask"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The recruiter makes two Psychic Knife attacks. It can use Spellcasting\
    \ in place of one of the attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +6 to hit, reach 5 ft. or range 30 ft.,\
    \ one creature. Hit: 21 (5d6 + 4) psychic damage."
  "name": "Psychic Knife"
"source":
- "SCC"
"image": "[[Oriq Recruiter.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 202*

## Description

Oriq recruiters are subtle mages who infiltrate Strixhaven in service to their order. They are adept at blending in, watching for powerful but underperforming mages and students who have fallen through the cracks of the institution. The recruiters approach and befriend these individuals either as potential recruits to the Oriq or as assets who can help the Oriq acquire spells, rare spell components, or knowledge from Strixhaven.

**Oriq.** The Oriq are a secret society of mages who wield forbidden magic in the service of their leader, Extus Narr. Narr was in consideration for elevation to the role of Oracle of Strixhaven, but when the Founder Dragons passed him over in favor of Jadzi, his bitterness knew no bounds. He now uses the Oriq to gather the spells and magical energy he needs to summon a devastating being, the Blood Avatar, to destroy Strixhaven.

The Oriq work in secret, infiltrating Strixhaven to search for the magic their master covets and watch for impressionable students and embittered faculty they might turn to their cause. The Oriq take pains to hide their true allegiance and wear masks to hide their identities. These masks have magical properties that function only for their intended wearers.