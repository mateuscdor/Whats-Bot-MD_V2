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

const ezio = require("../events");
const Lang = ezio.getString("_whats");
// const commands = require("../database/ENS.json");
const fs = require("fs");
const path = require("path");

ezio.addCommand(
  {
    pattern: ["menu", '?', 'help'],
    desc: Lang.DESCC,
    sucReact: "📰",
    category: ["all", "system"],
  },
  async (message, client) => {
    try {
      let prefix = new String
      if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
      let CMD_HELP = `
◉═════════════◉
   🫧Whats-Bot Commands🫧
◉═════════════◉
┌─(⚜ All Commands)
│
`;

      ezio.commands.map((command) => {
        if ( command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;

        if (command.category.includes('all')) {
            command.pattern.map((cmd) => {
              CMD_HELP += "│ *🎀 :-* ```" +  + cmd + "```\n";
            });
        }
      });

      CMD_HELP += "│\n│ 💓 Created By Whats_Bot-MD\n└─────────◉";

      await client.sendMessage(
        message.from,
        {
          image: { url: ezio.config.image.url.D_E_TMB },
          caption: CMD_HELP,
        },
        { quoted: message }
      );

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
