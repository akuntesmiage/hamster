
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
┌─────────────────┈❖
│≡ Ayolah donate kak :)
└┬────────────────┈❖
┌┤ Donasi biar bot trs aktif 
│└────────────────┈❖
│❖ Dana : 083873688108
│❖ Pulsa (Axis) : 083873688108
│
│❖ Q.S Az-Zalzalah Ayat 7 :
│
│"Maka barangsiapa yang
│mengerjakan kebaikan seberat
│zarrah,niscaya ia akan melihat
│balasannya"
└─────────────────┈❖
`
let img = 'https://telegra.ph/file/653c6b8ea78a343247e22.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
