let handler = async (m, { text, usedPrefix }) => {
    let salah = `☁ ️Pilihan yang tersedia\n🏙️ Gunting, Kertas, Batu\n\nContoh : ${usedPrefix}suit gunting\n\n❗Kasih spasi!`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`☁️ Seri!\nKamu: ${text}\nBot: ${astro}`)
    } else if (text == '🗿 Batu') {
        if (astro == '✂️ Gunting') {
            
            m.reply(`☁️ Kamu menang!\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`☁ ️Kamu kalah!\nKamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == '✂️ Gunting') {
        if (astro == '📄 Kertas') {
            
            m.reply(`☁️ Kamu menang!\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`☁️ Kamu kalah!\nKamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == '📄 Kertas') {
        if (astro == '🗿 Batu') {

            m.reply(`☁️ Kamu menang!\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`☁ ️Kamu kalah!\nKamu: ${text}\nBot: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i
handler.group = true

export default handler
