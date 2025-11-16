export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 flex flex-col items-center text-center space-y-2 select-none">
      <div>© {new Date().getFullYear()} Your Name</div>
      <div className="flex space-x-6 text-sm">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
