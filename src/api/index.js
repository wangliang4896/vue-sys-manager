// api封装示例

// 导入配置好的axios文件
import Axios from "@/axios" 


// 封装axios请求函数，并用export导出
export function getItemList(datas) {
    return Axios({
	url: "/api/getItemList",
	method: "post",
	headers: {
	    'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
	},
	data: datas
    })
}
export function getItem(datas) {
    return Axios({
	url: "/api/getItem",
	method: "post",
	headers: {
	    'Content-Type': 'application/json' //设置请求头请求格式为json
	},
	data: datas
    })
}

export function getItemInfo(datas) {
    return Axios({
	url: "/api/getItemInfo"+datas,
        method: "get",
    })
}

export function vuetest(datas) {
    return Axios({
	url: "/vue/test",
	method: "post",
	headers: {
	    'Content-Type': 'application/json' //设置请求头请求格式为json
	},
	data: datas
    })
}