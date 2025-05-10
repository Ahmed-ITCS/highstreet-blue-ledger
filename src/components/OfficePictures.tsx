
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useInViewAnimation from '@/hooks/useInViewAnimation';

const OfficePictures = () => {
  const { ref, isInView } = useInViewAnimation({ threshold: 0.1 });

  const officeImages = [
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Modern Office Building Exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80",
      alt: "Office Meeting Room"
    },
    {
      src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      alt: "Modern Office Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Financial District Buildings"
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-bg opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-2">
            <div className="h-1 w-10 bg-accountax-500 mb-1"></div>
            <div className="h-1 w-16 bg-accountax-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-accountax-900 mb-4">
            Our <span className="gradient-text bg-gradient-to-r from-accountax-700 to-accountax-500">Offices</span>
          </h2>
          <p className="text-lg text-accountax-600 max-w-3xl mx-auto">
            Modern facilities across the UK to serve your business accounting needs
          </p>
        </div>

        {/* Desktop Gallery Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-8">
          {officeImages.map((image, index) => (
            <div 
              key={index}
              className={`overflow-hidden rounded-xl shadow-lg transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <AspectRatio ratio={index === 0 ? 16/9 : index === 3 ? 1/1 : 3/4}>
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </AspectRatio>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <Carousel className={`w-full transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CarouselContent>
              {officeImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <AspectRatio ratio={16/9} className="overflow-hidden rounded-xl shadow-lg">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div className={`mt-12 text-center transform transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-accountax-700 text-lg font-medium">
            Visit our offices in London, Manchester, Birmingham and Edinburgh
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficePictures;
