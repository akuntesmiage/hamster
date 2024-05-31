let handler = async (m, { conn }) => {
  let hasil = Math.floor(Math.random() * 10000)
  let time = global.db.data.users[m.sender].lastmiming + 14400000
  if (new Date - global.db.data.users[m.sender].lastmiming < 14400000) throw `々 Tunggu *${msToTime(time - new Date())}* untuk kembali ke tambang`
  global.db.data.users[m.sender].money += hasil
  m.reply(`々 Selamat, Kamu mendapatkan *${hasil} Money*`)
  global.db.data.users[m.sender].lastmiming = new Date * 1
handler.help = ['mine']
handler.tags = ['econ']
handler.command = ['minar', 'miming', 'mine'] 

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Jam " + minutes + " Menit " + seconds + " Detik " 
}
