import { Title } from "@mantine/core";
import styles from "./form.module.scss";

export default function NewApplyForm() {
    return (
        <section className={styles["af"]}>
            <Title ta="center">
                Send an Application
            </Title>
        </section>
    )
}
