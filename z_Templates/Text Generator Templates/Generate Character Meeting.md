---
PromptInfo:
 promptId: GenMeeting
 name: 🎲 Generate Character Meeting 💀
 description: Generate a Character Meeting. 
 author: ColinM
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

## A Meeting Place
Prompt: Describe a place in which the players find themselves. It might be an inn, a tavern, a jail, a market, or someplace else entirely. It should also present opportunity to go on an adventure. This might be a feature of the meeting place or perhaps an npc approaches them with an opportunity. It might be one opportunity or a number of opportunities. Describe the environment and any npcs they may encounter there.