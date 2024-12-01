import Header from '@/components/layout/Header'
import OfferCard from '@/components/features/OfferCard'

const offers = [
  {
    brand: 'Spotify Premium',
    description: 'Get 3 months of Spotify Premium for free with your N26 subscription',
    discount: '3 months free',
    imageId: '1016',
    link: '#'
  },
  {
    brand: 'Nike',
    description: '20% off on your next purchase at Nike.com',
    discount: '20% off',
    imageId: '1018',
    link: '#'
  },
  {
    brand: 'Airbnb',
    description: 'Get €50 credit on your first booking with Airbnb',
    discount: '€50 credit',
    imageId: '1019',
    link: '#'
  },
  {
    brand: 'Uber',
    description: 'Enjoy 5 free rides up to €10 each',
    discount: '5 free rides',
    imageId: '1015',
    link: '#'
  },
  {
    brand: 'Amazon Prime',
    description: 'Free Amazon Prime membership for 6 months',
    discount: '6 months free',
    imageId: '1014',
    link: '#'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="py-12">
          <h1 className="text-4xl font-bold text-white mb-4">Perks</h1>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Exclusive offers and discounts from your favorite brands, available only for N26 customers.
          </p>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-6">Currently available</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {offers.map((offer) => (
                <OfferCard key={offer.brand} {...offer} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 