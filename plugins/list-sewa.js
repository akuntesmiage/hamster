import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = 
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '40'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
≡ *Sewa*
▸ *Hemat:* _${sh}k/grup (1 minggu)_
▸ *Normal:* _${sn}k/grup (1 bulan)_
▸ *Standar:* _${ss}k/grup (2 bulan)_
▸ *Pro:* _${sp}k/grup (4 bulan)_                                                      
▸ *Vip:* _${sv}k/grup (12 bulan)_

≡ *Premium*
▸ *Hemat:* _${ph}k (1 minggu)_
▸ *Normal:* _${pn}k (1 bulan)_
▸ *Pro:* _${pp}k (4 bulan)_
▸ *Vip:* _${pv}k (8 bulan)_                                               

≡ *Payment*
▸ *Dana:* ${pdana}
▸ *Gopay:* ${pgopay}
▸ *Ovo:* ${povo}

▰▱▰▱▰▱▰▱▰▱▰▱▰▱
≡ Kak, Kok harganya mahal banget?
▸ Mau tawar menawar? boleh, silahkan chat owner aja

≡ Scam ga nih kak?
▸ Enggalah, Owner 100% Tepati janji #STAYHALAL
▰▱▰▱▰▱▰▱▰▱▰▱▰▱
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `Sewa || ${author}`,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/b11d2895ab50e33d8c909.jpg`,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}

handler.help = ['sewa']
handler.tags = ['info', 'store']
handler.command = /^(sewa|sewabot)$/i

export default handler;