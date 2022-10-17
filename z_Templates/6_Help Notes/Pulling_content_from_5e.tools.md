---
tags:
  - Pulling-content-from-5etools
  - 5etools
  - dnd
alias:
---
# Pulling content from 5e.tools

## Pulling Bestiaries into individual .md files.
*Run the following command in the browser console. It will split off each monster in the filtered view into individual .md files with the name of the monster in the file-name.
1. Go to 5e.tools, navigate to the Bestiary.
2. The following command will download every monster in the filtered window in individual markdown files. If you want to download only the monsters from, e.g., the Monster Manual, select filters and only select the Monster Manual.
3. Press Ctrl+Shift+I (if on firefox) (or the equivalent command for Chrome) to bring up the browser console, and paste in the following command:
```
bestiaryPage._list.visibleItems.map(it => bestiaryPage._dataList[it.ix]).map((mon, i) => setTimeout(() => RendererMarkdown.monster.pGetMarkdownDoc([mon]).then(it => DataUtil.userDownloadText(`${mon.name}.md`, it)), i * 50))
```

## Pulling books into .md files
1. go to a page which has some Markdown shite on it, e.g. [https://5etools-mirror-1.github.io/renderdemo.html](https://5etools-mirror-1.github.io/renderdemo.html "https://5etools-mirror-1.github.io/renderdemo.html"), and...
2. For *books* run the following command, replacing "DMG" and "dmg" and "DMG.md" with the desired abbreviations from https://github.com/5etools-mirror-1/5etools-mirror-1.github.io/tree/master/data/book :
```
Renderer.hover.pCacheAndGet("book.html", "DMG", "dmg").then(it => DataUtil.userDownloadText("DMG.md", it.bookData.data.map(chapter => RendererMarkdown.get().render(chapter)).join("\n---\n")))
```
3. For *adventures* run the following command, replacing "WBTW" and "wbtw" and "Wild Beyond the Witchlight MD.md" with the desired acronym from https://github.com/5etools-mirror-1/5etools-mirror-1.github.io/tree/master/data/adventure:
```
Renderer.hover.pCacheAndGet("adventure.html", "WBTW", "wbtw").then(it => DataUtil.userDownloadText("Wild Beyond the Witchlight MD.md", it.adventureData.data.map(chapter => RendererMarkdown.get().render(chapter)).join("\n---\n")))
```

<<<<<<< HEAD
### Book List

```
Renderer.hover.pCacheAndGet("adventure.html", "OOTA", "oota").then(it => DataUtil.userDownloadText("Out of the Abyss.md", it.adventureData.data.map(chapter => RendererMarkdown.get().render(chapter)).join("\n---\n")))
```

```
Renderer.hover.pCacheAndGet("adventure.html", "COS", "cos").then(it => DataUtil.userDownloadText("Curse of Strahd.md", it.adventureData.data.map(chapter => RendererMarkdown.get().render(chapter)).join("\n---\n")))
```

```
Renderer.hover.pCacheAndGet("adventure.html", "POTA", "pota").then(it => DataUtil.userDownloadText("Princes of the Apocalypse.md", it.adventureData.data.map(chapter => RendererMarkdown.get().render(chapter)).join("\n---\n")))
```

```
Renderer.hover.pCacheAndGet("adventure.html", "SKT", "skt").then(it => DataUtil.userDownloadText("Storm Kings Thunder.md", it.adventureData.data.map(chapter => RendererMarkdown.get().render(chapter)).join("\n---\n")))
```

```
Renderer.hover.pCacheAndGet("adventure.html", "TOA", "toa").then(it => DataUtil.userDownloadText("Tomb of Annihilation.md", it.adventureData.data.map(chapter => RendererMarkdown.get().render(chapter)).join("\n---\n")))
```
=======

>>>>>>> fd3894eb6e82a5a4c6ba3349c58c5bd05244354a

## Cleaning files
Occassionally there will be formatting errors. You can correct some of these using *Notepad++* and the "Find in Files" feature.  

<<<<<<< HEAD
### Regex To Clean Files
Use Sublime Text. 

**Fix The Images - Format 1**
Regular Expression = On
Find:  `\[img/adventure/.*/(.*)\]\((.*)\)$`
Replace:  `![[\1|right|300]]`

**Fix The Images - Format 2**
Regular Expression = On
Find:  `\[img/adventure/.*/(.*)\]`
Replace:  `![[\1|right|300]]`


=======
>>>>>>> fd3894eb6e82a5a4c6ba3349c58c5bd05244354a
# Use-cases
* *Easily call creatures using wikilinks* e.g.: The players will run into an [[Aarakocra]] 2x
* *Embed creatures using interrobang-wikilinks,* e.g.: This week we will run into two ![[Aarakocra]]
* *Cite to specific sections of adventures or modules*. E.g.: On this week's session, the players will travel to ![[_The Wild Beyond the Witchlight MD#Yon]]
* *Visualize the connections in a published module by creating backlinks and using graph view*.
* 