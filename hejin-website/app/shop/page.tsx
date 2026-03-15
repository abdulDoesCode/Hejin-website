import ProductCard from '../../components/ProductCard';
import { products } from '../../lib/products';

export default function Shop() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-amber-900 text-center mb-12">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Purchasing Information Section */}
      <section className="mt-16 bg-amber-50 rounded-lg p-8 border border-amber-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Handmade with Care - Direct from Our Workshop
          </h2>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Each piece in our collection is crafted by hand in our dedicated workshops.
            We believe in building direct relationships with our customers and offering
            personalized service that mass production cannot match.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              How to Purchase
            </h3>
            <ul className="text-amber-700 space-y-2">
              <li>• Browse our collection above to see current available pieces</li>
              <li>• Contact us directly to discuss customization options</li>
              <li>• Schedule a visit to our workshop for a personal consultation</li>
              <li>• Each item is made to order with your specific preferences</li>
              <li>• Payment arrangements discussed directly with our artisans</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              Our Workshop Locations
            </h3>
            <div className="text-amber-700 space-y-3">
              <div>
                <h4 className="font-medium">Main Workshop</h4>
                <p>123 Artisan Street<br />Leather District<br />City, State 12345</p>
              </div>
              <div>
                <h4 className="font-medium">Secondary Studio</h4>
                <p>456 Craft Avenue<br />Design Quarter<br />City, State 67890</p>
              </div>
              <p className="text-sm italic mt-3">
                * Locations available by appointment only.<br />
                Please contact us to arrange a visit.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-amber-800 mb-4">
            Ready to own a piece of artisanal craftsmanship?
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Contact Us to Get Started
          </a>
        </div>
      </section>
    </div>
  );
}