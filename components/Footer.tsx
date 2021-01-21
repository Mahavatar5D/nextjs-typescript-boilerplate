/* eslint-disable no-use-before-define */
import React from 'react'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <footer style={{ textAlign: 'center' }}>
    <p>
      &copy; Valui
      { new Date().getFullYear() }
    </p>
  </footer>
)

export default Footer
