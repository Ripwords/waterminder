import { defineExtension, ref, watchEffect } from "reactive-vscode"
import { window } from "vscode"
import { message, interval, focused } from "./configs"

export = defineExtension(() => {
  const callback = () => {
    if (focused.value) {
      if (window.state.focused) {
        window.showInformationMessage(message.value)
      }
      return
    } else {
      window.showInformationMessage(message.value)
    }
  }

  const intervalId = ref<NodeJS.Timeout | null>()

  watchEffect(() => {
    if (intervalId.value) {
      clearInterval(intervalId.value)
    }
    intervalId.value = setInterval(callback, interval.value * 1000 * 60)
  })
})
