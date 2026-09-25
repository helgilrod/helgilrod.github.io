'use client'

import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { products } from '@/data/products'
import { Navbar } from './navbar'
import { ProductRender } from './product-render'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="hero-copy">
        <p className="eyebrow">A new ritual for skin</p>
        <h1>Skin,<br /><em>reimagined.</em></h1>
        <p className="hero-intro">Korean-inspired skincare designed<br className="desktop-only" /> for a new generation.</p>
        <a className="outline-button" href="#collection">Explore collection <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="hero-bottle" aria-hidden="true"><div className="hero-bottle-cap" /><div className="hero-bottle-body"><span>LUMÉA</span><small>ESSENCE / 01</small></div></div>
      <div className="scroll-cue"><span>Scroll to explore</span><ArrowDown aria-hidden="true" /></div>
    </section>
  )
}

function ProductProgress({ active }: { active: number }) {
  return <aside className="product-progress" aria-label="Collection progress">
    {products.map((product, index) => <a key={product.number} className={active === index ? 'active' : ''} href={`#product-${index + 1}`} aria-label={`Go to ${product.name}`}><span>{product.number}</span><i /></a>)}
  </aside>
}

function ProductSection({ index, active }: { index: number; active: boolean }) {
  const product = products[index]
  return <section className={`product-section product-${index + 1}`} id={`product-${index + 1}`}>
    <div className="product-inner">
      <div className="product-copy">
        <p className="product-number">{product.number} <span>/ 04</span></p>
        <p className="product-category">{product.category}</p>
        <h2>{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-meta"><span>{product.price}</span><span>{product.size}</span><span>{product.detail}</span></div>
        <a className="discover-button" href="#about">Discover <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <ProductRender product={product} active={active} />
      <p className="formula-note">Quietly effective<br />thoughtfully made</p>
    </div>
  </section>
}

function Footer() {
  return <footer id="about" className="site-footer">
    <div><p className="eyebrow">Luméa skincare / 2026</p><h2>Beauty,<br /><em>simplified.</em></h2></div>
    <div className="footer-bottom"><p>Thoughtful formulas.<br />Quiet design. Modern skincare.</p><div className="footer-links"><a href="#top">Instagram</a><a href="#top">Pinterest</a><a href="#top">Contact</a><a href="#top">Privacy</a><a href="#top">Terms</a></div><span>© LUMÉA</span></div>
  </footer>
}

export function LumeaPage() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.product-section'))
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index ?? 0)) }), { rootMargin: '-35% 0px -35% 0px' })
    sections.forEach((section, index) => { section.dataset.index = String(index); observer.observe(section) })
    return () => observer.disconnect()
  }, [])
  return <main className="lumea-page"><Navbar /><Hero /><div id="collection" className="collection-wrap"><ProductProgress active={active} />{products.map((product, index) => <ProductSection key={product.number} index={index} active={active === index} />)}</div><Footer /></main>
}
