import React from 'react';
import { Stethoscope, Zap, Dumbbell, Waves, Target, Activity, Contact } from 'lucide-react';
import { Link } from 'react-router-dom'

const Treatments = () => {
  const treatments = [
    {
      icon: Stethoscope,
      title: "Avaliação Completa",
      description: "Análise detalhada da condição do joelho com testes específicos e diagnóstico preciso.",
      duration: "60 min",
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Eletroterapia",
      description: "Uso de correntes elétricas para alívio da dor e aceleração do processo de cicatrização.",
      duration: "30 min",
      color: "bg-green-500"
    },
    {
      icon: Dumbbell,
      title: "Fortalecimento Muscular",
      description: "Exercícios específicos para fortalecer a musculatura do quadríceps e posteriores da coxa.",
      duration: "45 min",
      color: "bg-purple-500"
    },
    {
      icon: Waves,
      title: "Terapia Manual",
      description: "Técnicas manuais para mobilização articular e liberação de tensões musculares.",
      duration: "40 min",
      color: "bg-teal-500"
    },
    {
      icon: Target,
      title: "Propriocepção",
      description: "Treinamento do equilíbrio e coordenação para prevenção de novas lesões.",
      duration: "35 min",
      color: "bg-orange-500"
    },
    {
      icon: Activity,
      title: "Exercícios Funcionais",
      description: "Movimentos que simulam atividades do dia a dia para retorno às funções normais.",
      duration: "50 min",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Principais <span className="text-blue-600">Tratamentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos uma abordagem multidisciplinar com técnicas modernas e comprovadas 
            cientificamente para garantir a melhor recuperação do seu joelho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${treatment.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <treatment.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{treatment.title}</h3>
                <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full font-medium">
                  {treatment.duration}
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed">{treatment.description}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
          
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 group">
                    <span>Saiba mais</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
            
              </div>
            </div>
          ))}
        </div>

        {/* Treatment Process */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Processo de Tratamento</h3>
            <p className="text-lg text-gray-600">Como funciona o seu tratamento conosco</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Avaliação", description: "Análise completa da sua condição" },
              { step: "02", title: "Diagnóstico", description: "Identificação precisa do problema" },
              { step: "03", title: "Plano de Tratamento", description: "Protocolo personalizado para você" },
              { step: "04", title: "Acompanhamento", description: "Monitoramento da sua evolução" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;