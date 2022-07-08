import { parseISO } from 'date-fns';


// Función para convertir las fechas de String a Date
export const convertEventsToDateEvents = (events = []) => {

    return events.map(event => {

        event.end   = parseISO( event.end );
        event.start = parseISO( event.start );

        return event;
    })
}