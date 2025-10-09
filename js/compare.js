
//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (!(carClass instanceof Car)) {
        throw "You need set a Car Class";
    }

    if (el.checked) {

        if (carArr.length >= 2) {
            alert("Você só pode selecionar dois veículos para comparar.");
            el.checked = false;
            return;
        }
        carArr.push(carClass);
    } else {

        const position = GetCarArrPosition(carArr, carClass);
        if (position > -1) {
            carArr.splice(position, 1);
        }
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}


function UpdateCompareTable() {
    const carro1 = carArr[0];
    const carro2 = carArr[1];

    const precoFormatado1 = carro1.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const precoFormatado2 = carro2.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('compare_image_0').innerHTML = `<img src="${carro1.image}" width="150">`;
    document.getElementById('compare_modelo_0').innerText = carro1.nome;
    document.getElementById('compare_alturacacamba_0').innerText = carro1.alturaCacamba + " mm";
    document.getElementById('compare_alturaveiculo_0').innerText = carro1.alturaVeiculo + " mm";
    document.getElementById('compare_alturasolo_0').innerText = carro1.alturaSolo + " mm";
    document.getElementById('compare_capacidadecarga_0').innerText = carro1.capacidadeCarga + " Kg";
    document.getElementById('compare_motor_0').innerText = carro1.motor;
    document.getElementById('compare_potencia_0').innerText = carro1.potencia + " cv";
    document.getElementById('compare_volumecacamba_0').innerText = carro1.volumeCacamba + " L";
    document.getElementById('compare_roda_0').innerText = carro1.roda;
    document.getElementById('compare_preco_0').innerText = precoFormatado1;

    document.getElementById('compare_image_1').innerHTML = `<img src="${carro2.image}" width="150">`;
    document.getElementById('compare_modelo_1').innerText = carro2.nome;
    document.getElementById('compare_alturacacamba_1').innerText = carro2.alturaCacamba + " mm";
    document.getElementById('compare_alturaveiculo_1').innerText = carro2.alturaVeiculo + " mm";
    document.getElementById('compare_alturasolo_1').innerText = carro2.alturaSolo + " mm";
    document.getElementById('compare_capacidadecarga_1').innerText = carro2.capacidadeCarga + " Kg";
    document.getElementById('compare_motor_1').innerText = carro2.motor;
    document.getElementById('compare_potencia_1').innerText = carro2.potencia + " cv";
    document.getElementById('compare_volumecacamba_1').innerText = carro2.volumeCacamba + " L";
    document.getElementById('compare_roda_1').innerText = carro2.roda;
    document.getElementById('compare_preco_1').innerText = precoFormatado2;
}