import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { Suspense, useState } from "react";
const MCList1 = React.lazy(() => import("micro-character-list-1/List"));
const MCList2 = React.lazy(() => import("micro-character-list-2/List"));
function App() {
    const [selectedList, setSelectedList] = useState('MCList1');
    return (_jsxs("div", { style: { padding: 20 }, children: [_jsx("h1", { children: "Aplicaci\u00F3n Principal (Host)" }), _jsx("button", { onClick: () => setSelectedList("MCList1"), children: "Ver Rick and Morty" }), _jsx("button", { onClick: () => setSelectedList("MCList2"), children: "Ver Harry Potter" }), _jsxs(Suspense, { fallback: _jsx("div", { children: "Cargando..." }), children: [selectedList === "MCList1" && _jsx(MCList1, {}), selectedList === "MCList2" && _jsx(MCList2, {})] })] }));
}
export default App;
