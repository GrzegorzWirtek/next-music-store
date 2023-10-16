'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import left from '@/public/arrow-left.svg';
import right from '@/public/arrow-right.svg';

interface Images {
	images: { src: string; alt: string }[];
}

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
		<div className='relative my-0 mx-auto p-0 border-[1px] border-solid border-gray-400 box-border select-none overflow-hidden landscape:w-[35vw] landscape:h-[35vw] portrait:w-[90vw] portrait:h-[90vw] '>
			<div ref={wrapperRef} className='flex h-full translate-x-0'>
				{images.map((img) => (
					<div
						key={img.src}
						className='relative shrink-0 w-[90vw] h-[90vw] landscape:w-[35vw] landscape:h-[35vw] '>
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
			{currentSlide && (
				<button
					onClick={() => changeSlide('right')}
					onTouchEnd={() => changeSlide('right')}
					className='absolute top-1/2 left-[5px] -translate-y-1/2 outline-none rounded-md w-9 h-10 bg-[var(--black-transparent)] cursor-pointer transition-colors z-20 hover:bg-[var(--black-transparent-darker)]'>
					<Image src={left} alt={'left'} data-button='nav' />
				</button>
			)}
			{currentSlide < images.length - 1 && (
				<button
					onClick={() => changeSlide('left')}
					onTouchEnd={() => changeSlide('left')}
					className='absolute top-1/2 right-[5px] -translate-y-1/2 outline-none rounded-md w-9 h-10 bg-[var(--black-transparent)] cursor-pointer transition-colors z-20 hover:bg-[var(--black-transparent-darker)]'>
					<Image src={right} alt={'right'} data-button='nav' />
				</button>
			)}
			<div className='absolute flex flex-wrap justify-center items-center box-border left-0 bottom-[4%] w-full'>
				{images.map((_, index) => (
					<div
						key={index}
						className={`${'w-1.5 h-1.5 border-2 border-black rounded-full m-0.5 box-content'} ${
							index === currentSlide && 'border-[5px]'
						}`}></div>
				))}
			</div>
		</div>
	);
}
