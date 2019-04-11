module.exports = (message) => {
  if (!message.guild) {
    return
  }

  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first()

    if (message.member.hasPermission(['KICK_MEMBERS'])) {
      if (user) {
        const member = message.guild.member(user)

        if (member) {
          member.kick()
            .then(() => message.reply(`User ${user.tag} was kicked by ${message.member.displayName}`))
            .catch((err) => {
              message.reply('I was unable to kick member')
              console.error(err)
            })
        } else {
          message.reply('That user isn\'t in this guild')
        }
      } else {
        message.reply('You Didn\'t mention the user to kick!')
      }
    }
  }
}
