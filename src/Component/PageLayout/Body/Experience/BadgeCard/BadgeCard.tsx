import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Spoiler,
} from "@mantine/core";
import classes from "./BadgeCard.module.css";

interface Props {
  name: string;
  src: string;
  description: string;
  link: string;
  badges: { label: string }[];
}
export function BadgeCard(props: Props) {
  const { name, src, description, link, badges } = props;
  const features = badges.map((badge) => (
    <Badge variant="white" key={badge.label}>
      {badge.label}
    </Badge>
  ));

  return (
    <Card
      withBorder
      radius="md"
      p="md"
      className={classes.card}
      bg="#333434"
      mt={20}
    >
      <Card.Section className={classes.section} mt="md" p={15}>
        <Group justify="space-evenly">
          <Text fz="xl" fw={500} c="white">
            {name}
          </Text>

          <Image src={src} alt={name} height={100} w="auto" fit="contain" />
        </Group>
        <Text fz="sm" mt="xs" c="white" ta="left">
          <Spoiler maxHeight={60} showLabel="Show more" hideLabel="Hide">
            {description}
          </Spoiler>
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={7} mt={5} mx="auto" p={16}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }} bg="white" c="dark">
          See Live
        </Button>
      </Group>
    </Card>
  );
}
