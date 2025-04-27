export default function AboutPage() {
    return (
      <div className="container px-4 py-12 md:py-24">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-gray-500 text-lg">
            For over two decades, we've been curating the world's finest timepieces 
            for discerning collectors. Our passion for horology drives us to source 
            only the most exceptional watches from renowned makers.
          </p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-500">
              To connect watch enthusiasts with timeless craftsmanship while 
              providing expert guidance and unparalleled service.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Heritage</h2>
            <p className="text-gray-500">
              Founded in 2001 by master watchmaker James Cartwright, we've grown 
              from a small boutique to an internationally recognized authority 
              in luxury timepieces.
            </p>
          </div>
        </div>
      </div>
    );
  }