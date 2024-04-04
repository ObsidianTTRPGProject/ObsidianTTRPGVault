---
obsidianUIMode: preview
cssclasses: json5e-class
tags:
- compendium/src/5e/phb
- ttrpg-cli/class/wizard
aliases: ["Wizard"]
---
# Wizard
*Source: Player's Handbook p. 112. Available in the SRD and the Basic Rules.*  

> [!tldr]- Feature progression
> 
> | Level | PB | Features |
> |-------|----|----------|
> | 1st | +2 | [Arcane Recovery](#Arcane%20Recovery%20(Level%201)), [Spellcasting](#Spellcasting%20(Level%201)) |
> | 2nd | +2 | [Arcane Tradition](#Arcane%20Tradition%20(Level%202)) |
> | 3rd | +2 | ⏤ |
> | 4th | +2 | [Ability Score Improvement](#Ability%20Score%20Improvement%20(Level%204)) |
> | 5th | +3 | ⏤ |
> | 6th | +3 | [Arcane Tradition feature](#Arcane%20Tradition%20feature%20(Level%206)) |
> | 7th | +3 | ⏤ |
> | 8th | +3 | [Ability Score Improvement](#Ability%20Score%20Improvement%20(Level%208)) |
> | 9th | +4 | ⏤ |
> | 10th | +4 | [Arcane Tradition feature](#Arcane%20Tradition%20feature%20(Level%2010)) |
> | 11th | +4 | ⏤ |
> | 12th | +4 | [Ability Score Improvement](#Ability%20Score%20Improvement%20(Level%2012)) |
> | 13th | +5 | ⏤ |
> | 14th | +5 | [Arcane Tradition feature](#Arcane%20Tradition%20feature%20(Level%2014)) |
> | 15th | +5 | ⏤ |
> | 16th | +5 | [Ability Score Improvement](#Ability%20Score%20Improvement%20(Level%2016)) |
> | 17th | +6 | ⏤ |
> | 18th | +6 | [Spell Mastery](#Spell%20Mastery%20(Level%2018)) |
> | 19th | +6 | [Ability Score Improvement](#Ability%20Score%20Improvement%20(Level%2019)) |
> | 20th | +6 | [Signature Spells](#Signature%20Spells%20(Level%2020)) |
> 
> - PB: Proficiency Bonus
^feature-progression

> [!tldr]- Class progression
> 
> | Level | Cantrips Known | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th | 9th |
> |-------|----------------|-----|-----|-----|-----|-----|-----|-----|-----|-----|
> | 1st | 3 | 2 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 2nd | 3 | 3 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 3rd | 3 | 4 | 2 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 4th | 4 | 4 | 3 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 5th | 4 | 4 | 3 | 2 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 6th | 4 | 4 | 3 | 3 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 7th | 4 | 4 | 3 | 3 | 1 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 8th | 4 | 4 | 3 | 3 | 2 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 9th | 4 | 4 | 3 | 3 | 3 | 1 | ⏤ | ⏤ | ⏤ | ⏤ |
> | 10th | 5 | 4 | 3 | 3 | 3 | 2 | ⏤ | ⏤ | ⏤ | ⏤ |
> | 11th | 5 | 4 | 3 | 3 | 3 | 2 | 1 | ⏤ | ⏤ | ⏤ |
> | 12th | 5 | 4 | 3 | 3 | 3 | 2 | 1 | ⏤ | ⏤ | ⏤ |
> | 13th | 5 | 4 | 3 | 3 | 3 | 2 | 1 | 1 | ⏤ | ⏤ |
> | 14th | 5 | 4 | 3 | 3 | 3 | 2 | 1 | 1 | ⏤ | ⏤ |
> | 15th | 5 | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | ⏤ |
> | 16th | 5 | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | ⏤ |
> | 17th | 5 | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | 1 |
> | 18th | 5 | 4 | 3 | 3 | 3 | 3 | 1 | 1 | 1 | 1 |
> | 19th | 5 | 4 | 3 | 3 | 3 | 3 | 2 | 1 | 1 | 1 |
> | 20th | 5 | 4 | 3 | 3 | 3 | 3 | 2 | 2 | 1 | 1 |
> 
> - 1st-9th: Spell slots per level
^class-progression

## Hit Points

- **Hit Dice**: 1d6 per Wizard level
- **Hit Points at First Level:** 6 + CON
- **Hit Points at Higher Levels:** add 3 OR 1d6 + CON  (minimum of 1)

## Starting Wizard

You are proficient with the following items, in addition to any proficiencies provided by your race or background.

- **Saving Throws**: Intelligence, Wisdom
- **Armor**: none
- **Weapons**: [daggers](/3-Mechanics/CLI/items/dagger.md), [darts](/3-Mechanics/CLI/items/dart.md), [slings](/3-Mechanics/CLI/items/sling.md), [quarterstaffs](/3-Mechanics/CLI/items/quarterstaff.md), [light crossbows](/3-Mechanics/CLI/items/light-crossbow.md)
- **Tools**: none
- **Skills**: Choose 2 from *Arcana*, *History*, *Insight*, *Investigation*, *Medicine*, *Religion*

You begin play with the following equipment, in addition to any equipment provided by your background.

- (a) a [quarterstaff](/3-Mechanics/CLI/items/quarterstaff.md) or (b) a [dagger](/3-Mechanics/CLI/items/dagger.md)  
- (a) a [component pouch](/3-Mechanics/CLI/items/component-pouch.md) or (b) an [arcane focus](/3-Mechanics/CLI/items/arcane-focus.md)  
- (a) a [scholar's pack](/3-Mechanics/CLI/items/scholars-pack.md) or (b) an [explorer's pack](/3-Mechanics/CLI/items/explorers-pack.md)  
- A [spellbook](/3-Mechanics/CLI/items/spellbook.md)  

Alternatively, you may start with 4d4 × 10 gp and choose your own equipment.

## Multiclassing Wizard

To multiclass as a Wizard, you must meet the following prerequisites:

- Intelligence 13

## Wizard

Clad in the silver robes that denote her station, an elf closes her eyes to shut out the distractions of the battlefield and begins her quiet chant. Fingers weaving in front of her, she completes her spell and launches a tiny bead of fire toward the enemy ranks, where it erupts into a conflagration that engulfs the soldiers.

Checking and rechecking his work, a human scribes an intricate magic circle in chalk on the bare stone floor, then sprinkles powdered iron along every line and graceful curve. When the circle is complete, he drones a long incantation. A hole opens in space inside the circle, bringing a whiff of brimstone from the otherworldly plane beyond.

Crouching on the floor in a dungeon intersection, a gnome tosses a handful of small bones inscribed with mystic symbols, muttering a few words of power over them. Closing his eyes to see the visions more clearly, he nods slowly, then opens his eyes and points down the passage to his left.

Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.

### Scholars of the Arcane

Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study.

Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.

### The Lure of Knowledge

Wizards' lives are seldom mundane. The closest a wizard is likely to come to an ordinary life is working as a sage or lecturer in a library or university, teaching others the secrets of the multiverse. Other wizards sell their services as diviners, serve in military forces, or pursue lives of crime or domination.

But the lure of knowledge and power calls even the most unadventurous wizards out of the safety of their libraries and laboratories and into crumbling ruins and lost cities. Most wizards believe that their counterparts in ancient civilizations knew secrets of magic that have been lost to the ages, and discovering those secrets could unlock the path to a power greater than any magic available in the present age.

### Creating a Wizard

Creating a wizard character demands a backstory dominated by at least one extraordinary event. How did your character first come into contact with magic? How did you discover you had an aptitude for it? Do you have a natural talent, or did you simply study hard and practice incessantly? Did you encounter a magical creature or an ancient tome that taught you the basics of magic?

What drew you forth from your life of study? Did your first taste of magical knowledge leave you hungry for more? Have you received word of a secret repository of knowledge not yet plundered by any other wizard? Perhaps you're simply eager to put your newfound magical skills to the test in the face of danger.

#### Quick Build

You can make a wizard quickly by following these suggestions. First, Intelligence should be your highest ability score, followed by Constitution or Dexterity. If you plan to join the School of Enchantment, make Charisma your next-best score. Second, choose the [sage](/3-Mechanics/CLI/backgrounds/sage.md) background. Third, choose the [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [light](/3-Mechanics/CLI/spells/light.md), and [ray of frost](/3-Mechanics/CLI/spells/ray-of-frost.md) cantrips, along with the following 1st-level spells for your spellbook: [burning hands](/3-Mechanics/CLI/spells/burning-hands.md), [charm person](/3-Mechanics/CLI/spells/charm-person.md), [feather fall](/3-Mechanics/CLI/spells/feather-fall.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor.md), [magic missile](/3-Mechanics/CLI/spells/magic-missile.md), and [sleep](/3-Mechanics/CLI/spells/sleep.md).

> [!quote]- A quote from Gimble the illusionist  
> 
> Wizardry requires understanding. The knowledge of how and why magic works, and our efforts to broaden that understanding, have brought about the key advances in civilization over the centuries.

Only a select few people in the world are wielders of magic. Of all those, wizards stand at the pinnacle of the craft. Even the least of them can manipulate forces that flout the laws of nature, and the most accomplished among them can cast spells with world-shaking effects.

The price that wizards pay for their mastery is that most valuable of commodities: time. It takes years of study, instruction, and experimentation to learn how to harness magical energy and carry spells around in one's own mind. For adventuring wizards and other spellcasters who aspire to the highest echelons of the profession, the studying never ends, nor does the quest for knowledge and power.

If you're playing a wizard, take advantage of the opportunity to make your character more than just a stereotypical spell-slinger. Use the advice that follows to add some intriguing details to how your wizard interacts with the world.

## Spellbook
_Source: Xanathar's Guide to Everything_

Your wizard character's most prized possession—your spellbook—might be an innocuous-looking volume whose covers show no hint of what's inside. Or you might display some flair, as many wizards do, by carrying a spellbook of an unusual sort. If you don't own such an item already, one of your goals might be to find a spellbook that sets you apart by its appearance or its means of manufacture.

**Spellbooks**

`dice: [](wizard.md#^spellbooks)`

| dice: d6 | Spellbook |
|----------|-----------|
| 1 | A tome with pages that are thin sheets of metal, spells etched into them with acid |
| 2 | Long straps of leather on which spells are written, wrapped around a staff for ease of transport |
| 3 | A battered tome filled with pictographs that only you can understand |
| 4 | Small stones inscribed with spells and kept in a cloth bag |
| 5 | A scorched book, ravaged by dragon fire, with the script of your spells barely visible on its pages |
| 6 | A tome full of black pages whose writing is visible only in dim light or darkness |
^spellbooks

## Ambition
_Source: Xanathar's Guide to Everything_

Few aspiring wizards undertake the study of magic without some personal goal in mind. Many wizards use their spells as a tool to produce a tangible benefit, in material goods or in status, for themselves or their companions. For others, the theoretical aspect of magic might have a strong appeal, pushing those wizards to seek out knowledge that supports new theories of the arcane or confirms old ones.

Beyond the obvious, why does your wizard character study magic, and what do you want to achieve? If you haven't given these questions much thought, you can do so now, and the answers you come up with will likely affect how your future unfolds.

**Ambitions**

`dice: [](wizard.md#^ambitions)`

| dice: d6 | Ambition |
|----------|----------|
| 1 | You will prove that the gods aren't as powerful as folk believe. |
| 2 | Immortality is the end goal of your studies. |
| 3 | If you can fully understand magic, you can unlock its use for all and usher in an era of equality. |
| 4 | Magic is a dangerous tool. You use it to protect what you treasure. |
| 5 | Arcane power must be taken away from those who would abuse it. |
| 6 | You will become the greatest wizard the world has seen in generations. |
^ambitions

## Eccentricity
_Source: Xanathar's Guide to Everything_

Endless hours of solitary study and research can have a negative effect on anyone's social skills. Wizards, who are a breed apart to begin with, are no exception. An odd mannerism or two is not necessarily a drawback, though; an eccentricity of this sort is usually harmless and could provide a source of amusement or serve as a calling card of sorts.

If your character has an eccentricity, is it a physical tic or a mental one? Are you well known in some circles because of it? Do you fight to overcome it, or do you embrace this minor claim to fame of yours?

**Eccentricities**

`dice: [](wizard.md#^eccentricities)`

| dice: d6 | Eccentricity |
|----------|--------------|
| 1 | You have the habit of tapping your foot incessantly, which often annoys those around you. |
| 2 | Your memory is quite good, but you have no trouble pretending to be absentminded when it suits your purposes. |
| 3 | You never enter a room without looking to see what's hanging from the ceiling. |
| 4 | Your most prized possession is a dead worm that you keep inside a potion vial. |
| 5 | When you want people to leave you alone, you start talking to yourself. That usually does the trick. |
| 6 | Your fashion sense and grooming, or more accurately lack thereof, sometimes cause others to assume you are a beggar. |
^eccentricities

## Class Features

### Arcane Recovery (Level 1)

You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.

For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.

### Spellcasting (Level 1)

As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power. See "chapter 10" for the general rules of spellcasting and "chapter 11" for the wizard spell list.

#### Cantrips

At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.

#### Spellbook

At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.

#### Preparing and Casting Spells

The Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.

You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.

For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell [magic missile](/3-Mechanics/CLI/spells/magic-missile.md), you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.

You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.

#### Spellcasting Ability

Intelligence is your spellcasting ability for your wizard spells, since you learn your wizard spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.

**Spell save DC**: 8 + your proficiency bonus + your Intelligence modifier

**Spell attack modifier**: your proficiency bonus + your Intelligence modifier

#### Ritual Casting

You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.

#### Spellcasting Focus

You can use an [arcane focus](/3-Mechanics/CLI/items/arcane-focus.md) as a spellcasting focus for your wizard spells.

#### Learning Spells of 1st Level and Higher

Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook (see "Your Spellbook").

> [!note] Your Spellbook
> 
> The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library.
> 
> A spellbook doesn't contain cantrips.
> 
> **.** **Copying a Spell into the Book.** When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it.
> 
> Copying a spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your spellbook using your own notation.
> 
> For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.
> 
> **Copying from a Spell Scroll.** A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When you copy a spell from a spell scroll, you must succeed on an Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.
> 
> **.** **Replacing the Book.** You can copy a spell from your own spellbook into another book—for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell.
> 
> If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.
> 
> **.** **The Book's Appearance.** Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library, or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.
^your-spellbook

### Arcane Tradition (Level 2)

When you reach 2nd level, you choose an arcane tradition from the list of available traditions, shaping your practice of magic. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.

### Ability Score Improvement (Level 4)

When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Arcane Tradition feature (Level 6)

At 6th level, you gain a feature granted by your Arcane Tradition.

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Arcane Tradition feature (Level 10)

At 10th level, you gain a feature granted by your Arcane Tradition.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Arcane Tradition feature (Level 14)

At 14th level, you gain a feature granted by your Arcane Tradition.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Spell Mastery (Level 18)

At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.

By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Signature Spells (Level 20)

When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.

If you want to cast either spell at a higher level, you must expend a spell slot as normal.