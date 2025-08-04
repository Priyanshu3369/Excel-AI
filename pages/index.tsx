import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FileUpload from "@/components/FileUpload";
import ExcelPreview from "@/components/ExcelPreview";

export default function Home() {
  const [excelData, setExcelData] = useState<string[][]>([]);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FileUpload onDataParsed={setExcelData} />
      <ExcelPreview data={excelData} />
    </main>
  );
}
