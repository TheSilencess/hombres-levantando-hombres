import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation,site } from '../../config/site';
import { ContactButton } from '../ui/ContactButton';
export function Header(){
 const [open,setOpen]=useState(false),[active,setActive]=useState('inicio');
 useEffect(()=>{const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id);});},{rootMargin:'-15% 0px -65% 0px'});navigation.forEach(n=>{const el=document.getElementById(n.id);if(el)observer.observe(el);});return()=>observer.disconnect();},[]);
 useEffect(()=>{if(!open)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);document.getElementById('menu-toggle')?.focus();}};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close);},[open]);
 return <header className="header"><div className="header-inner"><a href="#inicio" className="brand" aria-label={site.name+' — Inicio'}><img src={site.logo} width="56" height="56" alt="Logo oficial"/><span>HOMBRES LEVANTANDO<br/><b>HOMBRES</b></span></a><nav className="desktop-nav" aria-label="Navegación principal">{navigation.map(n=><a key={n.id} href={'#'+n.id} aria-current={active===n.id?'location':undefined}>{n.label}</a>)}</nav><div className="header-cta"><ContactButton/></div><button id="menu-toggle" className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open?'Cerrar menú':'Abrir menú'}>{open?<X/>:<Menu/>}</button></div><nav id="mobile-nav" className="mobile-nav" aria-label="Navegación móvil" hidden={!open}>{navigation.map(n=><a key={n.id} href={'#'+n.id} onClick={()=>setOpen(false)}>{n.label}</a>)}<ContactButton/></nav></header>;
}
