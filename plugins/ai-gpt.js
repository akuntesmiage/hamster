import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Hay adakah yang bisa saya bantu??`
m.reply(md)
let zykomd = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=e4ac71438a5a3643da2f5794&text=${text}&user=user-unique-id`)
let hasil = await zykomd.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['ai']
handler.limit = 2
handler.command = /^(ai|openai)$/i
export default handler