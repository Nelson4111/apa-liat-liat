let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `𝐈𝐲𝐚 𝐚𝐝𝐚 𝐲𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 𝐬𝐚𝐲𝐚 𝐛𝐚𝐧𝐭𝐮 𝐤𝐚𝐤?`

conn.sendHydrated(m.chat, info.trim(), '                「 𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃 あ⁩ 」', null, 'https://chat.whatsapp.com/BFFKYGNsvrk9iOLyjrkIib', 'SUPPORT', null, null, [
      ['MENU', '.menu'],
      [null, null],
      [null, null]
    ], m)
}
handler.customPrefix = /^(hai|woi|hi|halo|p|bang|oi|kak|:v)$/i
handler.command = new RegExp

handler.private = true
export default handler
