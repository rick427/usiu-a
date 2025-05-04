import { useForm } from "@mantine/form";
import { Paper, Title, TextInput, Textarea, Button, Stack } from "@mantine/core";

import styles from "./support-form.module.scss";

export default function SupportForm() {
    const form = useForm({
        initialValues: {
            fullName: "",
            email: "",
            message: "",
        },
        validate: {
            fullName: (value => value ? null : "Full name is required"),
            email: (value => value ? null : "Email is required"),
            message: (value => value ? null : "Message is required"),
        }
    });

    const handleSubmit = (data: typeof form.values) => {
        console.log(data);
    }

    return (
        <section className={styles["sf"]}>
            <Title ta="center" fw={600}>
                Get in Touch With Us
            </Title>

            <Paper className={styles["sf__form"]}>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack gap="xl">
                        <TextInput 
                            withAsterisk
                            size="md"
                            label="Full Name"
                            description="Your first and last name as stated on your national ID"
                            placeholder="Enter your full name"
                            {...form.getInputProps("fullName")}
                        />
                        <TextInput 
                            withAsterisk
                            size="md"
                            label="Email address"
                            placeholder="Your email"
                            {...form.getInputProps("email")}
                        />
                        <Textarea 
                            withAsterisk
                            rows={4}
                            size="md"
                            label="How can we help?"
                            placeholder="Your message"
                            {...form.getInputProps("message")}
                        />
                        <Button 
                            fz={13} 
                            fw={600} 
                            size="lg"
                            type="submit"
                            radius="xs" 
                            tt="uppercase"
                            color="primary.8"
                            variant="filled"
                            //onClick={() => navigate("/products")}
                        >
                            Send Message
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </section>
    )
}
