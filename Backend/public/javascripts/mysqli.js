class Mysqli{
    
    constructor(datas) {
        this.createDatabase = {
            host: 'localhost', // IP/域名
            post: 3306, //端口， 默认 3306
            user: 'root', //用户名
            passwd: '', //密码
            name: 'reactdata', //数据库名,只支持小写
            charset: 'utf8mb4', //数据库编码
        }
        this.tableData = {
            tableName: 'datas', // 数据表名
            fields: [ //添加字段
                {
                    name: 'id', // 字段名, 区分大小写, 建议全小写+下划线
                    type: 'int(5)', //字段类型, 不区分大小写
                    primary: true, //是否主键(有且只能有 1 个主键)
                    inc: true //是否自增(只允许主键设置,且为整型时才可设置)
                },
                {
                    name: 'username', 
                    type: 'varchar(64)',
                    index: true //是否设为索引
                },
                {
                    name: 'password',
                    type: 'varchar(32)',
                    index: false
                }
            ]
        }
        this.key = { //设置交互数据可接受关键字段
            name: 'doStyle', //查询字段名
            values: ['add', 'delete', 'change', 'search', 'logIn', 'register'] //按顺序给定：增删改查登录注册查询字段值
        };
        this.Mysqli = require('mysqli');
        this.main(datas);
    }

    main(datas) {console.log('若有请求，必须打印2次')
        if(datas) {
            this.datas = datas;
            this.connectBasedata();
        }
    }

    connectBasedata() { //连接数据库
        this.conn = new this.Mysqli({
            host: this.createDatabase['host'],
            post: this.createDatabase['post'],
            user: this.createDatabase['user'],
            passwd: this.createDatabase['passwd']
        });
        this.db = this.conn.emit(false, this.createDatabase.name); //连接数据库
        this.db
        .tableList()
        .then(list => {
            this.results = {};
            this.doDoatas(); //疑惑，为什么放在this.connectBasedata()后，会执行在它前面
        })
        .catch(err => {
            this.db = this.conn.emit();
            this.db.dbCreate(this.createDatabase.name, { charset: this.createDatabase.charset }); //创建数据库
            this.db = this.conn.emit(false, this.createDatabase.name); //连接数据库
            this.db.tableCreate(this.tableData['tableName'], this.tableData['fields'], {charset: 'utf8mb4'}) //创建数据表
            this.results = {};
            this.doDoatas();
        })
    }

    doDoatas() { //分派任务
        switch(this.datas[0][this.key.name]) {
            case this.key.values[0]: this.addDatas();
                 break;
            case this.key.values[1]: this.deleteDatas();
                 break;
            case this.key.values[2]: this.changeDatas();
                 break;
            case this.key.values[3]: this.searchDatas();
                 break;
            case this.key.values[4]: this.logIN();
                 break;
            case this.key.values[5]: this.register();
                 break;     
        }
        this.results = {};
    }

    addDatas() { //添加数据
        let datas = {};
        for (let [key, value] of Object.entries(this.datas[0])) {
            if(key !== this.key.name) datas[key] = value;
        }
        this.db
            .table(this.tableData['tableName'])
            .insert(datas)
            .then(lastId => {
                if(lastId > 0) this.datas[1].end(JSON.stringify({register: 'OK'}))
            })
    }

    searchDatas(...[datas, key, res1, res2, style]) { //查询数据
        this.db.query(datas).then(result => {
            this.count--;
            console.log(result) //需要重点研究！！！！，如果没有console.log就会报错
            result.length > 0 ? this.results[key] = res1 : this.results[key] = res2;
            if((this.count === 1 && style === 'logIn') || (style === 'register' && this.results[key] === 'NG')) this.datas[1].end(JSON.stringify(this.results));
            else if(style === 'register' && this.results[key] === 'OK') this.addDatas();
        })
    }

    logIN() { //登录验证
        this.count = Object.keys(this.datas[0]).length;
        for (let [key, value] of Object.entries(this.datas[0])) {
            if(key !== this.key.name) this.searchDatas(...[`SELECT * from ${this.tableData['tableName']} WHERE ${key}='${value}'`, key, 'OK', 'NG', 'logIn']);
        }
    }
    
    register() { //注册
        this.count = Object.keys(this.datas[0]).length - 1;
        for (let [key, value] of Object.entries(this.datas[0])) {
            if(key === this.tableData.fields[1].name)
            value.length > 0 ? this.searchDatas(...[`SELECT * from ${this.tableData['tableName']} WHERE ${key}='${value}'`, key, 'NG', 'OK', 'register']) : this.datas[1].end(JSON.stringify({Error: 'NG'}));
        }
    }

}

exports.mysqlDatas = new Mysqli;
/**
 * 使用注意项
 * 1.请导入本模块和mysqli模块
 * 2.obj.mysql.main([datas, res])  datas为get/post请求数据(必须是对象)，res为回调函数中的浏览器请求
 *
*/