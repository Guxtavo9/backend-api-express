const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}

const user = {
    name: 'Gustavo',
    age: 20,
    email: 'test@gmail.com',
    cidade: 'Caraguatatuba',
    prof: false,
    end: endereco, 
    familia: {
        pai: 'Roberto',
        mae: 'Maria',
        irmao: 'Lucas'
    },
    pets: [
        {
            name: 'Rex',
            raca: 'Pitbull'
        },
        {
            name: 'Bob',
            raca: 'Vira-lata'
        }
    ]
}


delete user.prof
console.log(user)

