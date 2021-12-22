const { MessageActionRow, MessageSelectMenu } = require("discord.js");
const Command = require("../structures/Command");

module.exports = class Activity extends Command {
  constructor(...args) {
    super(...args, {
      name: "activity",
      description: "To start voice activities.",
      slashCommand: true,
      commandOptions: [
        {
          name: "channel",
          type: "CHANNEL",
          description: "Choose a voice channel to start the activity",
          required: true,
        },
      ],
    });
  }

  async run(interaction) {
    if (!interaction.member.guild.me.permissions.has("CREATE_INSTANT_INVITE")) {
      return interaction.reply(
        "Error: Missing Permissions\nMake sure I have the `Create Invite` permission!"
      );
    }

    try {
      const channel = interaction.options.getChannel("channel");
      if (!channel.isVoice()) {
        return interaction
          .reply("The chosen channel must be a voice channel!")
          .catch(console.error);
      }

      const row = (state) =>
        new MessageActionRow().addComponents(
          new MessageSelectMenu()
            .setCustomId("activity")
            .setPlaceholder("📬 Nothing is selected!")
            .setDisabled(state)
            .addOptions([
              {
                label: "Youtube",
                description: "Creates a YouTube activity invite",
                value: "youtube",
                emoji: "<:youtube:892459181838323752>",
              },
              {
                label: "Youtube Dev",
                description: "Creates a YouTube Dev activity invite",
                value: "youtubedev",
                emoji: "<:youtube:892459181838323752>",
              },
              {
                label: "Poker",
                description: "Creates a Poker Night activity invite",
                value: "poker",
                emoji: "🃏",
              },
              {
                label: "Fishing",
                description: "Creates a Fishington.io activity invite",
                value: "fishing",
                emoji: "🐟",
              },
              {
                label: "Betrayal",
                description: "Creates a Betrayal.io activity invite",
                value: "betrayal",
                emoji: "🗳️",
              },
              {
                label: "Chess",
                description: "Creates a Chess activity invite",
                value: "chess",
                emoji: "♟️",
              },
              {
                label: "Chess Dev",
                description: "Creates a Dev Chess activity invite",
                value: "chessdev",
                emoji: "♟️",
              },
              {
                label: "Letter Tile",
                description: "Creates a Letter Tile activity invite",
                value: "lettertile",
                emoji: "🅿️",
              },
              {
                label: "Word Snack",
                description: "Creates a Word Snack activity invite",
                value: "wordsnack",
                emoji: "🍜",
              },
              {
                label: "Doodle Crew",
                description: "Creates a Doodle Crew activity invite",
                value: "doodlecrew",
                emoji: "🎨",
              },
              {
                label: "Awkword",
                description: "Creates a Awkword activity invite",
                value: "awkword",
                emoji: "😕",
              },
              {
                label: "Puttparty",
                description: "Creates a Puttparty activity invite",
                value: "puttparty",
                emoji: "⛳",
              },
              {
                label: "Spellcast",
                description: "Creates a Spellcast activity invite",
                value: "spellcast",
                emoji: "🪄",
              },
              {
                label: "Checkers",
                description: "Creates a Checkers activity invite",
                value: "checkers",
                emoji: "🏁",
              },
            ])
        );

      const initialInteraction = await interaction.reply({
        content: "Select an activity from below:",
        components: [row(false)],
        fetchReply: true,
      });

      const collector = initialInteraction.createMessageComponentCollector({
        componentType: "SELECT_MENU",
      });

      collector.on("collect", async (i) => {
        if (i.user.id !== interaction.user.id) {
          i.reply({
            content: `This element is not for you!`,
            ephemeral: true,
          });
        } else {
          const value = i.values[0];
          console.log(channel.id + ' requested ' +value)
          switch (value) {
            case "youtube":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "youtube")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join YouTube Together](${invite.code} "Join YouTube Together")`,
                  });
                });
              break;
            case "youtubedev":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "youtubedev")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join YouTube Development](${invite.code} "Join YouTube Development")`,
                  });
                });
              break;
            case "poker":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "poker")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join Poker Night](${invite.code} "Join Poker Night")`,
                  });
                });
              break;
            case "fishing":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "fishing")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join Fishington.io](${invite.code} "Join fishington.io")`,
                  });
                });
              break;
            case "betrayal":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "betrayal")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join Betrayal.io](${invite.code} "Join betrayal.io")`,
                  });
                });
              break;
            case "chess":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "chess")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join Chess](${invite.code} "Join A game of Chess")`,
                  });
                });
              break;
            case "chessdev":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "chessdev")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join Development Chess](${invite.code} "Join A game of Development Chess")`,
                  });
                });
              break;
            case "lettertile":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "lettertile")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join Letter tile](${invite.code} "Join A game of Letter tile")`,
                  });
                });
              break;
            case "wordsnack":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "wordsnack")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join Word snack](${invite.code} "Join A game of Word snack")`,
                  });
                });
              break;
            case "doodlecrew":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "doodlecrew")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join Doodle Crew](${invite.code} "Join A game of Doodle Crew")`,
                  });
                });
              break;
            case "awkword":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "awkword")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join Awkword](${invite.code} "Join A game of Awkword")`,
                  });
                });
              break;
            case "puttparty":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "puttparty")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join Puttparty](${invite.code} "Join A game of Puttparty")`,
                  });
                });
              break;
            case "spellcast":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "spellcast")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join SpellCast](${invite.code} "Join A game of SpellCast")`,
                  });
                });
              break;
            case "checkers":
              this.bot.discordTogether
                .createTogetherCode(channel.id, "checkers")
                .then(async (invite) => {
                  await i.deferUpdate();
                  return await i.editReply({
                    content: `[Click here to join Checkers](${invite.code} "Join A game of Checkers")`,
                  });
                });
              break;
          }
        }
      });
      setTimeout(() => collector.stop("timeout"), 20000);

      collector.on("end", () => {
        if (initialInteraction) {
          initialInteraction.edit({ components: [row(true)] });
        }
      });
    } catch (error) {
      console.error(error);
      return interaction.reply(`An Error Occurred: \`${error.message}\`!`);
    }
  }
};
