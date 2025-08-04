import { useRef } from "react";
import * as XLSX from "xlsx";

type Props = {
  onDataParsed: (data: string[][]) => void;
};

export default function FileUpload({ onDataParsed }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data, { type: "array" });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][];

    onDataParsed(sheetData);
  };

  return (
    <div className="py-10 text-center bg-muted">
      <h3 className="text-xl font-semibold mb-4">Upload Your Excel File</h3>
      <input
        type="file"
        ref={fileInputRef}
        accept=".xlsx,.xls"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="px-6 py-2 bg-primary text-white rounded hover:bg-blue-700 transition"
      >
        Choose File
      </button>
    </div>
  );
}
