window.addEventListener('load', () =>{
    const params = (new URL(document.location)).searchParams;
    const name = params.get('nombre');
    const email = params.get('email');
    const telephone = params.get('telefono');
    const gusto = params.get('gusto');
    const porcentaje = params.get('porcentaje');

    document.getElementById('name').innerHTML = name;
    document.getElementById('email').innerHTML = email;
    document.getElementById('telephone').innerHTML = telephone;
    document.getElementById('gusto').innerHTML = gusto;
    document.getElementById('porcentaje').innerHTML = porcentaje;
}
)