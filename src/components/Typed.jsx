import React, { Component } from 'react'
import Typical from 'react-typical'
 
export class Typed extends React.Component {
  render () {
    return (
      <Typical
        className="text-3xl text-center font-extrabold text-greenBorder m-16"
        steps={['HTML ', 3000, 'CSS ', 3000, 'Taildwindcss ', 3000, 'JavaScript ', 3000,'ReactJs ', 3000, 
                'NextJs ', 3000, 'NodeJs ', 3000, 'Postman ', 3000, 'Docker ', 3000, 'GitHub ', 3000, 'SQL ', 3000, 
                'PWA ', 3000, 'VueJs ', 3000, 'Python ', 3000, 'Django ', 3000,]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}

