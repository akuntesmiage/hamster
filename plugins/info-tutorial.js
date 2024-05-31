import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `
☁️ Tutorial Penggunaan Bot :

1. Semua Fitur Bot Menggunakan Prefix Yaitu Harus Menggunakan Titik (.) Di Awal Perintah Agar Perintahnya Aktif.
Contoh: Ketik .allmenu

2. Jika Kamu Ingin Bermain Game Coba Lihat Di List Have Fun, Di Situ Kamu Bisa Menemukan Fitur Untuk Bersenang Senang Seperti Family100 Yang Mengharuskan Menjawab Semua Pertanyaan.
Contoh Penggunaan: Ketik .family100

3. Jika Ingin Mendownload Seperti Video, Reels Fb/Ig, Story Ig, Dan Lain Sebagainya Kamu Bisa Melihat Di List Menu Download.
Contoh Penggunaan: Ketik .instagram https://www.instagram.com/reel/CtJzdShop6d/?igshid=MzRlODBiNWFlZA==

4. Jika Kamu Ingin Mencari Sesuatu Kamu Bisa Lihat Di List Menu Internet, Kamu Bisa Menemukan Seperti Buka Lapak.
Contoh Penggunaan: Ketik .bukalapak Hoodie Kekinian

5. Jika Ingin Mengubah Ataupun Menggunakan Fitur Yang Berhubungan Dengan Media Seperti Audio, Foto, Dan Video Kamu Harus Balas Chatnya Dan Ketik Perintahnya 
Contoh Penggunaan: Balas/Reply Vn Nya Terus Ketik .tomp3

6. Jika Kamu Kehabisan Limit Kamu Bisa Membelinya Dengan Cara Mengetik .beli limit 1. Kamu Tidak Punya Koin?, Kamu Bisa Memainkan Game Yang Ada Di Menu HaveFun, Jika Kamu Bisa Menjawab/Memenangkan Game Tersebut, Kamu Akan Mendapatkan Exp, Koin, Dan Limit.

_Note: Jika Masih Tidak Mengerti Hubungin Owner Dengan Cara Mengetik .owner_
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=Tutorial' }, caption: rules }, m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i;

export default handler;
