interface Course {
    id: number;
    slug: string;
    title: string;
    count: number;
    price: number;
    programmes: {
        id: number;
        title: string;
        slug: string;
        count: number;
        price: number;
    }[]
}

export const courses:Course[] = [
    {
        id: 1,
        title: "Open Executive Short Courses",
        slug: "open-executive-short-courses",
        count: 6,
        price: 100_000,
        programmes: [
            {
                id: 1,
                title: "Corporate Leadership & Management Development",
                slug: "corporate-leadership-management-development",
                count: 5,
                price: 150_000,
            },
            {
                id: 2,
                title: "Education Leadership & Management Development",
                slug: "education-leadership-management-development",
                count: 5,
                price: 150_000,
            },
            {
                id: 3,
                title: "Management Skills Development",
                slug: "management-skills-development",
                count: 5,
                price: 150_000,
            },
        ]
    },
    {
        id: 2,
        title: "Open Executive Modular Programmes",
        slug: "open-executive-modular-programmes",
        count: 12,
        price: 150_650,
        programmes: [
            {
                id: 1,
                title: "Corporate Leadership & Management Development",
                slug: "corporate-leadership-management-development",
                count: 5,
                price: 150_000,
            },
            {
                id: 2,
                title: "Education Leadership & Management Development",
                slug: "education-leadership-management-development",
                count: 5,
                price: 150_000,
            },
            {
                id: 3,
                title: "Management Skills Development",
                slug: "management-skills-development",
                count: 5,
                price: 150_000,
            },
        ]
    },
    {
        id: 3,
        title: "Organization Custom Solutions",
        slug: "organization-custom-solutions",
        count: 8,
        price: 110_790,
        programmes: [
            {
                id: 1,
                title: "Corporate Leadership & Management Development",
                slug: "corporate-leadership-management-development",
                count: 5,
                price: 150_000,
            },
            {
                id: 2,
                title: "Education Leadership & Management Development",
                slug: "education-leadership-management-development",
                count: 5,
                price: 150_000,
            },
            {
                id: 3,
                title: "Management Skills Development",
                slug: "management-skills-development",
                count: 5,
                price: 150_000,
            },
        ]
    },
] 