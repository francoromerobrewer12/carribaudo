// Navbar & Footer pictures
import navbar_logo from '../src/pictures/navbar_logo.png'
import footer_logo from '../src/pictures/footer_logo.png'

// Home View pictures
import top_banner_image from '../src/pictures/home_banner.jpeg'
import home_logo from '../src/pictures/home_logo.png'
import investment from '../src/pictures/investment.png'
import investment1 from '../src/pictures/investment1.png'
import investment2 from '../src/pictures/investment2.png'
import handshake from '../src/pictures/handshake.jpg'
import founder from '../src/pictures/founder.png'
import home_bottom_banner from '../src/pictures/home_bottom_banner.png'

// Franchise View pictures
import franchise_banner from '../src/pictures/franchise_banner.jpg'
import training from '../src/pictures/training.png'
import marketing from '../src/pictures/marketing.png'
import quality from '../src/pictures/quality.png'
import technology from '../src/pictures/technology.png'
import franchise_bottom_banner_image from '../src/pictures/franchise_bottom_banner_image.png'

// Team View pictures
import team_founder from '../src/pictures/team_founder.png'
import team_bottom_banner_image from '../src/pictures/team_bottom_banner_image.png'

// Contact View pictures
import contact_banner from '../src/pictures/contact_banner.jpeg'
import form_image from '../src/pictures/form_image.png'
import contact_bottom_banner_image from '../src/pictures/contact_bottom_banner_image.png'


