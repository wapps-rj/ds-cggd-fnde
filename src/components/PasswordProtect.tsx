import { useState, useEffect } from "react";
import logoReduzida from "@/assets/icone-fnde-colorido.svg";

interface PasswordProtectProps {
  children: React.ReactNode;
}

const PasswordProtect = ({ children }: PasswordProtectProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // A senha pode ser alterada aqui
  const ACCESS_PASSWORD = "fnde-protegido";

  useEffect(() => {
    const authStatus = localStorage.getItem("app_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ACCESS_PASSWORD) {
      localStorage.setItem("app_authenticated", "true");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans text-white" style={{ background: 'linear-gradient(135deg, #04192A 0%, #0D3857 50%, #1E5F8C 100%)' }}>
      <div className="max-w-md w-full space-y-8 bg-white/10 p-8 rounded-xl backdrop-blur-md border border-white/20 shadow-2xl">
        <div className="text-center">
          <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-lg">
            <img 
              src={logoReduzida} 
              alt="FNDE Logo" 
              className="h-12 w-auto"
            />
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Acesso Restrito
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Este projeto é protegido. Por favor, insira a senha de acesso.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="password"
                required
                className={`appearance-none rounded-lg relative block w-full px-4 py-3 border ${
                  error ? "border-red-500 bg-red-50" : "border-white/20 bg-white/5"
                } placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-[#FBDFA2] focus:z-10 sm:text-sm transition-all`}
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-xs text-center animate-pulse">
              Senha incorreta. Tente novamente.
            </p>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#F5A623] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F5A623] transition-all shadow-lg"
            >
              Entrar no Projeto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtect;
