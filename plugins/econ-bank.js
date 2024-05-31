let handler = async (m, { conn }) => {
m.react(rwait)
  let user = global.db.data.users[m.sender]
  const caption = `
々 *B A N K  U S E R*
│▸ *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
│▸ *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
│▸ *Di Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
│▸ *Money:* ${user.money} Uang Tersisa
│▸ *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
│▸ *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
│▸ *Registered:* ${user.registered ? 'Yes':'No'}
└──···
`.trim()
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: "Bank | UreshiiBotz",
thumbnailUrl: "https://telegra.ph/file/00ee61b555099bbfdd614.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['bank']
handler.tags = ['econ']
handler.command = /^(bank)$/i

handler.register = false
export default handler