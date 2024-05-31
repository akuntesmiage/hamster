import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `
▰▱▰▱▰▱▰▱▰▱▰▱▰▱
≡ *Thanks to:*

▸ Allah SWT
▸ Orang Tua
▸ Buyer Premium
▸ Penyedia Apikey
▸ Penyedia Module
▸ Firsha
▸ Takayama Kazuki
▸ Vynaa
▰▱▰▱▰▱▰▱▰▱▰▱▰▱
≡ *Yang terlibat di sc ini:*

▸ Fikri (Gw Sendiri)
▸ Vynaa (My Partner)
▸ Darwin Ofc (Sc Base)
▸ ZYKO MD  (Sc Sup)
▸ Nans Offc (Sc Sup)
▸ Dylux-MD (Sc Sup)
▸ Adiwajishing (Module)
▸ Wh Mods Dev
▸ XTRAM-TEAMMD
▸ Jarot Ofc
▸ Kanna Chan
▸ Christian ID
▸ Fokus ID
▸ Aldilesmana
▸ Wh Mods MD
▸ Fzone
▸ Arul Ofc
▸ Zeeone Ofc
▸ Frhn
▰▱▰▱▰▱▰▱▰▱▰▱▰▱
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/5478e28cc3ace94df0d43.jpg' }, caption: tqto }, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto)$/i;

export default handler;
