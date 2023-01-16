import Image from "next/image"
import multiDots from "@img/decor/multi-dots.png"
import star from "@img/decor/star.png"
import half_gradient_blur from "@img/decor/half-gradient-blur.png"
import downArrow from "@img/down-arrow.png"

export const Hero = () => {
  return (
    <section id="hero-area" className="w-full bg-cover bg-hero no-repeat">
    <div className="multi-dots wow fadeInUp" data-wow-delay="1.3s">
      <Image className="img-fluid" src={multiDots} alt=""/>
    </div>
    <div className="lower-star wow fadeInUp" data-wow-delay="1.3s">
      <Image className="img-fluid" src={star} alt=""/>
    </div>
    <div className="upper-star wow fadeInUp" data-wow-delay="1.3s">
      <Image className="img-fluid" src={star} alt=""/>
    </div>
    <Image className="gradient-circle" src={half_gradient_blur} alt=""/>
 
    <div className="w-full text-center ">
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
          <Image className="img-fluid down-arrow animate-bounce" src={downArrow} alt="Get to know us!"/>
        </a>
      </div>
    </div>
  </section>
  )
}
