import "./styles/component/homepage.css"
import Homepage from "./pages/Homepage.tsx"
import RelationGraph from "./components/RelationGraph.tsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const defaultNodes = [
    {
        id: "main",
        type: "custom",
        position: { x: 320, y: 120 },
        data: { label: "the course" },
    },
    {
        id: "pre-0",
        type: "custom",
        position: { x: 20, y: 20 },
        data: { label: "calculus" },
    },
    {
        id: "pre-1",
        type: "custom",
        position: { x: 20, y: 120 },
        data: { label: "physics" },
    },
    {
        id: "pre-2",
        type: "custom",
        position: { x: 20, y: 220 },
        data: { label: "coding" },
    },
    {
        id: "nxt-0",
        type: "custom",
        position: { x: 620, y: 20 },
        data: { label: "Web Programming" },
    },
    {
        id: "nxt-1",
        type: "custom",
        position: { x: 620, y: 220 },
        data: { label: "CNS" },
    },
]

const defaultEdges = [
    { id: "p0", source: "pre-0", target: "main" },
    { id: "p1", source: "pre-1", target: "main" },
    { id: "p2", source: "pre-2", target: "main" },
    { id: "n0", source: "main", target: "nxt-0" },
    { id: "n1", source: "main", target: "nxt-1" },
]

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
                path="/graph"
                element={
                    <RelationGraph
                        initEdges={defaultEdges}
                        initNodes={defaultNodes}
                    />
                }
            />
        </Routes>
    )
}
function App() {
    return (
        <Router>
            <MyRoutes />
        </Router>
    )
}

export default App
