---
PromptInfo:
 promptId: GenJobs
 name: 🍻 Generate Job Board 🕶️
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
## An Opportunity
Prompt: Describe a job board that might be found in a fantasy town. Create a random list of opportunities that are currently displayed on the board. Provide 1 to 10 opportunities on the board. You should list the opportunity name, a short description, the contact npc and a reward is suitable. Include a range of different opportunities from easy to challenging. Format the list in Markdown, headings should be bold, reward should be in italics. 

