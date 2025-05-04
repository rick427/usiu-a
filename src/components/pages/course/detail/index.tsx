import { Grid, Group, Stack, Button, Paper, Title, Text, Accordion, Table, Box, Divider } from "@mantine/core";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { LuMapPin, LuUsers, LuBookCheck, LuClock } from "react-icons/lu";

import styles from "./details.module.scss";
import courseImg from "@/assets/about.png";

const ss_01 = [
    { title: "Introduction to Africana Studies or GSS 2201 - Africana Studies", credit: 3 },
    { title: "The Contemporary African Diaspora", credit: 3 },
    { title: "African-Americans: A Seminar", credit: 3 },
];
const ss_02 = [
    { title: "Introduction to Africana Studies or GSS 2201 - Africana Studies", credit: 3 },
    { title: "The Contemporary African Diaspora", credit: 3 },
    { title: "African-Americans: A Seminar", credit: 3 },
];

export default function Detail() {
    return (
        <section className={styles["detail"]}>
            <Grid gutter={80}>
                <Grid.Col span={{base: 12, md: 8}}>
                    <Stack gap="xl">
                        <img className={styles["detail__img"]} src={courseImg} alt="course" />

                        <Stack>
                            <Title order={2}>Aim of the Programme</Title>
                            <Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis quo, 
                                aut, eaque praesentium autem tenetur soluta nesciunt quod quisquam quasi 
                                voluptas. Consectetur porro ullam reiciendis, suscipit quae alias aliquam ex 
                                excepturi facilis voluptatum saepe dignissimos, rerum voluptas voluptatem 
                                recusandae totam adipisci culpa sunt. Eos veritatis accusamus amet quibusdam quidem.
                            </Text>
                            <Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis quo, 
                                aut, eaque praesentium autem tenetur soluta nesciunt quod quisquam quasi 
                                voluptas. Consectetur porro ullam reiciendis, suscipit quae alias aliquam ex 
                                excepturi facilis voluptatum saepe dignissimos, rerum voluptas voluptatem 
                                recusandae totam adipisci culpa sunt. Eos veritatis accusamus amet quibusdam quidem.
                            </Text>
                        </Stack>

                        <Stack>
                            <Title order={2}>Outcome of the Program</Title>
                            <Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis quo, 
                                aut, eaque praesentium autem tenetur soluta nesciunt quod quisquam quasi 
                                voluptas. Consectetur porro ullam reiciendis, suscipit quae alias aliquam ex 
                                excepturi facilis voluptatum saepe dignissimos, rerum voluptas voluptatem 
                                recusandae totam adipisci culpa sunt. Eos veritatis accusamus.
                            </Text>
                        </Stack>

                        <Stack>
                            <Title order={2}>Programme Courses: 40 credits</Title>
                            <Accordion variant="separated" defaultValue="YEAR_ONE">
                                <Accordion.Item value="YEAR_ONE">
                                    <Accordion.Control>
                                        <Text fw={600} span>YEAR ONE - 2025</Text>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Stack>
                                            <Table 
                                                withTableBorder 
                                                highlightOnHover 
                                                withColumnBorders
                                            >
                                                <Table.Thead>
                                                    <Table.Tr>
                                                        <Table.Th>Spring Semester 1</Table.Th>
                                                        <Table.Th>Credits</Table.Th>
                                                    </Table.Tr>
                                                </Table.Thead>

                                                <Table.Tbody>
                                                    {ss_01.map(el => (
                                                        <Table.Tr key={el.title}>
                                                            <Table.Td>{el.title}</Table.Td>
                                                            <Table.Td>{el.credit} credits</Table.Td>
                                                        </Table.Tr>
                                                    ))}
                                                </Table.Tbody>
                                            </Table>

                                            <Table
                                                withTableBorder 
                                                highlightOnHover 
                                                withColumnBorders
                                            >
                                                <Table.Thead>
                                                    <Table.Tr>
                                                        <Table.Th>Spring Semester 2</Table.Th>
                                                        <Table.Th>Credits</Table.Th>
                                                    </Table.Tr>
                                                </Table.Thead>

                                                <Table.Tbody>
                                                    {ss_02.map(el => (
                                                        <Table.Tr key={el.title}>
                                                            <Table.Td>{el.title}</Table.Td>
                                                            <Table.Td>{el.credit} credits</Table.Td>
                                                        </Table.Tr>
                                                    ))}
                                                </Table.Tbody>
                                            </Table>
                                        </Stack>
                                    </Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="YEAR_TWO">
                                    <Accordion.Control>
                                        <Text fw={600} span>YEAR TWO - 2026</Text>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Stack>
                                            <Table
                                                withTableBorder 
                                                highlightOnHover 
                                                withColumnBorders
                                            >
                                                <Table.Thead>
                                                    <Table.Tr>
                                                        <Table.Th>Spring Semester 1</Table.Th>
                                                        <Table.Th>Credits</Table.Th>
                                                    </Table.Tr>
                                                </Table.Thead>

                                                <Table.Tbody>
                                                    {ss_01.map(el => (
                                                        <Table.Tr key={el.title}>
                                                            <Table.Td>{el.title}</Table.Td>
                                                            <Table.Td>{el.credit} credits</Table.Td>
                                                        </Table.Tr>
                                                    ))}
                                                </Table.Tbody>
                                            </Table>

                                            <Table
                                                withTableBorder 
                                                highlightOnHover 
                                                withColumnBorders
                                            >
                                                <Table.Thead>
                                                    <Table.Tr>
                                                        <Table.Th>Spring Semester 2</Table.Th>
                                                        <Table.Th>Credits</Table.Th>
                                                    </Table.Tr>
                                                </Table.Thead>

                                                <Table.Tbody>
                                                    {ss_02.map(el => (
                                                        <Table.Tr key={el.title}>
                                                            <Table.Td>{el.title}</Table.Td>
                                                            <Table.Td>{el.credit} credits</Table.Td>
                                                        </Table.Tr>
                                                    ))}
                                                </Table.Tbody>
                                            </Table>
                                        </Stack>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </Stack>
                    </Stack>
                </Grid.Col>

                <Grid.Col span={{base: 12, md: 4}}>
                    <Stack>
                        <Paper className={styles["detail__exp"]}>
                            <Box className={styles["detail__exp__box"]}>
                                <Title c="primary.0" order={3}>Programme Overview</Title>
                            </Box>
                            <Stack className={styles["detail__exp__stack"]}>
                                <Group justify="space-between" align="center">
                                    <Group gap={5}>
                                        <LuClock />
                                        <Text fz={15} fw={600}>Duration:</Text>
                                    </Group>
                                    <Text fz={15}>2 Years</Text>
                                </Group>
                                <Divider/>
                                <Group justify="space-between" align="center">
                                    <Group gap={5}>
                                        <LuUsers />
                                        <Text fz={15} fw={600}>Target Audience:</Text>
                                    </Group>
                                    <Text fz={15}>Everyone</Text>
                                </Group>
                                <Divider/>
                                <Group justify="space-between" align="center">
                                    <Group gap={5}>
                                        <LuBookCheck />
                                        <Text fz={15} fw={600}>Mode of Delivery:</Text>
                                    </Group>
                                    <Text fz={15}>On-site (Face-to-Face)</Text>
                                </Group>
                                <Divider/>
                                <Group justify="space-between" align="center">
                                    <Group gap={5}>
                                        <LuMapPin />
                                        <Text fz={15} fw={600}>Location:</Text>
                                    </Group>
                                    <Text fz={15}>USIU-A, Nairobi, Kenya</Text>
                                </Group>
                                <Divider/>
                                <Group justify="space-between" align="center">
                                    <Group gap={5}>
                                        <LuClock />
                                        <Text fz={15} fw={600}>Apply Deadlines:</Text>
                                    </Group>
                                    <Text fz={15}>Jan 2025 - 12:30PM EAT</Text>
                                </Group>
                                <Divider/>
                                <Group justify="space-between" align="center">
                                    <Group gap={5}>
                                        <LuClock />
                                        <Text fz={15} fw={600}>Start Dates:</Text>
                                    </Group>
                                    <Text fz={15}>6th Jan 2025 - 6th Dec 2026</Text>
                                </Group>
                            </Stack>
                        </Paper>

                        <Paper className={styles["detail__info"]}>
                            <Stack>
                                <Title order={3}>Department Contact Info</Title>
                                <Title order={4}>MBA. in African Studies</Title>
                            </Stack>
                            <Stack>
                                <Title order={3}>Contact:</Title>
                                <Text>barrygachanga.usiu@info.com</Text>
                            </Stack>
                            <Stack>
                                <Title order={3}>
                                    Social Info
                                </Title>
                                <Group gap="sm" align="center">
                                    <IoLogoFacebook strokeWidth={1.5} size={22} color="black" />
                                    <IoLogoInstagram strokeWidth={1.5} size={22} color="black" />
                                    <IoLogoLinkedin strokeWidth={1.5} size={22} color="black" />
                                </Group>
                            </Stack>
                        </Paper>

                        <Paper className={styles["detail__card"]}>
                            <Stack align="center" gap={40} className={styles["detail__card__stack"]}>
                                <Text fz={20} ta="center" fw={600} c="white">
                                    Joint New Event About USIU-Africa History
                                </Text>
                                <Title order={3} c="white">
                                    MBA. in Africana Studies
                                </Title>
                                <Stack>
                                    <Group justify="center" gap="xs">
                                        <LuClock color="white" />
                                        <Text c="white">10:30 am</Text>
                                    </Group>
                                    <Group justify="center" gap="xs">
                                        <LuMapPin color="white" />
                                        <Text c="white">Yarra Park, UK</Text>
                                    </Group>
                                </Stack>
                                <Button 
                                    fz={12} 
                                    fw={600} 
                                    size="md" 
                                    radius="xs" 
                                    tt="uppercase"
                                    color="white"
                                    variant="outline"
                                    //onClick={() => navigate("/products")}
                                >
                                    Join Us Now
                                </Button>
                            </Stack>
                        </Paper>
                    </Stack>
                </Grid.Col>
            </Grid>
        </section>
    )
}
