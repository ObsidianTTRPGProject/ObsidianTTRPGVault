---
PromptInfo:
 promptId: GenJobs
 name: 🐽 Generate Smell 👃
 description: Generate a smell. 
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

Prompt: We are playing Dungeons and Dragons. The party are about to encounter a monster or challenge. What does it smell like?  Provide a 1 or 2 line description. 

