---
Variable: Value
---
# Formatting your notes

Obsidian is a Markdown-based note-taking and knowledge base app.

We currently support the formats below:

## Internal linking

```markdown
Link to a page: [[0. DM Screen]].
```

Link to a page: [[0. DM Screen]].

## Embeds

Embed another file (read more about Embed files). Here's an embedded section:
```markdown
![[Skills#Acrobatics]]
```

![[Skills#Acrobatics]]

## Headers

```markdown
# This is a heading 1
## This is a heading 2
### This is a heading 3 
#### This is a heading 4
##### This is a heading 5
###### This is a heading 6
```

# This is a heading 1
## This is a heading 2
### This is a heading 3 
#### This is a heading 4
##### This is a heading 5
###### This is a heading 6

## Emphasis

```markdown
*This text will be italic*
_This will also be italic_
```
*This text will be italic*
_This will also be italic_

```markdown
**This text will be bold**
__This will also be bold__
```

**This text will be bold**
__This will also be bold__

```markdown
_You **can** combine them_
```

_You **can** combine them_

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

## Images

```markdown
![[Owl.jpg|Owl on a tree branch]]
```

![[Owl.jpg|Owl on a tree branch]]

### Resizing Images

Example of this above image resized to 100 pixels wide:


```markdown
![[Owl.jpg|Owl on a tree branch|100]]
```

![[Owl.jpg|Owl on a tree branch|100]]

## Accepted File Formats

Obsidian recognizes the following file formats right now:

1. Markdown files: `md`;
1. Image files: `png`, `jpg`, `jpeg`, `gif`, `bmp`, `svg`;
1. Audio files: `mp3`, `webm`, `wav`, `m4a`, `ogg`, `3gp`, `flac`;
1. Video files: `mp4`, `webm`, `ogv`;
1. PDF files: `pdf`.

All these types of files can be embedded in a note.

## External links

Markdown style links can be used to refer to either external objects, such as web pages, or an internal page or image.

```markdown
http://obsidian.md - automatic!
[Obsidian](http://obsidian.md)
```

http://obsidian.md - automatic!
[Obsidian](http://obsidian.md)

## Block Quotes

```markdown
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961

```

> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961

## Inline Code

```markdown
Text inside `backticks` on a line will be formatted like code.

```

Text inside `backticks` on a line will be formatted like code.

## Code blocks
Code blocks
Syntax highlight is supported with the language specified after the first set of backticks. We use prismjs for syntax highlighting, a list of supported languages can be found at their site

```markdown

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
```
```

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

```markdown
    Text indented with 4 spaces is formatted like this, and will also look like a code block in preview. 
```

    Text indented with 4 spaces is formatted like this, and will also look like a code block in preview.

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

To be continued

## Strike Through

```markdown
Any word wrapped with two tildes (like ~~this~~) will appear crossed out.
```

Any word wrapped with two tildes (like ~~this~~) will appear crossed out.

## Highlights

```markdown
Use two equal signs to ==highlight text==.
```

Use two equal signs to ==highlight text==.

## Footnotes

```markdown
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: meaningful!

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: meaningful!

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

```markdown
You can also use inline footnotes. ^[notice that the carat goes outside of the brackets on this one.]

```

You can also use inline footnotes. ^[notice that the carat goes outside of the brackets on this one.]

## Comments

Use \%\% to enclose comments, which will be parsed as Markdown, but will not show up in the preview.

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

## Obsidian Developer Notes

We strive for maximum capability without breaking any existing formats, therefore we use a slightly unorthodox combination of flavors of markdown. It is broadly CommonMark, with the addition of some functionality from GitHub Flavored Markdown (GFM), some latex support, and our chosen embed syntax.

These examples were taken and modified from the [Obsidian Help Site](https://help.obsidian.md/How+to/Format+your+notes).
