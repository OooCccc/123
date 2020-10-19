(function () {
	// 注册一个全局自定义指令 `v-focus`
	// Vue.directive("focus", {
	// 	// 当被绑定的元素插入到 DOM 中时……
	// 	inserted: function (el) {
	// 		// 聚焦元素
	// 		el.focus();
	// 	},
	// });
	window.app = new Vue({
		data: {
			todos: JSON.parse(window.localStorage.getItem("todos") || "[]"),
			// //是否全选
			// isActice: false,
			//是否是编辑状态
			isEditing: null,
			filterText: "all",
		},
		//计算属性
		//以属性的方式来调用 使用时默认调用get()方法  当该属性的状态（值）发生变化时 就会调用set（）方法
		computed: {
			remainActive() {
				return this.todos.filter((v) => !v.completed).length;
			},
			toggleAllstat: {
				get() {
					return this.todos.every((v) => v.completed);
				},
				set() {
					const checked = !this.toggleAllstat;
					this.todos.forEach((v) => {
						v.completed = checked;
					});
				},
			},
			//切换路由状态 使用hash()
			flterTodos() {
				switch (this.filterText) {
					case "all":
						return this.todos;
					case "active":
						return this.todos.filter((v) => !v.completed);
					case "completed":
						return this.todos.filter((v) => v.completed);
					default:
						return this.todos;
				}
			},
		},
		//侦听者
		watch: {
			todos: {
				handler: function () {
					window.localStorage.setItem("todos", JSON.stringify(this.todos));
				},
				deep: true,
			},
		},
		methods: {
			//增加待办事项
			handleAddTodos(e) {
				//1.获取数据
				//2.进行合法性检测
				//3.添加到数组中
				//4.清空input框
				let value = e.target.value;
				if (!value.trim().length) {
					return;
				} else {
					this.todos.push({
						id: this.todos.length
							? this.todos[this.todos.length - 1].id + 1
							: 1,
						title: value,
						completed: false,
					});
					e.target.value = "";
				}
			},
			//处理删除事件
			handleDeleTodos(index) {
				this.todos.splice(index, 1);
			},
			handleDbClickEdit(item) {
				// this.todos.forEach((v) => {
				// 	v.editing = false;
				// 	if (v.id == index) {
				// 		this.todos[index].editing = true;
				// 	}
				// });
				this.isEditing = item;
			},
			//编辑 回车事件处理
			handleEditEnter(index, e, todo) {
				let editingContent = e.target.value;
				if (!editingContent.trim().length) {
					this.todos.splice(index, 1);
					return;
				} else {
					//找到该对象进行修改
					// let i = this.todos.findIndex((v) => v.id === index);
					todo.title = editingContent;
					//去除编辑样式
					this.isEditing = null;
				}
			},
			//编辑 esc事件处理
			handleEditEsc() {
				this.isEditing = null;
			},
			//清除已完成事件处理
			handleClearComplete() {
				// 找到yiwanhe
				// 清除的对象事件;
				//注意 不要再foreach中删除数组元素！！！！！！！！！！！！！！！
				//只能用for循环来操作
				for (let i = 0; i < this.todos.length; i++) {
					if (this.todos[i].completed) {
						this.todos.splice(i, 1);
						i--;
					}
				}
			},
		},
		//私有的自定义指令
		directives: {
			focus: {
				inserted: function (el, bind) {
					el.focus();
				},
			},
		},
	}).$mount("#app");

	//页面初始化的时候调用一次
	getHashChange();
	window.onhashchange = getHashChange;
	function getHashChange() {
		window.app.filterText = window.location.hash.substr(2);
	}
})();
