import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "@/pages/Portfolio";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "hsl(263 38% 10%)",
            border: "1px solid hsl(271 70% 45% / 0.4)",
            color: "hsl(270 30% 96%)",
          },
        }}
      />
    </div>
  );
}

export default App;
