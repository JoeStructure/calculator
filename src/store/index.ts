import { configureStore } from "@reduxjs/toolkit"
import valService from "../service/valService"
// immer 解决对象嵌套过深的问题
// persist 解决页面刷新数据消失的问题，持久化
export const store = configureStore({
    reducer: {
        val: valService,
        valt: valService,
    }
})

export type RootState = ReturnType<typeof store.getState>

console.log(store.getState())