import { Navigate, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./hoc/AuthContext"
import Layout from "./components/Layout"
import Home from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import About from "./pages/AboutPage"
import Blog from "./pages/BlogPage"
import Post from "./pages/Post"
import RequireAuth from "./hoc/RequireAuth"
import CreatePostPage from "./pages/CreatePostPage"
import Login from "./pages/Login"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about/*" element={<About />}>
            <Route path="contacts" element={<p>Our contacts</p>} />
            <Route path="team" element={<p>Out team</p>} />
          </Route>
          <Route path="about-us" element={<Navigate to={"/about"} replace />} />
          <Route path="posts" element={<Blog />} />
          <Route path="posts/new" element={
            <RequireAuth>
              <CreatePostPage />
            </RequireAuth>
          } />
          <Route path="post/:id" element={<Post />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
