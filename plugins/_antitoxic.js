import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.reply(m.chat, hehe, m)
	conn.sendFile(m.chat, `${baka.getRandom()}`, "dosa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|babi|bangsad|bgsd|peler|pantek|ngentod|kontol|ngentd|ngntod|koncol|kncl|kncol|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole$/i;
handler.command = new RegExp;

export default handler;

let hehe = "*Kamu Terdeteksi Telah Mengirim Kata-Kata Aneh!*\n▸ “Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim)"
const baka = [
"./vn/dosa.mp3",
]