import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {

  let hasil = Math.floor(Math.random() * 15000)
  let time = global.db.data.users[m.sender].lastwork + 3600000
  if (new Date - global.db.data.users[m.sender].lastwork < 3600000) throw `々 Kamu sudah kecapean, karena itu anda harus menunggu *${msToTime(time - new Date())}* untuk kembali bekerja!`

    /*let w = await axios.get(global.API('fgmods', '/api/work', { }, 'apikey'))
    let res = w.data.result*/
    let anu = (await axios.get('https://raw.githubusercontent.com/fgmods/fg-team/main/games/work.json')).data
    let res = pickRandom(anu)
 global.db.data.users[m.sender].money += hasil

  m.reply(`▸ Kamu mendapat hasil *${hasil} Money*`)
  global.db.data.users[m.sender].lastwork = new Date * 1
handler.help = ['work']
handler.tags = ['econ']
handler.command = ['work', 'w', 'trabajar']

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return minutes + " Menit " + seconds + " Detik " 
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
