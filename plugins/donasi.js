let handler =  m => m.reply(`
-------γ *DONATE* γ-------

Hai kak βΊοΈ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti π
Thanks!

-------γ *SEWA | JADI BOT | RUN BOT* γ-------

*_SEWA BOT_* 
- _Sewa Bot 15k/2grup (1 minggu)_
- _Sewa Bot 20k/2grup (1 bulan)_
- _Sewa Bot 30k/5grup (Permanen)_

*_JADI BOT_* 
- _Jadi Bot 15k Tidak Owner (1 minggu)_
- _Jadi Bot + Owner 20k (1 bulan)_
- _Jadi Bot + Owner 30k (Permanen)_

*_JASA RUN BOT_*
- _Run Bot 15k (1 minggu)_
- _Run Bot 20k (1 bulan)_
- _Run Bot 25k (Permanen)_
 
 *_PEMBAYARAN_* 
 - _Dana_
 - _Pulsa +5k_
 
*_Minat? Langsung chat aja ya cuy π¦_*

*_Contact person Owner_* :
wa.me/6281241100804

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
