'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import left from '@/public/arrow-left.svg';
import right from '@/public/arrow-right.svg';
import { Images } from '@/utils/types';

export default function Slider({ images }: Images) {
	const minimumPxShiftToChangeSlide = 80;
	const transitionTimeSeconds = 0.14;
	const wrapperRef = useRef<HTMLInputElement>(null!);
	const isClicked = useRef(false);
	const startMousePosition = useRef(0);
	const moveDirection = useRef('');
	const shift = useRef(0);
	const slideNumberRef = useRef(0);
	const [currentSlide, setCurrentSlide] = useState(slideNumberRef.current);

	const handleMouseDown = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		e.preventDefault();
		if (target.dataset.button === 'nav') return;
		isClicked.current = true;
		startMousePosition.current = e.clientX;
	};

	const handleTouchStart = (e: TouchEvent) => {
		const target = e.target as HTMLElement;
		e.preventDefault();
		if (target.dataset.button === 'nav') return;
		isClicked.current = true;
		startMousePosition.current = e.touches[0].pageX;
	};

	const handleMouseMove = useCallback((e: MouseEvent) => {
		e.preventDefault();
		if (!isClicked.current) return;

		const clientX = e.clientX;
		sliderMove(clientX);
	}, []);

	const handleTouchMove = useCallback((e: TouchEvent) => {
		e.preventDefault();
		if (!isClicked.current) return;

		const clientX = e.touches[0].pageX;
		if (!clientX) return;
		sliderMove(clientX);
	}, []);

	const sliderMove = (clientX: number) => {
		const movement =
			clientX -
			startMousePosition.current -
			shift.current * slideNumberRef.current;

		wrapperRef.current.style.transform = `translateX(${movement}px)`;

		if (clientX - startMousePosition.current < -minimumPxShiftToChangeSlide) {
			moveDirection.current = 'left';
		} else if (
			clientX - startMousePosition.current >
			minimumPxShiftToChangeSlide
		) {
			moveDirection.current = 'right';
		} else moveDirection.current = '';
	};

	const recalculateSize = () => {
		shift.current = wrapperRef.current.offsetHeight;
	};

	const changeSlide = useCallback(
		(moveLeft: string) => {
			const wrapper = wrapperRef.current;
			wrapper.style.transition = `${transitionTimeSeconds}s`;

			if (moveLeft === 'left' && slideNumberRef.current < images.length - 1) {
				slideNumberRef.current++;
				setCurrentSlide(slideNumberRef.current);
			} else if (moveLeft === 'right' && slideNumberRef.current > 0) {
				slideNumberRef.current--;
				setCurrentSlide(slideNumberRef.current);
			}

			wrapper.style.transform = `translateX(-${slideNumberRef.current * 100}%)`;
			shift.current = wrapper.offsetHeight;
			moveDirection.current = '';

			setTimeout(() => {
				wrapper.style.transition = '0s';
			}, transitionTimeSeconds * 1000);
		},
		[images.length],
	);

	const handleMouseUp = useCallback(
		(e: MouseEvent) => {
			e.preventDefault();
			isClicked.current = false;
			changeSlide(moveDirection.current);
		},
		[changeSlide],
	);

	const handleTouchEnd = useCallback(
		(e: TouchEvent) => {
			const target = e.target as HTMLMediaElement;
			if (target.parentElement?.id !== 'imgwrapper') return;
			e.preventDefault();
			isClicked.current = false;
			changeSlide(moveDirection.current);
		},
		[changeSlide],
	);

	useEffect(() => {
		const wrapper = wrapperRef.current;

		wrapper.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);
		wrapper.addEventListener('mousemove', handleMouseMove);

		wrapper.addEventListener('touchstart', handleTouchStart);
		window.addEventListener('touchend', handleTouchEnd);
		wrapper.addEventListener('touchmove', handleTouchMove);

		window.addEventListener('resize', recalculateSize);

		const cleanup = () => {
			wrapper.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
			wrapper.removeEventListener('mousemove', handleMouseMove);

			wrapper.removeEventListener('touchstart', handleTouchStart);
			window.removeEventListener('touchend', handleTouchEnd);
			wrapper.removeEventListener('touchmove', handleTouchMove);

			window.removeEventListener('resize', recalculateSize);
		};

		return cleanup;
	}, [
		images.length,
		handleMouseUp,
		handleTouchEnd,
		handleMouseMove,
		handleTouchMove,
	]);

	return (
		<div className='relative lg:landscape:px-10 pb-8 inline-block'>
			<div className='relative p-0 select-none overflow-hidden lg:landscape:w-[var(--slider-desktop-size)] max-w-[var(--slider-max-size)] max-h-[var(--slider-max-size)] lg:landscape:h-[var(--slider-desktop-size)] portrait:w-[var(--slider-mobile-size)] portrait:h-[var(--slider-mobile-size)]'>
				<div ref={wrapperRef} className='flex h-full translate-x-0'>
					{images.map((img) => (
						<div
							key={img.src}
							id='imgwrapper'
							className='relative shrink-0 w-[var(--slider-mobile-size)] h-[var(--slider-mobile-size)] lg:landscape:w-[var(--slider-desktop-size)] max-w-[var(--slider-max-size)] max-h-[var(--slider-max-size)] lg:landscape:h-[var(--slider-desktop-size)]'>
							<Image
								src={img.src}
								alt={img.alt}
								priority
								fill
								data-img='img'
								className='object-contain w-full h-full'
							/>
						</div>
					))}
				</div>
			</div>
			{currentSlide ? (
				<button
					onClick={() => changeSlide('right')}
					onTouchEnd={() => changeSlide('right')}
					className='absolute top-1/2 left-0 -translate-y-1/2 outline-none rounded-md w-9 h-10 p-1 bg-[var(--black-transparent)] cursor-pointer transition-colors hover:bg-[var(--black-transparent-darker)] hidden lg:landscape:block'>
					<Image src={left} alt={'left'} data-button='nav' />
				</button>
			) : null}
			{currentSlide < images.length - 1 && (
				<button
					onClick={() => changeSlide('left')}
					onTouchEnd={() => changeSlide('left')}
					className='absolute top-1/2 right-0  outline-none rounded-md w-9 h-10 p-1 bg-[var(--black-transparent)] cursor-pointer transition-colors hover:bg-[var(--black-transparent-darker)] hidden lg:landscape:block'>
					<Image src={right} alt={'right'} data-button='nav' />
				</button>
			)}
			<div
				className={`absolute flex flex-wrap justify-center items-center box-border left-0 bottom-0 w-full ${
					images.length < 2 ? 'hidden' : ''
				}`}>
				{images.map((_, index) => (
					<div
						key={index}
						className={`${'w-1 h-1 border-2 border-black rounded-full m-0.5 box-content'} ${
							index === currentSlide && 'border-[4px]'
						}`}></div>
				))}
			</div>
		</div>
	);
}
