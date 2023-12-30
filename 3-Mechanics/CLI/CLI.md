The CLI process is the quickest and easiest way to get your 5e notes into Markdown format. Stick your CLI notes in this folder. The folder icon is set to a LOCK because you should note move or change notes that are made with the CLI process. 

### DnD 5e
Follow this process: 
https://obsidianttrpgtutorials.com/Obsidian+TTRPG+Tutorials/Plugin+Tutorials/TTRPG-Convert-CLI/TTRPG-Convert-CLI+5e

#### Template
You need to include some basic sources for some of the content to work. The [[DnD5e-DM Screen]] for example. 
The following template can be used with [this tutorial](https://obsidianttrpgtutorials.com/Obsidian+TTRPG+Tutorials/Plugin+Tutorials/TTRPG-Convert-CLI/TTRPG-Convert-CLI+Templates) to obtain the required files. Please only use sources that you own. If you do not own this content you can purchase it from [DnD Beyond](https://www.dndbeyond.com/)

````
{
  "from" : [
    "PHB",
    "DMG",
    "MM"
  ],
  "paths" : {
    "compendium" : "/3-Mechanics/CLI/",
    "rules" : "/3-Mechanics/CLI/rules/"
  },
  "template" : {
    "background" : "ttrpg-convert-cli/examples/templates/tools5e/images-background2md.txt",
    "monster" : "ttrpg-convert-cli/examples/templates/tools5e/monster2md-yamlStatblock-body.txt",
    "item" : "ttrpg-convert-cli/examples/templates/tools5e/images-item2md.txt",
    "race" : "ttrpg-convert-cli/examples/templates/tools5e/images-race2md.txt",
    "spell" : "ttrpg-convert-cli/examples/templates/tools5e/images-spell2md.txt"
  },
  "useDiceRoller" : false,
  "tagPrefix" : "",
  "full-source" : {
    "book" : [
      "PHB",
	  "DMG",
	  "MM"
    ]
  }
}
````
