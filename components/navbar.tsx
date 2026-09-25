import { Search, ShoppingBag } from 'lucide-react'

export function Navbar() {
  return (
    <header className="site-nav">
      <a className="wordmark" href="#top" aria-label="Luméa home">LUMÉA<span>®</span></a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#collection">Collection</a>
        <a href="#skincare">Skincare</a>
        <a href="#about">About</a>
      </nav>
      <div className="nav-actions">
        <button type="button" aria-label="Search"><Search /></button>
        <button type="button" aria-label="Shopping bag"><ShoppingBag /><b>0</b></button>
      </div>
    </header>
  )
}
