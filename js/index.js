function login()
	{
		var name_input = document.getElementById("user_name")
		var pass_input = document.getElementById("user_pass")
		
		if(name_input.value == "1234567")
		{
			if(pass_input.value == "1234567")
			{
				location.href = "src/index.html";
			}
			else
			{
				alert("用户名或密码错误！")
			}
		}
		else{
			alert("该用户不存在，请前往注册！")
		}
	}
	function error(){
		alert("该功能尚未开通，敬请期待！")
	}
	function register(){
		alert("该功能尚未开通，敬请期待！")
	}