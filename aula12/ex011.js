let posicao = 14
if (posicao == 1) {
    console.log ('Parabéns, seu time é campeão brasileiro!')
} else if (posicao <= 4) {
    console.log('Seu time está classificado para fase de grupos da Libertadores da América!')
} else if (posicao <= 6) {
    console.log('Seu time está classificado para PRÉ-LIBERTADORES!')
} else if (posicao <= 12) {
    console.log('Seu time está classificado pra sul-americana!')
} else if (posicao <= 16) {
    console.log('Seu time está salvo do rebaixamento!')
} else {
    console.log('Seu time está rebaixado!')
}