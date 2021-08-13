import React from 'react';
import Footer from './components/footer';
import { SiFacebook, SiInstagram, SiYoutube, SiTwitter } from 'react-icons/si';
import logo from '../../../src/images/logo/coopaidi.png';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                    <img style={{marginTop:'42px'}} src={logo} alt=""/>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Nosotros</Footer.Title>
                    <Footer.Link href="#">Historia</Footer.Link>
                    <Footer.Link href="#">Clientes</Footer.Link>
                    <Footer.Link href="#">Testimonios</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Servicios</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consultas</Footer.Link>
                    <Footer.Link href="#">Desarrollo</Footer.Link>
                    <Footer.Link href="#">Diseño</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contáctanos</Footer.Title>
                    <Footer.Link href="#">Puerto Maldonado</Footer.Link>
                    <Footer.Link href="#">Lima</Footer.Link>
                    <Footer.Link href="#">Cusco</Footer.Link>
                    <Footer.Link href="#">Arequipa</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><SiFacebook/>  Facebook</Footer.Link>
                    <Footer.Link href="#"><SiInstagram/>  Instagram</Footer.Link>
                    <Footer.Link href="#"><SiYoutube/>  Youtube</Footer.Link>
                    <Footer.Link href="#"><SiTwitter/>  Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <p style={{textAlign:'center',color:'#fff',backgroundColor:'#000'}}>&copy; 2020 Copyright Reservado by Haruto</p>
            </Footer.Wrapper>    
        </Footer>
    )
}