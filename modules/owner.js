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
const lang = ezio.getString("whats_bot");
const fs = require("fs");
const path = require("path");

ezio.addCommand(
  {
    pattern: ["owner", "creater"],
    desc: "It's send Owner Detals",
    sucReact: "👨🏼‍💻",
    category: ["all", "system"],
  },
  async (message, client) => {
    try {
      const buttons = [
        {
          buttonId: "donate",
          buttonText: { displayText: "💰 Donate" },
          type: 1,
        },
      ];

      const text = `---Owner Detals---

⚜ Name: Dark Ezio.
⚜ Number: Wa.me/94761539856
⚜ Company: Subadra Bro
⚜ Web Site: https://aidarkezio.github.io/
⚜ Youtube: https://www.youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ
⚜ GitHub: https://www.github.com/aidarkezio
⚜ FaceBook: https://fb.com/poshitha.subadra (Poshitha Subadra)
⚜ Instagram: https://instagram.com/subadraposhitha (Poshitha Subadra)
⚜ Twitter: https://twitter.com/brosubadra (BroSubadra)

💌 Plz Subscribe Me On  Youtube.

------------------
`;

    //   const buttonMessage = {
    //     image: { url: "https://avatars.githubusercontent.com/u/87601796?v=4" },
    //     caption: text,
    //     footer: ezio.config.exif.footer,
    //     buttons: buttons,
    //     headerType: 4,
    //   };

      await client.sendMessage( message.from, { image: {url: 'https://avatars.githubusercontent.com/u/87601796?v=4' }, caption: text }, { quoted: message })
      await client.sendMessage( message.from, { image: {url: 'https://avatars.githubusercontent.com/u/87601796?v=4' }, caption: text, buttons }, { quoted: message })
    //   await client.sendMessage(message.from, buttonMessage);
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