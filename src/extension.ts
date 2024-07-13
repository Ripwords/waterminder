import { defineExtension, ref, watchEffect } from "reactive-vscode"
import { window } from "vscode"
import { message, interval } from "./configs"
import { logger } from "./utils"

export = defineExtension(() => {
  logger.info("Extension Activated")

  const callback = () => {
    window.showInformationMessage(message.value)
  }

  const intervalId = ref<NodeJS.Timeout | null>()

  watchEffect(() => {
    if (intervalId.value) {
      clearInterval(intervalId.value)
    }
    intervalId.value = setInterval(callback, interval.value * 1000 * 60)
  })
})
