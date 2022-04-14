(function (window) {
//  初始化vue
const vue =new Vue({
	el:'.todoapp',
	data:{
		//任务列表
		message:" ",
		things:[
	
		],

	},
	methods:
	{
		fnn(id){
			const idx =this.things.findIndex(  //findIndex(函数) 返回符合条件的第一个元素的位置
				value => value.id ===id
			)
			this.things.splice(idx,1)//splice 删除(位置，数量)
		},
		addTodo(){
			// this.things.unshift({
			// 	id:+new Date(),
			// 	action:this.message,
			// 	flag:false
			// })
			// this.message=''
			for(let i =1;i<=1;i++){
				this.things.unshift(
					{id:i,
					action:this.message,
					flag:false}
				)
			}
			this.message=''
		}
	
	}
})


})(window);
