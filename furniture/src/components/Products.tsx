 import Image from "next/image";
// import Bedroom from "../public/bedroom.png"
export default function Products(){

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
      }
  
    const data: Card[] = [
      {
        name: 'Syltherine',
        price: "Rp 2.500.000",
        age: 25,
        image: '/1.jpg',
        description: 'Stylish cafe Table',
      },
     
       
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          age: 25,
          image: '/2.jpg',
          description: 'Stylish cafe chair',
        },
        {
          name: 'Lolite',
          price: "Rp 7.000.000",
          age: 25,
          image: '/3.jpg',
          description: 'Luxury big sofa',
        },
        {
          name: 'Respira',
          price: "Rp 5.000.000",
          age: 28,
          image: '/4.jpg',
          description: 'Out door bar table & stool.',
        },
        {
          name: 'Grifo',
          price: "Rp 1.500.000",
          age: 28,
          image: '/5.jpg',
          description: 'Night lamp.',
        },
        {
          name: 'Muggo',
          price: "Rp 150.000",
          age: 28,
          image: '/6.jpg',
          description: 'Small mug.',
        },
        {
          name: 'Pingky',
          price: "Rp 7.000.000",
          age: 28,
          image: '/7.jpg',
          description: 'Cute bed set.',
        },
        {
          name: 'Poty',
          price: "Rp 500.000",
          age: 28,
          image: '/8.jpg',
          description: 'Minimalist flower pot.',
        },
        
      ];
    
    return (
        <>
        <div  className="product">
            <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
            </div>
            <div className="cardsContainer">
            {data.map((card, index) => (
  
            <div className="card" key={index} style={{ width: "15rem" }}>
                <img
                  src={card.image}
                  style={{ width: "18rem", height: "18rem" }}
                  className="card-img-top"
                   alt={card.description}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.name}
                  </h5>
                  <p className="card-text">{card.description}</p>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.price}
                  </h5>
            </div>
            </div>
                    ))}
  
                    <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">Show More</button>
  
        </div>
        </>
    )
  }