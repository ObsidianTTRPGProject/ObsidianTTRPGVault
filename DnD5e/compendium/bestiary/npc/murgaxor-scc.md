---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/medium
- monster/type/humanoid/bullywug
- monster/type/humanoid/warlock
aliases: ["Murgaxor"]
statblock: true
"name": "Murgaxor"
"size": "Medium"
"type": "humanoid"
"subtype": "bullywug, warlock"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"stats":
- !!int "11"
- !!int "14"
- !!int "18"
- !!int "20"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
  "Intelligence": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Medicine": !!int "5"
  "Deception": !!int "9"
  "Survival": !!int "5"
"damage_resistances": "necrotic"
"condition_immunities": "exhaustion"
"senses": "passive Perception 11"
"languages": "Common plus any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The AC of Murgaxor includes his Constitution modifier while he isn't wearing\
    \ armor or wielding a shield."
  "name": "Blood Aegis"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Murgaxor wears an Oriq mask. While wearing the mask, Murgaxor can't be\
    \ targeted by any divination magic or perceived through magical scrying sensors,\
    \ and he adds double his proficiency bonus to Charisma (Deception) checks (included\
    \ above)."
  "name": "Oriq Mask"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Murgaxor isn't [blinded](/rules/conditions.md#blinded), he can see\
    \ any creature that isn't an Undead or a Construct within 60 feet of himself,\
    \ even through total cover, heavily obscured areas, invisibility, or any other\
    \ phenomena that would prevent sight."
  "name": "Sanguine Sense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Murgaxor makes two Blood Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +9 to hit, reach 10 ft., one target. Hit: 21 (3d10\
    \ + 5) necrotic damage. If the target is a creature, it can't regain hit points\
    \ until the start of Murgaxor's next turn."
  "name": "Blood Lash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Murgaxor chooses a point within 150 feet of himself, and a 20-foot radius\
    \ sphere centered on that point fills with a burst of searing, blood-red mist.\
    \ Each creature of Murgaxor's choice that he can see in that area must make a\
    \ DC 17 Constitution saving throw. On a failed save, a creature takes 38 (7d10)\
    \ necrotic damage and is [incapacitated](/rules/conditions.md#incapacitated) until\
    \ the end of its next turn. On a success, a creature takes half as much damage\
    \ and isn't [incapacitated](/rules/conditions.md#incapacitated). A creature dies\
    \ if reduced to 0 hit points by this necrotic damage."
  "name": "Blood Boil (Recharge 4-6)"
"source":
- "SCC"
name: Murgaxor
image: "[[Murgaxor.png]]"
---

# Murgaxor

```statblock
"name": "Murgaxor"
"size": "Medium"
"type": "humanoid"
"subtype": "bullywug, warlock"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"stats":
- !!int "11"
- !!int "14"
- !!int "18"
- !!int "20"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
  "Intelligence": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Medicine": !!int "5"
  "Deception": !!int "9"
  "Survival": !!int "5"
"damage_resistances": "necrotic"
"condition_immunities": "exhaustion"
"senses": "passive Perception 11"
"languages": "Common plus any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The AC of Murgaxor includes his Constitution modifier while he isn't wearing\
    \ armor or wielding a shield."
  "name": "Blood Aegis"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Murgaxor wears an Oriq mask. While wearing the mask, Murgaxor can't be\
    \ targeted by any divination magic or perceived through magical scrying sensors,\
    \ and he adds double his proficiency bonus to Charisma (Deception) checks (included\
    \ above)."
  "name": "Oriq Mask"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Murgaxor isn't [blinded](/rules/conditions.md#blinded), he can see\
    \ any creature that isn't an Undead or a Construct within 60 feet of himself,\
    \ even through total cover, heavily obscured areas, invisibility, or any other\
    \ phenomena that would prevent sight."
  "name": "Sanguine Sense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Murgaxor makes two Blood Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +9 to hit, reach 10 ft., one target. Hit: 21 (3d10\
    \ + 5) necrotic damage. If the target is a creature, it can't regain hit points\
    \ until the start of Murgaxor's next turn."
  "name": "Blood Lash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Murgaxor chooses a point within 150 feet of himself, and a 20-foot radius\
    \ sphere centered on that point fills with a burst of searing, blood-red mist.\
    \ Each creature of Murgaxor's choice that he can see in that area must make a\
    \ DC 17 Constitution saving throw. On a failed save, a creature takes 38 (7d10)\
    \ necrotic damage and is [incapacitated](/rules/conditions.md#incapacitated) until\
    \ the end of its next turn. On a success, a creature takes half as much damage\
    \ and isn't [incapacitated](/rules/conditions.md#incapacitated). A creature dies\
    \ if reduced to 0 hit points by this necrotic damage."
  "name": "Blood Boil (Recharge 4-6)"
"source":
- "SCC"
"image": "[[Murgaxor.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 180*

## Description

After giving the characters their quest, Professor Lang hands them a file with information the faculty members have collected about Murgaxor from university records. Tell the players the following to give them context about this evil spellcaster:

- Murgaxor is a bullywug who attended Strixhaven 200 years ago. He was a member of Witherbloom College, though there are no records of him participating in any activities or working on campus.
- A mean-spirited, egotistical spellcaster, Murgaxor was censured repeatedly for disregarding safety protocols, hexing and cursing peers, and using harmful magic while on campus.
- University officials believe Murgaxor began his illicit experiments with life-draining magic shortly after he enrolled as a student.
- In his third year, Murgaxor was expelled for using life-draining magic when it resulted in another student's death. Murgaxor fled before he could be handed over to authorities.
- For a few years after his expulsion, Murgaxor was reportedly sighted around the outskirts of campus, specifically in Sedgemoor and the Detention Bog. Authorities believed something about those locations enhanced his magic, but he was never caught. Sightings soon stopped, and no further evidence of Murgaxor's presence was found. Offcials assumed he was dead and struck Murgaxor from Strixhaven's records, as they considered him a blot on the university's reputation.