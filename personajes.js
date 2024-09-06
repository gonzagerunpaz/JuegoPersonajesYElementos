const ballesta = {
    flechas : 10,
    registrarUso(){
      this.flechas -= 1
    },
    estaCargada(){
      return this.flechas > 0
    },
    potencia() {
      return 4
    }
  }
  
  
  const jabalina = {
    cargada : true,
    registrarUso(){
      this.cargada = false
    },
    estaCargada() {
      return this.cargada
    },
    potencia() {
      return 30
    }
  }
  
  const castillo = {
    nivelDeDefensa : 150,
    recibirAtaque(potencia) {
      this.nivelDeDefensa -= potencia
    },
    altura() {
      return 20
    },
    valorQueOtora() {
      return this.nivelDeDefensa * 0.2
    },
    recibirTrabajo() {
      this.nivelDeDefensa += 20
    }
  }
  
  const aurora = {
    viva: true,
    recibirAtaque(potencia) {
      this.viva = this.viva && potencia < 10
    },
    altura() {
      return 1
    },
    valorQueOtora() {
      return 15
    },
    recibirTrabajo() {},  
  }
  
  const tipa = {
    alto : 8,
    recibirAtaque(potencia) {},
    altura() {
      return this.alto
    },  
    valorQueOtora() {
      return this.alto * 2
    },
    recibirTrabajo() {
      this.alto += 1
    }
  }
  
  
  const floki = {
    arma: jabalina,
    cambiarArma(unArma) {
      this.arma = unArma
    },
    encontrar(unElemento) {
      if (this.arma.estaCargada()) {
        unElemento.recibirAtaque(this.arma.potencia())
        this.arma.registrarUso()      
      }
    }
  }
  
  const mario = {
    valorRecolectado:0,
    encontrar(unElemento) {
      
      unElemento.recibirTrabajo()
      this.valorRecolectado += unElemento.valorQueOtora()
    }
  }
  
  const luisa = {
    personajeActivo: floki,
    cambiarPersonaje(unPersonaje) {
      this.personajeActivo = unPersonaje
    },
    aparece(elemento){
      this.personajeActivo.encontrar(elemento)
    }
    
  }
  
  luisa.aparece(castillo)
  console.log(`El nivel de defensa del castillo es: ${castillo.nivelDeDefensa}`)
  luisa.cambiarPersonaje(mario)
  luisa.aparece(tipa)
  console.log(`El nivel recoletado es de : ${mario.valorRecolectado}`)
  
  /*
  floki.cambiarArma(ballesta)
  floki.encontrar(aurora)
  floki.encontrar(castillo)
  console.log(`El nivel de defensa del castillo es: ${castillo.nivelDeDefensa}`)
  console.log(`La ballesta tiene ${ballesta.flechas} fechas`)
  floki.cambiarArma(jabalina)
  floki.encontrar(aurora)
  console.log(`Aurora esta viva ${aurora.viva}`)
  console.log(`La jabalina esta cargada ${jabalina.estaCargada()} `)
  
  mario.encontrar(castillo)
  console.log(`El nivel de defensa del castillo es: ${castillo.nivelDeDefensa}`)
  console.log(`El nivel recoletado es de : ${mario.valorRecolectado}`)
  mario.encontrar(tipa)
  console.log(`El nivel recoletado es de : ${mario.valorRecolectado}`)
  */