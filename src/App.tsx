import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import DSLayout from "@/components/DSLayout";
import HomePage from "@/pages/HomePage";
import FundamentosPage from "@/pages/FundamentosPage";
import TokensPage from "@/pages/TokensPage";
import ComponentesPage from "@/pages/ComponentesPage";
import TemplatesPage from "@/pages/TemplatesPage";
import MarcaPage from "@/pages/MarcaPage";
import ConteudoPage from "@/pages/ConteudoPage";
import AcessibilidadePage from "@/pages/AcessibilidadePage";
import AutorPage from "@/pages/AutorPage";
import DashboardInstitucionalPage from "@/pages/DashboardInstitucionalPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          {/* Standalone template page (sem DSLayout) */}
          <Route path="/templates/dashboard-institucional" element={<DashboardInstitucionalPage />} />

          {/* Demais rotas dentro do DSLayout */}
          <Route
            path="*"
            element={
              <DSLayout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/fundamentos" element={<FundamentosPage />} />
                  <Route path="/tokens" element={<TokensPage />} />
                  <Route path="/componentes" element={<ComponentesPage />} />
                  <Route path="/templates" element={<TemplatesPage />} />
                  <Route path="/marca" element={<MarcaPage />} />
                  <Route path="/conteudo" element={<ConteudoPage />} />
                  <Route path="/acessibilidade" element={<AcessibilidadePage />} />
                  <Route path="/autor" element={<AutorPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </DSLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
