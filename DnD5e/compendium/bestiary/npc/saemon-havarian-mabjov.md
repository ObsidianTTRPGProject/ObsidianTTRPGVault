---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Saemon Havarian"]
statblock: true
"name": "Saemon Havarian"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "19"
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "11"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "4"
  "Strength": !!int "8"
"skillsaves":
  "Intimidation": !!int "6"
  "Athletics": !!int "8"
  "Deception": !!int "6"
"senses": "passive Perception 10"
"languages": "Common, Infernal, Undercommon"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 16, +8 to hit with spell attacks). Saemon has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [mage\
    \ armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [misty step](/compendium/spells/misty-step.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (3 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [animate objects](/compendium/spells/animate-objects.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon wears a quiver of ehlonna."
  "name": "Magical Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon makes three melee or ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) slashing damage."
  "name": "Handaxe"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon adds 4 to his AC against one melee attack that would hit him. To\
    \ do so Saemon must see the attacker and be wielding a weapon."
  "name": "Parry"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon makes a weapon attack."
  "name": "Weapon Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon casts a cantrip from his spell list."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon casts the spell animate objects, targeting hand axes that he has\
    \ hurled at enemies up to a total of 10. If there are not enough hand axes to\
    \ equal 10, then he provides the remaining hand axes from his quiver of ehlonna.\
    \ The hand axes are considered tiny objects."
  "name": "Animate Objects (Costs 3 Actions)"
"source":
- "MaBJoV"
name: Saemon Havarian
image: "[[Saemon Havarian.png]]"
---

# Saemon Havarian

```statblock
"name": "Saemon Havarian"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "19"
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "11"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "4"
  "Strength": !!int "8"
"skillsaves":
  "Intimidation": !!int "6"
  "Athletics": !!int "8"
  "Deception": !!int "6"
"senses": "passive Perception 10"
"languages": "Common, Infernal, Undercommon"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 16, +8 to hit with spell attacks). Saemon has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [mage\
    \ armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [misty step](/compendium/spells/misty-step.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (3 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [animate objects](/compendium/spells/animate-objects.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon wears a quiver of ehlonna."
  "name": "Magical Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon makes three melee or ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) slashing damage."
  "name": "Handaxe"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon adds 4 to his AC against one melee attack that would hit him. To\
    \ do so Saemon must see the attacker and be wielding a weapon."
  "name": "Parry"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon makes a weapon attack."
  "name": "Weapon Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon casts a cantrip from his spell list."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Saemon casts the spell animate objects, targeting hand axes that he has\
    \ hurled at enemies up to a total of 10. If there are not enough hand axes to\
    \ equal 10, then he provides the remaining hand axes from his quiver of ehlonna.\
    \ The hand axes are considered tiny objects."
  "name": "Animate Objects (Costs 3 Actions)"
"source":
- "MaBJoV"
"image": "[[Saemon Havarian.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 122*

## Description

> [!quote]- A quote from MINSC  
> 
> Fool me once, shame on you; fool me twice, watch it! Fool me three times and you're a pirate! Never trust a pirate! This is something me and Boo agree wholeheartedly on.

Saemon Havarian is a flamboyant and opportunistic sea-captain and a wizard with a knack for getting out of trouble, often by putting others in it in his stead. He has been sailing the Sea of Swords for decades. During this time, he has amassed a huge fortune, mostly through double crosses, unsavory business deals, and piracy.

Saemon is almost always accompanied by a small band of sirenes. These beautiful fey creatures are not only famed for their haunting song, but also as deadly warriors. How Saemon managed to earn their loyalty is a topic of discussion in seaports up and down the Sword Coast.

On the surface, Saemon's life looks truly blessed. With his vast fortune he has managed to buy his way into Athkatla's Council of Six, rising from a simple ship's captain, to merchant lord, to the head of one of the most powerful families in the nation of Amn. But there is a dark secret that haunts him; a looming shadow even he has not been able to connive his way out from under.

While Saemon appears to be 60 years old, he is actually almost double that age. Seven decades ago, years ago, he had a heart attack during a pirate raid against Calishite merchant ships. While it looked like fate had finally caught up with him, one of his Calishite prisoners offered him a way out in exchange for his freedom. The merchant, a follower of the Archdevil Baalzebul, granted Saemon another century of life if he signed over his soul.

Now the clock is ticking for the sea captain. While he still has almost a quarter of a century left before his bargain ends, he has no intention of spending eternity in Hell. He is desperate for a way out of his deal, and recently Baalzebul gave Saemon the impression that he could buy his way out of the contract by giving the Archdevil access to political power in Athkatla. But since joining the Council of Six, it has become increasingly clear to Saemon that Baalzebul will never rip up his soul contract; the sea captain has been on the other side of enough double crosses to see one coming his way.