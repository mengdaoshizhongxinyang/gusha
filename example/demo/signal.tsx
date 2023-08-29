import { signal } from "../../index";
import { defineComponent } from "vue";
const Comp = defineComponent((props: { foo: { a: number } }) => {
  return () => <div>
    <div>{props.foo.a}</div>
    <button onClick={()=>{props.foo.a++}}>comp</button>
  </div>
})

export default defineComponent(() => {
  const [foo,setFoo] = signal({
    a: 1
  })
  return () => <div>
    <Comp foo={foo()} >
    </Comp>
    <button onClick={()=>setFoo({a:foo().a+1})}>set</button>
  </div>
})