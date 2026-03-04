"use client";

import Giscus from "@giscus/react";

// Configure these after:
// 1. Enable GitHub Discussions on RohiRIK/resume (Settings → Features → Discussions)
// 2. Visit https://giscus.app to get your repoId + categoryId
const REPO_ID = "REPLACE_WITH_REPO_ID";
const CATEGORY_ID = "REPLACE_WITH_CATEGORY_ID";

export function Comments() {
  return (
    <Giscus
      repo="RohiRIK/resume"
      repoId={REPO_ID}
      category="Announcements"
      categoryId={CATEGORY_ID}
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="dark_dimmed"
      lang="en"
      loading="lazy"
    />
  );
}
