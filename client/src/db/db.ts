import event, { TEvent } from "./events";
import featured, { TFeatured } from "./featured";


class Database {
    constructor(){

    }

    static getFeatured(): TFeatured[]{
        return featured;
    }

    static getUpcomingEvents(eventIds: string[]): TEvent[]{
        const eventQuery = event;
        return eventIds.map(id => eventQuery[id]).filter(e => e !== undefined);
    }
}

export default Database;