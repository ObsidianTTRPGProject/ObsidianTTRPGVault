---
PromptInfo:
 promptId: GenNPC
 name: 🎲 Generate NPC 🛡️
 description: Generate a fantasy store that sells armor. 
 author: JoshP
 tags: fantasy, ttrpg
 version: 0.0.1
---

---
AssociatedGroup: Prompt: What Guild Are they In
Gender: Prompt: What is their Gender
Race: Prompt: What is their Race
Age: Prompt: What is their Age
Class: Prompt: What is their Class
Alignment: Prompt: What is their Alignment
Location: Prompt: Where do they live
AssociatedGroup: Prompt: Are they in a guild or group
NoteIcon: npc
---

{{#if selection}}
Use this Information for flavoring the Prompt:
*Main Focus*
{{title}} ({{type}}:
{{#each sum}}
- {{this}}
{{/each}}
{{selection}}
*Less important things, but maybe helpful in Context*:
{{#each children}}
{{#if frontmatter.sum}}
{{this.basename}}:
{{#each frontmatter.sum}}
- {{this}}
{{/each}}
{{/if}}
{{/each}}
Use the above information JUST FOR CONTEXT. Come up with new Ideas inspired by the things above, but do not just iterate things from above
{{/if}}

> [!infobox]
> # `=this.file.name`
> ![[z_Assets/Misc/ImagePlaceholder.png|cover hsmall]]
> [[z_Assets/Misc/ImagePlaceholder.png|Show To Players]]
> ###### Basic Information
> Type |  Stat |
> ---|---|
> Home | `=this.Location` |
> Group | `=this.AssociatedGroup` |
> Sex | `=this.gender` |
> Race | `=this.race` |
> Age | `=this.age` |
> Condition | Healthy |
> ###### Rules Info
> Type |  Stat |
> ---|---|
> Alignment | `=this.alignment` |
> Class | `=this.class` |
> Character Role | `=this.character-role` |


# Prompt: NPC Name

Prompt: Add description here

> [!info] Statblock
> ```statblock
> name: Individual
> monster: Commoner
> columns: 1
> ```

```encounter-table
name: Individual
creatures:
 - 1: Commoner
```

