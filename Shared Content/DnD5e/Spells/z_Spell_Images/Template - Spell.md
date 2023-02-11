---
Name: {{{name}}}
Level: {{level}}
CastingTime: {{#each time}}{{number}} {{capitalize unit}}{{/each}}
Ritual: {{#if meta.ritual}}true{{else}}false{{/if}}
Range: {{range.distance.amount}} {{capitalize range.distance.type}}
Area: {{capitalize range.type}}
Components: {{#with components}}{{#each this}}{{table @key "s" "Somatic" "v" "Verbal" "m" "Material"}}{{table components "true" ""}}{{#unless @last}}, {{/unless}}{{/each}}{{#if m.text}} ({{{m.text}}}){{else}} {{#if m}}({{{m}}}){{/if}}{{/if}}{{/with}}
Duration: {{#each duration}}{{capitalize type}} {{duration.amount}} {{duration.type}}{{#unless @last}}, {{/unless}}{{/each}}
School: {{table school "C" "Conjuration" "A" "Abjuration" "T" "Transmutation" "E" "Enchantment" "N" "Necromancy" "D" "Divination" "I" "Illusion" "V" "Evocation"}}
AttackSave: {{table savingThrow "strength" "Strength" "wisdom" "Wisdom" "dexterity" "Dexterity" "charisma" "Charisma" "constitution" "Constitution" "intelligence" "Intelligence"}}
DamageEffect: {{damageInflict}}
Classes: {{#each classes.fromClassList}}{{name}}{{#unless @last}}, {{/unless}}{{/each}}
SpellSource: {{source}}
Page: {{page}}
---

> [!infobox|right]
> # {{{name}}}
> ![[{{table school "C" "Conjuration" "A" "Abjuration" "T" "Transmutation" "E" "Enchantment" "N" "Necromancy" "D" "Divination" "I" "Illusion" "V" "Evocation"}}.png|cover hsmall]]
> ###### Stats
> Type |  Stat |
> ---|---|
> Level | `=this.Level` |
> Casting Time | `=this.CastingTime` {{#if meta.ritual}} [[ritual\|(r)]] {{/if}}|
> Range | `=this.Range` |
> Area | `=this.Area` |
> Components | `=this.Components` |
> Duration | `=this.Duration` |
> School | `=this.School` |
> Attack/Save | `=this.AttackSave` |
> Damage/Effect | `=this.DamageEffect` |
> Classes | `=this.Classes` |

# {{{name}}}
{{! triple braces prevent html escaping e.g. &#x27; for a '}}
{{! Output the non-nested entries first, prevents [object Object]}}
{{! We have to unless out any other data types (items, rows) here}}
{{#each entries}}
{{#if this.rows}}
{{#each this.colLabels}}
{{#if @first}}| {{/if}} {{{replacereg this "{@damage (.+?)}" "`dice: $1|avg` ($1)"}}} |{{/each}}
{{! Create the header separators |--|}}
{{#each this.colLabels}}
{{#if @first}}|--{{/if}}{{#unless @first}}{{#unless @last}}|--{{/unless}}{{/unless}}{{#if @last}}|--|{{/if}}{{/each}}
{{! Create the actual rows}}
{{#each this.rows}}
{{#if this.[0].roll.exact}}
| {{{this.[0].roll.exact}}} | {{{replacereg this.[1] "{@filter" ""}}} |
{{else if this.[0].roll.min}}
| {{{this.[0].roll.min}}}-{{{this.[0].roll.max}}} | {{{replacereg this.[1] "{@filter" ""}}} 
{{else if this.[0].roll}}
| {{{this.[0].roll}}} | {{{replacereg this.[1] "{@filter" ""}}} |
{{else}}
{{#each this}}
{{#if @first}}| {{/if}} {{{replacereg this "\|" "\|"}}} |{{/each}}
{{/if}}
{{/each}}

{{else if this.items}}
{{#each this.items}}
- {{{replacereg this "{@damage (.+?)}" "`dice: $1|avg` ($1)"}}}
{{/each}}

{{else if this.entries}}
## {{{this.name}}}
{{{replacereg this.entries.[0] "{@damage (.+?)}" "`dice: $1|avg` ($1)"}}}

{{#if this.entries.[1].items}}
{{#each this.entries.[1].items}}
 - {{{replacereg this "{@damage (.+?)}" "`dice: $1|avg` ($1)"}}}
{{/each}}
{{/if}}

{{else}}
{{{replacereg this "{@damage (.+?)}" "`dice: $1|avg` ($1)"}}}

{{/if}}
{{/each}}

{{! Handle entriesHigherLevel}}
{{#if entriesHigherLevel}}{{#each entriesHigherLevel}}{{{replacereg entries "{@scale(?:damage|dice) .+?\|.+?\|(.+?)}" "$1"}}} 
{{/each}}{{/if}}