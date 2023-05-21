const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'ravishkasatsara@gmail.com'
global.Youtube = 'https://youtube.com/@adzonemusic'
global.location = 'kaluthara IN'
global.gurl = 'https://instagram.com/ravishka_sathsara_' // add your username
global.sudo = process.env.SUDO || '94773721711'
global.devs = '94760559964';
global.website = 'https://youtube.com/@adzonemusic' //wa.me/+94773721711
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/73a5cd6ace5384be642c1.jpg'
module.exports = {
  botname: process.env.BOT_NAME || '𝐒𝐚𝐘𝐮 𝐌𝐃',
  autosticker: process.env.AUTO_STICKER || 'false',
  autovoice: process.env.AUTO_VOICE || 'false',
  botapikey: process.env.BOTCAHX_API || '',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/8924798a5171d4d94cb4b.jpg,
  alivemsj: process.env.ALIVE_MSJ || '*The bot developer is Ravishka* 🎊',
  ownername:process.env.OWNER_NAME || 'Ravishka Sathsara',
  sessionName: process.env.SESSION_ID || 'PRABATH-MD::UFJBQkFUSC1NRDo6c2Vzc2lvbl9yYV84Zjk3OWY4MjAxMTBhOF92aTo6Q2xlYW5lcnNNb29yZQo6Ojg4MDY2NDA5NTU2ZmU4MTY4YTk0ZjJmMTNkMDU=',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || '𝐒𝐚𝐘𝐮 𝐌𝐃',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '𝐒𝐚𝐘𝐮 𝐌𝐃 මම ඉන්නො මොකද බන් වද දෙන්නෙ',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| '𝐒𝐚𝐘𝐮 𝐌𝐃',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
