export type TPrayers = {
    id: string,
    title: string,
    subtitle?: string,
    location?: string,
    datePosted: number,
    eventDate: number,
    content: string
}

const prayers: { [key: string]: TPrayers } = {
    "dsnvjsnvsfmnvkjfsbvkjrwuovbwrvbiwjfbvjwbvkjwbv": {
        id: "dsnvjsnvsfmnvkjfsbvkjrwuovbwrvbiwjfbvjwbvkjwbv",
        title: "Musallahs",
        subtitle: "Daily prayers",
        datePosted: 1695862372128,
        eventDate: 1695862472128,
        content: `There are multiple musallahs where daily prayer takes place.
At 10 paton street(ICNA NL) daily 5 prayers take place.
At Mosque only fajr, magrib and isha takes place.
At University ER3040 you can pray whenever you want. Just make sure there are no sisters praying when you enter.
There is also a prayer spot on the topmost part of the west-side stairs.
`
    },
    "cgfdwhgf7283rtf2uirgfjhwdfyu2rgfhwdbvjhwrfv": {
        id: "cgfdwhgf7283rtf2uirgfjhwdfyu2rgfhwdbvjhwrfv",
        title: "Jumma",
        subtitle: "Friday prayers",
        datePosted: 1695862372128,
        eventDate: 1695862472128,
        content: `
Jumma Prayer takes place in three places in St. John's
        
MUN Chapel: Fridays at 1 p.m. and 2 p.m.  
        
Farmers Market(ICNA NL): Fridays at 12:40 p.m. and 1:25 p.m.  
        
Mashjid AL Noor(MANAL):   
        `
    },
    "cbjkdhviwdgiu2g74tfeiugefhjgfhjwgfwdf": {
        id: "cbjkdhviwdgiu2g74tfeiugefhjgfhjwgfwdf",
        title: "Mashjid AL Noor",
        datePosted: 1695862372128,
        eventDate: 1695862472128,
        content: `Address: 430 Logy Bay Road, St. John's, NL
Website: https://www.manal.ca/`
    },
    "fjg34o8t83dhc2ieuhf927fi2uegfiuwefiuwegfiuwegfuge2fj": {
        id: "fjg34o8t83dhc2ieuhf927fi2uegfiuwefiuwegfiuwegfuge2fj",
        title: "ICNA NL",
        location: "10 Paton Street",
        datePosted: 1695862372128,
        eventDate: 1695862472128,
        content: `10 Paton Street, St. John's, NL
Website: https://icnanewfoundland.ca/`
    },

}

export default prayers;
