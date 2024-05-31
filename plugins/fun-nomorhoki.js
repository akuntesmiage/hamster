//let axios = require("axios");
import axios from 'axios'
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan nomor hpmu yang akan diartikan', m)

	axios.get(`https://kocakz.herokuapp.com/api/primbon/nomorhoki?nomor=${text}`).then ((res) => {
	 	let hasil = `☁️ ${res.data.result.hoki}\n⛩️ Positif : ${res.data.result.positif}\n🌫️ Negatif : ${res.data.result.positif}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['nomorhoki'].map(v => v + ' <no hp>')
handler.tags = ['fun']
handler.command = /^(nomorhoki)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

export default handler 
