---
Name: {{name}}
Level: {{level}}
CastingTime: {{#each time}} {{number}} {{capitalize unit}} {{/each}}
Range: {{range.distance.amount}} {{capitalize range.distance.type}}
Area: {{capitalize range.type}}
Components: {{#each components}}{{table @key "s" "Somatic" "v" "Verbal" "m" "Material"}}{{table components "true" "" components components}}, {{/each}}
Duration: {{#each duration}} {{capitalize type}} {{duration.amount}} {{duration.type}}{{/each}}
School: {{table school "C" "Conjuration" "A" "Abjuration" "T" "Transmutation" "E" "Enchantment" "N" "Necromancy" "D" "Divination" "I" "Illusion" "V" "Evocation"}}
AttackSave: {{table savingThrow "strength" "Strength" "wisdom" "Wisdom" "dexterity" "Dexterity" "charisma" "Charisma" "constitution" "Constitution" "intelligence" "Intelligence"}}
DamageEffect: {{damageInflict}}
Classes: {{#each classes.fromClassList}}{{name}}, {{/each}}
SpellSource: {{source}}
Page: {{page}}
---

{{date}}

> [!infobox|right]
> # `=this.file.name`
> ![[{{table school "C" "Conjuration" "A" "Abjuration" "T" "Transmutation" "E" "Enchantment" "N" "Necromancy" "D" "Divination" "I" "Illusion" "V" "Evocation"}}.png|cover hsmall]]
> ###### Stats
> Type |  Stat |
> ---|---|
> Level | `=this.Level` |
> Casting Time | `=this.CastingTime` |
> Range | `=this.Range` |
> Area | `=this.Area` |
> Components | `=this.Components` |
> Duration | `=this.Duration` |
> School | `=this.School` |
> Attack/Save | `=this.AttackSave` |
> Damage/Effect | `=this.DamageEffect` |
> Classes | `=this.Classes` |

# `=this.file.name`
{{#each entries}}{{this}}

{{/each}}

{{#each entries}}
{{name}}
{{entries}} 

{{/each}}

{{#each entriesHigherLevel}}{{entries}} {{/each}}