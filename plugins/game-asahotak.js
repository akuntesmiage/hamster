import fs from 'fs'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.game = conn.game ? conn.game : {}
    let id = 'asahotak-' + m.chat
    if (id in conn.game) return conn.reply(m.chat, 'Masih ada pertanyaan belum terjawab di chat ini', conn.game[id][0])
    let src = JSON.parse(fs.readFileSync('./json/asahotak.json', 'utf-8'))
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
☁ ️${json.soal}

⌛ Timeout *${(timeout / 1000).toFixed(2)} detik*
☃️ Bonus: ${poin} XP
🏙 ️Ketik ${usedPrefix}hotak untuk bantuan
`.trim()
    conn.game[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.game[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.game[id][0])
            delete conn.game[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak$/i

handler.onlyprem = true
handler.game = true

export default handler