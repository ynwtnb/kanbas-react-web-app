import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Cources";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <h1>Kanbas</h1>
            <table>
                <tr>
                    <td valign="top">
                    <KanbasNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Account" />} />
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="/Dashboard" element={<Dashboard />} />
                            <Route path="/Courses" element={<Navigate to="Courses" />} />
                            <Route path="/Courses/:cid/*" element={<Courses />} />
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}