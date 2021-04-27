// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
			// 远程数据库，连接之前可以先在 navicat 中测试远程连接，没有问题后在配置到这里
			// 现在你需要开启服务端的 3306 端口，照着文档配置
			// settings: {
      //   client: 'mysql',
      //   host: env('DATABASE_HOST', 'localhost'), // 服务器 IP 地址
      //   port: env.int('DATABASE_PORT', 3306), // mysql 服务端口号，默认就是 3306 
      //   database: env('DATABASE_NAME', 'strapi'), // 服务器 mysql 中的数据库名称
      //   username: env('DATABASE_USERNAME', 'root'), // 服务器上 mysql 的用户名，默认就是 root
      //   password: env('DATABASE_PASSWORD', 'liuzz123'), // 服务器上 mysql 数据库里 root 用户的密码  做剩下的流程这个密码是数据库的？对，%后面呢？那是关键字，特定命令-p后面是数据库的密码？
			// 	// 登录管理员 root 用户（root 用户密码）
			// 	// 设置添加新的账号（新账号新密码）相当于设置新的是吗？ 对就上面那条命令？-p后面有空格吗？一定得有，他那个截图有问题
			// 	// mysql -u 用户名 -p   敲回车，然后输入密码，他把密码写在后面是让你知道得输入密码，要不然密码这个东西你看不见
			// 	// 可以明文输入，也可以以看不见的方式输入 这地方输入的都是新的是吗 ？  root 账户的好的那我设置完这个就能连上远程了是吗  no、可以了吗 现在就剩下添加yuan
			// 	// 你可以看下这个，有很多种方式，根据需要使用 好的 谢谢老师 OK，有问题再说 多 吃哈安工的是 多尝试好的88拜拜
      // },
			// 现在这里连接的本地的 mysql 数据库
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),  //远端服务器上的名字
        username: env('DATABASE_USERNAME', 'root'), //远端服务器上数据库的账号
        password: env('DATABASE_PASSWORD', 'liuzz1158'),  //远端服务器上数据库的密码
      },
      options: {},
    },
  },
});
