import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Spoiler,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./BadgeCard.module.css";
import { useEffect } from "react";

interface Props {
  modalHandler: (opened: boolean) => void;
  name: string;
  src: string;
  description: string;
  link: string;
  badges: { label: string }[];
}
export function BadgeCard(props: Props) {
  const { name, src, description, link, badges, modalHandler } = props;
  const features = badges.map((badge) => (
    <Badge variant="white" key={badge.label}>
      {badge.label}
    </Badge>
  ));
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    modalHandler(opened as boolean);
  }, [opened, modalHandler]);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        size="xl"
        padding={0}
      >
        <Image src={src} alt={name} />
      </Modal>
      <Card
        withBorder
        radius="md"
        p="md"
        className={classes.card}
        bg="#333434"
        mt={20}
      >
        <Card.Section className={classes.section} p={15}>
          <Group justify="space-evenly">
            <Text fz="xl" fw={500} c="white">
              {name}
            </Text>
            <button className={classes.button} onClick={open}>
              <Image src={src} alt={name} height={100} w="auto" fit="contain" />
            </button>
          </Group>

          <Text fz="sm" c="white" ta="left" className={classes.description}>
            <Spoiler maxHeight={60} showLabel="Show more" hideLabel="Hide">
              {description}
            </Spoiler>
          </Text>
        </Card.Section>

        {window.innerWidth > 500 && (
          <Card.Section className={classes.section}>
            <Group gap={7} mt={2} mx="auto" px={16} className={classes.ic}>
              {features}
            </Group>
          </Card.Section>
        )}

        <Group mt="xs">
          <a href={link} style={{ all: "unset" }}>
            <Button radius="md" bg="white" c="dark">
              See Live
            </Button>
          </a>
        </Group>
      </Card>
    </>
  );
}
