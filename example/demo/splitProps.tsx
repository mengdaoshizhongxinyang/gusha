import { splitProps } from "../../index";
import { defineComponent, ref } from "vue";
const Comp = defineComponent((props: { a: number, b?: number }) => {
  const {a,b}=splitProps(props)
  return () => <>
    <div>1:{b(23)}</div>
    <div>2:{a(233)}</div>
    <div>3:{a.value}</div>
  </>
})

export default defineComponent(() => {
  const a = ref(0)
  const b = ref()
  function handleClick() {
    a.value += 1
    b.value =233
  }
  return () => <div>
    <button onClick={handleClick}>test</button>
    <Comp a={a.value}></Comp>
  </div>
})