---
PromptInfo:
 promptId: GenAdventure
 name: 🎲 Generate Adventure 💀
 description: Generate a Job Board. 
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

## Job Board
Prompt: Describe something interesting that the players might find that presents them with opportunity to go on an adventure. This might be a simple job board or perhaps an npc approaches them with an opportunity. It might be one opportunity or a number of opportunities. Describe the environment and any npcs they encounter. 


