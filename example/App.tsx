import { defineComponent } from "vue";
import RenderWith from "./demo/renderWith";
export default defineComponent(()=>{
  return ()=><div>
    <h4>renderWith</h4>
    <RenderWith></RenderWith>
  </div>
})