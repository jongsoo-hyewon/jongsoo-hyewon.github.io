import { useState } from 'react'
import { copyText } from '../utils/clipboard'

export default function Accounts({ title, groups }) {
  const [copied, setCopied] = useState('')
  const [open, setOpen] = useState(-1)
  const copy = async (label, value) => {
    try {
      await copyText(value)
      setCopied(label)
      window.setTimeout(() => setCopied(''), 1800)
    } catch { setCopied('복사 실패') }
  }
  return <section className="accounts section"><div className="section-heading"><span>WITH WARM WISHES</span><h2>{title}</h2><p>참석이 어려우신 분들을 위해 기재했습니다<br />너그러운 마음으로 양해 부탁드립니다</p></div><div className="account-groups">{groups.map((group, groupIndex) => <div className="account-group" key={group.title}><button className="account-group-toggle" type="button" aria-expanded={open === groupIndex} onClick={() => setOpen(open === groupIndex ? -1 : groupIndex)}>{group.title}<span>{open === groupIndex ? '⌃' : '⌄'}</span></button>{open === groupIndex && <div className="account-items">{group.items.map(({ label, name, bank, value }) => <article key={label}><div className="account-person"><span>{label}</span><strong>{name}</strong></div><button className="account-number" type="button" onClick={() => copy(label, value)} aria-label={`${label} 계좌번호 복사`}><span>{bank}<br /><b>{value}</b></span><span>▣ 복사</span></button></article>)}</div>}</div>)}</div>{copied && <div className="copy-status" role="status">{copied === '복사 실패' ? '계좌번호를 복사하지 못했습니다.' : `${copied} 계좌번호를 복사했습니다.`}</div>}</section>
}
