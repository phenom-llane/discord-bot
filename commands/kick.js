module.exports = (message) => {
  if (!message.guild) {
    return
  }

  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first()

    if (user) {
      const member = message.guild.member(user)

      if (member) {
        member.kick()
          .then(() => message.reply('Successfully kicked ${user.tag'))
          .catch((err) => {
            message.reply('I was unable to kick the member')
            console.error(err)
          })
      } else {
        message.reply('That user isn\'n in this guild!')
      }
    } else {
      message.reply('You Didn\'t mention the user to kick!')
    }
  }
}
