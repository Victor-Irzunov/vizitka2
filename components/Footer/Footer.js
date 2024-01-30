import Image from 'next/image';
import Icon from '../iconMesseger/Icon';
import Nav from '../nav/Nav';

export default function Footer() {
	return (
		<footer className="py-4 bg-secondary" id='contacts'>
			<div className='container mx-auto'>
				<aside className='text-white flex sd:justify-between xz:justify-start items-start py-8 sd:flex-row xz:flex-col'>
					<div>
						<div className='sd:text-xl xz:text-base flex flex-col'>
							<span className='uppercase text-white leading-5'>
								your{' '}
							</span>
							<span className='sd:text-2xl xz:text-xl font-bold text-primary leading-5' >
								brend
							</span>
						</div>
					</div>

					<div className='sd:mt-0 xz:mt-10'>
						<div className='flex flex-col items-start sd:justify-center xz:justify-start'>
							<h6 className='footer-title'>
								Контакты
							</h6>
							<div className='flex'>
								<a href='tel:80' className="font-semibold sd:text-xl xz:text-xl mr-2">
									+375 29 000-00-00
								</a>
								<Image src='/svg/a1.svg' alt='Оператор А1 для записи на автомойку' width={20} height={20} />
							</div>


							<div className='mt-2 flex'>
								<a href='tel:8033' className="font-semibold sd:text-xl xz:text-xl mr-2">
									+375 33 000-00-00
								</a>
								<Image src='/svg/mts.svg' alt='Оператор МТС для записи на автомойку' width={55} height={55} />
							</div>
						</div>
					</div>


					<div className='sd:mt-0 xz:mt-4'>
						<h6 className='footer-title'>
							Адрес
						</h6>
						<p className='text-lg'>
							Минск, ул. Независимости 00
						</p>
					</div>

					<div className='sd:mt-0 xz:mt-4'>
						<h6 className='footer-title'>
							Режим работы
						</h6>
						<p className='text-lg'>
							8:00-22:00 <span className='block text-sm font-light'>
								Без выходных
							</span>
						</p>
					</div>



					<nav className='sd:mt-0 xz:mt-4'>
						<h6 className="footer-title">Social</h6>
						<div className="grid grid-flow-col gap-4">
							<Icon />
						</div>
					</nav>

				</aside>
			</div>

			<aside className="border-t pt-1">
				<div className='container mx-auto text-center sd:pb-24 xz:pb-16'>
					<p className='text-gray-200 xs:text-xs xz:text-[10px] font-light' >
						Copyright © 2024 | Разработка и Продвижение
						<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-primary underline'> VI:TECH</a>.
						{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
					</p>
				</div>
			</aside>
		</footer>
	)
}