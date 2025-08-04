import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FileUpload from "@/components/FileUpload";

export default function Home() {
  const handleFileUpload = (file: File) => {
    console.log("File uploaded:", file.name);
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FileUpload onFileSelect={handleFileUpload} />
    </main>
  );
}
