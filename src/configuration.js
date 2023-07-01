
// Home View pictures
import top_banner_image from '../src/pictures/home_banner.jpeg'

// Contact View pictures
import form_image from '../src/pictures/form_image.png'


export const configuration = {
    navigation:{
        home: {
            link: '/',
            name: 'Home'
        },
        view_one: {
            link: '/experience',
            name: 'Experience'
        },
        view_two: {
            link: '/gallery',
            name: 'Gallery'
        },
        contact: {
            link: '/contact',
            name: 'Contact'
        }
    },
    home: {
        banner: {
            image: top_banner_image,
            text: 'YOUR CURATED LINK TO THE UNITED STATES'
        },
    },
    experience: {

    },
    gallery: {

    },
    contact: {
        banner_title: 'LINK UP WITH US',
        banner_texts: [
            {
                id: 0,
                text: 'To learn more about how we can help you relocate to the US, or how to franchise with us, please leave your details or link up with us through the contact form below.'
            },
            {
                id: 1,
                text: `We'd love to see how we can help.`
            },
        ],

        logo_image: form_image,
        email_address: 'info@linkusa.us',

        // EMAIL CONFIGURATION
        service_id: 'service_7vze12y',
        template_id: 'template_v6scn9u',
        api_key: 'QMfNPlR-AhxLo-D29',

        company_banner_title: 'FIND OUT MORE',
        company_banner_text: 'We offer great franchise opportunities for entrepreneurs to provide our signature services to their own clients. Find out more how to tap into this growing market throughout the US.',
        company_banner_button_text: 'LEARN MORE',

    },
    footer: {
    }
}