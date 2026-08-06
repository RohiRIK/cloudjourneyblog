import { Posts } from "@/components/blog/Posts";
import { Projects } from "@/components/work/Projects";
import { about, agentStack, baseURL, home, person, routes, social } from "@/resources";
import {
  Button,
  Column,
  Heading,
  Line,
  Meta,
  RevealFx,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}${person.avatar}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Row gap="12" wrap horizontal="center">
              <Button href="#selected-work" variant="primary" size="l" arrowIcon>
                See selected work
              </Button>
              <Button href={about.path} variant="secondary" size="l" arrowIcon>
                About
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>
      <Column id="selected-work" fillWidth gap="24" marginBottom="l">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
          <Row flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Selected work
            </Heading>
          </Row>
          <Row flex={3} paddingX="20">
            <Projects
              include={[
                "zero-trust-endpoint-hardening",
                "n8n-automation-workflows",
                "device-inventory-analytics",
              ]}
              heading="h3"
            />
          </Row>
        </Row>
        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>
      {routes["/agent-stack"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Column flex={1} paddingLeft="l" paddingTop="24" gap="12">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Meet the Agent Stack
              </Heading>
              <Text onBackground="neutral-weak" wrap="balance">
                The bounded specialist fleet behind research, implementation, operations, review,
                and decision support — with human approval for consequential actions.
              </Text>
              <Button href={agentStack.path} variant="secondary" size="m" arrowIcon>
                Explore the fleet
              </Button>
            </Column>
            <Column flex={3} paddingX="20" gap="12" vertical="center">
              <Text variant="heading-strong-l" wrap="balance">
                {agentStack.headline}
              </Text>
              <Text onBackground="neutral-weak">Evidence first. Human judgment last.</Text>
            </Column>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Selected writing
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 1]} columns="1" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Column fillWidth gap="24" marginBottom="l" horizontal="center" align="center">
        <Row fillWidth paddingRight="64" horizontal="center">
          <Line maxWidth={48} />
        </Row>
        <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center" marginTop="40">
          Get in touch
        </Heading>
        <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l" align="center">
          GitHub for code, LinkedIn for work, email for anything else.
        </Text>
        <Row gap="12" wrap horizontal="center" paddingTop="8">
          {social
            .filter((item) => item.essential)
            .map(
              (item) =>
                item.link && (
                  <Button
                    key={item.name}
                    href={item.link}
                    prefixIcon={item.icon}
                    variant="secondary"
                    size="m"
                    weight="default"
                  >
                    {item.name}
                  </Button>
                ),
            )}
        </Row>
        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>
    </Column>
  );
}
