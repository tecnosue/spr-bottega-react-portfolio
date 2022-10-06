import React from 'react';
import aboutImg from '../../../static/assets/images/about/about-chica.jpg'

export default function About() {
  return (
    <div className='about-wrapper'>
      <div 
          className="left-column"
          style={{
            backgroundImage: `url(${aboutImg})`,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: "cover",
            //backgroundAttachment: 'fixed',
            backgroundPosition: "center"
          }}
      />
      <div className="right-column">
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, est. Sit dolore omnis deleniti laboriosam fuga corporis tenetur at, mollitia debitis earum illum nemo ipsum distinctio vel veritatis sed itaque?
          Voluptate consequatur atque commodi earum vitae reiciendis sunt doloribus officia ut tempore nisi in rem facere vero, repudiandae unde, voluptates maxime dicta, inventore magni. Blanditiis provident voluptates facilis fuga accusantium.
          Quasi totam deleniti nihil ullam cumque nemo nobis minus nisi molestiae suscipit consequuntur unde tempore, porro velit ipsa adipisci perspiciatis laboriosam voluptatem inventore aperiam, delectus tenetur doloremque alias dolorum? Minima.
          Molestiae quaerat ratione, explicabo facilis minus aliquid sapiente molestias totam dolore similique? Quaerat dolorum voluptatum itaque architecto maxime quasi consectetur et enim exercitationem delectus, suscipit hic tempore ullam magnam nostrum!
          Facilis, delectus cumque maxime excepturi sit earum veritatis illo adipisci, esse ducimus sunt laudantium mollitia itaque deleniti at optio vero. Repellendus omnis, qui debitis error esse iusto aliquam! Aspernatur, quaerat?
          Delectus eius hic magnam quidem earum dolore recusandae repellat quod, adipisci non, inventore cupiditate voluptatem nisi, velit temporibus excepturi dolores a. Quo ratione eos dolorum expedita! Odit vero modi odio.
          one dolor tenetur, illo dignissimos ipsa culpa placeat at cum ea recusandae quia, sapiente ullam eligendi architecto impedit! Deserunt facere explicabo hic pariatur, reprehenderit itaque aliquam! Voluptas, repellat.
        </p>
      </div>   
        
    </div>
  );
}
