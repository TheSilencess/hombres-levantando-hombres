export const site = {
 name: 'Hombres Levantando Hombres', tagline: 'Restauración de hombres',
 description: 'Conoce Hombres Levantando Hombres, una comunidad cristiana dedicada a la fe, restauración y hermandad. Reuniones en San Cristóbal, Guatemala.',
 title: 'Hombres Levantando Hombres | Comunidad Cristiana en San Cristóbal, Guatemala',
 url: (import.meta.env.VITE_SITE_URL || 'https://hombres-levantando-hombres.eagerbun5.chatgpt.site').replace(/\/$/, ''),
 whatsapp: import.meta.env.VITE_WHATSAPP || '',
 whatsappMessage: '¡Hola! Dios les bendiga. Me gustaría recibir información sobre la próxima reunión de Hombres Levantando Hombres.',
 prayerMessage: '¡Hola! Dios les bendiga. Me gustaría pedir que oren por mí. Este es mi motivo de oración:',
 address: 'Nais de Guatemala, Plaza Manantiales, San Cristóbal, Guatemala.',
 frequency: 'Cada 15 días', hours: '7:00 AM a aproximadamente 9:30 AM',
 nextMeeting: '', // Texto confirmado, por ejemplo fecha y hora. Nunca se calcula automáticamente.
 mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Nais de Guatemala Plaza Manantiales San Cristóbal Guatemala'),
 mapsEmbedUrl: '', // Pegar aquí iframe src verificado; vacío conserva enlace de búsqueda.
 logo: '/images/branding/logo.png', socialImage: '/images/hero/hermandad.webp',
 socials: [] as {label: string; url: string}[],
 heroTitle: 'Ningún hombre tiene que caminar solo.',
 heroSubtitle: 'Un espacio donde los hombres encuentran fortaleza en Dios, restauran su propósito y aprenden a levantar a otros.',
 welcome: 'En Hombres Levantando Hombres creemos que Dios tiene un propósito para cada hombre. Somos una comunidad donde encontramos apoyo, compartimos experiencias, fortalecemos nuestra fe y caminamos juntos hacia la restauración espiritual.',
};
export const whatsappUrl = /^\d{8,15}$/.test(site.whatsapp) ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}` : null;
export const navigation = [{id:'inicio',label:'Inicio'},{id:'nosotros',label:'Nosotros'},{id:'mision',label:'Nuestra misión'},{id:'galeria',label:'Galería'},{id:'reuniones',label:'Reuniones'},{id:'oracion',label:'Oración'},{id:'contacto',label:'Contacto'}];
