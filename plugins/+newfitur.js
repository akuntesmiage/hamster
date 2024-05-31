let handler = async m => m.reply(`
≡ *Fitur baru telah hadir!*
▸ Islamic menu
▸ Kalkulator
▸ Pacaran menu
▸ Update menu
▸ Menambah fitur .nulis
▸ Menambah fitur .pengumuman
▸ Menambah fitur .infogempa
▸ Menambah fitur .infocuaca
▸ Menambah fitur .intro
▸ DLL!

≡ *Note:*
▸ Jika kamu menemukan bug, .report untuk melapor
`.trim()) //
handler.help = ['newfitur']
handler.tags = ['update']
handler.command = ['newfitur']
export default handler