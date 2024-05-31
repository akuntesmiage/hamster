//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag pengguna'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'Masukkan jumlah *Limit* yang ingin Anda tambahkan'
  if (isNaN(txt)) throw 'Hanya angka'
  let xp = parseInt(txt)
  let money = xp
  
  if (money < 1) throw 'Minimum adalah  *1*'
  let users = global.db.data.users
  users[who].limit += xp

  await m.reply(`々 *T A M B A H*\n│▸ *Total:* ${xp}\n└──···`)
 conn.fakeReply(m.chat, `々 *S E L A M A T*\n│▸ *+${xp}* Limit\n└──···`, who, m.text)
}

handler.help = ['addlimit <@user>']
handler.tags = ['econ']
handler.command = ['addlimit'] 
handler.rowner = true

export default handler

