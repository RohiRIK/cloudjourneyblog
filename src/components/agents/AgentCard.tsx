import { Card, Column, Heading, Icon, Media, Row, Tag, Text } from "@once-ui-system/core";

import type { Agent } from "@/resources/agents";
import { withBasePath } from "@/utils/basePath";

import styles from "./AgentCard.module.scss";

type AgentCardProps = {
  agent: Agent;
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export function AgentCard({ agent }: AgentCardProps) {
  const portraitReady = agent.portrait.status === "ready";

  return (
    <Card
      fillWidth
      direction="column"
      border="neutral-alpha-weak"
      background="surface"
      radius="l"
      padding="l"
      gap="20"
      className={styles.card}
    >
      {portraitReady ? (
        <Media
          className={styles.portrait}
          src={withBasePath(agent.portrait.expectedPath)}
          alt={agent.portrait.alt}
          aspectRatio="1 / 1"
          radius="m"
          sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
      ) : (
        <Column
          className={styles.placeholder}
          background="brand-alpha-weak"
          border="brand-alpha-medium"
          radius="m"
          horizontal="center"
          vertical="center"
          gap="8"
          role="img"
          aria-label={`${agent.name}: portrait in formation`}
        >
          <Icon name={agent.icon} size="l" onBackground="brand-strong" />
          <Text variant="display-strong-s">{initials(agent.name)}</Text>
          <Text variant="label-default-xs" onBackground="neutral-weak">
            Portrait in formation
          </Text>
        </Column>
      )}

      <Column gap="12" fillWidth>
        <Row gap="8" vertical="center" wrap>
          <Heading as="h3" variant="heading-strong-l">
            {agent.name}
          </Heading>
          <Tag size="s" prefixIcon={agent.icon}>
            {agent.role}
          </Tag>
        </Row>
        <Text onBackground="neutral-weak" wrap="balance">
          {agent.summary}
        </Text>
        <Text variant="label-default-s" onBackground="neutral-weak">
          Made of: {agent.material}
        </Text>
        <Row gap="8" wrap>
          {agent.tags.map((tag) => (
            <Tag key={tag} size="s">
              {tag}
            </Tag>
          ))}
        </Row>
      </Column>
    </Card>
  );
}
