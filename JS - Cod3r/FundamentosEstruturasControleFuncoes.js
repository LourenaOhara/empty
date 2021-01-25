/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function operations(a, b){
    console.log(`Soma:${a+b}\nSubtração:${a-b}\nMultiplicação:${a*b}\nDivisão:${a/b}\n`)
}

operations(5,3)

/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function triangle(a, b, c){
    if(a == b && b == c)
        console.log("Triângulo Equilátero")
    else if(a != b && a != c)
        console.log("Triângulo Escaleno")
    else if(a == b && b != c)
    console.log("Triângulo Isóceles")
}

triangle(5,7,8)

/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/

function pontency(base, exponent){
    var calc = Math.pow(base, exponent) 
    console.log(`${base}^${exponent}: ${calc}`)
}

pontency(2,4)

/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o 
resultado e o resto da divisão destes dois valores. */

function divisor(a, b){
    console.log(`Result: ${a/b}\n Rest: ${a%b}`)
}

divisor(12,5)

/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz 
o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos
fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript
para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

function format(number){
    number = `R$ ${number.toFixed(2).toString().replace('.', ',')}`
    console.log(number)
}

format(0.30000000000000004)

/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function firstAmount(initial_capital, interest_rate, application_time){
    console.log(`Montante: R$${initial_capital +  initial_capital*interest_rate*application_time}`)
}

firstAmount(1000, 0.1, 3)

function secondAmount(initial_capital, interest_rate, application_time){
    var exponent = Math.pow((1+interest_rate), application_time)
    var amount = initial_capital * exponent
    amount = `R$ ${amount.toFixed(2).toString().replace('.', ',')}`
    console.log(amount)
}

secondAmount(10000, 0.1, 3)

/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito 
isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber 
três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente:
3,-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a 
frase: “Delta é negativo”. */

function bhaskara(a, b, c){
    var delta = (b*b)-(4*a*c)
    if (delta >= 0){
        var root = Math.sqrt(delta)
        var x1 = ((b*(-1))+root)/(2*a)
        var x2 = ((b*(-1))-root)/(2*a)
        console.log(`[${x1}, ${x2}]`)
    }
    else
        console.log("Delta é negativo")
}
bhaskara(3, -5, 12)

/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/
  
function basket(points) {
    let myPoints = points.split(", ")
    let records = 0
    let worstGame = 1
    let biggerPoints = myPoints[0]
    let smallerPoints = myPoints[0]
    let i
    for (i = 1; i < myPoints.length; i++) {
        if(myPoints[i] > biggerPoints) {
            biggerPoints = myPoints[i]
            records++
        }else if (myPoints[i] < smallerPoints) {
            smallerPoints = myPoints[i]
            worstGame = i+1;
        }
    }
    return [records, worstGame]
}
let points = "10, 20, 20, 8, 25, 3, 0, 30, 1" 
console.log(basket(points))

/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. 
As notas possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5
for menor que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito
nenhum arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada
para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente,
ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá
40 e o aluno será aprovado.*/

function approve(note){
    if(note < 40 && note % 5 > 3){
        note =+ (5 - (note%5))
        if(note > 40)
            console.log("Aprovado")
        else
            console.log("Reprovado")
    }
    else
    console.log("Aprovado")
}
approve(88)

/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function divisibleFor3(number){
    if(number%3 == 0 )
        console.log("True")
    else
    console.log("False")
}

divisibleFor3(4)

/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

function bissextileYear (year) {
    if (year <= 0){
        console.log("False")
    } else if (year % 400 == 0) {
        console.log("True")
    } else if (year % 100 == 0) {
        console.log("False")
    } else if (year % 4 == 0) {
        console.log("True")
    } else {
        console.log("False")
    }
}
bissextileYear(2020)

/*12) Faça um algoritmo que calcule o fatorial de um número.*/

function factorial(number){
    let i
    let fat = 1
    for(i=number; i>0; i--){
        fat *= i  
    }
    console.log(fat)
}

factorial(5)

