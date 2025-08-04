import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b">
      <h1 className="text-2xl font-bold text-blue-600">ExcelAI</h1>
      <nav className="space-x-4">
        <Link href="#features" className="text-gray-600 hover:text-blue-600">Features</Link>
        <Link href="#demo" className="text-gray-600 hover:text-blue-600">Demo</Link>
        <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
      </nav>
    </header>
  );
}
