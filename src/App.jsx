import { Route, Routes } from "react-router-dom"
import LinkFunc from "./Link"
import HomeFunc from "./home"
import About from "./about"
import PageFound from "./PageNotFound"
import NestedFunc from "./NestedRouting"
import Nested1 from "./nested1"
import Nested2 from "./nested2"
import Nested3 from "./nested3"
import PrefixFunc from "./PrefixesRoute"
import DynamicFunc from "./DynamicRoute"
import DynamicFunc2 from "./Dynamic2"


function App() {

  return (
    <>
      {/* <LinkFunc/> */}
      <Routes>

        <Route element={<LinkFunc/>}>
          <Route path="/" element={<HomeFunc/>}/>
          <Route path="/about" element={<About/>}/>

          {/* Dynamic Routing */}
          <Route path="/dynamic" element={<DynamicFunc/>}/>
          <Route path="/dynamic/:id" element={<DynamicFunc2/>}/>


          {/* Optional Segment */}
          <Route path="/dynamic/optional?" element={<DynamicFunc/>}/>
          <Route path="/dynamic/:id/:name?" element={<DynamicFunc2/>}/>



        {/* Prefixes Routing */}
          <Route path="pak">
            <Route path="user">
              <Route path="/pak/user/login" element={<PrefixFunc/>}/>
            </Route>
          </Route>



        </Route>

        {/* <Route path="/" element={<HomeFunc/>}/>
        <Route path="/about" element={<About/>}/> */}

        {/* nested Routing */}
        <Route path="/*" element={<PageFound/>}/>

        {/* nested Routing */}
        <Route path="/nested" element={<NestedFunc/>}>
            <Route index element={<Nested1/>}/>
            <Route path="nested2" element={<Nested2/>}/>
            <Route path="nested3" element={<Nested3/>}/>
        </Route>


      </Routes>
    </>
  )
}

export default App
