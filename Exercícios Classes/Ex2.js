class Pizza {
    constructor(base, molho, cobertura, queijo){
        this.base = base;
        this.molho = molho;
        this.cobertura = cobertura;
        this.queijo = queijo;

    }
    descricao(){
        console.log(`ma pizza saborosa com uma massa de ${this.base}, e com um molho de ${this.molho}, e com uma cobertura de ${this.cobertura} com queijo ${this.queijo}`);
        
    } 
}
    const minhaPizza = new Pizza(`Tradicional`, `Molho de Tomate`, `Frango com catupiry`, `Prato`)
    
    console.log(minhaPizza);

    minhaPizza.descricao();