import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quando devo procurar um fisioterapeuta para problemas no joelho?",
      answer: "Você deve procurar um fisioterapeuta quando apresentar dor persistente no joelho por mais de 48 horas, inchaço, dificuldade para caminhar, sensação de instabilidade ou após uma lesão. A avaliação precoce pode prevenir complicações e acelerar a recuperação."
    },
    {
      question: "Quanto tempo dura o tratamento fisioterapêutico para joelho?",
      answer: "O tempo de tratamento varia conforme a condição e gravidade da lesão. Problemas agudos podem levar de 2-6 semanas, enquanto condições crônicas ou pós-cirúrgicas podem necessitar de 3-6 meses. Cada caso é avaliado individualmente para um plano personalizado."
    },
    {
      question: "A fisioterapia para joelho é dolorosa?",
      answer: "O tratamento fisioterapêutico é planejado para ser confortável e progressivo. Pode haver algum desconforto inicial, mas não deve causar dor intensa. Utilizamos técnicas para controle da dor e ajustamos a intensidade conforme sua tolerância."
    },
    {
      question: "Posso fazer exercícios em casa durante o tratamento?",
      answer: "Sim, exercícios domiciliares são parte fundamental do tratamento. Fornecemos um programa personalizado de exercícios para casa, com orientações detalhadas sobre execução, frequência e progressão. Isso acelera a recuperação e mantém os ganhos obtidos nas sessões."
    },
    {
      question: "Qual a diferença entre condromalácia e artrose no joelho?",
      answer: "A condromalácia é o amolecimento da cartilagem da patela, comum em jovens e atletas. A artrose é o desgaste progressivo da cartilagem articular, mais comum após os 50 anos. Ambas causam dor, mas têm tratamentos específicos conforme a idade e atividade do paciente."
    },
    {
      question: "É possível evitar cirurgia no joelho com fisioterapia?",
      answer: "Em muitos casos, sim. A fisioterapia pode ser muito eficaz no tratamento conservador de lesões de menisco, condromalácia, artrose inicial e algumas lesões ligamentares. A avaliação precoce e tratamento adequado podem evitar ou postergar a necessidade cirúrgica."
    },
    {
      question: "Como é feita a avaliação fisioterapêutica do joelho?",
      answer: "A avaliação inclui histórico detalhado, exame físico com testes específicos, análise da marcha, avaliação da força muscular, amplitude de movimento e estabilidade articular. Também analisamos exames de imagem quando disponíveis para um diagnóstico preciso."
    },
    {
      question: "Atletas podem retornar ao esporte após lesão no joelho?",
      answer: "Sim, com tratamento adequado e reabilitação completa, a maioria dos atletas pode retornar ao esporte. O programa inclui fortalecimento específico, treinamento proprioceptivo, condicionamento esportivo e testes funcionais para garantir retorno seguro à atividade."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">
              Perguntas <span className="text-blue-600">Frequentes</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre problemas no joelho e tratamentos fisioterapêuticos. 
            Não encontrou sua pergunta? Entre em contato conosco.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para esclarecer todas as suas questões sobre 
              problemas no joelho e tratamentos disponíveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Fazer uma Pergunta
              </button>
              <a 
                href="https://wa.me/5514981791249?text=Olá! Tenho algumas dúvidas sobre tratamento de joelho."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
              >
                WhatsApp Direto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;