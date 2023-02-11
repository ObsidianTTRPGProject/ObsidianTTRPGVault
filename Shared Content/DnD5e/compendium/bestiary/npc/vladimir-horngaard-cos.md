---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/medium
- monster/type/undead
aliases: ["Vladimir Horngaard"]
statblock: true
"name": "Vladimir Horngaard"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "192"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Strength": !!int "7"
  "Constitution": !!int "7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, stunned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Draconic"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vladimir regains 10 hit points at the start of his turn. If he takes fire\
    \ or radiant damage, this trait doesn't function at the start of his next turn.\
    \ Vladimir's body is destroyed only if he starts his turn with 0 hit points and\
    \ doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Vladimir's body is destroyed, his soul lingers. After 24 hours, the\
    \ soul inhabits and animates another corpse on the same plane of existence and\
    \ regains all its hit points. While the soul is bodiless, a [wish](/compendium/spells/wish.md)\
    \ spell can be used to force the soul to go to the afterlife and not return."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vladimir wields a +2 greatsword with a hilt sculpted to resemble silver\
    \ dragon wings and a pommel shaped like a silver dragon's head clutching a black\
    \ opal between its teeth. "
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vladimir is immune to effects that turn undead."
  "name": "Turn Immunity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vladimir knows the distance to and direction of Strahd, even if Strahd\
    \ and Vladimir are on different planes of existence. If Strahd is destroyed, Vladimir\
    \ knows."
  "name": "Vengeful Tracker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vladimir makes two fist attacks or two attacks with his +2 Greatsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage. Strahd, the target of Vladimir's sworn vengeance, takes\
    \ an extra 14 (4d6) bludgeoning damage. Instead of dealing damage, Vladimir can\
    \ grapple the target (escape DC 14) provided the target is Large or smaller."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 20 (4d6\
    \ + 6) slashing damage. Against Strahd, Vladimir deals an extra 14 (4d6) slashing\
    \ damage with this weapon."
  "name": "Greatsword +2"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vladimir can target Strahd within 30 feet provided he can see Strahd. Strahd\
    \ must make a DC 15 Wisdom saving throw. One a failure, Strahd is [paralyzed](/rules/conditions.md#paralyzed)\
    \ until Vladimir deals damage to him, or until the end of Vladimir's next turn.\
    \ When the paralysis ends, Strahd is [frightened](/rules/conditions.md#frightened)\
    \ of Vladimir for 1 minute. Strahd can repeat the saving throw at the end of each\
    \ of his turns, with disadvantage if he can see Vladimir, ending the [frightened](/rules/conditions.md#frightened)\
    \ condition on itself on a success."
  "name": "Vengeful Glare"
"source":
- "CoS"
name: Vladimir Horngaard
image: "[[Vladimir Horngaard.png]]"
---

# Vladimir Horngaard

```statblock
"name": "Vladimir Horngaard"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "192"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Strength": !!int "7"
  "Constitution": !!int "7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, stunned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Draconic"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vladimir regains 10 hit points at the start of his turn. If he takes fire\
    \ or radiant damage, this trait doesn't function at the start of his next turn.\
    \ Vladimir's body is destroyed only if he starts his turn with 0 hit points and\
    \ doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Vladimir's body is destroyed, his soul lingers. After 24 hours, the\
    \ soul inhabits and animates another corpse on the same plane of existence and\
    \ regains all its hit points. While the soul is bodiless, a [wish](/compendium/spells/wish.md)\
    \ spell can be used to force the soul to go to the afterlife and not return."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vladimir wields a +2 greatsword with a hilt sculpted to resemble silver\
    \ dragon wings and a pommel shaped like a silver dragon's head clutching a black\
    \ opal between its teeth. "
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vladimir is immune to effects that turn undead."
  "name": "Turn Immunity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vladimir knows the distance to and direction of Strahd, even if Strahd\
    \ and Vladimir are on different planes of existence. If Strahd is destroyed, Vladimir\
    \ knows."
  "name": "Vengeful Tracker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vladimir makes two fist attacks or two attacks with his +2 Greatsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage. Strahd, the target of Vladimir's sworn vengeance, takes\
    \ an extra 14 (4d6) bludgeoning damage. Instead of dealing damage, Vladimir can\
    \ grapple the target (escape DC 14) provided the target is Large or smaller."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 20 (4d6\
    \ + 6) slashing damage. Against Strahd, Vladimir deals an extra 14 (4d6) slashing\
    \ damage with this weapon."
  "name": "Greatsword +2"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vladimir can target Strahd within 30 feet provided he can see Strahd. Strahd\
    \ must make a DC 15 Wisdom saving throw. One a failure, Strahd is [paralyzed](/rules/conditions.md#paralyzed)\
    \ until Vladimir deals damage to him, or until the end of Vladimir's next turn.\
    \ When the paralysis ends, Strahd is [frightened](/rules/conditions.md#frightened)\
    \ of Vladimir for 1 minute. Strahd can repeat the saving throw at the end of each\
    \ of his turns, with disadvantage if he can see Vladimir, ending the [frightened](/rules/conditions.md#frightened)\
    \ condition on itself on a success."
  "name": "Vengeful Glare"
"source":
- "CoS"
"image": "[[Vladimir Horngaard.png]]"
```
^statblock

*Source: Curse of Strahd p. 241*

## Description

Vladimir Horngaard joined the Order of the Silver Dragon at a young age and quickly earned the friendship of its founder, the silver dragon Argynvost. When he became a knight of the order, he traveled to distant lands to wage war against the forces of evil. The dragon stayed home and, in the guise of a human noble named Lord Argynvost, brought new initiates into the order.

**Enemies of Strahd.** Vladimir found himself fighting Strahd's armies time and again as they swept across the land. When it became clear that Strahd couldn't be stopped, the knights of the order led hundreds of refugees to Argynvost's valley, but Strahd tracked them to their sanctuary and overwhelmed them with a vast force. Vladimir, whom Argynvost had made a field commander, couldn't hold back the evil tide and was killed, only after the heartbreak of witnessing Strahd himself slay Vladimir's beloved, his fellow knight Sir Godfrey Gwilym. With the battle won, Strahd surrounded Argynvostholt. Rather than cower in his lair, Argynvost emerged and battled Strahd's armies to the bitter end.

**Deadly Vengeance.** Unwilling to accept his failure, Vladimir returned as a revenant. So great was his hatred of Strahd and his thirst for vengeance that those feelings fueled the spirits of many of his fellow knights - including Godfrey - to come back as revenants as well. Vladimir continued to wage the hopeless war, even as Strahd tightened his grip on the valley.

When Strahd became a vampire, Vladimir and his revenants should have gone to their eternal rest. But Strahd's deeds were so heinous that Barovia and the knight's spirits became trapped behind curtains of mist.

**Blinded by Hatred.**  Vladimir hates Strahd but doesn't want to see the vampire given his final rest. Vladimir wants Strahd to suffer forever for the deaths of Godfrey and Argynvost, the destruction of their order, and all the other crimes of which the vampire is guilty. Vladimir believes that all of Barovia has been swept into hell, and he wants to make sure that Strahd stays trapped in it forever. It angers Vladimir that he and his fellow knights are also trapped, but in Vladimir's mind, such is the price of keeping the vampire confined. Even his love for Godfrey is now just a dim memory shrouded by his hate.

Were Vladimir to let go of his hatred, his spirit would find peace and could remember the warmth of love. Were Strahd to be defeated, even temporarily, the mists surrounding Barovia would fade, allowing the spirits of Vladimir and his knights to enter the afterlife. Nevertheless, Vladimir would rather savor Strahd's torment than bring peace to his fallen order or peace to the land of Barovia. Gone are the days of honor and valor.

**Statistics.** Vladimir Horngaard has the statistics of a revenant with the following modifications:

- Vladimir's alignment is lawful evil.
- His Armor Class is 17 (half plate).
- He has 192 hit points.
- He speaks Common and Draconic.
- Vladimir wields a +2 greatsword with a hilt sculpted to resemble silver dragon wings and a pommel shaped like a silver dragon's head clutching a black opal between its teeth. As an action, he can make two attacks with the sword (+9 to hit). It deals 20 (4d6 + 6) slashing damage on a hit. Against Strahd, Vladimir deals an extra 14 (4d6) slashing damage with the weapon.
- Vladimir has a challenge rating of 7 (2,900 XP).

**Vladimir Horngaard's Traits.** **Ideal.** "Vengeance is all I have left."

**Bond.** "I have sworn oaths of allegiance to the Order of the Silver Dragon. Broken though the order may be, my allegiance never dies."

**Flaw.** "Destroying Strahd would end the vampire's torment, and that is something I will never allow."

**Revenant.** A revenant forms from the soul of a mortal who met a cruel and undeserving fate. It claws its way back into the world to seek revenge against the one who wronged it. The revenant reclaims its mortal body and superficially resembles a zombie. However, instead of lifeless eyes, a revenant's eyes burn with resolve and flare in the presence of its adversary. If the revenant's original body was destroyed or is otherwise unavailable, the spirit of the revenant enters another humanoid corpse. Regardless of the body the revenant uses as a vessel, its adversary always recognizes the revenant for what it truly is.

**Hunger for Revenge.** A revenant has only one year to exact revenge. When its adversary dies, or if the revenant fails to kill its adversary before its time runs out, it crumbles to dust and its soul fades into the afterlife. If its foe is too powerful for the revenant to destroy on its own, it seeks worthy allies to help it fulfill its quest.

**Divine Justice.** No magic can hide a creature pursued by a revenant, which always knows the direction and distance between it and the target of its vengeance. In cases where the revenant seeks revenge against more than one adversary, it pursues them one at a time, starting with the creature that dealt it the killing blow. If the revenant's body is destroyed, its soul flies forth to seek out a new corpse in which to resume its hunt.

**Undead Nature.** A revenant doesn't require air, food, drink, or sleep.