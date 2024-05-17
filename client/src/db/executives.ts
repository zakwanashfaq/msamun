export type TExecutive = {
    id: string,
    name: string,
    title: string,
    department: string,
    startDate: number,
    biography: string
}
const executives: { [key: string]: TExecutive } = {
    "a1b2c3d4e5f6g7h8i9j0": {
        id: "a1b2c3d4e5f6g7h8i9j0",
        name: "John Doe",
        title: "Chief Executive Officer",
        department: "Management",
        startDate: 1616160000000,
        biography: "John Doe has been leading the company since 2020. He has over 20 years of experience in the industry."
    },
    "j0i9h8g7f6e5d4c3b2a1": {
        id: "j0i9h8g7f6e5d4c3b2a1",
        name: "Jane Smith",
        title: "Chief Financial Officer",
        department: "Finance",
        startDate: 1623715200000,
        biography: "Jane Smith is responsible for the financial health of the company. She joined the team in 2021 with extensive experience in financial management."
    },
    "k9l8m7n6o5p4q3r2s1t0": {
        id: "k9l8m7n6o5p4q3r2s1t0",
        name: "Michael Johnson",
        title: "Chief Technology Officer",
        department: "Technology",
        startDate: 1609459200000,
        biography: "Michael Johnson oversees the technological direction of the company. He has a background in software development and IT management."
    },
    "u1v2w3x4y5z6a7b8c9d0": {
        id: "u1v2w3x4y5z6a7b8c9d0",
        name: "Emily Davis",
        title: "Chief Marketing Officer",
        department: "Marketing",
        startDate: 1633046400000,
        biography: "Emily Davis joined the company in 2021 as the CMO. She has a strong background in marketing strategies and brand development."
    },
    "r9q8p7o6n5m4l3k2j1i0": {
        id: "r9q8p7o6n5m4l3k2j1i0",
        name: "Robert Brown",
        title: "Chief Operations Officer",
        department: "Operations",
        startDate: 1588291200000,
        biography: "Robert Brown has been with the company since 2020. He is responsible for overseeing daily operations and ensuring efficiency across departments."
    }
}

export default executives;
