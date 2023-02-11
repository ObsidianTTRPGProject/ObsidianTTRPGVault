---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/huge
- monster/type/plant
aliases: ["Bodytaker Plant"]
statblock: true
"name": "Bodytaker Plant"
"size": "Huge"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "92"
"hit_dice": "8d12 + 40"
"stats":
- !!int "18"
- !!int "8"
- !!int "20"
- !!int "14"
- !!int "14"
- !!int "18"
"speed": "walk 10 ft., climb 10 ft., swim 10 ft."
"damage_vulnerabilities": "poison"
"condition_immunities": "blinded, charmed, frightened, prone"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 12"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plant can see through and communicate telepathically with any of its\
    \ podlings within 10 miles of it."
  "name": "Podling Link"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the plant dies, it returns to life in the place where it died 1d12\
    \ months later, unless the ground where it took root is sown with salt or soaked\
    \ with poison."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plant doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plant makes three Vine Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 20 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). Until the grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The plant has four vines, each of which can grapple one target."
  "name": "Vine Lash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one Medium or smaller creature\
    \ [grappled](/rules/conditions.md#grappled) by the plant. Hit: 22 (4d8 + 4) acid\
    \ damage, and the target is pulled into the plant's space and enveloped by the\
    \ pod, and the grapple ends. While enveloped, the target is [restrained](/rules/conditions.md#restrained),\
    \ and it has total cover against attacks and effects originating outside the pod.\
    \ The enveloped target must also immediately succeed on a DC 16 Constitution saving\
    \ throw or be [stunned](/rules/conditions.md#stunned) by the plant's sapping enzymes\
    \ until it is removed from the pod or the plant dies. The enveloped target doesn't\
    \ require air and gains 1 level of [exhaustion](/rules/conditions.md#exhaustion)\
    \ for each hour it spends in the pod. If the target dies while enveloped, it immediately\
    \ emerges from the pod as a living podling, wearing or carrying all of the original\
    \ creature's equipment.\n\nAs an action, a creature within 5 feet of the bodytaker\
    \ plant that is outside the pod can open the pod and pull the target free with\
    \ a successful DC 15 Strength check. If the plant dies, the target is no longer\
    \ [restrained](/rules/conditions.md#restrained) and can escape from the pod by\
    \ spending 10 feet of movement, exiting [prone](/rules/conditions.md#prone). The\
    \ plant has one pod, which can envelop one creature at a time."
  "name": "Entrapping Pod"
"source":
- "VRGR"
name: Bodytaker Plant
image: "[[Bodytaker Plant.png]]"
---

# Bodytaker Plant

```statblock
"name": "Bodytaker Plant"
"size": "Huge"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "92"
"hit_dice": "8d12 + 40"
"stats":
- !!int "18"
- !!int "8"
- !!int "20"
- !!int "14"
- !!int "14"
- !!int "18"
"speed": "walk 10 ft., climb 10 ft., swim 10 ft."
"damage_vulnerabilities": "poison"
"condition_immunities": "blinded, charmed, frightened, prone"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 12"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plant can see through and communicate telepathically with any of its\
    \ podlings within 10 miles of it."
  "name": "Podling Link"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the plant dies, it returns to life in the place where it died 1d12\
    \ months later, unless the ground where it took root is sown with salt or soaked\
    \ with poison."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plant doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The plant makes three Vine Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 20 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). Until the grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The plant has four vines, each of which can grapple one target."
  "name": "Vine Lash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one Medium or smaller creature\
    \ [grappled](/rules/conditions.md#grappled) by the plant. Hit: 22 (4d8 + 4) acid\
    \ damage, and the target is pulled into the plant's space and enveloped by the\
    \ pod, and the grapple ends. While enveloped, the target is [restrained](/rules/conditions.md#restrained),\
    \ and it has total cover against attacks and effects originating outside the pod.\
    \ The enveloped target must also immediately succeed on a DC 16 Constitution saving\
    \ throw or be [stunned](/rules/conditions.md#stunned) by the plant's sapping enzymes\
    \ until it is removed from the pod or the plant dies. The enveloped target doesn't\
    \ require air and gains 1 level of [exhaustion](/rules/conditions.md#exhaustion)\
    \ for each hour it spends in the pod. If the target dies while enveloped, it immediately\
    \ emerges from the pod as a living podling, wearing or carrying all of the original\
    \ creature's equipment.\n\nAs an action, a creature within 5 feet of the bodytaker\
    \ plant that is outside the pod can open the pod and pull the target free with\
    \ a successful DC 15 Strength check. If the plant dies, the target is no longer\
    \ [restrained](/rules/conditions.md#restrained) and can escape from the pod by\
    \ spending 10 feet of movement, exiting [prone](/rules/conditions.md#prone). The\
    \ plant has one pod, which can envelop one creature at a time."
  "name": "Entrapping Pod"
"source":
- "VRGR"
"image": "[[Bodytaker Plant.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 226*

## Description

Whether hailing from the stars or sprouting from hidden depths, the malicious vegetation known as bodytaker plants seek to become the dominant form of life wherever they appear. These invasive organisms subvert whole societies by consuming individuals and replacing them with duplicates called podlings. Bodytaker plants view themselves as perfect organisms and seek to dominate the lands where they grow. To their minds, a world would be healthier and more efficient were they in control. Anyone who disagrees either lacks perspective or is fit to serve only as fertilizer.

A bodytaker plant roots deep, spreading near-invisible filaments through the soil. Should any of these fibers survive the plant's destruction, the bodytaker plant regrows after a matter of months. Salting or poisoning the soil where it grew destroys these filaments and prevents the plant from reappearing.