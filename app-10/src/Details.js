import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Details() {
    const [item, setItem] = useState({});
    const { id } = useParams()

    axios.get(`https://practiceapi.devmountain.com/products/${id}`)
      .then(res => {
          setItem(res.data);
      });
    
    return(
        <div>
            <h2>{item.title}</h2>
            <img width="200" src={item.image} />
            <h4>{`Price: $${item.price}.00`}</h4>
        </div>
    );
}

export default Details;