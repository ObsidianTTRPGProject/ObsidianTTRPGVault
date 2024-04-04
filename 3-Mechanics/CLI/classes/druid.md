---
obsidianUIMode: preview
cssclasses: json5e-class
tags:
- compendium/src/5e/phb
- ttrpg-cli/class/druid
aliases: ["Druid"]
---
# Druid
*Source: Player's Handbook p. 64. Available in the SRD.*  

> [!tldr]- Feature progression
> 
> | Level | PB | Features |
> |-------|----|----------|
> | 1st | +2 | [Druidic](#Druidic%20(Level%201)), [Spellcasting](#Spellcasting%20(Level%201)) |
> | 2nd | +2 | [Wild Shape](#Wild%20Shape%20(Level%202)), [Druid Circle](#Druid%20Circle%20(Level%202)) |
> | 3rd | +2 | ⏤ |
> | 4th | +2 | [Wild Shape Improvement](#Wild%20Shape%20Improvement%20(Level%204)), [Ability Score Improvement](#Ability%20Score%20Improvement%20(Level%204)) |
> | 5th | +3 | ⏤ |
> | 6th | +3 | [Druid Circle feature](#Druid%20Circle%20feature%20(Level%206)) |
> | 7th | +3 | ⏤ |
> | 8th | +3 | [Wild Shape Improvement](#Wild%20Shape%20Improvement%20(Level%208)), [Ability Score Improvement](#Ability%20Score%20Improvement%20(Level%208)) |
> | 9th | +4 | ⏤ |
> | 10th | +4 | [Druid Circle feature](#Druid%20Circle%20feature%20(Level%2010)) |
> | 11th | +4 | ⏤ |
> | 12th | +4 | [Ability Score Improvement](#Ability%20Score%20Improvement%20(Level%2012)) |
> | 13th | +5 | ⏤ |
> | 14th | +5 | [Druid Circle feature](#Druid%20Circle%20feature%20(Level%2014)) |
> | 15th | +5 | ⏤ |
> | 16th | +5 | [Ability Score Improvement](#Ability%20Score%20Improvement%20(Level%2016)) |
> | 17th | +6 | ⏤ |
> | 18th | +6 | [Timeless Body](#Timeless%20Body%20(Level%2018)), [Beast Spells](#Beast%20Spells%20(Level%2018)) |
> | 19th | +6 | [Ability Score Improvement](#Ability%20Score%20Improvement%20(Level%2019)) |
> | 20th | +6 | [Archdruid](#Archdruid%20(Level%2020)) |
> 
> - PB: Proficiency Bonus
^feature-progression

> [!tldr]- Class progression
> 
> | Level | Cantrips Known | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th | 9th |
> |-------|----------------|-----|-----|-----|-----|-----|-----|-----|-----|-----|
> | 1st | 2 | 2 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 2nd | 2 | 3 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 3rd | 2 | 4 | 2 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 4th | 3 | 4 | 3 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 5th | 3 | 4 | 3 | 2 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 6th | 3 | 4 | 3 | 3 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 7th | 3 | 4 | 3 | 3 | 1 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 8th | 3 | 4 | 3 | 3 | 2 | ⏤ | ⏤ | ⏤ | ⏤ | ⏤ |
> | 9th | 3 | 4 | 3 | 3 | 3 | 1 | ⏤ | ⏤ | ⏤ | ⏤ |
> | 10th | 4 | 4 | 3 | 3 | 3 | 2 | ⏤ | ⏤ | ⏤ | ⏤ |
> | 11th | 4 | 4 | 3 | 3 | 3 | 2 | 1 | ⏤ | ⏤ | ⏤ |
> | 12th | 4 | 4 | 3 | 3 | 3 | 2 | 1 | ⏤ | ⏤ | ⏤ |
> | 13th | 4 | 4 | 3 | 3 | 3 | 2 | 1 | 1 | ⏤ | ⏤ |
> | 14th | 4 | 4 | 3 | 3 | 3 | 2 | 1 | 1 | ⏤ | ⏤ |
> | 15th | 4 | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | ⏤ |
> | 16th | 4 | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | ⏤ |
> | 17th | 4 | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | 1 |
> | 18th | 4 | 4 | 3 | 3 | 3 | 3 | 1 | 1 | 1 | 1 |
> | 19th | 4 | 4 | 3 | 3 | 3 | 3 | 2 | 1 | 1 | 1 |
> | 20th | 4 | 4 | 3 | 3 | 3 | 3 | 2 | 2 | 1 | 1 |
> 
> - 1st-9th: Spell slots per level
^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Druid level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 4 OR 1d8 + CON  (minimum of 1)

## Starting Druid

You are proficient with the following items, in addition to any proficiencies provided by your race or background.

- **Saving Throws**: Intelligence, Wisdom
- **Armor**: light, medium
- **Weapons**: [clubs](/3-Mechanics/CLI/items/club.md), [daggers](/3-Mechanics/CLI/items/dagger.md), [darts](/3-Mechanics/CLI/items/dart.md), [javelins](/3-Mechanics/CLI/items/javelin.md), [maces](/3-Mechanics/CLI/items/mace.md), [quarterstaffs](/3-Mechanics/CLI/items/quarterstaff.md), [scimitars](/3-Mechanics/CLI/items/scimitar.md), [sickles](/3-Mechanics/CLI/items/sickle.md), [slings](/3-Mechanics/CLI/items/sling.md), [spears](/3-Mechanics/CLI/items/spear.md)
- **Tools**: [Herbalism kit](/3-Mechanics/CLI/items/herbalism-kit.md)
- **Skills**: Choose 2 from *Animal Handling*, *Arcana*, *Insight*, *Medicine*, *Nature*, *Perception*, *Religion*, *Survival*

You begin play with the following equipment, in addition to any equipment provided by your background.

- (a) a wooden [shield](/3-Mechanics/CLI/items/shield.md) or (b) any simple weapon  
- (a) a [scimitar](/3-Mechanics/CLI/items/scimitar.md) or (b) any simple melee weapon  
- [Leather armor](/3-Mechanics/CLI/items/leather-armor.md), an [explorer's pack](/3-Mechanics/CLI/items/explorers-pack.md), and a [druidic focus](/3-Mechanics/CLI/items/druidic-focus.md)  

Alternatively, you may start with 2d4 × 10 gp and choose your own equipment.

## Multiclassing Druid

To multiclass as a Druid, you must meet the following prerequisites:

- Wisdom 13

You gain the following proficiencies:

- **Armor**: light, medium
- **Weapons**: none
- **Tools**: none

## Druid

Holding high a gnarled staff wreathed with holly, an elf summons the fury of the storm and calls down explosive bolts of lightning to smite the torch-carrying orcs who threaten her forest.

Crouching out of sight on a high tree branch in the form of a leopard, a human peers out of the jungle at the strange construction of a temple of Evil Elemental Air, keeping a close eye on the cultists' activities.

Swinging a blade formed of pure fire, a half-elf charges into a mass of skeletal soldiers, sundering the unnatural magic that gives the foul creatures the mocking semblance of life.

Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature. Instead, they see themselves as extensions of nature's indomitable will.

### Power of Nature

Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.

Druid spells are oriented toward nature and animals—the power of tooth and claw, of sun and moon, of fire and storm. Druids also gain the ability to take on animal forms, and some druids make a particular study of this practice, even to the point where they prefer animal form to their natural form.

### Preserve the Balance

For druids, nature exists in a precarious balance. The four elements that make up a world—air, earth, fire, and water—must remain in equilibrium. If one element were to gain power over the others, the world could be destroyed, drawn into one of the elemental planes and broken apart into its component elements. Thus, druids oppose cults of Elemental Evil and others who promote one element to the exclusion of others.

Druids are also concerned with the delicate ecological balance that sustains plant and animal life, and the need for civilized folk to live in harmony with nature, not in opposition to it. Druids accept that which is cruel in nature, and they hate that which is unnatural, including aberrations (such as beholders and mind flayers) and undead (such as zombies and vampires). Druids sometimes lead raids against such creatures, especially when the monsters encroach on the druids' territory.

Druids are often found guarding sacred sites or watching over regions of unspoiled nature. But when a significant danger arises, threatening nature's balance or the lands they protect, druids take on a more active role in combating the threat, as adventurers.

### Creating a Druid

When making a druid, consider why your character has such a close bond with nature. Perhaps your character lives in a society where the Old Faith still thrives, or was raised by a druid after being abandoned in the depths of a forest. Perhaps your character had a dramatic encounter with the spirits of nature, coming face to face with a giant eagle or dire wolf and surviving the experience. Maybe your character was born during an epic storm or a volcanic eruption, which was interpreted as a sign that becoming a druid was part of your character's destiny.

Have you always been an adventurer as part of your druidic calling, or did you first spend time as a caretaker of a sacred grove or spring? Perhaps your homeland was befouled by evil, and you took up an adventuring life in hopes of finding a new home or purpose.

#### Quick Build

You can make a druid quickly by following these suggestions. First, Wisdom should be your highest ability score, followed by Constitution. Second, choose the [hermit](/3-Mechanics/CLI/backgrounds/hermit.md) background.

> [!note] Sacred Plants and Wood
> 
> A druid holds certain plants to be sacred, particularly alder, ash, birch, elder, hazel, holly, juniper, mistletoe, oak, rowan, willow, and yew. Druids often use such plants as part of a spellcasting focus, incorporating lengths of oak or yew or sprigs of mistletoe.
> 
> Similarly, a druid uses such woods to make other objects, such as weapons and shields. Yew is associated with death and rebirth, so weapon handles for scimitars or sickles might be fashioned from it. Ash is associated with life and oak with strength. These woods make excellent hafts or whole weapons, such as clubs or quarterstaffs, as well as shields. Alder is associated with air, and it might be used for thrown weapons, such as darts or javelins.
> 
> Druids from regions that lack the plants described here have chosen other plants to take on similar uses. For instance, a druid of a desert region might value the yucca tree and cactus plants.
^sacred-plants-and-wood

> [!note] Druids and the Gods
> 
> Some druids venerate the forces of nature themselves, but most druids are devoted to one of the many nature deities worshiped in the multiverse (the lists of gods in appendix B include many such deities). The worship of these deities is often considered a more ancient tradition than the faiths of clerics and urbanized peoples. In fact, in the world of Greyhawk, the druidic faith is called the Old Faith, and it claims many adherents among farmers, foresters, fishers, and others who live closely with nature. This tradition includes the worship of Nature as a primal force beyond personification, but also encompasses the worship of Beory, the Oerth Mother, as well as devotees of Obad-Hai, Ehlonna, and Ulaa.
> 
> In the worlds of Greyhawk and the Forgotten Realms, druidic circles are not usually connected to the faith of a single nature deity. Any given circle in the Forgotten Realms, for example, might include druids who revere Silvanus, Mielikki, Eldath, Chauntea, or even the harsh Gods of Fury: Talos, Malar, Auril, and Umberlee. These nature gods are often called the First Circle, the first among the druids, and most druids count them all (even the violent ones) as worthy of veneration.
> 
> The druids of Eberron hold animistic beliefs completely unconnected to the Sovereign Host, the Dark Six, or any of the other religions of the world. They believe that every living thing and every natural phenomenon—sun, moon, wind, fire, and the world itself—has a spirit. Their spells, then, are a means to communicate with and command these spirits. Different druidic sects, though, hold different philosophies about the proper relationship of these spirits to each other and to the forces of civilization. The Ashbound, for example, believe that arcane magic is an abomination against nature, the Children of Winter venerate the forces of death, and the Gatekeepers preserve ancient traditions meant to protect the world from the incursion of aberrations.
^druids-and-the-gods

> [!quote]- A quote from Safhran, archdruid  
> 
> Even in death, each creature plays its part in maintaining the Great Balance. But now an imbalance grows, a force that seeks to hold sway over nature. This is the destructive behavior of the mortal races. The farther away from nature their actions take them, the more corrupting their influence becomes. As druids, we seek mainly to protect and educate, to preserve the Great Balance, but there are times when we must rise up against danger and eradicate it.

Druids are the caretakers of the natural world, and it is said that in time a druid becomes the voice of nature, speaking the truth that is too subtle for the general populace to hear. Many who become druids find that they naturally gravitate toward nature; its forces, cycles, and movements fill their minds and spirits with wonder and insight. Many sages and wise folk have studied nature, writing volumes about its mystery and power, but druids are a special kind of being: at some point, they begin to embody these natural forces, producing magical phenomena that link them to the spirit of nature and the flow of life. Because of their strange and mysterious power, druids are often revered, shunned, or considered dangerous by the people around them.

Your druid character might be a true worshiper of nature, one who has always scorned civilization and found solace in the wild. Or your character could be a child of the city who now strives to bring the civilized world into harmony with the wilderness. You can use the sections that follow to flesh out your druid, regardless of how your character came to the profession.

## Treasured Item
_Source: Xanathar's Guide to Everything_

Some druids carry one or more items that are sacred to them or have deep personal significance. Such items are not necessarily magical, but every one is an object whose meaning connects the druid's mind and heart to a profound concept or spiritual outlook.

When you decide what your character's treasured item is, think about giving it an origin story: how did you come by the item, and why is it important to you?

**Treasured Item**

`dice: [](druid.md#^treasured-item)`

| dice: d6 | Treasured Item |
|----------|----------------|
| 1 | A twig from the meeting tree that stands in the center of your village |
| 2 | A vial of water from the source of a sacred river |
| 3 | Special herbs tied together in a bundle |
| 4 | A small bronze bowl engraved with animal images |
| 5 | A rattle made from a dried gourd and holly berries |
| 6 | A miniature golden sickle handed down to you by your mentor |
^treasured-item

## Guiding Aspects
_Source: Xanathar's Guide to Everything_

Many druids feel a strong link to a specific aspect of the natural world, such as a body of water, an animal, a type of tree, or some other sort of plant. You identify with your chosen aspect; by its behavior or its very nature, it sets an example that you seek to emulate.

**Guiding Aspects**

`dice: [](druid.md#^guiding-aspects)`

| dice: d6 | Guiding Aspects |
|----------|-----------------|
| 1 | Yew trees remind you of renewing your mind and spirit, letting the old die and the new spring forth. |
| 2 | Oak trees represent strength and vitality. Meditating under an oak fills your body and mind with resolve and fortitude. |
| 3 | The river's endless flow reminds you of the great span of the world. You seek to act with the long-term interests of nature in mind. |
| 4 | The sea is a constant, churning cauldron of power and chaos. It reminds you that accepting change is necessary to sustain yourself in the world. |
| 5 | The birds in the sky are evidence that even the smallest creatures can survive if they remain above the fray. |
| 6 | As demonstrated by the actions of the wolf, an individual's strength is nothing compared to the power of the pack. |
^guiding-aspects

## Mentors
_Source: Xanathar's Guide to Everything_

It's not unusual for would-be druids to seek out (or be sought out by) instructors or elders who teach them the basics of their magical arts. Most druids who learn from a mentor begin their training at a young age, and the mentor has a vital role in shaping a student's attitudes and beliefs.

If your character received training from someone else, who or what was that individual, and what was the nature of your relationship? Did your mentor imbue you with a particular outlook or otherwise influence your approach to achieving the goals of your chosen path?

**Mentors**

`dice: [](druid.md#^mentors)`

| dice: d6 | Mentors |
|----------|---------|
| 1 | Your mentor was a wise treant who taught you to think in terms of years and decades rather than days or months. |
| 2 | You were tutored by a dryad who watched over a slumbering portal to the Abyss. During your training, you were tasked with watching for hidden threats to the world. |
| 3 | Your tutor always interacted with you in the form of a falcon. You never saw the tutor's humanoid form. |
| 4 | You were one of several youngsters who were mentored by an old druid, until one of your fellow pupils betrayed your group and killed your master. |
| 5 | Your mentor has appeared to you only in visions. You have yet to meet this person, and you are not sure such a person exists in mortal form. |
| 6 | Your mentor was a werebear who taught you to treat all living things with equal regard. |
^mentors

## Learning Beast Shapes
_Source: Xanathar's Guide to Everything_

The Wild Shape feature in the player's handbook lets you transform into a beast that you've seen. That rule gives you a tremendous amount of flexibility, making it easy to amass an array of beast form options for yourself, but you must abide by the limitations in the Beast Shapes table in that book.

When you gain Wild Shape as a 2nd-level druid, you might wonder which beasts you've already seen. The following tables organize beasts from the monster manual according to the beasts' most likely environments. Consider the environment your druid grew up in, then consult the appropriate table for a list of animals that your druid has probably seen by 2nd level.

These tables can also help you and your DM determine which animals you might see on your travels. In addition, the tables include each beast's challenge rating and note whether a beast has a flying or swimming speed. This information will help you determine whether you qualify to assume that beast's form.

The tables include all the individual beasts that are eligible for Wild Shape (up to a challenge rating of 1) or the Circle Forms feature of the Circle of the Moon (up to a challenge rating of 6).

### 
_Source: Xanathar's Guide to Everything_

**Arctic**

| CR | Beast | Fly/Swim |
|----|-------|----------|
| 0 | [Owl](/3-Mechanics/CLI/bestiary/beast/owl.md) | Fly |
| 1/8 | [Blood hawk](/3-Mechanics/CLI/bestiary/beast/blood-hawk.md) | Fly |
| 1/4 | [Giant owl](/3-Mechanics/CLI/bestiary/beast/giant-owl.md) | Fly |
| 1 | [Brown bear](/3-Mechanics/CLI/bestiary/beast/brown-bear.md) | — |
| 2 | [Polar bear](/3-Mechanics/CLI/bestiary/beast/polar-bear.md) | Swim |
| 2 | [Saber-toothed tiger](/3-Mechanics/CLI/bestiary/beast/saber-toothed-tiger.md) | — |
| 6 | [Mammoth](/3-Mechanics/CLI/bestiary/beast/mammoth.md) | — |
^arctic

**Coast**

| CR | Beast | Fly/Swim |
|----|-------|----------|
| 0 | [Crab](/3-Mechanics/CLI/bestiary/beast/crab.md) | Swim |
| 0 | [Eagle](/3-Mechanics/CLI/bestiary/beast/eagle.md) | Fly |
| 1/8 | [Blood hawk](/3-Mechanics/CLI/bestiary/beast/blood-hawk.md) | Fly |
| 1/8 | [Giant crab](/3-Mechanics/CLI/bestiary/beast/giant-crab.md) | Swim |
| 1/8 | [Poisonous snake](/3-Mechanics/CLI/bestiary/beast/poisonous-snake.md) | Swim |
| 1/8 | [Stirge](/3-Mechanics/CLI/bestiary/beast/stirge.md) | Fly |
| 1/4 | [Giant lizard](/3-Mechanics/CLI/bestiary/beast/giant-lizard.md) | — |
| 1/4 | [Giant wolf spider](/3-Mechanics/CLI/bestiary/beast/giant-wolf-spider.md) | — |
| 1/4 | Pteranodon | Fly |
| 1 | [Giant eagle](/3-Mechanics/CLI/bestiary/beast/giant-eagle.md) | Fly |
| 1 | [Giant toad](/3-Mechanics/CLI/bestiary/beast/giant-toad.md) | Swim |
| 2 | [Plesiosaurus](/3-Mechanics/CLI/bestiary/beast/plesiosaurus.md) | Swim |
^coast

**Desert**

| CR | Beast | Fly/Swim |
|----|-------|----------|
| 0 | [Cat](/3-Mechanics/CLI/bestiary/beast/cat.md) | — |
| 0 | [Hyena](/3-Mechanics/CLI/bestiary/beast/hyena.md) | — |
| 0 | [Jackal](/3-Mechanics/CLI/bestiary/beast/jackal.md) | — |
| 0 | [Scorpion](/3-Mechanics/CLI/bestiary/beast/scorpion.md) | — |
| 0 | [Vulture](/3-Mechanics/CLI/bestiary/beast/vulture.md) | Fly |
| 1/8 | [Camel](/3-Mechanics/CLI/bestiary/beast/camel.md) | — |
| 1/8 | [Flying snake](/3-Mechanics/CLI/bestiary/beast/flying-snake.md) | Fly |
| 1/8 | [Mule](/3-Mechanics/CLI/bestiary/beast/mule.md) | — |
| 1/8 | [Poisonous snake](/3-Mechanics/CLI/bestiary/beast/poisonous-snake.md) | Swim |
| 1/8 | [Stirge](/3-Mechanics/CLI/bestiary/beast/stirge.md) | Fly |
| 1/4 | [Constrictor snake](/3-Mechanics/CLI/bestiary/beast/constrictor-snake.md) | Swim |
| 1/4 | [Giant lizard](/3-Mechanics/CLI/bestiary/beast/giant-lizard.md) | — |
| 1/4 | [Giant poisonous snake](/3-Mechanics/CLI/bestiary/beast/giant-poisonous-snake.md) | Swim |
| 1/4 | [Giant wolf spider](/3-Mechanics/CLI/bestiary/beast/giant-wolf-spider.md) | — |
| 1 | [Giant hyena](/3-Mechanics/CLI/bestiary/beast/giant-hyena.md) | — |
| 1 | [Giant spider](/3-Mechanics/CLI/bestiary/beast/giant-spider.md) | — |
| 1 | [Giant toad](/3-Mechanics/CLI/bestiary/beast/giant-toad.md) | Swim |
| 1 | [Giant vulture](/3-Mechanics/CLI/bestiary/beast/giant-vulture.md) | Fly |
| 1 | [Lion](/3-Mechanics/CLI/bestiary/beast/lion.md) | — |
| 2 | [Giant constrictor snake](/3-Mechanics/CLI/bestiary/beast/giant-constrictor-snake.md) | Swim |
| 3 | [Giant scorpion](/3-Mechanics/CLI/bestiary/beast/giant-scorpion.md) | — |
^desert

**Forest**

| CR | Beast | Fly/Swim |
|----|-------|----------|
| 0 | [Baboon](/3-Mechanics/CLI/bestiary/beast/baboon.md) | — |
| 0 | [Badger](/3-Mechanics/CLI/bestiary/beast/badger.md) | — |
| 0 | [Cat](/3-Mechanics/CLI/bestiary/beast/cat.md) | — |
| 0 | [Deer](/3-Mechanics/CLI/bestiary/beast/deer.md) | — |
| 0 | [Hyena](/3-Mechanics/CLI/bestiary/beast/hyena.md) | — |
| 0 | [Owl](/3-Mechanics/CLI/bestiary/beast/owl.md) | Fly |
| 1/8 | [Blood hawk](/3-Mechanics/CLI/bestiary/beast/blood-hawk.md) | Fly |
| 1/8 | [Flying snake](/3-Mechanics/CLI/bestiary/beast/flying-snake.md) | Fly |
| 1/8 | [Giant rat](/3-Mechanics/CLI/bestiary/beast/giant-rat.md) | — |
| 1/8 | [Giant weasel](/3-Mechanics/CLI/bestiary/beast/giant-weasel.md) | — |
| 1/8 | [Poisonous snake](/3-Mechanics/CLI/bestiary/beast/poisonous-snake.md) | Swim |
| 1/8 | [Mastiff](/3-Mechanics/CLI/bestiary/beast/mastiff.md) | — |
| 1/8 | [Stirge](/3-Mechanics/CLI/bestiary/beast/stirge.md) | Fly |
| 1/4 | [Boar](/3-Mechanics/CLI/bestiary/beast/boar.md) | — |
| 1/4 | [Constrictor snake](/3-Mechanics/CLI/bestiary/beast/constrictor-snake.md) | Swim |
| 1/4 | [Elk](/3-Mechanics/CLI/bestiary/beast/elk.md) | — |
| 1/4 | [Giant badger](/3-Mechanics/CLI/bestiary/beast/giant-badger.md) | — |
| 1/4 | [Giant bat](/3-Mechanics/CLI/bestiary/beast/giant-bat.md) | Fly |
| 1/4 | [Giant frog](/3-Mechanics/CLI/bestiary/beast/giant-frog.md) | Swim |
| 1/4 | [Giant lizard](/3-Mechanics/CLI/bestiary/beast/giant-lizard.md) | — |
| 1/4 | [Giant owl](/3-Mechanics/CLI/bestiary/beast/giant-owl.md) | Fly |
| 1/4 | [Giant poisonous snake](/3-Mechanics/CLI/bestiary/beast/giant-poisonous-snake.md) | Swim |
| 1/4 | [Giant wolf spider](/3-Mechanics/CLI/bestiary/beast/giant-wolf-spider.md) | — |
| 1/4 | [Panther](/3-Mechanics/CLI/bestiary/beast/panther.md) | — |
| 1/4 | [Wolf](/3-Mechanics/CLI/bestiary/beast/wolf.md) | — |
| 1/2 | [Ape](/3-Mechanics/CLI/bestiary/beast/ape.md) | — |
| 1/2 | [Black bear](/3-Mechanics/CLI/bestiary/beast/black-bear.md) | — |
| 1/2 | [Giant wasp](/3-Mechanics/CLI/bestiary/beast/giant-wasp.md) | Fly |
| 1 | [Brown bear](/3-Mechanics/CLI/bestiary/beast/brown-bear.md) | — |
| 1 | [Dire wolf](/3-Mechanics/CLI/bestiary/beast/dire-wolf.md) | — |
| 1 | [Giant hyena](/3-Mechanics/CLI/bestiary/beast/giant-hyena.md) | — |
| 1 | [Giant spider](/3-Mechanics/CLI/bestiary/beast/giant-spider.md) | — |
| 1 | [Giant toad](/3-Mechanics/CLI/bestiary/beast/giant-toad.md) | Swim |
| 1 | [Tiger](/3-Mechanics/CLI/bestiary/beast/tiger.md) | — |
| 2 | [Giant boar](/3-Mechanics/CLI/bestiary/beast/giant-boar.md) | — |
| 2 | [Giant constrictor snake](/3-Mechanics/CLI/bestiary/beast/giant-constrictor-snake.md) | Swim |
| 2 | [Giant elk](/3-Mechanics/CLI/bestiary/beast/giant-elk.md) | — |
^forest

**Grassland**

| CR | Beast | Fly/Swim |
|----|-------|----------|
| 0 | [Cat](/3-Mechanics/CLI/bestiary/beast/cat.md) | — |
| 0 | [Deer](/3-Mechanics/CLI/bestiary/beast/deer.md) | — |
| 0 | [Eagle](/3-Mechanics/CLI/bestiary/beast/eagle.md) | Fly |
| 0 | [Goat](/3-Mechanics/CLI/bestiary/beast/goat.md) | — |
| 0 | [Hyena](/3-Mechanics/CLI/bestiary/beast/hyena.md) | — |
| 0 | [Jackal](/3-Mechanics/CLI/bestiary/beast/jackal.md) | — |
| 0 | [Vulture](/3-Mechanics/CLI/bestiary/beast/vulture.md) | Fly |
| 1/8 | [Blood hawk](/3-Mechanics/CLI/bestiary/beast/blood-hawk.md) | Fly |
| 1/8 | [Flying snake](/3-Mechanics/CLI/bestiary/beast/flying-snake.md) | Fly |
| 1/8 | [Giant weasel](/3-Mechanics/CLI/bestiary/beast/giant-weasel.md) | — |
| 1/8 | [Poisonous snake](/3-Mechanics/CLI/bestiary/beast/poisonous-snake.md) | Swim |
| 1/8 | [Stirge](/3-Mechanics/CLI/bestiary/beast/stirge.md) | Fly |
| 1/4 | [Axe beak](/3-Mechanics/CLI/bestiary/beast/axe-beak.md) | — |
| 1/4 | [Boar](/3-Mechanics/CLI/bestiary/beast/boar.md) | — |
| 1/4 | [Elk](/3-Mechanics/CLI/bestiary/beast/elk.md) | — |
| 1/4 | [Giant poisonous snake](/3-Mechanics/CLI/bestiary/beast/giant-poisonous-snake.md) | Swim |
| 1/4 | [Giant wolf spider](/3-Mechanics/CLI/bestiary/beast/giant-wolf-spider.md) | — |
| 1/4 | [Panther](/3-Mechanics/CLI/bestiary/beast/panther.md) (leopard) | — |
| 1/4 | Pteranodon | Fly |
| 1/4 | [Riding horse](/3-Mechanics/CLI/bestiary/beast/riding-horse.md) | — |
| 1/4 | [Wolf](/3-Mechanics/CLI/bestiary/beast/wolf.md) | — |
| 1/2 | [Giant goat](/3-Mechanics/CLI/bestiary/beast/giant-goat.md) | — |
| 1/2 | [Giant wasp](/3-Mechanics/CLI/bestiary/beast/giant-wasp.md) | Fly |
| 1 | [Giant eagle](/3-Mechanics/CLI/bestiary/beast/giant-eagle.md) | Fly |
| 1 | [Giant hyena](/3-Mechanics/CLI/bestiary/beast/giant-hyena.md) | — |
| 1 | [Giant vulture](/3-Mechanics/CLI/bestiary/beast/giant-vulture.md) | Fly |
| 1 | [Lion](/3-Mechanics/CLI/bestiary/beast/lion.md) | — |
| 1 | [Tiger](/3-Mechanics/CLI/bestiary/beast/tiger.md) | — |
| 2 | Allosaurus | — |
| 2 | [Giant boar](/3-Mechanics/CLI/bestiary/beast/giant-boar.md) | — |
| 2 | [Giant elk](/3-Mechanics/CLI/bestiary/beast/giant-elk.md) | — |
| 2 | [Rhinoceros](/3-Mechanics/CLI/bestiary/beast/rhinoceros.md) | — |
| 3 | Ankylosaurus | — |
| 4 | [Elephant](/3-Mechanics/CLI/bestiary/beast/elephant.md) | — |
| 5 | [Triceratops](/3-Mechanics/CLI/bestiary/beast/triceratops.md) | — |
^grassland

**Hill**

| CR | Beast | Fly/Swim |
|----|-------|----------|
| 0 | [Baboon](/3-Mechanics/CLI/bestiary/beast/baboon.md) | — |
| 0 | [Eagle](/3-Mechanics/CLI/bestiary/beast/eagle.md) | Fly |
| 0 | [Goat](/3-Mechanics/CLI/bestiary/beast/goat.md) | — |
| 0 | [Hyena](/3-Mechanics/CLI/bestiary/beast/hyena.md) | — |
| 0 | [Raven](/3-Mechanics/CLI/bestiary/beast/raven.md) | Fly |
| 0 | [Vulture](/3-Mechanics/CLI/bestiary/beast/vulture.md) | Fly |
| 1/8 | [Blood hawk](/3-Mechanics/CLI/bestiary/beast/blood-hawk.md) | Fly |
| 1/8 | [Giant weasel](/3-Mechanics/CLI/bestiary/beast/giant-weasel.md) | — |
| 1/8 | [Mastiff](/3-Mechanics/CLI/bestiary/beast/mastiff.md) | — |
| 1/8 | [Mule](/3-Mechanics/CLI/bestiary/beast/mule.md) | — |
| 1/8 | [Poisonous snake](/3-Mechanics/CLI/bestiary/beast/poisonous-snake.md) | Swim |
| 1/8 | [Stirge](/3-Mechanics/CLI/bestiary/beast/stirge.md) | Fly |
| 1/4 | [Axe beak](/3-Mechanics/CLI/bestiary/beast/axe-beak.md) | — |
| 1/4 | [Boar](/3-Mechanics/CLI/bestiary/beast/boar.md) | — |
| 1/4 | [Elk](/3-Mechanics/CLI/bestiary/beast/elk.md) | — |
| 1/4 | [Giant owl](/3-Mechanics/CLI/bestiary/beast/giant-owl.md) | Fly |
| 1/4 | [Giant wolf spider](/3-Mechanics/CLI/bestiary/beast/giant-wolf-spider.md) | — |
| 1/4 | [Panther](/3-Mechanics/CLI/bestiary/beast/panther.md) (cougar) | — |
| 1/4 | [Wolf](/3-Mechanics/CLI/bestiary/beast/wolf.md) | — |
| 1/2 | [Giant goat](/3-Mechanics/CLI/bestiary/beast/giant-goat.md) | — |
| 1 | [Brown bear](/3-Mechanics/CLI/bestiary/beast/brown-bear.md) | — |
| 1 | [Dire wolf](/3-Mechanics/CLI/bestiary/beast/dire-wolf.md) | — |
| 1 | [Giant eagle](/3-Mechanics/CLI/bestiary/beast/giant-eagle.md) | Fly |
| 1 | [Giant hyena](/3-Mechanics/CLI/bestiary/beast/giant-hyena.md) | — |
| 1 | [Lion](/3-Mechanics/CLI/bestiary/beast/lion.md) | — |
| 2 | [Giant boar](/3-Mechanics/CLI/bestiary/beast/giant-boar.md) | — |
| 2 | [Giant elk](/3-Mechanics/CLI/bestiary/beast/giant-elk.md) | — |
^hill

**Mountain**

| CR | Beast | Fly/Swim |
|----|-------|----------|
| 0 | [Eagle](/3-Mechanics/CLI/bestiary/beast/eagle.md) | Fly |
| 0 | [Goat](/3-Mechanics/CLI/bestiary/beast/goat.md) | — |
| 1/8 | [Blood hawk](/3-Mechanics/CLI/bestiary/beast/blood-hawk.md) | Fly |
| 1/8 | [Stirge](/3-Mechanics/CLI/bestiary/beast/stirge.md) | Fly |
| 1/4 | Pteranodon | Fly |
| 1/2 | [Giant goat](/3-Mechanics/CLI/bestiary/beast/giant-goat.md) | — |
| 1 | [Giant eagle](/3-Mechanics/CLI/bestiary/beast/giant-eagle.md) | Fly |
| 1 | [Lion](/3-Mechanics/CLI/bestiary/beast/lion.md) | — |
| 2 | [Giant elk](/3-Mechanics/CLI/bestiary/beast/giant-elk.md) | — |
| 2 | [Saber-toothed tiger](/3-Mechanics/CLI/bestiary/beast/saber-toothed-tiger.md) | — |
^mountain

**Swamp**

| CR | Beast | Fly/Swim |
|----|-------|----------|
| 0 | [Rat](/3-Mechanics/CLI/bestiary/beast/rat.md) | — |
| 0 | [Raven](/3-Mechanics/CLI/bestiary/beast/raven.md) | Fly |
| 1/8 | [Giant rat](/3-Mechanics/CLI/bestiary/beast/giant-rat.md) | — |
| 1/8 | [Poisonous snake](/3-Mechanics/CLI/bestiary/beast/poisonous-snake.md) | Swim |
| 1/8 | [Stirge](/3-Mechanics/CLI/bestiary/beast/stirge.md) | Fly |
| 1/4 | [Constrictor snake](/3-Mechanics/CLI/bestiary/beast/constrictor-snake.md) | Swim |
| 1/4 | [Giant frog](/3-Mechanics/CLI/bestiary/beast/giant-frog.md) | Swim |
| 1/4 | [Giant lizard](/3-Mechanics/CLI/bestiary/beast/giant-lizard.md) | — |
| 1/4 | [Giant poisonous snake](/3-Mechanics/CLI/bestiary/beast/giant-poisonous-snake.md) | Swim |
| 1/2 | [Crocodile](/3-Mechanics/CLI/bestiary/beast/crocodile.md) | Swim |
| 1 | [Giant spider](/3-Mechanics/CLI/bestiary/beast/giant-spider.md) | — |
| 1 | [Giant toad](/3-Mechanics/CLI/bestiary/beast/giant-toad.md) | Swim |
| 2 | [Giant constrictor snake](/3-Mechanics/CLI/bestiary/beast/giant-constrictor-snake.md) | Swim |
| 5 | [Giant crocodile](/3-Mechanics/CLI/bestiary/beast/giant-crocodile.md) | Swim |
^swamp

**Underdark**

| CR | Beast | Fly/Swim |
|----|-------|----------|
| 0 | [Giant fire beetle](/3-Mechanics/CLI/bestiary/beast/giant-fire-beetle.md) | — |
| 1/8 | [Giant rat](/3-Mechanics/CLI/bestiary/beast/giant-rat.md) | — |
| 1/8 | [Stirge](/3-Mechanics/CLI/bestiary/beast/stirge.md) | Fly |
| 1/4 | [Giant bat](/3-Mechanics/CLI/bestiary/beast/giant-bat.md) | Fly |
| 1/4 | [Giant centipede](/3-Mechanics/CLI/bestiary/beast/giant-centipede.md) | — |
| 1/4 | [Giant lizard](/3-Mechanics/CLI/bestiary/beast/giant-lizard.md) | — |
| 1/4 | [Giant poisonous snake](/3-Mechanics/CLI/bestiary/beast/giant-poisonous-snake.md) | Swim |
| 1 | [Giant spider](/3-Mechanics/CLI/bestiary/beast/giant-spider.md) | — |
| 1 | [Giant toad](/3-Mechanics/CLI/bestiary/beast/giant-toad.md) | Swim |
| 2 | [Giant constrictor snake](/3-Mechanics/CLI/bestiary/beast/giant-constrictor-snake.md) | Swim |
| 2 | [Polar bear](/3-Mechanics/CLI/bestiary/beast/polar-bear.md) (cave bear) | Swim |
^underdark

**Underwater**

| CR | Beast | Fly/Swim |
|----|-------|----------|
| 0 | [Quipper](/3-Mechanics/CLI/bestiary/beast/quipper.md) | Swim |
| 1/4 | [Constrictor snake](/3-Mechanics/CLI/bestiary/beast/constrictor-snake.md) | Swim |
| 1/2 | [Giant sea horse](/3-Mechanics/CLI/bestiary/beast/giant-sea-horse.md) | Swim |
| 1/2 | [Reef shark](/3-Mechanics/CLI/bestiary/beast/reef-shark.md) | Swim |
| 1 | [Giant octopus](/3-Mechanics/CLI/bestiary/beast/giant-octopus.md) | Swim |
| 2 | [Giant constrictor snake](/3-Mechanics/CLI/bestiary/beast/giant-constrictor-snake.md) | Swim |
| 2 | [Hunter shark](/3-Mechanics/CLI/bestiary/beast/hunter-shark.md) | Swim |
| 2 | [Plesiosaurus](/3-Mechanics/CLI/bestiary/beast/plesiosaurus.md) | Swim |
| 3 | [Killer whale](/3-Mechanics/CLI/bestiary/beast/killer-whale.md) | Swim |
| 5 | [Giant shark](/3-Mechanics/CLI/bestiary/beast/giant-shark.md) | Swim |
^underwater

## Class Features

### Druidic (Level 1)

You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception)) check but can't decipher it without magic.

### Spellcasting (Level 1)

Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. See "chapter 10" for the general rules of spellcasting and "chapter 11" for the druid spell list.

#### Cantrips

At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.

#### Preparing and Casting Spells

The Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.

You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.

For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md), you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.

You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.

#### Spellcasting Ability

Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.

**Spell save DC**: 8 + your proficiency bonus + your Wisdom modifier

**Spell attack modifier**: your proficiency bonus + your Wisdom modifier

#### Ritual Casting

You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.

#### Spellcasting Focus

You can use a [druidic focus](/3-Mechanics/CLI/items/druidic-focus.md) as a spellcasting focus for your druid spells.

### Wild Shape (Level 2)

Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.

Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.

**Beast Shapes**

| Level | Max. CR | Limitations | Example |
|-------|---------|-------------|---------|
| 2nd | 1/4 | No flying or swimming speed | Wolf |
| 4th | 1/2 | No flying speed | Crocodile |
| 8th | 1 | — | Giant eagle |
^beast-shapes

You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious), drop to 0 hit points, or die.

While you are transformed, the following rules apply:

- Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.  
- When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious).  
- You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration) on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as [call lightning](/3-Mechanics/CLI/spells/call-lightning.md), that you've already cast.  
- You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as [darkvision](/3-Mechanics/CLI/rules/senses.md#darkvision), unless your new form also has that sense.  
- You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form.  

### Druid Circle (Level 2)

At 2nd level, you choose to identify with a circle of druids from the list of available circles. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.

### Wild Shape Improvement (Level 4)

At 4th level, your Wild Shape improves as shown on the Beast Shapes table.

### Ability Score Improvement (Level 4)

When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Druid Circle feature (Level 6)

At 6th level, you gain a feature granted by your Druid Circle.

### Wild Shape Improvement (Level 8)

At 8th level, your Wild Shape improves as shown on the Beast Shapes table.

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Druid Circle feature (Level 10)

At 10th level, you gain a feature granted by your Druid Circle feature.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Druid Circle feature (Level 14)

At 14th level, you gain a feature granted by your Druid Circle feature.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Timeless Body (Level 18)

Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.

### Beast Spells (Level 18)

Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components.

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Archdruid (Level 20)

At 20th level, you can use your Wild Shape an unlimited number of times.

Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.