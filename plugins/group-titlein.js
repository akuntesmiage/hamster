let handler = async (m, { conn, args, text}) => {
    let who = m.mentionedJid[0] || conn.parseMention(text[0]) || (text[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (m.isGroup) who = m.mentionedJid[0]
    let [orang, nama] = text.split`|`
    if (!who) throw 'Tag salah satu lah'
    if (!orang) throw 'Tag salah satu lah'
    if (!nama) throw 'Namanya apa?\nContoh : .titlein @Tag|Nama
    if (!(who in global.db.data.users)) throw 'User tidak terdaftar dalam DATABASE!!'
    let user = global.db.data.users[who]
  user.title = nama
  m.reply(`📣 ${conn.getName(who)} sekarang mendapatkan title\n☁ ️${nama}`)
}
handler.help = ['titlein <nama>']
handler.tags = ['owner']
handler.mods = true
handler.command = /^titlein$/i

export default handler