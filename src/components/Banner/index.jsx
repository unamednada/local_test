import './Banner.css';

function Banner() {
  return (
    <div
      className="banner"
      data-testid="banner"
    >
      <div className="banner-main">
        <div className="banner-main-left">
          <h1 className="neonText">Welcome, friend</h1>
          <p>
            I&#39;m Gustavo. FullStack Developer
            <em>&</em>
            Systems&#39; Analyst
          </p>
          <h2>main stack</h2>
          <div className="banner-stack-icons frontend">
            <img alt="html5" src="./images/html5.png" />
            <img alt="css3" src="./images/css3.png" />
            <img alt="js" src="./images/javascript.png" />
            <img alt="react" src="./images/react.png" />
            <img alt="redux" src="./images/redux.png" />
            <div className="stack-content">
              Frontend development
            </div>
          </div>
          <div className="banner-stack-icons backend">
            <img alt="node" src="./images/node.png" />
            <img alt="express" src="./images/express.png" />
            <img alt="ts" src="./images/typescript.png" />
            <img alt="sequelize" src="./images/sequelize.png" />
            <img alt="mysql" src="./images/mysql.png" />
            <div className="stack-content">
              Backend development
            </div>
          </div>
          <div className="banner-stack-icons testing">
            <img alt="jest" src="./images/jest.png" />
            <img alt="mocha" src="./images/mocha.png" />
            <img alt="chai" src="./images/chai.svg" />
            <img alt="sinon" src="./images/sinon.png" />
            <img alt="rtl" src="./images/rtl.png" />
            <div className="stack-content">
              Testing
            </div>
          </div>
        </div>
        <img src="./images/profile.jpg" alt="profile" id="main-profile" />
        <div className="banner-main-right">
          <h2>about me</h2>
          <p>
            A soon to be fullstack developer with a background in systems&#39;. I&#39;m currently studying Systems&#39; Analysis and Development at University. I love coding and my most recent professional experiences have been with the development of web applications.
          </p>
          <hr />
          <p>
            With my experience in systems&#39;, I&#39;ve been able to work with a wide range of technologies, from frontend to backend. I&#39;m also familiar with the use of databases and cloud computing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
