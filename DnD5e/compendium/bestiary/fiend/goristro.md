---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/fiend/demon
aliases: ["Goristro"]
statblock: true
"name": "Goristro"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "310"
"hit_dice": "23d12 + 161"
"stats":
- !!int "25"
- !!int "11"
- !!int "25"
- !!int "6"
- !!int "13"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Strength": !!int "13"
  "Constitution": !!int "13"
"skillsaves":
  "Perception": !!int "7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Abyssal"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the goristro moves at least 15 feet straight toward a target and then\
    \ hits it with a gore attack on the same turn, the target takes an extra 38 (7d10)\
    \ piercing damage. If the target is a creature, it must succeed on a DC 21 Strength\
    \ saving throw or be pushed up to 20 feet away and knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goristro can perfectly recall any path it has traveled."
  "name": "Labyrinthine Recall"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goristro has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goristro deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goristro makes three attacks: two with its fists and one with its hoof."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 20 (3d8\
    \ + 7) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (3d10\
    \ + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 21 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Hoof"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 45 (7d10\
    \ + 7) piercing damage."
  "name": "Gore"
"source":
- "MM"
name: Goristro
image: "[[Goristro.png]]"
---

# Goristro

```statblock
"name": "Goristro"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "310"
"hit_dice": "23d12 + 161"
"stats":
- !!int "25"
- !!int "11"
- !!int "25"
- !!int "6"
- !!int "13"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Strength": !!int "13"
  "Constitution": !!int "13"
"skillsaves":
  "Perception": !!int "7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Abyssal"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the goristro moves at least 15 feet straight toward a target and then\
    \ hits it with a gore attack on the same turn, the target takes an extra 38 (7d10)\
    \ piercing damage. If the target is a creature, it must succeed on a DC 21 Strength\
    \ saving throw or be pushed up to 20 feet away and knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goristro can perfectly recall any path it has traveled."
  "name": "Labyrinthine Recall"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goristro has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goristro deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goristro makes three attacks: two with its fists and one with its hoof."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 20 (3d8\
    \ + 7) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (3d10\
    \ + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 21 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Hoof"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 45 (7d10\
    \ + 7) piercing damage."
  "name": "Gore"
"source":
- "MM"
"image": "[[Goristro.png]]"
```
^statblock

*Source: Monster Manual p. 59*

## Description

The goristro resembles a fiendish minotaur towering more than twenty feet tall. When controlled by a demon lord, goristros make formidable living siege engines and prized pets. Goristros possess preternatural cunning when navigating labyrinthine passages and shifting corridors, pursuing foes in a terrifying hunt.

A hulking goristro sometimes bears a palanquin, carrying smaller demons on its broad shoulders, much like an elephant carries riders on its back.

**Demons.** Spawned in the Infinite Layers of the Abyss, demons are the embodiment of chaos and evil-engines of destruction barely contained in monstrous form. Possessing no compassion, empathy, or mercy, they exist only to destroy.

**Spawn of Chaos.** The Abyss creates demons as extensions of itself, spontaneously forming fiends out of filth and carnage. Some are unique monstrosities, while others represent uniform strains virtually identical to each other. Other demons (such as manes) are created from mortal souls shunned or cursed by the gods, or which are otherwise trapped in the Abyss.

**Capricious Elevation.** Demons respect power and power alone. A greater demon commands shrieking mobs of lesser demons because it can destroy any lesser demon that dares to refuse its commands. A demon's status grows with the blood it spills; the more enemies that fall before it, the greater it becomes.

A demon might spawn as a manes, then become a dretch, and eventually transform to a vrock after untold time spent fighting and surviving in the Abyss. Such elevations are rare, however, for most demons are destroyed before they attain significant power. The greatest of those that do survive make up the ranks of the demon lords that threaten to tear the Abyss apart with their endless warring.

By expending considerable magical power, demon lords can raise lesser demons into greater forms, though such promotions never stem from a demon's deeds or accomplishments. Rather, a demon lord might warp a manes into a quasit when it needs an invisible spy, or turn an army of dretches into hezrous when marching against a rival lord. Demon lords only rarely elevate demons to the highest ranks, fearful of inadvertently creating rivals to their own power.

