const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var upn = 'SAKURA-MD  '
var videotime = 100000 // 1000 min
var dlsize = 102400 // 1024mb
var cap = "*🥷 sᴀᴋᴜʀᴀ ᴍᴅ ᴡʜᴀᴛsᴀᴘᴘ ᴜsᴇʀ ʙᴏᴛ 🥷*\n*☘️ ᴏᴡɴᴇʀ ʙʏ ᴅᴀʀᴋ ᴄʜᴀᴍᴀ ☘️*\n*💃🏼 ᴅᴇᴠᴀʟᴏᴘᴇʀ ʙʏ ᴅᴀʀᴋ ʏᴀsɪʏᴀ x ᴛᴇᴀᴍ 💃🏼*"

    //---------------------------------------------------------------------------
cmd({
            pattern: "tgs",
            desc: "Downloads telegram stickers.",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
        },
        async(Void, citel, text) => {
function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return citel[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return citel['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');citel[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await Void[__lobC(0x1bf)+__lobC(0x197)](citel[__lobC(0x1cf)],__lobb,citel,{'packname':Config['packname'],'author':citel[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "gitclone",
	    react: "🧚‍♀️",
            desc: "Downloads apks  .",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
        },
        async(Void, citel, text) => {
	if (!text) return await citel.reply('*Provide Repo Url, Ex:- _.gitclone https://yasiyaofc1/FORZEN-MD_*') 
    const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    if (!regex.test(text) ) return await citel.reply('*Uhh Please, Provide Valid Repositry Url*');
    let [_, user, repo] = text.match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    //citel.send(`✳️ Wait, sending repository.. \n` + filename.toString() )
	await Void.sendMessage(citel.chat , {document : { url : url }, fileName:  filename,mimetype: 'application/zip', caption:`*ᴏᴡɴᴇʀ ʙʏ ᴅᴀʀᴋ ᴄʜᴀᴍᴀ*\n*ᴅᴇᴠᴀʟᴏᴘᴇʀ ʙʏ ᴅᴀʀᴋ ʏᴀsɪʏᴀ x ᴛᴇᴀᴍ*`, })

	})
    //---------------------------------------------------------------------------
cmd({

            pattern: "fbs",

            desc: "fb down",

            react: "🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdls = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${text}&apikey=${Config.botapikey}`)

const videolink = fbdls.result.audio

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Facebook Audio*`);

       return Void.sendMessage(citel.chat, {

                audio: {

                    url: videolink ,

                },

                mimetype: "audio/mpeg",

                fileName: `*🥷 sᴀᴋᴜʀᴀ ᴍᴅ ᴡʜᴀᴛsᴀᴘᴘ ᴜsᴇʀ ʙᴏᴛ 🥷*\n*🧚‍♀️ ᴏᴡɴᴇʀ ʙʏ ᴅᴀʀᴋ ᴄʜᴀᴍᴀ 🧚‍♀️*\n*💃🏼 ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙʏ ᴅᴀʀᴋ ʏᴀsɪʏᴀ x ᴛᴇᴀᴍ 💃🏼*`,

            }, {

                quoted: citel,

            });

        }

    )

   //---------------------------------------------------------------------------
cmd({
	    pattern: "tts",
            alias: ["gvoice", "voice"],
            react: "🎆",
            desc: "text to speech.",
            category: "downloader",
            filename: __filename,
            use: '<Hii,this is Secktor>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('Please give me Sentence to change into audio.')
            let texttts = text
            const ttsurl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            });
            return Void.sendMessage(citel.chat, {
                audio: {
                    url: ttsurl,
                },
                mimetype: "audio/mpeg",
                fileName: `ttsCitelVoid.m4a`,
            }, {
                quoted: citel,
            });
        }

    )
     //---------------------------------------------------------------------------
 cmd({
    
        pattern: "tiktok",
        react: "🎆",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("Please provide a valid URL.");
                return;
            }

            const tiktok = await fetchJson(`https://kaveesha-sithum.onrender.com/tiktok?url=${text}`);

            if (!tiktok.result || !tiktok.result.video) {
                citel.reply("Failed to fetch video URL ");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: tiktok.result.video },
                    mimetype: "video/mp4",
                    caption: tiktok.result. title
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);
    //---------------------------------------------------------------------------
 cmd({
        pattern: "wallpaper",
        react: "🎆",
        desc: "To get Random Pics",
       category: "Anime Pics",
        filename: __filename
    },

    async(Suhail, msg, text) => {
         if (!text) return citel.reply('Please give me Sentence to change into audio.')
            let texttts = text


const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
                let buttonMessaged = {
                    image: { url: url },
                    caption: '*---Random Wallpapers Here---*',
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Suhail.bot.sendMessage(msg.chat, buttonMessaged , {quoted : msg});


}
   )
 //---------------------------------------------------------------------------
     cmd({
        pattern: "yts",
        react: "🔎",
        desc: "Gives descriptive info of query from youtube..",
        category: "downloader",
        filename: __filename,
        use: '<yt search text>',
    },
    async(Void, citel, text) => {
        let yts = require("secktor-pack");
        if (!text) return citel.reply(`*Example : ${prefix}yts Arabi Kumari*`);
        let search = await yts(text);
        let textt = "*SAKURA MD YOUTUBE SEARCHER*\n\n Result From " + text + "\n\n───────────────────\n";
        let no = 1;
        for (let i of search.all) {
            textt += `⚡ No : ${no++}\n ❤Title : ${i.title}\n♫ Type : ${
      i.type
    }\n🙈Views : ${i.views}\n⌛Duration : ${
      i.timestamp
    }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
      i.url
    }\n\n──────────────\n\n`;
        }
        return Void.sendMessage(citel.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: textt,
        }, {
            quoted: citel,
        });
    }
)
    //---------------------------------------------------------------------------
cmd({
    pattern: "wabetainfo",
    alias: ["findapk","playstore"],
    react: "🧾",
    desc: "",
    category: "download",
    use: '.wabetainfo',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const wanews = await fetchJson(`https://legend-army-api.onrender.com/api/search/wabetainfo?&apikey=7cbc80f5`);


          await conn.sendMessage(from , { text:`Hello ${mek.pushname ||  '\n'} I Am Finding Whatsapp New Update Details..` }, { quoted: mek } )    

          const images = `${wanews.result.image}`
           const title = `${wanews.result.title}`
           const date = `${wanews.result.date}`
           const news = `${wanews.result.fulldesc}`

await conn.sendMessage(from,  { image: { url: images }, caption: `\n${ title }\n\n ${ news }\n\n${date}`}, { quoted: mek })
}
catch(e){
console.log(e)
}})
    //---------------------------------------------------------------------------
cmd({
            pattern: "video",
            react: "🎞️",
            desc: "Downloads video from yt.",
            category: "downloader",
            filename: __filename,
            use: '<faded-Alan Walker>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            if (!text) return citel.reply(`Example: ${prefix}video back in black`)
            let textYt;        
if (text.startsWith("https://youtube.com/shorts/")) {
  const svid = text.replace("https://youtube.com/shorts/", "https://youtube.com/v=");
  const s2vid = svid.split("?feature")[0];
  textYt = s2vid;
} else {
  textYt = text;
}
            let search = await yts(textYt);
            let anu = search.videos[0];
                               let buttonMessaged = {
                image: {
                    url: anu.thumbnail,
                },
                caption: `
╔────────┅───────╗

*⬇️ 𝚂𝙰𝙺𝚄𝚁𝙰 𝙼𝙳 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 ⬆️*

 ┉━━━━◭🎥◮━━━━━┉
 
╠🎥 *ᴛɪᴛʟᴇ :* ${anu.title}

╠⏱️ *ᴅᴜʀᴀᴛɪᴏɴ :* ${anu.timestamp}

╠👀 *ᴠɪᴇᴡᴇʀs :* ${anu.views}

╠⬆️ *ᴜᴘʟᴏᴀᴅᴇᴅ :* ${anu.ago}

╠🤵‍♂ *ᴀᴜᴛʜᴏʀ :* ${anu.author.name}

╠🖇️ *ᴜʀʟ :* ${anu.url}

╚┉────────────────┉

${cap}
`,
                footer: tlang().footer,
                headerType: 4,

            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,
		
            })
         
            let urlYt = anu.url
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
             //   citel.reply('*Downloadig:* '+titleYt)
                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (200 * 200);
                if (fileSizeInMegabytes <= dlsize) {
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption:` 
┃♦ *Title:* ${anu.title}\n\n*ᴏᴡɴᴇʀ ʙʏ ᴅᴀʀᴋ ᴄʜᴀᴍᴀ*\n*ᴅᴇᴠᴀʟᴏᴘᴇʀ ʙʏ ᴅᴀʀᴋ ʏᴀsɪʏᴀ x ᴛᴇᴀᴍ*
 `,   
		    }
                 const txt2 = await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

                await Void.sendMessage(citel.chat, { react: {
        text: "🎥",
        key: txt2.key,
            } } );
			
                } else {
                    citel.reply(`❌ File size bigger than 100mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "play",
            react: "🖨️",
            desc: "Sends info about the query(of youtube video/audio).",
            category: "downloader",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Use ${command} Back in Black`);
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            let buttonMessage = {
                image: {
                    url: anu.thumbnail,
                },
                caption: `
╭───────────────◆
│⿻ ${tlang().title} 
│  *SAKURA MD YOUTUBE PLAYER* ✨
│⿻ *Title:* ${anu.title}
│⿻ *Duration:* ${anu.timestamp}
│⿻ *Viewers:* ${anu.views}
│⿻ *Uploaded:* ${anu.ago}
│⿻ *Author:* ${anu.author.name}
╰────────────────◆
⦿ *Url* : ${anu.url}
`,
                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ringtone",
            react: "🎵",
            desc: "Downloads ringtone.",
            category: "downloader",
            filename: __filename,
            use: '<ringtone name>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Example: ${prefix}ringtone back in black`)
            let anu = await ringtone(text)
            let result = anu[Math.floor(Math.random() * anu.length)]
            return Void.sendMessage(citel.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: citel })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "pint",
            react: "🖨️", 
            desc: "Downloads image from pinterest.",
            category: "downloader",
            filename: __filename,
            use: '<text|image name>',
        },
        async(Void, citel, text) => {
            if (!text) return reply("What picture are you looking for?") && Void.sendMessage(citel.chat, {
                react: {
                    text: '❌',
                    key: citel.key
                }
            })
            try {
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttonMessage = {
                    image: {
                        url: result
                    },
                    caption: ` `,
                    footer: tlang().footer,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: `sᴀᴋᴜʀᴀ ᴍᴅ ᴡʜᴀᴛsᴀᴘᴘ ᴜsᴇʀ ʙᴏᴛ`,
                            body: `${Config.ownername}`,
                            thumbnail: log0,
                            mediaType: 2,
                            mediaUrl: ``,
                            sourceUrl: ``
                        }
                    }
                }
                return Void.sendMessage(citel.chat, buttonMessage, {
                    quoted: citel
                })
            } catch (e) {
                console.log(e)
            }
        })
    //---------------------------------------------------------------------------
cmd({
            pattern: "mediafire",
            react: "📋",
            desc: "Downloads zip from Mediafire.",
            category: "downloader",
            filename: __filename,
            use: '<url of mediafire>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`*Give me a link ❓*`);
            if (!isUrl(text.split(" ")[0]) && !text.split(" ")[0].includes("mediafire.com")) return reply(`The link you provided is invalid`);
            const baby1 = await mediafire(text);
            if (baby1[0].size.split("MB")[0] >= 999) return reply("*File Over Limit* " + util.format(baby1));
            const result4 = `*┏━━━━━━━━━━━━━┓\n\n🐹 *sᴀᴋᴜʀᴀ ᴍᴅ ᴍᴇᴅɪᴀꜰɪʀᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*🐹\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✷▎🎋⃟🥷 *ᴄʀᴇᴀᴛᴇʀ*: ᴅᴀʀᴋ ʏᴀsɪʏᴀ x ᴛᴇᴀᴍ\n\n✷▎🎋⃟🥷 *ᴄʀᴇᴀᴛᴇʀ ɴᴜᴍʙᴇʀ*:  wa.me//+94728803027\n\n┗━━━━━━━━━━━━━┛\n\n*ʏᴏᴜʀ ᴍᴇᴅɪᴀꜰɪʀᴇ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ*...🔥🔥*
*Nᴀᴍᴇ* : ${baby1[0].nama}
*Sɪᴢᴇ* : ${baby1[0].size}
*Mɪᴍᴇ* : ${baby1[0].mime}
*Lɪɴᴋ* : ${baby1[0].link}`;
            reply(`${result4}`);
            return Void.sendMessage(citel.chat, {
                    document: {
                        url: baby1[0].link,
                    },
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,
                }, {
                    quoted: citel,
                })
                .catch((err) => reply("could not found anything"));

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "song",
            react: "🎧",
            alias :["song","so","𝚢𝚝"],
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
	 if (!text) return citel.reply(`*Please Give Me A Song Name or Url ❓*`);
            let yts = require("secktor-pack"); 
let textYt;        
if (text.startsWith("https://youtube.com/shorts/")) {
  const svid = text.replace("https://youtube.com/shorts/", "https://youtube.com/v=", "https://youtu.be/si=");
  const s2vid = svid.split("?feature")[0];
  textYt = s2vid;
} else {
  textYt = text;
}
            let search = await yts(textYt);
            let anu = search.videos[0];
                       let buttonMessaged ={
             image: {
                    url: anu.thumbnail,
               },
                caption: `
╔┉───────────────┉✰

 ⬇️ 𝚂𝙰𝙺𝚄𝚁𝙰 𝙼𝙳 𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 ⬆️

 ◨┉━━━━╚◭🎧◮╝━━━━━┉◧

 ╠🎼 *ᴛɪᴛʟᴇ :* ${anu.title}

 ╠⏱️ *ᴅᴜʀᴀᴛɪᴏɴ :* ${anu.timestamp}

 ╠👀 *ᴠɪᴇᴡᴇʀs :* ${anu.views}

 ╠⬆️ *ᴜᴘʟᴏᴀᴅᴇᴅ :* ${anu.ago}

 ╠🤵‍♂ *ᴀᴜᴛʜᴏʀ :* ${anu.author.name}

 ╠🖇️ *ᴜʀʟ :* ${anu.url}

╚┉────────────────┉

*ᴏᴡɴᴇʀ ʙʏ ᴅᴀʀᴋ ᴄʜᴀᴍᴀ*
*ᴅᴇᴠᴀʟᴏᴏᴘᴇʀ ʙʏ ᴅᴀʀᴋ ʏᴀsɪʏᴀ x ᴛᴇᴀᴍ*
`,
                footer: tlang().footer,
                headerType: 4,
            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,
            });

            
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 100)}${ext}`;
            };
            let infoYt = await ytdl.getInfo(anu.url);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Song file too big!`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
 /*           citel.reply(`
╔───────────────◆
┊🧚 ${tlang().title} 
┊🚨 *Youtube Player* ✨
┊ ┉━━━━◭☬◮━━━━━┉
┊🎀 *Title:* ${anu.title}
┊🌐 *Duration:* ${anu.timestamp}
┊👀 *Viewers:* ${anu.views}
┊⬆️ *Uploaded:* ${anu.ago}
┊👽 *Author:* ${anu.author.name}
╚────────────────◆
⦿ *Url* : ${anu.url}`,)
*/
            const stream = ytdl(anu.url, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
       
                }
                const txt2 = await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

                await Void.sendMessage(citel.chat, { react: {
        text: "🎶",
        key: txt2.key,
            } } );
       

                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 100mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
            


        }
    )
    //---------------------------------------------------------------------------

