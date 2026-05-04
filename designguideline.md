# Design Guideline — Little Lemon

This document serves as the single source of truth for the Little Lemon design system, ensuring visual and functional consistency across the reservation platform.

> Last updated: 2026-05-04 | Updated by: Antigravity

## 1. Color Palette

Based on the heritage and vibrancy of Little Lemon.

### Primary

| Token             | Value     | Usage                   |
| ----------------- | --------- | ----------------------- |
| `--color-primary` | `#F4CE14` | Lemon Yellow: CTAs, primary accents |
| `--color-secondary`| `#495E57` | Charcoal/Forest: Headers, secondary actions |

### Secondary / Accent

| Token              | Value     | Usage |
| ------------------ | --------- | ----- |
| `--color-accent-1` | `#EE9972` | Peach: Secondary highlights |
| `--color-accent-2` | `#FBDABB` | Cream: Soft backgrounds, light surfaces |

### Semantic (Functional)

| Token             | Value     | Usage                  |
| ----------------- | --------- | ---------------------- |
| `--color-success` | `#457B9D` | Success feedback (simulated email) |
| `--color-error`   | `#E63946` | Validation errors      |

### Neutrals

| Token                  | Value     | Usage              |
| ---------------------- | --------- | ------------------ |
| `--color-bg-primary`   | `#EDEFEE` | Main background (Light Grey) |
| `--color-bg-secondary` | `#FFFFFF` | Cards, surfaces    |
| `--color-text-primary` | `#333333` | Body text          |
| `--color-border`       | `#AFAFAF` | Dividers, outlines |

## 2. Typography

We use premium, harmonious typography to evoke a sophisticated Mediterranean feel.

| Level   | Font Family | Size | Weight | Line Height | Usage           |
| ------- | ----------- | ---- | ------ | ----------- | --------------- |
| H1      | Markazi Text| 64px | 500    | 1.1         | Page titles     |
| H2      | Markazi Text| 40px | 500    | 1.2         | Section headers |
| H3      | Karla       | 20px | 700    | 1.3         | Card titles     |
| Body    | Karla       | 18px | 400    | 1.5         | Paragraphs      |
| Caption | Karla       | 14px | 400    | 1.4         | Helper text     |
| Button  | Karla       | 18px | 700    | 1.0         | CTAs            |

## 3. Spacing Scale

Base unit: `8px`
| Token | Value | Usage |
|----------|--------|----------------------------|
| `--sp-1` | `4px` | Tight gaps (icon + label) |
| `--sp-2` | `8px` | Inner padding |
| `--sp-3` | `16px` | Card padding, field gaps |
| `--sp-4` | `24px` | Section spacing |
| `--sp-5` | `32px` | Layout gutters |

## 4. Border Radii

| Token           | Value    | Usage                  |
| --------------- | -------- | ---------------------- |
| `--radius-sm`   | `8px`    | Inputs, small elements |
| `--radius-md`   | `16px`   | Cards, dropdowns       |

## 5. UI/UX Principles (Little Lemon Core)

1. **Visual Consistency**: All CTAs use `#F4CE14` with `Karla Bold`.
2. **Functional Consistency**: Form elements behave predictably across steps.
3. **User-Expectation Consistency**: Date pickers and number inputs follow standard web patterns.
4. **Empathy-Driven Design**: 
   - Seating options are presented clearly to reduce anxiety.
   - Progress indicators help the user (Tilly) know how close they are to finishing.
   - Confirmation screens simulate the finality of an email receipt.

## 6. Iconography

- **Library**: Lucide-React
- **Default Size**: 24px
- **Stroke Width**: 2px

## 7. Motion / Animation

| Property    | Duration | Easing                      | Usage             |
| ----------- | -------- | --------------------------- | ----------------- |
| Interaction | `200ms`  | `ease-out`                  | Button hover/click|
| Disclosure  | `300ms`  | `cubic-bezier(0.4,0,0.2,1)` | Form reveal       |

## Changelog

| Date       | Change           | Author |
| ---------- | ---------------- | ------ |
| 2026-05-04 | Initial creation | Antigravity |
