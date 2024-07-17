import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { amul_logo } from '../../Component_list';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Handle_active(e) {
    let prev_active_class = document.querySelector('.amul_navbar_active');
    if (prev_active_class != null) {
        prev_active_class.classList.remove('amul_navbar_active');
    }
    e.target.classList.add('amul_navbar_active');
}

function Navbar({ Brand_check }) {
    const [dropDown_data, SetdropDown_data] = useState([[]])
    const [mobile_navbar_check, Setmobile_navbar_check] = useState(false)
    useEffect(() => {
        document.body.addEventListener('dblclick', () => { SetdropDown_data([[]]) });
    })
    function DropDown() {
        return (
            <>
                <ul className='navbar_dropdown'>
                    {dropDown_data.map((data, i) => {
                        return <a key={i} href={"https://amul.com" + data[1]}>{data[0]}</a>
                    })}
                </ul>
            </>

        );
    }


    let GCMMF_data = [["About Us", "/m/about-us"],
    ["GST Nos", "/files/pdf/Branch_Wise-GSTN.pdf"],
    ["AmulFed Dairy-IMS Policy", "/m/integrated-management-system-policy"],
    ["AmulFed Dairy-Sustainability Report", "/m/sustainability-report"],
    ["Organisation", "/m/organisation"],
    ["Locate Us", "/m/locate-us"],
    ["Chairman Speech", "m/49th-annual-general-body-meeting"],
    ["Awards", "/m/awards"],
    ["Exports", "/m/exports"],
    ["Manufacturing Plant List", "/m/manufacturing-unit-addresses"]]
    let FunAmul_data = [["Amul Topical Story", "/m/amul-topical-story"],
    ["Amul Hits", "/m/amul-hits"],
    ["Contests", "/m/contests"],
    ["Hot Links", "/m/hot-links"],
    ["Action@amul", "/m/action-at-amul"],
    ["Whats New Archive", "/m/whats-new-archive"],
    ["Amul Recipes", "/m/amul-recipes"]]
    let Dairy_News_data = [["Press Release", "/m/press_release"],
    ["Media Coverage", "m/media-coverage"], ["Media Coverage - Video", "/m/video_media"]]
    let Careers_data = [["Careers", "/m/careers"]]
    let AmulIndia_data = [["Amul Relief Trust", "/m/amul-relief-trust"], ["Tree Plantation", "/m/tree-plantation"]]
    let B2B_data = [["Vendor Registration Form - Plastic Waste Management", "/files/pdf/vendor_registration_form_plastic_waste_management_2023-24_11062023.pdf"
    ], ["Shop Amul", "https://shop.amul.in"],
    ["Amul Parlours", "/m/parlours"],
    ["Food Services - HORECA", "/products/horeca.php"],
    ["THR Registration Form", "/files/pdf/thr_registration_form.pdf"], ["Cattle Feed Distributor Registration", "/products/cattle-feed-distributor.php"],
    ["Tender Notice", "/m/tender-notice"],
    ["GCMMF - Suppliers Invited", "/files/pdf/bs_ad_may-210524.pdf"],
    ["GCMMF - Vendor Registration Form", "http://gcmmfpurchase.amul.in/"],
    ["GCMMF - Suppliers Enquiry", "/m/suppliers-enquiry"],
    ["AmulFed Dairy - Vendor Registration Form", "http://afdpurchase.amul.in/VendorReg.aspx"],
    ["Transport Contract", "/m/transport-contract"], ["Ice Cream Transport Contract", "/m/ice-cream-transport-contract"]]


    return (
        <>
            <div className='mobile_navbar' style={{ backgroundColor: "aqua" }} >
                {!mobile_navbar_check && <AiOutlineMenu style={{ width: "24px", height: "24px", flex: "0.5", cursor: "pointer" }} onClick={() => { Setmobile_navbar_check(true) }} />}
                {mobile_navbar_check && <AiOutlineClose style={{ width: "24px", height: "24px", flex: "0.5", cursor: "pointer" }} onClick={() => { Setmobile_navbar_check(false); SetdropDown_data([[]]) }} />}

                <div className='navbar_child_2' style={{ flex: "1.5" }}>
                    <input type='text' placeholder='Search Products'></input>
                </div>
                <img alt='Logo_image' src={amul_logo} style={{ width: "30%",cursor:"pointer" }} onClick={() => { window.location = "./"; }} />
            </div>
            <nav className='Amul_navbar'>

                <div className='navbar_child_0'>
                    <img alt='Logo_image' style={{cursor:"pointer"}} src={amul_logo} onClick={() => { window.location = "./"; }} />
                </div>
                <ul className='navbar_child_1'>
                    <li onClick={(e) => { Handle_active(e); SetdropDown_data([[]]);Brand_check(a=>!a) }}>Brands</li>
                    <li onClick={(e) => { Handle_active(e); SetdropDown_data(GCMMF_data) }}>GCMMF</li>
                    <li onClick={(e) => { Handle_active(e); SetdropDown_data(FunAmul_data) }}>Fun @ amul</li>
                    <li onClick={(e) => { Handle_active(e); SetdropDown_data(Dairy_News_data) }}>Dairy News</li>
                    <li onClick={(e) => { Handle_active(e); SetdropDown_data(Careers_data) }}>Careers</li>
                    <li onClick={(e) => { Handle_active(e); SetdropDown_data(AmulIndia_data) }}>Amul for India</li>
                    <li onClick={(e) => { Handle_active(e); SetdropDown_data(B2B_data) }}>B2B</li>
                </ul>
                <div className='navbar_child_2'>
                    <input type='text' placeholder='Search Products'></input>
                </div>
            </nav>
            <ul className='mobile_navabar_child_1' style={{ display: mobile_navbar_check && dropDown_data[0].length === 0 ? "flex" : "none" }}>
                <li onClick={(e) => { SetdropDown_data([[]]); Brand_check(a=>!a); Setmobile_navbar_check(false) }}>Brands</li>
                <li onClick={(e) => { SetdropDown_data(GCMMF_data); Setmobile_navbar_check(false) }}>GCMMF</li>
                <li onClick={(e) => { SetdropDown_data(FunAmul_data); Setmobile_navbar_check(false) }}>Fun @ amul</li>
                <li onClick={(e) => { SetdropDown_data(Dairy_News_data); Setmobile_navbar_check(false) }}>Dairy News</li>
                <li onClick={(e) => { SetdropDown_data(Careers_data); Setmobile_navbar_check(false) }}>Careers</li>
                <li onClick={(e) => { SetdropDown_data(AmulIndia_data); Setmobile_navbar_check(false) }}>Amul for India</li>
                <li onClick={(e) => { SetdropDown_data(B2B_data); Setmobile_navbar_check(false) }}>B2B</li>
            </ul>
            {dropDown_data[0].length !== 0 && DropDown()}
        </ >
    )
}

export default Navbar