/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function typeDay(day){
    switch (day) {
        case 1:
            console.log("Domingo")
            break;
        case 2:
            console.log("Segunda")
            break;
        case 3:
            console.log("Terça")
            break;
        case 4:
            console.log("Quarta")
            break;
        case 5:
            console.log("Quinta")
            break;
        case 6:
            console.log("Sexta")
            break;
        case 7:
            console.log("Sábado")
            break;
        default:
            console.log("Invalid number")
            break;
    }
}

typeDay(3)

/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

function wichFruit(fruit){
    switch (fruit) {
        case 'apple':
            console.log("we don't sell this fruit here")
            break;
        case 'kiwi':
            console.log("We are short of kiwis")
            break;
        case 'watermelon':
            console.log("Here it is. There are 3 real per kilo")
            break;
        default:
            console.log("Invalid fruit")
            break;
    }   
}
wichFruit('watermelon')

/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

function wichCar(model){
    switch (model) {
        case 'hatch':
            console.log("successful purchase")
            break;
        case 'sedan':
        case 'SUV':
        case 'pickup':
        case 'croosover':
            console.log("Are you sure you don't prefer another model?")
            break;
        default:
            console.log("Invalid model")
            break;
    }   
}
wichCar('SUV')

/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

function calculator(a, op, b){
    let result
    switch (op) {
        case '+':
            result = a + b
            console.log(result) 
            break;
        case '-':
            result = a - b
            console.log(result) 
            break;
        case '*':
            result = a * b
            console.log(result) 
            break;
        case '/':
            result = a / b
            console.log(result) 
            break;
        default:
            console.log("Invalid operator")
            break;
    }
}
calculator(18, '*', 4)

/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A      10%
B      15%
C      20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function calculateSalary(salary, plan){
    switch (plan) {
        case 'A': 
            console.log(`New salary: ${salary+(salary * 0.1)}`)
            break;
        case 'B':
            console.log(`New salary: ${salary+(salary * 0.15)}`)
            break;
        case 'C':
            console.log(`New salary: ${salary+(salary * 0.2)}`)
        default:
            break;
    }
}
calculateSalary(3000, 'B')

/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

function numberInFull(number){
    switch (number) {
        case 0:
            console.log("Zero")
            break;
        case 1:
            console.log("One")
            break;
        case 2:
            console.log("Two")
            break;
        case 3:
            console.log("Three")
            break;
        case 4:
            console.log("Four")
            break;
        case 5:
            console.log("Five")
            break;
        case 6:
            console.log("Six")
            break;
        case 7:
            console.log("Seven")
            break;
        case 8:
            console.log("Eight")
            break;
        case 9:
            console.log("Nine")
            break;
        case 10:
            console.log("Ten")
            break;
        default:
            console.log("Number out of range")
            break;
    }
}

numberInFull(4)

