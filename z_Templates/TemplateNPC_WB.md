---
noteType: character
NoteIcon: npc
NoteStatus: ❓
Char_Status: Alive
aliases:
  - characters other name
char_image: z_Assets/Pasted image 20240607151510.png
char_gender: Male
char_date_birth: 2024-11-16T00:00:00+10:30
char_items: 
parents:
  - Josh
children:
  - Bob
enemies:
  - Zander
allies:
  - Emyerson
  - Bob
siblings:
  - Flip
partner:
  - Jane
---
> [!infobox]+
> # `=this.file.name`
> `INPUT[imageSuggester(optionQuery("")):char_image]`
> ###### Stats
> | Type |  Stat |
> |---|---|
> | Gender | `INPUT[inlineSelect(option(Male), option(Female), option(Other)):char_gender]` |
> | Age | `INPUT[number:char_age]` |
> | Height | `INPUT[text:char_height]` |
> | Weight | `INPUT[text:char_weight]` |
> | Date of Birth | `INPUT[datePicker:char_date_birth]` |
> | Date of Death | `INPUT[datePicker:char_date_death]` |
> | Ancestry | Testing |
> | Occupation/Class | Testing |

## Details

Ancestry: 
Occupation/Class: `INPUT[inlineSelect(option(Male), option(Female), option(Other)):char_class]`

Place of Residence: `INPUT[suggester(optionQuery(#Category/Settlement)):char_residence]`
Place of Origin: `INPUT[suggester(optionQuery(#Category/Settlement)):char_origin]`
Place of Death: `INPUT[suggester(optionQuery(#Category/Settlement)):char_death]`

Known Languages: 

## Description

-updateme-

## Equipment

`INPUT[inlineListSuggester(optionQuery(#item)):char_items]`

## Relationships

```dataviewjs
var parents = dv.current().parents ?? [];
var children = dv.current().children ?? [];
var enemies = dv.current().enemies ?? [];
var allies = dv.current().allies ?? [];
var siblings = dv.current().siblings ?? [];
var current = dv.current().file.name;
var partner = dv.current().partner ?? [];

dv.paragraph("```mermaid\nflowchart LR\n" +
  // Parents with internal-link on individual nodes only
  (parents.length > 0 ? parents.map((parent, index) => `P${index + 1}[${parent}]:::internal-link\nP${index + 1} --> Current\n`).join('') : '') +
  
  // Current node
  `Current[${current}]\n` +
  
  // Partner group node (no internal-link applied)
  (partner.length > 0 ? `PT[Partner]\nCurrent --> PT\n` : '') +
  
  // Individual partners with internal-link
  (partner.length > 0 ? partner.map((p, index) => `PT${index + 1}[${p}]:::internal-link\nPT --> PT${index + 1}\n`).join('') : '') +

  // Children group node (no internal-link applied)
  (children.length > 0 ? `C[Children]\nCurrent --> C\n${children.map((child, index) => `C${index + 1}[${child}]:::internal-link\nC --> C${index + 1}\n`).join('')}` : '') +

  // Siblings group node (no internal-link applied)
  (siblings.length > 0 ? `S[Siblings]\nCurrent --> S\n${siblings.map((sibling, index) => `S${index + 1}[${sibling}]:::internal-link\nS --> S${index + 1}\n`).join('')}` : '') +

  // Enemies group node (no internal-link applied)
  (enemies.length > 0 ? `E[Enemies]\nCurrent --> E\n${enemies.map((enemy, index) => `E${index + 1}[${enemy}]:::internal-link\nE --> E${index + 1}\n`).join('')}` : '') +

  // Allies group node (no internal-link applied)
  (allies.length > 0 ? `A[Allies]\nCurrent --> A\n${allies.map((ally, index) => `A${index + 1}[${ally}]:::internal-link\nA --> A${index + 1}\n`).join('')}` : '') +

  // Styling: Apply internal-link only to individual nodes, not group nodes
  `class ${parents.length > 0 ? parents.map((_, index) => `P${index + 1},`).join('') : ''}Current${children.length > 0 ? children.map((_, index) => `C${index + 1},`).join('') : ''}${siblings.length > 0 ? siblings.map((_, index) => `S${index + 1},`).join('') : ''}${enemies.length > 0 ? enemies.map((_, index) => `E${index + 1},`).join('') : ''}${allies.length > 0 ? allies.map((_, index) => `A${index + 1},`).join('') : ''} internal-link;`
)
```



