import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useState } from 'react';
import Proposito from '../svg/Proposito';
import Vision from '../svg/Vision';
import Valores from '../svg/Valores';

export default function AccordionNosotros() {
    const [activeAccordion, setActiveAccordion] = useState<string>('panel2');

    const Active = "text-browni border-browni";
    const Inactive = "text-[#7C7C7C]";

    const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setActiveAccordion(isExpanded ? panel : panel);
        console.log(event)
    };

    return (
        <div className='grid'>
            <Accordion
                expanded={activeAccordion === 'panel1'}
                onChange={handleAccordionChange('panel1')}
                className={`accordionStyle ${activeAccordion === 'panel1' ? Active : Inactive}`}>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{minHeight: 'none'}}
                >
                    <div className={`flex items-center justify-items-center gap-[8px] ${activeAccordion === 'panel1' ? Active : Inactive}`}>
                        <Proposito color={activeAccordion === 'panel1' ? '#513214' : "#7C7C7C"} />
                        <p className='font-satoshi font-medium text-[17px]'>Propósito</p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='p2 text-justify'>
                        En Insamay, facilitamos la regeneración de negocios y ecosistemas a través de pausas estratégicas que catalizan transformaciones profundas, promoviendo un impacto sostenible y consciente.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={activeAccordion === 'panel2'}
                onChange={handleAccordionChange('panel2')}
                className={`accordionStyle ${activeAccordion === 'panel2' ? Active : Inactive}`}>
                <AccordionSummary
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{minHeight: 'none'}}
                >
                    <div className={`flex items-center justify-items-center gap-[8px] ${activeAccordion === 'panel2' ? Active : Inactive}`}>
                        <Vision color={activeAccordion === 'panel2' ? '#513214' : "#7C7C7C"} />
                        <p className='font-satoshi font-medium text-[17px]'>Visión</p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='p2 text-justify'>
                        Ser co-creadores de una mejor humanidad, viviendo en consciencia y unidad.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={activeAccordion === 'panel3'}
                onChange={handleAccordionChange('panel3')}
                className={`accordionStyle ${activeAccordion === 'panel3' ? Active : Inactive}`}>
                <AccordionSummary
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{minHeight: 'none'}}
                >
                    <div className={`flex items-center justify-items-center gap-[8px] ${activeAccordion === 'panel3' ? Active : Inactive}`}>
                        <Valores color={activeAccordion === 'panel3' ? '#513214' : "#7C7C7C"} />
                        <p className='font-satoshi font-medium text-[17px]'>Valores</p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='p2 text-justify'>
                        Somos socios. Somos otorgadores. Somos integradores. Somos uno.
                    </p>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