cmd({
            pattern: "ytmp4",
            react: "🔎",
            desc: "Downloads video from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<yt video url>',
        },
        async(Void, citel, text) => {
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 1000)}${ext}`;
            };
            if (!text) {
                citel.reply(`❌Please provide me a url`);
                return;
            }
            try {
                let urlYt = text;
                if (!urlYt.startsWith("http")) return citel.reply(`❌ Give youtube link!`);
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");

                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let yts = require("secktor-pack");
                    let search = await yts(text);
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'video/mp4',
                        fileName: `upn + ${titleYt}.mp4`,
                        caption: ` ⿻ Title : ${titleYt}\n ⿻ File Size : ${fileSizeInMegabytes} MB`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: titleYt,
                                body: citel.pushName,
                                thumbnail: await getBuffer(search.all[0].thumbnail),
                                renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: search.all[0].thumbnail,
                                sourceUrl: search.all[0].thumbnail
                            }
                        }
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`❌ File size bigger than 100mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      
            } catch (e) {
                console.log(e)
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "ytmp3",
        react: "🔎",
        desc: "Downloads audio by yt link.",
        category: "downloader",
        use: '<yt video url>',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`❌ Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(`❌ I can't download that long video!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: citel.pushName,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: text,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 100mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

    }
)

  //---------------------------------------------------------------------------
cmd({
        pattern: "ytdoc",
        react: "🔎", 
        desc: "Downloads audio by yt link as document.",
        category: "downloader",
        use: '<ytdoc video url>',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`❌ Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(`❌ I can't download that long video!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    document: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: citel.pushName,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: text,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 100mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

    }
)
