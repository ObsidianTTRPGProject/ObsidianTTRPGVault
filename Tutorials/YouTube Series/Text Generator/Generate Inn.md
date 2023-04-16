---
PromptInfo:
 promptId: GenInn
 name: 🍻 Generate Inn 🛏️
 description: Generate a fantasy inn. 
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
## prompt: Inn Name
Prompt: Inn description

### Prompt: Inn Keeper Name 
Prompt: Provide a description of the inn keeper here. 

## Menu
Prompt: 2x Signature fantasy drink sold at this inn. Listed as a Markdown table. Include Name cost and description. 

Prompt: 4x meals that are sold at this inn. Listed as a Markdown table. Include Name cost and description. 

## Patrons
Prompt: Name and description of 5x patrons currently in the inn. Names should be markdown bold. 

### Rumors
Prompt: 1 interesting conversation the party might overhear.

