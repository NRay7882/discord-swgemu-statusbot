# Discord Status Bot for SWGEmu

This is an app I chopped together for use in Discord, the user sends a trigger command (Ex. !status) and the bot sends a Direct Message to a user containing the latest SWGEmu Server status and details on where more information can be found.

## Usage
* This bot was tested using node 8.4.0 / npm 5.3.0
* [Create a Discord Bot](https://discordapp.com/developers/applications/me), if not already done. [(Instructions)](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)
* Fill in the API Key for your bot in config.json
* ````cd /discord-swgemu-statusbot && npm install axios cheerio discord.js````
* ````npm run statusbot````, you should receive a reply that the bot has logged in successfully
* The bot should now be logged in on your Discord server & is running. Try typing ````!status````

## Improvements
I encourage the SWGEmu Admins / Devs / Community members to fork this project and use it as a starting point for something better. Some suggestions:

* Remove the block used for scraping/parsing the website (lines 6-37 of bot.js) and replace with the API used on the site/IRC. This was done because I worked on this on my own. Once done, the array params in bot.js need updating and the axios/cheerio dependencies in package.json can be removed.
* As Discord population increases, it may be better posed to have this bot broadcast status updates to an exclusive status channel, rather than reply to individual users with the same info.
* In it's current state, there are unkept fail conditions, IE if the website is down. Some better exception handling could be useful if the above two steps are not implemented first.

## Links
Materials I used to put this together:

* [How To Use node.js, request and cheerio to Set Up Simple Web-Scraping](https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping)
* [Discord.js Docs](https://discord.js.org/#/docs/main/stable/general/welcome)
* [Message Embedding](https://anidiotsguide.gitbooks.io/discord-js-bot-guide/examples/using-embeds-in-messages.html)

## Changelog

* 1.0.0 (2017/08/17) - Initial release