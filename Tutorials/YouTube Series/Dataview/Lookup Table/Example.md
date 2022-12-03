---
transportation: horse
speed: fast
---
# How to build lookup tables; advanced

The original  [[Transportation old]] note has an example the movement rates as a standard markdown table.

The problem is there is no way to read any of that data. So instead, use the frontmatter and build nested objects. This can be seen on the new [[Transportation]] note.

```yaml
movement:
    horse: {name: "Riding horse", base: 60, slow: 25, normal: 10, fast: 7}
    elephant: {name: "Elephant", base: 40, slow: 22, normal: 15, fast: 11}
    walking: {name: "Walking", base: 30, slow: 30, normal: 20, fast: 15}
```

The key "movement" has multiple objects; horse, elephant, and walking in this example. And each of those hold their own object with the values we'll need. They can be referenced using "dot notation"; `this.movement.horse.base`. So `this` dot `movement`, which is the frontmatter key, `horse`, the object key, and finally `base`, the key we're looking for.

But there is another way to reference objects. Instead of "dot notation", there is "bracket notation". So instead of `this.movement.horse.base` write `this.movement["horse"].base`.  Instead of the "dot", write the quoted key inside of brackets.

But that's still not a good way to do lookup as you need to type in the key as a string. But with dataview, we can lookup a value in frontmatter and return a string.  So in the example on [[Transportation]], I added `transportation: "horse"` to the frontmatter. Now in the note, instead of `"horse"`, we can use `this.transportation`. As seen on the final example of the note: `this.movement[this.transportation].base`.

Knowing all this, we can use some some dataviewjs (included) to output a markdown table that would match the markdown on the [[Transportation old]] page.

This forms the basis of lookup tables.

---

Now we move on to [[Current Party]]. This is where the party's mode of transportation will be stored.

```yaml
---
transportation: "horse"
speed: "slow"
---
```

For right now, just worry about the `transportation`. We'll get to `speed` later.

Once again, start with the simple `this.transportation`. It shows the object name, but we need to look up that information on another note to get the display name and speed values. For that, we use the WikiLink method to refer to another page's information. In this case `[[Transportation]]`.

`[[Transportation]].movement[this.transportation].name` = "`= [[Transportation]].movement[this.transportation].name`"

This gives us the display name of the mode of transportation set on this page. We can also look up any of the movement values: base rate, slow, medium, and fast speed .

Things are starting to come together. On to the final page...

---

We visit the city of [[Townsville]].

For testing, we can add the values we want on this note, but by the time we're done, they can be removed from everywhere except the party note.

So from previous examples we know that:

* We can reference a value on a different page by using WikiLink
	* `[[Current Party]].transportation`
* We can reference an object  by using bracket notation
	* `[[Transportation]].movement[this.transportation].fast`

So now, we combine the two; instead of the local `this.transportation`, use the global reference `[[Current Party]].transportation`

`[[Transportation]].movement[[[Current Party]].transportation].name`  = "Riding Horse"
`[[Current Party]].speed` = "slow"

Now one step further. Just like we changed from using `.horse` to `[this.transportation]` to `[[[Current Party]].speed]`, we can do the same for rate of speed.

`[[Transportation]].movement[[[Current Party]].transportation][[[Current Party]].speed]`

To break it all down:

`[[Transportation]]` is the look up note
`.movment[...]` will look up the movement object
`[[Current Party]].transportation`  returns the mode of transportation
`[[Current Party]].speed` returns the rate (slow, normal, fast)

This looks at the [[Transportation]] note, goes to the movement object, and gets the value of slow, normal, or fast based on the `speed` key on the party page.

The [[Townsville]] page has examples of getting all this at the end of the note.

---

Now you can get the display name, base movement speed, and the minutes per mile all from two values you can store on your party note where they belong.

These can be plugged into your distance formula.

Meaning you'll no have to go to the [[Transportation old]] page to look up the speeds to  plug in the numbers again.
