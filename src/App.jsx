import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Check,
  ChevronDown,
  Heart,
  House,
  KeyRound,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Search,
  Trees,
  X,
} from 'lucide-react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const properties = [
  {
    id: 1,
    name: 'Casa Oliva',
    location: 'Mallorca, Spain',
    price: '$4,280,000',
    beds: 4,
    baths: 4,
    area: '4,820 sq ft',
    tag: 'New listing',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 2,
    name: 'The Ridge House',
    location: 'Cape Town, South Africa',
    price: '$3,950,000',
    beds: 5,
    baths: 4,
    area: '5,100 sq ft',
    tag: 'Exclusive',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 3,
    name: 'Atelier No. 8',
    location: 'Copenhagen, Denmark',
    price: '$2,760,000',
    beds: 3,
    baths: 2,
    area: '2,940 sq ft',
    tag: 'Editor’s pick',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
  },
]

const locations = [
  {
    city: 'Lisbon',
    count: '42 homes',
    image:
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=85',
  },
  {
    city: 'Mallorca',
    count: '31 homes',
    image:
      'https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1000&q=85',
  },
  {
    city: 'Copenhagen',
    count: '27 homes',
    image:
      'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1000&q=85',
  },
  {
    city: 'Cape Town',
    count: '36 homes',
    image:
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1000&q=85',
  },
]

function Wordmark({ light = false }) {
  return (
    <Link
      to="/"
      aria-label="Statura home"
      className={`font-display text-[1.55rem] tracking-[0.24em] ${light ? 'text-ivory' : 'text-ink'}`}
    >
      STATURA
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-ivory">
      <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-6 lg:px-12">
        <Wordmark light />
        <nav className="hidden items-center gap-9 text-[0.7rem] font-semibold uppercase tracking-[0.18em] lg:flex">
          <a className="nav-link" href="#collection">Properties</a>
          <a className="nav-link" href="#destinations">Destinations</a>
          <a className="nav-link" href="#story">Our approach</a>
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <button className="text-[0.7rem] font-semibold uppercase tracking-[0.18em]" type="button">
            Enquire
          </button>
          <Link className="border border-white/50 px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition hover:bg-white hover:text-ink" to="/login">
            Sign in
          </Link>
        </div>
        <button
          type="button"
          className="grid size-11 place-items-center border border-white/40 lg:hidden"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Wordmark light />
            <button className="grid size-11 place-items-center border border-white/30" type="button" aria-label="Close navigation" onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <nav className="mt-24 flex flex-col gap-7 font-display text-5xl">
            <a href="#collection" onClick={() => setOpen(false)}>Properties</a>
            <a href="#destinations" onClick={() => setOpen(false)}>Destinations</a>
            <a href="#story" onClick={() => setOpen(false)}>Our approach</a>
          </nav>
          <Link className="mt-auto flex items-center justify-between border-t border-white/20 py-6 text-sm uppercase tracking-[0.18em]" to="/login">
            Client sign in <ArrowRight size={18} />
          </Link>
        </div>
      ) : null}
    </header>
  )
}

