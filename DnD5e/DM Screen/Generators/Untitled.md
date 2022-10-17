🎲 20 /D20 




#### Help - General
Here are shortcuts for help with __Text Expander JS__.
- __help__ - Shows this text.
- __ref settings__ - Describes shortcuts defined in the Settings.
- __ref all__ - Describes _all_ shortcuts (except for the ones in this list).
- For help on specific shortcut-files, __help__ and __ref__ can be followed by:
    - state
    - lists
    - varnotes
    - mythicgme
    - une
    - adventurecrafter
    - rpgtools
    - clips
    - arrows
    - lipsum
    - support




#### Reference - All shortcuts
_Use shortcut __help all__ for general help._
- __hi__ - Expands into "Hello! How are you?".  A simple shortcut to see if Text Expander JS is running.
- __date__ - Expands into the current, local date.
- __time__ - Expands into the current, local time.
- __datetime__ - Expands into the current, local date and time.
- __d{max}__ - A dice roller shortcut.  Expands into "🎲 {roll result} /D{max}".  {max} is a required parameter: a positive integer giving the size of dice to roll.
    - Examples - d3, d20, d57, d999
- __fd{max}__ - Same as d{max}, but with fancy formatting.
- __{count}d{max}{add}__ - Same as d{max}, but with optional {count} and {add} parameters.  {count} is a positive integer giving the number of dice to roll and add together.  {add} is "+" or "-" followed by a positive integer giving the amount to adjust the result by.
    - Examples - d100, 3d20, d10+5, 3d6+6"
- __reset state__ - Clear all state.
- __state__ - Expands to a string representing the current state (for session saving).
- __state {state}__ - Sets the current state based on {state}: a string created with the parameterless "state" shortcut.
- __reset lists__ - Clear all lists.
***
- __lists__ - Show all list and all items for each list.
- __lists list {list name}__ - Show all items in the list {list name}.
- __lists pick {list name}__ - Get a random item from the list {list name}.
- __lists add {list name} {item}__ - Add {item} to the list {list name}.  Allows duplicate items.
    - Can only add to basic lists and combo lists that contain basic lists.
- __lists remove {list name} {item}__ - Remove an instance of {item} from the list {list name}.
    - Can only remove from basic lists and combo lists that contain basic lists.
- __lists removelist {list name}__ - Remove the entire list {list name}.
- __lists addfolder {list name} {folder}__ - Create a folder-list named {list name} that is linked to the folder {folder}.  A "folder-list" is a list who's items are the names of the notes in the linked folder.
- __lists addcombo {list name} {sub list 1} {sub list 2}...__ - Create a combo-list named {list name} that is linked to the sublists given as {sub list 1}, {sub list 2}, etc.  A "combo-list" is a list who's items are all of the items of its linked sublists.
- __reset varnotes__ - Removes all stored varnotes from the session state.
***
- __varnotes__ - Lists all varnotes and the files they are connected to.
- __varnotes vars {varnote name}__ - Lists all the variables for the varnote named {varnote name} (a required name property).
- __varnotes add {varnote name} {file address}__ - Adds a varnote named {varnote name} (a required name parameter) that is attached to the file at {file address} (a required file address parameter).
- __varnotes remove {varnote name}__ - Removes the varnote {varnote name} (a required name parameter).
- __varnotes get {varnote name} {variable name}__ - Gets the value of the variable named {variable name} (a required name parameter) in the varnote named {varnote name} (a required name parameter).
        Alternative shortcut: __vn {varnote name} {variable name}__
- __varnotes set {varnote name} {variable name} {value}__ - Sets the variable named {variable name} (a required name parameter) to {value} (a required text parameter), in the varnote named {varnote name} (a required name parameter).
        Alternative shortcut: __vnset {varnote name} {variable name} {value}__
- __varnotes refresh__ - Get the latest variables from all varnotes.
- __varnotes refresh {varnote name}__ - Pull the variables from varnote {varnote name} (a required "name" parameter).
- __reset mythicgme__ - Reset mythic state to defaults and displays scene heading.
        Alternative shortcut: __reset mythic__.
