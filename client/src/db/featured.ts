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
        title: "Our History",
        position: 1,
        datePosted:  1695862372128,
        eventDate: 1695862472128,
        content: `Origins of the group: The Muslim Students' Association of Memorial University of Newfoundland and Labrador (MSA-MUN) was established during the mid-1960's. It was formed by a group of international Muslim students who were studying at Memorial University. Its purpose was to accommodate Muslim students who were new to Canada and to provide an on-campus space and community for Islamic worship.     
        
Main Purpose: The MSA works to help Muslim students adapt to life in Canada, to accommodate their religious beliefs and practices, and to increase awareness about Islam among the student population and the St. John's community.
        
In addition to addressing the needs of its members, the MSA also aims to raise awareness of Islam on campus through its different outreach activities. These include regular booths at the University Centre, which aim to answer any questions the university community has about Islam. The MSA also invites the university community to participate in fasting in Ramadan and organizes an annual Islam Awareness Week to fulfill the same goal of raising awareness of Islam on campus. The MSA at Memorial strives to build gaps of misunderstanding, and is always looking forward to educate the university community regarding its vast ethnically diverse group of members.`
    },
    {
        id: "dvfdfvbdfbdbjbejbekfbeb",
        title: "Present goals of the group",
        position: 2,
        datePosted:  1695862372128,
        eventDate: 1695862472128,
        content: `Present goals of the group: The group is continually working toward internal and external growth. Internally, it aims to help new international Muslim students adjust to Canadian culture by making connections between newcomers and long-time members. These connections, along with other programs offered by the MSA, help Muslim students adjust to life in Canada by providing an understanding of different cultural norms, usually around gender, sexuality, and diet. Externally, the MSA assists Muslim students in resolving issues of discrimination from the public and within the university.`
    },
    {
        id: "dvfdfvbdfbdbjbejbekfbeb",
        title: "Life in St. John's in NL",
        position: 3,
        datePosted:  1695862372128,
        eventDate: 1695862472128,
        content: `The MSA has formed relationships with many organizations in the St. John's community, including the Al-Noor Mosque, Muslim Association of Newfoundland and Labrador (MANAL), ICNA NL and St. Augustine's Anglican Church, with which they often share a community space.`
    }
]

export default featured;