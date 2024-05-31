let handler = async m => m.reply(`
≡ *Memperbaiki bug pada fitur*
▸ .toanime yang tidak bisa
▸ .gantengcek tidak respon
▸ .menfess yang tidak respon
▸ Asupan tidak work
▸ Sedikit merubah code pada RPG Menu
▸ Mencoba membuat Cerpen work
▸ DLL!

≡ *Note:*
▸ Ketik .report untuk melaporkan bug ke owner
`.trim()) // Tambah sendiri kalo mau
handler.help = ['bugfix']
handler.tags = ['update']
handler.command = ['bugfix']
export default handler