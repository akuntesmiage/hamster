let handler = async (m, { conn, text, usedPrefix, command }) => {
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
    if (!text) throw `Kalau Kamu Menemukan Pesan Error, Lapor Pake Perintah Ini\n\nContoh:\n${usedPrefix + command} Selamat Siang Owner, Saya Menemukan Error Seperti <copy/tag pesan erornya>`
    if (text.length < 10) throw `Laporan Terlalu Pendek, Minimal 10 Karakter!`
    if (text.length > 1000) throw `Laporan Terlalu Panjang, Maksimal 1000 Karakter!`
    let teks = `▸ *${command.toUpperCase()}!*\n▸ Dari : *@${m.sender.split`@`[0]}*\n▸ Pesan : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan Terkirim Kepemilik Bot, Jika ${command.toLowerCase()} Hanya Main-Main Tidak Akan Ditanggapi._`)
}
handler.help = ['report']
handler.tags = ['main']
handler.command = /^(report|request)$/i
export default handler
