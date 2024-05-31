import fetch from 'node-fetch'
let handler = async (m, {conn, usedPrefix}) => {
	m.react(rwait)
	let balll = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Balance'
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `Pengguna Tidak Ada Dalam Database Saya`
    let apalah = `
々 *B A L A N C E*
│▸ *Nama* : @${who.split('@')[0]}
│▸ *Diamond* : ${user.diamond}
│▸ *Limit* : ${user.limit}
│▸ *Exp* : Total ${user.exp}
│▸ *Money* : Total ${user.money}
└──···
`

conn.sendMessage(m.chat, {
text: apalah,
contextInfo: {
externalAdReply: {
title: "Balance | UreshiiBotz",
thumbnailUrl: balll,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 

export default handler
