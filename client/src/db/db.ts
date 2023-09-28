import event, { TEvent } from "./events";


class Database {
    constructor(){

    }

    static getFeatured(){

    }

    static getUpcomingEvents(eventIds: string[]): TEvent[]{
        const eventQuery = event;
        return eventIds.map(id => eventQuery[id]).filter(e => e !== undefined);
    }
}

export default Database;