const discord = require("discord.js");
const bot = new discord.Client();
const config = require('./configs.json');
const tempo = require('./horario');

function zeroAEsquerda(numero){
    return numero < 10 ? "0"+numero : numero;
}

bot.on("ready",()=>{
    bot.user.setActivity("Meow? use the prefix ' > '  ");
})


bot.on("message",async (message)=>{
    let ativo = false;
    if(message.author.bot) return;

    const messagem = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = messagem.pop();
    const prefixoDaMensagem = message.content.substring(0,1);

    if(comando == "capturar" && prefixoDaMensagem == config.prefix){
        if(tempo.minuto == 30) ativo = true; 

        const m = await message.channel.send("capturando um gato porfavor espere...");

        setTimeout(()=>{

            if(ativo === true) return;
            else m.edit("desculpe,você não atingiu os 30 minutos de intervalo ainda,tempo em minutos : "+zeroAEsquerda(tempo.minuto))

        },2000);

        console.log(tempo.minuto);

    }
})

bot.login(config.token);