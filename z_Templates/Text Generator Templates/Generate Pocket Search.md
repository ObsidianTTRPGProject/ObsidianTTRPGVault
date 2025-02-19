---
PromptInfo:
 promptId: GenPocket
 name: 🪙 Generate Pocket Search 🦴
 description: Generate a Pocket Search. 
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
## You search the pockets
Prompt: Describe what the players find if they search the body of a humanoid. Consider they might search the pockets, a backpack, etc. What things might they find on a person in a fantasy setting based on Dungeons and Dragons 5e. Please list all of the items. Include a name of the item, it's weight and price. If the item if an official item from Dungeons and Dragons 5e then the name should be formatted like this [[item name]]. The pockets should normally contain common items, sometimes an uncommon item and very rarely a rare magic item. 

