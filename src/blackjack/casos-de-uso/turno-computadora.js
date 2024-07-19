
import { pedirCarta, valorCarta, crearCartaHTML } from './';



/**
 * 
 * @param {Number} puntosMinimos Puntos minimos para computadora necesita ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar los puntos
 * @param {Array<String>} deck 
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Puntos minimos son necesario');
    if( !puntosHTML ) throw new Error('argumentos puntosHTML es necesario');
    // if( !deck ) throw new Error('El Deck es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // TODO: crear carta
        divCartasComputadora.append( imgCarta );
        const imgCarta = crearCartaHTML

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}