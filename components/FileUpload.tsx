import { useRef } from "react";

type Props = {
  onFileSelect: (file: File) => void;
};

export default function FileUpload({ onFileSelect }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.name.match(/\.(xlsx|xls)$/)) {
      onFileSelect(file);
    } else {
      alert("Please upload a valid Excel file (.xlsx or .xls)");
    }
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
