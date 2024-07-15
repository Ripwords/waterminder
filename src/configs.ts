import { defineConfigs } from "reactive-vscode"

export const { message, interval, focused } = defineConfigs("waterminder", {
  message: "string",
  interval: "number",
  // amountPerNotification: "number",
  // goal: "number",
  focused: "boolean",
})
