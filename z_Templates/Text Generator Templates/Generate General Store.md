---
PromptInfo:
 promptId: GenGeneralStore
 name: 💰 Generate General Store 🪙
 description: Generate a fantasy store.
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
## Store Name
Create a fantasy store that sells mundane items. Please describe the store, how it looks and smells. 

### Items For Sale
Provide a table of random generic items that are sold in this shop. The items should be from Dungeons and Dragons 5e. You can reference a list of items from here https://www.dndbeyond.com/equipment. The table should include the name of the item, cost, weight, and notes. The item name should be formatted like this [[item name]]. 