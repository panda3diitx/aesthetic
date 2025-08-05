const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUY5T05WZnR3a3hKVm9FVUZHdnVVQnF5SVlJTSszNzdVSk52RHRmY2tsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnRnL09YdzJsRUFoN0R1Um1OTjRrYmRmQW5NSjlBVmdtTEpkYURwVHBuYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySG5abTgxVUZQTFNad2ZFWFRVTU52RFA5SUJnb2dsdlZkRGpJZHZocVhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6dVFRbG1YYm5lczBNRWdyYTVvemFmK20xZmIzYWVlNW52R3Y0WjcyRmxvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNS1pSclJCSkUvV0hwR3d1SGRxN2pVaDZGaUgrdFFhZ2IzLzUvTklUbmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJRaldTQWxsaGh6SUhVM1g5WlV3YmRSQSs4bzI4YVF5emp0dGcvK0xjRWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkx4Z3g2YndRQVd3bGRxd1ZoQ1RKN2VQMXRHdExOcmxjeCtZdGwzS2UzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL05XR2xVU25nYVg5WkxBOXl4cjRnK05NT204Q251dWY1OEdJWk5qM3JHVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFtR0FRTjRaKzhTazczRThadW9BWVVPTG1DUEJhVkU0Y3A0Q1plUTJlbUppQlB6NzFFNHA2aDRqallSNmN0RW0wZVlreGozUGMvaDJ3SUVOeld6ZkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiIyb21CbjFVSUxjYjYzamsrQWsyamVjREE2MGp4dlNmQXFMME9WMTdHMW0wPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEyNTE0NTM2OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENTNFQUVGMjU2NzQ1MkYyNDk5NEQyMUQyRTY0MUMzQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0NDEyMjg5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMjUxNDUzNjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjE0QkNERURGRjZFMTkzN0YzNDc5OUM2RDE0QzU2MjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDQxMjI5MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNzhTTTRHNFMiLCJtZSI6eyJpZCI6IjkyMzEyNTE0NTM2ODozMkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE3NTIxMzg3ODc0MzEwMTozMkBsaWQiLCJuYW1lIjoiLSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT25QbFk0RkVQdnB5TVFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWXVIaEJCT2JmQmdiNTViRW9ITWVvR3l2WmFOTVJBWEM5bUFqS0VId1VqQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoic3pFRURTeGVscU45d3ZyK29GOUxOTktlNTh6VVdFaW5UaEZFV2pnMGh3Z0xEc3FJMk55eWFzZDMybEM4dmdjdFNZUngxYm85L3I4cnRCeStwSXlxQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IlNEUjlhaEp4SGY0K2s4VkxNV3hoMXRoM0hVTE51bWJLbld3RUZ6eFNDNUc1V1Q4NU5UZnVVeEZadHVwSlhJK3JjUGR3TVpSTkF2Q29hQmpqZ0crQ0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTI1MTQ1MzY4OjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldMaDRRUVRtM3dZRytlV3hLQnpIcUJzcjJXalRFUUZ3dlpnSXloQjhGSXcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDQxMjI4NywibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMTWEifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝛅𝝴͢𝝴͢η̽ ɣ̬๏፝֟𝐮፝ɼ̚ 𝐬̄ʈ͜͡ɑ͢ʈ͜͡𝐮፝𝐬̄ ʙɣ̬ 𝐍͠ɑ͢īīϻ̈̐ɑ͢ 𝐈η̽ɕ̄ 💀🚩 -*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/u23u54.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐍͡ᴀɪᴍᴀ 𝐓ᴇᴄʜ͡𝐗",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "*𝐍ᴀɪᴍᴀ 𝐓ᴇᴄʜ𝐗   :)*",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923320945271",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝐍ᴀɪᴍᴀ 𝐓ᴇᴄʜ𝐗   :)*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐍ᴀɪᴍᴀ 𝐓ᴇᴄʜ𝐗  :)*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/u23u54.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "*📍-𝐍͡ᴀɪᴍᴀ 𝐓ᴇᴄʜ͡𝐗  ›*
*_سَتَا دَلَاسَہ مِی٘ زَڑ٘گِے زَرِی زَرِی :____*",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923320945271",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
