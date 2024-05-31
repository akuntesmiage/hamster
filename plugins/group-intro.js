let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│ *「 Kartu Intro 」*
│ *Nama    :*
│ *Gender   :* 
│ *Umur     :* 
│ *Hobby    :* 
│ *Status    :* 
│ *Asal      :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['intro']
handler.tags = ['group']
handler.command = /^(intro)$/i

export default handler