import React, { useState, useEffect } from 'react';

const KneeAnimation = () => {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('knee-animation');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const kneeParts = {
    femur: {
      name: "Fêmur",
      description: "Osso da coxa que forma a parte superior da articulação do joelho"
    },
    tibia: {
      name: "Tíbia",
      description: "Osso principal da perna que suporta o peso corporal"
    },
    patella: {
      name: "Patela",
      description: "Osso sesamoide que protege a articulação e melhora a eficiência muscular"
    },
    meniscus: {
      name: "Menisco",
      description: "Cartilagem que absorve impactos e estabiliza a articulação"
    },
    ligaments: {
      name: "Ligamentos",
      description: "Estruturas que conectam os ossos e proporcionam estabilidade"
    }
  };

  return (
    <section id="knee-animation" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
             Anatomia do <span className="text-blue-600">Joelho</span>
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
             Explore a anatomia do joelho de forma interativa. Passe o mouse sobre as diferentes partes 
             para conhecer mais sobre cada estrutura.
          </p>
         </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* SVG Animation */}
          <div className="relative">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <svg 
                width="100%" 
                height="auto" 
                viewBox="0 0 400 500" 
                className="w-full h-auto max-w-sm lg:max-w-md mx-auto"
              >
                {/* Fêmur */}
                <path
                  d="M150 50 L250 50 L260 80 L250 120 L200 140 L150 120 L140 80 Z"
                  fill={hoveredPart === 'femur' ? '#2563eb' : '#e5e7eb'}
                  stroke="#374151"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300 hover:fill-blue-500"
                  onMouseEnter={() => setHoveredPart('femur')}
                  onMouseLeave={() => setHoveredPart(null)}
                />
                
                {/* Patela */}
                <ellipse
                   cx="200"
                   cy="160"
                   rx="25"
                   ry="35"
                   fill={hoveredPart === 'patella' ? '#2563eb' : '#d1d5db'}
                   stroke="#374151"
                   strokeWidth="2"
                   className="cursor-pointer transition-all duration-300 hover:fill-blue-500"
                   onMouseEnter={() => setHoveredPart('patella')}
                   onMouseLeave={() => setHoveredPart(null)}
                />
                
                {/* Tíbia */}
                <path
                   d="M160 200 L240 200 L250 230 L240 350 L160 350 L150 230 Z"
                   fill={hoveredPart === 'tibia' ? '#2563eb' : '#e5e7eb'}
                   stroke="#374151"
                   strokeWidth="2"
                   className="cursor-pointer transition-all duration-300 hover:fill-blue-500"
                   onMouseEnter={() => setHoveredPart('tibia')}
                   onMouseLeave={() => setHoveredPart(null)}
                />
                
                {/* Menisco Medial */}
                <path
                   d="M170 180 Q200 175 230 180 Q225 190 200 195 Q175 190 170 180"
                   fill={hoveredPart === 'meniscus' ? '#2563eb' : '#9ca3af'}
                   stroke="#374151"
                   strokeWidth="1"
                   className="cursor-pointer transition-all duration-300 hover:fill-blue-500"
                   onMouseEnter={() => setHoveredPart('meniscus')}
                   onMouseLeave={() => setHoveredPart(null)}
                />
                
                {/* Ligamentos */}
                <g
                   className="cursor-pointer"
                   onMouseEnter={() => setHoveredPart('ligaments')}
                   onMouseLeave={() => setHoveredPart(null)}
                >
                   <line
                     x1="180"
                     y1="140"
                     x2="180"
                     y2="200"
                     stroke={hoveredPart === 'ligaments' ? '#2563eb' : '#6b7280'}
                     strokeWidth="3"
                     className="transition-all duration-300"
                   />
                   <line
                     x1="220"
                     y1="140"
                     x2="220"
                     y2="200"
                     stroke={hoveredPart === 'ligaments' ? '#2563eb' : '#6b7280'}
                     strokeWidth="3"
                     className="transition-all duration-300"
                   />
                </g>

                {/* Animation Elements */}
                <g className={`transition-all duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                   <circle cx="100" cy="100" r="3" fill="#3b82f6" className="animate-pulse">
                     <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                   </circle>
                   <circle cx="300" cy="150" r="3" fill="#3b82f6" className="animate-pulse">
                     <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" begin="0.5s" />
                   </circle>
                   <circle cx="120" cy="300" r="3" fill="#3b82f6" className="animate-pulse">
                     <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" begin="1s" />
                   </circle>
                </g>
              </svg>
            </div>
          </div>

          {/* Information Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              {hoveredPart ? (
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-blue-600">
                    {kneeParts[hoveredPart as keyof typeof kneeParts].name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {kneeParts[hoveredPart as keyof typeof kneeParts].description}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Articulação do Joelho</h3>
                  <p className="text-gray-700 leading-relaxed">
                    O joelho é uma das articulações mais complexas do corpo humano. Passe o mouse 
                    sobre as diferentes partes da anatomia para conhecer mais sobre cada estrutura 
                    e sua função na biomecânica do movimento.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-xl lg:text-2xl font-bold text-blue-600">4</div>
                <div className="text-xs lg:text-sm text-gray-700">Ligamentos Principais</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-xl lg:text-2xl font-bold text-blue-600">2</div>
                <div className="text-xs lg:text-sm text-gray-700">Meniscos</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-xl lg:text-2xl font-bold text-blue-600">3</div>
                <div className="text-xs lg:text-sm text-gray-700">Ossos Principais</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-xl lg:text-2xl font-bold text-blue-600">130°</div>
                <div className="text-xs lg:text-sm text-gray-700">Amplitude de Flexão</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KneeAnimation;