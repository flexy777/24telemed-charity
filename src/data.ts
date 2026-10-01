import chinelo from './assets/team/chinelo.png'
import collins from './assets/team/collins.png'
import mariette from './assets/team/mariette.png'
import mireku from './assets/team/mireku.png'
import nkechi from './assets/team/nkechi.png'
import nkiru from './assets/team/nkiru.png'
import obiageli from './assets/team/obiageli.png'
import ogor from './assets/team/ogor.png'
import sheila from './assets/team/sheila.png'
import suelyn from './assets/team/suelyn.png'

// Set this to the foundation's PayPal donate link (e.g. https://www.paypal.com/donate/?hosted_button_id=XXXX).
// While empty, the PayPal button scrolls to the bank transfer details instead.
export const PAYPAL_URL = 'https://www.paypal.com/donate/?hosted_button_id=PKBUFHTU2FDCA'

export const org = {
  name: '24Telemed Foundation',
  tagline: 'Connecting Rural Africa',
  address: ['2 University Plaza, Ste. 100, #29', 'Hackensack, New Jersey, 07601'],
  phone: '(201) 575-6910',
  phoneHref: 'tel:+12015756910',
  ein: '99-3928969',
  bank: {
    accountNumber: '0047383639',
    bankName: 'Stanbic IBTC',
    accountName: '24Telemed',
  },
}

// noZoom: show the whole photo in the circle (for photos where the head touches the top edge).
// shrink: also scale it down, leaving white space above the head (white-background photos only).
export type Person = {
  name: string
  role: string
  location?: string
  photo: string
  noZoom?: boolean
  shrink?: boolean
}

export const founder: Person = {
  name: 'Mariette Amadi, MD',
  role: 'Founder',
  photo: mariette,
}

export const team: Person[] = [
  {
    name: 'Nkechi Obianozie, MBBS',
    role: 'Consultant Neurologist',
    location: 'Abuja, Nigeria',
    photo: nkechi,
  },
  {
    name: 'Suelyn Boucree, MD, MBA, FACP',
    role: 'Co-Founder & President of The Boucree Foundation',
    location: 'NJ, U.S.A.',
    photo: suelyn,
  },
  {
    name: 'Attorney Ogor Winnie Okoye',
    role: 'Founder of BOS Legal, LLC',
    location: 'Maryland and New York, U.S.A.',
    photo: ogor,
  },
  { name: 'Mrs. Nkiru Nwankwo', role: 'Banker', location: 'Lagos, Nigeria', photo: nkiru },
  {
    name: 'Mrs. Chinelo Okaro-Nwansi',
    role: 'Business Manager',
    location: 'New York',
    photo: chinelo,
    noZoom: true,
  },
  { name: 'Sheila Nwankwo', role: 'Banker', location: 'Nigeria', photo: sheila, shrink: true },
  { name: 'Barr. Obiageli Okaro', role: 'Lawyer', location: 'Abuja, Nigeria', photo: obiageli },
  {
    name: 'Mr. Mireku Kwabena Francis',
    role: 'Founder and CEO, MSK Electrical Companies',
    location: 'Accra, Ghana',
    photo: mireku,
  },
  {
    name: 'Dr. Collins Frimpong',
    role: 'Regional Program Manager',
    location: 'Ghana',
    photo: collins,
  },
]

const partnerModules = import.meta.glob<string>('./assets/partners/*.png', {
  eager: true,
  import: 'default',
})
export const partners: string[] = Object.keys(partnerModules)
  .sort()
  .map((k) => partnerModules[k])

export const diseases = [
  'Cancer',
  'Malaria',
  'Typhoid',
  'Dysentery',
  'HIV/AIDS',
  'Tuberculosis',
  'Infections',
]
