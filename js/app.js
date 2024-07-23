const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

let cobra = [
    {x:200,y:200},
    {x:230,y:200},
    {x:260,y:200}
]
const tamanhoPadrao = 30
const mostrarCobra = () => {
    ctx.fillStyle = 'red'

    cobra.forEach((posicao, index) => {
        if(index == cobra.length -1){
            ctx.fillStyle = 'white'
        }
        ctx.fillRect(posicao.x, posicao.y, tamanhoPadrao, tamanhoPadrao)
    })
    
}

let direction

const movimentar = () => {
    
    const cabeca = cobra[cobra.length - 1]
    
    if (!direction) return

    

    if (direction == "esquerda") {
        cobra.push({x: cabeca.x - tamanhoPadrao, y: cabeca.y})
    }
    if (direction == "direita") {
        cobra.push({x: cabeca.x + tamanhoPadrao, y: cabeca.y})
    }
    if (direction == "cima") {
        cobra.push({x: cabeca.x, y: cabeca.y + tamanhoPadrao})
    }
    if (direction == "baixo") {
        cobra.push({x: cabeca.x, y: cabeca.y - tamanhoPadrao})
    }

    cobra.shift()
}

const moverComTeclado = () => {
    window.addEventListener('keydown', (evt) => {
         if(evt.key === "ArrowLeft") {
             direction = "esquerda"
         }
         if(evt.key === "ArrowRight") {
             direction = "direita"
         }
         if(evt.key === "ArrowUp") {
             direction = "cima"
         }
         if(evt.key === "ArrowDown") {
             direction = "baixo"
         }
    })
}
const gameLoop = () => {
    ctx.clearRect(0,0,600,600)
    mostrarCobra()
    movimentar()
    moverComTeclado()

    setTimeout(() => {
        gameLoop()
    }, 300);
}

gameLoop()