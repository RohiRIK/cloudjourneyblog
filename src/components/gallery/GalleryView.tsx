"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => (
        <div key={index}>
          <Media
            enlarge
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
          />
          {image.credit && (
            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "0.8rem",
                opacity: 0.7,
                textAlign: "center",
              }}
            >
              {image.credit}
            </p>
          )}
        </div>
      ))}
    </MasonryGrid>
  );
}
