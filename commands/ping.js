const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDiscription('Replies with Ping!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};