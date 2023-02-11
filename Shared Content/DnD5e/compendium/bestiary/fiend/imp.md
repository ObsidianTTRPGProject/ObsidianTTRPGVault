---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/tiny
- monster/type/fiend/devil
aliases: ["Imp"]
statblock: true
"name": "Imp"
"size": "Tiny"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "6"
- !!int "17"
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "14"
"speed": "walk 20 ft., fly 40 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "5"
  "Insight": !!int "3"
  "Persuasion": !!int "4"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with silvered weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Infernal, Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The imp can use its action to polymorph into a beast form that resembles\
    \ a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb\
    \ 20 ft.), or back into its true form. Its statistics are the same in each form,\
    \ except for the speed changes noted. Any equipment it is wearing or carrying\
    \ isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the imp's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The imp has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage, and the target must make a DC 11 Constitution saving throw,\
    \ taking 10 (3d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Sting (Bite in Beast Form)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The imp magically turns [invisible](/rules/conditions.md#invisible) until\
    \ it attacks, or until its concentration ends (as if concentrating on a spell).\
    \ Any equipment the imp wears or carries is [invisible](/rules/conditions.md#invisible)\
    \ with it."
  "name": "Invisibility"
"source":
- "MM"
- "CoS"
- "SKT"
- "ToA"
- "WDH"
- "GoS"
- "BGDIA"
- "EGW"
- "TCE"
- "CM"
name: Imp
image: "[[Imp.png]]"
---

# Imp

```statblock
"name": "Imp"
"size": "Tiny"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "6"
- !!int "17"
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "14"
"speed": "walk 20 ft., fly 40 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "5"
  "Insight": !!int "3"
  "Persuasion": !!int "4"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with silvered weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Infernal, Common"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The imp can use its action to polymorph into a beast form that resembles\
    \ a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb\
    \ 20 ft.), or back into its true form. Its statistics are the same in each form,\
    \ except for the speed changes noted. Any equipment it is wearing or carrying\
    \ isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the imp's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The imp has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage, and the target must make a DC 11 Constitution saving throw,\
    \ taking 10 (3d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Sting (Bite in Beast Form)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The imp magically turns [invisible](/rules/conditions.md#invisible) until\
    \ it attacks, or until its concentration ends (as if concentrating on a spell).\
    \ Any equipment the imp wears or carries is [invisible](/rules/conditions.md#invisible)\
    \ with it."
  "name": "Invisibility"
"source":
- "MM"
- "CoS"
- "SKT"
- "ToA"
- "WDH"
- "GoS"
- "BGDIA"
- "EGW"
- "TCE"
- "CM"
"image": "[[Imp.png]]"
```
^statblock

*Source: Monster Manual p. 76, Curse of Strahd, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything, Candlekeep Mysteries*

## Description

Imps are found throughout the Lower Planes, either running errands for their infernal masters, spying on rivals, or misleading and waylaying mortals. An imp will proudly serve an evil master of any kind, but it can't be relied on to carry out tasks with any speed or efficiency.

