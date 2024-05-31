let handler = async (m, { text }) => {
	if (!text) throw "Teksnya?";

	await conn.relayMessage(m.chat, {
scheduledCallCreationMessage: {
		callType: "AUDIO",
		scheduledTimestampMs: 99990362720,
		title: text,
		}
	},  { quoted: m})
	return m.reply("Berhasil.");
};

handler.help = ["warcall"];
handler.tags = ["group"];
handler.command = /^(warcall)$/i;

handler.group = true;
handler.admin = true;

export default handler;