/*19) Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function deserve(code, itens){
    switch (code) {
        case 100:
            console.log(`Total: ${itens*3}`)
            break;
        case 200:
            console.log(`Total: ${itens*4}`)
            break;
        case 300:
            console.log(`Total: ${itens*5.5}`)
            break;
        case 400:
            console.log(`Total: ${itens*7.5}`)
            break;
        case 500:
            console.log(`Total: ${itens*3.5}`)
            break;
        case 600:
            console.log(`Total: ${itens*2.8}`)
            break;
        default:
            console.log("Invalid code")
            break;
    }
}
deserve(600, 10)

/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

function cash(value){
    let ballot100 = 0
    let ballot50 = 0
    let ballot10 = 0
    let ballot5 = 0
    let ballot1 = 0
    while(value >= 100){
        ballot100++
        value -= 100
    }
    while(value >= 50){
        ballot50++
        value -= 50
    }
    while(value >= 10){
        ballot10++
        value -= 10
    }
    while(value >= 5){
        ballot5++
        value -= 5
    }
    while(value >= 1){
        ballot1++
        value -= 1
    }

    if(ballot100 > 0)
        console.log(`${ballot100} notas de R$100,00`)
    if(ballot50 > 0)
        console.log(`${ballot50} notas de R$50,00`)
    if(ballot10 > 0)
        console.log(`${ballot10} notas de R$10,00`)
    if(ballot5 > 0)
        console.log(`${ballot5} notas de R$5,00`)
    if(ballot1 > 0)
        console.log(`${ballot1} notas de R$1,00`)
}
cash(245)

/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

function healthyPlan(age){
    if(age < 10)
        console.log(`R$ 180,00`)
    else if(age >= 10 && age <= 30)
        console.log(`R$ 150,00`)
    else if(age > 30 && age <= 60)
        console.log(`R$ 195,00`)
    else if(age > 60)
        console.log(`R$ 230,00`)
}

healthyPlan(34)

/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

function association(mouth, value){
    if(mouth > 0 && mouth < 13) {
        delay = mouth - 1
        return (value * ((1 + (5/100))**delay)).toFixed(2)
    } else {
        return 'Invalid mouth.'
    }
}
console.log(association(4, 100))

/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function weightedAverage(code, n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        result = ((4*n1)+(3*n2)+(3*n3))/10
        if(result >= 5)
            console.log(`${code}, ${n1}, ${n2}, ${n3} APROVADO`)
        else
            console.log(`${code}, ${n1}, ${n2}, ${n3} REPROVADO`)
    }
    else if(n2 > n1 && n2 > n3){
        result = ((3*n1)+(4*n2)+(3*n3))/10
        if(result >= 5)
            console.log(`${code}, ${n1}, ${n2}, ${n3} APROVADO`)
        else
            console.log(`${code}, ${n1}, ${n2}, ${n3} REPROVADO`)
    }
    else if(n3 > n2 && n3 > n1){
        result = ((3*n1)+(3*n2)+(4*n3))/10
        if(result >= 5)
            console.log(`${code}, ${n1}, ${n2}, ${n3} APROVADO`)
        else
            console.log(`${code}, ${n1}, ${n2}, ${n3} REPROVADO`)
    }
}
weightedAverage(2, 4, 6, 10)
weightedAverage(1, 3, 1, 0)

/*24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.*/

function hello(){
    let i = 0;
    while(i < 11){
        console.log("Hello World!")
        i++
    }
}
hello()

/*25) Escrever um programa para exibir os números de 1 até 50 na tela.*/
function until50(i){
    for(i=1; i<=50; i++)
        console.log(i)
}
until50()

/*26) Fazer um programa para encontrar todos os pares entre 1 e 100.*/
function pairs(i){
    for(i=1; i<=50; i++){
        if(i % 2 == 0)
            console.log(i)
    }
}
pairs()

/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

function bigger(height1, height2, fee1, fee2){
    let years = 0
    let aux
    if(height1 > height2){
        aux = height1
        while(aux > height2){
            aux+=fee1 
            height2+=fee2
            years++
        }
        console.log(`${years} years`)
    }
    else{
        aux = height2
        while(aux > height1){
            aux+=fee2 
            height1+=fee1
            years++
        }
        console.log(`${years} years`)
    }
}
bigger(28, 31, 5, 3)

/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

function pairsAndOdss(numbers){
    let i
    let pair = 0
    let odd = 0
    for(i=0; i<numbers.length; i++){
        if(numbers[i] % 2 == 0)
            pair++
        else
            odd++
    }
    console.log(`${pair} pair and ${odd} odds`)
}
numbers = [1, 5, 6, 3, 33, 87]
pairsAndOdss(numbers)

/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function interval(numbers){
    let i
    let inInterval = 0
    let outInterval = 0

    for(i=0; i<numbers.length; i++){
        if(numbers[i] >= 10 && numbers[i] <= 20)
            inInterval++
        else
            outInterval++
    }
    console.log(`${inInterval} numbers within the range and ${outInterval} numbers out of range`)
}

numbers = [1, 2, 3, 4, 11, 12, 13, 19, 22, 45]
interval(numbers)

/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

function biggerAndSmaller(numbers){
    let i
    let bigger = 0
    let smaller = 1000000000000000
    for(i=0; i<numbers.length; i++){
        if(numbers[i] > bigger)
            bigger = numbers[i]
        if(numbers[i] < smaller)
            smaller = numbers[i]
    }
    console.log(`bigger: ${bigger} smaller: ${smaller}`)
}
numbers = [29, 6262, 16, 92, 45, 1, 73, 23]
biggerAndSmaller(numbers)

