import React from 'react'
import { ContentElem, Context, ImageContext } from './Elements/ContentElem'


function ContentComp() {
  return (
    <>
      <ContentElem>
        <Context>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo totam harum minima voluptate dicta 
          earum. Atque ipsa, natus sed tenetur officiis consequuntur laudantium eaque, reiciendis id qui ut non hic?
          Impedit veritatis voluptate aperiam provident soluta? Quas unde iure voluptate veniam numquam voluptatum
          nobis sequi harum facilis minus minima ex, sed quam ipsam quibusdam voluptas perspiciatis in.
          Exercitationem, consectetur blanditiis?
        </Context>
        <Context>
        <ImageContext />
        </Context>
      </ContentElem>
    </>
  )
}

export default ContentComp