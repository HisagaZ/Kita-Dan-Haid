# Implementation Plan: Product-Modular Review Dashboards

This plan transforms the "Detailed Reviews" section into a fully modular system where stats (Total Reviews, Average Rating, etc.) can be customized per-product using blocks, while maintaining the overall premium dashboard aesthetic.

## User Review Required

> [!IMPORTANT]
> - **Modular Architecture**: The dashboard stats (Total Reviews, Chart values) will move from "Section Settings" into a new block type called **"Product Dashboard Config"**.
> - **Fallback Logic**: If a product doesn't have a specific dashboard block configured, it will fall back to the section-level default stats.
> - **Visibility**: The section will remain visible, but its content will dynamically swap based on the product the customer is viewing.

## Proposed Changes

### [MODIFY] [detailed-reviews.liquid](file:///c:/Users/User/Downloads/Test-helloqween/sections/detailed-reviews.liquid)

#### 1. New Block Structure
- **Block Type: `product_dashboard`**
    - Picker: `target_product`.
    - Fields: Heading, Date Range, Total Reviews Count, Growth %, Average Rating, and Star distribution counts (5 through 1).
- **Block Type: `review`** (Existing)
    - Picker: `target_product`.
    - Author details, rating, content.

#### 2. Enhanced Liquid Logic
- **Context Search**: On a product page, the section will scan through the `product_dashboard` blocks to find a match for the current product.
- **Dynamic Stats**:
    - If a match is found: The header stats and bar chart will update to reflect that specific product's data.
    - If no match is found: Falling back to general store-wide stats.
- **Double Filtering**: The review list will similarly filter to show only blocks assigned to that product (or global reviews).

#### 3. UX Polish
- **Transition Effects**: Smooth cross-fade or slide when switching between filtered views.
- **Product Awareness**: Add a subtle "Reviews for [Product Title]" subtext if the dashboard is product-specific.

## Open Questions
1. **Multiple Products on Home Page**: If you add this section to the Home Page, should it show the "Store-wide" dashboard by default, or should we add a dropdown to select which product's dashboard to preview?
2. **Global Reviews**: Should reviews without a product assigned appear even when a specific product dashboard is active?

## Verification Plan

### Manual Verification
- **Scenario A (Product Page)**: Configure Product A with its own dashboard block. Ensure Product B still shows the default/global dashboard.
- **Scenario B (Admin)**: Test adding multiple dashboard blocks and ensuring the "trajectory" of the section changes as expected when navigating between products.
- **Scenario C (Empty States)**: Verify that everything still renders correctly if no dashboard blocks are defined.
