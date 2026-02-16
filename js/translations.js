// Translation system for MILA DESIGN website
const translations = {
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.interior': 'Interior Design',
        'nav.art': 'Art',
        'nav.about': 'About',
        'nav.contact': 'Contact',

        // Home page
        'home.interior': 'Interior Design',
        'home.art': 'Art',

        // Projects page
        'project.venetian': 'Venetian Island Miami',
        'project.riviera': 'Riviera Miami Beach',
        'project.boca': 'Boca Raton',
        'project.blue': 'Blue Diamond 3401',
        'project.william': 'William Island',
        'project.midtown': 'Midtown Miami',
        'project.mei': 'Mei Miami Beach',
        'project.medellin': 'Medellin Poblado',
        'project.subtitle': 'Project',
        'project.coming': 'Coming Soon',

        // About page
        'about.title': 'Where Sunlight Meets Sophistication',
        'about.intro': 'Born in the salt-air breeze of a tiny Miami Beach studio in 2011, our journey began with a simple belief: that a space should do more than just house a life—it should elevate it. What started as a local dream has blossomed into a global design house, weaving threads of elegance from the vibrant streets of Miami to the historic avenues of Paris, and the skylines of New York, Medellín, Houston, and San Francisco.',
        'about.philosophy.title': 'Our Philosophy: Art in Every Line',
        'about.philosophy.intro': 'We don\'t just fill rooms; we curate emotions. Our signature style is a dialogue between modern precision and organic warmth. We believe in the power of the "clean line"—the way it draws the eye and settles the mind—balanced with textures that invite you to stay.',
        'about.philosophy.sophisticated': 'Sophisticated & Modern',
        'about.philosophy.sophisticated.text': 'High-end aesthetics that never feel cold.',
        'about.philosophy.warmth': 'Warmth & Peace',
        'about.philosophy.warmth.text': 'Designing sanctuaries that offer a deep sense of belonging.',
        'about.philosophy.artistic': 'Artistic Soul',
        'about.philosophy.artistic.text': 'Every project is treated as a canvas where light, form, and function converge.',
        'about.craft.title': 'Extraordinary Craft',
        'about.craft.intro': 'Whether it is a sprawling residential estate or a high-concept commercial space, we bring a boutique sensibility to large-scale visions. Our dedicated team specializes in the architectural details that define a home:',
        'about.craft.kitchens': 'Custom Kitchens',
        'about.craft.kitchens.text': 'The heart of the home, reimagined with culinary grace.',
        'about.craft.closets': 'Bespoke Closets',
        'about.craft.closets.text': 'Personal galleries designed for the rituals of daily life.',
        'about.craft.transformation': 'Full-Scale Transformation',
        'about.craft.transformation.text': 'From the first sketch to the final touch of art.',
        'about.quote': '"We don\'t just build interiors; we create a feeling. A quiet breath of luxury in a loud world."',
        'about.signature': 'Miami, Florida',

        // Art page
        'art.piece1': 'Untitled',
        'art.piece2': 'Abstract Composition',
        'art.piece3': 'Modern Expression',
        'art.artist': 'Artist',
        'art.dimensions': 'Dimensions',
        'art.year': 'Year',
        'art.medium': 'Medium',

        // Project details - Medellin
        'medellin.title': 'Medellin Poblado',
        'medellin.subtitle': 'Coming Soon',
        'medellin.intro': 'This presentation showcases a comprehensive architectural floor plan and interior design concept by Jose Luis Varela of Mila Design. The project emphasizes a sophisticated, minimalist aesthetic characterized by clean lines and high-end finishes.',
        'medellin.layout.title': 'Architectural Layout and Flooring',
        'medellin.layout.text': 'The floor plan details a three-bedroom residence featuring a unified open-concept "Salón/Comedor" (Living/Dining) and kitchen area. The design specifies the use of light gray micro-cement (Micro cemento gris claro) for the flooring throughout, providing a seamless and modern foundation.',
        'medellin.design.title': 'Interior Design Elements',
        'medellin.design.text': 'The aesthetic is defined by several key minimalist features:',
        'medellin.design.lighting': 'Lighting and Ceilings:',
        'medellin.design.lighting.text': 'The design incorporates floating ceilings with integrated LED lighting (Techo flotante con LED) to create a soft, ambient glow in areas like the hallway.',
        'medellin.design.doors': 'Doors and Hardware:',
        'medellin.design.doors.text': 'To maintain the minimalist profile, the plan uses moldless doors (Puertas sin moldura) that sit flush with the walls.',
        'medellin.design.kitchen': 'Kitchen and Laundry:',
        'medellin.design.kitchen.text': 'The kitchen is equipped with premium integrated appliances, including Miele ovens and a sleek refrigerator hidden behind dark cabinetry. The laundry area (ZONA de ropa) utilizes space-saving pocket doors.',
        'medellin.design.dining': 'Dining and Living:',
        'medellin.design.dining.text': 'The living space features warm wood paneling, while the dining area is anchored by a striking large marble table paired with contemporary lighting fixtures.',

        // Midtown Miami
        'midtown.title': 'Midtown Miami',
        'midtown.location': 'Location: Midtown Miami',
        'midtown.text': 'Mila Design Team\'s latest interior captures a refined blend of calm luxury and practical sophistication. The space unfolds with warm, dark wood tones, streamlined built-ins, and a generous, sunlit panorama that turns every moment into a serene experience. Thoughtful shelving and shoe wardrobes meet at clean, architectural lines, while natural light pours in to accentuate the material palette and the meticulous craftsmanship. The result is a minimalist yet inviting atmosphere that speaks of precision, collaboration, and elevated living.',

        // Mei Miami Beach
        'mei.title': 'Mei Miami Beach',
        'mei.location': 'Location: Miami Beach',
        'mei.subtitle': 'Coastal Modern Sophistication: A Budget-Conscious Transformation by Mila Design',
        'mei.intro': 'In this stunning 2-bedroom renovation, Mila Design proves that a limited budget doesn\'t mean compromising on high-end, luxury aesthetics. By focusing on texture, fluidity, and strategic material choices, this apartment was completely reimagined from the floor up.',
        'mei.foundation.title': 'The Foundation: Seamless Microcement',
        'mei.foundation.text': 'The standout feature of this project is the extensive use of Microcement. To maximize the client\'s budget while achieving a sleek, industrial-chic look, we applied this versatile material across the entire floor plan and throughout the bathroom walls.',
        'mei.foundation.result': 'The Result: A seamless, organic flow that eliminates grout lines, expands the visual space, and provides a soft, velvety texture underfoot.',
        'mei.living.title': 'Living & Dining: West Elm Elegance',
        'mei.living.intro': 'We curated the living spaces using a blend of West Elm furniture, known for its mid-century modern soul and clean lines.',
        'mei.living.accents': 'Vibrant Accents: Deep navy velvet armchairs offer a rich contrast to the cool tones of the Microcement.',
        'mei.living.warmth': 'Metallic Warmth: Brass and gold accents—from the tiered halo chandelier to the sculptural dining table base—infuse the home with a touch of "glam" that catches the natural light pouring in from the floor-to-ceiling windows.',
        'mei.living.soul': 'Artistic Soul: Large-scale abstract paintings and a bold, expressive portrait act as the heartbeat of the home, pulling in oceanic blues and warm blushes.',
        'mei.bedrooms.title': 'The Private Retreats',
        'mei.bedrooms.text': 'The bedrooms continue the theme of restful minimalism. We replaced all doors and hardware with crisp white finishes and matte black levers for a contemporary edge. The furniture remains low-profile and textured, featuring plush linens and woven throws that invite relaxation.',
        'mei.bathroom.title': 'The Spa-Inspired Bathroom',
        'mei.bathroom.intro': 'In the bathroom, the Microcement takes on a more "zen" quality. We paired the hand-troweled walls with:',
        'mei.bathroom.hexagonal': 'Hexagonal Tiling: A dark, geometric accent wall provides depth and a modern rhythm.',
        'mei.bathroom.living': 'The Living Wall: A vibrant vertical greenery installation introduces an organic, biophilic touch, softening the stone-like textures of the shower.',
        'mei.bathroom.fixtures': 'Modern Fixtures: Sleek, matte black plumbing fixtures provide a sharp, clean finish against the mottled grey walls.',
        'mei.conclusion': 'Mila Design has successfully turned a standard 2-bedroom layout into a bespoke sanctuary where raw materials meet refined décor.',

        // Contact page
        'contact.title': 'Contact',
        'contact.subtitle': 'Let\'s create something beautiful together',
        'contact.email': 'Email *',
        'contact.phone': 'Phone Number',
        'contact.subject': 'Subject *',
        'contact.message': 'Message',
        'contact.send': 'Send Message',
        'contact.sending': 'Sending...',
        'contact.success': 'Thank you! Your message has been sent successfully. We will get back to you soon.',
        'contact.error': 'Oops! Something went wrong. Please try again or contact us directly.',
        'contact.followus': 'Follow Us',
    },
    es: {
        // Navbar
        'nav.home': 'Inicio',
        'nav.interior': 'Diseño de Interiores',
        'nav.art': 'Arte',
        'nav.about': 'Nosotros',
        'nav.contact': 'Contacto',

        // Home page
        'home.interior': 'Diseño de Interiores',
        'home.art': 'Arte',

        // Projects page
        'project.venetian': 'Venetian Island Miami',
        'project.riviera': 'Riviera Miami Beach',
        'project.boca': 'Boca Raton',
        'project.blue': 'Blue Diamond 3401',
        'project.william': 'William Island',
        'project.midtown': 'Midtown Miami',
        'project.mei': 'Mei Miami Beach',
        'project.medellin': 'Medellín Poblado',
        'project.subtitle': 'Proyecto',
        'project.coming': 'Próximamente',

        // About page
        'about.title': 'Donde la Luz del Sol Encuentra la Sofisticación',
        'about.intro': 'Nacidos en la brisa salada de un pequeño estudio en Miami Beach en 2011, nuestro viaje comenzó con una creencia simple: que un espacio debe hacer más que simplemente albergar una vida—debe elevarla. Lo que empezó como un sueño local ha florecido en una casa de diseño global, tejiendo hilos de elegancia desde las vibrantes calles de Miami hasta las avenidas históricas de París, y los horizontes de Nueva York, Medellín, Houston y San Francisco.',
        'about.philosophy.title': 'Nuestra Filosofía: Arte en Cada Línea',
        'about.philosophy.intro': 'No solo llenamos espacios; creamos emociones. Nuestro estilo característico es un diálogo entre la precisión moderna y la calidez orgánica. Creemos en el poder de la "línea limpia"—la forma en que atrae la mirada y calma la mente—equilibrada con texturas que invitan a quedarse.',
        'about.philosophy.sophisticated': 'Sofisticado y Moderno',
        'about.philosophy.sophisticated.text': 'Estética de alta gama que nunca se siente fría.',
        'about.philosophy.warmth': 'Calidez y Paz',
        'about.philosophy.warmth.text': 'Diseñando santuarios que ofrecen un profundo sentido de pertenencia.',
        'about.philosophy.artistic': 'Alma Artística',
        'about.philosophy.artistic.text': 'Cada proyecto es tratado como un lienzo donde la luz, la forma y la función convergen.',
        'about.craft.title': 'Artesanía Extraordinaria',
        'about.craft.intro': 'Ya sea una residencia amplia o un espacio comercial de alto concepto, aportamos una sensibilidad boutique a visiones a gran escala. Nuestro equipo dedicado se especializa en los detalles arquitectónicos que definen un hogar:',
        'about.craft.kitchens': 'Cocinas Personalizadas',
        'about.craft.kitchens.text': 'El corazón del hogar, reimaginado con gracia culinaria.',
        'about.craft.closets': 'Closets a la Medida',
        'about.craft.closets.text': 'Galerías personales diseñadas para los rituales de la vida diaria.',
        'about.craft.transformation': 'Transformación Total',
        'about.craft.transformation.text': 'Desde el primer boceto hasta el toque final de arte.',
        'about.quote': '"No solo construimos interiores; creamos una sensación. Un respiro tranquilo de lujo en un mundo ruidoso."',
        'about.signature': 'Miami, Florida',

        // Art page
        'art.piece1': 'Sin título',
        'art.piece2': 'Composición Abstracta',
        'art.piece3': 'Expresión Moderna',
        'art.artist': 'Artista',
        'art.dimensions': 'Dimensiones',
        'art.year': 'Año',
        'art.medium': 'Medio',

        // Project details - Medellin
        'medellin.title': 'Medellín Poblado',
        'medellin.subtitle': 'Próximamente',
        'medellin.intro': 'Esta presentación muestra un plano arquitectónico integral y un concepto de diseño interior de José Luis Varela de Mila Design. El proyecto destaca una estética minimalista sofisticada caracterizada por líneas limpias y acabados de primera.',
        'medellin.layout.title': 'Diseño Arquitectónico y Pisos',
        'medellin.layout.text': 'El plano detalla una residencia de tres recámaras con un concepto abierto unificado de "Sala/Comedor" y área de cocina. El diseño especifica el uso de microcemento gris claro para el piso en todo el espacio, proporcionando una base moderna y uniforme.',
        'medellin.design.title': 'Elementos de Diseño Interior',
        'medellin.design.text': 'La estética se define por varias características minimalistas clave:',
        'medellin.design.lighting': 'Iluminación y Plafones:',
        'medellin.design.lighting.text': 'El diseño incorpora plafones flotantes con iluminación LED integrada para crear un ambiente suave en áreas como el pasillo.',
        'medellin.design.doors': 'Puertas y Herrajes:',
        'medellin.design.doors.text': 'Para mantener el perfil minimalista, el plan utiliza puertas sin moldura que quedan a ras con las paredes.',
        'medellin.design.kitchen': 'Cocina y Lavandería:',
        'medellin.design.kitchen.text': 'La cocina está equipada con electrodomésticos integrados de lujo, incluyendo hornos Miele y un elegante refrigerador oculto detrás de gabinetes oscuros. El área de lavado utiliza puertas corredizas para ahorrar espacio.',
        'medellin.design.dining': 'Comedor y Sala:',
        'medellin.design.dining.text': 'El espacio de la sala cuenta con paneles de madera cálida, mientras que el área del comedor está anclada por una impresionante mesa grande de mármol combinada con lámparas contemporáneas.',

        // Midtown Miami
        'midtown.title': 'Midtown Miami',
        'midtown.location': 'Ubicación: Midtown Miami',
        'midtown.text': 'El más reciente interior del equipo de Mila Design captura una mezcla refinada de lujo tranquilo y sofisticación práctica. El espacio se despliega con tonos de madera oscura cálida, muebles empotrados estilizados y una amplia vista bañada por el sol que convierte cada momento en una experiencia serena. Repisas cuidadosamente diseñadas y closets para zapatos se encuentran en líneas arquitectónicas limpias, mientras la luz natural resalta la paleta de materiales y la meticulosa artesanía. El resultado es una atmósfera minimalista pero acogedora que habla de precisión, colaboración y vida de lujo.',

        // Mei Miami Beach
        'mei.title': 'Mei Miami Beach',
        'mei.location': 'Ubicación: Miami Beach',
        'mei.subtitle': 'Sofisticación Moderna Costera: Una Transformación Consciente del Presupuesto por Mila Design',
        'mei.intro': 'En esta impresionante renovación de 2 habitaciones, Mila Design demuestra que un presupuesto limitado no significa comprometer la estética de lujo de alta gama. Al enfocarse en textura, fluidez y elecciones estratégicas de materiales, este apartamento fue completamente reimaginado desde el piso.',
        'mei.foundation.title': 'La Base: Microcemento Sin Costuras',
        'mei.foundation.text': 'La característica destacada de este proyecto es el uso extensivo de Microcemento. Para maximizar el presupuesto del cliente mientras se logra un aspecto industrial elegante, aplicamos este material versátil en todo el plano del piso y en las paredes del baño.',
        'mei.foundation.result': 'El Resultado: Un flujo orgánico sin costuras que elimina líneas de lechada, expande el espacio visual y proporciona una textura suave y aterciopelada bajo los pies.',
        'mei.living.title': 'Sala y Comedor: Elegancia West Elm',
        'mei.living.intro': 'Curamos los espacios de estar usando una mezcla de muebles West Elm, conocidos por su alma moderna de mediados de siglo y líneas limpias.',
        'mei.living.accents': 'Acentos Vibrantes: Sillones de terciopelo azul marino profundo ofrecen un rico contraste con los tonos fríos del Microcemento.',
        'mei.living.warmth': 'Calidez Metálica: Acentos de latón y oro—desde el candelabro de halo escalonado hasta la base escultural de la mesa del comedor—infunden el hogar con un toque de "glamour" que captura la luz natural que entra por las ventanas de piso a techo.',
        'mei.living.soul': 'Alma Artística: Pinturas abstractas a gran escala y un retrato audaz y expresivo actúan como el corazón del hogar, incorporando azules oceánicos y rubores cálidos.',
        'mei.bedrooms.title': 'Los Retiros Privados',
        'mei.bedrooms.text': 'Las habitaciones continúan el tema de minimalismo relajante. Reemplazamos todas las puertas y herrajes con acabados blancos nítidos y palancas negras mate para un toque contemporáneo. Los muebles permanecen de perfil bajo y texturizados, con ropa de cama suave y mantas tejidas que invitan a la relajación.',
        'mei.bathroom.title': 'El Baño Inspirado en Spa',
        'mei.bathroom.intro': 'En el baño, el Microcemento adquiere una cualidad más "zen". Emparejamos las paredes aplicadas a mano con:',
        'mei.bathroom.hexagonal': 'Baldosas Hexagonales: Una pared de acento geométrica oscura proporciona profundidad y un ritmo moderno.',
        'mei.bathroom.living': 'La Pared Viva: Una vibrante instalación de vegetación vertical introduce un toque orgánico y biofílico, suavizando las texturas similares a la piedra de la ducha.',
        'mei.bathroom.fixtures': 'Accesorios Modernos: Accesorios de plomería elegantes en negro mate proporcionan un acabado limpio y nítido contra las paredes grises jaspeadas.',
        'mei.conclusion': 'Mila Design ha convertido con éxito un diseño estándar de 2 habitaciones en un santuario a medida donde los materiales crudos se encuentran con la decoración refinada.',

        // Contact page
        'contact.title': 'Contacto',
        'contact.subtitle': 'Vamos a crear algo hermoso juntos',
        'contact.email': 'Email *',
        'contact.phone': 'Teléfono',
        'contact.subject': 'Asunto *',
        'contact.message': 'Mensaje',
        'contact.send': 'Enviar Mensaje',
        'contact.sending': 'Enviando...',
        'contact.success': '¡Gracias! Tu mensaje ha sido enviado exitosamente. Te contactaremos pronto.',
        'contact.error': '¡Ups! Algo salió mal. Por favor intenta de nuevo o contáctanos directamente.',
        'contact.followus': 'Síguenos',
    }
};

// Get current language from localStorage or default to English
let currentLang = localStorage.getItem('language') || 'en';

// Function to translate the page
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Translate all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update language selector active state
    document.querySelectorAll('.lang-option').forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    translatePage(currentLang);

    // Add click handlers to language selector
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            translatePage(lang);
        });
    });
});
