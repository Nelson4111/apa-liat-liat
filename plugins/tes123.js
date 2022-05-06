let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Bot ON Kak*`

conn.sendHydrated(m.chat, info.trim(), '                「 𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃 あ⁩ 」', null, 'https://chat.whatsapp.com/BFFKYGNsvrk9iOLyjrkIib', 'SUPPORT', null, null, [
      ['MENU', '.menu'],
      [null, null],
      [null, null]
    ], m)
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

export default handler
let wm = global.botwm