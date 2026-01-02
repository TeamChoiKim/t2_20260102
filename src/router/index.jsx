//import { createBrowserRouter } from "react-router";  /* react-router는 주소를 관리해주는 라이브러리이다 */
//import { RouterProvider } from "react-router/dom";
// import Page1 from '@pages/Page1.jsx'   /* ..은 상대위치를 지정가능하지만 @으로 절대위치로 무시할 수도 있다 */
// import Page2 from '@pages/Page2.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import NotFound from "@pages/NotFound.jsx"

const Router = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       Component: Page1
//     },
//     {
//       path: "/page2",
//       Component: Page2
//     },
//   ]);
//   return <RouterProvider router={router} />
// }
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} /> */}

          <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}
export default Router