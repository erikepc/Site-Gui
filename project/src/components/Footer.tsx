import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Heart, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900/95 to-blue-900/95 text-white backdrop-blur-lg">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/485177390_1072000108069685_4782085792638731522_n.png"
                alt="Guilherme Segura - Fisioterapia"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Fisioterapia especializada em joelho com mais de 8 anos de experiência.
              Tratamentos personalizados para sua completa recuperação.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/GuilhermeSeguraFisioterapeuta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/fisioguisegura?igsh=MTU1MDE2ZWkwNTNyNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/guilherme-segura-701299106/?originalSubdomain=br"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300"
                >
                  Tratamentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Especialidades</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors">Lesões Ligamentares</li>
              <li className="hover:text-white transition-colors">Condromalácia Patelar</li>
              <li className="hover:text-white transition-colors">Reabilitação Pós-Cirúrgica</li>
              <li className="hover:text-white transition-colors">Artrose de Joelho</li>
              <li className="hover:text-white transition-colors">Lesões Esportivas</li>
              <li className="hover:text-white transition-colors">Análise Biomecânica</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(14) 98179-1249</p>
                  <p className="text-sm text-gray-400">WhatsApp disponível</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">contato@guilhermesegura.com.br</p>
                  <p className="text-sm text-gray-400">Resposta em 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">R. Francisco Ortega, 236</p>
                  <p className="text-gray-300">Igaraçu do Tietê - SP</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Seg-Sex: 7h às 19h</p>
                  <p className="text-gray-300">Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Guilherme Segura Fisioterapia. Todos os direitos reservados.</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-400">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>para cuidar da sua saúde</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            {/*
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-4">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">LGPD</a>
              <a href="#" className="hover:text-white transition-colors">Código de Ética</a>
              
            </div>
            
            {/* Security Notice */}
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Site protegido contra ataques e dados criptografados</span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-900/80 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-100 text-sm">
            <strong>Emergências:</strong> Em caso de lesão grave, procure imediatamente um pronto-socorro.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;