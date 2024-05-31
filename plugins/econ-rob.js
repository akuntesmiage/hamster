import fetch from 'node-fetch'
const timeout = 7200000
let ro = 20000
let handler = async (m, { conn, usedPrefix, command}) => {
    let pppp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Maling'
    let time = global.db.data.users[m.sender].lastrob + 7200000
    if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `々 Tunggu *${msToTime(time - new Date())}* untuk mencuri lagi`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `々 Tag seseorang untuk mencuri`
    if (!(who in global.db.data.users)) throw `々 Pengguna belum join rpg`
    let users = global.db.data.users[who]
    let rob = Math.floor(Math.random() * ro)
    if (users.money < rob) return m.reply(`々 @${who.split`@`[0]} uang dia tidak cukup *${ro} Money*\n▸ Jangan mencuri dari dia, dia miskin!`, null, { mentions: [who] })    
   global.db.data.users[m.sender].money += rob
   global.db.data.users[who].money -= rob
  
    let apalah = `々 Berhasil Mencuri *${rob} Money* Dari @${who.split`@`[0]}\n▸ Tips : Tabung money kedalam bank agar tidak dicuri`
    
    conn.sendMessage(m.chat, {
text: apalah,
contextInfo: {
externalAdReply: {
title: "Maling | UreshiiBotz",
thumbnailUrl: pppp,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})

    global.db.data.users[m.sender].lastrob = new Date * 1
  setTimeout(() => {
					conn.reply(m.chat, `Yuk waktunya Nyolong lagi…`, m)
					}, timeout)
					}

  handler.help = ['rob']
  handler.tags = ['econ']
  handler.command = ['robar', 'rob','mencuri','merampok']
  
  export default handler
  
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return hours + " Jam " + minutes + " Menit "
  }
  
