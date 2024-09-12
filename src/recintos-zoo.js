class Recintos {

    //Infelizmente travei e tive que fazer isso
    ocupacaoDosAnimais() {
        this.ocupacaoPorAnimal = {
            "Leão": 3,
            "Leopardo": 2,
            "Crocodilo": 3,
            "Macaco": 1,
            "Gazela": 2,
            "Hipopotamo": 4
        };
    }
    

    recintosDisponiveis(bioma, capacidade, animaisAtuais = {nome, quantidade}) {
        this.bioma = bioma;
        this.capacidade = capacidade;
        this.animaisExistentes = animaisAtuais

        
    }

    
    
        calcularEspaço() {
            let espaçoTotal = 0;
            for (let i = 0; this.animaisExistentes.nome.length; i++) {
             const animal = this.animaisExistentes.nome[i];
             const quantidade = this.animaisExistentes.quantidade[i];
             const espaço = this.ocupacaoPorAnimal[animal] || 0;
             espaçoTotal += espaço * quantidade;
            
            }
            return espaçoTotal;
        }
}

    
class RecintosZoo {
    todosRecintos() {
        this.recintos = {};
    }
    
    
    criarRecintos() {
        
        this.recintos["Savana"] = new Recintos();
        this.recintos["Savana"].recintosDisponiveis("Savana",10, {nome: ["MACACO"], quantidade: 3});
        this.capacidade("Savana"); 


        this.recintos["Floresta"] = new Recintos();
        this.recintos["Floresta"].recintosDisponiveis("Floresta",5, {nome: [], quantidade: 0});
        this.capacidade("Floresta") 

        this.recintos["Savana e Rio"]= new Recintos();
        this.recintos["Savana e Rio"].recintosDisponiveis("Savana e Rio",7, {nome: ["GAZELA"], quantidade: 1});  
        this.capacidade("Savana e Rio") 

        this.recintos["Rio"]= new Recintos();
        this.recintos["Rio"].recintosDisponiveis("Rio",8, {nome: [], quantidade: 0});
        this.capacidade("Rio") 

        this.recintos["Savana 2"]= new Recintos();
        this.recintos["Savana 2"].recintosDisponiveis("Savana 2",9, {nome: ["Leão"], quantidade: 1});
        this.capacidade("Savana 2") 

        
    }
    
    capacidade(nomeDoRecinto) {
        const recinto = this.recintos[nomeDoRecinto];

        if(recinto) {
            const espacoOcupado = recinto.calcularEspaço();
            const capacidadeRestante = recinto.capacidade - espacoOcupado;
            console.log(`A Capacidade restante do recinto ${recinto.bioma}: ${capacidadeRestante}`);
        }
        else{
            console.log("Recinto não encontrado")
        
        }
    }

    analisaRecintos(animal, quantidade) {
    }

}

//Peço perdão mas cheguei ao nivel que não consigo mais finalizar este codigo mas espero que seja o bastante para eu dar continuidade no processo
//seletivo e javascript não e meu forte então o codigo, e apos varios teste e erros, não cheguei onde desejava com esse codigo

export { RecintosZoo as RecintosZoo }

