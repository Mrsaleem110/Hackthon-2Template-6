// import Image from "next/image";
// import Bedroom from "../public/bedroom.png"
export default function Products(){

  interface Card{
      name: string,
      description: string,
      image: string,
      price: string,
    }

  const data: Card[] = [
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      image: '/1.jpg',
      description: 'Stylish cafe Table',
    },
   
     
      {
        name: 'Leviosa',
        price: "Rp 2.500.000",
        image: '/2.jpg',
        description: 'Stylish cafe chair',
      },
      {
        name: 'Lolite',
        price: "Rp 7.000.000",
        image: '/3.jpg',
        description: 'Luxury big sofa',
      },
      {
        name: 'Respira',
        price: "Rp 5.000.000",
        image: '/4.jpg',
        description: 'Out door bar table & stool.',
      },
      {
        name: 'Grifo',
        price: "Rp 1.500.000",
        image: '/5.jpg',
        description: 'Night lamp.',
      },
      {
        name: 'Muggo',
        price: "Rp 150.000",
        image: '/6.jpg',
        description: 'Small mug.',
      },
      {
        name: 'Pingky',
        price: "Rp 7.000.000",
        image: '/7.jpg',
        description: 'Cute bed set.',
      },
      {
        name: 'Poty',
        price: "Rp 500.000",
        image: '/8.jpg',
        description: 'Minimalist flower pot.',
      },
      
    ];
  
  return (
      <>
          <div >
          <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
          </div>
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
                

                  <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">Show More</button>

      </>
  )}