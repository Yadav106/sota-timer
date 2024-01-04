import React, { useState, useEffect } from 'react'
import doomss from "../assets/doomss.png"

const Timer = () => {
	const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
	const doomDate = "21 July 2025";

	useEffect(() => {
		const interval = setInterval(() => {
			const changingDate = new Date(doomDate);
			const currentDate = new Date();
			const totalSeconds = (changingDate - currentDate) / 1000;

			setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
			setHours(Math.floor(totalSeconds / 3600) % 24);
			setMinutes(Math.floor(totalSeconds / 60) % 60);
			setSeconds(Math.floor(totalSeconds % 60));
		}, 1000)

		return () => clearInterval(interval);
  }, []);

	function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div className='text-white'>
			<div className='flex flex-col justify-center items-center gap-[30px] sm:hidden text-white'>
				<p className='text-[40px]'>
					Embrace
				</p>
				<div className='flex flex-col gap-[40px]'>
					<div className='flex gap-[40px]'>
						<div className='h-[130px] w-[130px] flex flex-col justify-center items-center bg-gray-700/70 rounded-xl'>
							<p className='text-[40px]'>
								{days}
							</p>
							<span>days</span>
						</div>
						<div className='h-[130px] w-[130px] flex flex-col justify-center items-center bg-gray-700/70 rounded-xl'>
							<p className='text-[40px]'>
								{hours}
							</p>
							<span>hours</span>
						</div>
					</div>
					<div className='flex gap-[40px]'>
						<div className='h-[130px] w-[130px] flex flex-col justify-center items-center bg-gray-700/70 rounded-xl'>
							<p className='text-[40px]'>
								{minutes}
							</p>
							<span>mins</span>
						</div>
						<div className='h-[130px] w-[130px] flex flex-col justify-center items-center bg-gray-700/70 rounded-xl'>
							<p className='text-[40px]'>
								{seconds}
							</p>
							<span>seconds</span>
						</div>
					</div>
				</div>
				<img src={doomss} alt="doomss" className='w-[97%] mt-[50px]' />
			</div>
			<div className='hidden sm:block'>
				<div className='flex-col items-center'>
					<div className='flex w-full justify-center items-center mb-[50px] text-[80px]'>
						Embrace
					</div>
					<div className='flex gap-[50px]'>
						<div className='h-[130px] w-[130px] flex flex-col justify-center items-center bg-gray-700/70 rounded-xl'>
							<p className='text-[40px]'>
								{days}
							</p>
							<span>days</span>
						</div>
						<div className='h-[130px] w-[130px] flex flex-col justify-center items-center bg-gray-700/70 rounded-xl'>
							<p className='text-[40px]'>
								{hours}
							</p>
							<span>hours</span>
						</div>
						<div className='h-[130px] w-[130px] flex flex-col justify-center items-center bg-gray-700/70 rounded-xl'>
							<p className='text-[40px]'>
								{minutes}
							</p>
							<span>mins</span>
						</div>
						<div className='h-[130px] w-[130px] flex flex-col justify-center items-center bg-gray-700/70 rounded-xl'>
							<p className='text-[40px]'>
								{seconds}
							</p>
							<span>seconds</span>
						</div>
					</div>
					<img src={doomss} alt="doomss" className='h-[300px] w-[97%] mt-[50px]' />
				</div>
			</div>
    </div>
  )
}

export default Timer