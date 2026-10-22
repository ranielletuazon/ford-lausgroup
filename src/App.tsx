import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NextGenFord from "./pages/NextGenFord";
import Contact from "./pages/Contact";
import DealerNews from "./pages/DealerNews";
import ServiceReminder from "./pages/ServiceReminder";
import ExtendedWarranty from "./pages/ExtendedWarranty";
import EmergencyRoadside from "./pages/EmergencyRoadSide";
import Finance from "./pages/Finance";
import LausAutoFinance from "./pages/LausAutoFinance";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="next-gen-ford"
                        element={<NextGenFord />}
                    ></Route>
                    <Route path="contact-us" element={<Contact />}></Route>
                    <Route path="dealer-news" element={<DealerNews />}></Route>
                    <Route
                        path="service-reminders-for-ford-car-owners"
                        element={<ServiceReminder />}
                    ></Route>
                    <Route
                        path="premium-extended-warranty"
                        element={<ExtendedWarranty />}
                    ></Route>
                    <Route
                        path="emergency-roadside-assistance"
                        element={<EmergencyRoadside />}
                    ></Route>
                    <Route path="finance" element={<Finance />}></Route>
                    <Route
                        path="laus-auto-finance"
                        element={<LausAutoFinance />}
                    ></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
