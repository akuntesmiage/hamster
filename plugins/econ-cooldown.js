import { xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
m.react(rwait)
	let { lasthourly, lastbansos, lastmiming, lastclaim, lastweekly, lastmonthly, lastngojek, lastnguli, lastrob, lastwork } = global.db.data.users[m.sender]

    let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Cooldown'
    let str = `
々 * C O O L D O W N*
│▸ *Last Work :* ${lastwork > 0 ? '❌' : '✅'}
│▸ *Last Rob :* ${lastrob > 0 ? '❌' : '✅'}
│▸ *Last Nguli :* ${lastnguli > 0 ? '❌' : '✅'}
│▸ *Last Ngewe :* ${lastngojek > 0 ? '❌' : '✅'}
│▸ *Last Mining :* ${lastmiming > 0 ? '❌' : '✅'}
│▸ *Last Bansos :* ${lastbansos > 0 ? '❌' : '✅'}
│▸ *Last Hourly :* ${lasthourly > 0 ? '❌' : '✅'}
│▸ *Last Claim :* ${lastclaim > 0 ? '❌' : '✅'}
│▸ *Last Weekly :* ${lastweekly > 0 ? '❌' : '✅'}
│▸ *Last Monthly :* ${lastmonthly > 0 ? '❌' : '✅'}
└──···
`.trim()

await conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: "Cooldown | UreshiiBotz",
thumbnailUrl: pp,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['cooldown']
handler.tags = ['econ']
handler.command = /^(cd|cooldown)$/i
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)

