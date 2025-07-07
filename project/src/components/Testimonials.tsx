import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Upload, Send } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    rating: 5,
    message: '',
    media: null as File | null
  });
  const [showForm, setShowForm] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      age: 45,
      condition: "Condromalácia Patelar",
      rating: 5,
      message: "Após 3 meses de tratamento com o Dr. Guilherme, consegui voltar a correr sem dor. O tratamento foi excepcional e muito profissional.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "Dezembro 2023"
    },
    {
      id: 2,
      name: "João Santos",
      age: 32,
      condition: "Lesão de LCA",
      rating: 5,
      message: "Excelente profissional! Me ajudou muito na recuperação pós-cirúrgica. Hoje estou 100% recuperado e voltei a jogar futebol.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "Janeiro 2024"
    },
    {
      id: 3,
      name: "Ana Costa",
      age: 28,
      condition: "Síndrome Patelofemoral",
      rating: 5,
      message: "Tratamento personalizado e muito eficaz. O Dr. Guilherme é muito atencioso e explica tudo detalhadamente. Recomendo!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "Novembro 2023"
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      age: 55,
      condition: "Artrose de Joelho",
      rating: 4,
      message: "Melhorei muito da dor no joelho. O tratamento foi longo mas valeu a pena. Agora consigo caminhar sem limitações.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "Outubro 2023"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleRatingClick = (rating: number) => {
    setNewTestimonial(prev => ({ ...prev, rating }));
  };

  const handleSubmitTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Obrigado pelo seu depoimento! Ele será analisado e publicado em breve.');
    setNewTestimonial({ name: '', rating: 5, message: '', media: null });
    setShowForm(false);
  };

  const renderStars = (rating: number, interactive = false, onClick?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={() => interactive && onClick && onClick(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que dizem nossos <span className="text-blue-600">Pacientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de pacientes que recuperaram a saúde do joelho com nossos tratamentos especializados.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="text-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              
              <div className="mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].message}"
              </blockquote>
              
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].age} anos • {testimonials[currentTestimonial].condition}
                </p>
                <p className="text-sm text-gray-500">{testimonials[currentTestimonial].date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add Testimonial Section */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compartilhe sua Experiência</h3>
            <p className="text-gray-600">
              Seu depoimento pode ajudar outras pessoas a encontrar o tratamento ideal para o joelho.
            </p>
          </div>

          {!showForm ? (
            <div className="text-center">
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Deixar Depoimento
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitTestimonial} className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTestimonial.name}
                    onChange={(e) => setNewTestimonial(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Avaliação *
                  </label>
                  {renderStars(newTestimonial.rating, true, handleRatingClick)}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seu Depoimento *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newTestimonial.message}
                    onChange={(e) => setNewTestimonial(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Conte sobre sua experiência com o tratamento..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Foto ou Vídeo (Opcional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Clique para fazer upload ou arraste o arquivo aqui</p>
                    <p className="text-sm text-gray-500 mt-1">PNG, JPG, MP4 até 10MB</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Depoimento</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;