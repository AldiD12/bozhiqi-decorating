export interface Location {
  slug: string;
  name: string;
  postcode: string;
  coordinates: { lat: number; lng: number };
  zone: 'north' | 'south';
  nearby: string[];
  borough: string;
  landmarks: string[];
  housingTypes: string[];
  localChallenge: string;
  // Rich unique content fields
  intro: string;
  projectFocus: string;
  paintNote: string;
  heroImage: string;
  heroImageAlt: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const locations: Location[] = [
  {
    slug: 'southgate',
    name: 'Southgate',
    postcode: 'N14',
    coordinates: { lat: 51.6322, lng: -0.1275 },
    zone: 'north',
    nearby: ['finchley', 'enfield'],
    borough: 'Enfield',
    landmarks: ['Southgate Underground Station', 'Grovelands Park', 'Broomfield Park'],
    housingTypes: ['1930s semis', 'Art Deco properties', 'Victorian terraces', 'Edwardian family homes'],
    localChallenge: 'Many Southgate properties feature original Art Deco plasterwork, ceiling roses, and period cornicing that require specialist preparation and careful paint application to preserve their character rather than fill them in.',
    intro: 'Southgate is one of North London\'s most architecturally distinctive suburbs, shaped by the sweeping Art Deco curves of its Grade II-listed Piccadilly line station and the broad, tree-lined avenues of 1930s homes surrounding it. Jetmir Bozhiqi has worked extensively across N14 for over a decade and understands exactly what these properties demand — both in terms of surface preparation and in choosing the right finishes for their period character.',
    projectFocus: 'Interior redecorations of 1930s family homes — including period-style colour schemes, restoring original plaster cornicing, and feature walls — make up the majority of our Southgate work. Exterior repaints of rendered semis and brick-and-render detached houses are also common, particularly as properties come to market.',
    paintNote: 'For Southgate\'s 1930s rendered exteriors, we typically specify Dulux Weathershield or Sandtex Smooth Masonry — both breathable enough to let older walls dry out while providing lasting weather protection. For interiors with original plasterwork, we use a fine surface filler and mist coat primer before topcoats to ensure adhesion without obscuring detail.',
    heroImage: '/images/exterior-painting-detached-house-north-london.webp',
    heroImageAlt: 'Full exterior repaint of a large detached house in Southgate, North London',
    faqs: [
      {
        question: 'Can you work on properties with original Art Deco cornicing and ceiling roses?',
        answer: 'Yes — this is a speciality of ours in Southgate. We use fine surface filler to repair any chips or cracks without losing moulding detail, then apply a mist coat primer before painting. The key is working with a small brush into the recesses rather than rolling over them. We never fill in period details — we restore them.',
      },
      {
        question: 'What paint colours work well in 1930s Southgate properties?',
        answer: 'The generous natural light in most Southgate 1930s semis suits both warm neutral tones (Farrow & Ball Elephant\'s Breath, Little Greene Portland Stone) and bolder period-appropriate colours. We are happy to advise during our quotation visit — bring any swatches or inspiration images and we will give you an honest opinion on how they will work in your specific rooms.',
      },
      {
        question: 'How long does a full interior repaint of a typical Southgate semi take?',
        answer: 'A three-bedroom semi in N14 typically takes 5–7 working days for a full interior redecoration including ceilings, walls, and all woodwork. We work methodically room by room so you can still use the house during the project. We give you a day-by-day schedule before we start so you know exactly what to expect.',
      },
    ],
  },
  {
    slug: 'finchley',
    name: 'Finchley',
    postcode: 'N3, N12',
    coordinates: { lat: 51.5993, lng: -0.1869 },
    zone: 'north',
    nearby: ['southgate', 'enfield'],
    borough: 'Barnet',
    landmarks: ['Victoria Park', 'Avenue House', 'Finchley Central Station'],
    housingTypes: ['Victorian terraces', 'Edwardian semis', '1930s family homes', 'modern apartments'],
    localChallenge: 'Finchley homes often have high ceilings, original cornicing, and deep coving that need careful preparation — cracked plaster must be properly cut out and repaired, not just filled over, or the cracks reappear within months.',
    intro: 'Finchley stretches from the busy High Road in North Finchley through the quieter avenues of Church End down to the Victorian streets around Finchley Central. The housing stock is outstanding — genuine Victorian terraces, solid Edwardian family semis, and substantial 1930s houses — and the room proportions that come with this era of building demand a decorator with the experience to do them justice.',
    projectFocus: 'Full interior redecorations of Victorian and Edwardian properties — particularly work involving high ceilings, original cornicing, staircase painting, and period woodwork — are the most common projects we complete in Finchley. We also carry out exterior repaints of the area\'s stock brick and rendered Victorian terraces.',
    paintNote: 'High ceilings in Finchley\'s Victorian and Edwardian properties respond well to a pure brilliant white ceiling paint with a flat finish — it maximises the sense of height. For walls, a chalky matt finish (Farrow & Ball, Little Greene, or Dulux Heritage) gives the right period feel. We always apply a stabilising primer to old Artex or textured ceilings before any topcoat.',
    heroImage: '/images/exterior-painting-victorian-terraced-house-london.webp',
    heroImageAlt: 'Victorian terraced house with freshly painted white render and stonework in Finchley',
    faqs: [
      {
        question: 'How do you safely paint high ceilings in Victorian Finchley properties?',
        answer: 'We use combination ladders, hop-ups, and where necessary, a lightweight scaffold tower for rooms with ceilings above 3.5m. We never compromise on access equipment — working safely at height protects both our decorators and your property. All equipment is included in our quotation price.',
      },
      {
        question: 'Can you repaint original cornicing without losing the detail?',
        answer: 'Yes — this is something we do regularly in Finchley\'s Victorian and Edwardian properties. We clean the cornicing, repair any cracks or missing sections with flexible filler or cornice adhesive, then use a small cutting-in brush to paint into the detail carefully. We never use a roller on mouldings. The goal is always to restore rather than obscure.',
      },
      {
        question: 'Do you cover North Finchley, Church End, and Finchley Central?',
        answer: 'Yes, we cover the whole of N3 and N12 — from North Finchley and Woodside Park through Church End and East Finchley to Finchley Central and West Finchley. We also serve the surrounding areas of Barnet, Mill Hill, and Golders Green.',
      },
    ],
  },
  {
    slug: 'enfield',
    name: 'Enfield',
    postcode: 'EN1, EN2, EN3',
    coordinates: { lat: 51.6538, lng: -0.0799 },
    zone: 'north',
    nearby: ['southgate', 'finchley'],
    borough: 'Enfield',
    landmarks: ['Enfield Town Park', 'Palace Gardens Shopping Centre', 'Forty Hall'],
    housingTypes: ['Victorian terraces', 'post-war semis', 'new-build estates', 'period properties'],
    localChallenge: 'Enfield properties frequently show damp-related paint failure — bubbling, peeling, and tide marks — due to the area\'s proximity to the Lee Valley. Treating the source of damp and using breathable, moisture-resistant primers is essential before any decorating begins.',
    intro: 'Enfield has one of the most varied housing stocks in North London — from the grand Victorian streets around Enfield Town and the conservation areas of Chase Side, to post-war estates in Enfield Lock and new developments along the A10. What many of these properties share is a history of damp that has been papered over rather than properly resolved. Jetmir assesses every surface methodically before quoting, so there are no surprises mid-project.',
    projectFocus: 'Exterior repaints and damp-remediation decorating projects are the most common requests from Enfield homeowners. We also carry out full interior refurbishments following building works or damp treatment — rooms that need completely stripping back, replastering, priming, and redecorating from scratch.',
    paintNote: 'For Enfield properties with a history of damp, we specify breathable masonry paints on exteriors (Keim Mineral Paints or Dulux Weathershield Smooth) and moisture-resistant primers on interior walls before any emulsion. On new plaster following damp treatment, we always apply a mist coat (watered-down emulsion) rather than neat paint, to allow the plaster to breathe and fully cure.',
    heroImage: '/images/exterior-painting-semi-detached-red-white-render.webp',
    heroImageAlt: 'Semi-detached house repainted in red and white masonry paint in Enfield',
    faqs: [
      {
        question: 'How do you treat damp walls before painting in Enfield properties?',
        answer: 'We start by identifying the source — rising damp, penetrating damp, or condensation — and advising on remediation before we touch a paintbrush. Once the source is treated, we allow the wall to dry fully, then apply a stain-blocking primer (Zinsser BIN or Zinsser Bulls Eye 1-2-3) before finishing coats. Painting over damp without addressing the source just delays the problem.',
      },
      {
        question: 'What exterior paint works best for Enfield\'s older brick and rendered properties?',
        answer: 'For rendered surfaces we use Dulux Weathershield Smooth or Sandtex Fine Textured — both are flexible, breathable, and rated for 15 years. For bare brick we recommend leaving it unpainted where possible and using a clear water repellent instead. If the brick must be painted (to hide previous paint), we use a masonry paint that is vapour-permeable to avoid trapping moisture.',
      },
      {
        question: 'Do you cover Enfield Town, Palmer\'s Green, and Winchmore Hill?',
        answer: 'Yes — we cover the whole of the EN1, EN2, and EN3 postcode areas, including Enfield Town, Chase Side, Grange Park, Winchmore Hill, Palmer\'s Green, Southbury, and Enfield Highway. We are based nearby in Southgate and typically respond to quote requests within 24 hours.',
      },
    ],
  },
  {
    slug: 'wimbledon',
    name: 'Wimbledon',
    postcode: 'SW19, SW20',
    coordinates: { lat: 51.4214, lng: -0.2064 },
    zone: 'south',
    nearby: ['mitcham', 'kingston'],
    borough: 'Merton',
    landmarks: ['Wimbledon Common', 'Wimbledon Village', 'Wimbledon Theatre'],
    housingTypes: ['Victorian villas', 'Edwardian family homes', 'period conversions', 'modern townhouses'],
    localChallenge: 'Wimbledon Village properties command some of the highest values in South-West London, and clients expect a genuinely premium standard — not just in finish quality, but in paint brand knowledge, colour consultation, and the care taken to protect their interiors during work.',
    intro: 'Wimbledon Village sits at the top of the hill above the Common — one of the most sought-after pockets of South-West London, where Victorian villas and Edwardian family homes are decorated to a standard that matches their market value. Working here demands more than a competent finish. It demands real paint knowledge, an eye for colour, and the discretion to work carefully in occupied, beautifully furnished homes.',
    projectFocus: 'Premium interior decorating projects — whole-house redecorations using Farrow & Ball, Little Greene, or Mylands paints, feature walls, specialist finishes, and detailed woodwork — are the projects we most frequently complete in Wimbledon. Many clients also commission exterior repaints of their Victorian villas ahead of selling.',
    paintNote: 'Wimbledon homeowners typically choose from the premium British paint ranges: Farrow & Ball (estate emulsion for walls, estate eggshell for woodwork), Little Greene (both water and oil-based ranges), and Mylands (excellent coverage, exceptional depth of colour). We are experienced with all three and can advise on sheen levels, coverage rates, and which products suit which substrates in your specific property.',
    heroImage: '/images/interior-painting-panelled-reception-room-herringbone.webp',
    heroImageAlt: 'Freshly painted reception room with wall panelling and herringbone floor in Wimbledon',
    faqs: [
      {
        question: 'Do you work with Farrow & Ball and Little Greene paints in Wimbledon?',
        answer: 'Yes — we use Farrow & Ball, Little Greene, Mylands, and Dulux Heritage regularly, and we are very familiar with the characteristics of each. Premium paints have different application properties to trade emulsions — they often need two coats minimum and the right substrate preparation to achieve the depth of colour shown on the tin. We know how to get the best out of them.',
      },
      {
        question: 'Can you advise on a whole-house colour scheme?',
        answer: 'We offer practical colour advice during our quotation visit — we will look at your natural light, your furniture and flooring, and discuss what you are trying to achieve. We are decorators rather than interior designers, but after 15 years of applying premium paints in hundreds of rooms, we have a well-developed eye for what works. We are always happy to be honest if we think a colour will not look as expected in a particular room.',
      },
      {
        question: 'How do you protect expensive furniture and flooring during work in Wimbledon?',
        answer: 'We take care of your home as if it were our own. All furniture is moved to the centre of the room and covered with dust sheets. Floors are covered with canvas dust sheets (not thin plastic, which can slip). We use blue masking tape on all skirtings before spraying or cutting in, and we clean up at the end of every working day. We do not leave a property in a state we would not be comfortable returning to ourselves.',
      },
    ],
  },
  {
    slug: 'mitcham',
    name: 'Mitcham',
    postcode: 'CR4',
    coordinates: { lat: 51.4009, lng: -0.1713 },
    zone: 'south',
    nearby: ['streatham', 'wallington'],
    borough: 'Merton',
    landmarks: ['Mitcham Common', 'Mitcham Cricket Green'],
    housingTypes: ['Victorian terraces', 'post-war estates', 'ex-council properties', '1930s semis'],
    localChallenge: 'Many Mitcham properties have layers of old wallpaper, textured Artex ceilings, and surfaces that have not been properly prepared in decades. Getting back to a clean substrate — which often means steaming wallpaper, applying Artex remover, and skimming walls — is the foundation of any good redecoration here.',
    intro: 'Mitcham is a neighbourhood where many homeowners are investing significantly in their properties for the first time in years — stripping out dated interiors, removing old wallpaper and Artex, and redecorating from scratch to modern standards. It is exactly the kind of work Jetmir does well: methodical, thorough preparation followed by a clean, fresh finish that transforms how a property feels.',
    projectFocus: 'Full interior strip-and-redecorate projects are the most common scope of work in Mitcham — steaming off old wallpaper, removing Artex ceilings (where safe to do so), replastering damaged surfaces, and applying fresh paint throughout. We also carry out exterior repaints of the area\'s Victorian and 1930s stock.',
    paintNote: 'On Mitcham properties coming out of an Artex removal or replastering, we always apply a mist coat of watered-down emulsion as the first coat on new plaster — this seals the surface and allows the plaster to breathe while it fully cures. Applying neat emulsion to new plaster causes it to peel. Once the mist coat has dried, we apply two full coats of trade emulsion in your chosen colour.',
    heroImage: '/images/exterior-painting-semi-detached-conservatory-london.webp',
    heroImageAlt: 'Semi-detached house with conservatory being repainted in South London',
    faqs: [
      {
        question: 'Can you remove Artex ceilings before painting in Mitcham properties?',
        answer: 'It depends on the age of the property and when the Artex was applied. Artex applied before 1984 may contain chrysotile asbestos fibres and must be tested before removal. We can arrange an asbestos test (typically £50–£100) before quoting for removal. Post-1984 Artex is safe to remove using Artex remover or by overboarding. We will advise on the best approach once we have assessed the ceiling.',
      },
      {
        question: 'What is involved in stripping wallpaper before repainting?',
        answer: 'We use a steam stripper for the bulk of the work, followed by a wide scraper to lift the paper cleanly. Once stripped, we wash the walls down with sugar soap, allow to dry, and then assess the plaster. Hairline cracks are filled with flexible filler; larger damage is cut back and repaired with bonding plaster. Only then do we prime and paint. Rushing this stage is the main reason paint fails within 12 months.',
      },
      {
        question: 'Do you cover Colliers Wood and Tooting as well as Mitcham?',
        answer: 'Yes — we serve the whole of CR4 and the surrounding areas including Colliers Wood, Tooting, Morden, and Pollards Hill. We also regularly work in the neighbouring boroughs of Sutton and Lambeth, so if you are just outside Mitcham, get in touch and we will confirm coverage.',
      },
    ],
  },
  {
    slug: 'streatham',
    name: 'Streatham',
    postcode: 'SW16',
    coordinates: { lat: 51.4279, lng: -0.1235 },
    zone: 'south',
    nearby: ['clapham', 'mitcham'],
    borough: 'Lambeth',
    landmarks: ['Streatham Common', 'Streatham Hill Theatre', 'The Rookery'],
    housingTypes: ['Victorian conversions', 'Edwardian terraces', 'period maisonettes', 'new-build flats'],
    localChallenge: 'Streatham\'s Victorian and Edwardian conversion flats present a specific challenge: the ceilings are high (often 3.2–3.5m), the cornicing is original and fragile, and the walls may have had fifteen or twenty coats of emulsion over 130 years that need assessing before adding another.',
    intro: 'Streatham has undergone a genuine transformation over the past decade, and the standard of decorating that homeowners and landlords expect has risen accordingly. Its Victorian and Edwardian terraces — many converted into flats — have original features worth preserving: high ceilings, plaster cornicing, picture rails, and deep skirting boards. Working in these properties well means knowing how to restore rather than cover up.',
    projectFocus: 'Period conversion flat redecorations — particularly in the tall-ceilinged Victorian properties along Streatham Hill and the Edwardian streets off the Common — are our most frequent Streatham projects. We also carry out exterior repaints of the area\'s terraced stock, including some striking Victorian shopfronts along Streatham High Road.',
    paintNote: 'For Streatham\'s Victorian conversion walls — which often have many layers of old paint — we assess whether a stabilising primer is needed before topcoats. Where walls have been repeatedly emulsioned on top of old distemper, the surface can be unstable and will need washing down, sanding, and priming before anything else. Skipping this step causes the whole paint job to peel within a year.',
    heroImage: '/images/exterior-painting-terraced-house-yellow-render.webp',
    heroImageAlt: 'Victorian terraced house painted in bold yellow with dark trim in South London',
    faqs: [
      {
        question: 'How do you decorate period conversion flats with high ceilings and original cornicing?',
        answer: 'We use combination ladders and hop-ups for access, and work with small cutting-in brushes around cornicing rather than rollers. For ceilings above 3.2m we use a scaffold tower — included in the price. We repair any missing or cracked sections of cornicing with flexible filler before painting, and always use a flat finish ceiling paint to minimise the appearance of any imperfections at height.',
      },
      {
        question: 'What paint is best for north-facing rooms in Streatham Victorian conversions?',
        answer: 'North-facing rooms benefit from warm undertones that compensate for the cooler, bluer light. We typically suggest Farrow & Ball Elephant\'s Breath (a warm greige), Little Greene Gauze, or Dulux Heritage Lemon White for ceilings paired with a warm mid-tone on the walls. We are happy to test pots in your specific room before you commit — paint always looks different on the wall than in a swatch book.',
      },
      {
        question: 'Do you cover Streatham Hill, Streatham Common, and Streatham Vale?',
        answer: 'Yes — we cover the whole of SW16, including Streatham Hill, Streatham Common, Streatham Vale, Furzedown, and Norbury. We also serve the adjacent areas of Tulse Hill and West Norwood in SE27, and Balham and Tooting to the north.',
      },
    ],
  },
  {
    slug: 'clapham',
    name: 'Clapham',
    postcode: 'SW4, SW11',
    coordinates: { lat: 51.4627, lng: -0.1386 },
    zone: 'south',
    nearby: ['streatham', 'wimbledon'],
    borough: 'Lambeth',
    landmarks: ['Clapham Common', 'Clapham Junction', 'Northcote Road'],
    housingTypes: ['Victorian terraces', 'Georgian townhouses', 'period conversions', 'modern apartments'],
    localChallenge: 'Clapham clients tend to have high expectations and a clear design vision — they know which paint brands they want, often have a colour scheme in mind, and expect the decorator to execute it with precision. Attention to detail, clean lines, and flawless cutting-in are non-negotiable.',
    intro: 'Clapham attracts a design-conscious professional clientele who bring strong ideas about colour, finish, and detail to every decorating project. The Georgian townhouses around the Old Town and the Victorian terraces behind Northcote Road provide beautiful bones — but they only look their best when decorated to a genuinely high standard, with clean edges, careful prep, and the right paints applied correctly.',
    projectFocus: 'High-specification interior redecorations are the core of our Clapham work — projects using Farrow & Ball, Little Greene, or Mylands, often with multiple feature walls, detailed woodwork in a contrasting finish, and careful attention to period architectural details. We also repaint the area\'s Victorian and Georgian exteriors, including some of the distinctive terraced house frontages around the Common.',
    paintNote: 'Clapham\'s Georgian townhouses have plaster walls that respond beautifully to an oil-based eggshell on woodwork paired with a chalky flat emulsion on walls — the contrast in sheen emphasises the architecture. For period properties we recommend Little Greene\'s oil-based Intelligent Eggshell for all woodwork: it is more durable than water-based equivalents and gives a harder, more period-appropriate finish.',
    heroImage: '/images/exterior-painting-victorian-terraces-white-blue-london.webp',
    heroImageAlt: 'Two Victorian terraced houses freshly painted white and blue in Clapham, South London',
    faqs: [
      {
        question: 'Do you offer colour consultation for a full interior scheme in Clapham?',
        answer: 'We offer practical colour advice as part of every quotation visit — we will assess your natural light at different times of day, discuss your furniture and flooring, and advise on how your chosen colours will actually read on the walls. We have applied premium paints in hundreds of Clapham rooms and have a well-trained eye for what works. We are not interior designers, but our colour advice is genuinely useful.',
      },
      {
        question: 'What interior finish looks best in Victorian Clapham terraces?',
        answer: 'For period Victorian properties we typically recommend a flat or matt emulsion on walls (which absorbs light and gives a warm, traditional feel), eggshell on woodwork (easy to clean, subtle sheen), and a flat finish on ceilings. High-gloss woodwork can look too clinical in a period property unless used very deliberately. We are happy to talk through the options for your specific rooms.',
      },
      {
        question: 'How do you protect Georgian architectural details during decorating?',
        answer: 'We mask all architraves, skirting boards, and cornicing with blue masking tape before emulsioning walls, and remove the tape before the paint dries to get a clean edge. For woodwork we use a small angled brush to cut in tight to the plaster, then a larger brush for the main surface. We never cover mouldings with tape and roll over them — the tape pulls the paint off the moulding when removed.',
      },
    ],
  },
  {
    slug: 'kingston',
    name: 'Kingston upon Thames',
    postcode: 'KT1, KT2',
    coordinates: { lat: 51.4123, lng: -0.3007 },
    zone: 'south',
    nearby: ['wimbledon', 'purley'],
    borough: 'Kingston upon Thames',
    landmarks: ['Kingston Market Place', 'Hampton Court Palace', 'Bushy Park'],
    housingTypes: ['Victorian villas', 'Edwardian properties', 'riverside homes', 'modern developments'],
    localChallenge: 'Properties close to the Thames in Kingston experience higher ambient moisture than most London suburbs, and exterior paint systems must be specifically chosen to allow the walls to breathe — otherwise moisture trapped behind the paint causes it to bubble and peel within two seasons.',
    intro: 'Kingston upon Thames is one of South-West London\'s most complete and prosperous towns — a genuine Georgian market centre surrounded by fine residential streets, with the Thames running alongside and Hampton Court Palace just upstream. The housing ranges from riverside apartments with modern construction to substantial Victorian villas in the streets behind the town centre, all requiring careful and experienced decorating.',
    projectFocus: 'A combination of exterior repaints — particularly the period timber sash windows and painted rendered facades common in Kingston\'s older streets — and premium interior redecorations characterises our Kingston work. We also carry out woodwork restoration projects on properties with original timber details that have suffered years of weather exposure.',
    paintNote: 'For Kingston properties within half a mile of the Thames, we specify vapour-permeable masonry paint on all exterior surfaces — Keim Mineral Paints are the premium choice, lasting 20+ years, while Dulux Weathershield Smooth is an excellent value alternative. For timber sash windows we use a flexible, micro-porous wood paint (Dulux Trade Weathershield or Ronseal One Coat) that allows the wood to move with humidity changes without cracking.',
    heroImage: '/images/interior-painting-hallway-stained-glass-woodwork.webp',
    heroImageAlt: 'Period hallway with freshly painted white walls and black woodwork around stained glass door in Kingston',
    faqs: [
      {
        question: 'What exterior paint system works best for riverside properties near the Thames?',
        answer: 'Properties close to water need breathable, vapour-permeable exterior paints — non-breathable masonry paints trap moisture in the walls and fail within two to three years in riverside locations. We recommend Keim Mineral Silicate Paints for the best long-term performance, or Dulux Weathershield Smooth as a cost-effective alternative. We also always apply a primer coat and ensure surfaces are fully dry before painting.',
      },
      {
        question: 'Can you restore and repaint original timber sash windows in Kingston period properties?',
        answer: 'Yes — sash window restoration is something we do regularly in Kingston\'s Victorian and Edwardian streets. We strip back to bare wood where necessary (or apply a flexible knotting and primer where the existing paint is sound), repair any rot with flexible wood filler, and finish with two topcoats of a micro-porous wood paint. We can also replace broken sash cords as part of the project.',
      },
      {
        question: 'Do you cover New Malden, Surbiton, and Tolworth as well as Kingston?',
        answer: 'Yes — we serve the whole of the KT1 and KT2 postcodes and the surrounding areas including New Malden, Surbiton, Tolworth, Chessington, and Hook. We also regularly work in Hampton and Teddington across the river.',
      },
    ],
  },
  {
    slug: 'purley',
    name: 'Purley',
    postcode: 'CR8',
    coordinates: { lat: 51.3374, lng: -0.1149 },
    zone: 'south',
    nearby: ['wallington', 'mitcham'],
    borough: 'Croydon',
    landmarks: ['Purley Way', 'Riddlesdown Common', 'Kenley Aerodrome'],
    housingTypes: ['1930s detached homes', 'bungalows', 'large family houses', 'period properties'],
    localChallenge: 'Purley\'s generous 1930s detached properties often have extensive exterior surface areas — three-storey rendered frontages, large garage blocks, long boundary walls — that require careful scheduling, scaffold, and a weather-resistant paint system to complete properly.',
    intro: 'Purley is leafy and spacious — the kind of South London suburb where 1930s detached houses sit behind generous front gardens and mature trees line the wide avenues. A fresh exterior repaint here is a major undertaking and a significant investment, but one that genuinely adds kerb appeal and property value. Getting it right means proper preparation, the right scaffold, and paint systems that will last a decade or more.',
    projectFocus: 'Large-scale exterior repaints of 1930s detached and semi-detached houses are the flagship projects we complete in Purley — often 5–8 day jobs with full scaffold, covering rendered walls, timber fascias, soffits, window frames, and front doors. We also carry out full interior redecorations of these generous family homes.',
    paintNote: 'For Purley\'s 1930s rendered exteriors we specify Dulux Weathershield Smooth in a 10-year guaranteed finish. For masonry previously painted many times (which can be unstable), we first apply a Weathershield stabilising primer to consolidate the surface before topcoats. Large exterior projects always benefit from two full topcoats rather than one — the additional coverage pays for itself in longevity.',
    heroImage: '/images/interior-painting-entrance-hall-staircase-neutral.webp',
    heroImageAlt: 'Entrance hall and staircase freshly painted in neutral tones in a Purley family home',
    faqs: [
      {
        question: 'How do you quote for a large detached house exterior in Purley?',
        answer: 'We visit the property, measure the total paintable surface area, and assess the condition of the existing finish — whether it is sound and just needs overpainting, or whether there is crumbling render, peeling paint, or damp that needs addressing first. We then provide a fixed-price quotation broken down by element (walls, woodwork, front door etc.) so you know exactly what you are paying for.',
      },
      {
        question: 'Do you use scaffold for large exterior painting projects in Purley?',
        answer: 'Yes — for three-storey properties and for any work above 6 metres we always use scaffold rather than long ladders. It is safer for our decorators, produces better results (you cannot cut in cleanly from a ladder at height), and protects your property. We work with a local scaffold company and include the scaffold cost in our quotation.',
      },
      {
        question: 'How long does a full exterior repaint of a typical Purley detached house take?',
        answer: 'A large 1930s detached with rendered walls, timber fascias, soffits, and multiple windows typically takes 5–8 working days including prep, priming, and two topcoats. We schedule around the weather forecast and will not apply topcoats if rain is forecast within 4 hours. We give you a realistic schedule before starting so you can plan accordingly.',
      },
    ],
  },
  {
    slug: 'wallington',
    name: 'Wallington',
    postcode: 'SM6',
    coordinates: { lat: 51.3607, lng: -0.1520 },
    zone: 'south',
    nearby: ['purley', 'mitcham'],
    borough: 'Sutton',
    landmarks: ['Beddington Park', 'Wallington High Street'],
    housingTypes: ['1930s semis', 'Victorian terraces', 'post-war properties', 'new-build estates'],
    localChallenge: 'Wallington has a significant number of properties with pebbledash and rough-cast rendered exteriors that are often in need of repainting. Pebbledash requires a specialist approach — the wrong paint applied without adequate preparation will peel within two seasons, regardless of how expensive the topcoat is.',
    intro: 'Wallington is a quiet, predominantly residential suburb in the London Borough of Sutton, characterised by wide tree-lined roads, interwar semis, and a solid, straightforward housing stock where good decorating makes a real visible difference. The area has a high proportion of rendered and pebbledash exteriors — surfaces that demand specialist knowledge to prepare and paint correctly.',
    projectFocus: 'Rendered and pebbledash exterior repaints are the most distinctive type of project we complete in Wallington — requiring a stabilising primer, a flexible masonry paint, and patience to apply it correctly into the texture. We also carry out interior redecorations of the area\'s 1930s and post-war family homes, many of which are being updated by new owners.',
    paintNote: 'For pebbledash and rough-cast exteriors in Wallington, we always start with a masonry stabilising primer (Dulux Weathershield Stabilising Primer or similar) to consolidate the loose, powdery surface before any topcoat. We then apply a flexible, textured masonry paint like Sandtex Fine Textured using a long-pile roller — a smooth masonry paint will not cover pebbledash adequately and will look patchy. Two full topcoats are standard.',
    heroImage: '/images/interior-painting-staircase-landing-neutral-walls.webp',
    heroImageAlt: 'Staircase landing freshly painted with neutral walls and white woodwork in a Wallington home',
    faqs: [
      {
        question: 'Can you paint pebbledash and rough-cast rendered exteriors?',
        answer: 'Yes — we specialise in this. Pebbledash requires a different approach to smooth render: a stabilising primer to consolidate the surface, a long-pile roller to push paint into the texture, and a textured masonry paint (not smooth) for the topcoats. Applied correctly, a pebbledash exterior repaint will last 10–15 years. Applied incorrectly, it peels within two seasons.',
      },
      {
        question: 'What preparation does pebbledash need before painting?',
        answer: 'We start by checking for loose or hollow sections of pebbledash — these need to be cut out and repaired before painting, as paint cannot hold loose render in place. We then wash the surface down with a fungicidal solution to kill any moss or algae, allow to dry fully, and apply a masonry stabilising primer. Only then do we apply topcoats. This preparation stage typically adds half a day to the project but makes the difference between a 5-year finish and a 15-year finish.',
      },
      {
        question: 'Do you cover Carshalton, Beddington, and Hackbridge as well as Wallington?',
        answer: 'Yes — we serve the whole of SM6 and the surrounding areas including Carshalton, Carshalton Beeches, Beddington, Hackbridge, and Cheam. We also regularly work across the SM postcodes into Sutton town centre and Banstead.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getNearbyLocations(location: Location): Location[] {
  return location.nearby
    .map((slug) => getLocationBySlug(slug))
    .filter((l): l is Location => l !== undefined);
}
