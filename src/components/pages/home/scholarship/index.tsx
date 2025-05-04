import { Title, Text, Stack, Button } from "@mantine/core";
import { LuArrowRight } from "react-icons/lu";

import styles from "./scholarship.module.scss";

export default function Scholarship() {
    return (
        <section className={styles["scholarship"]}>
            <Stack className={styles["scholarship__stack"]}>
                <Title ta="center" tt="capitalize" c="white">
                    Scholarships & Financial Aid
                </Title>
                <Text ta="center" c="white">
                    Each semester, USIU-A University is proud to honor academically 
                    talented and exceptionally skilled students with a variety of 
                    scholarships and awards. The university annually awards more than 
                    100 million takas as scholarships to both undergraduate and 
                    postgraduate students.
                </Text>

                <Button 
                    px="xl"
                    mt="lg"
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
                    //onClick={() => navigate("/products")}
                >
                    Know more
                </Button>
            </Stack>
        </section>
    )
}
