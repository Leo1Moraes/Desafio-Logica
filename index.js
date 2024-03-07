// Status Heróis
let Heroi = "Thor Deus do Trovão"
let pontosXP = 958

// Pontos de XP do Herói
let nivelHeroi;

if (pontosXP < 1000) {
    nivelHeroi = "Ferro";
} else if (pontosXP >= 1001 && pontosXP <= 2000){
    nivelHeroi = "Bronze"
} else if (pontosXP >= 2001 && pontosXP <= 5000){
    nivelHeroi = "Prata"
} else if (pontosXP >= 5001 && pontosXP <= 7000){
    nivelHeroi = "Ouro"
} else if (pontosXP >= 7001 && pontosXP <= 8000){
    nivelHeroi = "Platina"
} else if (pontosXP >= 8001 && pontosXP <= 9000){
    nivelHeroi = "Ascendente"
} else if (pontosXP >= 9001 && pontosXP <= 10000){
    nivelHeroi = "Imortal"
} else if (pontosXP >= 10001){
    nivelHeroi = "Radiante"
}

console.log("O Herói de nome " + heroi , "está no nível " + nivelHeroi)