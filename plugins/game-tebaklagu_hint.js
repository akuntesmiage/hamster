let handler = async (m, { conn }) => {
    conn.game = conn.game ? conn.game : {}
    let id = 'tebaklagu-' + m.chat
    if (!(id in conn.game)) return
    let json = conn.game[id][1]
    conn.reply(m.chat, '```' + clue + '```\n\n[!] Balas soalnya, bukan pesan ini', conn.susunkata[id][0])
}
handler.command = /^hlagu$/i
handler.limit = true
export default handler