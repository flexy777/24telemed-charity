const files = import.meta.glob<string>('./assets/events/*/*.jpg', {
  eager: true,
  import: 'default',
})

// All photos in src/assets/events/<folder>/, in filename order (01.jpg is the cover).
function photos(folder: string): string[] {
  return Object.keys(files)
    .filter((k) => k.startsWith(`./assets/events/${folder}/`))
    .sort()
    .map((k) => files[k])
}

export type EventItem = {
  id: string
  title: string
  date: string
  year: number
  location: string
  country: 'Nigeria' | 'Ghana' | 'Uganda'
  description: string
  highlights?: string[]
  partner?: string
  photos: string[]
  // Cover is a flyer/poster: show it whole instead of cropping it.
  poster?: boolean
}

export const programme2026: EventItem[] = [
  {
    id: 'umuahia',
    title: 'Community Empowerment for Healthy Living',
    date: 'January 14–16, 2026',
    year: 2026,
    location: 'Umuahia, Abia State',
    country: 'Nigeria',
    description: 'The 24Telemed team embarked on a three-day medical outreach in Umuahia.',
    highlights: [
      'Free home healthcare visits to homebound patients',
      'Free medical check-up',
      'Free blood work',
      'Free medical consultation',
      'Free physical therapy sessions',
      'Free medications',
    ],
    photos: photos('umuahia'),
    poster: true,
  },
  {
    id: 'checkup-kumasi',
    title: 'Free Health Check Up Day',
    date: 'February 28, 2026 · 8AM',
    year: 2026,
    location: 'Trede Sabin Akrofrom, Kumasi',
    country: 'Ghana',
    partner: 'Divine Star Ministry',
    description: 'A free health check-up day presented with Divine Star Ministry.',
    highlights: ['Free medical consultation', 'Health education', 'Glucose check & many more'],
    photos: photos('checkup-kumasi'),
    poster: true,
  },
  {
    id: 'outreach-kumasi',
    title: 'Medical Outreach',
    date: 'Sunday, March 1, 2026 · 9AM',
    year: 2026,
    location: 'Faith Temple Baptist Church, Kumasi Old Tafo, Moshie Zongo',
    country: 'Ghana',
    description: 'Experience exceptional medical care with 24Telemed Charity Organization.',
    highlights: [
      'Blood pressure check',
      'Blood glucose check',
      'Medical consultation',
      'Health education',
    ],
    photos: photos('outreach-kumasi'),
    poster: true,
  },
  {
    id: 'hub-launch',
    title: '24Telemed Medical Outreach & Hub Launch',
    date: 'April 24, 2026',
    year: 2026,
    location: 'Ejura-Sekyedumase Municipal Assembly (BEMI)',
    country: 'Ghana',
    description:
      'A dedicated telemedicine facility, permanently embedded in BEMI — connecting residents to qualified doctors and specialists remotely, without leaving their community. Launched with a full medical outreach day of screenings, consultations, health education and hands-on care.',
    highlights: ['Telemedicine hub', 'Medical outreach', 'Lasting impact'],
    photos: photos('hub-launch'),
    poster: true,
  },
]

