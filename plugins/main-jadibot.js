let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
≡ OWNER BOT MELAYANI : 
▸ JASA JADIBOT : 25K
▸ KONTAK OWNER : wa.me/6283873688108

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
© _UreshiiBotz_
`.trim()
  conn.sendFile(m.chat, 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=Jadibot', null, caption, m)
}
handler.help = ['jadibot']
handler.tags = ['main']
handler.command = /^(jadibot)$/i;

handler.register = false
export default handler