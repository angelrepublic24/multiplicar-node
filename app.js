const argv = require('./config/yargs').argv;
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`))
            .catch((err) => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}
// console.log(argv);


// let base = parametro.split('=')[1]
// console.log('Limite', argv.limite);