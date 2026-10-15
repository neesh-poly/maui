/**
 * Opacity of the dim scrim rendered behind transient overlays.
 *
 * Shared by `Dialog` and `Drawer` so every overlay dims the page to the same
 * amount; previously the dialog backdrop was a much lighter one-off value.
 */
export const scrimAlpha = 0.32

/** Solid scrim fill for overlay backdrops. */
export const scrimColor = `rgb(0 0 0 / ${scrimAlpha})`
