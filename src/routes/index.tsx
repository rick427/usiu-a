import { createBrowserRouter } from "react-router";

import Home from "@/pages/home";
import Course from "@/pages/course";
import Contact from "@/pages/contact";
import Courses from "@/pages/courses";
import Brochure from "@/pages/brochure";
import Academics from "@/pages/academics";
import ApplyForm from "@/pages/apply-form";
import Layout from "@/components/shared/layout";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/academics",
                element: <Academics />
            },
            {
                path: "/academics/:slug",
                element: <Courses />
            },
            {
                path: "/academics/:slug/:courseId",
                element: <Course />
            },
            {
                path: "/support",
                element: <Contact />
            },
            {
                path: "/brochure",
                element: <Brochure />
            },
            {
                path: "/new-application",
                element: <ApplyForm />
            },
        ]
    }
]);