import { Stack, Title, Button, Text } from "@mantine/core";
import { useNavigate, useParams } from "react-router";
import { LuArrowRight } from "react-icons/lu";

import styles from "./banner.module.scss";

export default function Banner() {
    const { slug, courseId } = useParams();
    const navigate = useNavigate();

    const urlParams = `?programme=${slug}&course=${courseId}`;
    return (
        <section className={styles["banner"]}>
            <Stack align="center">
                <Title c="white" tt="uppercase">
                    Interested? Join Us Today!
                </Title>
                <Text ta="center" w={600} c="white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero cum 
                    deleniti sit quaerat nihil perferendis illo porro quae at fugiat vel a 
                    placeat amet quo, velit veritatis voluptate tempore aspernatur?
                </Text>

                <Stack mt="xl">
                    <Button 
                        px="xl"
                        mx="auto"
                        fz={12} 
                        fw={600} 
                        size="lg"
                        radius="xs" 
                        tt="uppercase"
                        color="primary.8"
                        variant="filled"
                        style={{alignSelf: "flex-start"}}
                        rightSection={<LuArrowRight size={18} />}
                        onClick={() => navigate(`/brochure${(slug && courseId) && `${urlParams}`}`)}
                    >
                        Download Brochure
                    </Button>
                    <Button 
                        px="xl"
                        mx="auto"
                        fz={12} 
                        fw={600} 
                        size="lg"
                        radius="xs" 
                        tt="uppercase"
                        color="white"
                        variant="outline"
                        style={{alignSelf: "flex-start"}}
                        rightSection={<LuArrowRight size={18} />}
                        onClick={() => navigate(`/new-application/${(slug && courseId) && `${urlParams}`}`)}
                    >
                        Send an application
                    </Button>
                </Stack>
            </Stack>
        </section>
    )
}
