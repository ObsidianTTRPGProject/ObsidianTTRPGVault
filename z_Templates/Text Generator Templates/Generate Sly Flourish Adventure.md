---
PromptInfo:
 promptId: GenFlourish
 name: 🎲 Generate Sly Flourish Adventure 💀
 description: Generate a an adventure using Sly Flourish Template
 author: mclearc
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


## Strong Start

Description of your strong start.

## Scenes

* Small scene description.
*
*
*
*

## Secrets and Clues

* Secret description
*
*
*
*
*
*
*
*
*

## Fantastic Locations

**Location**: aspect, aspect, aspect

**Location**: aspect, aspect, aspect

**Location**: aspect, aspect, aspect

**Location**: aspect, aspect, aspect

## Important NPCs

**Name.** Description

**Name.** Description

**Name.** Description

**Name.** Description

## Potential Monsters

* Name
*
*
*

## Potential Treasure

* Description
*
*
* 