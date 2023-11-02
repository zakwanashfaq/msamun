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
    "cgfdwhgf7283rtf2uirgfjhwdfyu2rgfhwdbvjhwrfv": {
        id: "cgfdwhgf7283rtf2uirgfjhwdfyu2rgfhwdbvjhwrfv",
        title: "Jumma Prayers",
        subtitle: "Friday prayers",
        datePosted: 1695862372128,
        eventDate: 1695862472128,
        content: "Insert Content 1 Here about fall event.\nLine2\nLine3"
    },
    "cbjkdhviwdgiu2g74tfeiugefhjgfhjwgfwdf": {
        id: "cbjkdhviwdgiu2g74tfeiugefhjgfhjwgfwdf",
        title: "Mashjid AL Noor",
        datePosted: 1695862372128,
        eventDate: 1695862472128,
        content: "Insert Content 2 Here about fall event.\nLine2\nLine3"
    },
    "fjg34o8t83dhc2ieuhf927fi2uegfiuwefiuwegfiuwegfuge2fj": {
        id: "fjg34o8t83dhc2ieuhf927fi2uegfiuwefiuwegfiuwegfuge2fj",
        title: "ICNA NL",
        location: "10 Paton Street",
        datePosted: 1695862372128,
        eventDate: 1695862472128,
        content: "Insert Content 3 Here about fall event.\nLine2\nLine3"
    },

}

export default prayers;