***
- __fate {odds}__ - Make a fate check based on {odds}: an optional value defaulting to 0 (50/50).  It can be from -4 (impossible) to 6 (has to be).  It can also be the specific text of the odds, such as "impossible", "sure thing", etc.
        Alternative shortcut: __f {odds}__.
- __scene__ - Show the current scene.
- __scene {chaosAdjust}__ - Shift the chaos value by {chaosAdjust} (1, 0 or -1), then increment the current scene and run a scene check.
***
- __event__ - Make an event check.
- __meaning__ - Roll on the meaning tables.
***
- __chaos__ - Show the current chaos value.
- __chaos--__ - Decrease the chaos value by 1 (minimum of 1).
- __chaos++__ - Increase the chaos value by 1 (maximum of 9).
- __chaos={value}__ - Set the chaos value to {value}, an integer from 1 to 9.
- __une {randomness} {relationship to pc} {demeanor}__ - Runs "une character" and "une interact" together.  {randomness} is an optional value for "une character".  {relationship to pc} and {demeanor} are optional values for "une interact".
***
- __une character {randomness}__ - Runs "identity", "power" and "motive" together.  {randomness} is an optional value for "power".
- __une interact {relationship to pc} {demeanor}__ - Runs "mood", "bearing" and "focus" together.  {relationship to pc} is an optional value for "mood".  {demeanor} is an optional value for "bearing".
***
- __une identity__ - Generates a 2-word description for a character.
- __une power {randomness}__ - Generates a character's power level relative to pc's power level, based on {randomness}: an optional number from 1 (order), to 5 (chaos), defaulting to 3 (standard).
- __une motive__ - Generates three 2-word descriptions for a character's motivations.
***
- __une mood {relationship to pc}__ - Generates a character's willingness to socialize for this interaction, based on {relationship to pc}: an optional number from 1 (love), to 7 (hate), defaulting to 4 (neutral).
- __une bearing {demeanor}__ - Generate a character's attitude for this interaction, based on {demeanor}: an optional number from 1-8, defaulting to random and meaning one of the following:
    1 - sceming       2 - insane       3 - friendly          4 - hostile
    5 - inquisitive    6 - knowing    7 - mysterious    8 - prejudiced
