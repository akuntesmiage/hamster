let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Cara penggunaan :*\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|${namebot}|Halo.`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|${namebot}|Halo.`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.';
    if (jid == m.sender) throw 'Tidak bisa mengirim pesan menfess ke diri sendiri.'
    
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    try {
    	let id = + new Date
        let txt = `▸ Hai @${data.jid.split('@')[0]}, kamu menerima pesan Menfess nih.\n\n▸ Dari: ${name}\n▸ Pesan: \n${pesan}\n\n▸ Mau balas pesan ini kak? bisa kak. kakak tinggal ketik pesan kakak nanti saya sampaikan ke ${name}.`.trim();
        await conn.sendMessage(m.chat, {
text: txt,
contextInfo: {
externalAdReply: {
title: "UreshiiBotz | © Frhn",
thumbnailUrl: "https://telegra.ph/file/efbfe2eec5512f94230ce.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
        .then(() => {
            m.reply('Berhasil mengirim pesan menfess.')
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
    } catch (e) {
        console.log(e)
        m.reply('error');
    }
}
handler.tags = ['main']
handler.help = ['menfess']
handler.command = /^(mfs|menfess|menfes|confes)$/i
handler.register = true
handler.private = true

export default handler
