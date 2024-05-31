
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `Tag seseorang\nContoh : *${usedPrefix + command}* @user`
        if (!(who in global.db.data.users)) throw `Pengguna hilang dari database saya`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
々 *Warning*
☁️ *Admin:* ${name}
🌫️ *Pengguna:* @${who.split`@`[0]}
📣 *Peringatkan:* ${warn + 1}/${war}
⛩️ *Alasan:* Baca deks ajg!
`, null, { mentions: [who] }) 
            m.reply(`
々 *PERINGATAN* 

☃️ Anda menerima peringatan dari admin
📣 *Peringatkan:* ${warn + 1}/${war} 

⛩️ Jika Anda menerima *${war}* Peringatan bahwa Anda akan dihapus secara otomatis dari grup
`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`Pengguna melebihi peringatan *${war}* karena itu akan *KICK*`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`Anda tersingkir dari grup *${groupMetadata.subject}* karena Anda telah diperingatkan *${war}* kali`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
