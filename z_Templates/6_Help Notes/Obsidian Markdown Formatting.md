---
---
# But Markdown Is Scary

Something I hear a lot from new users to Obsidian is that they don't know Markdown and they are afraid they wont be able to learn how to use it. 

Let me just start with this... `Markdown is very easy to both use and learn`

## Markdown Basics

If you have come from a tool like Word or OneNote, you are probably used to seeing a toolbar that has all your options for changing the Font, Bold, Underline, Italics, etc. 

Obsidian does not have this bar which sometimes creates panic in new users. People are naturally afraid of change. 
Obsidian does not have this bar though... because you don't need it. 

> [!info]+ What Is Markdown
> The non-technical way to explain Markdown... It's basically a way to take plain-text and make it look pretty. 
> It lets you apply Themes on your plain text notes!

<br>

> [!tip]+ If you still need a format bar
> Then you can install them via the community plugins. 
> [Editing Toolbar](obsidian://show-plugin?id=editing-toolbar) or [Markdown Formatting Assistant](obsidian://show-plugin?id=obsidian-markdown-formatting-assistant-plugin) will add some toolbar options. They might help you learn Markdown initially while you find you need them less and less and you gain confidence. 

### Headings

Headings are very easy to do. Simply type ``# space heading name`. 
You can add more #'s to change the size of the Heading. 
Headings can also fold under each other. That means you can expand/fold a heading and all content under that heading leaver will be impacted. If you fold a level 1 heading that has level 2 and 3 headings/content under it, then all of the level 1, 23 and 3 content will fold with it. 

> [!info]+ Example
> ![[Obsidian_RrEKxtUpcc.gif]]

Try by copying the following into a note. 

```markdown
# This is a heading 1
You can type your content under the headings

## This is a heading 2
### This is a heading 3 
#### This is a heading 4
##### This is a heading 5
###### This is a heading 6
```

### Basic Text Formatting

#### Bold
You can **BOLD** text simply by highlighting it and pressing Ctrl+B. 
Alternatively you can make text **BOLD** by typing ** at the start and the end of the text you wish to **BOLD**. 

```markdown
**This text will be bold**
__This will also be bold__
```

#### Italics
You can *ITALICS* text simply by highlighting it and pressing Ctrl+I. 
Alternatively you can make text *ITALICS* by typing * at the start and the end of the text you wish to *ITALICS*. 

```markdown
*This text will be italic*
_This will also be italic_
```


#### Underline
Underline is not supported by Markdown. 
Sorry to be the one to tell you this. I know it hurts. 

> [!tip]- HTML Underline
> If you absolutely can't live without Underline, then Obsidian also supports HTML so you can do this:
> `Example: This is some <u>underlined</u> text.`
> Anything between the <u> and </u> will be underlined. 

#### Strike Through

```markdown
Any word wrapped with two tildes (like ~~this~~) will appear crossed out.
```

Any word wrapped with two tildes (like ~~this~~) will appear crossed out.

#### Highlights

```markdown
Use two equal signs to ==highlight text==.
```

Use two equal signs to ==highlight text==.

### Links

Linking to other notes can be done very easily. 
`Example: [[NoteName]]`

If you want to show a custom name for the link you can add a pipe `|` after the NoteName and type the new name for the link. 
`Example: [[NoteName|NewLinkName]]`

You can also link to a sub-section of a note. Sections are created using # Headings. 
`Example: [[NoteName#HeadingName]]`

### External links

Markdown style links can be used to refer to either external objects, such as web pages, or an internal page or image.

```markdown
http://obsidian.md - automatic!
[Obsidian](http://obsidian.md)
```

http://obsidian.md - automatic!
[Obsidian](http://obsidian.md)

You can link to YouTube videos like this also. This will render the YouTube video in side your note. 

```markdown
![](Youtube.com)
```

### Embeds
Instead of having just a link to a note; you can embed it in your note. 
`Example: ![[NoteName]]`

This works with sub-sections too. 
`Example: ![[NoteName#HeadingName]]`

Obsidian recognizes the following file formats right now:

1. Markdown files: `md`;
1. Image files: `png`, `jpg`, `jpeg`, `gif`, `bmp`, `svg`;
1. Audio files: `mp3`, `webm`, `wav`, `m4a`, `ogg`, `3gp`, `flac`;
1. Video files: `mp4`, `webm`, `ogv`;
1. PDF files: `pdf`.

All these types of files can be embedded in a note.

## Images
See [[How To - Add Images]] 

## Lists

```markdown
- Item 1
- Item 2
  - Item 2a
  - Item 2b

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```
- Item 1
- Item 2
  - Item 2a
  - Item 2b

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

## Block Quotes

```markdown
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961

```

> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961


## Task List

```markdown
- [x] #tags, [links](), **formatting** supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [?] this is also a complete item (works with every character)
- [ ] this is an incomplete item
- [ ] tasks can be clicked in Preview to be checked off
```

- [x] #tags, [links](), **formatting** supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [?] this is also a complete item (works with every character)
- [ ] this is an incomplete item
- [ ] tasks can be clicked in Preview to be checked off

## Tables

Tables in Markdown are not fantastic. This is the honest truth. They work but please go and install the [Advanced Tables](obsidian://show-plugin?id=table-editor-obsidian) plugin to make your life easier. 

This is an example table. 

| Column 1 | Column 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   | 

Which is written in Markdown like this. 

\| Column 1 \| Column 2 \|
\| -------- \| -------- \|
\| Cell 1   \| Cell 2   \|
\| Cell 3   \| Cell 4   \| 

## Comments

Use \%\% to enclose comments, which will be parsed as Markdown, but will not show up in the preview.
This can be handy for leaving yourself notes. I use these to comment on how or why I did something. 

```markdown
Here is some inline comments: %%You can't see this text%% (Can't see it)

Here is a block comment:
%%
It can span
multiple lines
%%
```

Here is some inline comments: %%You can't see this text%% (Can't see it)

Here is a block comment:
%%
It can span
multiple lines
%%
