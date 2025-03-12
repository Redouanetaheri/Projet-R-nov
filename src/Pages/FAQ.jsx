import React, { useState } from "react";


const FAQ = () => {
    const faqData = [
        {
          question: "Qu'est-ce que MonProjetRénov ?",
          answer: "MonProjetRénov est une plateforme permettant aux utilisateurs de gérer leurs projets de rénovation.",
        },
        {
          question: "Comment créer un compte ?",
          answer: "Vous pouvez créer un compte en cliquant sur 'S'inscrire' et en remplissant le formulaire d'inscription.",
        },
        {
          question: "Les paiements en ligne sont-ils sécurisés ?",
          answer: "Oui, tous les paiements sont sécurisés et conformes aux réglementations en vigueur.",
        },
        {
          question: "Comment suivre l'avancement de mon projet ?",
          answer: "Vous pouvez suivre l'évolution de votre projet directement depuis votre espace personnel.",
        },
        {
          question: "Comment contacter le support ?",
          answer: "Vous pouvez nous contacter à tout moment via l'adresse : support@monprojetrenov.com.",
        },
      ];
    
      const [activeIndex, setActiveIndex] = useState(null);
    
      const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };

    return <>
<div style={{ backgroundColor: '#D4D6C9', minHeight: '100vh', padding: '50px 0' }}>
    <div className="faq-container" >
      <h1>Foire Aux Questions (FAQ)</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <span className={activeIndex === index ? "arrow up" : "arrow down"}>▼</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
    </div>
    </>;
}
 
export default FAQ;