---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/medium
- monster/type/fiend
aliases: ["Mahadi the Rakshasa"]
statblock: true
"name": "Mahadi the Rakshasa"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "195"
"hit_dice": "23d8 + 92"
"stats":
- !!int "14"
- !!int "18"
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "20"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "9"
"skillsaves":
  "Deception": !!int "10"
  "Insight": !!int "9"
  "Perception": !!int "9"
  "Arcana": !!int "7"
"damage_vulnerabilities": "piercing from magic weapons wielded by good creatures"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all (can read only), Common, Infernal"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mahadi's innate spellcasting ability is Charisma (spell save DC 18, +9\
    \ to hit with spell attacks). He can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [banishment](/compendium/spells/banishment.md),\
    \ [demiplane](/compendium/spells/demiplane.md), [dominate person](/compendium/spells/dominate-person.md),\
    \ [fly](/compendium/spells/fly.md), [forcecage](/compendium/spells/forcecage.md),\
    \ [geas](/compendium/spells/geas.md), [plane shift](/compendium/spells/plane-shift.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)\n\n3/day each: [charm person](/compendium/spells/charm-person.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [hellish rebuke](/compendium/spells/hellish-rebuke.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [major image](/compendium/spells/major-image.md), [speak with dead](/compendium/spells/speak-with-dead.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mahadi can't be affected or detected by spells of 6th level or lower unless\
    \ he wishes to be. He has advantage on saving throws against all other spells\
    \ and magical effects."
  "name": "Limited Magic Immunity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mahadi's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mahadi makes four claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) slashing damage, and the target is cursed if it's a creature. The curse\
    \ takes effect whenever the target takes a short or long rest, filling the target's\
    \ thoughts with horrible images and dreams. The cursed target gains no benefit\
    \ from finishing a short or long rest. The curse lasts until it is lifted by a\
    \ [remove curse](/compendium/spells/remove-curse.md) spell or similar magic."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mahadi summons Ilzabet, an erinyes bound to him by an infernal contract.\
    \ The erinyes appears in an unoccupied space within 60 feet of him, acts as his\
    \ ally, and can't summon other devils. The erinyes remains for 10 minutes or until\
    \ Mahadi dismisses it as an action. If the erinyes dies, Mahadi loses this action\
    \ option."
  "name": "Summon Erinyes (1/Day)"
"source":
- "BGDIA"
name: Mahadi the Rakshasa
image: "[[Mahadi the Rakshasa.png]]"
---

# Mahadi the Rakshasa

```statblock
"name": "Mahadi the Rakshasa"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "195"
"hit_dice": "23d8 + 92"
"stats":
- !!int "14"
- !!int "18"
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "20"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "9"
"skillsaves":
  "Deception": !!int "10"
  "Insight": !!int "9"
  "Perception": !!int "9"
  "Arcana": !!int "7"
"damage_vulnerabilities": "piercing from magic weapons wielded by good creatures"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all (can read only), Common, Infernal"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mahadi's innate spellcasting ability is Charisma (spell save DC 18, +9\
    \ to hit with spell attacks). He can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [banishment](/compendium/spells/banishment.md),\
    \ [demiplane](/compendium/spells/demiplane.md), [dominate person](/compendium/spells/dominate-person.md),\
    \ [fly](/compendium/spells/fly.md), [forcecage](/compendium/spells/forcecage.md),\
    \ [geas](/compendium/spells/geas.md), [plane shift](/compendium/spells/plane-shift.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)\n\n3/day each: [charm person](/compendium/spells/charm-person.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [hellish rebuke](/compendium/spells/hellish-rebuke.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [major image](/compendium/spells/major-image.md), [speak with dead](/compendium/spells/speak-with-dead.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mahadi can't be affected or detected by spells of 6th level or lower unless\
    \ he wishes to be. He has advantage on saving throws against all other spells\
    \ and magical effects."
  "name": "Limited Magic Immunity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mahadi's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mahadi makes four claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) slashing damage, and the target is cursed if it's a creature. The curse\
    \ takes effect whenever the target takes a short or long rest, filling the target's\
    \ thoughts with horrible images and dreams. The cursed target gains no benefit\
    \ from finishing a short or long rest. The curse lasts until it is lifted by a\
    \ [remove curse](/compendium/spells/remove-curse.md) spell or similar magic."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mahadi summons Ilzabet, an erinyes bound to him by an infernal contract.\
    \ The erinyes appears in an unoccupied space within 60 feet of him, acts as his\
    \ ally, and can't summon other devils. The erinyes remains for 10 minutes or until\
    \ Mahadi dismisses it as an action. If the erinyes dies, Mahadi loses this action\
    \ option."
  "name": "Summon Erinyes (1/Day)"
"source":
- "BGDIA"
"image": "[[Mahadi the Rakshasa.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 127*

## Description

Mahadi appears as a wealthy merchant lord. Though extremely powerful, Mahadi doesn't believe in taking unnecessary risks, particularly in the Nine Hells where he can be permanently slain. Mahadi acts as the eyes and ears of Asmodeus in Avernus. As a deal broker and moderator, he's privy to all manner of dealings that might otherwise escape the attention of his patron.

In his role as the master of the Wandering Emporium, Mahadi has received special dispensation from Asmodeus to travel freely between the Material Plane and the Nine Hells to operate his business, as well as to pursue information and broker contracts and other such arrangements as needed.

In addition to managing the Wandering Emporium, Mahadi is also the proprietor and host of Infernal Rapture, a restaurant and spa. Since the establishment exists within a demiplane, patrons can comfortably visit it at any time, even while the caravan is on the move. As long as they can pay for services rendered, guests need not fear being trapped within, since Mahadi is very serious about maintaining the contract between host and guest. Each guest must agree to this formal arrangement prior to gaining entrance.

Mahadi presents himself as a charismatic and gracious host. He makes each guest of Infernal Rapture feel as though they're the most important person in all the planes of existence, catering to their every whim and desire. While he is equally cordial to all guests of the Wandering Emporium, those entering his establishment fall under a special contract and therefore rank most highly in his esteem.

Of course, guests leaving Infernal Rapture are expected to pay their bills in full prior to departure. If a guest cannot pay for whatever reason, the contract they signed on entry clearly stipulates their soul is forfeit. They're required to pay off their debt through service. All such individuals fall under the effect of a geas cast as a 9th-level spell, which cannot be willingly broken by the affected individual until their debt is paid in full. What Mahadi does with such defaulters depends on their capabilities. Some become indentured servants, working at Infernal Rapture. If they possess a talent for sales, they might eventually obtain a business to run within the Wandering Emporium.