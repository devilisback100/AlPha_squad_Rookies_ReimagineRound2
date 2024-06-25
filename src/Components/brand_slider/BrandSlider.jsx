import React, { useState, useEffect } from 'react'
import './BrandSlider.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import gsap from 'gsap';
import { BabyCowImage, Amul_Ice_cream, Amul_butter, Amul_cheese, Amul_chocolates, Amul_dahi, Amul_ghee, Amul_milk, Amul_paneer, Amul_sweets } from "../../Component_list"
export default function BrandSlider() {
    const Brand_slider_data = [
        ["Butter", Amul_butter, "Utterly Butterly Delicious taste of Amul Butter is must on breakfast table of almost every Indian Household", "https://amul.com/products/amul-tablebutter-info.php"], ["Dahi", Amul_dahi, "Can be consumed directly, Used as Dessert, Served with Thali during Lunch/Dinner.", "https://amul.com/products/amul-fruitdahi-info.php"],
        ["Cheese", Amul_cheese, "Cheese Spread made out of milk, providing healthy source of calcium and protein.AIt can be used as an ingredient in many dishes", "https://amul.com/products/amul-creame-cheese-info.php"], ["Milk", Amul_milk, "Direct Consumption, Making of Tea/Coffee, Dahi, Chhena and Paneer Making.", "https://amul.com/products/milk.php"],
        ["Paneer", Amul_paneer, "Having high fat and low moisture compared to loose paneer available in market.APaneer having smooth, uniform texture and softness", "https://amul.com/products/paneer.php"], ["Amul Mithai mate", Amul_sweets, "Amul Mithai Mate is much more creamier than competitors available in marketAMade of Pure Milk FAT", "https://amul.com/products/amul-mithaimate-info.php"],
        ["Ice-Cream", Amul_Ice_cream, "Creamy Butterscotch ice cream filled in crispy wafer cone, topped with cashew nuts and chocolate sauce", "https://amul.com/products/icecream.php"], ["Chocolate", Amul_chocolates, "55% Dark Chocolate.ANo Milk Solids.ANo Vegetable Fat.APure Cocoa Butter and Solids", "https://amul.com/products/amul-dark-chocolate-info.php"],
        ["Ghee", Amul_ghee, "Ghee is very healthy for our Body.A1 spoon a day of Ghee keeps you fit & strong in this fast life where we need to be active & energetic always", "https://amul.com/products/amul-ghee-info.php"]
    ]
    const [key, SetKey] = useState(0);

useEffect(()=>{
    var tl = gsap.timeline();
    tl.from(".Brand_name", {
        x: "-500px",
        duration: 0.3
    }).from(".Brand_desc", {
        x: "-500px",
        duration: 0.2
    }).from(".Brand_link", {
        x: "-500px",
        duration: 0.1
    })
})
    
        
    function BrandItem() {
        return (
            <div className='Item'>
                <div className='Brand'>
                    <div className='Brand_intro'>
                        <div className='Brand_name'>{Brand_slider_data[key][0]}</div>
                        <div className='Brand_desc'>{Brand_slider_data[key][2]}</div>
                        <a href={Brand_slider_data[key][3]} className='Brand_link' rel="noreferrer" target='_blank'>See more &#10138;</a>
                    </div>
                    <div className='Brand_child_2'>
                        <img alt={Brand_slider_data[key][1]} src={Brand_slider_data[key][1]} className='Brand_Image'></img>
                    </div>
                </div>
                <div className='Blur_Images'>
                    <img className='Brand_Image' alt={Brand_slider_data[(key + 1) % Brand_slider_data.length][1]} style={{ filter: `blur(5px)`, scale: `0.6`, transform: "translate(-90%,-30px)"}} src={Brand_slider_data[(key + 1) % Brand_slider_data.length][1]}></img>
                    <img className='Brand_Image' alt={Brand_slider_data[(key + 2) % Brand_slider_data.length][1]} style={{ filter: `blur(8px)`, scale: `0.4`, transform: "translate(-265%,-85px)" }} src={Brand_slider_data[(key + 2) % Brand_slider_data.length][1]}></img>
                    <img className='Brand_Image' alt={Brand_slider_data[(key + 3) % Brand_slider_data.length][1]} style={{ filter: `blur(11px)`, scale: `0.35`, transform: "translate(-481%,-135px)" }} src={Brand_slider_data[(key + 3) % Brand_slider_data.length][1]}></img>
                </div>
            </div>
        )
    }
    return (
        <div className='BrandSlider'>
            <img alt='Baby_cow_Image' style={{ position: "absolute" }} src={BabyCowImage}></img>
            <div className='Brand_list'>
                <BrandItem />
            </div>
            <div className='Arrows'>
                <button className='prev_arrow' onClick={() => { key > 0 ? SetKey(key - 1) : SetKey(8) }}>
                    <AiOutlineArrowLeft />
                </button>
                <button className='next_arrow' onClick={() => { key < 8 ? SetKey(key + 1) : SetKey(0) }}>
                    <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    )
}
