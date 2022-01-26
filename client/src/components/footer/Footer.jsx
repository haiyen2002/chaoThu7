import React from 'react'
import './footer.css'
export default function Footer() {
    return (
        <div className='footer'>
            <div className="wrapper">
                <div className="footerTop">
                    <p className="node"></p>
                   <h2> Cám Ơn Sự Quan Tâm Của Bạn Đến Chúng Tôi</h2>
                </div>
                <div className="footerContent">
                    <div className="footerContentContainer">
                        <div className="left">
                            <h2 className='logo'>
                                <span>Cháo</span>
                                Thứ
                                <span style={{fontSize: '38px'}}>7</span>
                            </h2>
                            <p>Tìm kiếm chúng tôi</p>
                            <p><i className="fal fa-map-marker-alt"></i> Viện Huyết Học và Truyền Máu Trung Ương</p>
                            <p><i className="fal fa-phone-alt"></i> 0364713664</p>
                            <p><i className="fal fa-envelope"></i> tthyen2002.it@gmail.com</p>
                            <div className="socialMedia">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fab fa-pinterest-p"></i>
                            <i className="fab fa-linkedin-in"></i>
                            </div>
                        </div>
                    <div className="center">
                        <h3>Pages</h3>
                        <p>Trang Chủ</p>
                        <p>Tin Tức</p>
                        <p>Sự Kiện</p>
                        <p>Mạnh Thường Quân</p>
                        <p>Liên Hệ</p>
                    </div>
                    <div className="right">
                        <h3>Form Liên Hệ</h3>
                        <input placeholder='Tên đầy đủ...' type="text" /><br />
                        <input placeholder = 'Địa chỉ email...' type="text" name="" id="" /><br />
                        <input className='mesage' placeholder = 'Nội dung...' type="text" name="" id="" /><br />
                        <button>Send</button>
                    </div>
                    </div>
                </div>
                <div className="footerBottom"></div>
            </div>
        </div>
    )
}
