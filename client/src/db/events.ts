export type TEvent = {
    id: string,
    title: string,
    subtitle?: string,
    datePosted: number,
    eventDate: number,
    content: string
}

const event: { [key: string]: TEvent } = {
    "dy3u4tr3847yf3ugf837gfwojehd2iufr": {
        id: "dy3u4tr3847yf3ugf837gfwojehd2iufr",
        title: "MSA Fall Event",
        datePosted:  1695862372128,
        eventDate: 1695862472128,
        content: "Insert Content 1 Here about fall event.\nLine2\nLine3"
    },
    "fjg34o8t834gfo34gf873giuhf82792y9": {
        id: "fjg34o8t834gfo34gf873giuhf82792y9",
        title: "Test Title",
        subtitle: "Test subtitle",
        datePosted:  1695862372128,
        eventDate: 1695862472128,
        content: "Insert Content 2 Here about fall event.\nLine2\nLine3"
    },
    "sdfjkreg3587g3iughierhkjfhgiu3ggier": {
        id: "sdfjkreg3587g3iughierhkjfhgiu3ggier",
        title: "Test Title",
        subtitle: "Test subtitle",
        datePosted:  1695862372128,
        eventDate: 1695862472128,
        content: "Insert Content 3 Here about fall event.\nLine2\nLine3"
    }
}

export default event;
