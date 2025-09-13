import Image from "next/image";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}
