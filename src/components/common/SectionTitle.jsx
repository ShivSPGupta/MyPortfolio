export default function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`text-4xl font-bold text-center text-gray-900 ${className}`}
    >
      {children}
    </h2>
  );
}
