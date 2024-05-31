var handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    let afkj = `≡ ${conn.getName(m.sender)} Telah AFK\n▸ Alasan ${text ? ': ' + text : ''}`
    
    conn.sendMessage(m.chat, {
      text: afkj,
      contextInfo: {
      externalAdReply: {
      title: `Jangan Afk Mulu!`,
      body: `Ntar cepet mati ><`,
      thumbnailUrl: global.fotonya2,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
  }
  handler.help = ['afk']
  handler.tags = ['main']
  handler.command = /^afk$/i
  
  export default handler