- __une focus__ - Generate a character's primary interest for this interaction.
- __reset adventurecrafter__ - Reset adventurecrafter state to defaults.
***
- __turning point__ - Get a list of five plot points to represent a major milestone in a plotline.
- __plot point__ - Get a single plot point, generated from the plot points table.
***
- __themes pick__ - Pick a weighted random theme, as per the Adventure Crafter rules.
- __themes__ - Show the ordered list of themes.
- __themes fill__ - Fills the remaining open theme slots with random themes.
- __themes roll__ - Fills the next open theme slot with a random theme.
- __themes add {theme id}__ - If {theme id} (an optional number from 1 to 5) is NOT included, this shortcut shows the options for {theme id}.  If {theme id} IS included, this shortcut fills the next open theme slot with the theme of {theme id}.  {theme id} can be one of these options: 1 (Action), 2 (Tension), 3 (Mystery), 4 (Social), 5 (Personal).
- __themes clear__ - Clear all theme slots.
***
- __ac chars gen__ - Generate a new character description, as per the Adventure Crafter rules.
***
- __ac chars pick__ - Pick a random char, as per the Adventure Crafter rules.
- __ac chars__ - List the character entries.
- __ac chars add {character}__ - Add the given {character} (required text) to the list of character entries.
- __ac chars dupe {character index}__ - If {character index} (an optional, positive integer) is NOT included, this shortcut shows the options for {character index}.  If {character index} IS included, this shortcut duplicates the character that is indexed by {character index}.
- __ac chars remove {character index}__ - If {character index} (an optional, positive integer) is NOT included, this shortcut shows the options for {character index}.  If {character index} IS included, this shortcut removes one entry of the character that is indexed by {character index}.
***
- __ac plots pick__ - Pick a random plotline, as per the Adventure Crafter rules.
- __ac plots__ - List the plotline entries.
- __ac plots add {plotline}__ - Add the given {plotline} (required text) to the list of plotline entries.
- __ac plots dupe {plotline index}__ - If {plotline index} (an optional, positive integer) is NOT included, this shortcut shows the options for {plotline index}.  If {plotline index} IS included, this shortcut duplicates the plotline that is indexed by {plotline index}.
- __ac plots remove {plotline index}__ - If {plotline index} (an optional, positive integer) is NOT included, this shortcut shows the options for {plotline index}.  If {plotline index} IS included, this shortcut removes one entry of the plotline that is indexed by {plotline index}.
- __tbl twist__ - Random table: a plot twist.  [Source](https://jvhouse.xyz/plot-twist-situations).
- __reset clips__ - Remove all clips.
- __clips__ - Lists all stored clips.
- __clips get {name}__ - Expands to the value stored in clip {name} (a required name string).
        Alternative shortcut: __cg {name}__.
- __clips add {name} {value}__ - Creates a clip named {name} (a required name string) that stores the string {value} (a required text).
- __clips expansion {name}__ - Creates a clip named {name} (a required name string) that stores the previous expansion.
- __clips remove {name}__ - Removes the clip named {name} (a required name string).
- __-<wbr>>__ - → (RIGHT arrow).
        Alternative shortcut: __arrow right__.
- __<<wbr>-__ - ← (LEFT arrow).
        Alternative shortcut: __arrow left__.
- __-^__ - ↑ (UP arrow).
        Alternative shortcut: __arrow up__.
- __-v__ - ↓ (DOWN arrow).
        Alternative shortcut: __arrow down__.
***
- __|>__ - ▶ (RIGHT triangle).
        Alternative shortcut: __tri right__.
- __<|__ - ◀ (LEFT triangle).
        Alternative shortcut: __tri left__.
- __|^__ - ▲ (UP triangle).
        Alternative shortcut: __tri up__.
- __|v__ - ▼ (DOWN triangle).
        Alternative shortcut: __tri down__.
***
- __=<wbr>>__ - ⇒ (RIGHT double-arrow).
        Alternative shortcut: __arrow dbl right__.
- __<<wbr>=__ - ⇐ (LEFT double-arrow).
        Alternative shortcut: __arrow dbl left__.
- __=^__ - ⇑ (UP double-arrow).
        Alternative shortcut: __arrow dbl up__.
- __=v__ - ⇓ (DOWN double-arrow).
        Alternative shortcut: __arrow dbl down__.
***
- __<<wbr>-<wbr>>__ - ↔ (LEFT / RIGHT arrow).
        Alternative shortcut: __arrow leftright__.
- __^-v__ - ↕ (UP / DOWN arrow).
        Alternative shortcut: __arrow updown__.
- __<<wbr>=<wbr>>__ - ⇔ (LEFT / RIGHT double arrow).
        Alternative shortcut: __arrow dbl leftright__.
- __^=v__ - ⇕ (UP / DOWN double arrow).
        Alternative shortcut: __arrow dbtl updown__.
- __<//>__ - ⇄ (LEFT arrow & RIGHT arrow).
        Alternative shortcut: __arrow left right__.
- __^//v__ - ⇅ (UP arrow & DOWN arrow).
        Alternative shortcut: __arrow up down__.
***
- __-^>__ - ↗ (RIGHT / UP arrow).
        Alternative shortcut: __arrow rightup__.
- __-v>__ - ↘ (RIGHT / DOWN arrow).
        Alternative shortcut: __arrow rightdown__.
- __<^-__ - ↖ (LEFT / UP arrow).
        Alternative shortcut: __arrow leftup__.
- __<v-__ - ↙ (LEFT / DOWN arrow).
        Alternative shortcut: __arrow leftdown__.
***
- __u>__ - ↪ (RIGHT curve arrow).
        Alternative shortcut: __arrow curve right__.
- __<u__ - ↩ (LEFT curve arrow).
        Alternative shortcut: __arrow curve left__.
- __c>__ - ↻ (CLOCKWISE arrow).
        Alternative shortcut: __arrow clock__.
- __<c__ - ↺ (COUNTER-CLOCKWISE arrow).
        Alternative shortcut: __arrow cclock__.
- __~>__ - ↝ (RIGHT wavy arrow).
        Alternative shortcut: __arrow wavy right__.
- __<~__ - ↜ (LEFT wavy arrow).
        Alternative shortcut: __arrow wavy left__.
- __lipsum {paragraph count}__ - Generates a lorem ipsum text with {paragraph count} paragraphs.  If {paragraph count} is omitted, it defaults to 1.
- __rngseed {seed}__ - Sets Math.random to a custom random number generator with a seed of {seed}, a non-zero, positive integer.  Useful for testing.  If {seed} is omitted, the random number generator is returned to javascript default.

For Sale:

| Item | Cost | Weight | 
| ---- | ---- | ------ |
| [[Chain Mail]] | 55gp | 40lb |
| [[Splint]] | 200gp | 60lb |
| [[Breastplate]] | 400gp | 20lb |
| [[Chain Shirt]] | 50gp | 20lb |
| [[Chain Shirt]] | 50gp | 20lb |

CORRUPTED / TWISTED / INSANE - DELAYED / TIMED / WAIT

For Sale:

| Item | Cost | Weight | 
| ---- | ---- | ------ |
| [[Ring Mail]] | 300gp | 40lb |
| [[Chain Shirt]] | 50gp | 20lb |
| [[Chain Mail]] | 55gp | 40lb |
| [[Ring Mail]] | 300gp | 40lb |
| [[Chain Shirt]] | 50gp | 20lb |

BROKEN / DAMAGED / INJURED - SURPRISING / ALTERED / UNEXPECTED






#### Reference - Rpgtools
_Use shortcut __help rpgtools__ for general help._
- __tbl twist__ - Random table: a plot twist.  [Source](https://jvhouse.xyz/plot-twist-situations).

Twist:
INFORMATION - BROKEN / DAMAGED / INJURED

#### Reference - Lists
_Use shortcut __help lists__ for general help._
- __reset lists__ - Clear all lists.
***
- __lists__ - Show all list and all items for each list.
- __lists list {list name}__ - Show all items in the list {list name}.
- __lists pick {list name}__ - Get a random item from the list {list name}.
- __lists add {list name} {item}__ - Add {item} to the list {list name}.  Allows duplicate items.
    - Can only add to basic lists and combo lists that contain basic lists.
- __lists remove {list name} {item}__ - Remove an instance of {item} from the list {list name}.
    - Can only remove from basic lists and combo lists that contain basic lists.
- __lists removelist {list name}__ - Remove the entire list {list name}.
- __lists addfolder {list name} {folder}__ - Create a folder-list named {list name} that is linked to the folder {folder}.  A "folder-list" is a list who's items are the names of the notes in the linked folder.
- __lists addcombo {list name} {sub list 1} {sub list 2}...__ - Create a combo-list named {list name} that is linked to the sublists given as {sub list 1}, {sub list 2}, etc.  A "combo-list" is a list who's items are all of the items of its linked sublists.

Twist:
INFORMATION - UNPREPARED / UNARMED / UNEXPECTED

For Sale:
[[Half Plate]] - SICK / HAZARDOUS / POISON / TOXIC




Turning point not generated.  Not all theme slots filled.


Lists:
- character_dupes
    - NONE
- characters    _(combo: pcs,npcs,character_dupes)_
    - NONE
- npcs
    - NONE
- pcs
    - NONE
- plotline_dupes
    - NONE
- plotlines    _(combo: threads,plotline_dupes)_
    - NONE
- threads
    - NONE
---
#### Potions For Sale

| Potion | Rarity | Type  | Price |  
| ---- | ---- | --- | ------ | 
| [[Potion of Resistance]] | uncommon | potion | 250 gp | 
| [[Poisoner's Kit]] | none | adventuring gear, poison (ingested) | 250 gp | 
| [[Potion of Growth]] | rare | potion | 2500 gp | 
| [[Potion of Psychic Resistance]] | uncommon | potion | 250 gp | 
| [[Midnight Tears]] | none | adventuring gear, poison (inhaled) | 500 gp | 
| [[Potion of Force Resistance]] | rare | potion | 2500 gp | 
| [[Potion of Flying]] | rare | potion | 0 | 
| [[Potion of Giant Size]] | rare | potion | 0 | 
| [[Potion of Fire Breath]] | rare | potion | 0 | 
| [[Potion of Water Breathing]] | very rare | potion | 3000 gp | 
