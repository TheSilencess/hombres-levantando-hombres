import { useRef, useState } from 'react';
import { HeartHandshake, ArrowUpRight, Copy } from 'lucide-react';
import { site, whatsappUrl } from '../../config/site';
export function Prayer(){
 const [name,setName]=useState('');
 const [petition,setPetition]=useState('');
 const [status,setStatus]=useState('');
 const form=useRef<HTMLFormElement>(null);
 const message=()=>`${site.prayerMessage}${name.trim()?`\n\nMi nombre es ${name.trim()}.`:''}\n\n${petition.trim()}`;
 function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();
  if(!petition.trim()){setStatus('Escribí tu petición de oración para continuar.');return;}
  if(!whatsappUrl){setStatus('El contacto todavía no está habilitado. Podés copiar tu petición para compartirla.');return;}
  window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message())}`,'_blank','noopener,noreferrer');
  setStatus('Completá el envío en WhatsApp. Tu petición no se ha enviado desde esta página.');
 }
 async function copy(){
  if(!form.current?.reportValidity())return;
  if(!petition.trim()){setStatus('Escribí tu petición de oración para continuar.');return;}
  try{await navigator.clipboard.writeText(message());setStatus('Petición copiada. Podés pegarla en el chat que elijas.');}
  catch{setStatus('No se pudo copiar automáticamente. Seleccioná y copiá el texto de tu petición.');}
 }
 return <section id="oracion" className="section prayer"><div className="prayer-copy"><p className="eyebrow">CAMINAMOS CON VOS</p><HeartHandshake className="prayer-icon" size={36} strokeWidth={1.4}/><h2>¿Quieres que<br/><em>oremos por ti?</em></h2><p>Si estás atravesando un momento difícil o querés compartir un motivo de oración, podés preparar tu petición aquí y enviarla a los organizadores.</p><p className="prayer-note">Compartí solo los detalles que te sintás cómodo compartiendo. Tu nombre es opcional.</p></div><form ref={form} className="prayer-form" onSubmit={submit}><label htmlFor="prayer-name">Tu nombre <span>(opcional)</span></label><input id="prayer-name" name="name" autoComplete="given-name" maxLength={80} value={name} onChange={e=>setName(e.target.value)} placeholder="¿Cómo te llamás?"/><label htmlFor="prayer-petition">¿Por qué te gustaría que oremos?</label><textarea id="prayer-petition" name="petition" required maxLength={1500} rows={5} value={petition} onChange={e=>setPetition(e.target.value)} placeholder="Escribí tu motivo de oración…" aria-describedby="prayer-help"/><p id="prayer-help" className="prayer-help">Se abrirá WhatsApp para que revises y envíes el mensaje. La petición no se guarda en esta página.</p><div className="prayer-actions"><button className="button gold" type="submit" disabled={!whatsappUrl}>Enviar por WhatsApp <ArrowUpRight size={18}/></button><button className="button outline" type="button" onClick={copy}>Copiar petición <Copy size={16}/></button></div>{!whatsappUrl&&<p className="prayer-pending">El número de los organizadores todavía está pendiente. Por ahora podés copiar tu petición; no se envía automáticamente.</p>}<p className="prayer-status" role="status" aria-live="polite">{status}</p></form></section>;
}
