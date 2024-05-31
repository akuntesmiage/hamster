import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.xmoji = '🔥' 
global.md = '『 ⎔ 𝙇𝙤𝙖𝙙𝙞𝙣𝙜... 』'

global.owner = [
['628895154319', 'YonccyMD', true],
]
global.author = 'YonccyMC'
global.waauthor = '628895154319'
global.mods = ['628895154319']
global.prems = ['628895154319']
global.nomorbot = '628895154319'
global.nomorown = '628895154319'
global.nameown = 'RiffMD'
global.maxwarn = '3'

//infoo
global.nomorwa = '628895154319'
global.panel = '-'
global.ownpanel = '© RiffMc'
global.kecepatan = 'Fast Respon'
global.versibot = 'v22'
global.packname = 'Dibuat Oleh'
global.author = '© RiffMc'
global.namebot = 'YonccyyBotzz'
global.qqq = 'YonccyBotzz | © RiffMx'
global.wm = 'RiffBotzz'
global.stickpack = 'Sticker By'
global.lopr = 'Ⓟ'
global.lolm = 'Ⓛ'
global.stickauth = '© RiffBotzz'

//foto
global.menu = fs.readFileSync('./media/menu.jpg') 
global.pepe = fs.readFileSync('./media/thumb.jpg')
global.fotonya = 'https://telegra.ph/file/529ed6bfd73b1c98d279d.jpg'
global.fotonya2 = `https://telegra.ph/file/529ed6bfd73b1c98d279d.jpg`
global.fp = fs.readFileSync('./media/thumb.jpg')
global.thumb = fp
global.vid = 'https://telegra.ph/file/24ab81e14120cc82483f7.mp4'

global.fla1 = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.fla2 = 'https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wrestler-logo&text='
global.fla3 = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='


// Link Sosmed
global.sig = 'https://chat.whatsapp.com/FMIkG3nGLEDAztjFYwiAOo'
global.syt = 'https://chat.whatsapp.com/FMIkG3nGLEDAztjFYwiAOo'
global.sgh = 'https://chat.whatsapp.com/FMIkG3nGLEDAztjFYwiAOo'
global.sfb = 'https://chat.whatsapp.com/FMIkG3nGLEDAztjFYwiAOo'
global.sgc = 'https://chat.whatsapp.com/FMIkG3nGLEDAztjFYwiAOo'

global.psaweria = '-'
global.ptrakterr = 'https://trakteer.id'
global.pdana = '-'
global.pgopay = '-'
global.povo = '-'

// Info Wait
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 

// Apikey
global.lol = 'e4ac71438a5a3643da2f5794'
global.rose = 'Rs-putangina'
global.xyro = '7H4OkmzPZZ'

global.APIs = {
    lol: "https://api.lolhuman.xyz",
    xyro: "https://api.xyroinee.xyz",
    popcat : "https://api.popcat.xyz"
}

global.APIKeys = {
    "https://api.lolhuman.xyz": "fafbc90143ed7cfe7a2907f9",
    "https://api.xyroinee.xyz": "7H4OkmzPZZ",
    "https://api-fgmods.ddns.net": "fg-dylux"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})



function SizeDoc() {
  return Math.pow(10, 15)
}
function PageDoc() {
  return Math.pow(10, 10)
}


function Sapa() {
  let Apa = pickRandom(["Apa kabar ", "Halo ", "Hai "])
  return Apa
}


function Pagi() {
  let waktunya = moment.tz("Asia/Jakarta").format("HH")
  let ucapin = "Selamat malam 🌙"
  if (waktunya >= 1) {
      ucapin = "Selamat Pagi 🗿"
  }
  if (waktunya >= 4) {
      ucapin = "Selamat pagi 🌄"
  }
  if (waktunya > 10) {
      ucapin = "Selamat siang ☀️"
  }
  if (waktunya >= 15) {
      ucapin = "Selamat sore 🌅"
  }
  if (waktunya >= 18) {
      ucapin = "Selamat malam 🌙"
  }
  if (waktunya >= 24) {
      ucapin = "Selamat Begadang 🗿"
  }
  return ucapin
}