**Abyssal Invasions.** Wherever they wander across the Abyss, demons search for portals to the other planes. They crave the chance to slip free of their native realm and spread their dark influence across the multiverse, undoing the works of the gods, tearing down civilizations, and reducing the cosmos to despair and ruin.

Some of the darkest legends of the mortal realm are built around the destruction wrought by demons set loose in the world. As such, even nations embroiled in bitter conflict will set their differences aside to help contain an outbreak of demons, or to seal off abyssal breaches before these fiends can break free.

**Signs of Corruption.** Demons carry the stain of abyssal corruption with them, and their mere presence changes the world for the worse. Plants wither and die in areas where abyssal breaches and demons appear. Animals shun the sites where a demon has made a kill. The site of a demonic infestation might be fouled by a stench that never abates, by areas of bitter cold or burning heat, or by permanent shadows that mark the places where these fiends lingered.

**Eternal Evil.** Outside the Abyss, death is a minor nuisance that no demon fears. Mundane weapons can't stop these fiends, and many demons are resistant to the energy of the most potent spells. When a lucky hero manages to drop a demon in combat, the fiend dissolves into foul ichor. It then instantly reforms in the Abyss, its mind and essence intact even as its hatred is inflamed.

The only way to truly destroy a demon is to seek it in the Abyss and kill it there.

**Protected Essence.** A powerful demon can take steps to safeguard its life essence, using secret methods and abyssal metals to create an amulet into which part of that essence is ceded. If the demon's abyssal form is ever destroyed, the amulet allows the fiend to reform at a time and place of its choosing.

Obtaining a demonic amulet is a dangerous enterprise, and simply seeking such a device risks drawing the attention of the demon that created it. A creature possessing a demonic amulet can exact favors from the demon whose life essence the amulet holds—or inflict great pain if the fiend resists. If an amulet is destroyed, the demon that created it is trapped in the Abyss for a year and a day.

**Demonic Cults.** Despite the dark risks involved in dealing with fiends, the mortal realm is filled with creatures that covet demonic power. Demon lords manipulate these mortal servants into performing ever greater acts of depravity, furthering the demon lord's ambitions in exchange for magic and other boons. However, a demon regards any mortals in its service as tools to use and then discard at its whim, consigning their mortal souls to the Abyss.

**Demon Summoning.** Few acts are as dangerous as summoning a demon, and even mages who bargain freely with devils fear the fiends of the Abyss. Though demons yearn to sow chaos on the Material Plane, they show no gratitude when brought there, raging against their prisons and demanding release.

Those who would risk summoning a demon might do so to wrest information from it, press it into service, or send it on a mission that only a creature of absolute evil can complete. Preparation is key, and experienced summoners know the specific spells and magic items that can force a demon to bend to another's will. If a single mistake is made, a demon that breaks free shows no mercy as it makes its summoner the first victim of its wrath.

**Bound Demons.** The Book of Vile Darkness, the Black Scrolls of Ahm, and the Demonomicon of Iggwilv are the foremost authorities on demonic matters. These ancient tomes describe techniques that can trap the essence of a demon on the Material Plane, placing it within a weapon, idol, or piece of jewelry and preventing the fiend's return to the Abyss.

An object that binds a demon must be specially prepared with unholy incantations and innocent blood. It radiates a palpable evil, chilling and fouling the air around it. A creature that handles such an object experiences unsettling dreams and wicked impulses, but is able to control the demon whose essence is trapped within the object. Destroying the object frees the demon, which immediately seeks revenge against its binder.

**Demonic Possession.** No matter how secure its bindings, a powerful demon often finds a way to escape an object that holds it. When a demonic essence emerges from its container, it can possess a mortal host. Sometimes a fiend employs stealth to hide a successful possession. Other times, it unleashes the full brunt of its fiendish drives through its new form.

As long as the demon remains in possession of its host, the soul of that host is in danger of being dragged to the Abyss with the demon if it is exorcised from the flesh, or if the host dies. If a demon possesses a creature and the object binding the demon is destroyed, the possession lasts until powerful magic is used to drive the demonic spirit out of its host.

