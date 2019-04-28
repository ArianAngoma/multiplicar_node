const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case  'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado:`, colors.yellow(archivo))).catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}
//let base = '8';

//console.log(process.argv);

//let argv2 = process.argv;

//console.log('Limite', argv.limite);
//console.log(argv.base);
//console.log(argv2);
/**let parametro = argv[2];

 let base = parametro.split('=')[1];**/
//console.log(base);

//crearArchivo(base).then( archivo => console.log(`Archivo creado: ${archivo}`)).catch(err => console.log(err));