import {BrowserRouter, Routes, Route} from "react-router-dom";
import MissionEditForm from "./MissionEditForm";
import PeoplePage from "./PeoplePage";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/people-of-interest" element={<PeoplePage />}/>
                    <Route path="/mission/:id" element={<MissionEditForm />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App