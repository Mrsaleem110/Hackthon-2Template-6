export default function Products() {
  interface Card {
    name: string;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    { name: 'Syltherine', price: "Rp 2.500.000", image: '/s1.png', description: 'Stylish cafe Table' },
    { name: 'Leviosa', price: "Rp 2.500.000", image: '/s5.png', description: 'Stylish cafe chair' },
    { name: 'Lolite', price: "Rp 7.000.000", image: '/s3.png', description: 'Luxury big sofa' },
    { name: 'Respira', price: "Rp 5.000.000", image: '/s4.png', description: 'Outdoor bar table & stool' },
    { name: 'Syltherine', price: "Rp 2.500.000", image: '/s1.png', description: 'Stylish cafe Table' },
    { name: 'Leviosa', price: "Rp 2.500.000", image: '/s2.png', description: 'Stylish cafe chair' },
    { name: 'Lolite', price: "Rp 7.000.000", image: '/s3.png', description: 'Luxury big sofa' },
    { name: 'Respira', price: "Rp 5.000.000", image: '/s4.png', description: 'Outdoor bar table & stool' },
    { name: 'Syltherine', price: "Rp 2.500.000", image: '/s1.png', description: 'Stylish cafe Table' },
    { name: 'Leviosa', price: "Rp 2.500.000", image: '/s2.png', description: 'Stylish cafe chair' },
    { name: 'Lolite', price: "Rp 7.000.000", image: '/s3.png', description: 'Luxury big sofa' },
    { name: 'Respira', price: "Rp 5.000.000", image: '/s4.png', description: 'Outdoor bar table & stool' },
    { name: 'Syltherine', price: "Rp 2.500.000", image: '/s1.png', description: 'Stylish cafe Table' },
    { name: 'Leviosa', price: "Rp 2.500.000", image: '/s2.png', description: 'Stylish cafe chair' },
    { name: 'Lolite', price: "Rp 7.000.000", image: '/s3.png', description: 'Luxury big sofa' },
    { name: 'Respira', price: "Rp 5.000.000", image: '/s4.png', description: 'Outdoor bar table & stool' }
  
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-8">
        {data.map((card, index) => (
          <div
            className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center"
            key={index}
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-48 h-48 object-cover rounded-t-lg"
            />
            <div className="card-body p-4 text-center">
              <h5 className="card-title font-bold text-lg">{card.name}</h5>
              <p className="card-text text-gray-600 text-sm">{card.description}</p>
              <h5 className="text-xl font-semibold mt-2">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
