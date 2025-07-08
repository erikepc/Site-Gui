import React, { useState } from 'react';
import { Phone, MessageCircle, Send, User, MapPin, Clock, Mail, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problemType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const problemTypes = [
    'Dor no joelho',
    'Lesão de LCA',
    'Condromalácia patelar',
    'Artrose',
    'Lesão de menisco',
    'Pós-cirúrgico',
    'Instabilidade',
    'Outro problema'
  ];

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
  };

  const validateForm = (): boolean => {
    if (!formData.name || formData.name.length < 2) {
      alert('Por favor, insira um nome válido (mínimo 2 caracteres).');
      return false;
    }
    
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$|^\d{10,11}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      alert('Por favor, insira um telefone válido.');
      return false;
    }
    
    if (!formData.problemType) {
      alert('Por favor, selecione o tipo de problema.');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    // Format WhatsApp message with sanitized data
    const message = `Olá! Gostaria de agendar uma consulta.

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Problema:* ${formData.problemType}
${formData.message ? `*Mensagem:* ${formData.message}` : ''}

Aguardo retorno para agendamento. Obrigado!`;

    const whatsappUrl = `https://wa.me/5514981791249?text=${encodeURIComponent(message)}`;
    
    // Simulate form processing
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setFormData({ name: '', phone: '', problemType: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white/90 via-blue-50/50 to-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100/50 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            <span>Entre em Contato</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agende sua consulta e dê o primeiro passo para recuperar a saúde do seu joelho. 
            Estamos aqui para ajudar você a voltar às suas atividades sem dor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-blue-100/30">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Agendar Consulta</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                    placeholder="Digite seu nome completo"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    maxLength={20}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                    placeholder="(14) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Problema no Joelho *
                </label>
                <select
                  name="problemType"
                  required
                  value={formData.problemType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                >
                  <option value="">Selecione o tipo de problema</option>
                  {problemTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem Adicional (Opcional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                  placeholder="Descreva seus sintomas ou dúvidas..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    <span>Enviar via WhatsApp</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50/70 backdrop-blur-sm rounded-xl border border-blue-200/50">
              <div className="flex items-start space-x-2">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-800">
                    <strong>Segurança e Privacidade:</strong> Seus dados são protegidos e não são armazenados. 
                    Ao clicar em "Enviar via WhatsApp", você será redirecionado para o WhatsApp com sua mensagem pré-formatada.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Telefone/WhatsApp</h4>
                    <p className="text-gray-600">(14) 98179-1249</p>
                    <p className="text-sm text-gray-500">Disponível para agendamentos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">contato@guilhermesegura.com.br</p>
                    <p className="text-sm text-gray-500">Resposta em até 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Localização</h4>
                    <p className="text-gray-600">R. Francisco Ortega, 236</p>
                    <p className="text-gray-600">Igaraçu do Tietê - SP, 17350-260</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Horário de Atendimento</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Sexta: 7h às 19h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-6 shadow-xl">
              <h4 className="text-xl font-bold mb-4">Contato Rápido</h4>
              <p className="mb-6 text-blue-100">
                Precisa de atendimento urgente ou tem dúvidas rápidas? 
                Entre em contato diretamente pelo WhatsApp.
              </p>
              <a
                href="https://wa.me/5514981791249?text=Olá! Preciso de informações sobre tratamento de joelho."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Direto</span>
              </a>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50/70 backdrop-blur-sm border border-red-200/50 rounded-3xl p-6">
              <h4 className="text-lg font-bold text-red-800 mb-2">Emergências</h4>
              <p className="text-red-700 text-sm">
                Em caso de lesão grave ou dor intensa súbita, procure imediatamente 
                um pronto-socorro ou hospital mais próximo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;