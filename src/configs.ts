import { defineConfigs } from "reactive-vscode"

export const { message, interval } = defineConfigs("waterminder", {
  message: "string",
  interval: "number",
  // amountPerNotification: "number",
  // goal: "number",
  focused: "boolean",
})
