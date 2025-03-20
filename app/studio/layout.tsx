import React from 'react'


interface SanityLayoutProps {
  children: React.ReactNode
}

const SanityLayout = ({ children }: SanityLayoutProps) => {
  return (
    <html>
        <body>
            <div id="sanity">{children}</div>
        </body>
    </html>
  )
}

export default SanityLayout