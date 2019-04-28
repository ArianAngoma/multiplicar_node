const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {

    console.log(`Tabla de ${base}`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};
//const fs = require('express');
//const fs = require('./fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla_${base}_al_${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla_${base}_al${limite}.txt`);
        });
    })
};

module.exports = {
    crearArchivo,
    listarTabla
};