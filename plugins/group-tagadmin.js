let handler = async (m, { conn, participants, groupMetadata }) => {
let loadd = [
 '██▒▒▒▒▒▒▒▒▒▒▒ ▸ 10%',
 '████▒▒▒▒▒▒▒▒▒ ▸ 30%',
 '███████▒▒▒▒▒▒ ▸ 50%',
 '██████████▒▒▒ ▸ 70%',
 '█████████████ ▸ 100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
々 *Tag Admin*

${listAdmin}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['tagadmin']
handler.tags = ['group']
handler.command = /^(tagadmin)$/i

handler.group = true

export default handler