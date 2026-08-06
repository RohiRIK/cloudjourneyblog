import { Column, Heading, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";

import { AgentCard } from "@/components/agents/AgentCard";
import { agentGroups, agentStack, baseURL, person } from "@/resources";

import styles from "./agent-stack.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: agentStack.title,
    description: agentStack.description,
    baseURL,
    path: agentStack.path,
    image: person.avatar,
  });
}

export default function AgentStackPage() {
  return (
    <Column maxWidth="l" paddingTop="24" paddingBottom="xl" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={agentStack.path}
        title={agentStack.title}
        description={agentStack.description}
        image={`${baseURL}${person.avatar}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column maxWidth="m" gap="20">
        <Text variant="label-strong-s" onBackground="brand-strong">
          {agentStack.eyebrow}
        </Text>
        <Heading as="h1" variant="display-strong-l" wrap="balance">
          {agentStack.headline}
        </Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak" wrap="balance">
          {agentStack.introduction}
        </Text>
      </Column>

      <Column
        fillWidth
        gap="16"
        padding="l"
        border="neutral-alpha-weak"
        background="surface"
        radius="l"
      >
        <Text variant="label-strong-s" onBackground="brand-strong">
          {agentStack.toolchain.eyebrow}
        </Text>
        <Heading as="h2" variant="heading-strong-xl">
          {agentStack.toolchain.headline}
        </Heading>
        <Text onBackground="neutral-weak" wrap="balance">
          {agentStack.toolchain.description}
        </Text>
        <Row gap="8" wrap>
          {agentStack.toolchain.tools.map((tool) => (
            <Tag key={tool} size="s" prefixIcon={tool === "Hermes" ? "cpu" : "terminal"}>
              {tool}
            </Tag>
          ))}
        </Row>
      </Column>

      <Column
        fillWidth
        gap="16"
        padding="l"
        border="brand-alpha-medium"
        background="brand-alpha-weak"
        radius="l"
      >
        <Heading as="h2" variant="heading-strong-l">
          How the fleet works
        </Heading>
        <div className={styles.operatingModel}>
          {agentStack.operatingModel.map((step, index) => (
            <Column key={step.label} gap="4" className={styles.operatingStep}>
              <Text variant="label-strong-s" onBackground="brand-strong">
                {String(index + 1).padStart(2, "0")} · {step.label}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {step.detail}
              </Text>
            </Column>
          ))}
        </div>
        <Text variant="body-default-s" onBackground="neutral-weak">
          No agent independently deploys, publishes, books, pays, submits, or changes a tenant or
          production system. Those actions remain explicit human approval gates.
        </Text>
      </Column>

      {agentGroups.map((group) => (
        <Column key={group.id} gap="20" fillWidth>
          <Column gap="8" maxWidth="s">
            <Heading as="h2" variant="heading-strong-xl">
              {group.title}
            </Heading>
            <Text onBackground="neutral-weak">{group.description}</Text>
          </Column>
          <div className={styles.agentGrid}>
            {group.agents.map((agent) => (
              <AgentCard key={agent.slug} agent={agent} />
            ))}
          </div>
        </Column>
      ))}

      <Row fillWidth paddingTop="m">
        <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
          Portraits are generated and reviewed individually. Until one is approved, its card stays
          intentionally visible with a role-based placeholder rather than a missing image.
        </Text>
      </Row>
    </Column>
  );
}
