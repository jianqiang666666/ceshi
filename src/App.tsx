import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import VisualMap from './pages/VisualMap'
import KnowledgeGraph from './pages/KnowledgeGraph'
import ProfessionalCourses from './pages/ProfessionalCourses'
import LearningExploration from './pages/LearningExploration'
import IndustryPanorama from './pages/IndustryPanorama'
import TeachingClassroom from './pages/TeachingClassroom'
import ProfessionalOverview from './pages/ProfessionalOverview'
import UserProfile from './pages/UserProfile'
import UserSettings from './pages/UserSettings'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visual-map" element={<VisualMap />} />
        <Route path="/knowledge-graph" element={<KnowledgeGraph />} />
        <Route path="/professional-courses" element={<ProfessionalCourses />} />
        <Route path="/learning-exploration" element={<LearningExploration />} />
        <Route path="/industry-panorama" element={<IndustryPanorama />} />
        <Route path="/teaching-classroom" element={<TeachingClassroom />} />
        <Route path="/professional-overview" element={<ProfessionalOverview />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/settings" element={<UserSettings />} />
      </Routes>
    </Layout>
  )
}

export default App

