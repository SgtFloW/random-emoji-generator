const emoji = require("node-emoji");

if(process.argv.length > 2) {
    let emojiArg = process.argv[2];
    if(!emoji.hasEmoji(emojiArg)) {
        console.log(emojiArg + " does not exist. :-)");
    } else {
        console.log(emoji.get(process.argv[2]));
    }
} else {
    console.log(emoji.random().emoji)
}