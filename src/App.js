import React from 'react'

import { Footer, Blog, Features, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <div className="App">
      <div clasName="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