An imp can assume animal form at will, but in its natural state it resembles a diminutive red-skinned humanoid with a barbed tail, small horns, and leathery wings. It strikes while [invisible](/rules/conditions.md#invisible), attacking with its poison stinger.

> [!quote] Variant: Imp Familiar
> 
> Imps can be found in the service to mortal spellcasters, acting as advisors, spies, and familiars. An imp urges its master to acts of evil, knowing the mortal's soul is a prize the imp might ultimately claim. Imps display an unusual loyalty to their masters, and an imp can be quite dangerous if its master is threatened. Some such imps have the following trait.
> 
> **Familiar.** The imp can enter into a contract to serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the imp senses as long as they are within 1 mile of each other. While the imp is within 10 feet of its master, the master shares the imp's Magic Resistance trait. If its master violates the terms of the contract, the imp can end its service as a familiar, ending the telepathic bond.
^variant-imp-familiar

Devils personify tyranny, with a totalitarian society dedicated to the domination of mortal life. The shadow of the Nine Hells of Baator extends far across the multiverse, and Asmodeus, the dark lord of Nessus, strives to subjugate the cosmos to satisfy his thirst for power. To do so, he must continually expand his infernal armies, sending his servants to the mortal realm to corrupt the souls from which new devils are spawned.

**Lords of Tyranny.** Devils live to conquer, enslave, and oppress. They take perverse delight in exercising authority over the weak, and any creature that defies the authority of a devil faces swift and cruel punishment. Every interaction is an opportunity for a devil to display its power, and all devils have a keen understanding of how to use and abuse their power.

Devils understand the failings that plague intelligent mortals, and they use that knowledge to lead mortals into temptation and darkness, turning creatures into slaves to their own corruption. Devils on the Material Plane use their influence to manipulate humanoid rulers, whispering evil thoughts, fomenting paranoia, and eventually driving them to tyrannical actions.

**Obedience and Ambition.** In accordance with their lawful alignment, devils obey even when they envy or dislike their superiors, knowing that their obedience will be rewarded. The hierarchy of the Nine Hells depends on this unswerving loyalty, without which that fiendish plane would become as anarchic as the Abyss.

At the same time, it is in the nature of devils to scheme, creating in some a desire to rule that eclipses their contentment to be ruled. This singular ambition is strongest among the archdevils whom Asmodeus appoints to rule the nine layers of the Nine Hells. These high-ranking fiends are the only devils to ever sample true power, which they crave like the sweetest ambrosia.

**Dark Dealers and Soul Mongers.** Devils are confined to the Lower Planes, but they can travel beyond those planes by way of portals or powerful summoning magic. They love to strike bargains with mortals seeking to gain some benefit or prize, but a mortal making such a bargain must be wary. Devils are crafty negotiators and positively ruthless at enforcing the terms of an agreement. Moreover, a contract with even the lowliest devil is enforced by Asmodeus's will. Any mortal creature that breaks such a contract instantly forfeits its soul, which is spirited away to the Nine Hells.

To own a creature's soul is to have absolute control over that creature, and most devils accept no other currency in exchange for the fiendish power and boons they can provide. A soul is usually forfeited when a mortal dies naturally, for devils are immortal and can wait years for a contract to play out. If a contract allows a devil to claim a mortal's soul before death, it can instantly return to the Nine Hells with the soul in its possession. Only divine intervention can release a soul after a devil has claimed it.

**The Infernal Hierarchy.** The Nine Hells has a rigid hierarchy that defines every aspect of its society. Asmodeus is the supreme ruler of all devils, and the only creature in the Nine Hells with the powers of a lesser god. Worshiped as such in the Material Plane, Asmodeus inspires the evil humanoid cults that take his name. In the Nine Hells, he commands scores of pit fiend generals, which in turn command legions of subordinates.

A supreme tyrant, a brilliant deceiver, and a master of subtlety, Asmodeus protects his throne by keeping his friends close and his enemies closer. He delegates most matters of rulership to the pit fiends and lesser archdevils that make up the infernal bureaucracy of the Nine Hells, even as he knows that those powerful devils conspire to usurp the Throne of Baator from which he rules. Asmodeus appoints archdevils, and he can strip any member of the infernal hierarchy of rank and status as he likes.

If it dies outside the Nine Hells, a devil disappears in a cloud of sulfurous smoke or dissolves into a pool of ichor, instantly returning to its home layer, where it reforms at full strength. Devils that die in the Nine Hells are destroyed forever-a fate that even Asmodeus fears.

**Archdevils.** The archdevils include all the current and deposed rulers of the Nine Hells (see the Layers and Lords of the Nine Hells table), as well as the dukes and duchesses that make up their courts, attend them as advisers, and hope to supplant them. Every archdevil is a unique being with an appearance that reflects its particular evil nature.

**Greater Devils.** The greater devils include the pit fiends, erinyes, horned devils, and ice devils that command lesser devils and attend the archdevils.

**Lesser Devils.** The lesser devils include numerous strains of fiends, including imps, chain devils, spined devils, bearded devils, barbed devils, and bone devils.

**Lemures.** The lowest form of devil, lemures are the twisted and tormented souls of evil and corrupted mortals. A lemure killed in the Nine Hells is only permanently destroyed if it is killed with a blessed weapon or if its shapeless corpse is splashed with holy water before it can return to life.

**Promotion and Demotion.** When the soul of an evil mortal sinks into the Nine Hells, it takes on the physical form of a wretched lemure. Archdevils and greater devils have the power to promote lemures to lesser devils. Archdevils can promote lesser devils to greater devils, and Asmodeus alone can promote a greater devil to archdevil status. This diabolic promotion invokes a brief, painful transformation, with the devil's memories passing intact from one form to the next.

Low-level promotions are typically based on need, such as when a pit fiend transforms lemures into imps to gain invisible spies under its command. High-level promotions are almost always based on merit, such as when a bone devil that distinguishes itself in battle is transformed into a horned devil by the archdevil it serves. A devil is seldom promoted more than one step at a time in the hierarchy of infernal forms.

Demotion is the customary punishment for failure or disobedience among the devils. Archdevils or greater devils can demote a lesser devil to a lemure, which loses all memory of its prior existence. An archdevil can demote a greater devil to lesser devil status, but the demoted devil retains its memories-and might seek vengeance if the severity of the demotion is excessive.

No devil can promote or demote another devil that has not sworn fealty to it, preventing rival archdevils from demoting each other's most powerful servants. Since all devils swear fealty to Asmodeus, he can freely demote any other devil, transforming it into whatever infernal form he desires.

**Infernal Hierarchy**

| Rank | Devil(s) |
|------|----------|
| 1. | lemure |
| 2. (Lesser devils) | imp |
| 3. | spined devil |
| 4. | bearded devil |
| 5. | barbed devil |
| 6. | chain devil |
| 7. | bone devil |
| 8. (Greater devils) | horned devil |
| 9. | erinyes |
| 10. | ice devil |
| 11. | pit fiend |
| 12. (Archdevils) | duke or duchess |
| 13. | archduke or archduchess |
^infernal-hierarchy

**The Nine Hells.** The Nine Hells are a single plane comprising nine separate layers (see the Layers and Lords of the Nine Hells table). The first eight layers are each ruled by archdevils that answer to the greatest archdevil of all: Asmodeus, the Archduke of Nessus, the ninth layer. To reach the deepest layer of the Nine Hells, one must descend through all eight of the layers above it, in order. The most expeditious means of doing so is the River Styx, which plunges ever deeper as it flows from one layer to the next. Only the most courageous adventurers can withstand the torment and horror of that journey.

**Layers and Lords of the Nine Hells Layer**

| Layer | Layer Name | Archduke or Archduchess | Previous Rulers | Primary Inhabitants |
|-------|------------|-------------------------|-----------------|---------------------|
| 1 | Avernus | Zariel | Bel, Tiamat | Erinyes, imps, spined devils |
| 2 | Dis | Dispater | — | Bearded devils, erinyes, imps, spined devils |
| 3 | Minauros | Mammon | — | Bearded devils, chain devils, imps, spined devils |
| 4 | Phlegethos | Belial and Fierna | — | Barbed devils, bone devils, imps, spined devils |
| 5 | Stygia | Levistus | Geryon | Bone devils, erinyes, ice devils, imps |
| 6 | Malbolge | Glasya | Malagard, Moloch | Barbed devils, bone devils, horned devils, imps |
| 7 | Maladomini | Baalzebul | — | Barbed devils, bone devils, horned devils, imps |
| 8 | Cania | Mephistopheles | — | Horned devils, ice devils, imps, pit fiends |
| 9 | Nessus | Asmodeus | — | All devils |
^layers-and-lords-of-the-nine-hells-layer

> [!quote] Devil True Names and Talismans
> 
> Though devils all have common names, every devil above a lemure in station also has a true name that it keeps secret. A devil can be forced to disclose its true name if [charmed](/rules/conditions.md#charmed), and ancient scrolls and tomes are said to exist that list the true names of certain devils.
> 
> A mortal who learns a devil's true name can use powerful summoning magic to call the devil from the Nine Hells and bind it into service. Binding can also be accomplished with the help of a devil talisman. Each of these ancient relics is inscribed with the true name of a devil it controls, and was bathed in the blood of a worthy sacrifice-typically someone the creator loved-when crafted.
> 
> However it is summoned, a devil brought to the Material Plane typically resents being pressed into service. However, the devil seizes every opportunity to corrupt its summoner so that the summoner's soul ends up in the Nine Hells. Only imps are truly content to be summoned, and they easily commit to serving a summoner as a familiar, but they still do their utmost to corrupt those who summon them.
^devil-true-names-and-talismans

> [!quote] Variant: Devil Summoning
> 
> Some devils can have an action option that allows them to summon other devils.
> 
> **Summon Devil (1/Day).**  The devil chooses what to summon and attempts a magical summoning.
> 
> - A barbed devil has a 30|30 percent% chance chance of summoning one barbed devil.
> - A bearded devil has a 30|30 percent% chance chance of summoning one bearded devil.
> - A bone devil has a 40|40 percent% chance chance of summoning 2d6 spined devils or one bone devil.
> - An erinyes has a 50|50 percent% chance chance of summoning 3d6 spined devils, 1d6 bearded devils, or one erinyes.
> - A horned devil has a 30|30 percent% chance chance of summoning one horned devil.
> - An ice devil has a 60|60 percent% chance chance of summoning one ice devil.
> - A pit fiend summons 2d4 bearded devils, 1d4 barbed devils, or one erinyes with no chance of failure.
> 
> A summoned devil appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other devils. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
^variant-devil-summoning