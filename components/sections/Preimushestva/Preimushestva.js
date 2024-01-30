import Image from "next/image";


export default function Preimushestva() {
	return (
		<section className='sd:py-20 xz:py-5' id="preimushestva">
			<div className='container mx-auto'>
				<div className='text-center'>
					<h3 className='text-2xl sm:text-4xl font-bold mb-4 uppercase text-primary'>
						Преимущества <br className="sd:hidden xz:block" /> сайта визитки
					</h3>
					<p className='text-sm sm:text-lg mb-6 md:mb-14 text-white'>
						Сайт-визитка - это небольшой сайт, сфокусированный на ключевой информации. На сайте-визитке будет краткое описание товаров или услуг, преимуществ компании, а также контактные данные.
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>

					<div className="card bg-secondary transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/svg/quality.svg' alt='Качественные услуги автомойки' width={80} height={80} />
							<h4 className="card-title text-white mt-3">
								Качественные услуги
							</h4>
							<p className="text-sm base-content text-white/70">
								Внимательное и опытное обслуживание со стороны нашего дружелюбного персонала.
							</p>
						</div>
					</div>


					<div className="card bg-secondary transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/svg/bank.svg' alt='Экономия' width={88} height={88} />
							<h4 className="card-title text-white mt-1">
								Экономия
							</h4>
							<p className="text-sm base-content text-white/70">
								Мы ценим ваше время и бюджет. Наши доступные цены и эффективные услуги гарантируют вам экономию времени и средств, не жертвуя при этом качеством.
							</p>

						</div>

					</div>

					<div className="card bg-secondary transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/svg/quality2.svg' alt='Качественные материалы' width={90} height={90} />
							<h4 className="card-title text-white mt-2">
								Контактная Информация
							</h4>
							<p className="text-sm base-content text-white/70">
								Ваш сайт-визитка будет содержать информацию о ваших контактах, делая процесс связи с вами легким и прямым. Посетители могут найти ваш номер телефона, адрес электронной почты, а также ссылки на социальные сети.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section >

	)
}