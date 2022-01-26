import React from 'react'
import './donate.css'
export default function Donate() {
    return (
        <div className='donate'>
            <div className="donateContainer">
                <div className="donateLeft">
                    <h2>Ủng Hộ</h2>
                    <p>Chúng tôi xin gửi lời cảm ơn đến sự ủng hộ của quý mạnh thường quân, các nhà hảo tâm để có thể đem đến cho đồng bào những món quà thiết thực nhất!</p>
                    <p><span>Số tài khoản:</span> <span>032642454264</span></p>
                    <p><span>Ngân Hàng:</span> <span>VietcomBank</span></p>
                    <p><span>Chủ tài khoản:</span> <span>Trần Thị Hải Yến</span></p>
                    <button>Liên Hệ Hỗ Trợ</button>
                </div>
                <div className="donateRight">
                    <h2>Trở Thành Một Phần Của Câu Lạc Bộ</h2>
                    <p>Ban Tổ chức CLB Cháo Thứ 7 xin gửi lời cảm ơn chân thành đến quý mạnh thường quân, các bạn thiện nguyện viên đã luôn quan tâm và theo dõi đến các hoạt động gây quỹ của CLB.</p>
                    <p>CLB Thiện Nguyện Cháo Thứ 7 Kính gởi lời cảm ơn chân thành nhất đến những Tấm lòng vàng đã ủng hộ, chung tay cùng CLB thực hiện chương trình.</p>
                    <p>Rất mong nhận được sự đồng hành của quý vị để chia sẻ, giúp đỡ những mảnh đời kém may mắn ngoài xã hội.</p>
                    <div className="buttonGroups">
                        <button>Tham Gia Ngay</button>
                        <button>Xem Thêm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
