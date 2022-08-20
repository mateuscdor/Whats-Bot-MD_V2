/* ═══════════════════════════════════════════════════════ //
=> If you want to recode, reupload,
=> or copy the codes/script,
=> pls give credit,
=> no credit? i will take action immediately.
==> Copyright (C) 2022 Dark_Ezio.
==> Licensed under the  MIT License;
===> you may not use this file except in compliance with the License.
=> Thank you to Lord Buddha, Family and Myself.
=> Whats Bot - Dark_Ezio.
// ════════════════════════════ */

const yts = require('yt-search')
const ezio = require("../events");
const lang = ezio.getString("scrapers");
const { yta, ytv } = require('../lib/y2Mate')

ezio.addCommand(
  { 
    pattern: ["song", "rsong"], 
    desc: "you can dowloade audio from youtube", 
    usage: '<url|query>',
    sucReact: "📥", 
    category: ["downloade", "all"] 
},
  async (message, client) => {
    if (!message.client.text) {
        await client.sendErrorMessage( message.from, lang.NEED_TEXT_SONG, message.key, message );
        return global.catchError = true;
    }
    try {
        let videos = await yts(message.client.text);
        let video = {};
        message.client.command == 'song' 
          ? video = videos.videos[0] 
          : video = videos.videos[Math.floor(Math.random() * videos.videos.length)]
        let caption = `
—————————————————————————
♻ Title : ${video.title}
♻ Ext : Search [${message.client.command=='song'?'first':"random"} video]
♻ ID : ${video.videoId}
♻ Duration : ${video.timestamp}
♻ Viewes : ${video.views}
♻ Uploaded On : ${video.ago}
♻ Author : ${video.author.name}
♻ Channel : ${video.author.url}
♻ Description : ${video.description}
♻ Url : ${video.url}
—————————————————————————
${ezio.config.exif.cap}
_________________________`;

        await client.sendMessage( message.from, { image: {url: video.thumbnail }, caption, }, { quoted: message })
        let audio = await yta(video.url)
        const aMsg = await client.sendMessage( message.from, { audio: { url: audio.dl_link }, mimetype: 'audio/mp4' }, { quoted: message })
        await client.sendReact(message.from, '🎧', aMsg.key);
        global.catchError = false;
    } catch (error) {
        await client.sendErrorMessage( message.from, error, message.key, message );
        return (global.catchError = true);
    }
  }
);


ezio.addCommand(
  { 
    pattern: ["ryt-video", 'rvideo'], 
    desc: "you can dowloade video from youtube", 
    usage: '<url|query>',
    sucReact: "📥", 
    category: ["downloade", "all"] 
},
  async (message, client) => {
    if (!message.client.text) {
        await client.sendErrorMessage( message.from, lang.NEED_TEXT_SONG, message.key, message );
        return global.catchError = true;
    }
    try {
        let videos = await yts(message.client.text);
        let video = {};
        message.client.command == 'song' 
          ? video = videos.videos[0] 
          : video = videos.videos[Math.floor(Math.random() * videos.videos.length)]
        let caption = `
—————————————————————————
♻ Title : ${video.title}
♻ Ext : Search [first video]
♻ ID : ${video.videoId}
♻ Duration : ${video.timestamp}
♻ Viewes : ${video.views}
♻ Uploaded On : ${video.ago}
♻ Author : ${video.author.name}
♻ Channel : ${video.author.url}
♻ Description : ${video.description}
♻ Url : ${video.url}
—————————————————————————
${ezio.config.exif.cap}
_________________________`;

        await client.sendMessage( message.from, { image: {url: video.thumbnail }, caption, }, { quoted: message })
        let result = await ytv(video.url)
        const aMsg = await client.sendMessage( message.from, { video: { url: result.dl_link }, caption: ezio.config.exif.cap}, { quoted: message })
        await client.sendReact(message.from, '🎞', aMsg.key);
        global.catchError = false;
    } catch (error) {
        await client.sendErrorMessage( message.from, error, message.key, message );
        return (global.catchError = true);
    }
  }
);