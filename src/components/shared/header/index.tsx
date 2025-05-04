import { Link, useNavigate } from "react-router";
import { Group, Text, Button } from "@mantine/core";
import { LuMapPin, LuSearch, LuGlobe } from "react-icons/lu";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

import styles from "./header.module.scss";

import brand from "@/assets/brand.png";
import { primary } from "@/constants/colors";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header className={styles["header"]}>
            <nav className={styles["header__nav"]}>
                <Group>
                    <LuMapPin color={primary[0]} strokeWidth={2} size={16} />
                    <Text fz={12} tt="uppercase" c="primary.0">
                        USIU Road, Off Thika Road (Exit 7), Nairobi, Kenya, East Africa.
                    </Text>
                </Group>

                <Group gap="xl" align="center">
                    <Group gap={10} align="center">
                        <Text fz={12} tt="uppercase" c="primary.0">
                            Follow Us- 
                        </Text>
                        <Group gap="sm" align="center">
                            <IoLogoFacebook strokeWidth={1.5} size={16} color={primary[0]} />
                            <IoLogoInstagram strokeWidth={1.5} size={16} color={primary[0]} />
                            <IoLogoLinkedin strokeWidth={1.5} size={16} color={primary[0]} />
                        </Group>
                    </Group>

                    <Group align="center">
                        <LuSearch color={primary[0]} size={16} strokeWidth={2} />
                        <Group gap={5} align="center">
                            <Text fz={12} c="primary.0" size="sm" tt="uppercase">eng</Text>
                            <LuGlobe color={primary[0]} size={16} strokeWidth={2} />
                        </Group>
                    </Group>
                </Group>
            </nav>

            <div className={styles["header__div"]}>
                <Group>
                    <img 
                        onClick={() => navigate("/")} 
                        className={styles["header__logo"]} 
                        src={brand}
                        alt="USIU" 
                    />
                    <ul className={styles["header__list"]}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/academics">Academics</Link>
                        </li>
                        <li>
                            <Link to="/support">Support</Link>
                        </li>
                    </ul>
                </Group>

                <Button 
                    fz={12} 
                    fw={600} 
                    size="md" 
                    radius="xs" 
                    tt="uppercase"
                    color="primary.8"
                    variant="filled"
                    onClick={() => navigate("/brochure")}
                >
                    Download Brochure
                </Button>
            </div>
        </header>
    )
}
