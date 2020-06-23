import { reactive, onMounted, onUnmounted, toRefs } from '@vue/composition-api'

export function useMousePosition() {
  const point = reactive({
    x: 0,
    y: 0
  })

  const update = (e) => {
    point.x = e.pageX
    point.y = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return toRefs(point)
}