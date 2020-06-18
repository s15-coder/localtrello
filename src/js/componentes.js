import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('Changed filesss');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;

    document.body.append(h1); 
    console.log('anufs');

}

export const saludar2 = (nombre) => {
    const h1 = document.createElement('h1');
    h1.innerText = `Hola  Guapetón ${nombre}`;

    document.body.append(h1);
}