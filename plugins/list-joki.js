import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let menu_nya = `
▰▱▰▱▰▱▰▱▰▱▰▱▰▱
*Joki Mlbb By Serohii.id_*
▰▱▰▱▰▱▰▱▰▱▰▱▰▱
≡ _*Joki perbintang*_
▸ Elite Rp. 3K/B
▸ Master Rp. 4K/B
▸ Grandmaster Rp. 6K/B
▸ Epic Rp. 7K/B
▸ Legend Rp. 8K/B
▸ Mytic Rp. 10K/B
▰▱▰▱▰▱▰▱▰▱▰▱▰▱
≡ _*Benefit?*_
▸ Rank naik
▸ Mmr naik
▸ History wangy
▰▱▰▱▰▱▰▱▰▱▰▱▰▱
≡ _*Payment*_
▸ Pulsa (Telkomsel): 82129318321
▸ Dana: 82320087436
▰▱▰▱▰▱▰▱▰▱▰▱▰▱
Minat?, Ketik *.owner*
▰▱▰▱▰▱▰▱▰▱▰▱▰▱`
conn.sendMessage(m.chat, {
text: menu_nya,
contextInfo: {
externalAdReply: {
title: "▸ Ini list nya",
thumbnailUrl: "https://telegra.ph/file/20f354702edbce3607d5d.jpg",
sourceUrl: "https://www.instagram.com/ureshii.id_",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['jokimlbb']
handler.tags = ['store']
handler.command = ['jokimlbb']
export default handler;