import { useEffect, useState } from 'react'

const week = ['일', '월', '화', '수', '목', '금', '토']

function getEventDateParts(eventDate) {
  const [year, month, day] = eventDate.slice(0, 10).split('-').map(Number)
  return { year, month, day }
}

function getDaysLeft(eventDate) {
  const today = new Date()
  const { year, month, day } = getEventDateParts(eventDate)
  const todayAtMidnight = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
  const eventAtMidnight = Date.UTC(year, month - 1, day)
  return Math.max(0, Math.round((eventAtMidnight - todayAtMidnight) / 86_400_000))
}

export default function Countdown({ eventDate }) {
  const [daysLeft, setDaysLeft] = useState(() => getDaysLeft(eventDate))
  const { year, month: eventMonth, day } = getEventDateParts(eventDate)
  const month = eventMonth - 1
  const firstDay = new Date(year, month, 1).getDay()
  const lastDay = new Date(year, month + 1, 0).getDate()
  const cells = Array.from({ length: firstDay + lastDay }, (_, i) => i < firstDay ? null : i - firstDay + 1)

  useEffect(() => {
    setDaysLeft(getDaysLeft(eventDate))
    const timer = window.setInterval(() => setDaysLeft(getDaysLeft(eventDate)), 60_000)
    return () => window.clearInterval(timer)
  }, [eventDate])

  const monthLabel = `${year}. ${String(month + 1).padStart(2, '0')}`
  const eventStarted = daysLeft === 0

  return <section className="countdown section"><div className="section-heading"><span>SAVE THE DATE</span><h2>{monthLabel}</h2></div><div className="calendar" aria-label={`${year}년 ${month + 1}월 달력`}><div className="weekdays">{week.map((name) => <span key={name}>{name}</span>)}</div><div className="days">{cells.map((date, i) => <span key={i} className={date === day ? 'wedding-day' : ''}>{date}</span>)}</div></div><p className="d-day"><b>{eventStarted ? '오늘입니다' : `D-${daysLeft}`}</b><span>{eventStarted ? '두 사람의 새로운 시작을 축하해 주세요' : '혜원·종수 결혼식까지'}</span></p></section>
}
