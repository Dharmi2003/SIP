import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-nav'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>

        <div className="descriptionbox-description">
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quod blanditiis laborum voluptatem numquam vel rerum qui, vero est, tempore quas amet beatae non, veritatis odio reprehenderit ipsa sapiente! Vitae.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptate dolores numquam est minus unde recusandae cupiditate quasi consequuntur consectetur. Ad consectetur vitae debitis velit nam eum. Obcaecati, harum dolorem.
            </p>

            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, distinctio id quibusdam laudantium obcaecati iste pariatur sapiente nesciunt assumenda quasi soluta rem sed minima officiis, ad beatae doloremque in natus!
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
