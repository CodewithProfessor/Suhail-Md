const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_16_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYxLFxuICAgICAgICA1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTksXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjksXG4gICAgICAgIDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMyxcbiAgICAgICAgNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE3LFxuICAgICAgICA1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MixcbiAgICAgICAgMTQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MixcbiAgICAgICAgMTE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5QjVMUnVQSm9PQ1pEUnBjdU83Q0lhUEc2ckg2cThBUFA3SHovcVMzZmpBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYOFctMWJaTlNTQ3pta2syb2JsenhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkwYWI3OTgzLWNjODMtNGFmNi05YWM2LWQwNTUzNWUxNWUwM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICA2NixcbiAgICAgIDIzNSxcbiAgICAgIDE3MCxcbiAgICAgIDQyLFxuICAgICAgNTAsXG4gICAgICA2MSxcbiAgICAgIDEzMSxcbiAgICAgIDg4LFxuICAgICAgMTYsXG4gICAgICAxNixcbiAgICAgIDI0OSxcbiAgICAgIDIyMyxcbiAgICAgIDEyMCxcbiAgICAgIDQyLFxuICAgICAgNDcsXG4gICAgICAyMTQsXG4gICAgICAyMCxcbiAgICAgIDE3MSxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAxNzUsXG4gICAgICAzMixcbiAgICAgIDIwLFxuICAgICAgMjE2LFxuICAgICAgMTIsXG4gICAgICAyMjUsXG4gICAgICAxMjMsXG4gICAgICAyNTAsXG4gICAgICAxOTcsXG4gICAgICA4MCxcbiAgICAgIDE0OCxcbiAgICAgIDI4LFxuICAgICAgMjA0LFxuICAgICAgMTQyLFxuICAgICAgMTgxLFxuICAgICAgNDEsXG4gICAgICAxNDcsXG4gICAgICA1MyxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xxUHZJc0hFTXJhemJRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK1UvUzRlUlBPOWtUeFY0UUp6bk1GazBJaWFYREU3WmlDSlZJNjRVQ1RFYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzR1RDdFFmbFJuTThneUJpbFl2ZFBqVkptbmxSMHhsRDdna242M1NxUzJjUGM1YUtEMWRCZDJCQXpPMXprUnYwTmtvZ1VaUlBPMjNxS3pjK2duNkpDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMMWswalUyckNqT0M4ZTdNVm1SYXRCNnhVbHYvVFBmbmlQQXRZU0FNK3N3dWVUSXJpLzF6S2hXK0tIQWxBWFhEZ05wVUxHVFlzcVNpUkxZbEcwTWFpdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM1OTgxOTgzMDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2Fpa1wiLFxuICAgIFwibGlkXCI6IFwiNzY5NzkxNjg2Njk4Nzk6NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzM1OTgxOTgzMDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTM3ODA2XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
