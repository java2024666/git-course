import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function AboutPage() {
  return (
    <>
    <h2>About</h2>
    <p>Hello there. <br />How are you</p>
    </>
  )
}

function Form() {
  return (
    <div class="container">
        <h1 class="text-center">註冊表單</h1>
        <form id="signup-form">
            <div class="form-group">
                <label for="username">使用者名稱：</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="您的使用者名稱" required></input>
            </div>
            <div class="form-group">
                <label for="password">密碼：</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="您的密碼" required></input>
                <div id="password-error" class="error"></div>
            </div>
            <div class="form-group">
                <label for="location">你來自：</label>
                <select class="form-control" id="location" name="location" required>
                    <option value="台北">台北</option>
                    <option value="台中" selected>台中</option>
                    <option value="台南">台南</option>
                    <option value="高雄">高雄</option>
                </select>
            </div>
            <div class="form-group">
                <label>性別：</label>
                <div class="row">
                    <div class="col-lg-4 col-md-2 col-sm-1">
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="male" name="gender" value="男" required></input>
                            <label class="form-check-label" for="male">男</label>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-2 col-sm-1">
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="female" name="gender" value="女" required></input>
                            <label class="form-check-label" for="female">女</label>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-2 col-sm-1">
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="other" name="gender" value="其他" required></input>
                            <label class="form-check-label" for="other">其他</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label>選擇興趣愛好：</label>
                <div class="row">
                    <div class="col-lg-4 col-md-2 col-sm-1">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="reading" name="hobby" value="閱讀"></input>
                            <label class="form-check-label" for="reading">閱讀</label>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-2 col-sm-1">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="traveling" name="hobby" value="旅行"></input>
                            <label class="form-check-label" for="traveling">旅行</label>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-2 col-sm-1">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="sports" name="hobby" value="運動"></input>
                            <label class="form-check-label" for="sports">運動</label>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-2 col-sm-1">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="music" name="hobby" value="音樂"></input>
                            <label class="form-check-label" for="music">音樂</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="self-intro">自我介紹：</label>
                <textarea class="form-control" id="self-intro" name="self-intro" rows="4" placeholder="請在此輸入自我介紹"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">送出</button>
        </form>
    </div>
  )
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <AboutPage />
      <Form />
      <MyButton />
    </div>
  );
}

