import React, { useEffect, useState, useRef } from 'react';
import './IceCreamSection.css';
import { Amul_Logo_3, Amul_Banner_1, Amul_Banner_2, Amul_Banner_3, Amul_Banner_4, Amul_Banner_5, Amul_Banner_6, Amul_Logo_2, IceCream_1, IceCream_2, IceCream_3, IceCream_4, IceCream_5, Water_shade_1, Water_shade_2, Water_shade_3 } from '../../Component_list';

function IceCreamSection() {
    const [imageSrc, setImageSrc] = useState(Amul_Banner_1);
    const Images = [Amul_Banner_2,Amul_Banner_3,Amul_Banner_4,Amul_Banner_5,Amul_Banner_6]
    const debounceTimeout = useRef(null);

    const debounce = (func, delay) => {
        return (...args) => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
            debounceTimeout.current = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const handleMouseEnter = debounce((index) => {
        setImageSrc(Images[index]);
    }, 750);

    const handleMouseLeave = debounce(() => {
        setImageSrc(Amul_Banner_1);
    }, 750);

    useEffect(() => {
        return () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
        };
    }, []);
    function getMaxScrollY() {
        return Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        ) - window.innerHeight;
    }
    let check = true
    console.log(window.scrollY)

    window.addEventListener("scroll", () => {

        if (window.scrollY + 150 +window.innerHeight > getMaxScrollY() && check) {
            check = false
            const Banner_class = document.getElementsByClassName("Amul_Logo_3")
            const child2 = document.querySelector(".IceCreamSection_child_2")
            let Banner_1 = Banner_class[0]
            let Banner_2 = Banner_class[1]
            Banner_1.classList.add("Exit_animation_1")
            Banner_2.classList.add("Entry_animation_1")
            setTimeout(() => {
                Banner_2.classList.remove("Entry_animation_1")
                Banner_1.style.display = "none"
                child2.style.display = "flex"
                Banner_2.classList.add("Exit_animation_2")
                child2.classList.add("Entry_animation_2")
                setTimeout(() => {
                    Banner_2.style.display = "none"
                }, 3000)
            }, 3500)


        }

    })







    return (
        <div className='IceCreamSection_Parent'>
            <div className='IceCreamSection_child_1'>
                <img className="Amul_Logo_3" alt='Amul_Logo_3' src={Amul_Logo_2} style={{ zIndex: "2" }} />
                <img className="Amul_Logo_3" alt='Amul_Logo_3' src={Amul_Logo_3} />
            </div>
            <div className='IceCreamSection_child_2' >
                <img className='Amul_Banner_1' alt='Amul_Banner_1' src={imageSrc} />
                <div className='IceCreamSection_child_2_box_1' >
                    <a className="IceCreamImage" onMouseEnter={() => { handleMouseEnter(0) }} onMouseLeave={handleMouseLeave} href="https://amul.com/products/amul-tricone-butterscotch-icecream-info.php">
                        <img className='Water-shade' alt='waterShade' src={Water_shade_1} />
                        <img className='Ice-Cream' alt='IceCream_1' src={IceCream_1} />
                    </a>
                    <a className="IceCreamImage" onMouseEnter={() => { handleMouseEnter(1) }} onMouseLeave={handleMouseLeave} href='https://amul.com/products/amul-cup-afghan-dry-fruit.php'>
                        <img className='Water-shade' alt='waterShade' src={Water_shade_2} />
                        <img className='Ice-Cream' alt='IceCream_2' src={IceCream_2} />
                    </a>
                    <a className="IceCreamImage" onMouseEnter={() => { handleMouseEnter(2) }} onMouseLeave={handleMouseLeave} href='https://amul.com/products/amul-camelmilk-mediumfat-icecream-info.php'>
                        <img className='Water-shade' alt='waterShade' src={Water_shade_3} />
                        <img className='Ice-Cream' alt='IceCream_3' src={IceCream_3} />
                    </a>
                    <a className="IceCreamImage" onMouseEnter={() => { handleMouseEnter(3) }} onMouseLeave={handleMouseLeave} href='https://amul.com/products/amul-combo-pack-creamy-almond.php'>
                        <img className='Water-shade' alt='waterShade' src={Water_shade_2} />
                        <img className='Ice-Cream' alt='IceCream_4' src={IceCream_4} />
                    </a>
                    <a className="IceCreamImage" onMouseEnter={() => { handleMouseEnter(4) }} onMouseLeave={handleMouseLeave} href='https://amul.com/products/amul-tub-rajbhog-icecream-info.php'>
                        <img className='Water-shade' alt='waterShade' src={Water_shade_1} />
                        <img className='Ice-Cream' alt='IceCream_5' src={IceCream_5} />
                    </a>
                </div>
            </div>

        </div>
    );
}

export default IceCreamSection;
