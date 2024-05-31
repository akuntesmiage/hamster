//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag pengguna'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw 'Masukkan jumlah *Diamond* yang ingin Anda tambahkan'
    if (isNaN(txt)) throw 'Hanya angka'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw 'Minimum adalah  *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`々 *T A M B A H*\n│▸ *Total:* ${dmt}\n└──···`)
   conn.fakeReply(m.chat, `々 *S E L A M A T*\n│▸ *+${dmt}* Diamond\n└──···`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi'] 
handler.rowner = true

export default handler

