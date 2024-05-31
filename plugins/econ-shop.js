import fetch from 'node-fetch'
let pppl = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Shop'
const items = {
    buy: {
        limit: {
            money: 1999
        },
        diamond: {
            money: 1499
        },
        exp: {
            money: 2
        },
    },
    sell: {
        diamond: {
            money: 2000
        },
        limit: {
            money: 5000
        },
        exp: {
            money: 1
        },
    }
}

let handler = async (m, { command, usedPrefix, args }) => {
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    const info = `々 *S H O P*
│▸ Gunakan perintah *${usedPrefix}${command} barang jumlah*
│▸ Contoh: *${usedPrefix}${command} diamond 10*
└──···

々 Item | Harga Beli | Harga Jual
│▸ Limit | 1999 | 5000
│▸ Diamond | 1499 | 2000
│▸ Exp | 2 | 1
└──···
`.trim()
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return conn.sendMessage(m.chat, {
text: info,
contextInfo: {
externalAdReply: {
title: "Shop | UreshiiBotz",
thumbnailUrl: pppl,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`々 Kamu tidak memiliki cukup *${paymentMethod}* untuk membeli *${total} ${item}*\n▸ Kamu butuh *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* lagi *${paymentMethod}* untuk membeli`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return m.reply(`▸ Kamu membeli *${total}* *${item}*`)
    } else {
        if (user[item] < total) return m.reply(`々 Kamu tidak cukup *${item}* untuk di jual, kamu hanya punya sisa *${user[item]}* item`)
        user[item] -= total
        user.money += listItems[item].money * total
        return m.reply(`▸ Kamu menjual *${total}* *${item}*`)
    }
}

handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['econ']
handler.command = /^(buy|sell)$/i

handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}