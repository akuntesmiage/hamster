let handler = async (m, { conn }) => {
    conn.tebaksurah = conn.tebaksurah ? conn.tebaksurah : {}
    let id = m.chat
    if (!(id in conn.tebaksurah)) throw false
    let json = conn.tebaksurah[id][1]
    let ans = json.jawaban.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\n\n[!] Balas soalnya, bukan pesan ini', conn.susunkata[id][0])
}
handler.command = /^hsur$/i
handler.limit = true
export default handler