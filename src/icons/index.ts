import type { App } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue' // svg component

const requireAll = function (requireContext: object) {
  return Object.values(requireContext);
};

const req = import.meta.glob("./svg/*.svg");

requireAll(req)

export default function(app: App) {
  app.component('SvgIcon', SvgIcon)
}
