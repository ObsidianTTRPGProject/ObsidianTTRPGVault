---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/large
- monster/type/fiend/demon
aliases: ["Pazuzu"]
statblock: true
"name": "Pazuzu"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "21"
"hp": !!int "432"
"hit_dice": "32d10 + 256"
"stats":
- !!int "23"
- !!int "30"
- !!int "27"
- !!int "23"
- !!int "18"
- !!int "27"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "16"
  "Dexterity": !!int "18"
  "Constitution": !!int "16"
"skillsaves":
  "Perception": !!int "12"
  "Persuasion": !!int "16"
"damage_resistances": "acid, cold, fire"
"damage_immunities": "lightning; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "25"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu's innate spellcasting ability is Charisma (spell save DC 24, +16\
    \ to hit with spell attacks). He can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [astral projection](/compendium/spells/astral-projection.md),\
    \ [blight](/compendium/spells/blight.md), [charm person](/compendium/spells/charm-person.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md), [hallow](/compendium/spells/hallow.md),\
    \ [insect plague](/compendium/spells/insect-plague.md), [telekinesis](/compendium/spells/telekinesis.md),\
    \ [teleport](/compendium/spells/teleport.md), [wind walk](/compendium/spells/wind-walk.md)\n\
    \n1/day each: [wish](/compendium/spells/wish.md)\n\n3/day each: [dominate\
    \ person](/compendium/spells/dominate-person.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md),\
    \ [plane shift](/compendium/spells/plane-shift.md) (only itself and willing creatures)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any evil creature with a natural fly speed and a CR of 20 or less must\
    \ make a DC 21 Wisdom saving throw if they attempt to attack Pazuzu. Failure means\
    \ their action is wasted and the attack fails. On a successful saving throw the\
    \ target is immune to this effect in the future."
  "name": "Aura of Servile Avians"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Pazuzu fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Pazuzu casts [dispel magic](/compendium/spells/dispel-magic.md), he\
    \ automatically dispels any spell of 6th level or lower on the target."
  "name": "Spell Disruption"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage. As a bonus action Pazuzu can activate this sword's special\
    \ feature which grants him haste until the end of his next turn."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) slashing damage."
  "name": "Talon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu exhales poisonous acid in a 100-foot line that is 5 feet wide. Every\
    \ creature caught in the cone must make a DC 21 Dexterity saving throw. Each creature\
    \ takes 63 (18d6) acid damage on a failed save or half as much damage on a successful\
    \ one. A creature killed by this breath weapon melts and is disintegrated."
  "name": "Breath Weapons (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu knocks a weapon out of a target's hand if his attack roll (+14)\
    \ beats the target's Strength (Athletics) or Dexterity (Acrobatics) check. If\
    \ disarmed, the target's weapon flies 10 ft. in a random direction."
  "name": "Disarm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu attacks once with his greatsword or talons and can then fly away.\
    \ Pazuzu's movement does not provoke attacks, whether he hits or not."
  "name": "Lethal Leap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu casts [dispel magic](/compendium/spells/dispel-magic.md)."
  "name": "Disruption"
"source":
- "MaBJoV"
name: Pazuzu
image: "[[Pazuzu.png]]"
---

# Pazuzu

