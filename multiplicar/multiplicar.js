const fs = require('fs')


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducion ${base} no es un numero`);
            return;
        }


        let data = '';

        for (var i = 0; i <= limite; i++) {
            data += `${base} x ${i} es igual a ${base * i} \n`;
        }

        fs.writeFile(`file/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`table-${base}-al-${limite}.txt`)
        });
    });
}

let listarArchivo = (base, limite) => {

    for (var i = 0; i <= limite; i++) {
        console.log(`${base} x ${i} es igual al ${base * i}`);
    }
}
module.exports = {
    crearArchivo,
    listarArchivo
}