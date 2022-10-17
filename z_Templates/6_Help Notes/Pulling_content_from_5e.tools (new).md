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


For **homebrew** do the following:
```js
Renderer.hover.pCacheAndGet(UrlUtil.PG_BOOK, "SaF", "saf")
    .then(data => {
        MiscUtil.getWalker({isNoModification: true}).walk(data.bookData.data, {object: (obj) => {delete obj.outro}}) // hack to remove `outro`s from tables, since these currently break the renderer :^)
        DataUtil.userDownloadText("SaF.md", data.bookData.data.map(chapter => RendererMarkdown.get().render(chapter)).join("\n\n---\n\n"))
    })
```

## Pulling Spell Lists into individual .md files.
*Run the following command in the browser console. It will split off each monster in the filtered view into individual .md files with the name of the monster in the file-name.
1. Go to 5e.tools, navigate to the Spells.
2. The following command will download every spell in the filtered window in individual markdown files.
3. Press Ctrl+Shift+I (if on firefox) (or the equivalent command for Chrome) to bring up the browser console, and paste in the following command:
```
spellsPage._list.visibleItems.map(it => spellsPage._dataList[it.ix]).map((spell, i) => setTimeout(() => DataUtil.userDownloadText(`${spell.name}.md`, RendererMarkdown.get().render({type: "dataSpell", dataSpell: spell})), i * 50))

```


## Pulling Vehicles into individal .md files:
*Run the following command in the browser console. It will split off each vehicle in the filtered view into individual .md files with the name of the monster in the file-name.
1. Go to 5e.tools, navigate to the Vehicles.
2. The following command will download every vehicle in the filtered window in individual markdown files.
3. Press Ctrl+Shift+I (if on firefox) (or the equivalent command for Chrome) to bring up the browser console, and paste in the following command:
```
vehiclesPage._list.visibleItems.map(it => vehiclesPage._dataList[it.ix]).map((vehicle, i) => setTimeout(() => DataUtil.userDownloadText(`${vehicle.name}.md`, RendererMarkdown.get().render({type: "dataVehicle", dataVehicle: vehicle})), i * 50))
```

# Cleaning files
Occassionally there will be formatting errors. You can correct some of these using *Notepad++* and the "Find in Files" feature.  
* e.g., for Spells, you may want to change the ### headers to ## or #. 


# Macro to export Foundry character to Markdown
*remember to select a token!*

```
function save(filename, data) {
    const blob = new Blob([data], {type: 'text/markdown'});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else{
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
    }
}

function dashAsSpaces(input) {
    return input.replace(" ", "-");
}

let data = "---\n";

function line(newData, ...input) {
    if(input === null || input === undefined) {
        input = [];
    }
    for(let i = 0; i < input.length; i++) {
        let replacement = input[i];
        if(replacement === null || replacement === undefined) {
            replacement = "";
        }
        newData = newData.replace("{" + (i+1) + "}", replacement);
    }
    data += newData + "\n";
}

let token = _token;
if(_token === null) {
 return;
}

let actor = token.actor;
if(actor === null || actor === undefined) {
    return;
}

line("aliases:", null);
line("tags:\"dnd\",\"character-sheet-snapshot\",\"{1}\"", dashAsSpaces(actor.data.name));
line("-", null)
line("Name:{1}", actor.data.name);
line("Race:{1}", actor.data.data.details.race);
line("Gender:{1}", actor.data.data.details.gender);
line("Age:{1}", actor.data.data.details.age);
line("Body_Type:{1}", "?");
line("Height:{1}", actor.data.data.details.height);
line("Hair:{1}", actor.data.data.details.hair);
line("Eyes:{1}", actor.data.data.details.eyes);
line("Skin:{1}", actor.data.data.details.skin);
line("Association:{1}", "?");
line("Alignment:{1}", actor.data.data.details.alignment);
line("---", "");
line("> [!infobox]", "");
line("> |Type|Description|", "");
line("> |---|---|", "");
line("> |Race| `=this.Race`", "");
line("> |Gender| `=this.Gender`", "");
line("> |Age| `=this.Age`", "");
line("> |[[Body type]]| `=this.Body_Type`", "");
line("> |Height| `=this.Height`", "");
line("> |Hair| `=this.Hair`", "");
line("> |Eyes| `=this.Eyes`", "");
line("> |Skin| `=this.Skin`", "");
line("> |Association| `=this.Association`", "");
line("> |[[Alignment]]| `=this.Alignment`", "");
line("> ", "");
line("# `=this.file.name`", "");
line("### At Glance", "");
line("### Personality", "");
line("### Occupation", "");
line("### Goal(s)", "");
line("### Want(s)", "");
line("### Need(s)", "");
line("### Relationship(s)", "");
line("## Background:", "");
line("## Stats", "");
line("|           | HP  | STR | DEX | CON | INT | WIS | CHA |", "");
line("| --------- | --- | --- | --- | --- | --- | --- | --- |", "");
line("| Stats     |  {1}  |  {2}  |  {3}  |  {4}  |  {5}  |  {6}  |  {7}  |", actor.data.data.attributes.hp.max, actor.data.data.abilities.str.value,  actor.data.data.abilities.dex.value,  actor.data.data.abilities.con.value,  actor.data.data.abilities.int.value,  actor.data.data.abilities.wis.value,  actor.data.data.abilities.cha.value);
line("| AC/ Saves |  {1}  |  {2}  |  {3}  |  {4}  |  {5}  |  {6}  |  {7}  |", actor.data.data.attributes.ac.armor, actor.data.data.abilities.str.save,  actor.data.data.abilities.dex.save,  actor.data.data.abilities.con.save,  actor.data.data.abilities.int.save,  actor.data.data.abilities.wis.save,  actor.data.data.abilities.cha.save);
line("|           |     |     |     |     |     |     |     |", "");

save(actor.data.name + ".md", data);
```
![[VPmTE1dW]]


# Add Art to Bestiary
Templater:
```
![[/img/[BOOKDIRECTORYCHANGE]]/<%tp.file.title%>.png]]

```
### Using Templater to add link to Img on Monster Note
**Big thanks to AB1908 from the Discord** 
Modify the path on line 2, save as a .js file in a folder you specify in the templater settings 
```
<%* const tfileArray = app.vault.getAbstractFileByPath("/").children.filter(t=>t.extension == "md"); await Promise.all(tfileArray.map(async t=> { let [firstLine, ...restOfLines] = (await app.vault.read(t)).split("\n"); let imageEmbedText = `![[/img/Book/${t.basename}.png]]`; let newContents = [firstLine, imageEmbedText, ...restOfLines].join("\n"); await app.vault.modify(t, newContents); })); %>
```
