// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
import { BrowserRouter, Routes, Route } from "react-router";
import Page1 from "@pages/Page1.jsx"
import Page2 from "@pages/Page2.jsx"
import NotFound from "@pages/NotFound.jsx"

const Router = () =>{
// const router = createBrowserRouter([
  // {
  //   path: "/",
  //   Component:Page1,
  // },
  //  {
  //   path: "/page2",
  //   Component:Page2,
  // }
// ]);
  return (
   <BrowserRouter>
   <Routes>
    {/* <Route path ="/" element={<Page1 />} /> */}
    <Route path ="/page2" element={<Page2 />} />
    <Route path ="/" element={<NotFound />} />
  
   </Routes>
   </BrowserRouter>
  )
}
  export default Router