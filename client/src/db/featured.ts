export type TFeatured = {
    id: string,
    title: string,
    position: number
    subtitle?: string,
    datePosted: number,
    eventDate: number,
    content: string
}

const featured: TFeatured[] = [
    {
        id: "dy3u4tr3847yf3ugf837gfwojehd2iufr",
        title: "MSA Fall Event",
        position: 1,
        datePosted:  1695862372128,
        eventDate: 1695862472128,
        content: "Insert Content Here about fall event.\nLine2\nLine3"
    },
    {
        id: "fjg34o8t834gfo34gf873giuhf82792y9",
        title: "Test Title 2",
        subtitle: "Test subtitle",
        datePosted:  1695862372128,
        position: 2,
        eventDate: 1695862472128,
        content: "Insert Content Here about fall event.\nLine2\nLine3"
    },
    {
        id: "djksgfksjdgfgfiwt3897tgregfhrgerhgf",
        title: "Test Title 3",
        subtitle: "Test subtitle",
        datePosted:  1695862372128,
        position: 3,
        eventDate: 1695862472128,
        content: "Insert Content Here about fall event.\nLine2\nLine3"
    },
    {
        id: "gdhsfg43yt9348gfu3ygfuwygffwfwfbwhfv",
        title: "Test Title 4",
        subtitle: "Test subtitle",
        datePosted:  1695862372128,
        position: 4,
        eventDate: 1695862472128,
        content: "Insert Content Here about fall event.\nLine2\nLine3"
    }
]

export default featured;