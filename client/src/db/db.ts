import { eventIframes } from "./eventIframes";
import event, { TEvent } from "./events";
import featured, { TFeatured } from "./featured";
import prayers from "./prayers";
import executives, { TExecutive } from "./Executives"; // Importing executives data and type



class Database {
    constructor(){

    }

    static getFeatured(): TFeatured[]{
        return featured;
    }

    static getEvents(): TEvent[]{
        return Object.values(event);
    }

    static getEventsIframes(): string[]{
        return eventIframes;
    }

    static getPrayers(): TEvent[]{
        return Object.values(prayers);
    }

    static getUpcomingEvents(eventIds: string[]): TEvent[]{
        const eventQuery = event;
        return eventIds.map(id => eventQuery[id]).filter(e => e !== undefined);
    }
    static getExecutives(): TExecutive[] { // New method to get executives data
        return Object.values(executives);
    }
}

export default Database;