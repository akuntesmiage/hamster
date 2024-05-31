let handler = async (m, { conn }) => {
    conn.tebakchara = conn.tebakchara ? conn.tebakchara : {}
    let id = m.chat
    if (!(id in conn.tebakchara)) throw false
    let json = conn.tebakchara[id][1]
    conn.reply(m.chat, '```' + clue + '```\n\n[!] Balas soalnya, bukan pesan ini', conn.susunkata[id][0])
}
handler.command = /^hcha$/i

handler.limit = true

export default handler