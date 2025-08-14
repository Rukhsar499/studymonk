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
        title: "Why Choose Study Monks for your Child’s Cambridge Curriculum Journey.",
        content: `As a parent, you want the absolute best for your child's education. The Cambridge
        Curriculum offers a strong foundation, but you might be wondering: How can I
        ensure my child not only keeps up but thrives in this demanding curriculum? Is rote
        memorization enough for success, or are there deeper skills they need to develop?
        How can I bridge the gap between what's taught in school and the specific needs of
        my child? Here at Study Monk, we address these concerns and go beyond traditional
        learning to empower your child on their Cambridge journey.`
    },
    {
        id: "panel2",
        title: "3 Reasons Why We Are The Perfect Partners",
        content: `Building Blocks of Knowledge: One Engaging Lesson at a Time
        We take the complexity out of the Cambridge Curriculum with engaging, bite-sized
        lessons that act as building blocks for a strong foundation. Imagine your child
        asking "Why?" and "How?" - a sign that their natural curiosity is flourishing. This sets
        them on a path of learning, that benefits their academic and professional careers.
        Beyond the Textbook: Equipping Your Child with Future-Ready Skills
        We equip your child with critical thinking, problem-solving, communication, and
        collaboration skills essential for success in the 21st century. Imagine your child
        confidently tackling complex problems and build skills that will distinguish them in
        any challenge they encounter.
        
        Bridging the Gap: Personalized Learning that Complements the Classroom
        Think of us as a powerful complement to classroom learning. We bridge the gap
        between classroom learning and your childs specific needs. Our personalized
        learning approach ensures targeted instruction to solidify concepts, address learning
        gaps, and accelerate their progress.`
    },
    {
        id: "panel3",
        title: "How much flexibility does Study Monks offer on choosing subjects for my child ?",
        content: `Ultimately, the choice is yours! We offer individual enrolment in English,
        Mathematics and Science. However, for a truly enriching experience that
        strengthens core skills and aligns with the spirit of the Cambridge Curriculum, we
        highly recommend all three subjects! Opting for all three unlocks a secret weapon -
        tutor flexibility that allows tutors to adjust the pace within a class and maximising
        the benefits of our finely tuned monthly calendars.`
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
                        <Typography>{item.content}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
