const axios = require('axios');
const { tlang,cmd } = require('../lib')
const Config = require('../config')
const { redeploy , getvar , delvar , getallvar , change_env , get_deployments} = require('../lib/koyeb')

    cmd({
         pattern: "setuplist",
         alias: ["applylist", "setting", "settings"],
         category: "settings",
         react: "⚙️",
         filename: __filename,
         desc: "get commad list"
    },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       const replysetuplist = `
 *👨‍🔧 sᴀᴋᴜʀᴀ ᴍᴅ sᴇᴛᴛɪɴɢs ʟɪsᴛ 👨‍🔧*

─────────────────────────────
 📍 ALIVE_MESSAGE - _Put bot alive message_

 📍 ALWAYS_ONLINE - _Put always online *true* or *false*_

 📍 ANTI_BAD_WORD - _Add anti bad word_

 📍 ANTILINK_ACTION - _Put remove or unremove_

 📍 ANTILINK_VALUES - _Add antilinks values_

 📍 AUTO_REACTION- _Add auto reaction *true* or *false*_

 📍 AUTO_READ_STATUS - _Put auto status seen *true* or *false*_

 📍 DISABLE_PM - _Put disable pm *true* or *false*_

 📍 LEVEL_UP_MESSAGE - _Put level up message *true* or *false*_

 📍 MONGODB_URI - _Put mongodb url_

 📍 OWNER_NAME - _Put your Name ( Bot Owner )_

 📍 OWNER_NUMBER - _Add your Mobile Number_

 📍 PACK_INFO - _Add a pack name for Bot made Stickers_

 📍 PREFIX - _Add bot prefix_

 📍 READ_MESSAGE - _Put read message *true* or *false*_

 📍 SESSION_ID - _Put your session id_

 📍 LANGUAGE - _Put your language SI or EN_

 📍 THUMB_IMAGE - _Add your thumb image_

 📍 WORKTYPE - _Set worktype *public* or *private*_
─────────────────────────────

❗ Instructions for Using Database Commands

*⚠️ Dont Add space After the '=' Symbol*
*⚠️ Dont Add space before the '=' Symbol*

Ex -: .apply ALWAYS_ONLINE=true
        .apply OWNER_NUMBER=94718799291
 `
return citel.reply(replysetuplist)
    }

)
//---------------------------------------------------------------------------
    cmd({
         pattern: "info",
         alias: ["sakurainfo"],
         category: "team",
         react: "💮",
         filename: __filename,
         desc: "get sakura md info"
    },
    async(Void, citel, text) => {

        const replyinfo = `
─────────────────────────────
DEVALOPER : _*DARK YASIYA*_
OWNER : _*DARK CHAMA*_
TESTER : _*DARK INDUWARA*_
─────────────────────────────
WHATSAPP CHANNEL :
_https://whatsapp.com/channel/0029Va81UHiLikg0Hy7c9c1b_

YOU THUBE CHANNEL
_https://www.youtube.com/@yasiya_yt_
─────────────────────────────
TV SERIES GROUP :
_https://chat.whatsapp.com/JdikSJ1PEE050CUe8l2em1_

SAKURA MD SUPPORTER GROUP :
_https://chat.whatsapp.com/Jud1glBy7N9L85JxL67hji_

FORZEN MD SUPPORTER GROUP :
_https://chat.whatsapp.com/L2i6oDCjljt4mtBTUvTh7t_
─────────────────────────────
FORZEN MD GITHUB LINK :
_https://github.com/yasiyaofc1/FORZEN-MD_

SAKURA MD GITHUB LINK :
_https://github.com/DarkChamaofc/SAKURA-MD_
─────────────────────────────
 `
return citel.reply(replyinfo)
    }

)
