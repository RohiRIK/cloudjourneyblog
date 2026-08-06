import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  /** Explicit slug allow-list in display order (overrides date sorting). */
  include?: string[];
  /** Heading level for card titles (defaults to "h2"). */
  heading?: "h1" | "h2" | "h3";
}

export function Projects({ range, exclude, include, heading = "h2" }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  if (include && include.length > 0) {
    // Curated order: keep exactly the listed slugs, in the listed order.
    const bySlug = new Map(allProjects.map((post) => [post.slug, post]));
    allProjects = include
      .map((slug) => bySlug.get(slug))
      .filter((post): post is NonNullable<typeof post> => Boolean(post));
  } else {
    // Exclude by slug (exact match)
    if (exclude && exclude.length > 0) {
      allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
    }

    allProjects = allProjects.sort((a, b) => {
      return (
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
      );
    });
  }

  const displayedProjects = range
    ? allProjects.slice(range[0] - 1, range[1] ?? allProjects.length)
    : allProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          heading={heading}
        />
      ))}
    </Column>
  );
}
