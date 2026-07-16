import { useState } from 'react'

export default function Accounts({ title, items }) {
  const [copied, setCopied] = useState('')
  const copy = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(label)
      window.setTimeout(() => setCopied(''), 1800)
    } catch { setCopied('복사 실패') }
  }
  return <section className="accounts section"><div className="section-heading"><span>WITH WARM WISHES</span><h2>{title}</h2></div>{items.map(({ label, value }) => <p key={label}><b>{label}</b><button type="button" onClick={() => copy(label, value)} aria-label={`${label} 계좌번호 복사`}>{value}</button></p>)}{copied && <div className="copy-status" role="status">{copied === '복사 실패' ? '계좌번호를 복사하지 못했습니다.' : `${copied} 계좌번호를 복사했습니다.`}</div>}</section>
}
