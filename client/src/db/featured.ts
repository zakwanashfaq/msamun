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
        title: "Welcome to MSA",
        position: 1,
        datePosted:  1695862372128,
        eventDate: 1695862472128,
        content: "Here is some introductory information on MSA"
    }
]

export default featured;