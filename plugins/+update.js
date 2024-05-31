let handler = async m => m.reply(`
≡ *${namebot} ${versibot}
▸ Ketik .newfitur untuk melihat fitur baru
▸ Ketik .bugfix untuk melihat fix fitur

≡ *Note:*
▸ Ketik .report untuk melaporkan bug ke owner
`.trim()) // Tambah sendiri kalo mau
handler.help = ['update']
handler.tags = ['update']
handler.command = ['update']
export default handler