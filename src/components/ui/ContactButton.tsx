import { ArrowUpRight } from 'lucide-react';
import { whatsappUrl } from '../../config/site';
export function ContactButton({children='Quiero asistir',className='button gold'}:{children?:React.ReactNode;className?:string}) {
 return <a className={className} href={whatsappUrl || '#contacto'} {...(whatsappUrl?{target:'_blank',rel:'noopener noreferrer'}:{})}>{children}<ArrowUpRight size={18} aria-hidden="true"/></a>;
}
