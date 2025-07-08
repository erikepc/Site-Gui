@@ .. @@
import React from 'react';
import { Award, Users, Clock, BookOpen, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50/80 via-white/90 to-blue-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
-        <div className="grid lg:grid-cols-2 gap-12 items-center">
+        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
           {/* Content */}
           <div className="space-y-6">
             <div className="space-y-4">
               <div className="inline-flex items-center space-x-2 bg-blue-100/50 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                 <Award className="w-4 h-4" />
                 <span>Profissional Especializado</span>
               </div>
               
-              <h2 className="text-4xl font-bold text-gray-900">
+              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                 Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Guilherme Segura</span>
               </h2>
               
-              <p className="text-lg text-gray-600 leading-relaxed">
+              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                 Fisioterapeuta especializado em reabilitação de joelho com mais de 8 anos de experiência. 
                 Formado pela Universidade de São Paulo (USP) com especialização em Fisioterapia Ortopédica 
                 e Traumatológica.
               </p>
               
               <p className="text-gray-600 leading-relaxed">
                 Minha missão é proporcionar tratamentos personalizados e eficazes, utilizando técnicas 
                 modernas e baseadas em evidências científicas para garantir a melhor recuperação possível 
                 dos meus pacientes.
               </p>
             </div>

             {/* Qualifications */}
             <div className="space-y-4">
-              <h3 className="text-xl font-semibold text-gray-900">Formação e Especializações</h3>
+              <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Formação e Especializações</h3>
               <div className="space-y-3">
                 <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100/30">
                   <BookOpen className="w-5 h-5 text-blue-600" />
-                  <span className="text-gray-700">Graduação em Fisioterapia - USP</span>
+                  <span className="text-sm lg:text-base text-gray-700">Graduação em Fisioterapia - USP</span>
                 </div>
                 <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100/30">
                   <Award className="w-5 h-5 text-blue-600" />
-                  <span className="text-gray-700">Especialização em Fisioterapia Ortopédica</span>
+                  <span className="text-sm lg:text-base text-gray-700">Especialização em Fisioterapia Ortopédica</span>
                 </div>
                 <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100/30">
                   <Target className="w-5 h-5 text-blue-600" />
-                  <span className="text-gray-700">Certificação em Reabilitação de Joelho</span>
+                  <span className="text-sm lg:text-base text-gray-700">Certificação em Reabilitação de Joelho</span>
                 </div>
                 <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100/30">
                   <Heart className="w-5 h-5 text-blue-600" />
-                  <span className="text-gray-700">Curso de Terapia Manual Ortopédica</span>
+                  <span className="text-sm lg:text-base text-gray-700">Curso de Terapia Manual Ortopédica</span>
                 </div>
               </div>
             </div>

             {/* Stats */}
-            <div className="grid grid-cols-3 gap-6 pt-6">
+            <div className="grid grid-cols-3 gap-3 lg:gap-6 pt-6">
               <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-blue-100/30">
-                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">500+</div>
-                <div className="text-sm text-gray-600">Pacientes Tratados</div>
+                <div className="text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">500+</div>
+                <div className="text-xs lg:text-sm text-gray-600">Pacientes Tratados</div>
               </div>
               <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-blue-100/30">
-                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">8+</div>
-                <div className="text-sm text-gray-600">Anos de Experiência</div>
+                <div className="text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">8+</div>
+                <div className="text-xs lg:text-sm text-gray-600">Anos de Experiência</div>
               </div>
               <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-blue-100/30">
-                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">99%</div>
-                <div className="text-sm text-gray-600">Taxa de Satisfação</div>
+                <div className="text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">99%</div>
+                <div className="text-xs lg:text-sm text-gray-600">Taxa de Satisfação</div>
               </div>
             </div>
           </div>

           {/* Image */}
           <div className="relative">
             <div className="relative z-10">
               <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-blue-100/30">
                 <img 
                   src="Gui.jpg" 
                   alt="Guilherme Segura - Fisioterapeuta" 
-                  className="w-full h-full object-cover rounded-2xl"
+                  className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-2xl"
                 />
               </div>
               
-              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-3xl shadow-xl backdrop-blur-sm">
+              <div className="absolute -bottom-3 -right-3 lg:-bottom-6 lg:-right-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 lg:p-6 rounded-3xl shadow-xl backdrop-blur-sm">
                 <div className="text-center">
-                  <Users className="w-8 h-8 mx-auto mb-2" />
-                  <div className="text-2xl font-bold">100+</div>
-                  <div className="text-sm">Joelhos Reabilitados</div>
+                  <Users className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-2" />
+                  <div className="text-lg lg:text-2xl font-bold">100+</div>
+                  <div className="text-xs lg:text-sm">Joelhos Reabilitados</div>
                 </div>
               </div>
             </div>
             
             {/* Background Elements */}
-            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-full opacity-50 backdrop-blur-sm"></div>
-            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300/20 rounded-full opacity-30 backdrop-blur-sm"></div>
+            <div className="absolute -top-3 -left-3 lg:-top-6 lg:-left-6 w-12 h-12 lg:w-24 lg:h-24 bg-blue-400/20 rounded-full opacity-50 backdrop-blur-sm"></div>
+            <div className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 w-16 h-16 lg:w-32 lg:h-32 bg-blue-300/20 rounded-full opacity-30 backdrop-blur-sm"></div>
           </div>
         </div>
       </div>
     </section>
   );
 };

 export default About;