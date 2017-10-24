var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
	colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
	token: auth.token,
	autorun: true
});
bot.on('ready', function (evt) {
	logger.info('Connected');
	logger.info('Logged in as: ');
	logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) { 
	// Our bot needs to know if it will execute a command
	// It will listen for messages that will start with 'Gwen, '
	if (message.substring(0,6) == 'Gwen, ') {
		var args = message.substring(6).split(' ');
		var cmd = args[0]
		
		args = args.splice(6);
		switch(cmd) {
			//Gwen, help
			case 'help':
				bot.sendMessage({
					to: channelID,
					message: 'Sure thing! Write "Gwen, " to get my attention and then say any of the following: hi, bye, thanks, lol, sup, wtf, omg, time?, countdown, exterminate, joke, cleanjoke, dirtyjoke, meanjoke, sleep, wakeup, sleepwithme, porn, lifehelp, homeworkhelp, adminme, mememe, loveme, marryme, mockme, scareme, banme, sandwichme, meaningoflife?, whenupdate?'
				});
			break;
			case 'hi':
				bot.sendMessage({
					to: channelID,
					message: 'Hey there sexy <3'
				});
			break;
			case "adminme":
				bot.sendMessage({
					to: channelID,
					message: 'No, but nice try'
				});
			break;
			case 'loveme':
				bot.sendMessage({
					to: channelID,
					message: 'I love you SO much!'
				});
			break;
			case 'sup':
				bot.sendMessage({
					to: channelID,
					message: 'Not much, you?'
				});
			break;
			case 'thanks':
				bot.sendMessage({
					to: channelID,
					message: 'Anytime :)'
				});
			break;
			case 'time?':
				bot.sendMessage({
					to: channelID,
					message: '*glares* Do I look like a clock to you?'
				});
			break;
			case 'lol':
				bot.sendMessage({
					to: channelID,
					message: 'omfg rofl'
				});
			break;
			case 'bye':
				bot.sendMessage({
					to: channelID,
					message: 'Buh-bye!'
				});
			break;
			case 'sandwichme':
				bot.sendMessage({
					to: channelID,
					message: 'I AM A STRONG INDEPENDENT BLACK WOMAN WHO DONT NEED NO MAN! go make your own sandwich'
				});
			break;
			case 'mockme':
				bot.sendMessage({
					to: channelID,
					message: 'You suck! (no you dont im sorry)'
				});
			break;
			case 'meaningoflife?':
				bot.sendMessage({
					to: channelID,
					message: '42'
				});
			break;
			case 'countdown':
				bot.sendMessage({
					to: channelID,
					message: '3...2...1...LIFTOFF!'
				});
			break;
			case 'whenupdate?':
				bot.sendMessage({
					to: channelID,
					message: 'fuck who knows'
				});
			break;
			case 'banme':
				bot.sendMessage({
					to: channelID,
					message: 'YOU ARE NOW BANNED'
				});
			break;
			case 'homeworkhelp':
				bot.sendMessage({
					to: channelID,
					message: 'Um...you should probably ask Google instead'
				});
			break;
			case 'lifehelp':
				bot.sendMessage({
					to: channelID,
					message: 'Stay in school kids, dont do drugs'
				});
			break;
			case 'omg':
				bot.sendMessage({
					to: channelID,
					message: 'Oh. My. Goodness.'
				});
			break;
			case 'wtf':
				bot.sendMessage({
					to: channelID,
					message: '???????????????????'
				});
			break;
			case 'rateme':
				bot.sendMessage({
					to: channelID,
					message: '5/7 perfect score'
				});
			break;
			case 'mememe':
				bot.sendMessage({
					to: channelID,
					message: 'Me, me, me, is that all you think about?'
				});
			break;
			case 'exterminate':
				bot.sendMessage({
					to: channelID,
					message: 'Exterminate! Exterminate! Exterminate!'
				});
			break;
			case 'sleep':
				bot.sendMessage({
					to: channelID,
					message: 'zzzzzzzzzzzzzzzzzzzzzz'
				});
			break;
			case 'wakeup':
				bot.sendMessage({
					to: channelID,
					message: 'zzzzzzzz.... hmm? what did I miss?'
				});
			break;
			case 'sleepwithme':
				bot.sendMessage({
					to: channelID,
					message: 'eww gross'
				});
			break;
			case 'dirtyjoke':
				bot.sendMessage({
					to: channelID,
					message: 'Three white horses fell in the mud'
				});
			break;
			case 'cleanjoke':
				bot.sendMessage({
					to: channelID,
					message: 'How do you make holy water? Put it in a pot and boil the hell out of it'
				});
			break;
			case 'meanjoke':
				bot.sendMessage({
					to: channelID,
					message: 'You.'
				});
			break;
			case 'joke':
				bot.sendMessage({
					to: channelID,
					message: 'What do you call a fake noodle? An impasta!'
				});
			break;
			case 'scareme':
				bot.sendMessage({
					to: channelID,
					message: 'No matter how hard you try, you will never be truly happy, and then you will die.'
				});
			break;
			case 'porn':
				bot.sendMessage({
					to: channelID,
					message: '*gasp* This is a CHRISTIAN server! Go to your room!'
				});
			break;
			case 'marryme':
				bot.sendMessage({
					to: channelID,
					message: 'lol you gonna need a bigger diamond than that boi'
				});
			break;
			//Just add any case commands if you want to....
		}
	}
});
