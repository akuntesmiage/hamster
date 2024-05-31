const limit = 1
const exp = 2500
const money = 2500
const diamond = 1

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lasthourly + 604800000
    if (new Date - global.db.data.users[m.sender].lasthourly < 604800000) throw `々 Kamu Sudah Mengambilnya Diminggu Ini\n▸ Tunggu Selama ${msToTime(time - new Date())} Lagi`
        global.db.data.users[m.sender].exp += exp
        global.db.data.users[m.sender].money += money
        global.db.data.users[m.sender].limit += limit
        global.db.data.users[m.sender].diamond += diamond
        conn.reply(m.chat, `々 Selamat, Kamu Mendapatkan :\n▸ Limit : +1\n▸ Exp : +1,000\n▸ Money : +1,000\n▸ Diamond : +1`, m)
        global.db.data.users[m.sender].lasthourly = new Date * 1
    }
    
handler.help = ['perjam']
handler.tags = ['econ']
handler.command = /^(perjam)$/i
handler.group = true
export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    monthly = Math.floor((duration / (1000 * 60 * 60 * 24)) % 720)

  monthly  = (monthly < 10) ? "0" + monthly : monthly
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return monthly + " Hari " +  hours + " Jam " + minutes + " Menit "
}