
export const Hero = () => {
  return (
    <section id="hero-area" className="bg-[url('/assets/img/hero-bg.png')] bg-cover no-repeat w-full">
  
    <div className="multi-dots wow fadeInUp" data-wow-delay="1.3s">
      <img className="img-fluid" src="assets/img/decor/multi-dots.png" alt=""/>
    </div>
    <div className="lower-star wow fadeInUp" data-wow-delay="1.3s">
      <img className="img-fluid" src="assets/img/decor/star.png" alt=""/>
    </div>
    <div className="upper-star wow fadeInUp" data-wow-delay="1.3s">
      <img className="img-fluid" src="assets/img/decor/star.png" alt=""/>
    </div>
    <img className="gradient-circle" src="assets/img/decor/half-gradient-blur.png" alt=""/>
 
    <div className="w-full text-center">
      <h2 id="title" className="px-8 mb-4 text-6xl sm:text-8xl wow fadeInUp" data-wow-delay="1s">
        IEEE SBUI
      </h2>
      <br/>
      <h2 id="title-meaning" className="px-8 mb-4 wow fadeInUp" data-wow-delay="1.6s"> Institute of Electrical and
        Electronics Engineers Student Branch Universitas Indonesia
      </h2>
      <h2 id="subtitle" className="px-8 wow fadeInUp" data-wow-delay="1.6s"> the first IEEE student branch in
        Indonesia
      </h2>
      <br/>
      <h2 id="tagline" className="px-8 mb-4 text-2xl wow fadeInUp" data-wow-delay="1.9s">#ProgressivelyStandardizing</h2>
      <br/>
      <div className="scroll wow fadeInDown" data-wow-delay="2.1s">
        <a href="#about-us">
          <img className="img-fluid down-arrow animate-bounce" src="assets/img/down-arrow.png" alt="Get to know us!"/>
        </a>
      </div>
    </div>
  </section>
  )
}
