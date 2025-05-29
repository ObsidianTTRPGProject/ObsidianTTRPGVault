---
aliases:
  - Bob
tags:
  - Category/Player
Player: Bob
Role: Player
level: 11
hp: 60
max_hp: 71
ac: 66
modifier: 2
pasperc: 13
Status: Active
PlayerKnownLanguages:
  - Celestial
  - Common
  - Dwarvish
faction_standing:
  Faction Name 1: 1
  Faction Name 3: 3
char_race: Human
char_class:
char_gender: Male
char_status: Alive
char_age: Young Adult
char_items:
  - "[[Locate the Eye Ball|Locate the Eye Ball]]"
  - "[[z_Templates/World Builder Templates/Template-Quest.md|Template-Quest]]"
Connected_Quests: []
Connected_Groups: []
parents:
  - Father
  - Mother
partner:
  - Partner
children:
  - Child
enemies:
  - Enemy
allies:
  - Friend
siblings:
  - Brother
  - Sister
obsidianUIMode: preview
MyContainer:
---

> [!NOTE|div-m] Player Name:  `Placeholder`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![[Pasted image 20250502075737.png]]
>
>> [!div-m|no-title] Place Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General),
>> option(2, 🧙Description),
>> option(3, ⚙️Configure),
>> option(4, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh480|10]
>>> >[!div-m|no-title]
>>> > ![[#General|no-h clean]]
>>> 
>>> >[!div-m|no-title]
>>> > ![[#Description|no-h clean]]
>>> 
>>> >[!div-m|no-title]
>>> > ![[#Configure|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🤹Abilities+Skills),
> option(2, 💪Traits),
> option(3, 📖Spell Book),
> option(4, ⚔️Inventory),
> option(5, 🔗Connections),
> option(6, 🧑‍🤝‍🧑Relationships),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Skills|no-h clean]]
> >
> > >[!div-m|no-title]
> > > ![[#Traits|no-h1 clean]]
> >
> > >[!div-m|no-title]
> > > ![[#Spell Book|no-h1 clean]]
> >
> > > ![[#Inventory|no-h1 clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Connections|no-h1 clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Relationships|no-h1 clean]]

---

# General


```dataviewjs
const lvl = dv.current().level;
const ac = dv.current().ac;
const mod = dv.current().modifier;

// Initiative string with plus sign if positive
const initStr = (typeof mod === "number" && mod > 0) ? `+${mod}` : `${mod}`;

// Mage Armor = base AC + modifier
const mageArmor = (typeof ac === "number" && typeof mod === "number") ? ac + mod : ac;

// build badges array
const badges = [
  { label: "Level",           value: lvl        },
  { label: "Initiative",      value: initStr    },
  { label: "Spell Save",      value: 14         },
  { label: "AC",              value: ac         },
  { label: "AC (Mage Armor)", value: mageArmor  }
];

// serialize to a ```badges block
let out = "```badges\nitems:\n";
for (let b of badges) {
  const v = typeof b.value === "number" ? b.value : `'${b.value}'`;
  out += `  - label: ${b.label}\n    value: ${v}\n`;
}
out += "```";

// render it
dv.paragraph(out);
```

```dataviewjs
// grab your hp value
const hp = dv.current().hp;

// (optional) if you want hitdice dynamic, you could pull them similarly:
// const dice = dv.current().hitdice?.dice || "d6";
// const diceValue = dv.current().hitdice?.value || 3;
// here we'll hard-code them as in your example:
const dice = "d6";
const diceValue = 3;

// build the healthpoints YAML block
let out = "```healthpoints\n";
out += `state_key: din_health\n`;
out += `health: ${hp}\n`;
out += `hitdice:\n`;
out += `  dice: ${dice}\n`;
out += `  value: ${diceValue}\n`;
out += "```";

// render it into your note
dv.paragraph(out);
```

# Description

This is the persons description. 

# Configure

| Stat     | Value                        |
| -------- | ---------------------------- |
| Status   | `INPUT[inlineSelect(option(Alive), option(Dead)):char_status]`                             |
| Race     |   `INPUT[template-Race][:char_race]`                            |
| Class    | `INPUT[inlineSelect(option(Infant), option(Child), option(Teenager), option(Young Adult), option(Adult), option(Elder)):char_class]`                              |
| Level    | `INPUT[number:level]`        |
| Gender   | `INPUT[inlineSelect(option(Male), option(Female), option(Other)):char_gender]`                              |
| Age      | `INPUT[inlineSelect(option(Infant), option(Child), option(Teenager), option(Young Adult), option(Adult), option(Elder)):char_age]`                              |
| HP       | `INPUT[number:hp]`           |
| Max HP   | `INPUT[number:player_maxhp]` |
| AC       | `INPUT[number:ac]`           |
| Modifier | `INPUT[number:modifier]`     |

# GM Notes

Make notes of what you need to track in the town here. 

# Skills

```ability
abilities:
  strength: 9
  dexterity: 18
  constitution: 16
  intelligence: 19
  wisdom: 12
  charisma: 10

proficiencies:
  - intelligence
  - wisdom
```

<br>

```skills
proficiencies:
  - arcana
  - deception
  - history
  - insight
  - investigation
```


# Traits

### Luck Points
```consumable
label: ""
state_key: din_luck_points
uses: 3
```

You have inexplicable luck that seems to kick in at just the right moment.

**You have 3 luck points.** Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points **after you roll the die, but before the outcome is determined**. You choose which of the d20s is used for the attack roll, ability check, or saving throw.

You can also spend one luck point when an **attack roll** is made against you. Roll a d20 and then choose whether the attack uses the attacker's roll or yours.

If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled.

You regain your expended luck points when you finish a long rest.

### Arcane Recovery
```consumable
label: ""
state_key: din_arcane_recovery
uses: 1
```

You have learned to regain some of your magical energy by studying your spell book. Once per day when you finish a **short rest**, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or **less than half your wizard level** (rounded up), and none of the slots can be 6th level or higher.

For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.

### Researcher

When you attempt to learn or recall a piece of lore, **if you do not know that information, you often know where and from whom you can obtain it**.

Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature.

Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.

# Spell Book

## Spell Slots

```consumable
items:
  - label: "Level 1"
    state_key: din_spells_1
    uses: 4
  - label: "Level 2"
    state_key: din_spell_2
    uses: 2
```

### Fey Touched

```consumable
items:
  - label: "Misty Step"
    state_key: din_fey_touched_misty_step
    uses: 1
  - label: "Silvery Barbs"
    state_key: din_fey_touched_silvery_barbs
    uses: 1
```

> [!NOTE]- Prepared
> List Spells Here

> [!NOTE]+ Known
> List Spells Here

# Inventory

The following items belong to `= this.file.name`.

Items: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):char_items]`

#### Ring of Investigation
```consumable
label: ""
state_key: din_items__ring_of_investigation
uses: 3
```

_May the ability to see also provide you with a clear vision" Grants +1 to Investigation Roles_

# Connections
Is the person linked to any groups or quests?

Quests: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):Connected_Quests]`

Groups: `INPUT[inlineListSuggester(optionQuery(#Category/Group)):Connected_Groups]`

# Relationships

List important relationships here. 

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

> [!NOTE]- Relationship Config - Enter name of People Notes
> `BUTTON[button_person]` Nodes will link to notes of the same name. 
> 
> | Parents    | Partner    | Children |
> | --- | --- | --- |
> | `INPUT[list:parents]`    | `INPUT[list:partner]`    | `INPUT[list:children]`  |
> 
> | Siblings    | Enemies    | Allies |
> | --- | --- | --- |
> | `INPUT[list:siblings]`    | `INPUT[list:enemies]`    | `INPUT[list:allies]`  |



```dataviewjs
const player = dv.current();
const factions = dv.pages('"3-Mechanics/Guilds and Groups"');
let tableData = [];
for (let faction of factions) {
    let factionName = faction.faction;
    let playerStanding = player.faction_standing?.[factionName] || 0;

    // Ensure benefits is treated as an array
    let benefitsList = Array.isArray(faction.benefits) ? faction.benefits : [];

    // Filter benefits the player qualifies for
    let qualifiedBenefits = benefitsList
        .filter(b => playerStanding >= b.standing)
        .map(b => b.reward)
        .join(", "); 

    let primaryContact = faction.primary_contact || "No contact set";

    tableData.push([factionName, playerStanding, qualifiedBenefits || "No benefits yet", primaryContact]);
}
dv.table(["Faction", "Your Standing", "Benefits", "Primary Contact"], tableData);
```