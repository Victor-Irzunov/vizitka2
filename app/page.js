"use client"
import Icon from "@/components/iconMesseger/Icon";
import Nav from "@/components/nav/Nav";
import Preimushestva from "@/components/sections/Preimushestva/Preimushestva";
import { useEffect, useState } from "react";
import Modal from "@/components/modal/Modal";
import Catalog from "@/components/sections/Catalog/Catalog";


export default function Home() {
  const sections = ['home', 'preimushestva', 'catalog', 'contacts'];
  const [activeSection, setActiveSection] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };

  const handleIntersection = (sectionId, inView) => {
    if (inView) {
      // console.log(`${sectionId} в зоне`);
      setActiveSection(sectionId)
    } else {
      // console.log(`${sectionId} не в зоне`);
    }
  };

  useEffect(() => {
    const observers = {};

    sections.forEach((sectionId) => {
      const target = document.getElementById(sectionId);

      if (target) {
        observers[sectionId] = new IntersectionObserver(
          ([entry]) => {
            handleIntersection(sectionId, entry.isIntersecting);
          },
          {
            triggerOnce: true,
            root: null,
            // threshold: 0.5,
          }
        );

        observers[sectionId].observe(target);
      } else {
        console.error(`Блока с id ${sectionId} не найдено`);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        if (observers[sectionId]) {
          observers[sectionId].disconnect();
        }
      });
    };
  }, [sections]);


  return (
    <main
      className="bg-[#1F232D]" id="home">
      <div className='container mx-auto'>
        <section className="pt-36 pb-20" >

          <div className='flex sd:flex-row xz:flex-col'>

            <div className='sd:w-1/2 xz:w-full'>
              <h1 className='text-white sd:text-7xl xz:text-4xl font-bold'>
                Сайт-визитка
                <span className="block font-normal text-4xl mt-3 text-primary">под ключ в Минске</span>
              </h1>
              <p className='mt-8 text-white/70 font-light text-sm'>
                Приветствуем вас на нашем сайте! Мы специализируемся на создании уникальных сайтов-визиток. Наша команда профессионалов готова воплотить ваши идеи в креативный и функциональный веб-проект. С нами ваш онлайн имидж будет на высшем уровне!
              </p>

              <div className='text-white/90 mt-8'>
                <Icon />
              </div>

              <div className='mt-12 flex items-center'>
                <button
                  className='bg-primary btn border-none rounded-full sd:text-lg xz:text-base'
                  onClick={() => handleOrderClick('Получить консультацию')}
                >
                  Получить консультацию
                </button>
              </div>
            </div>

            <div className='flex justify-end items-center sd:w-1/2 xz:w-full relative sd:mt-0 xz:mt-16'>
              {/* <div className='mask mask-hexagon w-96 h-96 bg-[#01EDFD] z-0'> </div> */}
              <div className='w-96 h-96 bg-[#01EDFD]'
                style={{ borderRadius: '26% 74% 61% 39% / 33% 47% 53% 67% ' }}
              > </div>
              <img
                className="sd:w-[230px] xz:w-[200px] absolute sd:-top-12 xz:top-0 left-1/2 xz:-translate-x-1/2 sd:-translate-x-0"
                src="/background/fon5.webp" alt="фоновое изображение мойка авто"
              />
            </div>

          </div>
        </section>

        <div className='h-8'/>
        <Preimushestva />
        <div className='h-8'/>
        <Catalog />
      </div>
      <Nav activeSection2={activeSection} />

      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </main>
  );
}