export const configuration = {
    navbar: {
        logo: navbar_logo
    },
    home: {
        banner: {
            image: top_banner_image,
            text: 'YOUR CURATED LINK TO THE UNITED STATES'
        },
        section_one: {
            title: 'WHAT WE DO',
            texts: [
                {
                    id: 0,
                    text: 'Link USA is a consulting and business advisory services franchise with a passion for assisting entrepreneurs with all-in-one investment and relocation concierge services for a move to the United States. With a focus on  Spanish-speaking entrepreneurs, we can help you find the right investment opportunity in the USA and ensure a smooth and seamless relocation process.',
                },
                {
                    id: 1,
                    text: 'Our services include assistance with business and real estate purchases, contract analysis and drafting, business plan writing, and introduction into professional networks. We also provide personal assistance to help you open bank accounts, buy a house, find the right school for your children, and more.'
                }
            ],
            logo: home_logo
        },
        section_two: {
            title: 'HOW WE DO IT',
            above_list_text: 'At Link USA we specialize in three areas:',
            list: [
                {
                    id: 2,
                    text: '1. Investment Guidance'
                },
                {
                    id: 3,
                    text: '2. Personal Support'
                },
                {
                    id: 4,
                    text: '3. Professional Networks Access and Introduction'
                }
            ],
            under_list_text: 'While we assist all types of Spanish-speaking entrepreneurs, we focus specifically on Hispanic businesswomen and their families who are looking to invest in the USA.',

            items: [
                {
                    id: 5,
                    title: '1. INVESTMENT GUIDANCE',
                    text: 'We use our years of experience, deep industry knowhow, and strong local networks to link great investment opportunities with passionate entrepreneurs and businesspeople. We have expertise in business brokerage and real estate investment to help you find the perfect professional opportunity.',
                    image: investment
                },
                {
                    id: 6,
                    title: '2. PERSONAL SUPPORT',
                    text: 'Transitioning to new places can be a challenge for anyone. We assist and support with a wide range of personal needs in the USA, such as opening bank accounts, accessing local schools, and finding your new home.',
                    image: investment1
                },
                {
                    id: 7,
                    title: '3. NETWORK INTRODUCTIONS',
                    text: 'A new location often means new social and professional groups. We assist with introductions into professional networks to help reduce the complexities of building new social and business relationships in an unfamiliar context.',
                    image: investment2
                }
            ]
        },
        section_three: {
            title: 'BECOME A LINK USA FRANCHISEE',
            image: handshake,
            texts: [
                {
                    id: 8,
                    text: `Link USA has developed a proven methodology to bring our business model to budding entrepreneurs across the USA to enable them to offer their own clients the full range of Link USA's professional services.`,
                },
                {
                    id: 9,
                    text: `Latin American immigrants are one of the fastest growing segments of the US population and a third of Hispanic immigrants are more likely to own their own businesses compared to the overall US population. Be a part of a growing market that is a huge contributor to job creation and a successful US economy.`,
                }
            ],
            button_text: 'LEARN MORE'
        },
        section_four: {
            title: 'Who We Are',
            image: founder,
            texts: [
                {
                    id: 10,
                    text: `The Link USA team are highly qualified in a range of areas and have years of experience in relocation and travel services as well as business advisory assistance to clients.`,
                },
                {
                    id: 11,
                    text: `With deep expertise in real estate investment and business brokerage services, and a focus on assisting Latin American families, the Link USA team is passionate about guiding entrepreneurs through a successful transition to the US.`,
                }
            ],
            button_text: 'LEARN MORE'
        },

        company_banner_title: 'LINK UP WITH US',
        company_banner_text: 'To find out more about how we can help you with your move to the USA, or to learn more about our franchise opportunities, please get in touch. We would love to connect.',
        company_banner_image: home_bottom_banner,
        company_banner_button_text: 'CONTACT US',
    },
    franchise: {
        banner: {
            image: franchise_banner,
            text: 'BECOME A LINK USA FRANCHISEE'
        },
        reasons_to_franchise: {
            title: 'WHY FRANCHISE WITH US?',
            text: 'With an growing market that increasingly needs expert relocation and business advisory services, join us as part of a national franchise that focuses on providing excellent customer service and exceptional support to the Spanish-speaking entrepreneur community.',
            reasons: [
                {
                    id: 0,
                    title: '1. A GROWING MARKET',
                    text: 'Latin American immigrants are one of the fastest growing segments of the US population. In 2019, there were more than 2.5 million Hispanic entrepreneurs in the US.',
                },
                {
                    id: 1,
                    title: '2. A PROVEN CONCEPT',
                    text: 'The Link USA franchise is built on a foundation of industry best practice and years of successful experience in the field.',
                },
                {
                    id: 2,
                    title: '3. ONGOING SUPPORT',
                    text: 'As a member of the Link USA family, we want you to be successful and are here to provide support throughout the journey to starting and growing a franchise in your area.',
                }
            ]
        },
        benefits_section: {
            title: 'WHY FRANCHISE WITH US?',
            description: 'Link USA will provide the following support to its franchisees:',
            benefits_list: [
                {
                    id: 3,
                    image: training,
                    title: 'Training',
                    text: `All franchisees will go through an intensive training program to ensure their skills and knowledge of Link USA's best practices. This will include training and required certifications in relocation and travel assistance, business brokerage activities, and real estate investment services.`,
                },
                {
                    id: 4,
                    image: marketing,
                    title: 'Marketing',
                    text: `Link USA will develop and manage campaigns and promotions for each region occupied by a franchise. Corporate marketing staff will work with franchisees to build positive community relationships, promote customer retention, and manage marketing and advertising events. Link USA will also provide a website and social media accounts for each franchise.`,
                },
                {
                    id: 5,
                    image: quality,
                    title: 'Quality Control',
                    text: `Each franchise will be assigned a Quality Control Manager who will conduct focused training and ensure that franchise operations are running smoothly.`,
                },
                {
                    id: 6,
                    image: technology,
                    title: 'Technology',
                    text: `Link USA will equip each franchise with IT solutions that streamline services, financial management, financial reporting, and inventory.`,
                }
            ],
            button_text: 'FIND OUT MORE',

        },

        company_banner_title: 'LINK UP WITH US',
        company_banner_text: 'To find out more about how we can help you with your move to the USA, or to learn more about our franchise opportunities, please get in touch. We would love to connect.',
        company_banner_image: franchise_bottom_banner_image,
        company_banner_button_text: 'CONTACT US',
    },
    team: {
        person_name: 'CAROLINA ACQUILA',
        person_role: 'Founder & CEO',
        person_image: team_founder,
        person_description: [
            {
                id: 0,
                text: 'Mrs. Acquila has an extensive background in providing relocation, travel, real estate investment services, and business brokerage for prospective US investors from Latin America. Since arriving in the US in 2018, she has co-founded two travel agencies as well as two businesses specializing in helping Latin American investors and Hispanic businesswomen invest and succeed in the US.'
            },
            {
                id: 1,
                text: 'Prior to her US ventures, she worked as a founding partner of a law firm where she handled the civil, commercial, and immigration practices and was a co-founder of a family-owned transportation company, both in Buenos Aires, Argentina. She was a paralegal before that and also fulfilled the role of Operations Manager with another family-owned transportation business.'
            },
            {
                id: 2,
                text: 'Mrs. Acquila holds a law diploma from Argentina and has a Florida realtor license and business broker license.'
            }
        ],

        experience_title: 'PROFESSIONAL EXPERIENCE',
        experience_data: [
            {
                id: 3,
                text: '2023 – Present: Link USA LLC, CEO, Sole Member & Founder,  (FL, USA)'
            },
            {
                id: 4,
                text: '2022 – Present: Women in Business Group LLC, Co-Founder, (FL, USA)'
            },
            {
                id: 5,
                text: '2022 – Present: One Veyt LLC, Co-Founder & President, (FL, USA)'
            },
            {
                id: 6,
                text: '2021 – Present: Casa Argentina en Florida Central LLC, Founder, (FL, USA)'
            },
            {
                id: 7,
                text: '2020 – Present: Carolina Acquila LLC, CEO & Founder, (FL, USA)'
            },
            {
                id: 8,
                text: '2018 – 2021: Magic Holidays, Co-Founder & Managing Partner, (FL, USA)'
            },
            {
                id: 9,
                text: '2010 – 2018: Estudio Juridico Acquila, Araya & Prieto, Founding Partner, (Buenos Aires, Argentina)'
            },
            {
                id: 10,
                text: '2005 – 2018: Via Ramos SRL, Co-Founder & Managing Partner, (Buenos Aires, Argentina)'
            },
            {
                id: 11,
                text: '2002 – 2004: Estudio Juridico Dra Elsa Carrera, Paralegal Employee, (Buenos Aires, Argentina)'
            },
            {
                id: 12,
                text: '1997 – 2002: Family Turismo, Operations Manager, (Buenos Aires, Argentina)'
            },
        ],

        education_section_title: 'EDUCATION & MEMBERSHIPS',
        education_content_sections: [
            {
                id: 13,
                title: 'EDUCATION',
                section_data: [
                    {
                        id: 14,
                        text:'2022: Climer School / Gold Coast School Real Estate and Business Broker Training; Florida Realtor License; Florida Business Broker License'
                    },
                    {
                        id: 15,
                        text:'2021: Certifications in B1/B2 Visa Extensions, Immigration Updates, Immigration Paralegal Training, Employment based Residency by the Paralegal Institutes of America'
                    },
                    {
                        id: 16,
                        text:'2020: Florida Realtor License; Florida Business Broker License'
                    },
                    {
                        id: 17,
                        text:'2016: Law Diploma, Universidad de Moron, Buenos Aires, Argentina'
                    },
                ]
            },
            {
                id: 18,
                title: 'MEMBERSHIPS',
                section_data: [
                    {
                        id: 19,
                        text: '2022 - Today: Women’s Council of Realtors, Orlando, FL'
                    },
                    {
                        id: 20,
                        text: '2021 - Today: Volunteer of “Together and Free”, a non-profit association for low income immigrant families'
                    },
                    {
                        id: 21,
                        text: '2019 - Today: Volunteer at the Argentinean Elementary school in Miami'
                    },
                    {
                        id: 22,
                        text: '2018 - Today: Volunteer for the Orlando Chapter of the Argentinian Consulate of Miami'
                    },
                    {
                        id: 23,
                        text: '2016 - Today: Argentinian Bar Association'
                    },
                ]
            }
        ],

        company_banner_title: 'LINK UP WITH US',
        company_banner_image: team_bottom_banner_image,
        company_banner_text: 'To find out more about how we can help you with your move to the USA, or to learn more about our franchise opportunities, please get in touch. We would love to connect.',
        company_banner_button_text: 'CONTACT US'
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
        banner_image: contact_banner,

        logo_image: form_image,
        email_address: 'info@linkusa.us',

        // EMAIL CONFIGURATION
        service_id: 'service_7vze12y',
        template_id: 'template_v6scn9u',
        api_key: 'QMfNPlR-AhxLo-D29',

        company_banner_title: 'FIND OUT MORE',
        company_banner_text: 'We offer great franchise opportunities for entrepreneurs to provide our signature services to their own clients. Find out more how to tap into this growing market throughout the US.',
        company_banner_image: contact_bottom_banner_image,
        company_banner_button_text: 'LEARN MORE',

    },
    footer: {
        logo: footer_logo
    }
}