**Demon Lords.** The chaotic power of the Abyss rewards demons of particular ruthlessness and ingenuity with a dark blessing, transforming them into unique fiends whose power can rival the gods. These demon lords rule through cunning or brute force, hoping to one day claim the prize of absolute control over all the Abyss.

**Reward for Outsiders.** Although most demon lords rise up from the vast and uncountable mobs of demons rampaging across the Abyss, the plane also rewards outsiders that conquer any of its infinite layers. The elven goddess Lolth became a demon lord after Corellon Larethian cast her into the Abyss for betraying elvenkind. Sages claim that the Dark Prince Graz'zt originated on some other plane before stealing his abyssal title from another long-forgotten demon lord.

**Power and Control.** The greatest sign of a demon lord's power is its ability to reshape an abyssal realm. A layer of the Abyss controlled by a demon lord becomes a twisted reflection of that fiend's vile personality, and demon lords seldom leave their realms for fear of allowing another creature to reshape and seize it.

As with other demons, a demon lord that dies on another plane has its essence return to the Abyss, where it reforms into a new body. Likewise, a demon lord that dies in the Abyss is permanently destroyed. Most demon lords keep a portion of their essence safely stored away to prevent such a fate.

**Baphomet.** The demon lord Baphomet, also known as the Horned King and the Prince of Beasts, rules over minotaurs and other savage creatures. If he had his way, civilization would crumble and all races would embrace their base animal savagery.

The Prince of Beasts appears as a huge, black-furred minotaur with iron horns, red eyes, and a blood-soaked mouth. His iron crown is topped with the rotting heads of his enemies, while his dark armor is set with spikes and skull-like serrations. He carries a huge glaive named Heartcleaver, but often hurls it into the fray so as to face his enemies with horns and hooves.

**Demogorgon.** The Sibilant Beast and the self-styled Prince of Demons, Demogorgon yearns for nothing less than undoing the order of the multiverse. An insane assemblage of features and drives, the Prince of Demons inspires fear and hatred among other demons and demon lords.

Demogorgon towers three times the height of a human, his body as sinuous as a snake's and as powerful as a great ape's. Suckered tentacles take the place of his arms. His saurian lower torso ends in webbed and clawed feet, and a forked tail whose whip-like tips are armed with cruel blades. The Prince of Demons has two baleful baboon heads, both of them mad. It is only the conflict between the two halves of his dual nature that keeps the demon lord's ambitions in check.

**Graz'zt.** The demon lord Graz'zt appears as a darkly handsome figure nearly nine feet tall. Those who refer to the Dark Prince as the most humanoid of the demon lords vastly underestimate the capacity for evil in his scheming heart.

Graz'zt is a striking physical specimen, whose demonic nature shows in his ebon skin, pointed ears, yellow fangs, crown of horns, and six-fingered hands. He delights in finery, pageantry, and sating his decadent desires with subjects and consorts alike, among whom incubi and succubi are often his favorites.

**Juiblex.** The demon lord of slimes and oozes, Juiblex is a stew of noxious fluids that lurks in the abyssal depths. The wretched Faceless Lord cares nothing for cultists or mortal servants, and its sole desire is to turn all creatures into formless copies of its horrid self.

In its resting state, Juiblex spreads out in a noxious mass, bubbling and filling the air with a profound stench. On the rare occasions when creatures confront the demon lord, Juiblex draws itself up into a shuddering cone of slime striated with veins of black and green. Baleful red eyes swim within its gelatinous body, while dripping pseudopods of ooze lash out hungrily at any creature they can reach.

**Lolth.** The Demon Queen of Spiders is the evil matron of the drow. Her every thought is touched by malice, and the depth of her viciousness can surprise even her most faithful priestesses. She directs her faithful while she weaves plots across the worlds of the Material Plane, looking forward to the time when her drow followers bring those worlds under her control.

Lolth appears as a lithe, imperious drow matriarch when she manifests to her followers in the mortal realm, which she does with unusual frequency. When battle breaks out-or if she has a reason to remind her followers to fear her—Lolth's lower body transforms into that of a huge demonic spider, whose spike—tipped legs and mandibles tear foes apart.

