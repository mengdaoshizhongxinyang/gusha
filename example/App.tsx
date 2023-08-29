import { defineComponent } from "vue";
import RenderWith from "./demo/renderWith";
import SplitProps from "./demo/splitProps";
import Signal from "./demo/signal";
export default defineComponent(()=>{
  return ()=><div>
    <h4>renderWith</h4>
    <RenderWith></RenderWith>
    <h4>splitProps</h4>
    <SplitProps></SplitProps>
    <h4>Signal</h4>
    <Signal></Signal>
  </div>
})