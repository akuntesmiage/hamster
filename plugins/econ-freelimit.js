let handler = async(m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.freelimit)
    let _timers = (79200000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - user.freelimit > 79200000) {
    if (user.limit >= 1) throw '々 Limit Kamu Harus 0 Untuk Mengambil Free Limit'
    m.reply(`々 Selamat, Kamu mendapatkan :\n▸ Limit : +10`)
    user.limit += 10
    user.freelimit = new Date * 1
    } else m.reply(`々 Tunggu selama *${timers}* untuk Mengambil limit kembali...`)
}
handler.help = ['freelimit']
handler.tags = ['econ']
handler.command = /^freelimit$/i
handler.register = true
handler.group = true
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

