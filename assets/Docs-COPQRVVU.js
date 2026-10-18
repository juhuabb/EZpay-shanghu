import{_ as E,o as v,c as $,a as t,w as l,r as d,d as n,i as a,k as p}from"./index-CcuUhNaM.js";const K={class:"docs-page"},x={class:"docs-content"},I={class:"docs-content"},T={class:"docs-content"},k={__name:"Docs",setup(R){const y=p([{method:"POST",path:"/api/merchant/pay",desc:"创建支付订单"},{method:"POST",path:"/api/merchant/query",desc:"查询订单状态"},{method:"POST",path:"/api/merchant/refund",desc:"申请退款"}]),m=p([{name:"X-Api-Key",required:"是",desc:"商户API Key（在「凭证管理」页面获取）"},{name:"X-Timestamp",required:"是",desc:"秒级时间戳，与服务器时间差不超过5分钟"},{name:"X-Signature",required:"是",desc:"RSA签名（Base64编码），签名数据 = apiKey + timestamp + 请求体原文"},{name:"X-Nonce",required:"是",desc:"随机字符串（8-64位，建议32位hex），每次请求必须不同，防重放"}]),g=p([{name:"out_trade_no",type:"string",required:"是",desc:"商户订单号（字母/数字/下划线/短横线，≤64位），商户系统内唯一"},{name:"subject",type:"string",required:"是",desc:"订单标题（≤128位，自动过滤HTML标签）"},{name:"amount",type:"string",required:"是",desc:'支付金额（积分，最多两位小数，>0且≤999999.99，如 "10.00"）'},{name:"notify_url",type:"string",required:"是",desc:"异步通知地址（https，≤512位，禁止内网地址）"},{name:"return_url",type:"string",required:"否",desc:"支付成功后跳转地址（https，≤512位）"},{name:"pay_type",type:"int",required:"否",desc:"支付方式：1=跳转支付(默认) 2=扫码 3=唤醒APP"},{name:"body",type:"string",required:"否",desc:"订单描述（≤512位，自动过滤HTML标签）"},{name:"extra",type:"string",required:"否",desc:"附加数据（≤1024位，原样存储，查询时不返回）"}]),b=p([{type:"1",name:"跳转支付",field:"pay_url",desc:"商户将用户重定向到 pay_url 网页完成支付（默认方式）"},{type:"2",name:"扫码支付",field:"qr_content",desc:"商户用 qr_content 生成二维码，用户用APP扫码完成支付"},{type:"3",name:"唤醒APP",field:"app_url",desc:"商户打开 app_url 唤起APP，未安装可回退到 pay_url 网页支付"}]),f=p([{name:"order_no",type:"string",desc:"平台订单号（PAY开头）"},{name:"out_trade_no",type:"string",desc:"商户订单号（即请求时传入的）"},{name:"amount",type:"float",desc:"支付金额（积分）"},{name:"subject",type:"string",desc:"订单标题"},{name:"status",type:"int",desc:"订单状态（创建后为0=待支付）"},{name:"pay_type",type:"int",desc:"支付方式（与请求一致）"},{name:"pay_url",type:"string",desc:"网页支付链接（所有模式都返回）"},{name:"app_url",type:"string",desc:"APP唤醒链接（wjfpay://pay?order_no=xxx）"},{name:"qr_content",type:"string",desc:"二维码内容（APP唤醒链接，用于生成二维码）"},{name:"expired_at",type:"string",desc:"订单过期时间（30分钟后）"}]),_=p([{name:"order_no",type:"string",desc:"平台订单号"},{name:"out_trade_no",type:"string",desc:"商户订单号（创建订单时传入的）"},{name:"amount",type:"float",desc:"支付金额（积分）"},{name:"status",type:"int",desc:"订单状态：1=已支付，2=已退款"},{name:"paid_at",type:"string",desc:"支付/退款时间"},{name:"timestamp",type:"int",desc:"通知发送时间（秒级时间戳）"}]),A=p([{name:"order_no",type:"string",required:"二选一",desc:"平台订单号"},{name:"out_trade_no",type:"string",required:"二选一",desc:"商户订单号（创建订单时传入的）"}]),P=p([{value:"0",text:"待支付",desc:"订单已创建，等待用户支付"},{value:"1",text:"已支付",desc:"用户已确认支付，积分已扣除"},{value:"2",text:"已退款",desc:"商户已发起退款，积分已退还用户"},{value:"3",text:"已取消",desc:"订单已取消"},{value:"4",text:"已过期",desc:"超过30分钟未支付，自动过期"}]),c=p([{name:"order_no",type:"string",required:"二选一",desc:"平台订单号"},{name:"out_trade_no",type:"string",required:"二选一",desc:"商户订单号（创建订单时传入的）"},{name:"refund_amount",type:"string",required:"否",desc:"退款金额（最多两位小数，不传则全额退款，不能大于支付金额）"},{name:"reason",type:"string",required:"否",desc:"退款原因（≤256位）"}]),S=p([{code:"0",msg:"成功"},{code:"400",msg:"参数错误（必填项缺失 / 长度超限 / 格式不合法 / 金额错误 / URL不合法 / 订单号重复 / 退款金额超限 / 商户余额不足等，详情见msg字段）"},{code:"401",msg:"认证失败（缺少认证参数 / API Key无效 / 商户未启用支付 / 未配置RSA密钥 / 缺少签名 / 签名验证失败 / 缺少nonce / nonce已使用 / 时间戳过期）"},{code:"403",msg:"请求来源域名与商户绑定域名不匹配"},{code:"404",msg:"订单不存在（查询/退款时）"},{code:"500",msg:"服务器内部错误"}]);return(N,e)=>{const i=d("el-alert"),o=d("el-card"),r=d("el-table-column"),s=d("el-table"),u=d("el-tab-pane"),w=d("el-tabs");return v(),$("div",K,[t(o,{shadow:"never"},{header:l(()=>[...e[0]||(e[0]=[n("span",null,"一、接入流程",-1)])]),default:l(()=>[e[2]||(e[2]=n("ol",{class:"docs-list"},[n("li",null,"在前台完成商户认证，后台审核通过后获得商户资格。"),n("li",null,"登录商户管理后台，在「凭证管理」页面获取 API Key 和 RSA密钥对（公钥+私钥）。"),n("li",null,"在「凭证管理」页面获取平台RSA公钥，用于验证异步通知签名。"),n("li",null,"商户系统调用创建支付订单接口，平台返回支付链接。"),n("li",null,"商户将用户引导至支付链接完成支付（跳转/扫码/唤醒APP）。"),n("li",null,"用户支付成功后，平台异步通知商户系统（notify_url）。"),n("li",null,"商户也可主动调用查询接口确认支付状态。"),n("li",null,"如需退款，调用退款接口，积分退还用户并从商户账户扣除。")],-1)),t(i,{type:"info",closable:!1,style:{"margin-top":"10px"}},{default:l(()=>[...e[1]||(e[1]=[a(" API认证仅需 API Key + RSA签名，不使用 APPID 和 API Secret（这两个字段仅用于商户端内部管理）。 ",-1)])]),_:1})]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[3]||(e[3]=[n("span",null,"二、API地址",-1)])]),default:l(()=>[e[4]||(e[4]=n("p",null,[a("API基础地址："),n("code",null,"https://192.168.44.132:7878api/merchant/")],-1)),t(s,{data:y.value,border:""},{default:l(()=>[t(r,{prop:"method",label:"请求方式",width:"100"}),t(r,{prop:"path",label:"接口地址"}),t(r,{prop:"desc",label:"说明"})]),_:1},8,["data"])]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[5]||(e[5]=[n("span",null,"三、认证方式",-1)])]),default:l(()=>[e[7]||(e[7]=n("p",null,"每个请求需在HTTP请求头中携带以下4个字段（全部必填）：",-1)),t(s,{data:m.value,border:""},{default:l(()=>[t(r,{prop:"name",label:"请求头",width:"150"}),t(r,{prop:"required",label:"必填",width:"80",align:"center"}),t(r,{prop:"desc",label:"说明"})]),_:1},8,["data"]),t(i,{type:"warning",closable:!1,style:{"margin-top":"10px"}},{default:l(()=>[...e[6]||(e[6]=[a(" 4个请求头缺一不可，缺少任何一个请求将被拒绝（HTTP 401）。Content-Type 必须为 application/json。 ",-1)])]),_:1})]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[8]||(e[8]=[n("span",null,"四、RSA密钥格式说明",-1)])]),default:l(()=>[n("div",x,[e[10]||(e[10]=n("p",null,[n("strong",null,"密钥格式："),a("标准PEM格式（PKCS#8），即 OpenSSL 默认输出格式。")],-1)),e[11]||(e[11]=n("p",null,"商户在「凭证管理」页面点击「生成RSA密钥」后，平台返回如下格式的密钥对：",-1)),e[12]||(e[12]=n("pre",{class:"code-block"},`私钥（PKCS#8格式）：
-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQ...
（多行base64编码）
-----END PRIVATE KEY-----

公钥：
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
（多行base64编码）
-----END PUBLIC KEY-----`,-1)),e[13]||(e[13]=n("p",null,[n("strong",null,"各语言加载方式：")],-1)),e[14]||(e[14]=n("ul",{class:"docs-list"},[n("li",null,[n("strong",null,"PHP："),a("直接传入完整PEM字符串给 "),n("code",null,"openssl_pkey_get_private()")]),n("li",null,[n("strong",null,"Python："),a("使用 "),n("code",null,"cryptography"),a(" 库的 "),n("code",null,"serialization.load_pem_private_key()")]),n("li",null,[n("strong",null,"Node.js："),a("使用 "),n("code",null,"crypto.createSign()"),a("，直接传入PEM字符串")]),n("li",null,[n("strong",null,"Java："),a("需去除PEM头尾，将base64部分解码后用 "),n("code",null,"PKCS8EncodedKeySpec"),a(" 加载")])],-1)),t(i,{type:"info",closable:!1},{default:l(()=>[...e[9]||(e[9]=[a(" 请直接复制完整PEM内容（包含 -----BEGIN/END----- 头尾行）使用，无需手动去除头尾或换行。 ",-1)])]),_:1})])]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[15]||(e[15]=[n("span",null,"五、签名方法",-1)])]),default:l(()=>[n("div",I,[e[17]||(e[17]=n("p",null,[n("strong",null,"签名算法："),a("SHA256withRSA")],-1)),e[18]||(e[18]=n("p",null,[n("strong",null,"签名数据："),a("apiKey + timestamp + 请求体原始内容（JSON字符串）")],-1)),e[19]||(e[19]=n("p",null,[n("strong",null,"签名步骤：")],-1)),e[20]||(e[20]=n("ol",{class:"docs-list"},[n("li",null,"将 apiKey、timestamp（秒级时间戳）、请求体JSON字符串依次拼接为一个字符串。"),n("li",null,"使用商户RSA私钥对拼接后的字符串进行SHA256withRSA签名。"),n("li",null,[a("将签名结果进行Base64编码，放入请求头 "),n("code",null,"X-Signature"),a("。")]),n("li",null,[a("生成一个8-64位的随机字符串（建议32位hex），放入请求头 "),n("code",null,"X-Nonce"),a("。")])],-1)),t(i,{type:"warning",closable:!1},{default:l(()=>[...e[16]||(e[16]=[a(" 注意事项：",-1),n("br",null,null,-1),a(" 1. timestamp 必须为秒级时间戳，且与服务器时间差不超过5分钟。",-1),n("br",null,null,-1),a(" 2. X-Nonce 每次请求必须不同，同一 api_key + nonce 在5分钟内不可重复使用（防重放）。",-1),n("br",null,null,-1),a(' 3. 签名数据中的"请求体"必须与实际发送的 HTTP body 完全一致（字节级），否则验签失败。 ',-1)])]),_:1})])]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[21]||(e[21]=[n("span",null,"六、创建支付订单",-1)])]),default:l(()=>[e[22]||(e[22]=n("p",null,[n("strong",null,"接口："),a("POST /api/merchant/pay")],-1)),e[23]||(e[23]=n("p",null,[n("strong",null,"请求参数（JSON Body）：")],-1)),t(s,{data:g.value,border:""},{default:l(()=>[t(r,{prop:"name",label:"参数名",width:"180"}),t(r,{prop:"type",label:"类型",width:"100"}),t(r,{prop:"required",label:"必填",width:"80",align:"center"}),t(r,{prop:"desc",label:"说明"})]),_:1},8,["data"])]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[24]||(e[24]=[n("span",null,"七、支付方式说明",-1)])]),default:l(()=>[e[25]||(e[25]=n("p",null,[a("通过 "),n("code",null,"pay_type"),a(" 参数选择支付方式，不传默认为 1（跳转支付）。")],-1)),t(s,{data:b.value,border:""},{default:l(()=>[t(r,{prop:"type",label:"pay_type",width:"100",align:"center"}),t(r,{prop:"name",label:"方式名称",width:"120"}),t(r,{prop:"field",label:"使用字段",width:"140"}),t(r,{prop:"desc",label:"说明"})]),_:1},8,["data"]),e[26]||(e[26]=n("div",{style:{"margin-top":"15px"}},[n("p",null,[n("strong",null,"1. 跳转支付（pay_type=1）")]),n("p",null,[a("商户将用户重定向到返回的 "),n("code",null,"pay_url"),a("，在网页上完成支付。支付完成后可跳回 "),n("code",null,"return_url"),a("。")]),n("pre",{class:"code-block"},"window.location.href = response.data.pay_url;"),n("p",null,[n("strong",null,"2. 扫码支付（pay_type=2）")]),n("p",null,[a("商户使用返回的 "),n("code",null,"qr_content"),a("（APP唤醒链接 wjfpay://pay?order_no=xxx）在自己页面生成二维码，用户用APP扫码后在APP内完成支付。")]),n("pre",{class:"code-block"},`new QRCode(document.getElementById("qrcode"), {
    text: response.data.qr_content,
    width: 200,
    height: 200
});`),n("p",null,[n("strong",null,"3. 唤醒APP（pay_type=3）")]),n("p",null,[a("商户尝试打开返回的 "),n("code",null,"app_url"),a("（wjfpay://pay?order_no=xxx）唤起APP进行支付。如果APP未安装，可回退到 "),n("code",null,"pay_url"),a(" 网页支付。")]),n("pre",{class:"code-block"},`var appUrl = response.data.app_url;
var payUrl = response.data.pay_url;
window.location.href = appUrl;
setTimeout(function() {
    window.location.href = payUrl;
}, 2000);`)],-1))]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[27]||(e[27]=[n("span",null,"八、创建支付响应",-1)])]),default:l(()=>[e[29]||(e[29]=n("p",null,[n("strong",null,"响应字段：")],-1)),t(s,{data:f.value,border:"",style:{"margin-bottom":"15px"}},{default:l(()=>[t(r,{prop:"name",label:"字段",width:"150"}),t(r,{prop:"type",label:"类型",width:"100"}),t(r,{prop:"desc",label:"说明"})]),_:1},8,["data"]),e[30]||(e[30]=n("p",null,[n("strong",null,"响应示例：")],-1)),e[31]||(e[31]=n("pre",{class:"code-block"},`{
  "code": 0,
  "msg": "success",
  "data": {
    "order_no": "PAY202607301600123456",
    "out_trade_no": "ORDER20260101001",
    "amount": 10.00,
    "subject": "商品购买",
    "status": 0,
    "pay_type": 1,
    "pay_url": "https://192.168.44.132:7878/pay.html?order_no=PAY202607301600123456",
    "app_url": "wjfpay://pay?order_no=PAY202607301600123456",
    "qr_content": "wjfpay://pay?order_no=PAY202607301600123456",
    "expired_at": "2026-07-30 16:30:00"
  }
}`,-1)),t(i,{type:"info",closable:!1,style:{"margin-top":"10px"}},{default:l(()=>[...e[28]||(e[28]=[a(" 所有模式都返回 pay_url、app_url、qr_content 三个字段。pay_type 仅提示商户优先使用哪个字段。订单30分钟内未支付自动过期。 ",-1)])]),_:1})]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[32]||(e[32]=[n("span",null,"九、查询订单状态",-1)])]),default:l(()=>[e[33]||(e[33]=n("p",null,[n("strong",null,"接口："),a("POST /api/merchant/query")],-1)),e[34]||(e[34]=n("p",null,"商户可通过此接口主动查询订单状态，用于补漏或确认支付结果。",-1)),e[35]||(e[35]=n("p",null,[n("strong",null,"请求参数：")],-1)),t(s,{data:A.value,border:"",style:{"margin-bottom":"15px"}},{default:l(()=>[t(r,{prop:"name",label:"参数名",width:"180"}),t(r,{prop:"type",label:"类型",width:"100"}),t(r,{prop:"required",label:"必填",width:"80",align:"center"}),t(r,{prop:"desc",label:"说明"})]),_:1},8,["data"]),e[36]||(e[36]=n("p",null,[n("strong",null,"响应示例：")],-1)),e[37]||(e[37]=n("pre",{class:"code-block"},`{
  "code": 0,
  "msg": "success",
  "data": {
    "order_no": "PAY202607301600123456",
    "out_trade_no": "ORDER20260101001",
    "amount": 10.00,
    "subject": "商品购买",
    "status": 1,
    "status_text": "已支付",
    "paid_at": "2026-07-30 16:05:00",
    "created_at": "2026-07-30 16:00:00"
  }
}`,-1)),e[38]||(e[38]=n("p",null,[n("strong",null,"status 状态值说明：")],-1)),t(s,{data:P.value,border:"",style:{"margin-bottom":"15px"}},{default:l(()=>[t(r,{prop:"value",label:"status",width:"100",align:"center"}),t(r,{prop:"text",label:"状态",width:"120"}),t(r,{prop:"desc",label:"说明"})]),_:1},8,["data"])]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[39]||(e[39]=[n("span",null,"十、申请退款",-1)])]),default:l(()=>[e[41]||(e[41]=n("p",null,[n("strong",null,"接口："),a("POST /api/merchant/refund")],-1)),e[42]||(e[42]=n("p",null,"商户可对已支付的订单发起退款，支持全额或部分退款。退款后积分退还给支付用户，从商户账户扣除对应积分。退款后触发异步通知。",-1)),e[43]||(e[43]=n("p",null,[n("strong",null,"请求参数：")],-1)),t(s,{data:c.value,border:"",style:{"margin-bottom":"15px"}},{default:l(()=>[t(r,{prop:"name",label:"参数名",width:"180"}),t(r,{prop:"type",label:"类型",width:"100"}),t(r,{prop:"required",label:"必填",width:"80",align:"center"}),t(r,{prop:"desc",label:"说明"})]),_:1},8,["data"]),e[44]||(e[44]=n("p",null,[n("strong",null,"响应示例：")],-1)),e[45]||(e[45]=n("pre",{class:"code-block"},`{
  "code": 0,
  "msg": "退款成功",
  "data": {
    "order_no": "PAY202607301600123456",
    "refund_amount": 10.00,
    "status": 2
  }
}`,-1)),t(i,{type:"warning",closable:!1},{default:l(()=>[...e[40]||(e[40]=[a(" 仅 status=1（已支付）的订单可退款；退款金额不能超过支付金额；商户积分余额不足时退款失败。 ",-1)])]),_:1})]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[46]||(e[46]=[n("span",null,"十一、异步通知（Webhook）",-1)])]),default:l(()=>[n("div",T,[e[48]||(e[48]=n("p",null,[a("用户支付成功或退款成功后，平台向商户创建订单时填写的 "),n("code",null,"notify_url"),a(" 发送POST请求（Content-Type: application/json）。")],-1)),t(i,{type:"warning",closable:!1,style:{"margin-bottom":"15px"}},{default:l(()=>[...e[47]||(e[47]=[a(" 通知格式与API响应不同！通知只有 data 和 signature 两个字段，没有 code/msg。 ",-1)])]),_:1}),e[49]||(e[49]=n("p",null,[n("strong",null,"通知数据格式：")],-1)),e[50]||(e[50]=n("pre",{class:"code-block"},`{
  "data": {
    "order_no": "PAY202607301600123456",
    "out_trade_no": "ORDER20260101001",
    "amount": 10.00,
    "status": 1,
    "paid_at": "2026-07-30 16:05:00",
    "timestamp": 1753857900
  },
  "signature": "Base64编码的RSA签名"
}`,-1)),e[51]||(e[51]=n("p",null,[a("同时，签名也会通过HTTP请求头 "),n("code",null,"X-Platform-Signature"),a(" 传递。")],-1)),e[52]||(e[52]=n("p",null,[n("strong",null,"data 字段说明：")],-1)),t(s,{data:_.value,border:"",style:{"margin-bottom":"15px"}},{default:l(()=>[t(r,{prop:"name",label:"字段",width:"150"}),t(r,{prop:"type",label:"类型",width:"100"}),t(r,{prop:"desc",label:"说明"})]),_:1},8,["data"]),e[53]||(e[53]=n("p",null,[n("strong",null,"验签方法：")],-1)),e[54]||(e[54]=n("ol",{class:"docs-list"},[n("li",null,[a("取 "),n("code",null,"data"),a(" 对象，做 "),n("code",null,"json_encode($data, JSON_UNESCAPED_UNICODE)"),a(" 得到字符串")]),n("li",null,[a("用"),n("strong",null,"平台RSA公钥"),a("（在「凭证管理」页面获取）对该字符串验证 "),n("code",null,"signature"),a("（RSA-SHA256）")]),n("li",null,"验签通过后处理业务逻辑")],-1)),e[55]||(e[55]=n("p",null,[n("strong",null,"响应要求：")],-1)),e[56]||(e[56]=n("p",null,"商户服务器需返回 HTTP 2xx 状态码表示接收成功。非2xx视为通知失败。建议做幂等处理，同一订单可能收到多次通知。",-1)),e[57]||(e[57]=n("p",null,"通知中 status=1 为支付成功，status=2 为退款成功。",-1))])]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[58]||(e[58]=[n("span",null,"十二、签名示例代码",-1)])]),default:l(()=>[t(w,null,{default:l(()=>[t(u,{label:"PHP"},{default:l(()=>[...e[59]||(e[59]=[n("pre",{class:"code-block"},`<?php
// RSA签名 - PHP示例
// $privateKey 为完整PEM格式私钥字符串（含 -----BEGIN/END PRIVATE KEY----- 头尾）
function rsaSign($apiKey, $timestamp, $body, $privateKey) {
    $data = $apiKey . $timestamp . $body;
    openssl_sign($data, $signature, $privateKey, OPENSSL_ALGO_SHA256);
    return base64_encode($signature);
}

// RSA验签 - 验证平台通知
// $publicKey 为平台RSA公钥（完整PEM格式）
function rsaVerify($notifyData, $signature, $publicKey) {
    $dataStr = json_encode($notifyData, JSON_UNESCAPED_UNICODE);
    return openssl_verify($dataStr, base64_decode($signature),
        $publicKey, OPENSSL_ALGO_SHA256) === 1;
}

// === 创建支付订单 ===
$apiKey = 'your_api_key';
$timestamp = time();
$nonce = bin2hex(random_bytes(16)); // 32位随机字符串
$body = json_encode([
    'out_trade_no' => 'ORDER20260101001',
    'subject' => '商品购买',
    'amount' => '10.00',
    'pay_type' => 1,
    'notify_url' => 'https://your-site.com/notify.php',
    'return_url' => 'https://your-site.com/return.php'
]);

$privateKey = '-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYw...
-----END PRIVATE KEY-----';

$signature = rsaSign($apiKey, $timestamp, $body, $privateKey);

$ch = curl_init('https://192.168.44.132:7878api/merchant/pay');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'X-Api-Key: ' . $apiKey,
    'X-Timestamp: ' . $timestamp,
    'X-Signature: ' . $signature,
    'X-Nonce: ' . $nonce
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;

// === 验证异步通知 ===
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
$notifyData = $data['data'];
$signature = $data['signature'];

$platformPublicKey = '-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A...
-----END PUBLIC KEY-----';

if (rsaVerify($notifyData, $signature, $platformPublicKey)) {
    $orderNo = $notifyData['order_no'];
    $status = $notifyData['status']; // 1=支付成功, 2=退款成功
    // 处理业务逻辑（注意幂等）
    http_response_code(200);
    echo json_encode(['code' => 0]);
}
?>`,-1)])]),_:1}),t(u,{label:"Python"},{default:l(()=>[...e[60]||(e[60]=[n("pre",{class:"code-block"},`import json
import time
import secrets
import base64
import requests
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import padding

# RSA签名
def rsa_sign(api_key, timestamp, body, private_key_pem):
    data = (api_key + str(timestamp) + body).encode('utf-8')
    private_key = serialization.load_pem_private_key(
        private_key_pem.encode('utf-8'), password=None)
    signature = private_key.sign(data, padding.PKCS1v15(), hashes.SHA256())
    return base64.b64encode(signature).decode('utf-8')

# RSA验签（验证平台通知）
def rsa_verify(notify_data, signature_b64, public_key_pem):
    data_str = json.dumps(notify_data, ensure_ascii=False)
    public_key = serialization.load_pem_public_key(
        public_key_pem.encode('utf-8'))
    signature = base64.b64decode(signature_b64)
    try:
        public_key.verify(signature, data_str.encode('utf-8'),
                          padding.PKCS1v15(), hashes.SHA256())
        return True
    except Exception:
        return False

# 创建支付订单
api_key = 'your_api_key'
timestamp = int(time.time())
nonce = secrets.token_hex(16)
body = json.dumps({
    'out_trade_no': 'ORDER20260101001',
    'subject': '商品购买',
    'amount': '10.00',
    'pay_type': 1,
    'notify_url': 'https://your-site.com/notify',
    'return_url': 'https://your-site.com/return'
})

private_key_pem = '''-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYw...
-----END PRIVATE KEY-----'''

signature = rsa_sign(api_key, timestamp, body, private_key_pem)

response = requests.post(
    'https://192.168.44.132:7878api/merchant/pay',
    data=body,
    headers={
        'Content-Type': 'application/json',
        'X-Api-Key': api_key,
        'X-Timestamp': str(timestamp),
        'X-Signature': signature,
        'X-Nonce': nonce
    }
)
print(response.json())`,-1)])]),_:1}),t(u,{label:"Node.js"},{default:l(()=>[...e[61]||(e[61]=[n("pre",{class:"code-block"},`const crypto = require('crypto');
const https = require('https');

// RSA签名
function rsaSign(apiKey, timestamp, body, privateKeyPem) {
    const data = apiKey + timestamp + body;
    const sign = crypto.createSign('SHA256');
    sign.update(data);
    return sign.sign(privateKeyPem, 'base64');
}

// RSA验签（验证平台通知）
function rsaVerify(notifyData, signatureB64, publicKeyPem) {
    const dataStr = JSON.stringify(notifyData);
    const verify = crypto.createVerify('SHA256');
    verify.update(dataStr);
    return verify.verify(publicKeyPem, signatureB64, 'base64');
}

// 创建支付订单
const apiKey = 'your_api_key';
const timestamp = Math.floor(Date.now() / 1000);
const nonce = crypto.randomBytes(16).toString('hex');
const body = JSON.stringify({
    out_trade_no: 'ORDER20260101001',
    subject: '商品购买',
    amount: '10.00',
    pay_type: 1,
    notify_url: 'https://your-site.com/notify',
    return_url: 'https://your-site.com/return'
});

const privateKeyPem = \`-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYw...
-----END PRIVATE KEY-----\`;

const signature = rsaSign(apiKey, timestamp, body, privateKeyPem);

const options = {
    hostname: '192.168.44.132:7878',
    path: '/api/merchant/pay',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
        'X-Timestamp': String(timestamp),
        'X-Signature': signature,
        'X-Nonce': nonce
    }
};

const req = https.request(options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => console.log(JSON.parse(data)));
});
req.write(body);
req.end();`,-1)])]),_:1})]),_:1})]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[62]||(e[62]=[n("span",null,"十三、错误码说明",-1)])]),default:l(()=>[t(s,{data:S.value,border:""},{default:l(()=>[t(r,{prop:"code",label:"HTTP状态/code",width:"140"}),t(r,{prop:"msg",label:"说明"})]),_:1},8,["data"])]),_:1}),t(o,{shadow:"never",style:{"margin-top":"20px"}},{header:l(()=>[...e[63]||(e[63]=[n("span",null,"十四、安全要求",-1)])]),default:l(()=>[e[64]||(e[64]=n("ul",{class:"docs-list"},[n("li",null,"RSA私钥必须安全存储，切勿泄露或在前端暴露"),n("li",null,"notify_url 和 return_url 必须为 https 协议"),n("li",null,"禁止使用内网IP或localhost作为通知地址（平台会校验）"),n("li",null,"请求来源域名需与商户绑定的网站域名匹配（www自动适配）"),n("li",null,"商户不能支付自己创建的订单（防自付漏洞）"),n("li",null,"每笔订单使用唯一的 out_trade_no，平台会查重"),n("li",null,"退款前请确认商户积分余额充足"),n("li",null,"通知接口需做幂等处理，避免重复加积分")],-1))]),_:1})])}}},B=E(k,[["__scopeId","data-v-6ce9e8f9"]]);export{B as default};
