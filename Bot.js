//Bot starts here
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  client.guilds.forEach((guild) => {
      console.log("✅ " + guild.name);
   })

  client.user.setActivity("Now That I Found You || say crj help", {type: "LISTENING"})
})

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  if (command === "help"){
    message.channel.send({embed: {
      thumbnail: {
        url: 'https://www.thewealthrecord.com/wp-content/uploads/2018/07/Carly-Rae-Jepsen-Net-Worth.jpg',
      },
      color: 13509887,
      title: "Commands:",
      fields: [
        { name: "crj help", value:"Provides a list of commands",},
        { name: "crj hello", value:"Says hi.  Really a testing command and will be removed eventually",},
        { name: "crj ping", value:"Proides the API latency", },
        { name: "crj react", value:"Watch a thumbs-up emoji magically appear!", },
        { name: "crj say", value:"Tell the bot to say something by appending it to the end, like `crj say hi`", },
        { name: "crj blog", value:"Did you know...?  Ha! Bet you didn't!", },
        { name: "crj dice", value:"Roll a dice!  Great for gambling", },
        { name: "crj queen", value:":heart_eyes:", },
        { name: "crj invite", value:"Add this bot to your server.", },
        { name: "crj credits", value:"Coming soon... will list all the people who helped", },
        { name: "crj pfo", value:"Listen to Carly's latest single!  Append `spotify` or `youtube` after.", },
        { name: "crj ntify", value:"Similar to `pfo`... listen to Now That I Found You",},
        { name: "crj ndlm", value:"You should know how these music commands work… append `spotify` or `yt` to listen to No Drug Like Me",},
        { name: "crj slay", value:"Check out a great site for Carly news!",},
      ]
    }
  }
)
console.log(message.author.tag + ' just asked for help')
} else
  if (command === "hello")
  {
    message.channel.send("Hey there!  I'm CarlyBot, a ~~useless~~ fun bot built in discord.js")
  } else
