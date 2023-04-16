---
PromptInfo:
 promptId: GenSpellBook
 name: 💰 Generate Spell Book 🪙
 description: Generate a fantasy spell book. 
 author: JoshP
 tags: fantasy, ttrpg
 version: 0.0.1
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
## prompt: Spell Book Name
Prompt: Create a magical spell book. Please describe the book, how it looks, feels and smells. 

> [!warning]
> Provide a description of who owed this book previously. Format this section as a Obsidian.md Warning Callout. 

### Spells
Provide a table of random spells that are written in the book. The spells should be from Dungeons and Dragons 5e.  The table should include the name of the spell,  spell level, casting time,  components and school. The spell name should be formatted like this [[spell name]]. 
