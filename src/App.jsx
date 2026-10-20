import { Routes,Route} from 'react-router-dom';
import FrontPhotobooth from './components/selection';
import Capture from './components/capture';
function App() {
    return(
        <Routes>
            <Route path="/" element={<FrontPhotobooth />} />
            <Route path="/capture" element={<Capture/>} />
        </Routes>  
    );
}

export default App
