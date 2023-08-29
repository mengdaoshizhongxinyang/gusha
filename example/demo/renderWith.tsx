import { computed, defineComponent, ref } from "vue"

import { renderWith, defineEmit, defineSlot } from "../../index"
const Comp = defineComponent(
  (props: { a?: string, b?: string }) => {
    const foo = computed(() => `${props.a}-${props.b}`)
    const emit = defineEmit<{
      (key: 'myClick'): any
    }>()
    function bar() {
      console.log(foo.value)
    }
    const slots = defineSlot<{ content: [] }>()
    return renderWith(
      () => <div>
        {props.a}
        <button onClick={() => emit('myClick')}>
          {slots.content?.()}
        </button>
      </div>, { bar, foo, $emit: emit, $slots: slots })
  })

export default defineComponent(() => {
  const temp = ref<ReturnType<typeof Comp>>()
  function handleClick() {
    console.log(temp.value?.foo.value)
    temp.value?.bar()
  }

  return () => <>
    <Comp a={'233'} b={'foo'} ref={temp} onMyClick={handleClick} v-slots={{
      content: () => <div></div>,
      default: () => <div></div>
    }} />
    <Comp a={'233'} b={'foo'} ref={temp} onMyClick={handleClick}>
      {
        {
          content: () => <div></div>,
          default: () => <div></div>
        }
      }
    </Comp>
  </>
})

