
# Obsidian - Create Random Notes with ChatGPT Templates
Imagine a world where you don't need random tables anymore! Instead you can create templates that work with ChatGPT to generate random notes. Things like shops, random encounters, loot, and it can even work with the TTRPG system you are playing!

In this video we take another look at Text Generator except this time.... we dive into how to use Templates!

<iframe width="560" height="315" src="https://youtu.be/X9tlAZC6DSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Installation
Install the Text Generator plugin. 
Crate an  Open-AI account: https://auth0.openai.com/u/signup/
	Don't forget to set your personal billing limit: https://platform.openai.com/account/billing/limits
	- *If you don't use this your charges may go up to $120 a month!* 
Create an API Key: https://platform.openai.com/account/api-keys
Copy the API key for the next step. 

## Plugin Settings
In the Text Editor plugin settings check the following:
- API Key - Paste your API Key from here: https://platform.openai.com/account/api-keys
- Model - Set to gpt-3.5-turbo
- Max Tokens - I set to 650. Lower settings seem to result in incomplete notes. 
- Temperature - 0.8 - The higher this is the more random your results are.
- Prompts Templates Path - This is where you set which folder you are going to put the templates in. 
- Calculate-Tokens = Enabled
- Calculate-Tokens-For-Template = Enabled

## Hotkeys
Make sure you set a hotkey to allow you to trigger the templates. 

Settings > Hotkeys > Text Generator: Templates: Generate & Insert (I set this to Ctrl+U)

## Templates
Here are the templates used in this video. To install them you simply need to copy them into the folder that is setup in the Text Generator settings as the template folder.

### D&D 5e Templates
[[Generate Adventure Opportunity]] 
[[Generate Apothecary]] 
[[Generate Armory]] 
[[Generate Dungeon Room]] 
[[Generate Encounter]] 
[[Generate Fungus]] 
[[Generate General Store]] 
[[Generate Inn]] 
[[Generate Job Board]] 
[[Generate Pocket Search]] 
[[Generate Spell Book]] 
[[Generate Weaponry]] 
[[Generate Small Magic Shop]] 

### Mything GM Emulator Templates
[[PBE Games - Vehicle]] 
[[PBE Games - Magic 8 Bal]] 

### Tips for Creating Templates
Start with a prompt that sounds like it should do what you want. Then trigger the template and review the results. If something looks wrong, think about how you can explain it to ChatGPT to avoid doing that wrong thing again. Basically rinse and repeat this process until you start seeing results you like. 

You can highlight text when you trigger a template and the template can use this information. Simply reference it in your template as {{context}}. 