"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/material/styles";

interface CustomAccordionSummaryProps {
    isexpanded?: boolean;
}

const CustomAccordionSummary = styled(AccordionSummary, {
  shouldForwardProp: (prop) => prop !== "isexpanded",
})<CustomAccordionSummaryProps>(({ isexpanded }) => ({
  backgroundColor: isexpanded ? "#001F3F" : "#fff",
  color: isexpanded ? "#fff" : "#001F3F",
  fontFamily: "Poppins, sans-serif", // 🔹 AccordionSummary ke text pe
  "& .MuiTypography-root": {
    fontFamily: "Poppins, sans-serif", // 🔹 Typography component ke liye
  },
  "&:hover": {
    backgroundColor: "#001F3F",
    color: "#fff",
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
  },
  "& .MuiSvgIcon-root": {
    color: isexpanded ? "#fff" : "#001F3F",
    transition: "color 0.3s ease",
    
  },
  transition: "all 0.3s ease",
}));


const accordionData = [
    {
      id: "panel1",
      title: "What qualities define a 'Wise Guardian' beyond academic expertise?",
      content: [
        {
          title: "",
          description:
            "Academic expertise is our baseline. A Wise Guardian is a master facilitator, skilled in guiding a small group of curious minds. They possess the empathy to understand each student's unique perspective, the patience to let a discussion unfold, and the wisdom to ensure every voice is heard. They don't just teach a subject; they cultivate a safe, collaborative space where our philosophy becomes a shared experience."
        }
      ]
    },
    {
      id: "panel2",
      title: "2. How does a micro-class specifically prepare my child for the IGCSE examination style?",
      content: [
        {
          title: "",
          description:
            "The IGCSEs are designed to reward students who can analyze, synthesize, and build a compelling argument. Our micro-class model is a dedicated training ground for these exact skills. By regularly articulating their ideas to a small group and learning from the perspectives of others, your child develops a deeper, more flexible understanding of the material. They don't just learn the content; they learn how to demonstrate their mastery with the clarity and confidence examiners look for."
        },
       
      ]
    },
   
  ];
  

export default function BottomAccordion() {
    const [expanded, setExpanded] = React.useState<string | false>("panel1");

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
          {accordionData.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{ mb: 2 }}
            >
              <CustomAccordionSummary
                expandIcon={expanded === item.id ? <ArrowBackIcon /> : <ArrowForwardIcon />}
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
                isexpanded={expanded === item.id}
              >
                <Typography component="span">{item.title}</Typography>
              </CustomAccordionSummary>
              <AccordionDetails>
                {item.content.map((c, index) => (
                  <div key={index} style={{ marginBottom: "12px" }}>
                    {c.title && (
                      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.5 }}>
                        {c.title}
                      </Typography>
                    )}
                    <Typography variant="body2">{c.description}</Typography>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      );
}
