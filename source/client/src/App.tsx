import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Understand from "./pages/Understand";
import Moves from "./pages/Moves";
import Plan from "./pages/Plan";
import Fuel from "./pages/Fuel";
import Safety from "./pages/Safety";
import Laundry from "./pages/Laundry";

const routerBase =
  typeof window !== "undefined" &&
  window.location.pathname.startsWith("/mother-fitness-website")
    ? "/mother-fitness-website"
    : "";

function Router() {
  return (
    <WouterRouter base={routerBase}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/understand"} component={Understand} />
        <Route path={"/moves"} component={Moves} />
        <Route path={"/plan"} component={Plan} />
        <Route path={"/fuel"} component={Fuel} />
        <Route path={"/safety"} component={Safety} />
        <Route path={"/laundry"} component={Laundry} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
