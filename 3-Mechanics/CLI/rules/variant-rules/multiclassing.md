---
obsidianUIMode: preview
cssclasses: json5e-note
tags:
- compendium/src/5e/phb
aliases: ["Multiclassing"]
---
# Multiclassing
*Source: Player's Handbook p. 163* 

Multiclassing allows you to gain levels in multiple classes. Doing so lets you mix the abilities of those classes to realize a character concept that might not be reflected in one of the standard class options.

With this rule, you have the option of gaining a level in a new class whenever you advance in level, instead of gaining a level in your current class. Your levels in all your classes are added together to determine your character level. For example, if you have three levels in wizard and two in fighter, you're a 5th-level character.

As you advance in levels, you might primarily remain a member of your original class with just a few levels in another class, or you might change course entirely. never looking back at the class you left behind. You might even start progressing in a third or fourth class. Compared to a single-class character of the same level, you'll sacrifice some focus in exchange for versatility.

## Prerequisites

To qualify for a new class, you must meet the ability score prerequisites for both your current class and your new one, as shown in the Multiclassing Prerequisites table. For example, a barbarian who decides to multiclass into the druid class must have both Strength and Wisdom scores of 13 or higher. Without the full training that a beginning character receives, you must be a quick study in your new class, having a natural aptitude that is reflected by higher-than-average ability scores.

![Multiclassing Prerequisites](/3-Mechanics/CLI/tables/multiclassing-prerequisites.md)

## Experience Points

The experience point cost to gain a level is always based on your total character level, as shown in the Character Advancement table in chapter I, not your level in a particular class. So, if you are a cleric 6/fighter 1, you must gain enough XP to reach 8th level before you can take your second level as a fighter or your seventh level as a cleric.

## Hit Points and Hit Dice

You gain the hit points from your new class as described for levels after 1st. You gain the 1st-level hit points for a class only when you are a 1st-level character.

You add together the Hit Dice granted by all your classes to form your pool of Hit Dice. if the Hit Dice are the same die type, you can simply pool them together. For example, both the fighter and the paladin have a `dice: d10|avg|noform` (`d10`), so if you are a paladin 5/fighter 5, you have ten `dice: d10|avg|noform` (`d10`) Hit Dice. If your classes give you Hit Dice of different types, keep track of them separately. If you are a paladin 5/cleric 5, for example, you have five `dice: d10|avg|noform` (`d10`) Hit Dice and five `dice: d8|avg|noform` (`d8`) Hit Dice.

## Proficiency Bonus

Your proficiency bonus is always based on your total character level, as shown in the Character Advancement table in chapter 1, not your level in a particular class. For example, if you are a fighter 3/rogue 2, you have the proficiency bonus of a 5th-level character, which is +3.

## Proficiencies

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies, as shown in the Multiclassing Proficiencies table.

![Multiclassing Proficiencies](/3-Mechanics/CLI/tables/multiclassing-proficiencies.md)

## Class Features

When you gain a new level in a class, you get its features for that level. A few features, however, have additional rules when you're multiclassing: Channel Divinity, Extra Attack, Unarmored Defense, and Spellcasting.

### Channel Divinity

If you already have the Channel Divinity feature and gain a level in a class that also grants the feature, you gain the Channel Divinity effects granted by that class, but getting the feature again doesn't give you an additional use of it. You gain additional uses only when you reach a class level that explicitly grants them to you. For example, if you are a cleric 6/paladin 4, you can use Channel Divinity twice between rests because you are high enough level in the cleric class to have more uses. Whenever you use the feature, you can choose any of the Channel Divinity effects available to you from your two classes.

### Extra Attack

