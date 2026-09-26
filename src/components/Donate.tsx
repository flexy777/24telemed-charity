import { useState } from 'react'
import { Check, Copy, CreditCard, Heart, Landmark } from 'lucide-react'
import { org, PAYPAL_URL } from '../data'

export default function Donate() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(org.bank.accountNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable — the number is still visible to copy by hand.
    }
  }

  return (
    <section id="donate" className="section">
      <div className="container">
        <div className="panel donate reveal">
          <div className="donate__copy">
            <span className="eyebrow eyebrow--light">
              <Heart size={16} fill="currentColor" /> Give today
            </span>
            <h2>
              Your donation transform lives for families.
            </h2>
            <p>
              Every single penny is used to provide quality medical care to the most vulnerable.
              24Telemed is a 501(c)(3) organisation — donations are tax-deductible.
            </p>
            <a
              href={PAYPAL_URL || '#bank'}
              className="btn btn--accent btn--lg"
              {...(PAYPAL_URL ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <CreditCard size={18} /> Donate via PayPal
            </a>
            <small className="donate__ein">EIN: {org.ein}</small>
          </div>

          <div className="bank" id="bank">
            <div className="bank__head">
              <span className="bank__icon">
                <Landmark size={20} />
              </span>
              <div>
                <strong>Direct bank donation</strong>
                <small>Transfer straight to our account</small>
              </div>
            </div>
            <dl>
              <div>
                <dt>Account number</dt>
                <dd className="bank__number">
                  {org.bank.accountNumber}
                  <button onClick={copy} aria-label="Copy account number">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </dd>
              </div>
              <div>
                <dt>Bank</dt>
                <dd>{org.bank.bankName}</dd>
              </div>
              <div>
                <dt>Account name</dt>
                <dd>{org.bank.accountName}</dd>
              </div>
            </dl>
          </div>

          <span className="orb orb--1" aria-hidden />
          <span className="orb orb--3" aria-hidden />
        </div>
      </div>
    </section>
  )
}
