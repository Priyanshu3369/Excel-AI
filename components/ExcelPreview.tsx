type ExcelPreviewProps = {
  data: string[][];
};

export default function ExcelPreview({ data }: ExcelPreviewProps) {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No data to preview.</p>;
  }

  return (
    <div className="overflow-auto p-4">
      <table className="min-w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            {data[0].map((cell, i) => (
              <th key={i} className="px-4 py-2 border-b border-gray-300 font-semibold">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50">
              {row.map((cell, i) => (
                <td key={i} className="px-4 py-2 border-b border-gray-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
