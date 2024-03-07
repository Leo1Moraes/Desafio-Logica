// Status Herói
let heroi = "Poucas Trancas"
let pontosXP = 956

// Pontos de XP do herói
let nivelHeroi = 

if (pontosXP <= 1000){
    nivelHeroi = "Ferro"
} else if (pontosXP >= 1001 && pontosXP <= 2000){
    nivelHeroi = "Bronze"
}

console.log("O Herói de nome " + heroi , "está no nível " + nivelHeroi)