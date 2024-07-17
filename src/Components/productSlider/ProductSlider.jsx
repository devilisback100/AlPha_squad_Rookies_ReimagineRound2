import React, { useState, useEffect, useMemo } from 'react';
import './ProductSlider.css';
import {
    Amul_Honey_Bg,
    Amul_Camel_milk_Bg,
    Amul_Infant_Bg,
    Amul_Sports_drinks_Bg,
    Amul_chocalate_Bg,
    Amul_milk_uht_Bg,
    Amul_panchamrit_Bg,
    Amul_organic_Bg,
    Amul_Mithai_Bg,
    Amul_protein_Bg,
    Amul_sweet_Bg,
    BabyCowImage
} from '../../Component_list';
import gsap from 'gsap';
function ProductSlider() {
    const Product_slider_data = useMemo(
        () => [
            [Amul_Camel_milk_Bg, "https://shop.amul.com/browse/camel-milk"],
            [Amul_Honey_Bg,"https://shop.amul.com/browse/honey"],
            [Amul_Infant_Bg,"https://shop.amul.com/browse/infant-food"],
            [Amul_Sports_drinks_Bg,"https://shop.amul.com/browse/sports-drink"],
            [Amul_chocalate_Bg,"https://shop.amul.com/browse/chocolates"],
            [Amul_milk_uht_Bg,"https://shop.amul.com/browse/milk-uht"],
            [Amul_organic_Bg,"https://shop.amul.com/browse/organic"],
            [Amul_panchamrit_Bg,"https://shop.amul.com/browse/panchamrit"],
            [Amul_Mithai_Bg,"https://shop.amul.com/browse/mithai-mate"],
            [Amul_protein_Bg,"https://shop.amul.com/browse/protein"],
            [Amul_sweet_Bg,"https://shop.amul.com/browse/indian-sweets"]
        ],
        []
    );

    const [Product_Image, SetProduct_Image] = useState(Product_slider_data[0][0]);
    const [curr_index, Setcurr_index] = useState(0);
    const [prev_curr_index, Setprev_curr_index] = useState(0);
    const [Product_Link, SetProduct_Link] = useState(Product_slider_data[0][1]);

    useEffect(() => {
        document.getElementById(prev_curr_index).style.border = '';
        document.getElementById(curr_index).style.border = '1.5px solid';
        Setprev_curr_index(curr_index);
    }, [curr_index, prev_curr_index]);

    useEffect(() => {
        const timer = setTimeout(() => {
            Setprev_curr_index(curr_index);
            Setcurr_index((prevIndex) => (prevIndex + 1) % Product_slider_data.length);
            SetProduct_Image(Product_slider_data[(curr_index + 1) % Product_slider_data.length][0]);
            SetProduct_Link(Product_slider_data[(curr_index + 1) % Product_slider_data.length][1])
        }, 5000);

        return () => clearTimeout(timer); // Cleanup on component unmount
    }, [curr_index, Product_slider_data]);
    var tl = gsap.timeline()
    useEffect(() => {
        tl.from(".Product_Item img" , {
                scale: 0.5,
                duration:1
            }
        )
        tl.from(".Product_link", {
x:"-250px"
        })
    }, [curr_index, Product_slider_data])
    return (
        <>
        <img className='Product_Bg' src={BabyCowImage}/>
            <div className='Product_sm_slider'>
                {Product_slider_data.map((data, key) => (
                    <div className='Product_sm_Item' key={key} >
                        <img id={key}
                            src={data[0]}
                            onClick={() => {
                                SetProduct_Image(data[0]);
                                Setcurr_index(key);
                            }}
                            alt="Product_Image"
                        />
                    </div>
                ))}
            </div>
            <div className='Product_Item'>
                <img src={Product_Image} alt="Product_Image" />
            </div>
           
            <button className='Product_link'><a href={Product_Link} rel = 'noreferrer' target='_blank'>See more</a></button>
        </>
    );
}

export default ProductSlider;
