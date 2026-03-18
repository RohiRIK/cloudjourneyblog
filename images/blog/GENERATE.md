# Generate Blog Header Image

Generate a Nano Banana style header image for a new blog post using the prompts defined in PROMPTS.md.

## Steps

1. Ask the user: "Which blog post needs a header image?" Wait for their answer (slug or title).

2. Open `public/images/blog/PROMPTS.md` and find the entry matching the post they named. Read the **Prompt:** block for that entry.

3. If the prompt specifies a different style (e.g., NASA/space, monochrome blueprint), use that style as-is. Otherwise, prepend the following universal style rules to the prompt before generating:

   ```
   Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
   background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No
   text in image. No gradients anywhere. No glow-blur effects. Clean geometric
   shapes. Flat. Minimal. No photorealism. No painterly rendering.
   ```

4. Generate the image with these output settings:
   - Format: PNG
   - Aspect ratio: 1:1 (square)
   - Resolution: 1024 × 1024 px minimum

5. Before accepting the result, verify:
   - Dark background (near-black)?
   - No text visible anywhere?
   - No gradients or blurry glow?
   - Geometric and clean — not painterly or photorealistic?

   If any check fails, regenerate.

6. Save the accepted image to: `public/images/blog/<slug>.png`

7. Mark the entry as done in `PROMPTS.md` by changing `- [ ]` to `- [x]` for that image.

8. Confirm: "Done — saved as `public/images/blog/<slug>.png`. Add `image: \"/images/blog/<slug>.png\"` to the post frontmatter if not already set."
