---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/undead
aliases: ["Jon Irenicus"]
statblock: true
"name": "Jon Irenicus"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "19"
- !!int "16"
- !!int "16"
- !!int "22"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "13"
  "Constitution": !!int "10"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
  "History": !!int "13"
  "Arcana": !!int "20"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Abyssal, Celestial, Common, Elvish, Infernal, Sylvan"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus is an 20th-level spellcaster. His spellcasting ability is\
    \ Intelligence (spell save DC 21, +13 to hit with spell attacks). Jon Irenicus\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [detect thoughts](/compendium/spells/detect-thoughts.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [Melf's acid arrow](/compendium/spells/melfs-acid-arrow.md), [mirror image](/compendium/spells/mirror-image.md)\n\
    \n3rd level (3 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fireball](/compendium/spells/fireball.md)\n\n4th level (3 4th-level slots):\
    \ [blight](/compendium/spells/blight.md), [dimension door](/compendium/spells/dimension-door.md)\n\
    \n5th level (3 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [disintegrate](/compendium/spells/disintegrate.md), [tenser's transformation](/compendium/spells/tensers-transformation-xge.md)\n\
    \n7th level (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [mordenkainen's sword](/compendium/spells/mordenkainens-sword.md)\n\n8th level\
    \ (1 8th-level slots): [dominate monster](/compendium/spells/dominate-monster.md),\
    \ [power word stun](/compendium/spells/power-word-stun.md)\n\n9th level (1 9th-level\
    \ slots): [power word kill](/compendium/spells/power-word-kill.md), [time stop](/compendium/spells/time-stop.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Jon Irenicus fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If he has a phylactery and is destroyed, Jon Irenicus gains a new body\
    \ in 1d10 days, regaining all its hit points and becoming active again. The new\
    \ body appears within 5 feet of the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus has advantage on saving throws against any effect that turns\
    \ undead."
  "name": "Turn Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus makes two flame tongue attacks or two mace attacks. Each attack\
    \ does an additional 13 (2d12) force damage."
  "name": "Multiattack (only useable with Tenser's Transformation)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 4) slashing damage and 7 (2d6) fire damage."
  "name": "Flame Tongue (Rod of Lordly Might)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 10 (1d6\
    \ + 7) bludgeoning damage."
  "name": "Mace (Rod of Lordly Might)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus casts a cantrip."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus makes a drain life attack with his rod of lordly might. If\
    \ he hits a creature with his rod, the creature must make a DC 17 Constitution\
    \ saving throw. On a failure, the creature takes an extra 4d6 necrotic damage,\
    \ and Jon regains a number of hit points equal to half that necrotic damage. This\
    \ property can't be used for 24 hours."
  "name": "Drain Life Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus makes a paralyze attack with his rod of lordly might. If he\
    \ hits a creature with his rod, the creature must make a DC 17 Strength saving\
    \ throw.\n\nOn a failure, the creature is [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The creature can repeat the saving throw at the end of each of\
    \ its turns, ending the effect on a success. This property can't be used for 24\
    \ hours."
  "name": "Paralyze Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus casts [tenser's transformation](/compendium/spells/tensers-transformation-xge.md).\
    \ He gains 50 temporary hit points. He gains advantage on his attack rolls with\
    \ his rod of lordly might. When he hits a target with his rod of lordly might,\
    \ that target takes an extra 2d12 force damage. He gains proficiency in Strength\
    \ and Constitution saving throws. He can use his multiattack"
  "name": "Tenser's Transformation (Costs 3 Actions)"
"source":
- "MaBJoV"
name: Jon Irenicus
image: "[[Jon Irenicus.png]]"
---

# Jon Irenicus

