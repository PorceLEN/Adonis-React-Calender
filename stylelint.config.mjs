/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-order": [
      [
        {
          groupName: "Positioning",
          properties: ["position", "top", "right", "bottom", "left", "z-index"],
        },
        {
          groupName: "Display & Box",
          properties: ["display", "flex", "grid", "float", "clear", "overflow"],
        },
        {
          groupName: "Box Model",
          properties: [
            "box-sizing",
            "width",
            "height",
            "margin",
            "padding",
            "border",
          ],
        },
        {
          groupName: "Typography",
          properties: [
            "font",
            "font-size",
            "font-weight",
            "line-height",
            "text-align",
            "color",
          ],
        },
        {
          groupName: "Visual",
          properties: [
            "background",
            "box-shadow",
            "opacity",
            "transform",
            "transition",
          ],
        },
      ],
      { unspecified: "bottomAlphabetical" },
    ],
  },
};
