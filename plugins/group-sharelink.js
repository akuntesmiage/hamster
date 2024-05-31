let handler  = async (m, { conn, usedPrefix: _p }) => {

let linknyakontol = global.sgc

let info = `
${linknyakontol}
${linknyakontol}
${linknyakontol}

#IzinAdmin
Back Juga Gpp (Jgn spam)

*Btw ini Group bot*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '#Izin Admin', 'status@broadcast')
}
handler.help = ['sharelink']
handler.tags = ['group']
handler.command = /^(sharelink)$/i

export default handler