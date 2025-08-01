import SmoothSidebar from "./motion-components/smooth-sidebar";
import Dashboard from "./simple-components/dashboard";

const App = () => {
  return (
    <main className="flex w-screen h-screen overflow-hidden">
      <SmoothSidebar />
      <Dashboard/>
    </main>
  );
};

export default App;
