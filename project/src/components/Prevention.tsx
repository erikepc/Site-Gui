import React from 'react';
import { Shield, Activity, Utensils, Moon, AlertTriangle, CheckCircle } from 'lucide-react';

const Prevention = () => {
  const preventionTips = [
    {
      icon: Activity,
      title: "Exercícios Regulares",
      description: "Mantenha uma rotina de exercícios para fortalecer os músculos ao redor do joelho.",
      tips: [
        "Agachamentos com técnica correta",
        "Fortalecimento do quadríceps",
        "Exercícios de propriocepção",
        "Alongamentos diários"
      ]
    },
    {
      icon: Shield,
      title: "Proteção Adequada",
      description: "Use equipamentos de proteção durante atividades esportivas e físicas.",
      tips: [
        "Joelheiras durante esportes",
        "Calçados adequados para cada atividade",
        "Aquecimento antes dos exercícios",
        "Técnica correta nos movimentos"
      ]
    },
    {
      icon: Utensils,
      title: "Alimentação Saudável",
      description: "Uma dieta balanceada contribui para a saúde das articulações e cartilagens.",
      tips: [
        "Alimentos ricos em ômega-3",
        "Vitamina D e cálcio",
        "Antioxidantes naturais",
        "Hidratação adequada"
      ]
    },
    {
      icon: Moon,
      title: "Descanso e Recuperação",
      description: "O descanso adequado é essencial para a regeneração dos tecidos.",
      tips: [
        "8 horas de sono por noite",
        "Intervalos entre treinos intensos",
        "Técnicas de relaxamento",
        "Massagem terapêutica"
      ]
    }
  ];

  const warningSigns = [
    "Dor persistente no joelho",
    "Inchaço ou vermelhidão",
    "Dificuldade para dobrar o joelho",
    "Sensação de instabilidade",
    "Estalos ou crepitação",
    "Limitação de movimento"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dicas de <span className="text-blue-600">Prevenção</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prevenir é sempre melhor que remediar. Siga essas orientações para manter 
            seus joelhos saudáveis e evitar lesões futuras.
          </p>
        </div>

        {/* Prevention Tips */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {preventionTips.map((tip, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <tip.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tip.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{tip.description}</p>
              
              <ul className="space-y-2">
                {tip.tips.map((item, tipIndex) => (
                  <li key={tipIndex} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Warning Signs */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sinais de Alerta</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fique atento aos sinais que podem indicar problemas no joelho. 
                Se você apresentar algum destes sintomas, procure ajuda profissional.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {warningSigns.map((sign, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-800">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6111563/pexels-photo-6111563.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Cuidados com o joelho" 
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Precisa de Orientação Profissional?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Se você tem dúvidas sobre a saúde do seu joelho ou apresenta algum dos sinais de alerta, 
              não hesite em buscar ajuda profissional.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prevention;