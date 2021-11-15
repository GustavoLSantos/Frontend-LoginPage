import css from "./index.module.css"

export default function login(){


  return (
    <>
    <div className={css.form}>
      <div className={css.b1}></div>
      <div className={css.b2}></div>
      <div className={css.b3}></div>
      <div className={css.b4}></div>
      <h1>Sign In</h1>
      <h6>Sign in to start helping DEVs</h6>
      <div className={css.email}>
        <input type="email" placeholder="E-mail" />
      </div>
      <div className={css.password}>
        <input type="password" placeholder="Password" />
      </div>
      <div className={css.remember}>
        <input type="checkbox"/>Remember me 
        <span>Forgot your password?</span>
        <p></p>
      </div>
      <div className={css.button}>
        <button>Sign in</button>
      </div>
    </div>
      
    </>
  )
}