**Orcus.** Known as the Demon Prince of Undeath and the Blood Lord, the demon lord Orcus is worshiped by the undead and by living creatures that channel the power of undeath. A brooding and nihilistic entity, Orcus yearns to make the multiverse a place of death and darkness, forever unchanging except by his will.

The Demon Prince of Undeath is a foul and corpulent creature, with a humanoid torso, powerful goat legs, and the desiccated head of a ram. His sore-ridden body stinks of disease, but his decaying head and glowing red eyes are as a creature already dead. Great black bat wings sprout from his back, stirring reeking air as he moves.

Orcus wields a malevolent artifact known as the Wand of Orcus, a mace-like rod of obsidian topped by a humanoid skull. He surrounds himself with undead, and living creatures not under his control are anathema to him.

**Yeenoghu.** Known as the Gnoll Lord and the Beast of Butchery, the demon lord Yeenoghu hungers for slaughter and senseless destruction. Gnolls are his mortal instruments, and he drives them to ever-greater atrocities in his name. Delighting in sorrow and hopelessness, the Gnoll Lord yearns to turn the world into a wasteland in which the last surviving gnolls tear each other apart for the right to feast upon the dead.

Yeenoghu appears as a huge, scarred gnoll with a spiky crest of black spines, and eyes that burn with emerald flame. His armor is a patchwork of shields and breastplates claimed from fallen foes, and decorated by those foes' flayed skins. Yeenoghu can summon a triple flail he calls the Butcher, which he wields to deadly effect or wills to fly independently into battle as he tears foes apart with teeth and claws.

**Other Demon Lords.** No one knows the full number of demon lords that rage in the Abyss. Given the infinite depths of that plane, powerful demons constantly rise to become demon lords, then fall almost as quickly. Among the demon lords whose power has endured long enough for demonologists to name them are Fraz-Urb'luu, the Prince of Deception; Kostchtchie, the Prince of Wrath; Pazuzu, Prince of the Lower Aerial Kingdoms; and Zuggtmoy, Lady of Fungi.

**Demon Types.** Demonologists organize the chaotic distribution of demons into broad categories of power known as types. Most demons fit into one of six major types, with the weakest categorized as Type 1 and the strongest as Type 6. Demons outside the six main types are categorized as minor demons and demon lords.

**Demons by Type**

| Type | Examples |
|------|----------|
| 1 | barlgura, shadow demon, vrock |
| 2 | chasme, hezrou |
| 3 | glabrezu, yochlol |
| 4 | nalfeshnee |
| 5 | marilith |
| 6 | balor, goristro |
^demons-by-type

> [!quote] Demon True Names
> 
> Though demons all have common names, every demon lord and every demon of type 1 through 6 has a true name that it keeps secret. A demon can be forced to disclose its true name if [charmed](/rules/conditions.md#charmed), and ancient scrolls and tomes are said to exist that list the true names of the most powerful demons.
> 
> A mortal who learns a demon's true name can use powerful summoning magic to call the demon from the Abyss and exercise some measure of control over it. However, most demons brought to the Material Plane in this manner do everything in their power to wreak havoc or sow discord and strife.
^demon-true-names

> [!quote] Variant: Demon Summoning
> 
> Some demons can have an action option that allows them to summon other demons. Summon Demon (1/Day). The demon chooses what to summon and attempts a magical summoning.
> 
> - A balor has a 50|50 percent% chance chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.
> - A barlgura has a 30|30 percent% chance chance of summoning one barlgura.
> - A chasme has a 30|30 percent% chance chance of summoning one chasme.
> - A glabrezu has a 30|30 percent% chance chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.
> - A hezrou has a 30|30 percent% chance chance of summoning 2d6 dretches or one hezrou.
> - A marilith has a 50|50 percent% chance chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.
> - A nalfeshnee has a 50|50 percent% chance chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee.
> - A vrock has a 30|30 percent% chance chance of summoning 2d4 dretches or one vrock.
> - A yochlol has a 50|50 percent% chance chance of summoning one yochlol.
> 
> A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
^variant-demon-summoning