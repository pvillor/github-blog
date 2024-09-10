import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/default";
import { Home } from "./pages/home";
import { PostPage } from "./pages/post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:issue" element={<PostPage />} />
      </Route>
    </Routes>
  )
}