export const pastEvents: EventItem[] = [
  {
    id: 'jos',
    title: 'Community Outreach Jos East and Jos North',
    date: 'October 2025',
    year: 2025,
    location: 'Jos East & Jos North, Plateau State',
    country: 'Nigeria',
    description: 'Empowering physical and mental wellbeing.',
    photos: photos('jos'),
  },
  {
    id: 'kaduna',
    title: 'Community Health Outreach Kaduna South',
    date: 'September 2025',
    year: 2025,
    location: 'Kaduna South, Kaduna State',
    country: 'Nigeria',
    description: 'Expanding our impact in underprivileged communities.',
    photos: photos('kaduna'),
  },
  {
    id: 'ghana',
    title: 'Community Outreach Ghana',
    date: 'September 2025',
    year: 2025,
    location: 'Ghana',
    country: 'Ghana',
    description: 'Connecting Africa.',
    photos: photos('ghana'),
  },
  {
    id: 'medical-outreach-april',
    title: 'Medical Outreach — Gwagwalada & Ogete',
    date: 'April 12 & 26, 2025',
    year: 2025,
    location: 'Gwagwalada, Abuja · Ogete, Enugu',
    country: 'Nigeria',
    description:
      'Two medical outreaches in April: Ogete, Enugu on April 12 and Gwagwalada, Abuja on April 26. Free BP and glucose machines were distributed to the community.',
    highlights: ['Blood pressure check', 'Glucose check', 'Free medical consultation'],
    photos: photos('medical-outreach-april'),
    poster: true,
  },
  {
    id: 'easter-uganda',
    title: 'Easter Celebration with Nsaka Ministries',
    date: 'April 20, 2025',
    year: 2025,
    location: 'Nsaka Ministries, Uganda',
    country: 'Uganda',
    description: 'An Easter celebration sponsored by 24Telemed — bringing hope and joy.',
    photos: photos('easter-uganda'),
    poster: true,
  },
  {
    id: 'dental-nsukka',
    title: 'Dental Health Outreach',
    date: 'April 15, 2025',
    year: 2025,
    location: 'Nsukka, Enugu State',
    country: 'Nigeria',
    partner: 'Smiles Concept Foundation',
    description: '24Telemed in collaboration with Smiles Concept Foundation.',
    highlights: [
      'Blood pressure check',
      'Health education',
      'Free dental floss donated by 24Telemed',
    ],
    photos: photos('dental-nsukka'),
    poster: true,
  },
  {
    id: 'ebukar-okafor',
    title: 'Ebukar Okafor Foundation “3,000 Widowed Women” Event',
    date: 'December 29, 2024',
    year: 2024,
    location: 'Nigeria',
    country: 'Nigeria',
    partner: 'Ebukar Okafor Foundation',
    description:
      'A great opportunity for health education and a discussion about closing critical medical gaps using telemedicine services.',
    photos: photos('ebukar-okafor'),
  },
  {
    id: 'telemed-training',
    title: 'Telemedicine Training',
    date: 'November 28–29, 2024',
    year: 2024,
    location: 'Anambra State',
    country: 'Nigeria',
    description:
      'Telemedicine training of Anambra State physicians and primary healthcare nurses in hard-to-reach areas of the state. This innovation is to bridge the critical medical care gap in the state.',
    photos: photos('telemed-training'),
  },
  {
    id: 'health-fair',
    title: 'Health Fair & Community Outreach',
    date: 'November 17, 2024 · 10AM–2PM',
    year: 2024,
    location: 'Holy Trinity Parish, Maitama, Abuja',
    country: 'Nigeria',
    description:
      'Free blood pressure and glucose checks! Free consultation! Free blood pressure and glucometer machines were distributed to those who need them most. The volunteers were amazing!',
    highlights: [
      'Free blood glucose check',
      'Free blood pressure check',
      'Free weight measurements',
      'Healthy dietary habits',
      'Health care enrollment',
    ],
    photos: photos('health-fair'),
    poster: true,
  },
  {
    id: 'consult-conference',
    title: '24/7 Online Consultation Conference',
    date: 'Saturday, November 9, 2024 · 11AM–4PM',
    year: 2024,
    location: 'Anthill, 3 Lualaba Close, Maitama, Abuja',
    country: 'Nigeria',
    description: 'Welcome to the 24/7 Online Consultation Conference with 24Telemed.',
    photos: photos('consult-conference'),
    poster: true,
  },
  {
    id: 'afor-oghe',
    title: 'Afor Oghe — PHCA for Oghe',
    date: 'April 7, 2024',
    year: 2024,
    location: 'Afor Oghe, Enugu State',
    country: 'Nigeria',
    description: 'Free medical consultation services.',
    photos: photos('afor-oghe'),
  },
  {
    id: 'queen-of-rosary',
    title: 'Queen of Rosary Old People’s Home',
    date: 'March 16, 2024',
    year: 2024,
    location: 'Onitsha, Anambra State',
    country: 'Nigeria',
    description: 'Free medical consultation services.',
    photos: photos('queen-of-rosary'),
  },
  {
    id: 'st-michaels',
    title: 'St Michael and All Angels Anglican Church',
    date: 'March 3, 2024',
    year: 2024,
    location: 'Oraifite, Anambra State',
    country: 'Nigeria',
    description: 'Free medical consultation services.',
    photos: photos('st-michaels'),
  },
]

export const kano = {
  title: '5,000+ people reached in Sumaila, Kano',
  text: 'More than 5,000 persons have benefited from a 2-day free community medical outreach organised by 24Telemed in partnership with the Oweno Foundation in 16 communities of Sumaila Local Government Area of Kano. 24Telemed established 4 telemedicine hubs and donated solar panel street lights, which were installed immediately to guide villagers to the tele-hub centres.',
  stats: [
    { value: '5,000+', label: 'people benefited' },
    { value: '16', label: 'communities' },
    { value: '4', label: 'telemedicine hubs' },
  ],
  photos: photos('kano-sumaila'),
}

export const stories = [
  {
    id: 'gabasawa',
    title: 'Bridging the Gap: 24Telemed and Oweno Foundation bring telehealth to remote villages in Gabasawa, Kano State',
    photo: photos('gabasawa')[0],
  },
  {
    id: 'electrical-dealers',
    title: '24Telemed, in collaboration with the electrical dealers association, conducted a successful medical outreach to the community.',
    photo: photos('electrical-dealers')[0],
  },
  {
    id: 'vixa-trinity',
    title: '24Telemed, in collaboration with Vixa Pharmaceutical Company, donated a box of anti-malaria medicine to Holy Trinity Boys Catholic School in Abuja.',
    photo: photos('vixa-trinity')[0],
  },
  {
    id: 'malaria-uganda',
    title: 'In our ongoing effort to combat malaria, 24Telemed has distributed treated mosquito nets and malaria medications to the Nsaka Ministries Orphanage in Uganda.',
    photo: photos('malaria-uganda')[0],
  },
]

export const award = {
  title: 'Diaspora Person of the Year 2024',
  text: 'Our founder, Dr. Mariette Obianozie Amadi, was awarded Diaspora Person of the Year 2024 at the AMTY Awards.',
  photo: photos('award')[0],
}
