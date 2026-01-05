import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { SecurityPage } from './pages/SecurityPage';
import HowItWorks from './components/HowItWorks';
import { Layout } from './components/Layout';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/how-it-works" element={<Layout><HowItWorks /></Layout>} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
