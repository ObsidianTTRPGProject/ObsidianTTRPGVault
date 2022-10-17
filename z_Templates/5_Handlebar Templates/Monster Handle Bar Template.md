---
Page: {{page}}
Type: Monster
MonsType: {{capitalize type}}{{capitalize type.type}} ({{capitalize type.tags}})
Size: {{table size "S" "Small" "M" "Medium" "L" "Large" "H" "Huge" "T" "Tiny" "G" "Gargantuan"}}
Source: {{source}}
CR: {{cr}}
AC: {{ac}}
HP: {{hp.average}} ({{hp.formula}})
---

# {{name}}

> [!infobox]
> # {{name}}
> ![[{{name}}.png|cover hsmall]]
> ###### [[{{name}}.png|Show To Players]]

```encounter
name: {{name}}
creatures:
 - : {{name}}
```

```statblock
monster: {{name}}
```