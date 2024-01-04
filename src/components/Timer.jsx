import React, { useState, useEffect } from 'react'

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
    <div>
      <div className="countdown-container">
				<div className="countdown-values">
					<div className="countdown-value">
						<p className="big-text">{days}</p>
						<span>days</span>
					</div>
					<div className="countdown-value">
						<p className="big-text">{hours}</p>
						<span>hours</span>
					</div>
					<div className="countdown-value">
						<p className="big-text">{minutes}</p>
						<span>mins</span>
					</div>
					<div className="countdown-value">
						<p className="big-text">{seconds}</p>
						<span>seconds</span>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Timer