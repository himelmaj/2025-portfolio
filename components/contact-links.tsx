"use client";

import ExternalLink from './ui/external-link'


const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/himelmaj/', text: 'LinkedIn' },
  { href: 'https://github.com/himelmaj', text: 'GitHub' },
  { href: 'https://twitter.com/himel_maj', text: 'X' },
]

const ContactLinks = () => {
  return (
    <section className='flex flex-col'>

      <ExternalLink href='mailto:himelmajumder1@gmail.com' >
        {"himelmajumder1@gmail.com"}
      </ExternalLink>

      <div className='flex flex-wrap gap-4'>
        {SOCIAL_LINKS.map((link, index) => (
          <ExternalLink key={index} href={link.href}>
            {link.text}
          </ExternalLink>
        ))}
      </div>


    </section>
  )
}

export default ContactLinks