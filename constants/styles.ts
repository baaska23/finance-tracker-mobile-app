const FFonts = {
  web: {
    sans: "Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  }
};

const FTypography = {
    fontFamily: FFonts.web.sans,
    fontSize: {
        small: 12,
        medium: 16,
        larger: 20,
        bigger: 24
    },
    fontWeight: {
        light: "300" as "300",
        regular: "400" as "400",
        medium: "500" as "500",
        bold: "700" as "700",
    },
    color: {
      primary: "#ffffff",
      secondary: "#000000"
    }
}

export { FFonts, FTypography };