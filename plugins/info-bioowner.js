import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let memek = `
▰▱▰▱▰▱▰▱▰▱▰▱▰▱
▸ *Nama* : ${pnameown}
▸ *Gender* : ${pgender}
▸ *Agama* : ${pagama}
▸ *Tanggal Lahir* : ${tanggallahir
▸ *Umur* : ${pumur}
▸ *Kelas* : ${pkelas}
▸ *Hobby* : ${phobby}
▸ *Sifat* : ${psifat}
▸ *Tinggal* : ${tempattinggal}
▸ *Instagram* : ${pinstag}
▰▱▰▱▰▱▰▱▰▱▰▱▰▱
`

conn.sendMessage(m.chat, {
      text: memek,
      contextInfo: {
      externalAdReply: {
      title: `${author}`,
      body: global.author,
      thumbnailUrl: 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=BioOwner',
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i
  
  export default handler
 