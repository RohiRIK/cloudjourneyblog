# Image Generation Instructions
# For use with any local image generation tool (Comfy, Invoke, Automatic1111, etc.)

---

## What to generate

5 blog header images. Generate them one at a time. Each prompt is in PROMPTS.md
in this same folder. The prompts are numbered and clearly separated by ---

---

## Style rules (apply to ALL 5 images)

These apply regardless of what the individual prompt says — they are universal
constraints for this image set:

- **Background:** Near-black (#0D0D0D or similar dark charcoal). Never white, never gray.
- **Colors:** Bold flat neon accents only. Hard edges. Zero gradients. Zero glow-blur effects.
- **Shapes:** Clean geometric forms. Flat. Minimal.
- **NO TEXT** of any kind in any image. Not labels, not titles, not watermarks.
- **NO gradients.** Not on backgrounds, not on shapes, not anywhere.
- **Style name to use if your tool has a style selector:** Cyberpunk / Retrofuturism / Flat design

---

## Output settings (use for every image)

| Setting       | Value                  |
|---------------|------------------------|
| Format        | PNG                    |
| Aspect ratio  | 1:1 (square)           |
| Resolution    | 1024 × 1024 px minimum |
| Color mode    | RGB                    |

---

## File naming — save each image with EXACTLY this filename

After generating each image, save it into THIS folder (`public/images/blog/`)
with the exact filename listed below. Do not add numbers, dates, or suffixes.

| Prompt # | Save as this filename                        |
|----------|----------------------------------------------|
| 1        | `zero-trust-is-not-a-product.png`            |
| 2        | `conditional-access-in-practice.png`         |
| 3        | `endpoint-hardening-zero-trust-control.png`  |
| 4        | `zero-trust-for-ai-agents.png`               |
| 5        | `identity-first-security.png`                |

---

## Step-by-step

1. Open `PROMPTS.md` (it's in this same folder)
2. Find **Prompt 1** — everything between the `---` lines under the first `##` heading
3. Copy the text under **Prompt:** into your generation tool
4. Set output to 1024×1024, PNG, square
5. Generate → save as `zero-trust-is-not-a-product.png` in this folder
6. Repeat for prompts 2 through 5 using the filenames in the table above

That's it. Once all 5 files are saved here, the blog posts will automatically
pick them up — no other changes needed.

---

## Quick checklist before saving each image

- [ ] Dark background (almost black)?
- [ ] No text visible anywhere?
- [ ] No gradients or blurry glow effects?
- [ ] Looks geometric and clean, not painterly or photorealistic?
- [ ] Saved with the exact filename from the table above?

If any box is unchecked — regenerate before saving.
