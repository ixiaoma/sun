<template>
	<div class="bb">
		<div class="login">
			<h1>北京阳光公寓Management System</h1>
			<ul>
				<li><input type="text" name="" id="name" v-model="managerName" placeholder="请输入账号"/></li>
				<li><input type="password" name="" id="password" v-model="managerPass" placeholder="请输入密码"/></li>
				<li><button @click="login">登录</button></li>
			</ul>
			<div class="xijie">
				我曾经认为自己是个太空人，我花了好长一段时间，才发现我只是一名星球之间的寂寞舞者。
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'login',
		data(){
			return {
				managerName:"",
				managerPass:""
			}
		},
		methods:{
			login(){
				const managerName = this.managerName
				const managerPass = this.managerPass
				fetch("http://10.9.151.112:3000/api/user/login",{
                    method:"post",  
                    headers: {"Content-Type":"application/x-www-form-urlencoded"}, 
                    body:`managerName=${managerName}&managerPass=${managerPass}`
                   }).then(res=>res.json()).then(data=>{
                       console.log(data)
                       if(data.msgCode==1){
                           this.$router.push('home')
                       }else if(data.msgCode==2){
                           alert("密码不正确")
                       }else{
						   alert("用户名不存在")
					   }
                   })
			}
		}
	}
</script>

<style scoped>
	.login{padding: 20px;height: 300px;width: 300px;margin: 100px auto;border: 1px solid #FF69B4;background:#FF69B4;opacity: 0.8;border-radius:10px ;}
	.login h1{font-size: 18px;color: aqua;}
	.login ul{margin: 20px auto;padding-left:30px }
	.login ul li input{outline: none;width: 200px;height: 30px;margin:10px 0;border-radius:6px ;}
	li{list-style: none;}
	button{width: 120px;height: 30px;background: aqua;outline: none;margin:30px 0 0 40px ;border-radius:10px ;}
</style>