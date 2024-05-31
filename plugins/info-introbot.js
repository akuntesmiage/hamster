let handler  = async (m, { conn, text, usedPrefix: _p }) => {
let info = `
Halo Kak! ☁️
Aku ${namebot}, bot WhatsApp yang setiap saat dapat membantu kakak!, lain kali main sama aku ya ka!! 😁
`

conn.relayMessage(m.chat, {
scheduledCallCreationMessage: {
		callType: "AUDIO",
		scheduledTimestampMs: 99990362720,
		title: info,
		}
	},  { quoted: m})
}

handler.help = ['introbot']
handler.tags = ['info']
handler.command = ['introbot']
export default handler