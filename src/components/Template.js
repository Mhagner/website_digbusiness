import React, { Children } from 'react'
import Footer from './Footer'
import Header from './Header'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'   

const Template = ({ children }) => {
    return (
        <>
            <Header />
            <WhatsAppWidget 
                phoneNumber="5562984730843" 
                companyName="Digital Business"
                textReplyTime="Atendimento Comercial"
                message='Olá, Em que posso te ajudar?'
                sendButton="Enviar mensagem"
            />
            {children}
            <Footer />
        </>
    )
}

export default Template