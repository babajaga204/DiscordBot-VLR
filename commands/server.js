const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDiscription('Gets server inf!'),
    async execute(interaction) {
        await interaction.reply('Server info.');
    },
};