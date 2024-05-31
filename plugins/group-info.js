let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del, antiBot, antiVideo, antiFoto, antiSticker } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
々 *INFO GROUP*

☁️ ID
${groupMetadata.id}

☃️ Nama
${groupMetadata.subject}

📚 Member
${participants.length} Member

📣 Owner
@${owner.split('@')[0]}

☁️ *Admin*
${listAdmin}

🌫️ *Pengaturan Group:*
Chat Banned: ${isBanned ? 'Aktif' : 'Nonaktif'}
Welcome: ${welcome ? 'Aktif' : 'Nonaktif'}
Anti Bot: ${antiBot ? 'Aktif' : 'Nonaktif'}
Anti Delete: ${del ? 'Aktif' : 'Nonaktif'}
Anti Link: ${antiLink ? 'Aktif' : 'Nonaktif'}
Anti Foto: ${antiFoto ? 'Aktif' : 'Nonaktif'}
Anti Video: ${antiVideo ? 'Aktif' : 'Nonaktif'}
Anti Sticker: ${antiSticker ? 'Aktif' : 'Nonaktif'}

🏙️ Deskripsi
${groupMetadata.desc?.toString() || 'Tidak Ada'}

_Powered By UreshiiBotz_
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

export default handler