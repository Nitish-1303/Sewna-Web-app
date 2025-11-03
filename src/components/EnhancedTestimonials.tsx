import { motion } from 'framer-motion';
import { TestimonialsColumn } from './ui/testimonials-columns';
import type { Testimonial } from './ui/testimonials-columns';

const testimonials: Testimonial[] = [
  {
    text: "SEWNA gave me a platform to express my art and connect with clients who truly appreciate custom fashion. It's been life-changing.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Meera Patel",
    role: "Fashion Designer",
  },
  {
    text: "I finally got the outfit I imagined! The collaboration process was seamless, and my designer understood my vision perfectly.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Ananya Sharma",
    role: "Customer",
  },
  {
    text: "The platform makes it easy to showcase my work and reach clients worldwide. SEWNA truly values independent designers.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Arjun Singh",
    role: "Couture Designer",
  },
  {
    text: "Working with my designer through SEWNA was inspiring. Every detail was perfect, and the final piece exceeded my expectations.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Priya Reddy",
    role: "Customer",
  },
  {
    text: "SEWNA helped me turn my passion into a sustainable business. The community is supportive and the platform is intuitive.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Rohan Kumar",
    role: "Sustainable Fashion Designer",
  },
  {
    text: "I love that I can collaborate directly with designers. The custom outfit I received is truly one-of-a-kind and fits perfectly.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Kavya Iyer",
    role: "Customer",
  },
  {
    text: "The quality of clients I connect with through SEWNA is exceptional. They appreciate craftsmanship and are willing to invest in quality.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Vikram Malhotra",
    role: "Luxury Designer",
  },
  {
    text: "From sketch to delivery, the entire process was transparent and exciting. I felt involved in every step of creating my outfit.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Neha Kapoor",
    role: "Customer",
  },
  {
    text: "SEWNA understands what designers need. The platform is elegant, functional, and puts our work in the spotlight.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Aditya Verma",
    role: "Contemporary Designer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function EnhancedTestimonials() {
  return (
    <section className="bg-white dark:bg-gray-900 my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-accent/30 bg-accent/5 py-1 px-4 rounded-lg text-accent font-semibold">
              Testimonials
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-gray-900 dark:text-white">
            What our community says
          </h2>
          <p className="text-center mt-5 opacity-75 text-gray-600 dark:text-gray-400">
            Hear from designers and customers who've found their perfect match on SEWNA.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
