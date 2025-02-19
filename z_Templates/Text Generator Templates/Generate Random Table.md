---
PromptInfo:
 promptId: GenRandTable
 name: 🎲 Generate Random Table 🎲
 description: Generate a Random Table
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
## prompt: Random Table Name
Prompt: Create a random table for Dungeons and Dragons 5e. The theme of the table should be the Prompt. The table should be in the Markdown format. 