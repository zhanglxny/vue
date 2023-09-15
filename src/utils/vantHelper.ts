import type { App } from 'vue'
import { Button } from 'vant'

export default function (app: App) {
  ;[Button].forEach((v: any) => {
    app.use(v)
  })
}
