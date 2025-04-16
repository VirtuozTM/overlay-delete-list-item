import color from "tinycolor2";
import type { ImmersiveOverlayState } from "../stores/overlayStore";

export const generateColors = (colors: ImmersiveOverlayState["colors"]) => {
  const darkColors = colors?.expanding?.dark?.slice(0, -1);
  const lastDarkColor =
    colors?.expanding?.dark?.[colors?.expanding?.dark?.length - 1];

  const lightColors = colors?.expanding?.light?.slice(0, -1);
  const lastLightColor =
    colors?.expanding?.light?.[colors?.expanding?.light?.length - 1];

  return {
    primary: colors?.primary || "#5465ff",
    secondary: colors?.secondary || "#5465ff",
    expanding: {
      dark: [
        ...(darkColors || []).map((c) => color(c).setAlpha(0.95).toRgbString()),
        color(lastDarkColor || "#5465ff")
          .setAlpha(0.95)
          .toRgbString(),
        color(lastDarkColor || "#5465ff")
          .setAlpha(0.2)
          .toRgbString(),
      ],
      light: [
        ...(lightColors || []).map((c) =>
          color(c).setAlpha(0.95).toRgbString()
        ),
        color(lastLightColor || "#0077b6")
          .setAlpha(0.95)
          .toRgbString(),
        color(lastLightColor || "#0077b6")
          .setAlpha(0.2)
          .toRgbString(),
      ],
    },
  };
};
