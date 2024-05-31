const limit = 15
const exp = 25000
const money = 25000
const diamond = 15
const warn = 1

let handler = async (m, { isPrems }) => {

 let start = `Mencari target . . .`
 let boost = `Target ditemukan . . .`
 let boost2 = `Mulai mengocok 🥵🥵`
 let boost3 = `Mulai mengewe 🥵🥵💦💦`
 let boost4 = `Ahhhh.. Sakitt >< 🥵💦`
 let boost5 = `Crotttt.. 💦💦💦🥵`

   await m.reply(start)
   await m.reply(boost)
   await m.reply(boost2)
   await m.reply(boost3)
   await m.reply(boost4)
   await m.reply(boost5)
    let time = global.db.data.users[m.sender].lastngojek + 86400000
    if (new Date - global.db.data.users[m.sender].lastngojek < 86400000) throw `々 Kamu Sudah Kecapean Setelah Ngewe 10 Ronde\n▸ Tunggu Selama ${msToTime(time - new Date())} Lagi`
        global.db.data.users[m.sender].exp += exp
        global.db.data.users[m.sender].money += money
        global.db.data.users[m.sender].limit += limit
        global.db.data.users[m.sender].diamond += diamond
        global.db.data.users[m.sender].warn += warn
        conn.reply(m.chat, `々 Selamat, Kamu Mendapatkan :\n▸ Limit : +15\n▸ Exp : +25,000\n▸ Money : +25,000\n Diamond : +15\n\n々 Karena kamu melakukan hal haram, Warn +1`, m)
        global.db.data.users[m.sender].lastngojek = new Date * 1
    }
    
handler.help = ['anu']
handler.tags = ['econ']
handler.command = /^(anu)$/i
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