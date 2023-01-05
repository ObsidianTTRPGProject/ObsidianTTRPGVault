# Call Out Boxes (Admonitions)

With call out boxes the easiest way to add them to your notes is to have a Template with the Call Outs. If you trigger a Template in this vault (Alt-T) and type Call Out you should see a list of Call Out Templates. This is the only way I add Call Out boxes to my notes. I never type the Syntax out manually and would struggle to remember the Syntax natively. 

# Standard Call Out Boxes

These call out boxes come out of the box with Obsidian. 
- Note the use of -/+. These allow the call out boxes to be expanded or minimised and set the default status where - is minimised and + is expanded. 
- If you remove the -/+ then the call out will default to expanded and have no option to minimise. 

> [!note]- Custom Name
> This is my text
> This is more text

> [!note]-
> This is my text 

> [!abstract]+
> Hi this is my note

> [!info]-
> This is my text

> [!tip]-
> This is my text

> [!success]-
> This is my text

> [!question]-
> This is my text

> [!warning]-
> This is my text

> [!failure]-
> This is my text

> [!danger]-
> This is my text

> [!bug]-
> This is my text

> [!example]-
> This is my text

> [!quote]-
> This is my text

# Admonitions

Before Call Out Boxes were built into Obsidian, we used Admonitions (plugin) which provided the same functionality. These days Admonitions is largely replaced but still comes in handy occassionally. 

## How Is Admonitions Still Useful?

Admonitions allows you to nest Call Out Boxes and Code Blocks within it. The most common use case for this is how can you align a statblock and image together? If you combine the Admonitions capability with the ITS Theme (Or another suitable image adjustment \*.css) then you can achieve the desired outcome such as below. 

### Example of it not working
![[Eadyan Falconmoon.png|right|300]]
```statblock
monster: Priest
layout: DnD 5e
name: Eadyan Falconmoon
image: [[Eadyan Falconmoon.png]]
spells:
 - name: Spellcasting
   desc: |
        **Spellcasting.** The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared:
        - Cantrips (at will): [[Light]], [[Sacred Flame]], [[Spare the Dying]]
        - 1st level (4 slots): [[cure wounds]], [[guiding bolt]], [[sanctuary]]
        - 2nd level (3 slots): [[lesser restoration]], [[Prayer of Healing]]
        - 3rd level (3 slots): [[dispel magic]], [[Mass Healing Word]]
```

### Example of it working by using Admonitions and ITS Theme (|right image adjustment)

![[Eadyan Falconmoon.png|right|300]]
```ad-tip
title: Statblock
collapse: open
icon: horn-call
```statblock
monster: Priest
layout: DnD 5e
name: Eadyan Falconmoon
image: [[Eadyan Falconmoon.png]]
spells:
 - name: Spellcasting
   desc: |
        **Spellcasting.** The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared:
        - Cantrips (at will): [[Light]], [[Sacred Flame]], [[Spare the Dying]]
        - 1st level (4 slots): [[cure wounds]], [[guiding bolt]], [[sanctuary]]
        - 2nd level (3 slots): [[lesser restoration]], [[Prayer of Healing]]
        - 3rd level (3 slots): [[dispel magic]], [[Mass Healing Word]]
```