function SearchPanel() {
  const [search, setSearch] = useState({ location: '', type: 'All properties', budget: 'Any budget' })
  const [message, setMessage] = useState('')

  function update(field, value) {
    setSearch((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setMessage(search.location ? `Showing curated homes near ${search.location}` : 'Showing our complete private collection')
  }

  return (
    <div className="relative z-20 mx-auto -mt-11 max-w-[1280px] px-4 sm:px-6">
      <form className="bg-ivory p-4 shadow-[0_24px_60px_rgba(35,38,33,0.14)] sm:p-6 lg:flex lg:items-end lg:gap-0" onSubmit={handleSubmit}>
        <label className="block flex-1 border-b border-stone/25 px-3 py-4 lg:border-b-0 lg:border-r lg:px-6 lg:py-2">
          <span className="eyebrow text-moss">Location</span>
          <span className="mt-2 flex items-center gap-2">
            <MapPin size={17} className="text-rust" />
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-stone/65"
              placeholder="City, region, or country"
              value={search.location}
              onChange={(event) => update('location', event.target.value)}
            />
          </span>
        </label>
        <label className="block flex-1 border-b border-stone/25 px-3 py-4 lg:border-b-0 lg:border-r lg:px-6 lg:py-2">
          <span className="eyebrow text-moss">Property type</span>
          <span className="relative mt-2 flex items-center gap-2">
            <House size={17} className="text-rust" />
            <select className="w-full appearance-none bg-transparent text-sm outline-none" value={search.type} onChange={(event) => update('type', event.target.value)}>
              <option>All properties</option>
              <option>Villa</option>
              <option>Townhouse</option>
              <option>Apartment</option>
            </select>
            <ChevronDown size={15} className="pointer-events-none" />
          </span>
        </label>
        <label className="block flex-1 px-3 py-4 lg:px-6 lg:py-2">
          <span className="eyebrow text-moss">Budget</span>
          <span className="relative mt-2 flex items-center gap-2">
            <Building2 size={17} className="text-rust" />
            <select className="w-full appearance-none bg-transparent text-sm outline-none" value={search.budget} onChange={(event) => update('budget', event.target.value)}>
              <option>Any budget</option>
              <option>$1M - $2M</option>
              <option>$2M - $5M</option>
              <option>$5M+</option>
            </select>
            <ChevronDown size={15} className="pointer-events-none" />
          </span>
        </label>
        <button className="flex w-full items-center justify-center gap-3 bg-rust px-8 py-5 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-moss lg:w-auto" type="submit">
          <Search size={17} /> Search
        </button>
      </form>
      <p className={`mt-3 text-center text-xs tracking-wide text-moss transition ${message ? 'opacity-100' : 'opacity-0'}`} aria-live="polite">
        {message || 'Search ready'}
      </p>
    </div>
  )
}

function PropertyCard({ property, large = false }) {
  const [saved, setSaved] = useState(false)

  return (
    <article className={large ? 'lg:col-span-7' : 'lg:col-span-5'}>
      <div className={`group relative overflow-hidden bg-sand ${large ? 'aspect-[1.25]' : 'aspect-[0.98]'}`}>
        <img className="size-full object-cover transition duration-700 group-hover:scale-[1.035]" src={property.image} alt={`${property.name} in ${property.location}`} />
        <span className="absolute left-5 top-5 bg-ivory px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink">{property.tag}</span>
        <button
          className={`absolute right-5 top-5 grid size-11 place-items-center rounded-full transition ${saved ? 'bg-rust text-white' : 'bg-ivory text-ink hover:bg-rust hover:text-white'}`}
          type="button"
          aria-label={saved ? `Remove ${property.name} from saved properties` : `Save ${property.name}`}
          aria-pressed={saved}
          onClick={() => setSaved((current) => !current)}
        >
          <Heart size={17} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="border-b border-stone/30 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow mb-2 text-rust">{property.location}</p>
            <h3 className="font-display text-3xl text-ink sm:text-4xl">{property.name}</h3>
          </div>
          <p className="whitespace-nowrap pt-6 text-sm font-semibold text-ink">{property.price}</p>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-5 text-xs text-stone">
          <span className="flex items-center gap-2"><BedDouble size={15} /> {property.beds} beds</span>
          <span className="flex items-center gap-2"><Bath size={15} /> {property.baths} baths</span>
          <span>{property.area}</span>
        </div>
      </div>
    </article>
  )
}

function LandingPage() {
  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <Header />
      <main>
        <section className="relative flex min-h-[720px] items-end bg-ink pb-32 pt-40 text-ivory lg:min-h-[820px] lg:pb-40">
          <img
            className="absolute inset-0 size-full object-cover opacity-75"
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=90"
            alt="Contemporary home overlooking the sea"
          />
          <div className="hero-shade absolute inset-0" />
          <div className="relative mx-auto w-full max-w-[1500px] px-6 lg:px-12">
            <p className="eyebrow mb-6 text-white/80">Exceptional homes, thoughtfully found</p>
            <h1 className="max-w-5xl font-display text-[4.5rem] leading-[0.84] tracking-[-0.04em] sm:text-[6.5rem] lg:text-[9.5rem]">
              Homes of<br /><span className="italic">consequence.</span>
            </h1>
            <div className="mt-10 flex items-center gap-5">
              <span className="h-px w-16 bg-white/60" />
              <p className="max-w-sm text-sm leading-6 text-white/80">A considered collection of remarkable properties in the world’s most compelling places.</p>
            </div>
          </div>
          <div className="absolute bottom-10 right-12 hidden items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-white/70 lg:flex">
            Scroll to discover <span className="h-px w-12 bg-white/50" />
          </div>
        </section>

        <SearchPanel />

        <section className="mx-auto max-w-[1280px] px-6 py-24 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-5 text-rust">A different kind of property company</p>
              <h2 className="font-display text-5xl leading-[0.96] tracking-[-0.03em] sm:text-6xl lg:text-7xl">We look beyond the square footage.</h2>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
              <p className="text-base leading-7 text-stone">We seek homes with an enduring sense of place. Architecture with intent, materials that age honestly, and settings worth crossing the world for.</p>
              <a href="#story" className="mt-7 flex w-fit items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[0.18em]">
                Discover our approach <MoveUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-stone/30 pt-8 lg:grid-cols-4">
            {[['128', 'Exceptional homes'], ['14', 'Global destinations'], ['22', 'Local advisors'], ['18 yrs', 'Collective experience']].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-4xl text-rust sm:text-5xl">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.13em] text-stone">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="collection" className="bg-pale py-24 lg:py-32">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow mb-4 text-rust">The current collection</p>
                <h2 className="font-display text-5xl sm:text-6xl">Homes worth knowing</h2>
              </div>
              <button className="hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] sm:flex" type="button">View all 128 <ArrowRight size={16} /></button>
            </div>
            <div className="mt-14 grid gap-x-7 gap-y-14 lg:grid-cols-12">
              <PropertyCard property={properties[0]} large />
              <PropertyCard property={properties[1]} />
              <div className="lg:col-span-2" />
              <PropertyCard property={properties[2]} large />
              <aside className="flex flex-col justify-end border-t border-stone/30 pt-8 lg:col-span-3 lg:border-t-0 lg:pb-10">
                <p className="font-display text-3xl leading-tight">Private listings,<br />quietly shared.</p>
                <p className="mt-4 text-sm leading-6 text-stone">Some homes never reach the open market. Join our private list for discreet introductions.</p>
                <button className="mt-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-rust" type="button">Join the private list <ArrowRight size={15} /></button>
              </aside>
            </div>
          </div>
        </section>

        <section id="story" className="grid bg-moss text-ivory lg:grid-cols-2">
          <div className="relative min-h-[520px] lg:min-h-[760px]">
            <img className="absolute inset-0 size-full object-cover" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1500&q=85" alt="Warm modern home interior" />
            <div className="absolute inset-0 bg-ink/10" />
            <div className="absolute bottom-7 left-7 bg-ivory p-5 text-ink sm:bottom-10 sm:left-10">
              <p className="eyebrow text-rust">Journal No. 07</p>
              <p className="mt-2 font-display text-2xl">The permanence of good design</p>
            </div>
          </div>
          <div className="flex items-center px-7 py-24 sm:px-16 lg:px-20">
            <div className="max-w-xl">
              <Trees size={30} strokeWidth={1.2} className="mb-12 text-sand" />
              <blockquote className="font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">“A home should feel inevitable, as though it has always belonged exactly where it stands.”</blockquote>
              <p className="mt-8 max-w-md text-sm leading-7 text-white/65">Our selection is deliberately narrow. Every home is visited, considered, and chosen by people who understand both property and place.</p>
              <button className="mt-10 border border-white/35 px-7 py-4 text-xs font-bold uppercase tracking-[0.17em] transition hover:bg-white hover:text-moss" type="button">Meet our curators</button>
            </div>
          </div>
        </section>

        <section id="destinations" className="py-24 lg:py-32">
          <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
            <div className="flex items-end justify-between">
              <div>
                <p className="eyebrow mb-4 text-rust">Find your place</p>
                <h2 className="font-display text-5xl sm:text-6xl">Destinations with soul</h2>
              </div>
              <div className="hidden gap-2 sm:flex">
                <button className="grid size-12 place-items-center border border-stone/30 transition hover:bg-ink hover:text-white" type="button" aria-label="Previous destinations"><ArrowLeft size={17} /></button>
                <button className="grid size-12 place-items-center border border-stone/30 transition hover:bg-ink hover:text-white" type="button" aria-label="Next destinations"><ArrowRight size={17} /></button>
              </div>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {locations.map((location, index) => (
                <article className={`group relative overflow-hidden ${index % 2 ? 'lg:mt-12' : ''}`} key={location.city}>
                  <div className="aspect-[0.76] overflow-hidden bg-sand">
                    <img className="size-full object-cover transition duration-700 group-hover:scale-105" src={location.image} alt={location.city} />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-6 pt-24 text-white">
                    <p className="font-display text-4xl">{location.city}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/70">{location.count}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-4 mb-4 bg-rust px-6 py-24 text-center text-white sm:mx-6 lg:mx-12 lg:py-32">
          <KeyRound className="mx-auto mb-7" size={27} strokeWidth={1.3} />
          <p className="eyebrow mb-5 text-white/65">A more personal search</p>
          <h2 className="mx-auto max-w-3xl font-display text-5xl leading-[0.95] sm:text-7xl">Tell us what home means to you.</h2>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/75">Share what you are looking for and one of our local advisors will curate a considered shortlist, just for you.</p>
          <button className="mt-9 bg-ivory px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-moss hover:text-white" type="button">Start a conversation</button>
        </section>
      </main>

      <footer className="bg-ink px-6 pb-10 pt-20 text-ivory lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Wordmark light />
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">Remarkable homes. Enduring places.<br />Represented with care.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm lg:col-span-4">
              <div className="space-y-4"><p className="eyebrow text-white/40">Explore</p><p>Properties</p><p>Destinations</p><p>Journal</p></div>
              <div className="space-y-4"><p className="eyebrow text-white/40">Statura</p><p>Our approach</p><p>Sell with us</p><p>Contact</p></div>
            </div>
            <div className="lg:col-span-3">
              <p className="eyebrow text-white/40">Private notes from exceptional places</p>
              <div className="mt-5 flex border-b border-white/30 pb-3">
                <input className="w-full bg-transparent text-sm outline-none placeholder:text-white/40" placeholder="Email address" type="email" />
                <button type="button" aria-label="Subscribe"><ArrowRight size={17} /></button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-8 text-[0.65rem] uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Statura Property Collection</p>
            <div className="flex gap-6"><span>Privacy</span><span>Terms</span><span>Instagram</span></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LoginPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="grid min-h-screen bg-ivory text-ink lg:grid-cols-[0.92fr_1.08fr]">
      <section className="flex min-h-screen flex-col px-6 py-7 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          <Wordmark />
          <Link className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.17em] text-stone" to="/"><ArrowLeft size={15} /> Back home</Link>
        </div>
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-16">
          <p className="eyebrow mb-5 text-rust">Private client access</p>
          <h1 className="font-display text-5xl leading-none sm:text-6xl">Welcome back.</h1>
          <p className="mt-5 text-sm leading-6 text-stone">Sign in to view your saved homes, private listings, and conversations with your advisor.</p>

          {submitted ? (
            <div className="mt-10 border border-moss/20 bg-pale p-7" role="status">
              <div className="grid size-10 place-items-center rounded-full bg-moss text-white"><Check size={18} /></div>
              <h2 className="mt-5 font-display text-3xl">You’re on the list.</h2>
              <p className="mt-2 text-sm leading-6 text-stone">This portfolio demo does not connect to an account service, but the complete sign-in interaction is ready for backend integration.</p>
              <button className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-rust" type="button" onClick={() => setSubmitted(false)}>Return to sign in</button>
            </div>
          ) : (
            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              <label className="block">
                <span className="eyebrow text-moss">Email address</span>
                <span className="mt-2 flex items-center border-b border-stone/40 pb-3 focus-within:border-rust">
                  <Mail size={17} className="mr-3 text-stone" />
                  <input className="w-full bg-transparent text-sm outline-none placeholder:text-stone/55" type="email" placeholder="you@example.com" required />
                </span>
              </label>
              <label className="block">
                <span className="eyebrow text-moss">Password</span>
                <span className="mt-2 flex items-center border-b border-stone/40 pb-3 focus-within:border-rust">
                  <LockKeyhole size={17} className="mr-3 text-stone" />
                  <input className="w-full bg-transparent text-sm outline-none placeholder:text-stone/55" type="password" placeholder="Enter your password" minLength="6" required />
                </span>
              </label>
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-stone"><input className="accent-rust" type="checkbox" /> Remember me</label>
                <button className="font-semibold text-ink" type="button">Forgot password?</button>
              </div>
              <button className="flex w-full items-center justify-center gap-3 bg-ink px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-rust" type="submit">Sign in <ArrowRight size={16} /></button>
              <div className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.15em] text-stone/65"><span className="h-px flex-1 bg-stone/25" /> or continue with <span className="h-px flex-1 bg-stone/25" /></div>
              <button className="w-full border border-stone/35 px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-ink" type="button">Continue with Google</button>
            </form>
          )}
          <p className="mt-8 text-center text-xs text-stone">Not yet a client? <button className="font-bold text-rust" type="button">Request access</button></p>
        </div>
        <p className="text-[0.62rem] uppercase tracking-[0.14em] text-stone/55">Protected by secure 256-bit encryption</p>
      </section>
      <aside className="relative hidden overflow-hidden bg-moss lg:block">
        <img className="absolute inset-0 size-full object-cover opacity-85" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=88" alt="Sculptural modern residence" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/15" />
        <div className="absolute inset-x-0 bottom-0 p-14 text-white xl:p-20">
          <p className="eyebrow text-white/60">Recently added · Comporta, Portugal</p>
          <p className="mt-4 max-w-xl font-display text-5xl leading-[0.98] xl:text-6xl">Casa da Areia,<br /><span className="italic">where forest meets sea.</span></p>
          <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.16em]"><MapPin size={14} /> 38.3802° N, 8.7865° W</div>
        </div>
      </aside>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
