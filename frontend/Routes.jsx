import React from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "pages/SellingPage"
import NotFound from "pages/NotFound"

import License from "pages/License"
import PrivacyPolicy from "pages/PrivacyPolicy"
import FAQ from "pages/FAQ"
import Error from "pages/Error"
import BlogDetails from "pages/BlogDetails"
import BlogPage from "pages/BlogPage"
import ContactPage from "pages/ContactPage"
import AgentProfile from "pages/AgentProfile"
import AgentList from "pages/AgentList"
import PropertyDetails from "pages/PropertyDetails"
import ListingMapView from "pages/ListingMapView"
import Listing from "pages/Listing"
import AboutUs from "pages/AboutUs"
import LandingPage from "pages/LandingPage"
import Selling from "pages/SellingPage"

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/selling" element={<Selling />} />
          <Route path="/listingmapview" element={<ListingMapView />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/agentlist" element={<AgentList />} />
          <Route path="/agentprofile" element={<AgentProfile />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/error" element={<Error />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/license" element={<License />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  )
}

export default ProjectRoutes
