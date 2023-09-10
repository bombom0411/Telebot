nexports.noToken = "Bot token tidak boleh kosong, silahkan buat bot melalui https://t.me/BotFather"

exports.first_chat = (botname, pushname) => {
    return `Halo ${pushname}! Nama saya ${botname} - Saya adalah Bot Telegram multi fungsi! Klik /menu untuk mengetahui lebih lanjut tentang cara menggunakan bot ini.

Bergabunglah dengan [channel saya](https://t.me/zeeone_ofc) untuk mendapatkan informasi tentang semua pembaruan terbaru.

Kirim perintah /privacy untuk melihat syarat dan ketentuan penggunaan bot.
`
}
exports.snk = "Syarat & Ketentuan Bot\n\n1. isi sendiri"
exports.getStyle = (style, style2) => {
    return `**${style2} Yg Kamu Masukkan Salah**\n\n__Berikut List ${style2} Yg Benar, Total__ **${style}** __${style2}__\n\n`
}
exports.wait = "`⏳ Mohon tunggu sebentar`"
exports.ok = `Done ✅`
exports.menu = async (alpha, pushname, OWNER_NAME, OWNER, prefix, hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, user_id) => {
    var ini_anu = `Hi ${pushname}

╭─❒ 「 Bot Info 」 
├ Creator :  [@${OWNER_NAME}](${OWNER[0]})
├ Sponsored :  [@BotFather](https://t.me/BotFather)
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Speed : ${latensii.toFixed(4)} Second
├ Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
╰❒ Runtime : ${simple.runtime(process.uptime())}

╭─❒ 「 Date Info 」 
├ Masehi : ${week}, ${date}
├ Hijriah : ${dateIslamic}
╰❒

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Profile : [@${pushname}](https://t.me/${username})
╰❒ Owner : ${isCreator ? 'True' : `False`}
`
    var button = [
        [{
                text: 'rules',
                callback_data: 'animecmd ' + user_id
            },
            {
                text: 'format',
                callback_data: 'asupancmd ' + user_id
            }
        ],
        [{
                text: 'contact admin',
                callback_data: 'cecancmd ' + user_id
            },
            {
                text: 'pengen punya cewe :(',
                callback_data: 'cogancmd ' + user_id
            }
        ],
    ]
    try {
        await alpha.editMessageMedia({
            type: "photo",
            media: {
                source: thumbnail
            },
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true
        }, {
            reply_markup: {
                inline_keyboard: button
            }
        })
    } catch {
        await alpha.replyWithPhoto({
            source: thumbnail
        }, {
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
    }
}
exports.animecmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menucmd ' + user_id
            },
            {
                text: 'Asupan 😋',
                callback_data: 'asupancmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ANIME 」 
» /akame
» /anna
» /asuna-yuki
» /ayuzawa
» /chitoge
» /emilia
» /erza
» /hinata
» /inori
» /kaga-kouko
» /kaori-miyazono
» /kotori-minami
» /killua
» /mikasa
» /mio-akiyama
» /mizore-sirayuki
» /nakiri-alice
» /naruto
» /riyas-gremori
» /sakura
» /sento-isuzu
» /shana
» /shiina
» /shinka
» /winry
» /yukino
» /yuzuki
» /mikosiba
» /luffy
» /zoro
» /ussop
» /sanji
» /minato
» /boruto
» /sarada
» /mitsuki
» /orochimaru
» /tsunade
» /kakashi
» /rimuru
» /sagiri
» /natsu
» /tanjirou
» /loli
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.asupancmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'animecmd ' + user_id
            },
            {
                text: 'Cecan 👧',
                callback_data: 'cecancmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ASUPAN 」 
» /chika
» /rikagusriani
» /bocil
» /geayubi
» /santuy
» /ukhty
» /asupan
» /delvira
» /ayu
» /bunga
» /aura
» /nisa
» /ziva
» /yana
» /viona
» /syania
» /riri
» /syifa
» /mama-gina
» /alcakenya
» /mangayutri
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.cecancmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'asupancmd ' + user_id
            },
            {
                text: 'Cogan️ 👦',
                callback_data: 'cogancmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 CECAN 」 
» /china
» /indonesia
» /malaysia
» /thailand
» /korea
» /japan
» /vietnam
» /jenni
» /jiiso
» /lisa
» /rose
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