/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

function negatives(numbers){
    let i
    let negative = 0
    for(i=0; i<numbers.length; i++){
        if(numbers[i] < 0)
            negative++
    }
    console.log(`There are ${negative} negatives numbers`)
}
numbers = [2, -4, -9, 0, -66, 10]
negatives(numbers)

/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function vectorMedia(numbers){
    let i
    let size = numbers.length
    let total = 0
    let media
    for(i=0; i<size; i++){
        total += numbers[i]
    }
    media = total/size
    console.log(media)
}
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
vectorMedia(numbers)

/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

function concatVectors(vetorInteiro, vetorString, vetorDouble){
    var resultado = vetorInteiro.concat(vetorString, vetorDouble)
    console.log(resultado)
}

vetorInteiro = [1, 2, 3, 4]
vetorString = ['Bruna', 'Emy', 'Lourena', 'Yaki']
vetorDouble = [0.3, 1.5, 2.7, 2.2]

concatVectors(vetorInteiro, vetorString, vetorDouble)

/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/
function verifyString (string1, string2) {
    let isContained = true;
    for (let i = 0; i < string1.length; i++) {
        let charString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let charString2 = string2.charAt(j).toLowerCase()
            if(charString1 == charString2) {
                isContained = true
                break
            } else {
                isContained = false
            }
        }
        if(!isContained) {
            return isContained
        }
    }
    return isContained
 }

 console.log(verifyString('abcd','cba'))

 /*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor 
pilha e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.*/

function addVector(vetorPilha, vetorAdiciona){
    var empty = vetorPilha.concat(vetorAdiciona)
    console.log(vetorPilha)
    console.log(vetorAdiciona)
    console.log(empty)
}

vetorPilha = [1, 2, 3, 4, 5]
vetorAdiciona = [6, 7, 8, 9, 10]
addVector(vetorPilha, vetorAdiciona)

/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

function multVectorII(numbers, value){
    let i
    for(i=0; i<numbers.length; i++)
        numbers[i] *= value
    console.log(numbers)
}
function multVector(numbers, value){
    let i
    for(i=0; i<numbers.length; i++)
        numbers[i] *= value
    console.log(numbers)
    if(value > 5)
        multVectorII(numbers, value)
}
numbers = [3, 4, 5, 6, 7]
console.log(multVector(numbers, 8))

/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

function arithmeticProgression(n, a1, r){
    let an = a1 + ((n-1)*r)
    let sn = n*Math.floor((a1+an))/2
    console.log(sn)
} 

function geometricProgression(n, a1, q){
    let sn = a1*(Math.pow(q, n)-1)/(q-1)
    console.log(sn)
}

arithmeticProgression(20, 1, 2)
geometricProgression(10, 3, 2)

/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

function allTheOdds(start, end){
    let i
    let odds = 0
    for(i=start; i<=end; i++){
        if(i % 2 != 0)
            console.log(i)
    }
}
allTheOdds(4, 21)

/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

function changeVectors(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Different size vectors.'
    }

    console.log('New vector A: ' + vetorA)
    console.log('New vector B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

changeVectors(vetorA, vetorB)

/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

function concept(notesVector){
    let i
    let concepts = [] 
    for(i=0; i< notesVector.length; i++){
        if(notesVector[i] >= 0 && notesVector[i] <= 4.9)
            concepts.push('D')
        else if(notesVector[i] >= 5 && notesVector[i] <= 6.9)
            concepts.push('C')
        else if(notesVector[i] >= 7 && notesVector[i] <= 8.9)
            concepts.push('B')
        else if(notesVector[i]>=9 && notesVector[i]<=10)
            concepts.push('A')
        else
            concepts.push('Invalid note')
    }
    return concepts
}
notesVector = [0.2, 3.9, 9.8, 7.6, 6.3]
let concepts = concept(notesVector)
console.log(concepts)

