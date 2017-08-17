// Don't forget to add params to your config.json
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// THIS ENTIRE BLOCK SHOULD BE REPLACED WITH THE STATUS API INTEGRATION////////
// Also package.json dependencies axios & cheerio need to be removed///////////
///////////////////////////////////////////////////////////////////////////////
// This parses the swgemu homepage to fetch the status/////////////////////////
///////////////////////////////////////////////////////////////////////////////
// required packages for fetch/parse///////////////////////////////////////////
let axios = require('axios');//////////////////////////////////////////////////
let cheerio = require('cheerio');//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Set params, empty arrays////////////////////////////////////////////////////
let servernamearr = [];////////////////////////////////////////////////////////
let serverstatusarr = [];//////////////////////////////////////////////////////
let serverpoparr = [];/////////////////////////////////////////////////////////
let serverpopmaxarr = [];//////////////////////////////////////////////////////
let servermaxcaparr = [];//////////////////////////////////////////////////////
let serveruptimearr = [];//////////////////////////////////////////////////////
let serverupdatearr = [];//////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Filter fetch to status, send element data to arrays/////////////////////////
axios.get(config.sourceurl).then( (response) => {//////////////////////////////
	let $ = cheerio.load(response.data);///////////////////////////////////////
	$('div', '.serverStatus').each(function(i, elm) {//////////////////////////
		servernamearr[i] = $(elm).children().first().text(),///////////////////
		serverstatusarr[i] = $(elm).children().eq(1).first().text(),///////////
		serverpoparr[i] = $(elm).children().eq(2).first().text(),//////////////
		serverpopmaxarr[i] = $(elm).children().eq(3).first().text(),///////////
		servermaxcaparr[i] = $(elm).children().eq(4).first().text(),///////////
		serveruptimearr[i] = $(elm).children().eq(5).first().text(),///////////
		serverupdatearr[i] = $(elm).children().eq(6).first().text()////////////
	});////////////////////////////////////////////////////////////////////////
})/////////////////////////////////////////////////////////////////////////////
// THIS ENTIRE BLOCK SHOULD BE REPLACED WITH THE STATUS API INTEGRATION////////

// Log Connection by Bot
client.on('ready', () => {
	console.log(`Bot has logged in successfully: ${client.user.tag}`);
});

// Discord Reply Event, Ignores Bots
// If the API replaces the fetch/parse block, update the arr variables
client.on('message', msg => {
	if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;
	if (msg.content === config.prefix) {
		msg.author.send({embed: {
			color: 16775201,
			author: {
				name: "Latest Status:",
				icon_url: client.user.avatarURL
			},
			fields: [{
				name: "Server: " + servernamearr[0],
				value: serverstatusarr[0] + "\n" + serverpoparr[0] + "\n" + 
				serverpopmaxarr[0] + "\n" + servermaxcaparr[0] + "\n" + 
				serveruptimearr[0] + "\n" + serverupdatearr[0] 
			},
			{
				name: "Server: " + servernamearr[1],
				value: serverstatusarr[1] + "\n" + serverpoparr[1] + "\n" + 
				serverpopmaxarr[1] + "\n" + servermaxcaparr[1] + "\n" + 
				serveruptimearr[1] + "\n" + serverupdatearr[1] 
			}],
			timestamp: new Date(),
		}});
		msg.author.send("Some other useful resources are: " + "\n" + "The " +
		"Homepage Announcements - (http://www.swgemu.com/forums/content.php)" +
		"\n" + "The Forums - (http://www.swgemu.com/forums/forum.php)" + "\n" +
		"IRC channel #swgemu@irc.swgemu.com - (https://kiwiirc.com/client)" +
		"\n" + "There's also a Google Play Store app - " +
		"(http://bit.ly/swgemuapp)");
		msg.reply("I've sent you a Direct Message with the latest server info!")
	}
});

// Make It So
client.login(config.apitoken);