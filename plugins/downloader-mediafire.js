import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
	if (!args[0]) throw 'Masukan Link\nContoh : *.mf* https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file'
	m.react(rwait)
	try {
	let res = await fetch(`https://api.xyroinee.xyz/api/downloader/mediafire?url=${args[0]}&apikey=${global.xyro}`)
	let data = await res.json()
let json = data.data
	conn.sendFile(m.chat, json.url, json.title, '', m, null, { mimetype: json.url, asDocument: true })
	} catch (e) {
m.reply(`Terjadi Kesalahan: Tidak Dapat Mengambil Data Atau Ukuran File Terlalu Besar`)
}
}
handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

export default handler
