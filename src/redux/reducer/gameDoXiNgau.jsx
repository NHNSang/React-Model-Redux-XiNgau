// tạo redux

const initialState = {
    banChon: true,
    soBanThang: 0,
    tongSoBanChoi: 0,
    listXiNgau: [{xiNgau: 1},{xiNgau: 3},{xiNgau: 4}]
}

// DefaultParameter
export const gameDoXiNgau = (state =initialState ,action)=>{
    // Kiểm tra xem action đang dươdjc gọi tới là gì thông qa type được gởi lên,nếu action gởi lên dugnf để cập nhập giá trị tài xỉu thì sẽ cập nhập lại
    console.log(action)
    // sử dụng cấu trúc điều kiệN switch case
    switch(action.type){
        case "THAY_DOI_DU_LIEU_BAN_CHỌN": {
            // Câph nhập lại dữ liêu jbanj chọn trên state
            // Khi thay đổi cho giá trị cho state, redux ko phát hiện, chúng ta phải clone về trước
            const newState = {...state}
            newState.banChon = action.payload;
            return newState
        }
        case 'BAT_DAU_CHOI': {
            // clone state đang có về
            const newState = {...state}
            // Cập nhập xí ngầu thành giá trí mới
            newState.listXiNgau = action.payload
            // tính giá trị
            let tongSoXiNgau = 0
            // Chạy vòng lặp trong newState
            for (let item of newState.listXiNgau){
                tongSoXiNgau += item.xiNgau
            }
            console.log(tongSoXiNgau)
            // Kiểm tra giá trị người chơi chọn true hay false
            if(tongSoXiNgau>10){
                if(newState.banChon){
                    newState.soBanThang += 1
                }
            }else{
                if(!newState.banChon){
                    newState.soBanThang += 1
                }
            }
            // cộng cho số bàn thắn thêm 1 giá trị
            newState.tongSoBanChoi += 1
            return newState
        }
        default:{
            return state;
        }
    }
    return state
}

