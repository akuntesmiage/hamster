import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let menu_nya = `
▰▱▰▱▰▱▰▱▰▱▰▱▰▱
≡ _*Ureshii.id menyediakan:*_
▸ Jasa design
▸ Sewa bot
▸ Jasa unban akun wa
▸ Jasa pembuatan logo
▸ Jasa joki mobile legend
▸ DLL
▰▱▰▱▰▱▰▱▰▱▰▱▰▱`
conn.sendMessage(m.chat, {
text: menu_nya,
contextInfo: {
externalAdReply: {
title: "Testi?, Cek Ig!",
thumbnailUrl: "https://telegra.ph/file/e13270d2d7b24e3cdc2d7.jpg",
sourceUrl: "https://www.instagram.com/Serohii.id_",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['alljasa']
handler.tags = ['store']
handler.command = ['alljasa'];
export default handler;