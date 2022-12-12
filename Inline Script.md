---
obsidianUIMode: preview
---

Shortcuts to help in playing tabletop rpgs, either group or solo.


__
__
```js
function roll(max) { return Math.trunc(Math.random() * max + 1); }
function aPick(a) { return a[roll(a.length)-1]; }
function aPickWeight(a, wIndex, theRoll)
{
	wIndex = wIndex || 1;
	theRoll = theRoll || roll(a.last()[wIndex]);
	for (let i = 0; i < a.length; i++)
	{
		if (a[i][wIndex] >= theRoll)
		{
			return a[i];
		}
	}
	return a.last();
}
```
__
Some useful functions


__
```
^tbl blacksmith$
```
__
```js
let armor = [
"| [[Padded Armor]] | Light Armor | 11 + Dex mod | 8 lb. | - | 5 gp. | 10 gp. | 4 gp. | 1.5 gp. | 1 gp. | 2 gp. | ",
"| [[Leather Armor]] | Light Armor | 11 + Dex mod | 10 lb. | - | 10 gp. | 20 gp. | 8 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Studded Leather]] | Light Armor | 12 + Dex mod | 13 lb. | - | 45 gp. | 36 gp. | 90 gp. | 11.25 gp. | 9 gp. | 18 gp. | ",
"| [[Hide Armor]] | Medium Armor | 12 + Dex mod (Max 2) | 12 lb. | - | 10 gp. | 20 gp. | 8 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Chain Shirt]] | Medium Armor | 13 + Dex mod (Max 2) | 20 lb. | - | 50 gp. | 40 gp. | 100 gp. | 12.5 gp. | 10 gp. | 20 gp. | ",
"| [[Scale Mail]] | Medium Armor | 14 + Dex mod (Max 2) | 45 lb. | - | 50 gp. | 40 gp. | 100 gp. | 12.5 gp. | 10 gp. | 20 gp. | ",
"| [[Breastplate]] | Medium Armor | 14 + Dex mod (Max 2) | 20 lb. | - | 400 gp. | 320 gp. | 800 gp. | 100 gp. | 80 gp. | 160 gp. | ",
"| [[Half Plate]] | Medium Armor | 15 + Dex mod (Max 2) | 40 lb. | - | 750 gp. | 600 gp. | 1500 gp. | 187.5 gp. | 150 gp. | 300 gp. | ",
"| [[Ring Mail]] | Heavy Armor | 14 | 40 lb. | - | 30 gp. | 24 gp. | 60 gp. | 7.5 gp. | 6 gp. | 12 gp. | ",
"| [[Chain Mail]] | Heavy Armor | 16 | 55 lb. | - | 75 gp. | 60 gp. | 150 gp. | 18.75 gp. | 15 gp. | 30 gp. | ",
"| [[Splint]] | Heavy Armor | 17 | 60 lb. | - | 200 gp. | 160 gp. | 400 gp. | 50 gp. | 40 gp. | 80 gp. | ",
"| [[Plate]] | Heavy Armor | 18 | 65 lb. | - | 1500 gp. | 1200 gp. | 3000 gp. | 375 gp. | 300 gp. | 600 gp. | ",
"| [[Shield]] | Shield | 2 | 6 lb. | - | 10 gp. | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | "
];
let weapon = [
"| [[Club]] | Simple Melee Weapon | 1d4 B | 2 lb. | - | 1 sp. | 80 cp. | 2 sp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Dagger]] | Simple Melee Weapon | 1d4 P | 1 lb. | Finesse Weapon, Thrown Rg(20/60) | 2 gp. | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Greatclub]] | Simple Melee Weapon | 1d8 B | 10 lb. | Two Handed | 2sp.  | 1 sp. 60cp. | 4 sp | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Handaxe]] | Simple Melee Weapon | 1d6 S | 2 lb. | Thrown Rg(20/60) | 5 gp. | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Javelin]] | Simple Melee Weapon | 1d6 P | 2 lb. | Thrown Rg(30/120) | 5 gp. | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Light Hammer]] | Simple Melee Weapon | 1d4 B | 2 lb. | Thrown Rg(20/60) | 2 gp. | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Mace]] | Simple Melee Weapon | 1d6 B | 4 lb. | - | 5 gp. | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Quarterstaff]] | Simple Melee Weapon | 1d6 B | 4 lb. | Versatile(1d8) | 2sp.  | 1 sp. 60cp. | 4 sp | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Sickle]] | Simple Melee Weapon | 1d4 S | 2 lb. | - | 1 gp. | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Spear]] | Simple Melee Weapon | 1d6 P | 3 lb. | Thrown Rg(20/60), Versatile(1d8) | 1 gp. | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Light Crossbow]] | Simple Ranged Weapons | 1d8 P | 5 lb. | Ammunition, Rg(80/320), Two Handed | 25 gp. | 20 gp. | 50 gp. | 6.25 gp. | 5 gp. | 10 gp. | ",
"| [[Dart]] | Simple Ranged Weapons | 1d4 P | 1/4 lb. | Finesse Weapon, Thrown Rg(20/60) | 1 gp. | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Shortbow]] | Simple Ranged Weapons | 1d6 P | 2 lb. | Ammunition, Rg(80/320), Two Handed | 25 gp. | 20 gp. | 50 gp. | 6.25 gp. | 5 gp. | 10 gp. | ",
"| [[Sling]] | Simple Ranged Weapons | 1d4 B | — | Ammunition, Rg(320) | 1 gp. | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Battleaxe]] | Martial Melee Weapons | 1d8 S | 4 lb. | Versatile(1d10) | 10 gp. | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Flail]] | Martial Melee Weapons | 1d8 B | 2 lb. | - | 10 gp. | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Glaive]] | Martial Melee Weapons | 1d10 S | 6 lb. | Reach, Two Handed | 20 gp. | 16 gp. | 40 gp. | 5 gp. | 4 gp. | 8 gp. | ",
"| [[Greataxe]] | Martial Melee Weapons | 1d12 S | 7 lb. | Two Handed | 30 gp. | 24 gp. | 60 gp. | 7.5 gp. | 6 gp. | 12 gp. | ",
"| [[Greatsword]] | Martial Melee Weapons | 2d6 S | 6 lb. | Two Handed | 50 gp. | 40 gp. | 100 gp. | 12.5 gp. | 10 gp. | 20 gp. | ",
"| [[Halberd]] | Martial Melee Weapons | 1d10 S | 6 lb. | Reach, Two Handed | 20 gp. | 16 gp. | 40 gp. | 5 gp. | 4 gp. | 8 gp. | ",
"| [[Lance]] | Martial Melee Weapons | 1d12 P | 6 lb. | Reach, Special | 10 gp. | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Longsword]] | Martial Melee Weapons | 1d8 S | 3 lb. | Versatile(1d10) | 15 gp. | 12 gp. | 30 gp. | 3.75 gp. | 3 gp. | 6 gp. | ",
"| [[Maul]] | Martial Melee Weapons | 2d6 B | 10 lb. | Two Handed | 10 gp. | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Morningstar]] | Martial Melee Weapons | 1d8 P | 4 lb. | - | 15 gp. | 12 gp. | 30 gp. | 3.75 gp. | 3 gp. | 6 gp. | ",
"| [[Pike]] | Martial Melee Weapons | 1d10 P | 18 lb. | Reach, Two Handed | 5 gp. | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Rapier]] | Martial Melee Weapons | 1d8 P | 2 lb. | Finesse Weapon | 25 gp. | 20 gp. | 50 gp. | 6.25 gp. | 5 gp. | 10 gp. | ",
"| [[Scimitar]] | Martial Melee Weapons | 1d6 S | 3 lb. | Finesse Weapon | 25 gp. | 20 gp. | 50 gp. | 6.25 gp. | 5 gp. | 10 gp. | ",
"| [[Shortsword]] | Martial Melee Weapons | 1d6 P | 2 lb. | Finesse Weapon | 10 gp. | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Trident]] | Martial Melee Weapons | 1d6 P | 4 lb. | Thrown Rg(20/60), Versatile(1d8) | 5 gp. | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[War pick]] | Martial Melee Weapons | 1d8 P | 2 lb. | - | 5 gp. | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Warhammer]] | Martial Melee Weapons | 1d8 B | 2 lb. | Versatile(1d10) | 15 gp. | 12 gp. | 30 gp. | 3.75 gp. | 3 gp. | 6 gp. | ",
"| [[Whip]] | Martial Melee Weapons | 1d4 S | 3 lb. | Finesse Weapon, Reach |  gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Blowgun]] | Martial Ranged Weapons | 1 P | 1 lb. | Ammunition, Rg(25/100) |  gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Hand Crossbow]] | Martial Ranged Weapons | 1d6 P | 3 lb. | Ammunition, Rg(30/120) | 75 gp. | 60 gp. | 150 gp. | 18.75 gp. | 15 gp. | 30 gp. | ",
"| [[Heavy Crossbow]] | Martial Ranged Weapons | 1d10 P | 18 lb. | Ammunition, Rg(100/400), Two Handed | 50 gp. | 40 gp. | 100 gp. | 12.5 gp. | 10 gp. | 20 gp. | ",
"| [[Longbow]] | Martial Ranged Weapons | 1d8 P | 2 lb. | Ammunition, Rg(150,600), Two Handed | 50 gp. | 40 gp. | 100 gp. | 12.5 gp. | 10 gp. | 20 gp. | ",
"| [[Net]] | Martial Ranged Weapons | — | 3 lb. | Special, Thrown Rg(5/15) |  gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | "
];
let mundaneitem = [
"| [[Abacus]] | Mundane Item | 0 | 2 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Acid (vial)]] | Mundane Item | 0 | 1 lb. | - | 25 gp | 20 gp. | 50 gp. | 6.25 gp. | 5 gp. | 10 gp. | ",
"| [[Alchemist's fire (flask)]] | Mundane Item | 0 | 1 lb. | - | 50 gp | 40 gp. | 100 gp. | 12.5 gp. | 10 gp. | 20 gp. | ",
"| [[Arrows (20)]] | Ammunition | 0 | 1 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Blowgun needles (50)]] | Ammunition | 0 | 1 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Crossbow bolts (20)]] | Ammunition | 0 | 1½ lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Sling bullets (20)]] | Ammunition | 0 | 1½ lb. | - | 4 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Antitoxin (vial)]] | Mundane Item | 0 | — | - | 50 gp | 40 gp. | 100 gp. | 12.5 gp. | 10 gp. | 20 gp. | ",
"| [[Crystal]] | Arcane focus | 0 | 1 lb. | - | 10 gp | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Orb]] | Arcane focus | 0 | 3 lb. | - | 20 gp | 16 gp. | 40 gp. | 5 gp. | 4 gp. | 8 gp. | ",
"| [[Rod]] | Arcane focus | 0 | 2 lb. | - | 10 gp | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Staff]] | Arcane focus | 0 | 4 lb. | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Wand]] | Arcane focus | 0 | 1 lb. | - | 10 gp | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Backpack]] | Mundane Item | 0 | 5 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Ball bearings (bag of 1,000)]] | Mundane Item | 0 | 2 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Barrel]] | Mundane Item | 0 | 70 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Basket]] | Mundane Item | 0 | 2 lb. | - | 4 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Bedroll]] | Mundane Item | 0 | 7 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Bell]] | Mundane Item | 0 | — | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Blanket]] | Mundane Item | 0 | 3 lb. | - | 5 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Block and tackle]] | Mundane Item | 0 | 5 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Book]] | Mundane Item | 0 | 5 lb. | - | 25 gp | 20 gp. | 50 gp. | 6.25 gp. | 5 gp. | 10 gp. | ",
"| [[Bottle, glass]] | Mundane Item | 0 | 2 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Bucket]] | Mundane Item | 0 | 2 lb. | - | 5 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Caltrops (bag of 20)]] | Mundane Item | 0 | 2 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Candle]] | Mundane Item | 0 | — | - | 1 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Case, crossbow bolt]] | Mundane Item | 0 | 1 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Case, map or scroll]] | Mundane Item | 0 | 1 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Chain (10 feet)]] | Mundane Item | 0 | 10 lb. | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Chalk (1 piece)]] | Mundane Item | 0 | — | - | 1 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Chest]] | Mundane Item | 0 | 25 lb. | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Climber's kit]] | Mundane Item | 0 | 12 lb. | - | 25 gp | 20 gp. | 50 gp. | 6.25 gp. | 5 gp. | 10 gp. | ",
"| [[Clothes, common]] | Mundane Item | 0 | 3 lb. | - | 5 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Clothes, costume]] | Mundane Item | 0 | 4 lb. | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Clothes, fine]] | Mundane Item | 0 | 6 lb. | - | 15 gp | 12 gp. | 30 gp. | 3.75 gp. | 3 gp. | 6 gp. | ",
"| [[Clothes, traveler's]] | Mundane Item | 0 | 4 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Component pouch]] | Mundane Item | 0 | 2 lb. | - | 25 gp | 20 gp. | 50 gp. | 6.25 gp. | 5 gp. | 10 gp. | ",
"| [[Crowbar]] | Mundane Item | 0 | 5 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Sprig of mistletoe]] | Druidic focus | 0 | — | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Totem]] | Druidic focus | 0 | — | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Wooden staff]] | Druidic focus | 0 | 4 lb. | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Yew wand]] | Druidic focus | 0 | 1 lb. | - | 10 gp | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Fishing tackle]] | Mundane Item | 0 | 4 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Flask or tankard]] | Mundane Item | 0 | 1 lb. | - | 2 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Grappling hook]] | Mundane Item | 0 | 4 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Hammer]] | Mundane Item | 0 | 3 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Hammer, sledge]] | Mundane Item | 0 | 10 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Healer's kit]] | Mundane Item | 0 | 3 lb. | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Amulet]] | Holy symbol | 0 | 1 lb. | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Emblem]] | Holy symbol | 0 | — | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Reliquary]] | Holy symbol | 0 | 2 lb. | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Holy water (flask)]] | Mundane Item | 0 | 1 lb. | - | 25 gp | 20 gp. | 50 gp. | 6.25 gp. | 5 gp. | 10 gp. | ",
"| [[Hourglass]] | Mundane Item | 0 | 1 lb. | - | 25 gp | 20 gp. | 50 gp. | 6.25 gp. | 5 gp. | 10 gp. | ",
"| [[Hunting trap]] | Mundane Item | 0 | 25 lb. | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Ink (1 ounce bottle)]] | Mundane Item | 0 | — | - | 10 gp | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Ink pen]] | Mundane Item | 0 | — | - | 2 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Jug or pitcher]] | Mundane Item | 0 | 4 lb. | - | 2 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Ladder (10-foot)]] | Mundane Item | 0 | 25 lb. | - | 1 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Lamp]] | Mundane Item | 0 | 1 lb. | - | 5 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Lantern, bullseye]] | Mundane Item | 0 | 2 lb. | - | 10 gp | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Lantern, hooded]] | Mundane Item | 0 | 2 lb. | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Lock]] | Mundane Item | 0 | 1 lb. | - | 10 gp | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Magnifying glass]] | Mundane Item | 0 | — | - | 100 gp | 80 gp. | 200 gp. | 25 gp. | 20 gp. | 40 gp. | ",
"| [[Manacles]] | Mundane Item | 0 | 6 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Mess kit]] | Mundane Item | 0 | 1 lb. | - | 2 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Mirror, steel]] | Mundane Item | 0 | 1/2 lb. | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Oil (flask)]] | Mundane Item | 0 | 1 lb. | - | 1 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Paper (one sheet)]] | Mundane Item | 0 | — | - | 2 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Parchment (one sheet)]] | Mundane Item | 0 | — | - | 1 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Perfume (vial)]] | Mundane Item | 0 | — | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Pick, miner's]] | Mundane Item | 0 | 10 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Piton]] | Mundane Item | 0 | 1/4 lb. | - | 5 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Poison, basic (vial)]] | Mundane Item | 0 | — | - | 100 gp | 80 gp. | 200 gp. | 25 gp. | 20 gp. | 40 gp. | ",
"| [[Pole (10-foot)]] | Mundane Item | 0 | 7 lb. | - | 5 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Pot, iron]] | Mundane Item | 0 | 10 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Potion of healing]] | Mundane Item | 0 | 1/2 lb. | - | 50 gp | 40 gp. | 100 gp. | 12.5 gp. | 10 gp. | 20 gp. | ",
"| [[Pouch]] | Mundane Item | 0 | 1 lb. | - | 5 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Quiver]] | Mundane Item | 0 | 1 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Ram, portable]] | Mundane Item | 0 | 35 lb. | - | 4 gp | 3.2 gp. | 8 gp. | 1 gp. | 0.8 gp. | 1.6 gp. | ",
"| [[Rations (1 day)]] | Mundane Item | 0 | 2 lb. | - | 5 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Robes]] | Mundane Item | 0 | 4 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Rope, hempen (50 feet)]] | Mundane Item | 0 | 10 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Rope, silk (50 feet)]] | Mundane Item | 0 | 5 lb. | - | 10 gp | 8 gp. | 20 gp. | 2.5 gp. | 2 gp. | 4 gp. | ",
"| [[Sack]] | Mundane Item | 0 | 1/2 lb. | - | 1 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Scale, merchant's]] | Mundane Item | 0 | 3 lb. | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Sealing wax]] | Mundane Item | 0 | — | - | 5 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Shovel]] | Mundane Item | 0 | 5 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Signal whistle]] | Mundane Item | 0 | — | - | 5 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Signet ring]] | Mundane Item | 0 | — | - | 5 gp | 4 gp. | 10 gp. | 1.25 gp. | 1 gp. | 2 gp. | ",
"| [[Soap]] | Mundane Item | 0 | — | - | 2 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Spellbook]] | Mundane Item | 0 | 3 lb. | - | 50 gp | 40 gp. | 100 gp. | 12.5 gp. | 10 gp. | 20 gp. | ",
"| [[Spikes, iron (10)]] | Mundane Item | 0 | 5 lb. | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Spyglass]] | Mundane Item | 0 | 1 lb. | - | 1,000 gp | 800 gp. | 2000 gp. | 250 gp. | 200 gp. | 400 gp. | ",
"| [[Tent, two-person]] | Mundane Item | 0 | 20 lb. | - | 2 gp | 1.6 gp. | 4 gp. | 0.5 gp. | 0.4 gp. | 0.8 gp. | ",
"| [[Tinderbox]] | Mundane Item | 0 | 1 lb. | - | 5 sp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Torch]] | Mundane Item | 0 | 1 lb. | - | 1 cp | 0 gp. | 0 gp. | 0 gp. | 0 gp. | 0 gp. | ",
"| [[Vial]] | Mundane Item | 0 | — | - | 1 gp | 0.8 gp. | 2 gp. | 0.25 gp. | 0.2 gp. | 0.4 gp. | ",
"| [[Waterskin]] | Mundane Item | 0 | 5 lb. (full) | - | 2 sp | 0 gp. | 0 gp. | 0 | 0 | 0 | "
];
return [ "#### Blacksmith Items For Sale\n ##### Armor \n\n", 
"| Item | Type | AC  | Weight | Property | Sell (Norm) | Sell (Low) | Sell (High) | Buy (Norm) | Buy (Low) | Buy (High) |  \n",
"| ---- | ---- | --- | ------ | -------- | ----------- | ---------- | ----------- | ---------- | --------- | ---------- | \n",
aPick(armor), "\n", 
aPick(armor), "\n",
aPick(armor), "\n",
aPick(armor), "\n",
aPick(armor), "\n\n",
"##### Weapons \n",
"| Item | Type | DMG  | Weight | Property | Sell (Norm) | Sell (Low) | Sell (High) | Buy (Norm) | Buy (Low) | Buy (High) |  \n",
"| ---- | ---- | --- | ------ | -------- | ----------- | ---------- | ----------- | ---------- | --------- | ---------- | \n",
aPick(weapon), "\n", 
aPick(weapon), "\n",
aPick(weapon), "\n",
aPick(weapon), "\n",
aPick(weapon), "\n", 
aPick(weapon), "\n",
aPick(weapon), "\n",
aPick(weapon), "\n",
aPick(weapon), "\n",
aPick(weapon), "\n\n",
"##### Mundane Items \n",
"| Item | Type | DMG  | Weight | Property | Sell (Norm) | Sell (Low) | Sell (High) | Buy (Norm) | Buy (Low) | Buy (High) |  \n",
"| ---- | ---- | --- | ------ | -------- | ----------- | ---------- | ----------- | ---------- | --------- | ---------- | \n",
aPick(mundaneitem), "\n", 
aPick(mundaneitem), "\n",
aPick(mundaneitem), "\n",
aPick(mundaneitem), "\n",
aPick(mundaneitem), "\n", 
aPick(mundaneitem), "\n",
aPick(mundaneitem), "\n",
aPick(mundaneitem), "\n",
aPick(mundaneitem), "\n",
aPick(mundaneitem), "\n\n",
	   ] 

```
__
tbl blacksmith - Random table: 5x Random Armor Items and 10x Random Weapons
