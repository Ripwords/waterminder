import { defineExtension, ref, watchEffect } from "reactive-vscode"
import { window } from "vscode"
import { message, interval } from "./configs"

export = defineExtension(() => {
  const windowFocused = ref(window.state.active)

  const callback = () => {
    if (windowFocused.value) {
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
