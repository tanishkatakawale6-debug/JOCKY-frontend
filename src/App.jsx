import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Hosts from "./pages/Hosts"
import Jobs from "./pages/Jobs"
import Evidence from "./pages/Evidence"
import Timeline from "./pages/Timeline"
import Findings from "./pages/Findings"
import Compiler from "./pages/Compiler"
import Pipelines from "./pages/Pipelines"
import Artifacts from "./pages/Artifacts"
import Research from "./pages/Research"

function PagePlaceholder({ title }) {
  return (
    <main
      className="min-w-0 flex-1 overflow-auto"
      style={{ background: "var(--page)" }}
    >
      <div className="px-8 py-6">
        <h1
          className="text-[20px] font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h1>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div
        className="flex h-screen"
        style={{ background: "var(--page)" }}
      >
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/hosts"
            element={<Hosts />}
          />

          <Route path="/jobs" element={<Jobs />} />

          <Route path="/evidence" element={<Evidence />} />

          <Route path="/timeline" element={<Timeline />} />

          <Route path="/findings" element={<Findings />} />

          <Route path="/compiler" element={<Compiler />} />

          <Route path="/pipelines" element={<Pipelines />} />

          <Route path="/artifacts" element={<Artifacts />} />

          <Route path="/research" element={<Research />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App