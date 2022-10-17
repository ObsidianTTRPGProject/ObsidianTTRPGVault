---
---
# RegEX - Helpful Code

- [!] NOTE TO SELF: THIS STUFF IS ***DANGEROUS - BE CAREFUL*** - TEST IT BEFORE YOU PRESS GO ON SOMETHING YOU MIGHT LATER REGRET

This is Regex Code that can do some really useful stuff. It's not a template but should instead be used in a RegEx Text Editor such as [Sublime Text](https://www.sublimetext.com/).

All code is presented as a FIND and then a REPLACE. Use this in a replace function within the text editor.

## Helpful Sites To Learn RegEx
[https://regexr.com/](https://regexr.com/)
[https://www.regextester.com/](https://www.regextester.com/)
[https://ihateregex.io/playground/](https://ihateregex.io/playground/)

#### Add Monster Encounter Blocks

```
FIND: ^# (.*)$((\n(.*))*###.*\n.*\n\.*\[\[.*)
REPLACE: # ${1}${2}\n\n```enounter\nname: Encounter\ncreatures:/n - 1: ${1}\n```
```

#### Remove *.por References From Monsters

```
FIND: ^### [a-z,A-Z, ,0-9]*\n\!\[\[.*.por\]\].*$
REPLACE:
```

#### Remove whitespace characters at the end of lines/String

| -       | Single Space | 3+ Spaces | 1 and 3+ Spaces    | All    |
| ------- | ------------ | --------- | ------------------ | ------ |
| Find    | `\s{1}$`     | `\s{3,}$` | `(\s{1}\|\s{3,})$` | `\s+$` |
| Replace |              |           |                    |        |

#### Remove Multiple repeated line breaks

```
FIND: ^(\n)+
REPLACE:\n
```

#### Used to clean Adventure Files
^p[0-9][0-9][0-9]\n.*\]

^\[–\]
