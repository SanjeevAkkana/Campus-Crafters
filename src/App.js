import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Author, Blog, Blogs, Events, Services, Topic, Home } from './Pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog/content/:blogname" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio/:authorname" element={<Author />} />
        <Route path="topic/:topiname" element={<Topic />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App