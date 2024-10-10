const reviewList = [
  {id:1, name: "Sarah", image: '/assets/review1.png', review: "I’ve been ordering from AquaVerse for months, and the water quality is amazing! Fast delivery and eco-friendly packaging make it even better. Highly recommend for anyone looking for clean, refreshing water."},
  {id:2, name: "Kenneth", image: '/assets/review2.png', review: "AquaVerse makes getting clean water so easy. Their subscription service ensures I never run out, and the customer service is always excellent. Great taste and reliable delivery!"},
  {id:3, name: "Jadynn", image: '/assets/review3.png', review: "I love AquaVerse! The water tastes great, and I’ve noticed a big boost in my energy. Their alkaline options are perfect for my health routine. Highly recommend!"},
]

function Reviews(){
  return(
    <div className="w-11/12 mx-auto mb-10 mt-20">
      <h2 className="text-6xl font-bold text-center text-[#095EAE] mb-10">✰What Our Clients Say✰</h2>

      <div className="flex space-x-4">
        {reviewList.map((review) => (
            <div key={review.id} className="min-w-[300px] bg-white p-6 rounded-xl hover:bg-[#DDE9F5] flex flex-col items-center transform transition duration-300 hover:scale-105" style={{borderRadius: '1rem'}}>
              <h1 className="text-8xl text-[#095EAE] mb-4"></h1>
              <h1 className="text-9xl text-[#095EAE]" style={{ fontFamily: 'Inria Serif, serif'}}>&quot;</h1>
              <p className="text-center text-[#1E1E1E] mb-4">{review.review}</p>
              <p className="font-semibold text-[#095EAE] mb-4">{review.name}</p>
              <img src={review.image} alt={review.name} className="h-24 w-auto mb-4"></img>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Reviews