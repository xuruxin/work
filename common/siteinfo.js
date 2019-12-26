// master 生产环境 
// develop 本地开发环境 
const apiType = 'master';
var websiteUrl = ''
if(apiType == 'master'){
	websiteUrl = 'https://pintuan.yundongqugou.com/'
}else if(apiType == 'develop'){
	websiteUrl = 'http://sanrenpin.test.com/'
}else{
	websiteUrl = 'http://sanrenpin.test.com/'
}	 
export default {  
    websiteUrl
}