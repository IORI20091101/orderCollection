http://dohko.wms.ezhe.com/toshiba

mac下 chrome Extensions所在位置
/Users/toshiba/Library/Application Support/Google/chrome/Default/Extensions/fmcfkdaobigbkopahamahckjnifmmolc/1.1.3_0

 HEAD
access_token  08d1fe538981103e44eda493b8db327a    cc2be21be2f728f894dc7e9adf19c5f0

 e48cbb86459f750779ff80f927fe856df7201011
http://www.longdai.com/tianmangyun/bangwoyacps.do?startday=20151001&endday=20151027&key=2YHQPrpFNM3T&sign=fa2fb61088aad7442e47dd81405c38c9

http://api.longdai.com/api/fundplan/getSalesPlanList?platform=mI831ZmttZ8%3D&version=VFf7yqTyVFE%3D&access_token=cc2be21be2f728f894dc7e9adf19c5f0

http://api.longdai.com/api/fundplan/getSalesPlanList


http://dohko.api.longdai.com/api/fundplan/getSalesPlanList

http://dohko.api.longdai.com/api/fundplan/getSalesPlanList?platform=mI831ZmttZ8%3D&version=VFf7yqTyVFE%3D&access_token=cc2be21be2f728f894dc7e9adf19c5f0
209.116.186.242	v13.lscache4.c.android.clients.google.com

http://shop112763410.m.taobao.com/#list=


http://172.16.0.17:31080   longdai-ms
http://172.16.0.17:31085   longdai-auth

需要解决的相关问题
1，使用redis发布和订阅消息
2，了解使用Sequelize
3，使用RabbitMQ 消息代理 暂时用途不明确， 例子不清晰，暂时略过。
4，在express和socket.io之间共享session数据，实现登录退出


longdai 线上管理系统
ms.longdai.com
iYebrFTV9Li8
yangbing


longdai-ms项目部署

longdai－auth所在的机器
172.16.0.17 0.18 0.19 111111

kubectl rolling-update longdai-auth --image=registry.gozap.com:5000/dohko.auth.longdai.com
kubectl describe

rc 和 svc 的配置文件
# kubectl get pods
/home/replication


//用来看日志跳板机器
ssh sundongzhi@223.202.52.182  // 跳板机器

/home/nginx/conf/vhost/longdai_com


less longdai_www.log

ls -ltr  按时间排序

ls -llah 按详情排序

只能从这里跳转


//线上admin
ssh root@192.168.2.116

//api
ssh root@192.168.2.119

//www
ssh root@192.168.2.10    longdaiproxy729YL2X


数据库的跳板机器需要从 223.202.52.182 跳转过来


//数据库
ssh root@192.168.2.105  123456


dg2_15@br

mysql -h 192.168.2.114 -umyviewol -p -P3330 -Dsp2p


//测试环境

172.16.0.254  4300   mysql  root gozapdev

172.16.3.128          6390  redis

172.16.1.147          9200   ES


docker


172.16.0.14

172.16.0.17   密码 111111

git.gozap.com

172.16.1.143

git@172.16.1.143:beyond/longdai-jieqianhua.git

git@172.16.1.143:longdai/longdai-auth.git

172.16.11.203   dohko.www.longdai.com   root 123456

172.16.12.93   dohko.api.longdai.com

vi dohko.www.longdai.com.conf

vi /home/nginx/conf/nginx.conf

ps aux | grep nginx

cd vhost/longdai_com/

cd /home/nginx

more dohko.www.longdai.com.conf

cd vhost/


 shift+ ]

 curl http://172.16.0.17:8000/logs

 /home/nginx/sbin/nginx -s reload

 /home/nginx/sbin/nginx -t

 vi repo.gozap.com.conf

 more yum.gozap.com.conf

 vi repo.gozap.com.conf

 tail -f api.anyview.com.log

 mv dohko.api.ezhe.com.conf api.anyview.com.conf

 cp dohko.api.ezhe.com.conf /home/nginx/conf/vhost/anyview_com/

 ps -ef|grep logstash

 tail -f /usr/local/logstash/nohup.out

 sh /etc/init.d/logstashd

 kill -9 16865

tail -f dohko.service.jieqianhua.com.log

 cat /etc/init.d/logstashd

 dohko.service.jieqianhua.com.conf

 /home/nginx/sbin/nginx -s reload

 ping dohko.service.jieqianhua.com

  ssh -l root 118.186.235.50

  ssh -l root 118.186.245.50

  ssh -l root 118.186.245.60

  ssh -l root 58.68.151.28

  ssh -l root 118.186.245.50

  ssh -l root 172.16.2.32

  ssh -l root 172.16.2.43

  ssh -l root 192.168.2.32

  ssh -l root 172.16.0.112

  scp bitnami-owncloud-8.1.1-0-linux-x64-installer.run root@172.16.2.32:/home/install/

  vi /root/.ssh/known_hosts

  du -sh /home/install/bitnami-owncloud-7.0.4-1-ubuntu-14.04

  wget -b http://downloads.bitnami.com/files/download/owncloud/bitnami-owncloud-7.0.4-1-ubuntu-14.04.zip





http://localhost:8080/index.do?source=bangwoya&sn=b3f8359f2a1131b0280ec459f9a769d2

http://dohko.www.longdai.com/index.do?type=register&randKey=685A575755525D06000105


http://localhost:8080/tianmangyun/report.do?startday=20150918&endday=20150923&sign=ae4194f41fcdbed692746e7d0e4c2044

http://localhost:8080/tianmangyun/bangwoyacps.do?startday=20150918&endday=20150923&sign=ae4194f41fcdbed692746e7d0e4c2044


http://localhost:8080/payEasySyncAccountNotify.do

舒依玉 430211197608058844







kubectl describe svc/longdai-auth

kubectl get svc

kubectl describe pods/longdai-auth-1bapw

kubectl get node

kubectl get pods

ps aux | grep fl

kubectl describe pods/ezhe-m-bea44d955ad56cbb3c462b6d8c25ab2f-rqm3u


