import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaMapMarkerAlt } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import venue1 from '../assets/venue_church.png';
import venue2 from '../assets/venue_reception.png';
import venue3 from '../assets/venue_garden.png';

const photos = [venue1, venue2, venue3];

export default function Location() {
    return (
        <section className="section" id="location" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container location-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-heading mb-4">Lugar & Celebración</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--color-text)' }}>
                        Acompáñanos a celebrar nuestro amor en un entorno mágico. La ceremonia y recepción se llevarán a cabo en la histórica Hacienda San Miguel.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        className="location-swiper"
                    >
                        {photos.map((photo, index) => (
                            <SwiperSlide key={index}>
                                <img src={photo} alt={`Lugar ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                <div>
                    <h3 className="text-2xl font-heading mb-2">Hacienda San Miguel</h3>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text)' }}>Carr. Nacional Km 25, Monterrey, N.L.</p>

                    <motion.a
                        href=" https://maps.app.goo.gl/bcys2XaBYqDEu7jN7?g_st=iw"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary"
                    >
                        <FaMapMarkerAlt />
                        Ver en Google Maps
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
