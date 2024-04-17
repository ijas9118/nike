import Nav from './components/Nav'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffers from './sections/SpecialOffers'
import CustomerReview from './sections/CustomerReview'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'

function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffers/>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview/>
      </section>
      <section className="padding-x sm:py-32 p-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default App