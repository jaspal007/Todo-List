import React from 'react'

const Footer = ({length}) => {
    const time = new Date();
  return (
    <footer>
        Copyright &copy; {time.getFullYear()}
        <br />
        {length} List {length===1?'Item':'Items'}
    </footer>
  )
}

Footer.defaultProps={
  length : 0
}

export default Footer
