import React from 'react';
import { Activity, Shield, Zap, Heart, Target, Award } from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      icon: Activity,
      title: "Lesões Ligamentares",
      description: "Tratamento especializado para lesões de LCA, LCP, LCM e LCL com protocolos específicos de reabilitação.",
      features: ["Ruptura de LCA", "Lesão de Menisco", "Instabilidade Ligamentar"]
    },
    {
      icon: Shield,
      title: "Condromalácia Patelar",
      description: "Abordagem completa para tratamento da síndrome patelofemoral e dor anterior no joelho.",
      features: ["Dor na Patela", "Crepitação", "Fortalecimento Específico"]
    },
    {
      icon: Zap,
      title: "Pós-Cirúrgico",
      description: "Reabilitação pós-operatória especializada para cirurgias de joelho, incluindo artroscopia.",
      features: ["Artroscopia", "Reconstrução Ligamentar", "Prótese de Joelho"]
    },
    {
      icon: Heart,
      title: "Artrose de Joelho",
      description: "Tratamento conservador para osteoartrite, focando no alívio da dor e melhora da função.",
      features: ["Controle da Dor", "Mobilidade Articular", "Fortalecimento Muscular"]
    },
    {
      icon: Target,
      title: "Lesões Esportivas",
      description: "Reabilitação específica para atletas com foco no retorno seguro ao esporte.",
      features: ["Retorno ao Esporte", "Prevenção", "Performance"]
    },
    {
      icon: Award,
      title: "Biomecânica",
      description: "Análise e correção de padrões de movimento para otimizar a função do joelho.",
      features: ["Análise da Marcha", "Correção Postural", "Movimento Funcional"]
    }
  ];

  return (
    <section id="specialties" className="py-20 bg-gradient-to-br from-white/90 via-blue-50/50 to-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100/50 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Especialidades</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Especialidades em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Joelho</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tratamentos especializados para todas as condições que afetam a articulação do joelho, 
            com abordagem personalizada e baseada em evidências científicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-lg border border-blue-100/30 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 transform group-hover:scale-110">
                <specialty.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{specialty.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{specialty.description}</p>
              
              <div className="space-y-2">
                {specialty.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;