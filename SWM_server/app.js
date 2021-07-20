const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json()); //body-parser 사용. 
                            //-> 아개 있어야 성공적으로 요청값을 받을 수 있음. 반드시 라우터 설정 보다 위에 작성
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

//cors 사용
app.use(cors());

/* use router class */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mainpage = require('./routes/mainpage/index');

app.use('/mainpage', mainpage);

app.listen(port, () => console.log(`Listening on port ${port}`)); // 서버 가동
module.exports = app;

