import fs from 'fs'
import fetch from 'node-fetch'
function handler(m) {
  let info = fs.readFileSync('./media/menu.mp3')
  const kontak = {
	"displayName": 'My owner',
    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;${author}\nNICKNAME: Owner ${author}\nORG:${author}\nTITLE:soft\nitem1.TEL;waid=${waauthor}\nitem1.X-ABLabel:Nomor Owner\nitem2.URL:https://www.instagram.com/\nitem2.X-ABLabel:More\nitem3.EMAIL;type=INTERNET:farhanscan.4@gmail.com\nitem3.X-ABLabel:Mail Owner Frhn\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:More\nitem4.X-ABLabel:Lokasi Saya\nBDAY;value=date:6-5-2008\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
conn.sendFile(m.chat, info, '', '', m, true)
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = ['owner']

export default handler