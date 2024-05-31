let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `々 Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == '9827282' || args[0] == '871728' || args[0] == '200478' || args[0] == 'BbL016JJQBCSr54OwwW0' || args[0] == 'giftkey01389320007' || args[0] == 'kode013923') {

    if (new Date - global.db.data.users[m.sender].lastgift > 86400000) {
       conn.reply(m.chat, '々 Selamat, kamu telah mendapatkan\n▸ Money : +50000')
    global.db.data.users[m.sender].money += 50000
} else conn.reply(m.chat, '々 Kode Gift Gratis hanya dapat digunakan sehari sekali, dan kode hanya bisa di pakai sekali', m)
   } else {
        conn.reply(m.chat, `々 Kode Salah\n▸ Silahkan minta owner terlebih dahulu untuk mendapatkan kodegift gratis`, m)
    }
}
handler.help = ['freegift <kode>']
handler.tags = ['econ']
handler.command = /^(freegift)$/i

export default handler 
