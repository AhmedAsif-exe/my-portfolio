import { Avatar, Text, Group } from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons-react";
import classes from "./UserInfoIcons.module.css";
import Me from "../../../../Utils/Images/Me.jpg";
export default function UserInfoIcons() {
  return (
    <div className={classes.credentials}>
      <Group wrap="nowrap">
        <Avatar src={Me} size={100} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="#333434">
            Full stack developer
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            Muhammad Ahmed Asif
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="sm" c="#333434">
              ahmedsodyssey101@gmail.com
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="#333434">
              +11 (876) 890 56 23
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
