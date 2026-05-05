"use client";

import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    category: "Character & Work Ethic",
    questions: [
      {
        q: "What drives you as a developer?",
        a: "I am deeply passionate about bridging the gap between complex backend logic and immersive frontend experiences. I believe in continuous learning and building systems that are both robust and beautifully designed."
      },
      {
        q: "How do you handle tight deadlines and high-pressure situations?",
        a: "I prioritize tasks effectively, break down complex problems into manageable milestones, and maintain clear communication with my team and stakeholders to ensure expectations are met without compromising quality."
      }
    ]
  },
  {
    category: "Specializations & Roles",
    questions: [
      {
        q: "What are your core technical specializations?",
        a: "I specialize in the Next.js ecosystem, real-time architecture, and multimedia production. I'm highly proficient in React, Node.js, and modern CSS/UI frameworks like Material UI."
      },
      {
        q: "What roles do you excel in?",
        a: "I thrive as a Full-Stack Developer and Creative Builder, taking ownership of projects from conceptualization to deployment. I enjoy both leading architectural decisions and diving deep into implementation details."
      }
    ]
  },
  {
    category: "Experience & Projects",
    questions: [
      {
        q: "Can you highlight a challenging project you recently completed?",
        a: "[Template: Briefly describe a recent project, the core problem it solved, the technologies used, and the impact it had.]"
      },
      {
        q: "How do you approach open-source contributions and public work?",
        a: "I actively maintain a portfolio of public repositories and open-source contributions, which you can find in my Project Gallery. I believe in giving back to the community and building in public."
      }
    ]
  },
  {
    category: "Education & Certifications",
    questions: [
      {
        q: "What is your educational background?",
        a: "[Template: Detail your formal education, degrees, and relevant academic achievements here.]"
      },
      {
        q: "Do you hold any relevant industry certifications?",
        a: "[Template: List relevant certifications, e.g., AWS Certified Solutions Architect, Google Professional Cloud Developer, etc.]"
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Insights into my background, work ethic, and technical expertise for potential employers and clients.
        </Typography>
      </Box>

      {faqs.map((section, index) => (
        <Box key={index} sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            {section.category}
          </Typography>
          {section.questions.map((faq, i) => (
            <Accordion key={i} sx={{ mb: 1, '&:before': { display: 'none' }, boxShadow: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${index}-${i}-content`}
                id={`panel-${index}-${i}-header`}
                sx={{ '& .MuiAccordionSummary-content': { my: 2 } }}
              >
                <Typography variant="h6" sx={{ fontWeight: 500 }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {faq.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          {index < faqs.length - 1 && <Divider sx={{ mt: 6, opacity: 0.5 }} />}
        </Box>
      ))}
    </Container>
  );
}