```statblock
"name": "Jon Irenicus"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "19"
- !!int "16"
- !!int "16"
- !!int "22"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "13"
  "Constitution": !!int "10"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
  "History": !!int "13"
  "Arcana": !!int "20"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Abyssal, Celestial, Common, Elvish, Infernal, Sylvan"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus is an 20th-level spellcaster. His spellcasting ability is\
    \ Intelligence (spell save DC 21, +13 to hit with spell attacks). Jon Irenicus\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [detect thoughts](/compendium/spells/detect-thoughts.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [Melf's acid arrow](/compendium/spells/melfs-acid-arrow.md), [mirror image](/compendium/spells/mirror-image.md)\n\
    \n3rd level (3 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fireball](/compendium/spells/fireball.md)\n\n4th level (3 4th-level slots):\
    \ [blight](/compendium/spells/blight.md), [dimension door](/compendium/spells/dimension-door.md)\n\
    \n5th level (3 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [disintegrate](/compendium/spells/disintegrate.md), [tenser's transformation](/compendium/spells/tensers-transformation-xge.md)\n\
    \n7th level (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [mordenkainen's sword](/compendium/spells/mordenkainens-sword.md)\n\n8th level\
    \ (1 8th-level slots): [dominate monster](/compendium/spells/dominate-monster.md),\
    \ [power word stun](/compendium/spells/power-word-stun.md)\n\n9th level (1 9th-level\
    \ slots): [power word kill](/compendium/spells/power-word-kill.md), [time stop](/compendium/spells/time-stop.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Jon Irenicus fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If he has a phylactery and is destroyed, Jon Irenicus gains a new body\
    \ in 1d10 days, regaining all its hit points and becoming active again. The new\
    \ body appears within 5 feet of the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus has advantage on saving throws against any effect that turns\
    \ undead."
  "name": "Turn Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus makes two flame tongue attacks or two mace attacks. Each attack\
    \ does an additional 13 (2d12) force damage."
  "name": "Multiattack (only useable with Tenser's Transformation)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 4) slashing damage and 7 (2d6) fire damage."
  "name": "Flame Tongue (Rod of Lordly Might)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 10 (1d6\
    \ + 7) bludgeoning damage."
  "name": "Mace (Rod of Lordly Might)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus casts a cantrip."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus makes a drain life attack with his rod of lordly might. If\
    \ he hits a creature with his rod, the creature must make a DC 17 Constitution\
    \ saving throw. On a failure, the creature takes an extra 4d6 necrotic damage,\
    \ and Jon regains a number of hit points equal to half that necrotic damage. This\
    \ property can't be used for 24 hours."
  "name": "Drain Life Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus makes a paralyze attack with his rod of lordly might. If he\
    \ hits a creature with his rod, the creature must make a DC 17 Strength saving\
    \ throw.\n\nOn a failure, the creature is [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The creature can repeat the saving throw at the end of each of\
    \ its turns, ending the effect on a success. This property can't be used for 24\
    \ hours."
  "name": "Paralyze Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jon Irenicus casts [tenser's transformation](/compendium/spells/tensers-transformation-xge.md).\
    \ He gains 50 temporary hit points. He gains advantage on his attack rolls with\
    \ his rod of lordly might. When he hits a target with his rod of lordly might,\
    \ that target takes an extra 2d12 force damage. He gains proficiency in Strength\
    \ and Constitution saving throws. He can use his multiattack"
  "name": "Tenser's Transformation (Costs 3 Actions)"
"source":
- "MaBJoV"
"image": "[[Jon Irenicus.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 72*

## Description

> [!quote]- A quote from MINSC & BOO!  
> 
> Me and Boo have traveled far and wide and wide and far. Over mountains and under mountains and beside mountains. In all these places we have fought evil...for evil is everywhere. We have fought evil that is as evil as a green dragon that assaults your senses with tremendously loud and stinky belches. But never have we fought evil quite like Jon and Bodhi.

Joneleth of the house of Icarus was at one time the most powerful wizard in the elven city of Suldanessellar, and the favorite of the city's queen, Ellesime. Despite his esteemed position, Jon was led astray by the madness of his sister, Bodhi. She convinced Jon that he shouldn't be content with the power he possessed; that he deserved more.

To seduce her brother, Bodhi shared magical secrets with Jon that she had learned from the Dark Powers of the Shadowfell. Using one of these secrets, Jon attempted to steal the life force from Suldanessellar's Tree of Life, believing it would grant him power on the level of the elven gods. The ritual failed and many elves nearly died as a result. For their crimes, Queen Ellesime cursed Jon and Bodhi, stripping them of their elven longevity and exiling them from the city. The elven people no longer recognized the siblings as their own kind and so the exiled siblings took new names. Joneleth Icarus became Jon Irenicus (an elven word meaning "unclean").

Following his exile, Irenicus became obsessed with regaining the longevity that he had lost. He spent much of his time researching forbidden magic and engaging in horrific experimentation. Within his subterranean lair beneath the city of Athkatla, he tortured and studied mortal captives by means of twisted magic. One of those captives was the Bhaalspawn Abdel Adrian, mortal son of the God of Murder. Jon sought to draw the divine spark out of Abdel and take it for himself. But Abdel escaped imprisonment and eventually hunted down and killed Jon, bringing his existence to a seemingly ignominious end.

But that was not to be Jon's final fate. Due to a pact with the Dark Powers of the Shadowfell, Jon and Bodhi were drawn into a dark reflection of the treetop city in the Domain of Dread. Trapped and unable to escape the prison of his own making, Jon is still able to inflict misery on the elves of Suldanessellar with the help of his sister and their loyal followers.

**Jon Irenicus as a Contact.** Jon Irenicus becomes available as a contact at 11th level. Jon has researched the path to become a lich. He is only willing to share the secret of lichdom with a wizard who is at least 17th level and swears lifelong fealty to him.

- Mastering the Ritual: You must read the books that Jon provides you. This takes 10 weeks of downtime.
- Building a Phylactery: You must build a phylactery. It can be a small box or any other item that has an interior space where arcane sigils can be drawn. It must be crafted from precious metals worth at least 50,000 gp in total. You must then scribe the arcane sigils of naming, binding, immortality, and dark magic in silver. This process takes 10 weeks of downtime.
- The First Soul: You must capture a living humanoid or fiend. This humanoid or fiend must have a CR of 8 or greater.
- Brewing the Potion: You must brew the potion of transformation. The blood of the first soul must be poured into this concoction. Brewing the potion takes 1 week and 20,000 gp worth of ingredients.
- Performing the Ritual: Performing the final ritual requires an additional 30,000 gp in precious metals, rare herbs and incenses and various other components. The ritual takes 8 hours. At the end of it you must cast the [imprisonment](/compendium/spells/imprisonment.md) spell on the first soul. Then you must drink the potion of transformation. If you succeed at a DC 15 Constitution saving throw you rise up as a lich. If you fail the saving throw you are struck dead. You cannot be raised except with a [wish](/compendium/spells/wish.md) spell.
- Lichdom: It is up to your DM whether or not you can continue play as a lich. If your DM does allow you to continue play as a lich, it is recommended that you receive no legendary actions, no lair actions, no paralyzing touch and no legendary resistance. Instead, your race becomes undead and you gain the following benefits:
- Resistance to damage from Cold, Lightning and Necrotic.  
    - Immunity to Poison damage and Bludgeoning, Piercing, and Slashing from Nonmagical Attacks.  
    - Immunity to the Charmed, Exhaustion, Frightened, Paralyzed and Poisoned conditions.  
    - If you are destroyed you gain a new body in 1d10 days, regaining all of your hit points and becoming active again. The new body appears within 5 feet of your phylactery.