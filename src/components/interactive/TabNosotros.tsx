import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Proposito from '../svg/Proposito';
import Vision from '../svg/Vision';
import Valores from '../svg/Valores';

interface TabPanelProps {
    children?: React.ReactNode;
    index: string;
    value: string;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ padding: "0px", paddingTop: "22px"}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function TabNosotros() {
    const [value, setValue] = React.useState('Vision');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        console.log(event)
    };

    return (
        <Box sx={{ width: '100%', gap: "22px" }}>
            <Tabs value={value} onChange={handleChange}
                indicatorColor="none"
                textColor='black'>
                <Tab iconPosition="start" disableRipple
                    sx={{
                        fontFamily: 'Satoshi',
                        fontWeight: 'medium',
                        fontSize: '20px',
                        gap: '6px',
                        textTransform: 'none',
                        padding: "14px 8.5px 0px 8.5px",
                        width: "132px",
                        height: "40px",
                        minHeight: "40px",
                        display: "flex",
                        alignItems: "flex-end",
                        borderTop: "solid 2px transparent",
                        borderColor: value === "Proposito" ? '#513214' : 'transparent',
                        color: value === "Proposito" ? '#513214' : "#7C7C7C",
                        transitionProperty: 'all',
                        transitionTimingFunction: 'linear'
                    }}
                    label="Propósito"
                    value="Proposito"
                    icon={<Proposito color={value === "Proposito" ? '#513214' : "#7C7C7C"} />}
                />
                <Tab iconPosition="start" disableRipple
                    sx={{
                        fontFamily: 'Satoshi',
                        fontWeight: 'medium',
                        fontSize: '20px',
                        gap: '6px',
                        textTransform: 'none',
                        padding: "14px 8.5px 0px 8.5px",
                        width: "132px",
                        height: "40px",
                        minHeight: "40px",
                        display: "flex",
                        alignItems: "flex-end",
                        borderTop: "solid 2px transparent",
                        borderColor: value === "Vision" ? '#513214' : 'transparent',
                        color: value === "Vision" ? '#513214' : "#7C7C7C",
                    }}
                    label="Visión"
                    value="Vision"
                    icon={<Vision color={value === "Vision" ? '#513214' : "#7C7C7C"} />}
                />
                <Tab iconPosition="start" disableRipple
                    sx={{
                        fontFamily: 'Satoshi',
                        fontWeight: 'medium',
                        fontSize: '20px',
                        gap: '6px',
                        textTransform: 'none',
                        padding: "14px 8.5px 0px 8.5px",
                        width: "132px",
                        height: "40px",
                        minHeight: "40px",
                        display: "flex",
                        alignItems: "flex-end",
                        borderTop: "solid 2px transparent",
                        borderColor: value === "Valores" ? '#513214' : 'transparent',
                        color: value === "Valores" ? '#513214' : "#7C7C7C",
                    }}
                    label="Valores"
                    value="Valores"
                    icon={<Valores color={value === "Valores" ? '#513214' : "#7C7C7C"} />}
                />
            </Tabs>
            <CustomTabPanel value={value} index="Proposito" >
                <p className='p2 h-[78px]'>
                    En Insamay, facilitamos la regeneración de negocios y ecosistemas a través de pausas estratégicas que catalizan transformaciones profundas, promoviendo un impacto sostenible y consciente.
                </p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index="Vision">
                <p className='p2 h-[78px]'>
                    Ser co-creadores de una mejor humanidad, viviendo en consciencia y unidad.
                </p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index="Valores">
                <p className='p2 h-[78px]'>
                    Somos socios. Somos otorgadores. Somos integradores. Somos uno.
                </p>
            </CustomTabPanel>
        </Box>
    );
}