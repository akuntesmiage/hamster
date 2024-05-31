let handler = async (m, { conn }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (!(id in conn.tekateki)) throw false
    let json = conn.tekateki[id][1]
    conn.reply(m.chat, '```' + clue + '```\n\n[!] Balas soalnya, bukan pesan ini', conn.susunkata[id][0])
}
handler.command = /^htek$/i

handler.limit = true

export default handler