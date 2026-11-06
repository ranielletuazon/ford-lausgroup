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
import VirtualShowroom from "./pages/VirtualShowroom";
import NewVehicles from "./pages/NewVehicles";
import Fleet from "./pages/Fleet";

// Vehicles
import Ranger from "./pages/Vehicles/Ranger";
import RangerRaptor from "./pages/Vehicles/RangerRaptor";
import Territory from "./pages/Vehicles/Territory";
import Everest from "./pages/Vehicles/Everest";
import Explorer from "./pages/Vehicles/Explorer";
import Bronco from "./pages/Vehicles/Bronco";
import TerritoryHybrid from "./pages/Vehicles/TerritoryHybrid";
import MustangMachE from "./pages/Vehicles/MustangMachE";
import Mustang from "./pages/Vehicles/Mustang";

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
                    <Route
                        path="virtual-showroom"
                        element={<VirtualShowroom />}
                    ></Route>
                    <Route
                        path="new-vehicles"
                        element={<NewVehicles />}
                    ></Route>
                    <Route path="fleet" element={<Fleet />}></Route>

                    {/* Vehicles */}
                    <Route
                        path="/new-vehicles/ranger"
                        element={<Ranger />}
                    ></Route>
                    <Route
                        path="/new-vehicles/ranger-raptor"
                        element={<RangerRaptor />}
                    ></Route>
                    <Route
                        path="/new-vehicles/territory"
                        element={<Territory />}
                    ></Route>
                    <Route
                        path="/new-vehicles/everest"
                        element={<Everest />}
                    ></Route>
                    <Route
                        path="/new-vehicles/explorer"
                        element={<Explorer />}
                    ></Route>
                    <Route
                        path="/new-vehicles/bronco"
                        element={<Bronco />}
                    ></Route>
                    <Route
                        path="/new-vehicles/territory-hybrid"
                        element={<TerritoryHybrid />}
                    ></Route>
                    <Route
                        path="/new-vehicles/mustang-mach-e"
                        element={<MustangMachE />}
                    ></Route>
                    <Route
                        path="/new-vehicles/mustang"
                        element={<Mustang />}
                    ></Route>

                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
