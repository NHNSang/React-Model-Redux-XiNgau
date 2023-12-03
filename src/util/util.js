
// hàm random số ngẫu nhiên trong khoảng vd: từ 1-6 thì nằm trong 1-6
export const randomNumberInRange = (max)=>{
    return Math.floor(Math.random() * max) +1
}