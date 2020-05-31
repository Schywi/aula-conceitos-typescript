<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Aula conceitual de ReactJS
</h3>


## Por que usar Typescript?

Typescript nós permite adicionar tipagem ao Javascript , o que facilita na hora de 
dar suporte ao codigo além de aumentar a inteligencia do nosso editor ou IDE.
Com ele você se certifica que um valor não esta sendo passado da forma errada.

## Conceitos abordados

### Formas de se tipar algo

Formas de se tipar :

**1)** Setar valor padrão : definir o valor na frente da variavel.
Ex: name = '' ; = string (tipagem não obrigatoria)

**2)** Setar valor com informação obrigatoria:
Ex: `email: string`



Dentro da desestruturação o ":" serve para alterar nome de variavel

#### Quando fazer a desestruturação da tipagem:

Devemos definir qual o tipo do parametro da função em uma variavel separada (chamada "interface").

Interface: define o tipo de um conjunto de informações.

Dados com "?" = dado não obrigatório na interface.


#### Formas de definir a tipagem de um vetor: 

**1º** Usando um array, dentro do <> colocamos o formato das informações  que estão dentro do array. 

Ex: `techs: Array<string> `
	
    ```jsx
    interface CreateUserData { 
	  name?: string,
	  emial: string,
	  password: string,
	  techs: Array<string>
	}
    ```

**OBS:** Sempre que queremos definir o formato de um objeto , devemos criar uma interface.


**2º** Usamos caso a informação do array varie , entre string ou objeto por exemplo, 
neste caso se o array receber um objeto , temos que definir outra interface para determinar
o formato/tipo desse objeto. `"Array <tipo| tipo>" `.
 
Ex: `techs: Array<string | TechObjects> `

 ```jsx
    interface TechObject { 
	  title: string;
	  experience: number;
	}
    ```

**OBS:** "|" = ou , pode ser usado em qualquer lugar depois dos ":" ou  de qualquer tipo.

**3º** Caso não aja condições ou outros tipos , usamos "tipo[]".

Por exemplo se for só um array com strings,  "strings[]".
Ex: `techs: string[]`.


## Instalar dependências

Abra e execute o comando `yarn` no seu terminal para instalar todas as dependências.
