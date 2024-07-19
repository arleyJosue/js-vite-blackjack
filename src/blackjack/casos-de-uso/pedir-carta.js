
/**
 * Esta función permite tomar una carta
 * @param {Array<String>} deck Es un arreglo de String
 * @returns {String} La ultima carta del deck
 */

export const pedirCarta = ( deck ) => {



    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}
