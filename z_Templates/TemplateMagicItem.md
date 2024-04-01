---
obsidianUIMode: preview
cssclasses:
  - json5e-item
tags:
  - item
aliases: 
SourceType: Magic Item
NoteIcon: magicitem
BookSource:
---

<% await tp.file.move("/3-Mechanics/Items/" + tp.file.title) %>

<%*
const hasTitle = !tp.file.title.startsWith("NewMagicItem");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Item Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>


# Item Name
*Melee Weapon, uncommon (requires attunement by a druid or ranger)*  

- **Damage**: 1d4 S
- **Properties**: [Light](/2-Mechanics/CLI/rules/item-properties.md#Light), Requires Attunement
- **Cost**: ⏤
- **Weight**: 2.0 lbs.

Description

*Source: SourceName*