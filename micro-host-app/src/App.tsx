import React, { Suspense, useState } from "react";

const MCList1 = React.lazy(() => import("micro-character-list-1/List"));
const MCList2 = React.lazy(() => import("micro-character-list-2/List"));

function App() {
  const [selectedList, setSelectedList] = useState<string | null>('MCList1');

  return (
    <div style={{ padding: 20 }}>
      <h1>Aplicación Principal (Host)</h1>
      <button onClick={() => setSelectedList("MCList1")}>
        Ver Rick and Morty
      </button>
      <button onClick={() => setSelectedList("MCList2")}>
        Ver Harry Potter
      </button>

      <Suspense fallback={<div>Cargando...</div>}>
        {selectedList === "MCList1" && <MCList1 />}
        {selectedList === "MCList2" && <MCList2 />}
      </Suspense>
    </div>
  );
}

export default App;
