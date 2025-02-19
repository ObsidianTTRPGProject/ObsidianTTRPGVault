---
PromptInfo:
 promptId: ConvertSpell
 name: 🧙‍♂️ Convert Spell 🪄
 description: Convert spell to CLI format. 
 author: JoshP
 tags: fantasy, ttrpg
 version: 0.0.1
---
content: 
{{context}}
prompt:
rewrite the content to put it in the following template format. Respect the formatting of the original context.

---
obsidianUIMode: preview  
cssclasses: json5e-spell  
tags:
- ttrpg-cli/compendium/src/homebrew
- ttrpg-cli/spell/level/1
- ttrpg-cli/spell/school/evocation  
aliases: ["Fire Shuriken"]
---

# Fire Shuriken

_1st-level, Evocation_

- **Casting time:** 1 action
- **Range:** 120 feet
- **Components:** V, S
- **Duration:** Instantaneous

You create a shuriken of magical fire that hits a creature of your choice that you can see within range. This shuriken deals 1d6 points of fire damage to its target.

The target gains the burning condition.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more shuriken for each slot level above 1st.

_Source: Homebrew_
