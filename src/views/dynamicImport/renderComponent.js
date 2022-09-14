import { createApp } from 'vue'

export default function renderComponent({ el, component, props, appContext }) {
  let app = createApp(component, props)
  Object.assign(app._context, appContext) // must use Object.assign on _context
  app.mount(el)

  return () => {
    if (app) {
      app.unmount()
    }
    app = undefined
  }
}
