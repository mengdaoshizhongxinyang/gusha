import { splitProps } from "../../index";
import { defineComponent, ref } from "vue";

const Comp = defineComponent((props: { a: any, b: any }) => {
  const { a, b } = splitProps(props)
  return () => <>
    <span>{a.value}</span>
    <span>{b.value}</span>
  </>
})

export default defineComponent(() => {
  const a = ref(0)
  const b = ref(3)
  function handleClick() {
    a.value+=1
    b.value+=1
  }
  return () => <div>
    <button onClick={handleClick}>test</button>
    <Comp a={a.value} b={b.value}></Comp>
  </div>
})