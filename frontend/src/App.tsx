import "./styles/component/homepage.css"
import Homepage from "./pages/Homepage.tsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
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
