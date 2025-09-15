import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <ThemeProvider>
        <Layout>
          <HomePage />
        </Layout>
      </ThemeProvider>
    </div>
  );
}
