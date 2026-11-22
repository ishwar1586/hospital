export default function Footer() {
  return (
    <footer className="hospital-footer" role="contentinfo">
      <span>Hospital Management System</span>
      <span>© {new Date().getFullYear()} All rights reserved</span>
    </footer>
  );
}