if (command === "ping")
  {
     message.channel.send(`:ping_pong: ${Math.round(client.ping)} ms`)
     console.log(message.author.tag + ' just used the ping command');
  } else
   if (command === 'react')
   {
	message.react('👍')
} else
if (command === "dice")
{
  function dice(min, max) {
    return Math.random() * (max - min) + min;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
    message.channel.send(":game_die: The die rolled " + Math.round(dice(1,6)))
  console.log(message.author.tag + ' just rolled a die.')
} else
if (command === 'say') {
message.delete().catch(O_o=>{});
  {
    var sayMessage = message.content.slice(7)
    sayMessage ? message.channel.send(sayMessage) : message.channel.send('There wasn\'t anything for me to say!').catch(console.error)
  }
console.log(message.author.tag+ ' just had me say'  + sayMessage);
} else
if (command ===  'blog') {
  message.channel.send({embed:{
  thumbnail: {
    url: 'https://explodingshey.files.wordpress.com/2018/08/cropped-screen-shot-2018-08-28-at-9-36-24-pm1.png',
  },
   color: 2192794,
   title: "Ka-zap!:",
   description:"Did you know bots can write?  Yup, they can\'t!  Only people can.  So, check out CarlyStan's blog Ka-zap! @ (https://www.explodingshey.wordpress.com) and grow your brain."
 }
}
)
  } else if (command === 'pfo') {
var listenType = message.content.slice(15)
switch (listenType) {
  case " spotify":
    message.channel.send("https://open.spotify.com/track/39YLC6osLe9btq1vpsDglx?si=MH-FiSCiSnStdAAYeuYPWw")
      break;
  case " yt", " youtube":
    message.channel.send("https://www.youtube.com/watch?v=U0ih3FriG1k")
    break;
  default:
    message.channel.send("Please specify a type: spotify or youtube.")
                    }
} else if (command === 'queen') {
  var carlyPics = [
    'https://myvancity.ca/wp-content/uploads/2018/03/Carly_Rae_Jepsen_300dpi_5x7-copy-1.jpg',
    'http://www.bn1magazine.co.uk/wp-content/uploads/2016/04/Carly-May-Jepsen-2.jpg',
    'https://www.pinterest.com/pin/43628690117084502/',
    "https://media.discordapp.net/attachments/517370731160535071/536236550443499540/21427531_10155537265700821_5393390733577544301_o.jpg",
    'https://cdn.discordapp.com/attachments/517370731160535071/542358064263594004/gettyimages-478048252-2048x2048.jpg',
    'https://cdn.discordapp.com/attachments/517370731160535071/541553710875279370/golden1center_1_2_2018_3_49_5_558.jpg',
    'https://cdn.discordapp.com/attachments/517370731160535071/541552284497346580/Carly_NOLA5.jpg',
    'https://cdn.discordapp.com/attachments/517370731160535071/530567503370387486/Dj4fP2AVsAAa0lm.jpg',
    'https://cdn.discordapp.com/attachments/517370731160535071/529261937603772416/161004883-2048x2048.jpg',
    "https://cdn.discordapp.com/attachments/517370731160535071/517400385154056212/Carly3_Outsidelands1.jpg",
    "https://cdn.discordapp.com/attachments/250700636600008704/516406516841054211/Carly_Rae_Jepsen_-_Part_Of_Your_World.m2ts_000052.301.jpg",
    "https://cdn.discordapp.com/attachments/250700636600008704/484318392640208896/40029747_10156483474955821_9117480799287902208_o.jpg",
    "https://cdn.discordapp.com/attachments/250700636600008704/474983500731121666/NPR-Turning-The-Tables-Carly-Rae-Jepsen-2-1533244032-8002.jpg",
    "https://cdn.discordapp.com/attachments/250700636600008704/421760467724140575/29027625_10155462282111048_1761619839052414976_n.jpg",
    "https://cdn.discordapp.com/attachments/250700636600008704/408589823889113099/golden1center_1_2_2018_3_49_10_838.jpg",
    "https://cdn.discordapp.com/attachments/250700636600008704/293065510919208960/CRJ5896_281129.jpg",
    "https://cdn.discordapp.com/attachments/250700636600008704/277419294009196544/HQ8.jpg",
    "https://cdn.discordapp.com/attachments/250700636600008704/277418625059782656/nN4RhAgc6iY.jpg",
    "https://cdn.discordapp.com/attachments/250700636600008704/277419106200846337/HwP7VBrhIz4.jpg",
    'https://cdn.discordapp.com/attachments/250700636600008704/272492768473907200/extra2.png',
    'https://cdn.discordapp.com/attachments/250700636600008704/259315729751474197/carly-rae-jepsen-supernatural.jpg',
    'https://cdn.discordapp.com/attachments/250700636600008704/256495049993355264/tumblr_inline_nbaergSKcc1rp9gv0.jpg',
  ]
  var image = Math.floor((Math.random() * carlyPics.length) + 0);
  message.channel.send(carlyPics[image])
console.log(message.author.tag + ' just looked at a picture of Carly!');
} else
  if (command === 'slay') {
const mkyplug = new Discord.RichEmbed()
.setTitle('Carly Slays!')
.setThumbnail('https://media.discordapp.net/attachments/251786213470502912/547090106796998667/8tc4htGB_400x400.jpg')
.addField("The Queen of Carly Rae Jepsen fan sites", "Up to date news and media. https://www.carlyslayjepsen.com")
.setURL("https://www.carlyslayjepsen.com")
message.channel.send(mkyplug).catch(console.error)
console.log(message.author.tag + " just used looked at mky\'s site")
}
  else if (command === 'invite')
{
message.channel.send("Thanks for helping spread CarlyBot!  Copy and paste this link into your browser: https://discordapp.com/oauth2/authorize?&client_id=491042370956034059&scope=bot&permissions=8  ")
console.log(message.author.tag + " might have added the bot to a new server")
}

  else if (command === 'ndlm')
  {
var listenType = message.content.slice(8)
switch (listenType) {
case " spotify":
  message.channel.send("https://open.spotify.com/track/7KAQYB6yA9t4MFe98I7o7a?si=30yHgPpxRZSqqXDJKCaOTg")
    break;
case " yt", " youtube":
  message.channel.send("https://www.youtube.com/watch?v=mVocX_uNTIU")
  break;
default:
  message.channel.send("Please specify a type: spotify or youtube.")
    }
    console.log(message.author.tag + " just listened to No Drug Like Me")
  }
else if (command === 'ntify') {
var listenType = message.content.slice(9)
    switch (listenType) {
case " spotify":
    message.channel.send("http://open.spotify.com/album/1xqz6l2gObcbw25EqODDCt ")
      break;
case " yt", " youtube":
    message.channel.send("https://www.youtube.com/watch?v=cyP_JyP1QJg")
      break;
default:
    message.channel.send("Please specify a type: spotify or youtube.")
  }
  console.log(message.author.tag + " just listened to Now That I Found You")
} else if (command === 'delay') {
  message.channel.send("This message will be edited in 5 seconds")
    const delay = () => {message.channel.send("Edited! :tada: ")
  };
  setTimeout(delay, 5000)
} else {
  message.channel.send("Sorry, I don't recognize that command!  Say `crj help` to see a list of commands.")
    }
  )
;
// add tracklisting later
//${member.user.tag}
client.login(config.token)
