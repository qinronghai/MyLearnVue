const name=axios.get('https://api.leaked.wiki/randomuser?json=yes').then((response) => {
        console.log("请求成功了", response.data);
      },
      (error) => {
        console.log("请求失败了", error.message);
        })
      console.log(name);