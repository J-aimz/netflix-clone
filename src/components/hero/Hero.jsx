import css from './Hero.module.scss'
import IndexSignupForm from '../indexSignupForm/IndexSignupForm';

function Hero() {

  return (
    <>
      <div className={css.hero__con}>
        <div className={css.hero__content}>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h5>
            Ready to watch? Enter your email to create or restart your membership.
          </h5>
          <div className={css.inputs_con}>
           

            <IndexSignupForm />
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero