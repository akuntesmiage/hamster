import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let pppp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Craft'

  try {
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch ((args[0] || '').toLowerCase()) {
          case 'pickaxe':
            if (user.pickaxe > 0) return m.reply('Kamu sudah memilik ini')
            if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : \n10 kayu🪵 \n5 iron⛓\n20 String🕸️\n5 Batu 🪨`)
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 5
            user.rock -= 5
            global.db.data.users[m.sender].string -= 20
            global.db.data.users[m.sender].pickaxe += 1
            user.pickaxedurability = 40
            m.reply("Sukses membuat 1 pickaxe 🔨")
            break
          case 'atm':
            if (user.atm > 0) return m.reply('々 Kamu sudah memilik ini')
            if(user.money < 10000 || user.diamond < 6) return m.reply(`々 Barang tidak cukup\n▸ Untuk membuat atm. Kamu memerlukan :\n▸ 10k Money️\n▸ 6 Diamond`)
            global.db.data.users[m.sender].money -= 10000
            global.db.data.users[m.sender].diamond -= 6
            global.db.data.users[m.sender].atm += 1
            global.db.data.users[m.sender].fullatm = 5000000
            m.reply("々 Sukses membuat 1 Atm")
            break
          default:
            let caption = `
々 *A T M*
│▸ 6 Diamond
│▸ 10k Money
└──···
`
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: "Craft | UreshiiBotz",
thumbnailUrl: pppp,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
            break
        }
    } else {
      let caption = `
々 *A T M*
│▸ 6 Diamond
│▸ 10k Money
└──···
`
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: "Craft | UreshiiBotz",
thumbnailUrl: pppp,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['craft']
handler.tags = ['econ']
handler.command = /^(craft|crafting|chant)/i

export default handler