If you gain the Extra Attack class feature from more than one class, the features don't add together. You can't make more than two attacks with this feature unless it says you do (as the fighter's version of Extra Attack does). Similarly, the warlock's eldritch invocation Thirsting Blade doesn't give you additional attacks if you also have Extra Attack.

### Unarmored Defense

If you already have the Unarmored Defense feature, you can't gain it again from another class.

### Spellcasting

Your capacity for spellcasting depends partly on your combined levels in all your spellcasting classes and partly on your individual levels in those classes. Once you have the Spellcasting feature from more than one class, use the rules below. If you multiclass but have the Spellcasting feature from only one class, you follow the rules as described in that class.

#### Spells Known and Prepared

You determine what spells you know and can prepare for each class individually, as if you were a single-classed member of that class. If you are a ranger 4/wizard 3, for example, you know three 1st-level ranger spells based on your levels in the ranger class. As 3rd-level wizard, you know three wizard cantrips, and your spellbook contains ten wizard spells, two of which (the two you gained when you reached 3rd level as a wizard) can be 2nd-level spells. If your intelligence is 16, you can prepare six wizard spells from your spellbook.

Each spell you know and prepare is associated with one of your classes, and you use the spellcasting ability of that class when you cast the spell. Similarly, a spellcasting focus, such as a holy symbol, can be used only for the spells from the class associated with that focus.

#### Spell Slots

You determine your available spell slots by adding together all your levels in the bard, cleric, druid, sorcerer, and wizard classes, half your levels (rounded down) in the paladin and ranger classes, and a third of your fighter or rogue levels (rounded down) if you have the Eldritch Knight or the Arcane Trickster feature. Use this total to determine your spell slots by consulting the Multiclass Spellcaster table.

If you have more than one spellcasting class, this table might give you spell slots of a level that is higher than the spells you know or can prepare. You can use those slots, but only to cast your lower-level spells. If a lower-level spell that you cast, like [burning hands](/3-Mechanics/CLI/spells/burning-hands.md), has an enhanced effect when cast using a higher-level slot, you can use the enhanced effect, even though you don't have any spells of that higher level.

For example, if you are the aforementioned ranger 4/wizard 3. you count as a 5th-level character when determining your spell slots: you have four 1st-level slots, three 2nd-level slots, and two 3rd-level slots. However, you don't know any 3rd-level spells, nor do you know any 2nd-level ranger spells. You can use the spell slots of those levels to cast the spells you do know—and potentially enhance their effects.

#### Pact Magic

If you have both the Spellcasting class feature and the Pact Magic class feature from the warlock class, you can use the spell slots you gain from the Pact Magic feature to cast spells you know or have prepared from classes with the Spellcasting class feature, and you can use the spell slots you gain from the Spellcasting class feature to cast warlock spells you know.

**Multiclass Spellcaster: Spell Slots per Spell Level**

| Lvl. | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th | 9th |
|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 1st | 2 | — | — | — | — | — | — | — | — |
| 2nd | 3 | — | — | — | — | — | — | — | — |
| 3rd | 4 | 2 | — | — | — | — | — | — | — |
| 4th | 4 | 3 | — | — | — | — | — | — | — |
| 5th | 4 | 3 | 2 | — | — | — | — | — | — |
| 6th | 4 | 3 | 3 | — | — | — | — | — | — |
| 7th | 4 | 3 | 3 | 1 | — | — | — | — | — |
| 8th | 4 | 3 | 3 | 2 | — | — | — | — | — |
| 9th | 4 | 3 | 3 | 3 | 1 | — | — | — | — |
| 10th | 4 | 3 | 3 | 3 | 2 | — | — | — | — |
| 11th | 4 | 3 | 3 | 3 | 2 | 1 | — | — | — |
| 12th | 4 | 3 | 3 | 3 | 2 | 1 | — | — | — |
| 13th | 4 | 3 | 3 | 3 | 2 | 1 | 1 | — | — |
| 14th | 4 | 3 | 3 | 3 | 2 | 1 | 1 | — | — |
| 15th | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | — |
| 16th | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | — |
| 17th | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | 1 |
| 18th | 4 | 3 | 3 | 3 | 3 | 1 | 1 | 1 | 1 |
| 19th | 4 | 3 | 3 | 3 | 3 | 2 | 1 | 1 | 1 |
| 20th | 4 | 3 | 3 | 3 | 3 | 2 | 2 | 1 | 1 |
^multiclass-spellcaster-spell-slots-per-spell-level