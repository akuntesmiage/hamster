//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag pengguna'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'Masukkan jumlah *XP* yang ingin Anda tambahkan'
  if (isNaN(txt)) throw 'Hanya angka'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw 'Minimum adalah  *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`々 *T A M B A H*\n│▸ *Total:* ${xp}\n└──···`)
 conn.fakeReply(m.chat, `々 *S E L A M A T*\n│▸ *+${xp}* XP\n└──···`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['addxp'] 
handler.rowner = true

export default handler

