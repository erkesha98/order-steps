/** @type { import('@storybook/react').Preview } */
const customViewports = {
  iphone14Pro: {
    name: "Iphone 14 Pro",
    styles: {
      width: "393px",
      height: "852px",
    },
  },
  iphone14ProMax: {
    name: "Iphone 14 Pro Max",
    styles: {
      width: "430px",
      height: "932px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1440px",
      height: " 900px",
    },
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...customViewports,
      },
    },
  },
};

export default preview;
