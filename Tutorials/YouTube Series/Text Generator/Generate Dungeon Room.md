---
PromptInfo:
 promptId: GenDungeonRoom
 name: 💀 Generate Dungeon Room 👻
 description: Generate a fantasy dungeon room. 
 author: JoshP
 tags: fantasy, ttrpg
 version: 0.0.1
---
## prompt: Dungeon Room
Prompt: Describe a room in a fantasy dungeon. What does the room look like, smell like, sound like? What is in this room? Are there any monsters in this room? What are the entrances to this room? 

> [!warning]
> If there are any secrets that the players should not know, please format them in this Obsidian.md callout Warning format. This might include traps or puzzles that the party might encounter. 

If there are monsters in the room then the encounter should be listed in the exact format provided below. Remove and or change the monsters used if appropriate. Always write the monsters name as a singular monster, plurals are not supported by the Initiative Tracker plugin. The monsters name must match exactly what is listed in the Monster Manual or rules. Do not add any additional text to the monsters name within the encounter code block. The encounter code block should be at the bottom with all descriptive text above it. 

```encounter
name: Example
creatures:
 - 3: Goblin
 - 1: Orc
```