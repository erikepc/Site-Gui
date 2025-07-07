import React from 'react';
import { MapPin, Clock, Car, Bus, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50/80 via-white/90 to-blue-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100/50 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            <span>Localização</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Localização</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos estrategicamente localizados em Bauru-SP para melhor atendê-lo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Google Maps Integration */}
          <div className="relative">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-blue-100/30">
              <div className="h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.8234567890123!2d-49.0606!3d-22.3147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67af0f431faf%3A0x4e7ba8c2e5f6a8b9!2sR.%20Batista%20de%20Carvalho%2C%2012-50%20-%20Centro%2C%20Bauru%20-%20SP%2C%2017015-170!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Clínica Guilherme Segura"
                  className="rounded-t-3xl"
                />
              </div>
              
              <div className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Clínica de Fisioterapia</h4>
                    <p className="text-gray-600">R. Batista de Carvalho, 12-50 - Centro</p>
                    <p className="text-gray-600">Bauru - SP, 17015-170</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/TtBh1rE9ye8doo1LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-all duration-300"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Ver no Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Localização</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Endereço Completo</h4>
                    <p className="text-gray-600">R. Batista de Carvalho, 12-50 - Centro</p>
                    <p className="text-gray-600">Bauru - SP, CEP: 17015-170</p>
                    <p className="text-sm text-gray-500">Região central, fácil acesso</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex-shrink-0">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Estacionamento</h4>
                    <p className="text-gray-600">Vagas disponíveis no local</p>
                    <p className="text-sm text-gray-500">Gratuito para pacientes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex-shrink-0">
                    <Bus className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Transporte Público</h4>
                    <p className="text-gray-600">Próximo a pontos de ônibus</p>
                    <p className="text-sm text-gray-500">Linhas principais da cidade</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Horários de Funcionamento</h4>
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
                <Phone className="w-5 h-5" />
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

export default Location;