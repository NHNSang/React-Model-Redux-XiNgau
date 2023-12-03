
// Tạo impot đến reduxjs để nhắc lệnh
import {configureStore} from '@reduxjs/toolkit'
import {gameDoXiNgau} from './reducer/gameDoXiNgau.jsx'
export const store = configureStore({
    reducer: {
        // Demo về lưu trữ dữ liệU trên store 
        hoTen: (state,action)=>{
            // bắt tín hiệu dispatch được gửi từ component
            console.log(action)
            if(action.type == 'CHANGE_NAME' ){
                return action.payload
            }
            if(action.type == 'TANG_GIAM_GIA_TRI'){
                
            }
            return 'Đông Trần'
        },
        gameDoXiNgau,
    },
});