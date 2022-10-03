const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDiscription('Replies with user info of a specified user!'),
    async execute(interaction) {
        await interaction.reply('User info!');
    },
};