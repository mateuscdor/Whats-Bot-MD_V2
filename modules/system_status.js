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

const os = require("os");
const ezio = require("../events");
const { runtime } = require("../lib/Function");
const lang = ezio.getString("system_stats");
const speed = require("performance-now");

var ov_time = new Date().toLocaleString("EN", { timeZone: "Asia/Colombo" }); // .split(' ')[1]

ezio.addCommand(
  {
    pattern: ["alive", "bot", "system_status"],
    desc: lang.ALIVE_DESC,
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client) => {
    try {
      let timestampe = speed();
      let Wspeed = speed() - timestampe;
      // const Footer = ezio.jsonConfig.footer;
      const Content = `
┌─❖
│「 Hi 👋 」
└┬❖ 「 ${message.client.name} 」
┌┤✑  I'm alive Now🎉
││✑  🐦🖐️!!
│└───────────────┈ ⳹
│ 「 BOT INFO 」
│✙ 𝗦𝗽𝗲𝗲𝗱 : ${Wspeed.toFixed(4)} miliseconds
│✙ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│✙ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : Whats_Bot_MD
│✙ 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : Dark_Ezio
│✙ 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${ezio.jsonConfig.owner[1]}
│✙ 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│✙ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│✙ 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${global.mydb.users.length}
│✙ 𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁𝘀 : ${global.mydb.hits}
└┬──────────────┈ ⳹
 │✑  D & T : ${ov_time}
 │✑  Please Select The Button Below.
 └───────────────┈ ⳹`;

      // const templateButtons = [
      //   {
      //     urlButton: {
      //       displayText: "📰 Subscrib On YouTube 📍",
      //       url: "https://www.youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ",
      //     },
      //   },
      //   {
      //     urlButton: {
      //       displayText: "📟 My Blogs",
      //       url: "https://aidarkezio.github.io/",
      //     },
      //   },
      //   {
      //     quickReplyButton: {
      //       displayText: "🔖 All Menu 🔖",
      //       id: ".all-menu",
      //     },
      //   },
      //   {
      //     quickReplyButton: {
      //       displayText: "⭐ All List ⭐",
      //       id: `.all-list`,
      //     },
      //   },
      //   {
      //     quickReplyButton: {
      //       displayText: "👨🏼‍💻 Creater & Owner 👨🏼‍💻",
      //       id: `.creater`,
      //     },
      //   },
      // ];

      // const buttonMessage = {
      //   text: Content,
      //   footer: Footer,
      //   templateButtons: templateButtons,
      //   image: {
      //     url: "https://raw.githubusercontent.com/AiDarkEzio/Whats-Bot/master/GojoMedia/D_E-TMB.jpg",
      //   },
      // };

    //   await client.sendMessage(message.client.jid, buttonMessage);

    await client.sendMessage( message.from, { image: {url: ezio.config.image.url.D_E_TMB }, caption: Content, }, { quoted: message })


      global.catchError = false;
    } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage(
        message.from,
        error,
        message.key,
        message
      );
    }
  }
);
