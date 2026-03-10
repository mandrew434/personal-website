import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand text-dark fs-3">
          ANDREW <span className="text-primary-custom">MALONE</span>
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav gap-4">
            <li className="nav-item"><Link href="/" className="nav-link fw-bold">HOME</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link fw-bold">ABOUT</Link></li>
            <li className="nav-item"><Link href="/projects" className="nav-link fw-bold">PROJECTS</Link></li>
            <li className="nav-item"><Link href="/identity" className="nav-link fw-bold">IDENTITY</Link></li>
            <li className="nav-item"><Link href="mailto:mandrew434@gmail.com" className="btn btn-primary-custom ms-lg-3">HIRE ME</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
