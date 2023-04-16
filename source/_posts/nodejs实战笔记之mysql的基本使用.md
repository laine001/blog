---
title: nodejs实战笔记-mysql的基本使用
date: 2020-04-24 21:16:31
tags: nodejs
categories: nodejs
---

> 连接

```js
const mysql = require('mysql')

const db = mysql.createConnection({
  host:     '127.0.0.1',
  user:     'root',
  password: 'root',
  database: 'myblog'
})
```

<!-- more -->

> 创建数据库表

```js
db.query(
  `CREATE TABLE IF NOT EXISTS work (
  id INT(10) NOT NULL AUTO_INCREMENT,
  hours DECIMAL(5,2) DEFAULT 0,
  date DATE,
  desc LOGGTEXT,
  PRIMARY KEY(id))`,
  function(err) {
    if (err) throw err
    console.log('server started')
    server.listen(3000, '127.0.0.1')
  }
)
```
> 常用操作

```js
exports.add = (db, req, res) => {
  db.query(
    `ININSERT INTO work (hours, date, desc)
    VALUES (?,?,?)
    [hoursVal,dateval,descVal]`
  )
}
exports.delete = (db, req, res) => {
  db.query(
    `
      DELETE FROM work WHERE id=?
      [idVal]
    `
  )
}
exports.show = (db, req, curId) => {
  const query = `
    SELECT * FROM work
    WHERE archived=?
    ORDER BY date DESC
  `
  const curId = curId ? 1 : 0
  db.query(
    query,
    [curId]
  )
}
```
