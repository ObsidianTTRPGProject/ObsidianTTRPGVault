---
ImportedOn: Tuesday, 21 December 2021 11:45:48 PM
Aliases:
  - Kobolds
Tags: 
  - Category/Creature
  - Kobold
Source: MM
SourceType: Bestiary
Publisher: WOTC
Alignment: Lawful Evil
Challenge: CR 1/8
Size: Small
Type: Humanoid
Creature-Tags: Kobold
parent:
  - Kobolds
up:
  - Kobolds
prev:
  - Winged Kobold
RWtopicId: Topic_200
---
# Kobold
[[Kobold.jpg|open outside]]
![[Kobold.jpg|Kobold|right|400]]

```ad-tip
title: Statblock
collapse: open
icon: horn-call
```statblock
monster: Kobold
```

```encounter
name: Encounter
creatures:
 - 1: Kobold
```
## Strategy
Kobolds differ from goblins in significant ways. Their Intelligence, Wisdom, and Constitution are all lower. They have Sunlight Sensitivity, which means that while goblins may prefer to dwell in the dark, kobolds must. Like goblins, kobolds set traps; unlike goblins, they’re not nimble or stealthy.

What’s most distinctive about kobolds is their Pack Tactics trait, which gives them advantage on attacks when ganging up on a target. That’s the crux of how kobolds ought to fight. Kobold society has evolved to be highly cooperative. Unlike goblins, forever squabbling and looking out for themselves, kobolds instinctively work together, even without having to discuss what they’re doing.

A kobold attack begins as an ambush: Hiding kobolds (which aren’t exceptionally stealthy but may gain the element of surprise anyway, since they have decently high Dexterity and live in dark places) pop up and pelt the party with sling stones from 20 to 30 feet away in order to soften them up. This lasts until either the player characters close with the kobolds or the kobolds have lost any advantage they had, such as the PCs being restrained by a trap or blinded by darkness. At this point, the kobolds surge forward and engage in melee.

Kobold melee combat is all about swarming. No kobold will ever fight an enemy hand-to-hand by itself, not even one its own size. Any kobold that’s the only one left fighting a single foe retreats, possibly regrouping with other kobolds fighting a different foe. However, a seriously wounded kobold (1 or 2 hp remaining) turns and runs. It’s not smart enough to Disengage to avoid an opportunity attack; it Dashes instead. If at any point the attacking kobolds no longer outnumber the front-line PCs by at least three to one, they’ll withdraw. They can’t do much damage on their own—on average, just 4 hp per hit—so they have to make every attack count. But kobolds using Pack Tactics against a target wearing chain mail can still deal damage two times out of three.

That’s basically it. Kobolds don’t get bonus actions or reactions (other than opportunity attacks) that might increase the complexity of their behavior. They have Pack Tactics, so they attack in packs. When attacking as a pack no longer works, they cut their losses. They also know to stay out of bright sunlight. If their enemies retreat into a well-lit area, kobolds simply won’t pursue. Kobolds that retreat don’t bother switching to ranged attacks, because their slings don’t have enough range to keep target PCs from closing with them again.

**Winged kobolds** are only slightly better. Because they can fly, they can sustain the ranged-ambush phase longer… unless they run out of rocks to throw. Their flying movement is enough to allow them to swoop down, grab a rock, swoop back up, and throw the rock, but if the PCs block their access to the rocks, so much for that. They also have two more hit points than regular kobolds, but that makes no difference with respect to when they’ll flee. If kobolds are lucky enough to defeat a whole party of adventurers, they’ll haul them off as prisoners and taunt them for entertainment.

# Kobold Variants

> [!Info]- Kobold Variants
> The following Kobolds are loaded in TTRPG Statblock.
> ```dataviewjs
> const monstersAsDvArray = dv.array(Array.from(window.bestiary.values())).filter(m => m.name).where(m => m.name.toLowerCase().contains('kobold')) 
> dv.table(["Name", "HP", "AC", "CR", "Source"], monstersAsDvArray.map((monster) => [monster.name, monster.hp, monster.ac, monster.cr, monster.source]))
> ```

> [!danger]- Winged Kobold
> ```statblock
> monster: Winged Kobold
> ```

> [!danger]- Kobold Dragonshield
> ```statblock
> monster: Kobold Dragonshield
> ```

> [!danger]- Kobold Inventor
> ```statblock
> monster: Kobold Inventor
> ```

> [!danger]- Kobold Scale Sorcerer
> ```statblock
> monster: Kobold Scale Sorcerer
> ```

> [!danger]- Wizard Kobold
> ```statblock
> monster: Wizard Kobold
> ```

> [!danger]-  Wizard Kobold
> ```statblock
> monster: Wizard Kobold
> ```

> [!danger]-  King Kobold
> ```statblock
> monster: King Kobold
> ```

> [!danger]-  Winged Kobold
> ```statblock
> monster: Winged Kobold
> ```

> [!danger]-  Elite Kobold
> ```statblock
> monster: Elite Kobold
> ```

> [!danger]-  Kobold Spellclerk
> ```statblock
> monster: Kobold Spellclerk
> ```

> [!danger]-  Kobold War
> ```statblock
> monster: Kobold War Machine
> ```

> [!danger]-  Kobold Trapsmith
> ```statblock
> monster: Kobold Trapsmith
> ```

> [!danger]-  Kobold Chieftain
> ```statblock
> monster: Kobold Chieftain
> ```

> [!danger]-  Kobold Alchemist
> ```statblock
> monster: Kobold Alchemist
> ```

> [!danger]-  Dragon Kobold
> ```statblock
> monster: Dragon Kobold Acolyte
> ```

> [!danger]-  Dragon Kobold
> ```statblock
> monster: Dragon Kobold Mutant
> ```

> [!danger]-  Dragon Kobold
> ```statblock
> monster: Dragon Kobold Prophet
> ```

> [!danger]-  Dragon Kobold
> ```statblock
> monster: Dragon Kobold Warrior
> ```

> [!danger]-  Dragon Kobold
> ```statblock
> monster: Dragon Kobold Wizard
> ```

> [!danger]-  Kobold Beastmaster
> ```statblock
> monster: Kobold Beastmaster
> ```

> [!danger]-  Kobold Javelin
> ```statblock
> monster: Kobold Javelin Thrower
> ```

> [!danger]-  Kobold King
> ```statblock
> monster: Kobold King
> ```

> [!danger]-  Kobold Miner
> ```statblock
> monster: Kobold Miner
> ```

> [!danger]-  Kobold Spearman
> ```statblock
> monster: Kobold Spearman
> ```
