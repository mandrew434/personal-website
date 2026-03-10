import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <Link href="/" className="navbar-brand fs-3">
          ANDREW <span className="text-primary-custom">MALONE</span>
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav gap-4 align-items-center">
            <li className="nav-item"><Link href="/" className="nav-link">HOME</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link">ABOUT</Link></li>
            <li className="nav-item"><Link href="/projects" className="nav-link">PROJECTS</Link></li>
            <li className="nav-item"><Link href="/identity" className="nav-link">IDENTITY</Link></li>
            <li className="nav-item">
              <Link href="mailto:mandrew434@gmail.com" className="btn btn-primary-custom ms-lg-2">HIRE ME</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
