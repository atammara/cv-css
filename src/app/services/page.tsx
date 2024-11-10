import React from 'react';
import { IoLogoVercel } from 'react-icons/io5';
import '../../style/services.css';

interface Service {
    title: string;
    description: string;
}

const services: Service[] = [
    { title: 'App Design', description: 'Design intuitive and user-friendly app interfaces.' },
    { title: 'Web Development', description: 'Create responsive and modern web applications.' },
    { title: 'UI/UX Design', description: 'Designing user-friendly interfaces and experiences.' },
    { title: 'Backend Development', description: 'Building scalable backend systems and APIs.' },
    { title: 'Branding', description: 'Developing strong brand identities and logos.' },
    { title: 'Consulting', description: 'Providing expert advice for tech projects.' },
];

const Services: React.FC = () => {
    return (
        <section className="services">
            <h2>Services</h2>
            <p>Explore my range of services designed to help you succeed in the digital world.</p>
            
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">
                            <IoLogoVercel size={40} color="#ff6600" />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