```statblock
"name": "Pazuzu"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "21"
"hp": !!int "432"
"hit_dice": "32d10 + 256"
"stats":
- !!int "23"
- !!int "30"
- !!int "27"
- !!int "23"
- !!int "18"
- !!int "27"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "16"
  "Dexterity": !!int "18"
  "Constitution": !!int "16"
"skillsaves":
  "Perception": !!int "12"
  "Persuasion": !!int "16"
"damage_resistances": "acid, cold, fire"
"damage_immunities": "lightning; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "25"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu's innate spellcasting ability is Charisma (spell save DC 24, +16\
    \ to hit with spell attacks). He can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [astral projection](/compendium/spells/astral-projection.md),\
    \ [blight](/compendium/spells/blight.md), [charm person](/compendium/spells/charm-person.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md), [hallow](/compendium/spells/hallow.md),\
    \ [insect plague](/compendium/spells/insect-plague.md), [telekinesis](/compendium/spells/telekinesis.md),\
    \ [teleport](/compendium/spells/teleport.md), [wind walk](/compendium/spells/wind-walk.md)\n\
    \n1/day each: [wish](/compendium/spells/wish.md)\n\n3/day each: [dominate\
    \ person](/compendium/spells/dominate-person.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md),\
    \ [plane shift](/compendium/spells/plane-shift.md) (only itself and willing creatures)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any evil creature with a natural fly speed and a CR of 20 or less must\
    \ make a DC 21 Wisdom saving throw if they attempt to attack Pazuzu. Failure means\
    \ their action is wasted and the attack fails. On a successful saving throw the\
    \ target is immune to this effect in the future."
  "name": "Aura of Servile Avians"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Pazuzu fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Pazuzu casts [dispel magic](/compendium/spells/dispel-magic.md), he\
    \ automatically dispels any spell of 6th level or lower on the target."
  "name": "Spell Disruption"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage. As a bonus action Pazuzu can activate this sword's special\
    \ feature which grants him haste until the end of his next turn."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) slashing damage."
  "name": "Talon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu exhales poisonous acid in a 100-foot line that is 5 feet wide. Every\
    \ creature caught in the cone must make a DC 21 Dexterity saving throw. Each creature\
    \ takes 63 (18d6) acid damage on a failed save or half as much damage on a successful\
    \ one. A creature killed by this breath weapon melts and is disintegrated."
  "name": "Breath Weapons (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu knocks a weapon out of a target's hand if his attack roll (+14)\
    \ beats the target's Strength (Athletics) or Dexterity (Acrobatics) check. If\
    \ disarmed, the target's weapon flies 10 ft. in a random direction."
  "name": "Disarm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu attacks once with his greatsword or talons and can then fly away.\
    \ Pazuzu's movement does not provoke attacks, whether he hits or not."
  "name": "Lethal Leap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pazuzu casts [dispel magic](/compendium/spells/dispel-magic.md)."
  "name": "Disruption"
"source":
- "MaBJoV"
"image": "[[Pazuzu.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 103*

## Description

> [!quote]- A quote from MINSC  
> 
> Boo once heard words coming from a flask made of iron. If I know anything, its that a flask is meant for drinking, not talking.

> [!quote]- A quote from Volo  
> 
> The rumors that Pazuzu corrupted Asmodeus, presupposes that Asmodeus was originally an angel. This has never been proven! The numerous origins attributed to the lord of the Nine include that he was the first god of Law or that he served such a god and murdered her. We will likely never know the truth.

Pazuzu is a powerful demon lord, one of the eldest and most reprehensible of his ilk. He is also called the Dark Angel of the Four Winds, and the Prince of the Lower Aerial Kingdoms. He holds sway over all evil flying creatures, even among the different layers of the Abyss.

Pazuzu's home is the first layer of the Abyss, called Pazunia, known as the Plain of Infinite Portals or the Palace of 1,001 Closets. It is a harsh place with many pits and chasms marring its surface. The pits are portals that not only lead to all of the planes of the Abyss, but to other planes of existence and even mortal worlds. Only Pazuzu knows where each leads.

Unlike most demon lords, Pazuzu is not interested in the conquest of the Abyss. His passion is for corruption. He is fond of corrupting mortals, especially the innocent and honest. Some believe that Pazuzu is the entity responsible for the ultimate corruption—that of the angel Asmodeus.

Pazuzu is often credited with bringing the Blood War between Demons and Devils to fruition. Some believe he was capable of this as he is the only demon lord who has good relations with the Archdevils of Hell. Strangely, the demon lord that hates Pazuzu the most is Grazz't, supposedly a Lord of Hell before becoming an Abyssal Lord.

When he visits the mortal world, Pazuzu often uses the names Pazrael, Imdugud, or Typhon. Whichever name he uses, he passes himself off in the guise of a benevolent entity that grants protections against pestilence and blesses childbirth. Those who use his protections are corrupted into committing vile acts, and children blessed by him are cursed to grow up with evil in their hearts.

The first and most ancient demon lord. He has been trapped in an iron flask and must be kept imprisoned until a way is found to destroy him.

> [!quote] The Iron Flask
> 
> One way to use Pazuzu is to have him imprisoned in an iron flask magic item. In this scenario, the group patron gives the players the iron flask at some early point in their career and tasks them with keeping Pazuzu trapped inside until they find a way to destroy the demon lord so that he is sent screaming back to the Abyss for a century. Many different powerful entities will seek to take the iron flask from the players over the course of the campaign.
> 
> The henchmen Edwin Odeisserron and Eo Ashmajir are powerful magic users who want to possess the iron flask to augment their own power. They might compete against each other in their attempts to wrest the flask away from the players.
> 
> Archdevils such as Baalzebul and Mephistopheles also actively pursue the flask, wanting to gain favor with Asmodeus by presenting him the demon lord who supposedly led to his downfall. The players might be able to play the archdevils against each other in order to survive.
> 
> The demodands of Ust Natha's Carcerus prison might send bebilith in search of the flask. They seek to imprison the demon lord in Carceri for reasons only known to their shator overlords.
> 
> Jon Irenicus might seek to steal the iron flask, believing that Pazuzu holds the secret to escaping the dread domain of Suldanessellar. He might send members of the Order of Icarus, or the players might be tricked into summoning Jon's sister—Bodhi Irenicus.
^the-iron-flask