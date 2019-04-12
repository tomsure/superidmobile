import {requestGet} from '@/api/api.js'
import { MessageBox, Toast } from "mint-ui";
export function getCode() {
  this.show = false;
  const TIME_COUNT = 60;
  if (!this.timer) {
    this.count = TIME_COUNT;
    this.sendCode()
    this.show = false;

    this.timer = setInterval(() => {
      if (this.count > 0 && this.count <= TIME_COUNT) {
        this.count--;
      } else {
        this.show = true;
        clearInterval(this.timer);
        this.timer = null;
      }
    }, 1000);
  }
}

export function tips(msg){
  Toast({
    message:msg,
    position: "top",
    duration: 2000
  });
}
export function msgs(title,msg){
    
}
